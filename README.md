BookList SPA (Editorial Nova)
1. Descripción General del Proyecto
Desarrollo de una Single Page Application (SPA) para la Editorial Nova utilizando Vue 3 (Options API) y Vite. La aplicación permite la gestión bibliográfica en tiempo real, incluyendo el registro, visualización, detalle y eliminación de libros, garantizando una navegación fluida sin recargas de página.

2. Explicación de las Lecciones y Decisiones de Arquitectura
Lección 1 & 2: Estructura Base, Reactividad y Renderizado de Listas

Decisión: Se definió la estructura base utilizando Vite. Se implementó el patrón Props Down enviando los objetos desde el componente principal hacia el componente hijo Libro.vue. Se utilizó la directiva v-for vinculada a una clave única :key="item.id" y v-if / v-else para gestionar vistas condicionales cuando la lista está vacía.

Lección 3: Binding de Formularios Bidireccional (v-model)

Decisión: Creación del componente FormularioLibro.vue integrando <input>, <select> y <textarea>. Se aplicó v-model para vincular los datos del formulario directamente al estado reactivo local, desplegando un cuadro de vista previa en tiempo real antes de guardar.

Lección 4: Manejo Efectivo de Eventos

Decisión: Implementación de la comunicación Events Up mediante $emit. Se agregaron eventos de clic (@click) en los botones de agregar y eliminar libros, el modificador @submit.prevent para evitar recargas del navegador, @keyup.enter para envío por teclado desde la caja de texto y @click.once para la bonificación de bienvenida.

Lección 5: Enrutamiento Dinámico con Vue Router

Decisión: Transición hacia una SPA completa estructurando la carpeta src/views/ (InicioView.vue, ListaLibros.vue, DetalleLibro.vue). Se definió la ruta dinámica /libros/:id con props: true en la configuración de vue-router, permitiendo desacoplar la lectura de parámetros en la vista de detalle.

3. Implementación del Patrón MVVM
Model: Estado reactivo centralizado en App.vue (libros[]).

View: Plantillas HTML declarativas con CSS Scoped en componentes .vue.

ViewModel: Propiedades computadas (computed) en DetalleLibro.vue y métodos (methods) que coordinan la lógica de eventos y sincronización de datos.