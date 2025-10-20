'use client';

import React from 'react';
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LineChart,
  Line
} from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

interface ControlData {
  area: string;
  iso42001Controls: number;
  iso27001Controls: number;
  overlappingControls: number;
  coveragePercentage: number;
}

interface MaturityData {
  area: string;
  iso27001: number;
  iso42001: number;
  gap: number;
}

const controlData: ControlData[] = [
  {
    area: 'Políticas y Gobernanza',
    iso42001Controls: 8,
    iso27001Controls: 12,
    overlappingControls: 7,
    coveragePercentage: 85
  },
  {
    area: 'Gestión de Recursos',
    iso42001Controls: 6,
    iso27001Controls: 9,
    overlappingControls: 5,
    coveragePercentage: 75
  },
  {
    area: 'Evaluación de Impactos',
    iso42001Controls: 10,
    iso27001Controls: 4,
    overlappingControls: 3,
    coveragePercentage: 60
  },
  {
    area: 'Ciclo de Vida',
    iso42001Controls: 12,
    iso27001Controls: 8,
    overlappingControls: 6,
    coveragePercentage: 70
  },
  {
    area: 'Gestión de Riesgos',
    iso42001Controls: 15,
    iso27001Controls: 18,
    overlappingControls: 16,
    coveragePercentage: 90
  },
  {
    area: 'Monitoreo y Medición',
    iso42001Controls: 7,
    iso27001Controls: 11,
    overlappingControls: 6,
    coveragePercentage: 80
  },
  {
    area: 'Mejora Continua',
    iso42001Controls: 5,
    iso27001Controls: 8,
    overlappingControls: 5,
    coveragePercentage: 85
  },
  {
    area: 'Comunicación y Concienciación',
    iso42001Controls: 6,
    iso27001Controls: 7,
    overlappingControls: 5,
    coveragePercentage: 75
  }
];

const maturityData: MaturityData[] = [
  { area: 'Políticas', iso27001: 90, iso42001: 85, gap: 5 },
  { area: 'Recursos', iso27001: 85, iso42001: 80, gap: 5 },
  { area: 'Riesgos', iso27001: 95, iso42001: 90, gap: 5 },
  { area: 'Controles', iso27001: 88, iso42001: 75, gap: 13 },
  { area: 'Operaciones', iso27001: 82, iso42001: 70, gap: 12 },
  { area: 'Monitoreo', iso27001: 87, iso42001: 78, gap: 9 },
  { area: 'Mejora', iso27001: 85, iso42001: 80, gap: 5 }
];

const detailedControls = [
  {
    category: 'Gestión de Documentación',
    iso42001: ['A.2.1 Políticas de IA', 'A.4.1 Documentación de sistemas', 'A.7.1 Registros de IA'],
    iso27001: ['A.5.1.1 Políticas de seguridad', 'A.5.2.1 Responsabilidades', 'A.8.1.1 Documentación operativa'],
    overlap: 'Alta - Estructura y requisitos similares'
  },
  {
    category: 'Gestión de Recursos Humanos',
    iso42001: ['A.4.2 Competencias', 'A.4.3 Concienciación', 'A.7.2 Formación en IA'],
    iso27001: ['A.7.2.1 Competencias', 'A.7.3.1 Concienciación', 'A.6.3.1 Asignación de responsabilidades'],
    overlap: 'Alta - Enfoque similar en capacitación y responsabilidades'
  },
  {
    category: 'Gestión de Riesgos',
    iso42001: ['A.5.1 Evaluación de impactos', 'A.5.2 Análisis de riesgos de IA', 'A.7.3 Monitoreo de riesgos'],
    iso27001: ['A.6.1.1 Planificación de acciones', 'A.6.1.3 Evaluación de riesgos', 'A.6.1.4 Objetivos de seguridad'],
    overlap: 'Media - Metodología similar pero enfoque diferente (riesgos de IA vs seguridad)'
  },
  {
    category: 'Control de Acceso',
    iso42001: ['A.7.4 Control de acceso a sistemas IA', 'A.7.5 Autenticación de usuarios'],
    iso27001: ['A.8.2.1 Política de control de acceso', 'A.8.2.3 Gestión de derechos de acceso', 'A.8.3.1 Autenticación'],
    overlap: 'Alta - Controles técnicos muy similares'
  },
  {
    category: 'Gestión de Proveedores',
    iso42001: ['A.8.1 Gestión de proveedores de IA', 'A.8.2 Evaluación de terceros'],
    iso27001: ['A.8.1.1 Política de proveedores', 'A.8.1.2 Acuerdos con proveedores', 'A.8.1.3 Gestión de cambios'],
    overlap: 'Alta - Estructura de gestión de proveedores similar'
  },
  {
    category: 'Monitoreo y Auditoría',
    iso42001: ['A.9.1 Monitoreo de desempeño', 'A.9.2 Auditorías internas', 'A.9.3 Revisión por dirección'],
    iso27001: ['A.9.1.1 Monitoreo', 'A.9.2.1 Auditorías internas', 'A.9.3.1 Revisión por dirección'],
    overlap: 'Muy Alta - Casi idénticos en estructura y requisitos'
  },
  {
    category: 'Gestión de Incidentes',
    iso42001: ['A.7.6 Respuesta a incidentes de IA', 'A.7.7 Aprendizaje de incidentes'],
    iso27001: ['A.8.16.1 Gestión de incidentes', 'A.8.16.2 Lecciones aprendidas'],
    overlap: 'Alta - Procesos similares con enfoque específico'
  },
  {
    category: 'Mejora Continua',
    iso42001: ['A.10.1 No conformidades', 'A.10.2 Acciones correctivas', 'A.10.3 Mejora continua'],
    iso27001: ['A.10.1.1 No conformidades', 'A.10.1.2 Acciones correctivas', 'A.10.2.1 Mejora continua'],
    overlap: 'Muy Alta - Ciclo PDCA idéntico'
  }
];

