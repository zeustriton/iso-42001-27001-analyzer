'use client';

import React, { useState } from 'react';
import { 
  Radar, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  ResponsiveContainer,
  Tooltip
} from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { Download, RefreshCw, Info } from 'lucide-react';

interface MaturityData {
  category: string;
  value: number;
  fullMark: number;
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white dark:bg-gray-800 p-3 border rounded-lg shadow-lg">
        <p className="font-semibold">{label}</p>
        <p className="text-sm text-blue-600">
          Nivel de Implementación: {payload[0].value}%
        </p>
      </div>
    );
  }
  return null;
};

const getMaturityLevel = (value: number) => {
  if (value < 20) return { level: 'Inicial', color: 'bg-red-500', description: 'Procesos ad-hoc o no existentes' };
  if (value < 40) return { level: 'Gestionado', color: 'bg-orange-500', description: 'Procesos repetibles pero no documentados' };
  if (value < 60) return { level: 'Definido', color: 'bg-yellow-500', description: 'Procesos documentados y estandarizados' };
  if (value < 80) return { level: 'Cuantitativo', color: 'bg-blue-500', description: 'Procesos medidos y controlados' };
  return { level: 'Optimizado', color: 'bg-green-500', description: 'Procesos mejorados continuamente' };
};

export default function MaturityModel() {
  const [maturityLevels, setMaturityLevels] = useState({
    politicas: 50,
    organizacion: 45,
    recursos: 30,
    impactos: 25,
    cicloVida: 40
  });

  const radarData: MaturityData[] = [
    { category: 'Políticas', value: maturityLevels.politicas, fullMark: 100 },
    { category: 'Organización', value: maturityLevels.organizacion, fullMark: 100 },
    { category: 'Recursos', value: maturityLevels.recursos, fullMark: 100 },
    { category: 'Impactos', value: maturityLevels.impactos, fullMark: 100 },
    { category: 'Ciclo de vida', value: maturityLevels.cicloVida, fullMark: 100 }
  ];

  const handleSliderChange = (category: keyof typeof maturityLevels, value: number[]) => {
    setMaturityLevels(prev => ({
      ...prev,
      [category]: value[0]
    }));
  };

  const calculateOverallMaturity = () => {
    const values = Object.values(maturityLevels);
    return Math.round(values.reduce((sum, val) => sum + val, 0) / values.length);
  };

  const resetValues = () => {
    setMaturityLevels({
      politicas: 50,
      organizacion: 45,
      recursos: 30,
      impactos: 25,
      cicloVida: 40
    });
  };

  const generatePDFReport = () => {
    // Esta función podría implementarse para generar un PDF con los resultados
    console.log('Generar reporte PDF');
    alert('Funcionalidad de exportación PDF en desarrollo');
  };

  const overallMaturity = calculateOverallMaturity();
  const overallMaturityInfo = getMaturityLevel(overallMaturity);

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="flex items-center gap-2">
                Modelo de Madurez de Implementación
                <Info className="h-4 w-4 text-muted-foreground" />
              </CardTitle>
              <CardDescription>
                Evalúe el nivel de implementación actual de los controles en su organización. 
                Ajuste los sliders para reflejar su situación actual y visualice los resultados en el gráfico.
              </CardDescription>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={resetValues}>
                <RefreshCw className="h-4 w-4 mr-2" />
                Reiniciar
              </Button>
              <Button variant="outline" size="sm" onClick={generatePDFReport}>
                <Download className="h-4 w-4 mr-2" />
                Exportar PDF
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Sliders Section */}
            <div className="space-y-6">
              <div className="text-center mb-6">
                <h3 className="text-lg font-semibold mb-2">Madurez General</h3>
                <div className="flex items-center justify-center gap-4">
                  <div className="text-3xl font-bold text-blue-600">{overallMaturity}%</div>
                  <Badge variant="secondary" className={`${overallMaturityInfo.color} text-white`}>
                    {overallMaturityInfo.level}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  {overallMaturityInfo.description}
                </p>
                <Progress value={overallMaturity} className="mt-3 h-2" />
              </div>

              <Separator />

              <div className="space-y-6">
                {Object.entries(maturityLevels).map(([key, value]) => {
                  const categoryInfo = getMaturityLevel(value);
                  const categoryLabels = {
                    politicas: 'Políticas',
                    organizacion: 'Organización',
                    recursos: 'Recursos',
                    impactos: 'Impactos',
                    cicloVida: 'Ciclo de vida'
                  };
                  
                  return (
                    <div key={key} className="space-y-3">
                      <div className="flex justify-between items-center">
                        <label className="text-sm font-medium">
                          {categoryLabels[key as keyof typeof categoryLabels]}
                        </label>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold text-blue-600">{value}%</span>
                          <Badge variant="outline" className={`${categoryInfo.color} text-white text-xs`}>
                            {categoryInfo.level}
                          </Badge>
                        </div>
                      </div>
                      <Slider
                        value={[value]}
                        onValueChange={(newValue) => handleSliderChange(key as keyof typeof maturityLevels, newValue)}
                        max={100}
                        step={5}
                        className="w-full"
                      />
                      <Progress value={value} className="h-1" />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Radar Chart Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-center">Visualización de Madurez</h3>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={radarData}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="category" tick={{ fontSize: 12 }} />
                    <PolarRadiusAxis 
                      angle={90} 
                      domain={[0, 100]} 
                      tick={{ fontSize: 10 }}
                      tickFormatter={(value) => `${value}%`}
                    />
                    <Radar
                      name="Nivel de Implementación"
                      dataKey="value"
                      stroke="#3b82f6"
                      fill="#3b82f6"
                      fillOpacity={0.2}
                      strokeWidth={2}
                    />
                    <Tooltip content={<CustomTooltip />} />
                  </RadarChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                  Cómo interpretar el gráfico
                </h4>
                <ul className="text-sm space-y-1 text-blue-700 dark:text-blue-300">
                  <li>• Cada eje representa una categoría de controles</li>
                  <li>• El área azul muestra su nivel actual de implementación</li>
                  <li>• Una forma más regular indica madurez balanceada</li>
                  <li>• Valores cercanos al borde (100%) indican madurez avanzada</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recommendations Section */}
      <Card>
        <CardHeader>
          <CardTitle>Recomendaciones de Mejora</CardTitle>
          <CardDescription>
            Basado en su evaluación actual, aquí hay algunas recomendaciones para mejorar su nivel de madurez.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {radarData.map((item, index) => {
              const maturityInfo = getMaturityLevel(item.value);
              const recommendations = {
                'Políticas': [
                  'Documentar políticas formales de IA',
                  'Establecer revisión periódica por dirección',
                  'Integrar consideraciones éticas en políticas existentes'
                ],
                'Organización': [
                  'Definir roles específicos para gobernanza de IA',
                  'Crear comités éticos de IA',
                  'Establecer canales de reporte de incidentes de IA'
                ],
                'Recursos': [
                  'Mantener inventario de activos de IA',
                  'Documentar procedencia de datos',
                  'Evaluar calidad de datos para algoritmos'
                ],
                'Impactos': [
                  'Realizar evaluaciones de impacto social',
                  'Implementar análisis de sesgos algorítmicos',
                  'Establecer mecanismos de mitigación'
                ],
                'Ciclo de vida': [
                  'Definir criterios para cada etapa del ciclo de vida',
                  'Implementar verificaciones éticas',
                  'Documentar decisiones algorítmicas'
                ]
              };
              
              return (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-semibold">{item.category}</h4>
                    <Badge variant="outline" className={`${maturityInfo.color} text-white`}>
                      {maturityInfo.level}
                    </Badge>
                  </div>
                  <div className="mb-3">
                    <Progress value={item.value} className="h-2" />
                    <div className="text-xs text-muted-foreground mt-1">
                      {item.value}% implementado
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h5 className="text-sm font-medium">Próximos pasos:</h5>
                    <ul className="text-xs space-y-1">
                      {recommendations[item.category as keyof typeof recommendations].slice(0, 3).map((rec, idx) => (
                        <li key={idx} className="flex items-start gap-1">
                          <span className="text-blue-600 mt-1">•</span>
                          <span>{rec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}