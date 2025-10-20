'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const extendedComparisonData = [
  {
    area: "Gobernanza y Políticas",
    iso42001Controls: "A.2.2 Política de IA<br>A.3.2 Roles y responsabilidades de IA<br>A.3.3 Informe de inquietudes",
    iso27001Controls: "5.1 Políticas de SI<br>5.2 Roles y responsabilidades de SI<br>5.26 Gestión de incidentes de SI",
    analysis: "Sinergia: Los procesos para definir políticas, asignar roles y gestionar reportes son los mismos.<br><br>Diferencia: 42001 se enfoca en la gobernanza ética y de responsabilidad de la IA. 27001 se enfoca en la protección de activos de información. El \"Informe de inquietudes\" (A.3.3) es para impactos éticos, no para incidentes de seguridad."
  },
  {
    area: "Gestión de Recursos y Activos",
    iso42001Controls: "A.4.2 Documentación de recursos<br>A.4.3 Recursos de datos<br>A.4.4 Recursos de herramientas y modelos",
    iso27001Controls: "5.9 Inventario de información y activos<br>5.12 Clasificación de la información<br>5.13 Etiquetado de la información",
    analysis: "Sinergia: El proceso de inventario y clasificación de activos es la base.<br><br>Diferencia: 42001 exige inventariar nuevos tipos de activos: datasets, modelos de ML, algoritmos. La clasificación no es solo por confidencialidad, sino por riesgo de impacto, sesgo y criticidad del sistema de IA."
  },
  {
    area: "Evaluación de Impacto y Riesgos",
    iso42001Controls: "A.5.2 Proceso de evaluación de impactos<br>A.5.4 Impactos en individuos<br>A.5.5 Impactos sociales",
    iso27001Controls: "Cláusula 6.1.2 Proceso de apreciación de riesgos de SI<br>Cláusula 8.2 Apreciación de riesgos de SI",
    analysis: "Sinergia: La metodología de evaluación de riesgos (identificar, analizar, evaluar) es una base excelente.<br><br>Diferencia: 42001 introduce la Evaluación de Impacto de IA (AIIA), que es un proceso único y nuevo. Se enfoca en daños a individuos y la sociedad (discriminación, equidad, etc.), un concepto mucho más amplio que los riesgos para la C-I-D de la información."
  },
  {
    area: "Ciclo de Vida del Desarrollo",
    iso42001Controls: "A.6.2.2 Requisitos<br>A.6.2.4 Verificación y validación<br>A.6.1.2 Objetivos de desarrollo responsable",
    iso27001Controls: "8.25 Desarrollo seguro<br>8.26 Requisitos de seguridad<br>8.29 Pruebas de seguridad",
    analysis: "Sinergia: Las fases del ciclo de vida del software (SDLC) son las mismas.<br><br>Diferencia: 42001 introduce el concepto de \"desarrollo responsable\". La validación no es solo si el software está libre de bugs de seguridad, sino si es justo, explicable y robusto ante datos imprevistos."
  },
  {
    area: "Gestión y Calidad de Datos",
    iso42001Controls: "A.7.4 Calidad de los datos<br>A.7.5 Procedencia de los datos<br>A.7.6 Preparación de datos",
    iso27001Controls: "8.11 Enmascaramiento de datos<br>8.12 Prevención de fuga de datos<br>5.14 Transferencia de información",
    analysis: "Sinergia: Ambos manejan datos de forma controlada.<br><br>Diferencia: 27001 se enfoca en la protección de los datos (confidencialidad, integridad). 42001 se enfoca en la calidad, idoneidad y representatividad de los datos para evitar que el modelo de IA aprenda sesgos o tome decisiones erróneas."
  },
  {
    area: "Relaciones con Terceros",
    iso42001Controls: "A.10.3 Proveedores<br>A.10.4 Clientes",
    iso27001Controls: "5.19 Relaciones con proveedores<br>5.20 Acuerdos con proveedores<br>5.21 Cadena de suministro de TIC",
    analysis: "Sinergia: El proceso de debida diligencia y gestión contractual con proveedores es casi idéntico.<br><br>Diferencia: 42001 exige que la evaluación de proveedores incluya su capacidad para proporcionar IA responsable y transparente. Los contratos deben incluir cláusulas sobre explicabilidad, sesgo y responsabilidad por las decisiones de la IA."
  }
];

export default function ExtendedComparisonTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Tabla 1: Comparativa Extendida de Controles</CardTitle>
        <CardDescription>
          Análisis detallado con mayor granularidad de la relación entre controles de ISO/IEC 42001:2023 e ISO/IEC 27001:2022
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">
                  Área Temática
                </th>
                <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">
                  Controles Clave ISO/IEC 42001
                </th>
                <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">
                  Controles Clave ISO/IEC 27001:2022
                </th>
                <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">
                  Análisis de Sinergia y Diferencia de Enfoque
                </th>
              </tr>
            </thead>
            <tbody>
              {extendedComparisonData.map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-white dark:bg-gray-900' : 'bg-gray-50 dark:bg-gray-800'}>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-4 font-medium text-gray-900 dark:text-white">
                    {item.area}
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-4 text-gray-700 dark:text-gray-300">
                    <span dangerouslySetInnerHTML={{ __html: item.iso42001Controls }} />
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-4 text-gray-700 dark:text-gray-300">
                    <span dangerouslySetInnerHTML={{ __html: item.iso27001Controls }} />
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-4 text-gray-700 dark:text-gray-300">
                    <span dangerouslySetInnerHTML={{ __html: item.analysis }} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}