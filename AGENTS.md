# 🤖 Project Agents & Standards (Angular 21+ Modern Stack)

Este documento define las reglas de oro y convenciones técnicas para el desarrollo. El cumplimiento de estas normas es obligatorio para mantener la consistencia, escalabilidad y rendimiento.

## 🏗️ 1. Arquitectura y Stack Técnico

### Core Framework

- **Angular 21+**: Uso obligatorio de **Standalone Components** con **enfoque zoneless**. (Nota: No establecer standalone: true, es el valor por defecto).

- **Zoneless by Default**: Evitar completamente Zone.js. Usar change detection basada en Signals y eventos explícitos.

- **Modern Syntax**: Prohibido el uso de \*ngIf, \*ngFor y \*ngSwitch. Usar exclusivamente **Control Flow Syntax** (@if, @for, @switch).

- **Reactivity & State**:

- Priorizar **Signals** para el estado de la UI.
- Usar computed() para estado derivado.
- No usar mutate en signals; usar update o set.
- Usar **SignalStore** para manejo de estado ligero.
- **Dependency Injection**: Usar la función inject() en lugar de la inyección por constructor.

- **SSR & Hydration**: Configuración activa para SEO y performance.

- **Firebase**: Integración nativa para Auth y Firestore.

### TypeScript & Tipado

- **Strict Mode**: Uso obligatorio de chequeo de tipos estricto.

- **Type Safety**: Prohibido el uso de any. Usar unknown si el tipo es incierto.

- **Inferencia**: Preferir inferencia de tipos cuando el tipo sea obvio.

- **Interfaces**: Definir interfaces o types para cada modelo de datos.

## 🌳 2. Convenciones de Git & Gitflow

### ⚠️ Regla Prioritaria: Creación de Ramas

**ANTES de cualquier `git add .` y commit:**

1. **Verificar rama actual:**

   ```bash
   git branch --show-current
   ```

2. **Si estamos en `main` o `develop`:**
   - Crear nueva rama desde `develop`:

   ```bash
   git checkout develop
   git pull origin develop  # Asegurar estar actualizado
   git checkout -b feature/nombre-descriptivo
   ```

3. **Solo entonces hacer add y commit:**
   ```bash
   git add .
   git commit -m "tipo: descripción del cambio"
   ```

### Flujo de Ramas

- main: Código productivo, estable y desplegado.

- develop: Rama de integración principal.

- feature/\*: Nuevas funcionalidades.

- fix/\*: Corrección de errores.

- chore/\*: Tareas de mantenimiento.

### 🚀 CI/CD & GitHub Rules

- Prohibido el Force Push en main y develop.

- Todo cambio debe pasar por un Pull Request.

- Ningún PR se aprueba si el Pipeline de Calidad (Tests + Lint) está en rojo.

- Los despliegues a producción (main) solo ocurren tras validación en la rama develop.

### Estándar de Commits (Conventional Commits)

Formato: ():

- **feat**: Nueva funcionalidad.

- **fix**: Corrección de bug.

- **refactor**: Cambio de código que no añade funcionalidad ni arregla bugs.

- **test**: Añadir o corregir pruebas.

- **docs**: Cambios en documentación.

### Reglas de Pull Request (PR)

- Título: \[\] Descripción clara.

- Antes de commitear: Ejecutar pnpm lint y pnpm test.

- Mantener PRs pequeños y enfocados.

## 🛠️ 3. Reglas de Desarrollo (Clean Code)

### Componentes y UI

- **Single Responsibility**: Componentes pequeños y enfocados. Si excede las 200 líneas, dividirlo.

- **Change Detection**: Configurar siempre changeDetection: ChangeDetectionStrategy.OnPush.

- **Inputs/Outputs**: Usar las funciones input() y output() en lugar de los decoradores @Input y @Output.

- **Host Bindings**: No usar @HostBinding ni @HostListener. Usar el objeto host: {} dentro del decorador @Component.

- **Estilos**: **Tailwind CSS** es la única solución. Prohibido ngClass o ngStyle; usar bindings de clase y estilo nativos de Angular (\[class.name\] o \[style.color\]).

