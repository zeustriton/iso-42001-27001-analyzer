'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const implementationGuideData = [
  {
    iso42001Control: "A.2.2 Política de IA",
    iso27001Control: "5.1 Políticas para la seguridad de la información",
    relationship: "Superposición",
    implementation: "Aproveche su proceso existente. Utilice su marco de políticas actual para crear una nueva política de IA o una sección dedicada. El contenido es nuevo: debe abordar el uso ético, el apetito de riesgo de IA, la transparencia y la responsabilidad."
  },
  {
    iso42001Control: "A.3.2 Roles y responsabilidades de IA",
    iso27001Control: "5.2 Roles y responsabilidades",
    relationship: "Superposición",
    implementation: "Aproveche su matriz de roles (ej. RACI). Defina nuevos roles (ej. Oficial de Ética de IA, Validador de Modelos) o añada responsabilidades de IA a roles existentes. El enfoque es la rendición de cuentas sobre los impactos de la IA."
  },
  {
    iso42001Control: "A.3.3 Informe de inquietudes",
    iso27001Control: "5.26 Gestión de incidentes de SI",
    relationship: "Complementario",
    implementation: "Cree un proceso nuevo, inspirado en su proceso de incidentes. Este canal es para reportar preocupaciones éticas y de impacto (ej. \"el sistema de IA parece discriminar\"), no brechas de seguridad. Debe garantizar la protección del informante."
  },
  {
    iso42001Control: "A.4 Recursos para sistemas de IA",
    iso27001Control: "5.9 Inventario de activos",
    relationship: "Extensión",
    implementation: "Extienda su inventario de activos. Añada nuevas categorías: datasets, modelos de ML, algoritmos. Añada nuevos atributos a estos activos: procedencia de los datos, sesgos conocidos, versión del modelo, etc."
  },
  {
    iso42001Control: "A.5 Evaluación de los impactos de los sistemas de IA",
    iso27001Control: "(Ninguno directo)",
    relationship: "Único / Nuevo",
    implementation: "Este es el principal control nuevo. Debe diseñar y documentar un proceso formal de Evaluación de Impacto de IA (AIIA). No es una evaluación de riesgos de seguridad. Debe evaluar el potencial de daño a individuos, grupos y la sociedad."
  },
  {
    iso42001Control: "A.6 Ciclo de vida del sistema de IA",
    iso27001Control: "8.25 Desarrollo seguro del ciclo de vida",
    relationship: "Extensión",
    implementation: "Integre nuevos hitos en su SDLC existente. Además de las pruebas de seguridad, añada \"puntos de control de responsabilidad\": revisión de sesgos en datos, pruebas de robustez del modelo, validación de la explicabilidad, etc."
  },
  {
    iso42001Control: "A.7 Datos para sistemas de IA",
    iso27001Control: "8.11, 8.12 (Protección de datos)",
    relationship: "Complementario",
    implementation: "Cree nuevos procesos de gestión de datos. Mientras 27001 protege los datos, 42001 se asegura de su calidad y adecuación. Implemente procesos para documentar la procedencia (A.7.5), medir la calidad (A.7.4) y realizar la preparación (A.7.6)."
  },
  {
    iso42001Control: "A.8 Información para las partes interesadas",
    iso27001Control: "(Ninguno directo)",
    relationship: "Único / Nuevo",
    implementation: "Cree nuevos procesos de comunicación. Defina qué información sobre sus sistemas de IA se proporcionará a usuarios, clientes y afectados (ej. \"Usted está interactuando con un sistema de IA\", \"Así es como se tomó esta decisión\"). El objetivo es la transparencia."
  },
  {
    iso42001Control: "A.9 Uso de sistemas de IA",
    iso27001Control: "5.10 Uso aceptable de los activos",
    relationship: "Extensión",
    implementation: "Extienda su política de uso aceptable. Defina claramente los usos permitidos y prohibidos de los sistemas de IA (internos o de terceros) y los objetivos de su uso responsable (ej. aumentar la equidad en un proceso)."
  },
  {
    iso42001Control: "A.10.3 Proveedores",
    iso27001Control: "5.19, 5.20, 5.21 (Gestión de proveedores)",
    relationship: "Superposición",
    implementation: "Actualice su proceso de gestión de proveedores. Añada criterios de IA responsable a su cuestionario de debida diligencia y cláusulas específicas sobre transparencia, auditoría de modelos y responsabilidad en sus contratos."
  }
];

const getRelationshipColor = (relationship: string) => {
  switch (relationship) {
    case "Superposición": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
    case "Extensión": return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
    case "Complementario": return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200";
    case "Único / Nuevo": return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
    default: return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200";
  }
};

export default function ImplementationGuide() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Tabla 2: Guía de Implementación para Organizaciones con ISO 27001</CardTitle>
        <CardDescription>
          Herramienta práctica para aprovechar su Sistema de Gestión de Seguridad de la Información (SGSI) 
          y construir un Sistema de Gestión de IA (AIMS) de manera eficiente
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">
                  Control ISO 42001
                </th>
                <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">
                  Control(es) ISO 27001 Relacionado(s)
                </th>
                <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">
                  Nivel de Cobertura / Relación
                </th>
                <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">
                  Análisis de Implementación: "Si ya tengo ISO 27001, ¿qué debo hacer?"
                </th>
              </tr>
            </thead>
            <tbody>
              {implementationGuideData.map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-white dark:bg-gray-900' : 'bg-gray-50 dark:bg-gray-800'}>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-4 font-medium text-gray-900 dark:text-white">
                    {item.iso42001Control}
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-4 text-gray-700 dark:text-gray-300">
                    {item.iso27001Control}
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-4">
                    <Badge className={getRelationshipColor(item.relationship)}>
                      {item.relationship}
                    </Badge>
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-4 text-gray-700 dark:text-gray-300">
                    {item.implementation}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Nota Importante</h4>
          <p className="text-sm text-blue-700 dark:text-blue-300">
            Esta guía asume que su organización ya tiene implementado ISO 27001. Los controles marcados como 
            "Único / Nuevo" requieren un desarrollo completo desde cero, mientras que los otros pueden 
            aprovechar la infraestructura existente con adaptaciones específicas para la gestión de IA.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}