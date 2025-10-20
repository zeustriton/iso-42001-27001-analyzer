# ISO 42001 vs ISO 27001 - Análisis Comparativo de Estándares

Una aplicación web completa para el análisis comparativo entre ISO/IEC 42001 (Sistemas de Gestión de Inteligencia Artificial) e ISO/IEC 27001 (Sistemas de Gestión de Seguridad de la Información). Esta herramienta interactiva permite a organizaciones y profesionales analizar la relación, sinergias y oportunidades de integración entre ambos estándares.

## 🎯 Características Principales

### 📊 Análisis Comparativo Detallado
- **Tabla comparativa interactiva** de controles del Anexo A
- **Análisis extendido** con 6 áreas temáticas principales
- **Guía de implementación** para organizaciones con ISO 27001
- **Filtros avanzados** por categoría y nivel de similitud
- **Búsqueda en tiempo real** en todo el contenido

### 📈 Visualizaciones Interactivas
- **Gráficos de radar** para análisis de cobertura
- **Modelo de madurez** interactivo con 5 niveles
- **Indicadores estadísticos** con transparencia metodológica
- **Visualización de relaciones** entre controles (Superposición, Extensión, Complementario, Único)

### 🎯 Herramientas Prácticas
- **Evaluación de brechas** entre estándares
- **Guía paso a paso** para implementación integrada
- **Recomendaciones personalizadas** basadas en nivel de madurez
- **Flujo de acción** con próximos pasos concretos

### 📚 Contenido Educativo
- **Análisis técnico** basado en documentación oficial
- **Explicación detallada** de sinergias y diferencias
- **Metodología transparente** con criterios de evaluación
- **Referencias a estándares** oficiales y normativas

### 🎨 Diseño Profesional
- **Interfaz moderna y responsive**
- **Modo oscuro/claro** automático
- **Animaciones sutiles** y transiciones fluidas
- **Optimizada para móviles y escritorio**

## 🚀 Tecnologías Utilizadas

### Frontend
- **⚡ Next.js 15** - Framework React con App Router
- **📘 TypeScript** - Tipado estático para mayor robustez
- **🎨 Tailwind CSS 4** - Framework de CSS utility-first
- **🧩 shadcn/ui** - Componentes UI accesibles y modernos
- **📊 Recharts** - Biblioteca de gráficos para React
- **🌈 Framer Motion** - Animaciones y transiciones
- **🎨 Next Themes** - Soporte para modo oscuro/claro

### Backend y Datos
- **🗄️ Prisma** - ORM para gestión de datos
- **📊 TanStack Query** - Gestión de estado del servidor
- **🔍 TanStack Table** - Tablas interactivas y potentes
- **⚡ Zustand** - Gestión de estado del cliente

### Desarrollo
- **🔧 ESLint** - Calidad de código
- **🎯 TypeScript** - Desarrollo tipado
- **📦 NPM** - Gestión de paquetes

## 📦 Instalación y Configuración

### Requisitos Previos
- Node.js 18.x o superior
- npm o yarn

### Clonar el Repositorio
```bash
git clone https://github.com/tu-usuario/iso42001-vs-iso27001.git
cd iso42001-vs-iso27001
```

### Instalar Dependencias
```bash
npm install
```

### Configurar Base de Datos (Opcional)
La aplicación puede funcionar sin base de datos, pero si deseas usar las características completas:

```bash
# Configurar Prisma
npx prisma generate
npx prisma db push
```

### Ejecutar en Desarrollo
```bash
npm run dev
```

