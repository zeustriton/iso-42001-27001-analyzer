'use client';

import React from 'react';
import { Shield, Brain, ArrowRight, CheckCircle, TrendingUp, Users, FileText, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import EnhancedComparison from '@/components/EnhancedComparison';
import ExtendedComparisonTable from '@/components/ExtendedComparisonTable';
import ImplementationGuide from '@/components/ImplementationGuide';

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Shield className="h-16 w-16 text-blue-600 dark:text-blue-400" />
              <Brain className="h-16 w-16 text-indigo-600 dark:text-indigo-400 ml-4" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              ISO/IEC 42001 vs ISO/IEC 27001
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
              Análisis comparativo entre el primer estándar internacional para sistemas de gestión de IA 
              y el estándar de seguridad de la información
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('#comparativa')}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Ver Comparativa
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('#radar')}
              >
                Análisis Gráfico
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
              La Relación entre ISO 42001 e ISO 27001
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-blue-600" />
                    ISO/IEC 27001
                  </CardTitle>
                  <CardDescription>
                    El estándar internacional para sistemas de gestión de seguridad de la información
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    Proporciona un marco para establecer, implementar, mantener y mejorar continuamente 
                    un sistema de gestión de seguridad de la información.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="h-5 w-5 text-indigo-600" />
                    ISO/IEC 42001
                  </CardTitle>
                  <CardDescription>
                    El primer estándar internacional para sistemas de gestión de inteligencia artificial
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    Establece requisitos para implementar, mantener y mejorar continuamente un sistema 
                    de gestión de IA de manera ética y responsable.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-blue-50 dark:bg-gray-800 rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
                Ventajas de la Combinación
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Estructura Común</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      ISO 42001 se basa en la misma Estructura de Alto Nivel que ISO 27001, lo que significa que 
                      los procesos para las cláusulas 4 a 10 (Contexto, Liderazgo, Planificación, etc.) pueden 
                      integrarse casi por completo, unificando la gobernanza.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <TrendingUp className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Extensión Natural</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Amplía los controles de ISO 27001 con consideraciones específicas de IA
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Curva de Aprendizaje</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      La experiencia en ISO 27001 facilita significativamente la adopción de ISO 42001
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FileText className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Enfoque Integral</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Ambas normas comparten principios de gestión de riesgos y mejora continua
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section id="comparativa" className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                Comparativa Detallada de Controles
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Análisis comparativo exhaustivo de los controles clave entre ISO 42001 e ISO 27001, 
                destacando similitudes, diferencias y áreas de sinergia.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden mb-8">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-blue-600 dark:bg-blue-800">
                    <tr>
                      <th className="px-6 py-4 text-left text-white font-semibold">Área</th>
                      <th className="px-6 py-4 text-left text-white font-semibold">ISO/IEC 42001</th>
                      <th className="px-6 py-4 text-left text-white font-semibold">ISO/IEC 27001</th>
                      <th className="px-6 py-4 text-left text-white font-semibold">Similitudes</th>
                      <th className="px-6 py-4 text-left text-white font-semibold">Diferencias</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                      <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Gobernanza y Políticas</td>
                      <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                        <div className="font-medium">A.2.2, A.2.4, A.3.2</div>
                        <div className="text-sm">Política de IA, revisión, roles y responsabilidades</div>
                      </td>
                      <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                        <div className="font-medium">5.1, 5.2, 5.3</div>
                        <div className="text-sm">Políticas de seguridad, roles, segregación</div>
                      </td>
                      <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                        <div className="text-sm">• Políticas documentadas</div>
                        <div className="text-sm">• Revisión periódica</div>
                        <div className="text-sm">• Asignación de roles</div>
                      </td>
                      <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                        <div className="text-sm">42001: Gobernanza de IA responsable</div>
                        <div className="text-sm">27001: Protección de información</div>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                      <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Recursos y Activos</td>
                      <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                        <div className="font-medium">A.4.2-A.4.6</div>
                        <div className="text-sm">Documentación, datos, herramientas, cómputo, humanos</div>
                      </td>
                      <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                        <div className="font-medium">5.9, 5.10, 5.12, 5.13</div>
                        <div className="text-sm">Inventario, uso aceptable, clasificación, etiquetado</div>
                      </td>
                      <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                        <div className="text-sm">• Inventario de activos</div>
                        <div className="text-sm">• Gestión de recursos</div>
                        <div className="text-sm">• Documentación</div>
                      </td>
                      <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                        <div className="text-sm">42001: Activos específicos de IA</div>
                        <div className="text-sm">27001: Manejo seguro de activos</div>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                      <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Ciclo de Vida</td>
                      <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                        <div className="font-medium">A.6.2.2-A.6.2.5</div>
                        <div className="text-sm">Requisitos, diseño, verificación, despliegue</div>
                      </td>
                      <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                        <div className="font-medium">8.25, 8.26, 8.28, 8.29</div>
                        <div className="text-sm">Desarrollo seguro, requisitos, codificación, pruebas</div>
                      </td>
                      <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                        <div className="text-sm">• Ciclo de vida completo</div>
                        <div className="text-sm">• Requisitos y diseño</div>
                        <div className="text-sm">• Verificación</div>
                      </td>
                      <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                        <div className="text-sm">42001: Desarrollo responsable</div>
                        <div className="text-sm">27001: Desarrollo seguro</div>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                      <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Gestión de Datos</td>
                      <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                        <div className="font-medium">A.7.2, A.7.4-A.7.6</div>
                        <div className="text-sm">Desarrollo, calidad, procedencia, preparación</div>
                      </td>
                      <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                        <div className="font-medium">8.10, 8.11, 8.12, 5.14</div>
                        <div className="text-sm">Supresión, enmascaramiento, DLP, transferencia</div>
                      </td>
                      <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                        <div className="text-sm">• Manejo de datos</div>
                        <div className="text-sm">• Gestión de información</div>
                        <div className="text-sm">• Control de datos</div>
                      </td>
                      <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                        <div className="text-sm">42001: Calidad y sesgo de datos</div>
                        <div className="text-sm">27001: Confidencialidad e integridad</div>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                      <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Operación y Monitoreo</td>
                      <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                        <div className="font-medium">A.6.2.6, A.6.2.8</div>
                        <div className="text-sm">Operación, monitoreo, registros de eventos</div>
                      </td>
                      <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                        <div className="font-medium">8.16, 8.15, 8.23, 8.7</div>
                        <div className="text-sm">Monitoreo, logging, filtrado web, antivirus</div>
                      </td>
                      <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                        <div className="text-sm">• Monitoreo de sistemas</div>
                        <div className="text-sm">• Registro de eventos</div>
                        <div className="text-sm">• Análisis posterior</div>
                      </td>
                      <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                        <div className="text-sm">42001: Desempeño de IA</div>
                        <div className="text-sm">27001: Detección de amenazas</div>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                      <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Relaciones con Terceros</td>
                      <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                        <div className="font-medium">A.10.2, A.10.3, A.10.4</div>
                        <div className="text-sm">Responsabilidades, proveedores, clientes</div>
                      </td>
                      <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                        <div className="font-medium">5.19, 5.20, 5.21</div>
                        <div className="text-sm">Relaciones con proveedores, acuerdos, cadena de suministro</div>
                      </td>
                      <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                        <div className="text-sm">• Gestión de proveedores</div>
                        <div className="text-sm">• Asignación de responsabilidades</div>
                        <div className="text-sm">• Gestión de riesgos</div>
                      </td>
                      <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                        <div className="text-sm">42001: Desarrollo responsable</div>
                        <div className="text-sm">27001: Seguridad de información</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Comparison Section */}
      <section id="radar" className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                Análisis Gráfico de Cobertura
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Análisis exhaustivo basado en la comparación detallada del Anexo A de ISO 42001:2023 y el Anexo A de ISO 27001:2022, 
                mostrando la sinergia entre ambos estándares.
              </p>
            </div>
            <EnhancedComparison />
            
            <div className="mt-12">
              <ExtendedComparisonTable />
            </div>
            
            <div className="mt-12">
              <ImplementationGuide />
            </div>
          </div>
        </div>
      </section>

      {/* Maturity Model Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
              Modelo de Madurez de Implementación
            </h2>
            
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8">
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  Evalúa tu nivel de implementación
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Utiliza este modelo para autoevaluar tu organización en la implementación 
                  conjunta de ISO 27001 e ISO 42001.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-medium text-gray-900 dark:text-white">Nivel 1: Inicial</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Procesos ad-hoc, sin estructura formal. Conciencia básica de los estándares.
                  </p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-medium text-gray-900 dark:text-white">Nivel 2: Repetible</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Procesos documentados pero inconsistentes. Implementación parcial de controles.
                  </p>
                </div>
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h4 className="font-medium text-gray-900 dark:text-white">Nivel 3: Definido</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Procesos estandarizados y documentados. Implementación estructurada de ambos estándares.
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-medium text-gray-900 dark:text-white">Nivel 4: Gestionado</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Procesos medidos y controlados. Integración efectiva entre ISO 27001 y 42001.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-medium text-gray-900 dark:text-white">Nivel 5: Optimizado</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Mejora continua. Innovación en gobernanza de IA y seguridad de la información.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps Section */}
      <section className="py-16 bg-blue-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
              ¿Cuáles son sus Próximos Pasos?
            </h2>
            
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 dark:text-blue-400 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Evalúe su Madurez</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Utilice nuestro modelo para identificar su punto de partida actual en la implementación 
                      conjunta de ISO 27001 e ISO 42001.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 dark:text-blue-400 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Realice un Análisis de Brechas</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Identifique qué controles de ISO 42001 no están cubiertos por su actual Sistema de 
                      Gestión de Seguridad de la Información (SGSI).
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 dark:text-blue-400 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Priorice la Evaluación de Impacto de IA</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Comience por el control más novedoso y crítico de ISO 42001: la Evaluación de Impacto 
                      de IA (A.5) para identificar riesgos éticos y sociales.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 dark:text-blue-400 font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Contacte a un Experto</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Planifique una hoja de ruta para una implementación integrada y eficiente con la 
                      ayuda de especialistas en gobernanza de IA y seguridad de la información.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
              Recursos y Herramientas
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-blue-600" />
                    Documentación Oficial ISO
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li className="flex items-center justify-between">
                      <span>ISO/IEC 42001:2023 - Estándar completo</span>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => window.open('https://www.iso.org/standard/81230.html', '_blank')}
                      >
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Visitar
                      </Button>
                    </li>
                    <li className="flex items-center justify-between">
                      <span>ISO/IEC 27001:2022 - Estándar actualizado</span>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => window.open('https://www.iso.org/standard/82875.html', '_blank')}
                      >
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Visitar
                      </Button>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-indigo-600" />
                    Formación y Certificación
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>• Cursos oficiales de ISO 42001</li>
                    <li>• Certificación de auditores líderes</li>
                    <li>• Programas de formación continua</li>
                    <li>• Comunidades de práctica</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-green-600" />
                    Herramientas de Evaluación
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>• Herramientas de autoevaluación</li>
                    <li>• Plantillas de documentación</li>
                    <li>• Software de gestión de normas</li>
                    <li>• Indicadores de rendimiento</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-purple-600" />
                    Buenas Prácticas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>• Implementación gradual</li>
                    <li>• Integración con otros sistemas</li>
                    <li>• Enfoque basado en riesgos</li>
                    <li>• Mejora continua</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer with Credits */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">Desarrollado por Roberto Puyó Valladares</h3>
              <p className="text-gray-300 mb-6">
                Experto en estándares internacionales de gestión de seguridad de la información e inteligencia artificial
              </p>
              <div className="flex justify-center items-center gap-4 mb-6">
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => window.open('https://linkedin.com/in/robertopuyo', '_blank')}
                  className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  Conectar en LinkedIn
                </Button>
              </div>
            </div>
            
            <div className="border-t border-gray-700 pt-8">
              <div className="grid md:grid-cols-3 gap-8 text-left">
                <div>
                  <h4 className="font-semibold mb-3">Acerca de este análisis</h4>
                  <p className="text-sm text-gray-400">
                    Comparativa detallada entre ISO/IEC 42001:2023 e ISO/IEC 27001:2022, 
                    basada en el análisis exhaustivo de los Anexos A de ambos estándares.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Metodología</h4>
                  <p className="text-sm text-gray-400">
                    Análisis control por control, evaluación de similitudes, identificación de superposiciones 
                    y cálculo de porcentajes de cobertura basados en criterios estructurales y funcionales.
                  </p>
                  <p className="text-sm text-gray-400 mt-2">
                    Los porcentajes de cobertura y sinergia son el resultado de un análisis ponderado que considera 
                    la aplicabilidad directa (Superposición) y la adaptabilidad (Extensión) de los controles de 
                    ISO 27001 para satisfacer los objetivos de los controles de ISO 42001 en cada área temática.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Actualización</h4>
                  <p className="text-sm text-gray-400">
                    Creado en Octubre 2025. Este análisis se mantiene actualizado con las últimas versiones 
                    de los estándares y las mejores prácticas de implementación.
                  </p>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-700">
                <p className="text-sm text-gray-400">
                  © 2025 Roberto Puyó Valladares - Todos los Derechos Reservados. 
                  Este análisis es para fines educativos y de referencia profesional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-40"
        aria-label="Volver arriba"
      >
        <ArrowRight className="h-5 w-5 rotate-270" />
      </button>
    </div>
  );
}