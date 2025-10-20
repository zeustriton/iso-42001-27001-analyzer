'use client';

import React, { useState, useMemo } from 'react';
import { Search, Filter, Eye, Download, Printer } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import controlsData from '../data/controls.json';

interface ControlData {
  id: string;
  category: string;
  iso42001: {
    code: string;
    title: string;
    description: string;
    objective: string;
    keyElements: string[];
    implementationRequirements: string[];
  };
  iso27001: {
    code: string;
    title: string;
    description: string;
    objective: string;
    keyElements: string[];
    implementationRequirements: string[];
  };
  relationship: {
    similarityLevel: string;
    numericValue: number;
    synergy: string;
    technicalSimilarities: string[];
    keyDifferences: string[];
  };
  implementationGuidance: {
    leverageFrom27001: string[];
    additionalFor42001: string[];
    integrationTips: string[];
  };
  maturityIndicators: {
    initial: string;
    managed: string;
    defined: string;
    quantitativelyManaged: string;
    optimizing: string;
  };
}

const getSimilarityColor = (level: string) => {
  switch (level) {
    case 'Alto':
      return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
    case 'Medio':
      return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
    case 'Bajo':
      return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
    default:
      return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200';
  }
};

export default function ComparisonTable() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('todas');
  const [filterSimilarity, setFilterSimilarity] = useState('todas');

  const filteredControls = useMemo(() => {
    return (controlsData as ControlData[]).filter((control) => {
      const matchesSearch = 
        control.iso42001.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        control.iso27001.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        control.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        control.iso42001.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        control.iso27001.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory = filterCategory === 'todas' || control.category === filterCategory;
      const matchesSimilarity = filterSimilarity === 'todas' || control.relationship.similarityLevel === filterSimilarity;

      return matchesSearch && matchesCategory && matchesSimilarity;
    });
  }, [searchTerm, filterCategory, filterSimilarity]);

  const categories = Array.from(new Set((controlsData as ControlData[]).map(c => c.category)));
  const similarityLevels = Array.from(new Set((controlsData as ControlData[]).map(c => c.relationship.similarityLevel)));

  const handlePrint = () => {
    window.print();
  };

  const handleExportCSV = () => {
    const csvContent = [
      ['Categoría', 'ISO 42001 Código', 'ISO 42001 Título', 'ISO 27001 Código', 'ISO 27001 Título', 'Nivel de Similitud', 'Diferencias Clave'],
      ...filteredControls.map(control => [
        control.category,
        control.iso42001.code,
        control.iso42001.title,
        control.iso27001.code,
        control.iso27001.title,
        control.relationship.similarityLevel,
        control.relationship.keyDifferences.join('; ')
      ])
    ].map(row => row.map(cell => `"${cell}"`).join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'iso42001_vs_iso27001_comparativa.csv';
    link.click();
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <CardTitle className="text-2xl">Tabla Comparativa de Controles</CardTitle>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={handlePrint}>
              <Printer className="h-4 w-4 mr-2" />
              Imprimir
            </Button>
            <Button variant="outline" size="sm" onClick={handleExportCSV}>
              <Download className="h-4 w-4 mr-2" />
              Exportar CSV
            </Button>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Buscar controles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <Select value={filterCategory} onValueChange={setFilterCategory}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Categoría" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="todas">Todas las categorías</SelectItem>
              {categories.map(category => (
                <SelectItem key={category} value={category}>{category}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          
          <Select value={filterSimilarity} onValueChange={setFilterSimilarity}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Similitud" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="todas">Todos los niveles</SelectItem>
              {similarityLevels.map(level => (
                <SelectItem key={level} value={level}>{level}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      
      <CardContent>
        <ScrollArea className="h-[600px]">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[120px]">Categoría</TableHead>
                <TableHead className="w-[100px]">ISO 42001</TableHead>
                <TableHead>Descripción</TableHead>
                <TableHead className="w-[100px]">ISO 27001</TableHead>
                <TableHead>Descripción</TableHead>
                <TableHead className="w-[120px]">Similitud</TableHead>
                <TableHead className="w-[80px]">Detalles</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredControls.map((control) => (
                <TableRow key={control.id}>
                  <TableCell>
                    <Badge variant="secondary">{control.category}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="font-semibold">{control.iso42001.code}</div>
                    <div className="text-sm text-muted-foreground">{control.iso42001.title}</div>
                  </TableCell>
                  <TableCell>
                    <p className="text-sm">{control.iso42001.description}</p>
                  </TableCell>
                  <TableCell>
                    <div className="font-semibold">{control.iso27001.code}</div>
                    <div className="text-sm text-muted-foreground">{control.iso27001.title}</div>
                  </TableCell>
                  <TableCell>
                    <p className="text-sm">{control.iso27001.description}</p>
                  </TableCell>
                  <TableCell>
                    <Badge className={getSimilarityColor(control.relationship.similarityLevel)}>
                      {control.relationship.similarityLevel}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl max-h-[80vh]">
                        <DialogHeader>
                          <DialogTitle className="text-xl">
                            {control.category} - {control.iso42001.code} vs {control.iso27001.code}
                          </DialogTitle>
                        </DialogHeader>
                        <ScrollArea className="max-h-[60vh]">
                          <div className="space-y-6">
                            {/* ISO 42001 Details */}
                            <div className="border rounded-lg p-4">
                              <h3 className="font-semibold text-lg mb-3 text-blue-600">
                                ISO/IEC 42001 - {control.iso42001.code}
                              </h3>
                              <h4 className="font-medium mb-2">{control.iso42001.title}</h4>
                              <p className="text-sm text-muted-foreground mb-3">{control.iso42001.description}</p>
                              <p className="text-sm mb-3"><strong>Objetivo:</strong> {control.iso42001.objective}</p>
                              <div className="mb-3">
                                <h5 className="font-medium mb-2">Elementos Clave:</h5>
                                <ul className="list-disc list-inside text-sm space-y-1">
                                  {control.iso42001.keyElements.map((element, idx) => (
                                    <li key={idx}>{element}</li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <h5 className="font-medium mb-2">Requisitos de Implementación:</h5>
                                <ul className="list-disc list-inside text-sm space-y-1">
                                  {control.iso42001.implementationRequirements.map((req, idx) => (
                                    <li key={idx}>{req}</li>
                                  ))}
                                </ul>
                              </div>
                            </div>

                            {/* ISO 27001 Details */}
                            <div className="border rounded-lg p-4">
                              <h3 className="font-semibold text-lg mb-3 text-green-600">
                                ISO/IEC 27001 - {control.iso27001.code}
                              </h3>
                              <h4 className="font-medium mb-2">{control.iso27001.title}</h4>
                              <p className="text-sm text-muted-foreground mb-3">{control.iso27001.description}</p>
                              <p className="text-sm mb-3"><strong>Objetivo:</strong> {control.iso27001.objective}</p>
                              <div className="mb-3">
                                <h5 className="font-medium mb-2">Elementos Clave:</h5>
                                <ul className="list-disc list-inside text-sm space-y-1">
                                  {control.iso27001.keyElements.map((element, idx) => (
                                    <li key={idx}>{element}</li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <h5 className="font-medium mb-2">Requisitos de Implementación:</h5>
                                <ul className="list-disc list-inside text-sm space-y-1">
                                  {control.iso27001.implementationRequirements.map((req, idx) => (
                                    <li key={idx}>{req}</li>
                                  ))}
                                </ul>
                              </div>
                            </div>

                            {/* Relationship */}
                            <div className="border rounded-lg p-4">
                              <h3 className="font-semibold text-lg mb-3 text-purple-600">
                                Relación y Similitudes
                              </h3>
                              <div className="mb-3">
                                <Badge className={getSimilarityColor(control.relationship.similarityLevel)}>
                                  Nivel de Similitud: {control.relationship.similarityLevel}
                                </Badge>
                              </div>
                              <p className="text-sm mb-3"><strong>Sinergia:</strong> {control.relationship.synergy}</p>
                              <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                  <h5 className="font-medium mb-2">Similitudes Técnicas:</h5>
                                  <ul className="list-disc list-inside text-sm space-y-1">
                                    {control.relationship.technicalSimilarities.map((sim, idx) => (
                                      <li key={idx}>{sim}</li>
                                    ))}
                                  </ul>
                                </div>
                                <div>
                                  <h5 className="font-medium mb-2">Diferencias Clave:</h5>
                                  <ul className="list-disc list-inside text-sm space-y-1">
                                    {control.relationship.keyDifferences.map((diff, idx) => (
                                      <li key={idx}>{diff}</li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>

                            {/* Implementation Guidance */}
                            <div className="border rounded-lg p-4">
                              <h3 className="font-semibold text-lg mb-3 text-orange-600">
                                Guía de Implementación
                              </h3>
                              <div className="grid md:grid-cols-3 gap-4">
                                <div>
                                  <h5 className="font-medium mb-2">Aprovechar desde 27001:</h5>
                                  <ul className="list-disc list-inside text-sm space-y-1">
                                    {control.implementationGuidance.leverageFrom27001.map((tip, idx) => (
                                      <li key={idx}>{tip}</li>
                                    ))}
                                  </ul>
                                </div>
                                <div>
                                  <h5 className="font-medium mb-2">Adicional para 42001:</h5>
                                  <ul className="list-disc list-inside text-sm space-y-1">
                                    {control.implementationGuidance.additionalFor42001.map((tip, idx) => (
                                      <li key={idx}>{tip}</li>
                                    ))}
                                  </ul>
                                </div>
                                <div>
                                  <h5 className="font-medium mb-2">Consejos de Integración:</h5>
                                  <ul className="list-disc list-inside text-sm space-y-1">
                                    {control.implementationGuidance.integrationTips.map((tip, idx) => (
                                      <li key={idx}>{tip}</li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>

                            {/* Maturity Indicators */}
                            <div className="border rounded-lg p-4">
                              <h3 className="font-semibold text-lg mb-3 text-teal-600">
                                Indicadores de Madurez
                              </h3>
                              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-3">
                                <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded">
                                  <h5 className="font-medium text-sm mb-1">Inicial</h5>
                                  <p className="text-xs text-muted-foreground">{control.maturityIndicators.initial}</p>
                                </div>
                                <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded">
                                  <h5 className="font-medium text-sm mb-1">Gestionado</h5>
                                  <p className="text-xs text-muted-foreground">{control.maturityIndicators.managed}</p>
                                </div>
                                <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded">
                                  <h5 className="font-medium text-sm mb-1">Definido</h5>
                                  <p className="text-xs text-muted-foreground">{control.maturityIndicators.defined}</p>
                                </div>
                                <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded">
                                  <h5 className="font-medium text-sm mb-1">Cuantitativo</h5>
                                  <p className="text-xs text-muted-foreground">{control.maturityIndicators.quantitativelyManaged}</p>
                                </div>
                                <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded">
                                  <h5 className="font-medium text-sm mb-1">Optimizado</h5>
                                  <p className="text-xs text-muted-foreground">{control.maturityIndicators.optimizing}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </ScrollArea>
                      </DialogContent>
                    </Dialog>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ScrollArea>
        
        {filteredControls.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            No se encontraron controles que coincidan con los filtros aplicados.
          </div>
        )}
      </CardContent>
    </Card>
  );
}