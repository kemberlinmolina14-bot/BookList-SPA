<template>
    <div id="app" class="container">
        <!-- Encabezado y MVVM (Lección 1) -->
        <header class="header">
            <h1>Editorial Nova - BookList SPA</h1>
            <p>Bienvenido/a, <strong>{{ usuario }}</strong></p>
        </header>

        <!-- Barra de Navegación por Rutas (Lección 5) -->
        <nav class="nav-bar">
            <router-link to="/">Inicio</router-link> |
            <router-link to="/libros">Catálogo de Libros</router-link>
        </nav>

        <!-- Contador Básico (Lección 1) -->
        <section class="counter-section">
            <h2>Contador de Prueba (Reactividad Básica)</h2>
            <p class="count-display">Valor actual: <strong>{{ contador }}</strong></p>
            <div class="buttons">
                <button @click="incrementar" class="btn btn-add">+ Incrementar</button>
                <button @click="decrementar" class="btn btn-sub">- Decrementar</button>
            </div>
        </section>

        <hr />

        <!-- Renderizado dinámico de Vistas según la Ruta (Lección 5) -->
        <main>
            <router-view :libros="libros" @agregar-libro="agregarNuevoLibro" @eliminar-libro="eliminarLibro" />
        </main>
    </div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            usuario: 'Desarrollador Frontend',
            contador: 0,
            libros: [
                { id: 1, titulo: 'Cien Años de Soledad', autor: 'Gabriel García Márquez', categoria: 'Novela', resumen: 'Historia de la familia Buendía en Macondo.', disponible: true },
                { id: 2, titulo: 'Don Quijote de la Mancha', autor: 'Miguel de Cervantes', categoria: 'Clásico', resumen: 'Aventuras del hidalgo Don Quijote.', disponible: true },
                { id: 3, titulo: 'El Aleph', autor: 'Jorge Luis Borges', categoria: 'Cuentos', resumen: 'Colección de relatos fantásticos.', disponible: false }
            ]
        }
    },
    methods: {
        incrementar() {
            this.contador++
        },
        decrementar() {
            if (this.contador > 0) {
                this.contador--
            }
        },
        agregarNuevoLibro(libro) {
            this.libros.push(libro)
        },
        eliminarLibro(idLibro) {
            this.libros = this.libros.filter(libro => libro.id !== idLibro)
        }
    }
}
</script>

<style>
.container {
    max-width: 850px;
    margin: 20px auto;
    padding: 20px;
    font-family: Arial, sans-serif;
    color: #2c3e50;
}

.header {
    text-align: center;
}

.nav-bar {
    text-align: center;
    padding: 12px;
    background-color: #2c3e50;
    border-radius: 6px;
    margin: 15px 0;
}

.nav-bar a {
    color: #ffffff;
    text-decoration: none;
    font-weight: bold;
    margin: 0 10px;
}

.nav-bar a.router-link-exact-active {
    color: #42b983;
    border-bottom: 2px solid #42b983;
}

.counter-section {
    background-color: #f8f9fa;
    padding: 15px;
    border-radius: 8px;
    margin-top: 15px;
    text-align: center;
}

.count-display {
    font-size: 1.1rem;
}

.buttons {
    display: flex;
    justify-content: center;
    gap: 10px;
}

.btn {
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
}

.btn-add {
    background-color: #42b983;
    color: white;
}

.btn-sub {
    background-color: #e74c3c;
    color: white;
}
</style>