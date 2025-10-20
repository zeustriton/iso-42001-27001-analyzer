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

// Análisis basado en la información correcta proporcionada por el usuario
// Tabla 1: Mapeo y Comparación de Controles ISO 42001 vs. ISO 27001:2022
const annexAComparison = [
  {
    iso42001Clause: "Gobernanza y Políticas",
    iso42001Controls: [
      "A.2.2 Política de IA",
      "A.2.4 Revisión de la política de IA",
      "A.3.2 Roles y responsabilidades de IA"
    ],
    iso27001Clause: "ISO 27001:2022 - Gobernanza",
    iso27001Controls: [
      "5.1 Políticas para la seguridad de la información",
      "5.2 Roles y responsabilidades en seguridad de la información",
      "5.3 Segregación de funciones"
    ],
    relationshipType: "Superposición",
    similarity: "Alta",
    explanation: "Similitud: Ambas exigen políticas documentadas, revisadas y la asignación clara de roles y responsabilidades. Diferencia: El enfoque de ISO 42001 es la gobernanza del desarrollo y uso responsable de la IA. El de ISO 27001 es la gobernanza para la protección de la información."
  },
  {
    iso42001Clause: "Gestión de Recursos y Activos",
    iso42001Controls: [
      "A.4.2 Documentación de recursos",
      "A.4.3 Recursos de datos",
      "A.4.4 Recursos de herramientas",
      "A.4.5 Sistema y recursos de cómputo",
      "A.4.6 Recursos humanos"
    ],
    iso27001Clause: "ISO 27001:2022 - Gestión de Activos",
    iso27001Controls: [
      "5.9 Inventario de información y otros activos asociados",
      "5.10 Uso aceptable de la información y otros activos asociados",
      "5.12 Clasificación de la información",
      "5.13 Etiquetado de la información"
    ],
    relationshipType: "Extensión",
    similarity: "Media",
    explanation: "Similitud: Ambas requieren inventariar y gestionar los activos/recursos. Diferencia: ISO 42001 se centra en activos específicos de IA: datos de entrenamiento, modelos, algoritmos, y su procedencia. ISO 27001 se enfoca en la clasificación, etiquetado y manejo seguro de todos los activos de información."
  },
  {
    iso42001Clause: "Ciclo de Vida del Desarrollo",
    iso42001Controls: [
      "A.6.2.2 Requisitos y especificaciones del sistema de IA",
      "A.6.2.3 Documentación del diseño y desarrollo",
      "A.6.2.4 Verificación y validación",
      "A.6.2.5 Despliegue del sistema de IA"
    ],
    iso27001Clause: "ISO 27001:2022 - Desarrollo Seguro",
    iso27001Controls: [
      "8.25 Desarrollo seguro del ciclo de vida",
      "8.26 Requisitos de seguridad para el desarrollo y la adquisición",
      "8.28 Codificación segura",
      "8.29 Pruebas de seguridad en el desarrollo y la aceptación"
    ],
    relationshipType: "Extensión",
    similarity: "Media",
    explanation: "Similitud: Ambas establecen controles a lo largo del ciclo de vida (requisitos, diseño, pruebas, despliegue). Diferencia: ISO 42001 se enfoca en el desarrollo responsable: validar que la IA cumpla sus objetivos éticos. ISO 27001 se enfoca en el desarrollo seguro: prevenir, detectar y corregir vulnerabilidades de seguridad."
  },
  {
    iso42001Clause: "Gestión de Datos",
    iso42001Controls: [
      "A.7.2 Datos para el desarrollo y mejora del sistema de IA",
      "A.7.4 Calidad de los datos",
      "A.7.5 Procedencia de los datos",
      "A.7.6 Preparación de datos"
    ],
    iso27001Clause: "ISO 27001:2022 - Protección de Datos",
    iso27001Controls: [
      "8.10 Supresión de la información",
      "8.11 Enmascaramiento de datos",
      "8.12 Prevención de la fuga de datos (DLP)",
      "5.14 Transferencia de información"
    ],
    relationshipType: "Complementario",
    similarity: "Baja",
    explanation: "Similitud: Ambas tratan sobre el manejo de datos. Diferencia: ISO 42001 se preocupa por la calidad, idoneidad, sesgo y procedencia de los datos para que la IA funcione correctamente y de forma justa. ISO 27001 se preocupa por proteger la confidencialidad e integridad de los datos (borrado seguro, prevención de fugas, enmascaramiento)."
  },
  {
    iso42001Clause: "Operación y Monitoreo",
    iso42001Controls: [
      "A.6.2.6 Operación y monitoreo del sistema de IA",
      "A.6.2.8 Grabación de registros de eventos"
    ],
    iso27001Clause: "ISO 27001:2022 - Monitoreo y Registro",
    iso27001Controls: [
      "8.16 Monitoreo de actividades",
      "8.15 Registro (Logging)",
      "8.23 Filtrado web",
      "8.7 Protección contra malware"
    ],
    relationshipType: "Extensión",
    similarity: "Alta",
    explanation: "Similitud: Ambas requieren monitorear los sistemas y registrar eventos para análisis posterior. Diferencia: ISO 42001 monitorea el desempeño de la IA respecto a sus objetivos (¿sigue siendo preciso y justo?). ISO 27001 monitorea en busca de actividades anómalas y amenazas de seguridad."
  },
  {
    iso42001Clause: "Relaciones con Terceros",
    iso42001Controls: [
      "A.10.3 Proveedores",
      "A.10.4 Clientes",
      "A.10.2 Asignar responsabilidades"
    ],
    iso27001Clause: "ISO 27001:2022 - Gestión de Proveedores",
    iso27001Controls: [
      "5.19 Seguridad de la información en las relaciones con proveedores",
      "5.20 Abordaje de la seguridad de la información en los acuerdos con proveedores",
      "5.21 Gestión de la seguridad de la información en la cadena de suministro de TIC"
    ],
    relationshipType: "Superposición",
    similarity: "Muy Alta",
    explanation: "Similitud: Ambas normas exigen gestionar los riesgos asociados a proveedores y la cadena de suministro. Diferencia: ISO 42001 se asegura de que los proveedores de IA cumplan con los principios de desarrollo responsable de la organización. ISO 27001 se asegura de que los proveedores cumplan con los requisitos de seguridad de la información."
  }
];