La aplicación estará disponible en [http://localhost:3000](http://localhost:3000)

## 🚀 Despliegue en Vercel

### 1. Conectar con GitHub
- Crea una cuenta en [Vercel](https://vercel.com)
- Conecta tu repositorio de GitHub

### 2. Configurar Variables de Entorno
La aplicación es principalmente estática. Las variables de entorno opcionales:

```bash
# Base de datos (opcional)
DATABASE_URL="tu_url_de_base_de_datos"

# NextAuth (opcional, para autenticación)
NEXTAUTH_URL="https://tu-dominio.com"
NEXTAUTH_SECRET="tu_secreto"
```

### 3. Desplegar
Vercel detectará automáticamente que es una aplicación Next.js:

```bash
# Construir para producción
npm run build

# Iniciar servidor de producción
npm start
```

### 4. Configurar Dominio Personalizado (Opcional)
- En el dashboard de Vercel, ve a la configuración del proyecto
- Añade tu dominio personalizado
- Configura los DNS según las instrucciones de Vercel

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── components/          # Componentes de la aplicación
│   │   ├── Header.tsx      # Navegación principal
│   │   ├── Footer.tsx      # Pie de página
│   │   ├── ComparisonTable.tsx  # Tabla comparativa
│   │   ├── RadarChart.tsx  # Gráficos de radar
│   │   ├── MaturityModel.tsx     # Modelo de madurez
│   │   ├── ResourcesSection.tsx  # Sección de recursos
│   │   ├── ExtendedComparisonTable.tsx  # Tabla extendida
│   │   └── ImplementationGuide.tsx     # Guía de implementación
│   ├── data/
│   │   └── controls.json   # Datos de los controles
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Página principal
├── components/ui/          # Componentes shadcn/ui
├── hooks/                 # Custom hooks
└── lib/                   # Utilidades y configuración
```

## 📊 Contenido de la Aplicación

### Análisis Comparativo
La aplicación incluye un análisis exhaustivo basado en:

- **21 grupos de controles** ISO 42001 analizados
- **6 áreas temáticas** principales:
  - Gobernanza y Políticas
  - Gestión de Recursos y Activos
  - Evaluación de Impacto y Riesgos
  - Ciclo de Vida del Desarrollo
  - Gestión y Calidad de Datos
  - Relaciones con Terceros

### Métricas Clave
- **72% de cobertura promedio** entre estándares
- **50-60% de potencial reducción de esfuerzo** en implementación conjunta
- **14 controles con superposición directa**
- **Análisis ponderado** basado en aplicabilidad y adaptabilidad

### Guía de Implementación
- **10 controles ISO 42001** con su correspondencia ISO 27001
- **4 tipos de relación**: Superposición, Extensión, Complementario, Único
- **Instrucciones prácticas** para cada control
- **Recomendaciones específicas** por tipo de relación

## 🎨 Personalización

### Colores y Tema
Los colores principales están definidos en Tailwind CSS:
- Azul principal: `#1e40af` (ISO 42001)
- Verde secundario: `#10b981` (ISO 27001)
- Puedes modificarlos en el archivo `tailwind.config.ts`

### Datos
Para actualizar los datos de los controles:
1. Edita los archivos JSON en `src/app/data/`
2. Modifica los componentes correspondientes
3. Sigue la estructura existente para mantener la compatibilidad

### Contenido
El contenido de la aplicación está en español, pero puedes:
- Modificar los textos en los componentes
- Añadir soporte para múltiples idiomas con Next Intl
- Actualizar los recursos y enlaces

## 🔧 Funcionalidades Técnicas

### Tablas Comparativas
- **Filtrado dinámico** por categoría y nivel de similitud
- **Búsqueda en tiempo real** con highlighting
- **Diseño responsive** con scroll horizontal
- **Tooltips informativos** y detalles expandibles

### Visualizaciones
- **Gráficos de radar** interactivos
- **Modelo de madurez** con sliders
- **Indicadores de progreso** animados
- **Comparativas visuales** entre estándares

### Navegación
- **Scroll suave** entre secciones
- **Navegación por anclas** automática
- **Breadcrumbs** para mejor UX
- **Enlaces directos** a secciones específicas

## 📱 Optimización y Rendimiento

- **Imágenes optimizadas** con Next.js Image component
- **Code splitting** automático por ruta
- **Lazy loading** para componentes pesados
- **Optimización de bundle** con Webpack
- **Cacheo eficiente** para mejor rendimiento
- **SEO optimizado** con metadatos dinámicos

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Haz un fork del repositorio
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -am 'Añadir nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Crea un Pull Request con una descripción detallada

### Guía de Estilo
- Usa TypeScript para todo el código nuevo
- Sigue las convenciones de ESLint
- Mantén el estilo consistente con el código existente
- Añade pruebas unitarias para nuevas funcionalidades
- Documenta tus cambios en los comentarios

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para detalles.

## 🙏 Agradecimientos

- **Roberto Puyo** - Por la documentación y análisis comparativo que sirvió de base para esta aplicación
- **ISO/IEC** - Por los estándares 42001:2023 y 27001:2022
- **Comunidad de código abierto** - Por las increíbles herramientas y librerías utilizadas
- **Contribuyentes** - A todas las personas que han mejorado este proyecto

## 📞 Contacto y Soporte

Para preguntas, sugerencias o colaboración:

- **Autor**: Roberto Puyo
- **LinkedIn**: [linkedin.com/in/robertopuyo](https://www.linkedin.com/in/robertopuyo)
- **Issues**: [GitHub Issues](https://github.com/tu-usuario/iso42001-vs-iso27001/issues)
- **Discusiones**: [GitHub Discussions](https://github.com/tu-usuario/iso42001-vs-iso27001/discussions)

## 📈 Roadmap

### Próximas Funcionalidades
- [ ] Soporte multiidioma (inglés, portugués)
- [ ] Exportación a PDF de informes
- [ ] Integración con APIs de estándares
- [ ] Módulo de autoevaluación avanzado
- [ ] Plantillas de documentación
- [ ] Webinars y tutoriales integrados
- [ ] Comunidad y foro de discusión

### Mejoras Técnicas
- [ ] PWA (Progressive Web App)
- [ ] Optimización de Core Web Vitals
- [ ] Sistema de caché avanzado
- [ ] Analytics integrado
- [ ] Sistema de autenticación
- [ ] API REST para integraciones

---

**Construido con ❤️ para la comunidad de gestión de riesgos, seguridad de la información y gobernanza de IA.**

*Este proyecto es una herramienta educativa y de referencia. Los usuarios deben consultar siempre los estándares oficiales y consultar con expertos para implementaciones reales.*