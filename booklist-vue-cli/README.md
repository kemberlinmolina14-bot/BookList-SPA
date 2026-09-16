---

## 📋 Cumplimiento de Observaciones del Proyecto

El proyecto **BookList SPA** para Editorial Nova cumple con todos los requerimientos técnicos mediante las siguientes soluciones:

* **Estructura de componentes Vue:** Modularización en vistas (`src/views/`) y componentes reutilizables (`src/components/`), utilizando comunicación bidireccional mediante `props` y `$emit`.
* **Binding reactivo (`v-model`):** Implementado en `FormularioLibro.vue` para sincronizar los datos del formulario con el estado reactivo del componente y la vista previa en tiempo real.
* **Directivas (`v-if`, `v-for`, `v-show`):** 
  * `v-for` con `:key` en el renderizado iterativo del catálogo de libros.
  * `v-if`/`v-else` para gestionar vistas condicionales y alertas de catálogo vacío.
  * `v-show` para alternar la visibilidad de las etiquetas de disponibilidad (*Disponible* / *Agotado*).
* **Manejo de eventos:** Uso de `@click`, `@keydown.enter` y modificadores de eventos como `.prevent` (para el envío de formularios) y `.once` (para notificaciones únicas).
* **Navegación con Vue Router:** Rutas SPA declaradas en `src/router/index.js` asociadas a `InicioView.vue`, `ListaLibros.vue` y la ruta dinámica `/libro/:id` para `DetalleLibro.vue`.
* **Modularidad y claridad:** Estructura basada en componentes SFC (Single File Components) que encapsulan `<template>`, `<script>` y `<style scoped>`.
* **Patrón MVVM:** Enlace automático entre el modelo de datos (`data()`), los intermediarios (`methods`) y las vistas dinámicas en el DOM (`<template>`).