// Tabla 2: Controles Únicos y Especializados
const uniqueControls = {
  iso42001Unique: [
    {
      control: "A.3.3 Informe de inquietudes",
      description: "Crea un canal específico para reportar preocupaciones sobre el impacto de la IA."
    },
    {
      control: "A.5 Evaluación de los impactos de los sistemas de IA",
      description: "Control central y novedoso. Exige evaluar el impacto potencial en individuos, grupos y la sociedad (sesgo, equidad, etc.)."
    },
    {
      control: "A.6.1.2 Objetivos para el desarrollo responsable del sistema de IA",
      description: "Requiere definir y documentar objetivos éticos y de responsabilidad."
    },
    {
      control: "A.8 Información para las partes interesadas de los sistemas de IA",
      description: "Controles para garantizar la transparencia hacia usuarios y otras partes afectadas."
    },
    {
      control: "A.9.3 Objetivos para el uso responsable del sistema de IA",
      description: "Define los objetivos que deben guiar la utilización de sistemas de IA."
    },
    {
      control: "A.9.4 Uso previsto del sistema de IA",
      description: "Control para asegurar que la IA se utilice para el propósito definido y documentado."
    }
  ],
  iso27001Unique: [
    {
      category: "Tema 6: Controles de Personas",
      controls: ["6.3 Verificación de antecedentes", "6.7 Trabajo remoto"]
    },
    {
      category: "Tema 7: Controles Físicos",
      controls: ["7.2 Perímetros de seguridad física", "7.4 Monitoreo de la seguridad física", "7.10 Almacenamiento seguro"]
    },
    {
      category: "Tema 8: Controles Tecnológicos",
      controls: [
        "8.1 Dispositivos de punto final del usuario",
        "8.5 Gestión de derechos de acceso",
        "8.9 Gestión de la configuración",
        "8.19 Instalación de software en sistemas operativos",
        "8.20 Seguridad de las redes",
        "8.24 Uso de la criptografía"
      ]
    },
    {
      category: "Controles Específicos",
      controls: [
        "5.23 Seguridad de la información para el uso de servicios en la nube",
        "5.31 Preparación de las TIC para la continuidad del negocio"
      ]
    }
  ]
};