export default function RadarChartAnalysis() {
  const getOverlapColor = (overlap: string) => {
    if (overlap.includes('Muy Alta')) return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
    if (overlap.includes('Alta')) return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
    if (overlap.includes('Media')) return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
    return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
  };

  return (
    <div className="space-y-8">
      {/* Radar Chart Section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Análisis de Cobertura - Gráfica de Radar</CardTitle>
          <CardDescription>
            Visualización comparativa de la cobertura de controles entre ISO 27001 e ISO 42001
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="h-96">
              <h3 className="text-lg font-semibold mb-4 text-center">Número de Controles por Área</h3>
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={controlData}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="area" />
                  <PolarRadiusAxis angle={0} domain={[0, 20]} />
                  <Radar
                    name="ISO 42001"
                    dataKey="iso42001Controls"
                    stroke="#6366f1"
                    fill="#6366f1"
                    fillOpacity={0.3}
                    strokeWidth={2}
                  />
                  <Radar
                    name="ISO 27001"
                    dataKey="iso27001Controls"
                    stroke="#10b981"
                    fill="#10b981"
                    fillOpacity={0.3}
                    strokeWidth={2}
                  />
                  <Legend />
                </RadarChart>
              </ResponsiveContainer>
            </div>
            
            <div className="h-96">
              <h3 className="text-lg font-semibold mb-4 text-center">Porcentaje de Cobertura</h3>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={controlData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="area" angle={-45} textAnchor="end" height={80} />
                  <YAxis domain={[0, 100]} />
                  <Tooltip formatter={(value) => [`${value}%`, 'Cobertura']} />
                  <Bar dataKey="coveragePercentage" fill="#3b82f6" name="Cobertura de ISO 27001 sobre ISO 42001" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Maturity Comparison */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Comparación de Madurez por Área</CardTitle>
          <CardDescription>
            Nivel de madurez alcanzable con cada estándar en diferentes áreas de gestión
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={maturityData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="area" />
                <YAxis domain={[0, 100]} />
                <Tooltip formatter={(value) => [`${value}%`, 'Madurez']} />
                <Line
                  type="monotone"
                  dataKey="iso27001"
                  stroke="#10b981"
                  strokeWidth={3}
                  name="ISO 27001"
                  dot={{ fill: '#10b981', strokeWidth: 2, r: 6 }}
                />
                <Line
                  type="monotone"
                  dataKey="iso42001"
                  stroke="#6366f1"
                  strokeWidth={3}
                  name="ISO 42001"
                  dot={{ fill: '#6366f1', strokeWidth: 2, r: 6 }}
                />
                <Line
                  type="monotone"
                  dataKey="gap"
                  stroke="#ef4444"
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  name="Brecha"
                  dot={{ fill: '#ef4444', strokeWidth: 2, r: 4 }}
                />
                <Legend />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Detailed Controls Comparison */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Análisis Detallado de Controles Similares</CardTitle>
          <CardDescription>
            Comparación exhaustiva de controles específicos y su nivel de superposición
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {detailedControls.map((control, index) => (
              <div key={index} className="border rounded-lg p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{control.category}</h3>
                  <Badge className={getOverlapColor(control.overlap)}>
                    {control.overlap}
                  </Badge>
                </div>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-4">
                    <h4 className="font-medium text-indigo-800 dark:text-indigo-200 mb-2">ISO 42001</h4>
                    <ul className="space-y-1 text-sm text-indigo-700 dark:text-indigo-300">
                      {control.iso42001.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-lg p-4">
                    <h4 className="font-medium text-emerald-800 dark:text-emerald-200 mb-2">ISO 27001</h4>
                    <ul className="space-y-1 text-sm text-emerald-700 dark:text-emerald-300">
                      {control.iso27001.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                    <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Análisis de Superposición</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">{control.overlap}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Summary Statistics */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Resumen Estadístico</CardTitle>
          <CardDescription>
            Métricas clave sobre la relación entre ambos estándares
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">78%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Cobertura Promedio</div>
              <Progress value={78} className="mt-2" />
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">69</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Controles ISO 27001</div>
              <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">Analizados</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-2">54</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Controles ISO 42001</div>
              <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">Analizados</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">42</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Controles Superpuestos</div>
              <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">Similares o idénticos</div>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Conclusiones Clave</h3>
            <ul className="space-y-2 text-sm text-blue-700 dark:text-blue-300">
              <li>• ISO 27001 proporciona una base sólida con 78% de cobertura promedio</li>
              <li>• Las áreas de mayor superposición son: Monitoreo y Auditoría, Mejora Continua, y Gestión de Documentación</li>
              <li>• Las áreas que requieren mayor extensión son: Evaluación de Impactos y Ciclo de Vida específico de IA</li>
              <li>• La implementación conjunta puede reducir el esfuerzo en un 60-70% comparado con implementaciones separadas</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}