- **Templates**:

- Preferir templates inline para componentes pequeños.
- Usar rutas relativas para templates/estilos externos.
- No asumir globales como new Date() ni usar arrow functions en el template.
- **Imágenes**: Uso obligatorio de NgOptimizedImage para imágenes estáticas (no aplica para base64).

### Formularios y Servicios

- **Forms**: Preferir siempre **Reactive Forms** sobre los basados en plantillas.

- **Services**: Diseñados bajo una única responsabilidad y usar providedIn: 'root'.

## ♿ 4. Accesibilidad (Requisito Obligatorio)

- **Cumplimiento**: Debe pasar todos los chequeos de **AXE**.

- **Estándar**: Seguir los mínimos de **WCAG AA** (contraste de color, gestión de foco y atributos ARIA).

- **Semántica**: Uso de HTML semántico y roles ARIA cuando sea necesario.

## 🧪 5. Calidad y Testing

- **Package Manager**: Usar exclusivamente **pnpm**.

- **Testing**: **Vitest** a través de **Angular CLI** (`ng test`). Sin dependencias adicionales como zone.js.

- **Calidad de Código**: No se permiten commits con errores de ESLint o advertencias de Prettier.

- **CI/CD**: Todo PR debe pasar los GitHub Actions (Lint + Build + Test + Deploy).

### GitHub Actions & Firebase (Despliegue Automático)

- **CI en múltiples ramas**: Tests y linting en `main` y `develop`.
- **Despliegue automático**: Solo push a rama `main` despliega a Firebase.
- **Firebase Hosting**: Configurado para SSR con Angular Universal.
- **Secrets Requeridos**:
  - `FIREBASE_SERVICE_ACCOUNT`: JSON de la service account de Firebase
  - `FIREBASE_PROJECT_ID`: ID del proyecto de Firebase
- **Triggers**: Push/PR a ramas `main` y `develop` ejecutan CI completo.

### Docker (Requisito para Despliegue)

- **Dockerfile**: Configuración base para contenerización.
- **Multi-stage**: Optimizado para producción con Node.js Alpine.
- **SSR Support**: Configurado para Angular Universal.
- **Port**: Expone puerto 4000 por defecto.

### Prettier + ESLint (Requisito Obligatorio)

- **Prettier**: Formateo automático de código con configuración consistente.
- **ESLint**: Linting con reglas específicas de Angular y TypeScript.
- **Integración**: ESLint incluye reglas de Prettier para evitar conflictos.
- **Configuración**: Archivos `.prettierrc.js` y `eslint.config.js` obligatorios.
- **Commits**: Pre-commit hooks ejecutan linting y formateo automático.

## 📂 7. Estructura de Carpetas

```text
src/app/
├── core/           # Servicios globales, interceptores, guards (singletons).
├── shared/         # Componentes UI reutilizables (botones, inputs).
├── features/       # Lógica de negocio por página/dominio.
│   └── [feature]/
│       ├── data-access/  # Servicios y Signals de la feature.
│       ├── ui/           # Componentes presentacionales.
│       └── [name].component.ts
```

## 📝 8. Reglas para Agentes (AI & Devs)

- **Git Focus**: Antes de empezar, asegurar que la rama feature esté actualizada con develop.

- **SEO**: Actualizar Title y Meta tags en cada componente de página usando el servicio de SEO de Angular.

- **Performance**: Implementar **Lazy Loading** para todas las rutas de las features.

- **Simplicidad**: No sobre-diseñar. Si una instrucción no es clara, preguntar antes de ejecutar.

- **AGENTS.md Protegido**: Este archivo contiene las reglas críticas del proyecto. **NO actualizar AGENTS.md** a menos que el usuario lo solicite explícitamente. Las reglas aquí son sagradas y definen el comportamiento del proyecto.

- **COMMITS Protegidos**: Esta prohibido hacer commits si autorizacion. **NO HACER GIT COMMIT** a menos que el usuario lo solicite explícitamente. Las reglas aquí son sagradas y definen el comportamiento del proyecto.

- No asumir requisitos implícitos. Si falta información, se pide.
