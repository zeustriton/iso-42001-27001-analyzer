'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  ExternalLink, 
  FileText, 
  Video, 
  BookOpen, 
  Users, 
  Download, 
  Globe,
  Award,
  GraduationCap
} from 'lucide-react';

interface Resource {
  title: string;
  description: string;
  type: 'document' | 'video' | 'course' | 'tool' | 'community';
  url: string;
  category: 'iso42001' | 'iso27001' | 'both' | 'general';
  difficulty?: 'basic' | 'intermediate' | 'advanced';
  language?: string;
  isPremium?: boolean;
}

const resources: Resource[] = [
  {
    title: "ISO/IEC 42001:2023 - Especificación oficial",
    description: "Documento oficial del estándar internacional para sistemas de gestión de inteligencia artificial.",
    type: 'document',
    url: "https://www.iso.org/standard/81230.html",
    category: 'iso42001',
    difficulty: 'advanced',
    language: 'en'
  },
  {
    title: "ISO/IEC 27001:2022 - Especificación oficial",
    description: "Documento oficial del estándar internacional para sistemas de gestión de seguridad de la información.",
    type: 'document',
    url: "https://www.iso.org/standard/82875.html",
    category: 'iso27001',
    difficulty: 'advanced',
    language: 'en'
  },
  {
    title: "Guía de Implementación ISO 42001",
    description: "Guía práctica para implementar un sistema de gestión de IA basado en ISO 42001.",
    type: 'document',
    url: "#",
    category: 'iso42001',
    difficulty: 'intermediate',
    language: 'es'
  },
  {
    title: "Integración de ISO 27001 e ISO 42001",
    description: "Whitepaper sobre cómo integrar ambos estándares en una organización.",
    type: 'document',
    url: "#",
    category: 'both',
    difficulty: 'intermediate',
    language: 'es'
  },
  {
    title: "Curso: Fundamentos de Gobernanza de IA",
    description: "Curso online sobre los principios y prácticas de gobernanza de inteligencia artificial.",
    type: 'course',
    url: "#",
    category: 'iso42001',
    difficulty: 'basic',
    language: 'es',
    isPremium: true
  },
  {
    title: "Curso: Auditoría ISO 27001",
    description: "Formación completa para convertirse en auditor de sistemas de gestión de seguridad.",
    type: 'course',
    url: "#",
    category: 'iso27001',
    difficulty: 'advanced',
    language: 'es',
    isPremium: true
  },
  {
    title: "Webinar: Tendencias en Estándares de IA",
    description: "Sesión en vivo sobre las últimas tendencias en estándares de gobernanza de IA.",
    type: 'video',
    url: "#",
    category: 'general',
    difficulty: 'basic',
    language: 'es'
  },
  {
    title: "Herramienta de Autoevaluación",
    description: "Herramienta interactiva para evaluar su nivel de cumplimiento con ambos estándares.",
    type: 'tool',
    url: "#madurez",
    category: 'both',
    difficulty: 'intermediate',
    language: 'es'
  },
  {
    title: "Comunidad de Prácticas",
    description: "Foro de discusión y compartir experiencias sobre implementación de estándares.",
    type: 'community',
    url: "#",
    category: 'general',
    difficulty: 'basic',
    language: 'es'
  },
  {
    title: "Certificación ISO 42001 Lead Implementer",
    description: "Programa de certificación oficial para implementadores de ISO 42001.",
    type: 'course',
    url: "#",
    category: 'iso42001',
    difficulty: 'advanced',
    language: 'en',
    isPremium: true
  }
];

const getTypeIcon = (type: Resource['type']) => {
  switch (type) {
    case 'document':
      return <FileText className="h-4 w-4" />;
    case 'video':
      return <Video className="h-4 w-4" />;
    case 'course':
      return <GraduationCap className="h-4 w-4" />;
    case 'tool':
      return <Download className="h-4 w-4" />;
    case 'community':
      return <Users className="h-4 w-4" />;
    default:
      return <BookOpen className="h-4 w-4" />;
  }
};

const getTypeColor = (type: Resource['type']) => {
  switch (type) {
    case 'document':
      return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
    case 'video':
      return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
    case 'course':
      return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
    case 'tool':
      return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
    case 'community':
      return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
    default:
      return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200';
  }
};

