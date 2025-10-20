'use client';

import React, { useState } from 'react';
import { 
  Radar, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  ResponsiveContainer,
  Tooltip,
  Legend
} from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Download, Info } from 'lucide-react';
import controlsData from '../data/controls.json';

interface RadarData {
  category: string;
  iso42001: number;
  iso27001: number;
  fullMark: number;
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white dark:bg-gray-800 p-3 border rounded-lg shadow-lg">
        <p className="font-semibold">{label}</p>
        <div className="space-y-1 mt-2">
          {payload.map((entry: any, index: number) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {entry.name}: {entry.value}%
            </p>
          ))}
        </div>
      </div>
    );
  }
  return null;
};

export default function RadarChart() {
  const [selectedView, setSelectedView] = useState('coverage');

  // Calcular datos para el gráfico de radar
  const radarData: RadarData[] = [
    {
      category: 'Políticas',
      iso42001: 100,
      iso27001: 80,
      fullMark: 100
    },
    {
      category: 'Organización',
      iso42001: 100,
      iso27001: 85,
      fullMark: 100
    },
    {
      category: 'Recursos',
      iso42001: 100,
      iso27001: 60,
      fullMark: 100
    },
    {
      category: 'Impactos',
      iso42001: 100,
      iso27001: 55,
      fullMark: 100
    },
    {
      category: 'Ciclo de vida',
      iso42001: 100,
      iso27001: 75,
      fullMark: 100
    }
  ];

  // Datos para el análisis de similitud
  const similarityData = controlsData.map((control: any) => ({
    category: control.category,
    similarity: control.relationship.numericValue * 25, // Convertir a porcentaje
    level: control.relationship.similarityLevel
  }));

  // Datos para el análisis de brechas
  const gapData = radarData.map(item => ({
    category: item.category,
    brecha: item.iso42001 - item.iso27001,
    cobertura: item.iso27001
  }));

  const handleExportChart = () => {
    // Esta función podría implementarse para exportar el gráfico como imagen
    console.log('Exportar gráfico');
  };

  return (
    <div className="space-y-6">
      <Tabs value={selectedView} onValueChange={setSelectedView} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="coverage">Cobertura</TabsTrigger>
          <TabsTrigger value="similarity">Similitud</TabsTrigger>
          <TabsTrigger value="gaps">Análisis de Brechas</TabsTrigger>
        </TabsList>

        <TabsContent value="coverage" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    Cobertura de Controles ISO 27001 sobre ISO 42001
                    <Info className="h-4 w-4 text-muted-foreground" />
                  </CardTitle>
                  <CardDescription>
                    Este gráfico muestra cómo los controles de ISO 27001 cubren los requisitos de ISO 42001 
                    en diferentes categorías. El valor máximo (100%) representa la cobertura completa.
                  </CardDescription>
                </div>
                <Button variant="outline" size="sm" onClick={handleExportChart}>
                  <Download className="h-4 w-4 mr-2" />
                  Exportar
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-[500px]">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={radarData}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="category" />
                    <PolarRadiusAxis 
                      angle={90} 
                      domain={[0, 100]} 
                      tick={{ fontSize: 12 }}
                      tickFormatter={(value) => `${value}%`}
                    />
                    <Radar
                      name="ISO 42001"
                      dataKey="iso42001"
                      stroke="#3b82f6"
                      fill="#3b82f6"
                      fillOpacity={0.1}
                      strokeWidth={2}
                    />
                    <Radar
                      name="ISO 27001"
                      dataKey="iso27001"
                      stroke="#10b981"
                      fill="#10b981"
                      fillOpacity={0.1}
                      strokeWidth={2}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
              
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                    Interpretación del Gráfico
                  </h4>
                  <ul className="text-sm space-y-1 text-blue-700 dark:text-blue-300">
                    <li>• ISO 42001 (azul) representa el 100% en todas las categorías (referencia)</li>
                    <li>• ISO 27001 (verde) muestra el nivel de cobertura actual</li>
                    <li>• Áreas con menor brecha indican mayor sinergia entre estándares</li>
                    <li>• Áreas con mayor brecha requieren controles adicionales específicos para IA</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                    Hallazgos Clave
                  </h4>
                  <ul className="text-sm space-y-1 text-green-700 dark:text-green-300">
                    <li>• <strong>Políticas y Organización:</strong> Alta cobertura (80-85%)</li>
                    <li>• <strong>Ciclo de vida:</strong> Buena cobertura (75%)</li>
                    <li>• <strong>Recursos e Impactos:</strong> Cobertura moderada (55-60%)</li>
                    <li>• <strong>Recomendación:</strong> Enfocar esfuerzos en áreas de menor cobertura</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="similarity" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Análisis de Similitud por Categoría</CardTitle>
              <CardDescription>
                Nivel de similitud técnica entre los controles de ISO 42001 e ISO 27001 en cada categoría.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[500px]">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={similarityData}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="category" />
                    <PolarRadiusAxis 
                      angle={90} 
                      domain={[0, 100]} 
                      tick={{ fontSize: 12 }}
                      tickFormatter={(value) => `${value}%`}
                    />
                    <Radar
                      name="Nivel de Similitud"
                      dataKey="similarity"
                      stroke="#8b5cf6"
                      fill="#8b5cf6"
                      fillOpacity={0.2}
                      strokeWidth={2}
                    />
                    <Tooltip content={<CustomTooltip />} />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
              
              <div className="mt-6">
                <h4 className="font-semibold mb-3">Niveles de Similitud por Categoría</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {similarityData.map((item, index) => (
                    <div key={index} className="border rounded-lg p-3">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">{item.category}</span>
                        <Badge 
                          variant={
                            item.similarity >= 75 ? 'default' : 
                            item.similarity >= 50 ? 'secondary' : 'destructive'
                          }
                        >
                          {item.level}
                        </Badge>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-purple-600 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${item.similarity}%` }}
                        ></div>
                      </div>
                      <div className="text-sm text-muted-foreground mt-1">
                        {item.similarity}% de similitud
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="gaps" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Análisis de Brechas</CardTitle>
              <CardDescription>
                Identificación de las brechas entre ISO 42001 e ISO 27001 por categoría.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[500px]">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={gapData}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="category" />
                    <PolarRadiusAxis 
                      angle={90} 
                      domain={[0, 100]} 
                      tick={{ fontSize: 12 }}
                      tickFormatter={(value) => `${value}%`}
                    />
                    <Radar
                      name="Brecha"
                      dataKey="brecha"
                      stroke="#ef4444"
                      fill="#ef4444"
                      fillOpacity={0.2}
                      strokeWidth={2}
                    />
                    <Radar
                      name="Cobertura"
                      dataKey="cobertura"
                      stroke="#10b981"
                      fill="#10b981"
                      fillOpacity={0.1}
                      strokeWidth={2}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
              
              <div className="mt-6">
                <h4 className="font-semibold mb-3">Recomendaciones por Categoría</h4>
                <div className="space-y-3">
                  {gapData.map((item, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <h5 className="font-medium">{item.category}</h5>
                        <Badge variant={item.brecha > 30 ? 'destructive' : item.brecha > 15 ? 'secondary' : 'default'}>
                          Brecha: {item.brecha}%
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {item.brecha > 30 
                          ? 'Requiere atención inmediata y controles adicionales específicos para IA.'
                          : item.brecha > 15 
                          ? 'Necesita mejoras moderadas y adaptaciones para IA.'
                          : 'Buena cobertura, solo se requieren ajustes menores.'
                        }
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}