const coverageData = [
  { area: "Gobernanza", coverage: 85, controls42001: 3, controls27001: 3, overlapping: 3 },
  { area: "Recursos", coverage: 70, controls42001: 5, controls27001: 4, overlapping: 2 },
  { area: "Ciclo Vida", coverage: 75, controls42001: 4, controls27001: 4, overlapping: 3 },
  { area: "Datos", coverage: 25, controls42001: 4, controls27001: 4, overlapping: 1 },
  { area: "Operación", coverage: 80, controls42001: 2, controls27001: 4, overlapping: 2 },
  { area: "Terceros", coverage: 95, controls42001: 3, controls27001: 3, overlapping: 3 }
];

const getRelationshipColor = (relationship: string) => {
  switch (relationship) {
    case "Superposición": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
    case "Extensión": return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
    case "Complementario": return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200";
    case "Único": return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
    default: return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200";
  }
};

const getSimilarityColor = (similarity: string) => {
  switch (similarity) {
    case "Muy Alta": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
    case "Alta": return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
    case "Media": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
    case "Baja": return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200";
    case "Nula": return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
    default: return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200";
  }
};

export default function EnhancedComparison() {
  return (
    <div className="space-y-8">
      {/* Explicación del concepto de Superposición */}
      <Card className="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="text-2xl text-blue-800 dark:text-blue-200">
            ¿Qué significa "Superposición" en este análisis?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 text-blue-700 dark:text-blue-300">
            <p>
              <strong>Superposición</strong> se refiere al grado en que los controles y requisitos de ISO 27001 
              pueden ser aplicados directamente o con mínimas modificaciones para cumplir con los requisitos de ISO 42001.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Tipos de Relación:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• <strong>Superposición:</strong> Controles casi idénticos en ambos estándares</li>
                  <li>• <strong>Extensión:</strong> ISO 42001 amplía controles existentes de ISO 27001</li>
                  <li>• <strong>Complementario:</strong> Controles que se complementan entre sí</li>
                  <li>• <strong>Único:</strong> Controles exclusivos de ISO 42001</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Niveles de Similitud:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• <strong>Muy Alta (95-100%):</strong> Controles prácticamente idénticos</li>
                  <li>• <strong>Alta (80-94%):</strong> Controles muy similares con mínimas diferencias</li>
                  <li>• <strong>Media (50-79%):</strong> Controles con estructura similar pero enfoques diferentes</li>
                  <li>• <strong>Baja (20-49%):</strong> Controles con algunas similitudes básicas</li>
                  <li>• <strong>Nula (0-19%):</strong> Controles sin relación directa</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Análisis Comparativo Detallado */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Tabla 1: Mapeo y Comparación de Controles</CardTitle>
          <CardDescription>
            Comparación detallada basada en los controles de ISO/IEC 42001:2023 e ISO/IEC 27001:2022
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {annexAComparison.map((item, index) => (
              <div key={index} className="border rounded-lg p-6 space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-lg font-semibold flex-1">{item.iso42001Clause}</h3>
                  <Badge className={getRelationshipColor(item.relationshipType)}>
                    {item.relationshipType}
                  </Badge>
                  <Badge className={getSimilarityColor(item.similarity)}>
                    Similitud: {item.similarity}
                  </Badge>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-4">
                    <h4 className="font-medium text-indigo-800 dark:text-indigo-200 mb-2">ISO 42001</h4>
                    <ul className="space-y-1 text-sm text-indigo-700 dark:text-indigo-300">
                      {item.iso42001Controls.map((control, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></span>
                          {control}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-lg p-4">
                    <h4 className="font-medium text-emerald-800 dark:text-emerald-200 mb-2">{item.iso27001Clause}</h4>
                    <ul className="space-y-1 text-sm text-emerald-700 dark:text-emerald-300">
                      {item.iso27001Controls.map((control, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></span>
                          {control}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                  <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Análisis de Relación</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{item.explanation}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Controles Únicos */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Controles Únicos ISO 42001 */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-indigo-600 dark:text-indigo-400">
              Controles Exclusivos ISO 42001
            </CardTitle>
            <CardDescription>
              Controles que definen el enfoque único de la gestión de IA
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {uniqueControls.iso42001Unique.map((item, index) => (
                <div key={index} className="border-l-4 border-indigo-500 pl-4">
                  <h4 className="font-semibold text-indigo-800 dark:text-indigo-200">{item.control}</h4>
                  <p className="text-sm text-indigo-700 dark:text-indigo-300 mt-1">{item.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Controles Únicos ISO 27001 */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-emerald-600 dark:text-emerald-400">
              Controles Exclusivos ISO 27001
            </CardTitle>
            <CardDescription>
              Controles especializados en seguridad de la información
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {uniqueControls.iso27001Unique.map((category, index) => (
                <div key={index} className="border-l-4 border-emerald-500 pl-4">
                  <h4 className="font-semibold text-emerald-800 dark:text-emerald-200">{category.category}</h4>
                  <ul className="text-sm text-emerald-700 dark:text-emerald-300 mt-2 space-y-1">
                    {category.controls.map((control, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></span>
                        {control}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Gráficos de Cobertura */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Gráfico de Radar */}
        <Card>
          <CardHeader>
            <CardTitle>Análisis de Cobertura por Área</CardTitle>
            <CardDescription>
              Porcentaje de superposición entre controles de ISO 42001 e ISO 27001
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={400}>
              <RadarChart data={coverageData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="area" tick={{ fontSize: 12 }} />
                <PolarRadiusAxis domain={[0, 100]} />
                <Radar
                  name="Cobertura"
                  dataKey="coverage"
                  stroke="#3b82f6"
                  fill="#3b82f6"
                  fillOpacity={0.3}
                />
                <Legend />
              </RadarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Gráfico de Barras */}
        <Card>
          <CardHeader>
            <CardTitle>Distribución de Controles</CardTitle>
            <CardDescription>
              Comparación del número de controles por área entre ambos estándares
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={coverageData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="area" 
                  angle={-45}
                  textAnchor="end"
                  height={100}
                  tick={{ fontSize: 10 }}
                />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="controls42001" fill="#6366f1" name="ISO 42001" />
                <Bar dataKey="controls27001" fill="#10b981" name="ISO 27001" />
                <Bar dataKey="overlapping" fill="#f59e0b" name="Superposición" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Resumen Estadístico */}
      <Card>
        <CardHeader>
          <CardTitle>Resumen Estadístico</CardTitle>
          <CardDescription>
            Análisis cuantitativo de la relación entre ISO 42001 e ISO 27001
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">21</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Grupos de Controles Analizados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400">72%</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Cobertura Promedio</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">14</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Superposición Directa</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">50-60%</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Potencial de Reducción de Esfuerzo</div>
            </div>
          </div>
          
          <div className="mt-6 space-y-4">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">Áreas de Alta Sinergia</span>
                <span className="text-sm text-gray-600 dark:text-gray-300">Terceros (95%), Gobernanza (85%)</span>
              </div>
              <Progress value={90} className="h-2" />
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">Áreas de Extensión Necesaria</span>
                <span className="text-sm text-gray-600 dark:text-gray-300">Datos (25%), Impactos (Único)</span>
              </div>
              <Progress value={25} className="h-2" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Beneficios de Implementación Conjunta */}
      <Card className="bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="text-2xl text-green-800 dark:text-green-200">
            Beneficios de la Implementación Conjunta
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-green-800 dark:text-green-200">Eficiencia Operativa</h4>
              <ul className="space-y-2 text-sm text-green-700 dark:text-green-300">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                  Potencial de reducción del 50-60% en esfuerzo de implementación
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                  Procesos integrados de auditoría y revisión
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                  Gestión unificada de riesgos
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 text-green-800 dark:text-green-200">Ventajas Competitivas</h4>
              <ul className="space-y-2 text-sm text-green-700 dark:text-green-300">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                  Posicionamiento como líder en IA responsable
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                  Cumplimiento integral de regulaciones
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                  Mayor confianza de stakeholders
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}