const getCategoryColor = (category: Resource['category']) => {
  switch (category) {
    case 'iso42001':
      return 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200';
    case 'iso27001':
      return 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200';
    case 'both':
      return 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200';
    case 'general':
      return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200';
    default:
      return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200';
  }
};

const getDifficultyColor = (difficulty: Resource['difficulty']) => {
  switch (difficulty) {
    case 'basic':
      return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
    case 'intermediate':
      return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
    case 'advanced':
      return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
    default:
      return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200';
  }
};

export default function ResourcesSection() {
  const filteredResources = (category: string) => {
    if (category === 'all') return resources;
    return resources.filter(resource => resource.category === category);
  };

  const handleResourceClick = (url: string, title: string) => {
    if (url.startsWith('#')) {
      // Navegación interna
      const element = document.querySelector(url);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Enlace externo
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="space-y-6">
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="all">Todos</TabsTrigger>
          <TabsTrigger value="iso42001">ISO 42001</TabsTrigger>
          <TabsTrigger value="iso27001">ISO 27001</TabsTrigger>
          <TabsTrigger value="both">Ambos</TabsTrigger>
          <TabsTrigger value="general">General</TabsTrigger>
        </TabsList>

        {(['all', 'iso42001', 'iso27001', 'both', 'general'] as const).map((category) => (
          <TabsContent key={category} value={category} className="space-y-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredResources(category).map((resource, index) => (
                <Card key={index} className="h-full flex flex-col">
                  <CardHeader>
                    <div className="flex justify-between items-start gap-2">
                      <div className="flex items-center gap-2">
                        <div className={`p-2 rounded-lg ${getTypeColor(resource.type)}`}>
                          {getTypeIcon(resource.type)}
                        </div>
                        <div className="flex flex-col gap-1">
                          <Badge className={getCategoryColor(resource.category)}>
                            {resource.category === 'iso42001' && 'ISO 42001'}
                            {resource.category === 'iso27001' && 'ISO 27001'}
                            {resource.category === 'both' && 'Ambos'}
                            {resource.category === 'general' && 'General'}
                          </Badge>
                          {resource.difficulty && (
                            <Badge variant="outline" className={getDifficultyColor(resource.difficulty)}>
                              {resource.difficulty === 'basic' && 'Básico'}
                              {resource.difficulty === 'intermediate' && 'Intermedio'}
                              {resource.difficulty === 'advanced' && 'Avanzado'}
                            </Badge>
                          )}
                        </div>
                      </div>
                      {resource.isPremium && (
                        <Badge variant="secondary" className="bg-yellow-500 text-white">
                          Premium
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-lg leading-tight">{resource.title}</CardTitle>
                    <CardDescription className="text-sm">{resource.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col justify-between">
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Globe className="h-3 w-3" />
                        <span>{resource.language === 'es' ? 'Español' : 'Inglés'}</span>
                      </div>
                    </div>
                    <Button 
                      className="w-full"
                      onClick={() => handleResourceClick(resource.url, resource.title)}
                      variant={resource.url.startsWith('#') ? 'outline' : 'default'}
                    >
                      {resource.url.startsWith('#') ? 'Ver recurso' : 'Visitar sitio'}
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      {/* Additional Resources Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="h-5 w-5" />
            Recursos Adicionales
          </CardTitle>
          <CardDescription>
            Enlaces y materiales complementarios para profundizar en la implementación de estos estándares.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold">Documentos Técnicos</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <h5 className="font-medium">Código de Ética para IA</h5>
                    <p className="text-sm text-muted-foreground">Guía de principios éticos para desarrollo de IA</p>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <h5 className="font-medium">Plantillas de Documentación</h5>
                    <p className="text-sm text-muted-foreground">Plantillas para políticas y procedimientos</p>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <h5 className="font-medium">Matriz de Riesgos de IA</h5>
                    <p className="text-sm text-muted-foreground">Herramienta para evaluación de riesgos</p>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Comunidad y Soporte</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <h5 className="font-medium">Foro de Discusión</h5>
                    <p className="text-sm text-muted-foreground">Comparte experiencias y dudas</p>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Users className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <h5 className="font-medium">Sesiones de Preguntas</h5>
                    <p className="text-sm text-muted-foreground">Webinars mensuales con expertos</p>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Video className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <h5 className="font-medium">Boletín Informativo</h5>
                    <p className="text-sm text-muted-foreground">Actualizaciones mensuales sobre estándares</p>
                  </div>
                  <Button variant="ghost" size="sm">
                    <BookOpen className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}