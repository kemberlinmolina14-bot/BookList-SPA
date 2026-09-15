<template>
    <div class="detalle-container">
        <div v-if="libroEncontrado" class="detalle-card">
            <h2>📖 {{ libroEncontrado.titulo }}</h2>
            <hr />
            <p><strong>ID de Sistema:</strong> {{ libroEncontrado.id }}</p>
            <p><strong>Autor:</strong> {{ libroEncontrado.autor }}</p>
            <p><strong>Categoría:</strong> {{ libroEncontrado.categoria }}</p>
            <p><strong>Estado:</strong> {{ libroEncontrado.destacado ? '⭐ Destacado' : 'Estándar' }}</p>
            <div class="resumen-box">
                <h4>Resumen:</h4>
                <p><em>{{ libroEncontrado.resumen || 'Sin resumen disponible.' }}</em></p>
            </div>
        </div>

        <div v-else class="error-card">
            <h3>⚠️ Libro no encontrado</h3>
            <p>El identificador de libro de la ruta no existe en nuestro catálogo.</p>
        </div>

        <router-link to="/libros" class="btn-volver">⬅️ Volver al Catálogo</router-link>
    </div>
</template>

<script>
export default {
    name: 'DetalleLibro',
    props: {
        // Recibe el parámetro :id definido en el router
        id: {
            type: [String, Number],
            required: true
        },
        libros: {
            type: Array,
            required: true
        }
    },
    computed: {
        // Busca en tiempo real el libro que coincida con el id de la URL
        libroEncontrado() {
            return this.libros.find(item => String(item.id) === String(this.id));
        }
    }
};
</script>

<style scoped>
.detalle-container {
    margin-top: 15px;
}

.detalle-card {
    background-color: #ffffff;
    border: 1px solid #cbd5e0;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.detalle-card h2 {
    margin-top: 0;
    color: #2c3e50;
}

.resumen-box {
    background-color: #f8f9fa;
    padding: 12px;
    border-radius: 6px;
    margin-top: 15px;
}

.resumen-box h4 {
    margin: 0 0 5px 0;
    color: #42b983;
}

.error-card {
    padding: 20px;
    background-color: #fff5f5;
    border: 1px solid #feb2b2;
    border-radius: 8px;
    color: #c53030;
}

.btn-volver {
    display: inline-block;
    margin-top: 20px;
    color: #3182ce;
    text-decoration: none;
    font-weight: bold;
}

.btn-volver:hover {
    text-decoration: underline;
}
</style>