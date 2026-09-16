<template>
    <div class="lista-libros-view">
        <h2>Gestión e Inventario de Libros</h2>

        <!-- Formulario para agregar libros -->
        <FormularioLibro @agregar-libro="agregarNuevoLibro" />

        <hr />

        <section class="books-section">
            <h3>Catálogo de Libros ({{ libros.length }})</h3>

            <div v-if="libros.length === 0" class="empty-message">
                <p>⚠️ No hay libros disponibles en el catálogo por el momento.</p>
            </div>

            <div v-else class="books-list">
                <div v-for="item in libros" :key="item.id" class="item-card">
                    <Libro :libro="item" @eliminar-libro="eliminarLibro" />

                    <!-- Lección 5: Enlace dinámico a la ruta de detalle (/libros/:id) -->
                    <div class="actions">
                        <router-link :to="'/libros/' + item.id" class="btn-detail">
                            🔍 Ver Detalle
                        </router-link>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import Libro from '../components/Libro.vue'
import FormularioLibro from '../components/FormularioLibro.vue'

export default {
    name: 'ListaLibros',
    components: {
        Libro,
        FormularioLibro
    },
    props: {
        libros: {
            type: Array,
            required: true
        }
    },
    emits: ['agregar-libro', 'eliminar-libro'],
    methods: {
        agregarNuevoLibro(libro) {
            this.$emit('agregar-libro', libro)
        },
        eliminarLibro(id) {
            this.$emit('eliminar-libro', id)
        }
    }
}
</script>

<style scoped>
.item-card {
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    margin-bottom: 15px;
    padding: 10px;
    background-color: #ffffff;
}

.actions {
    text-align: right;
    padding-top: 8px;
    border-top: 1px dashed #eee;
}

.btn-detail {
    display: inline-block;
    background-color: #27ae60;
    color: white;
    padding: 6px 12px;
    border-radius: 4px;
    text-decoration: none;
    font-size: 0.9rem;
    font-weight: bold;
}

.empty-message {
    padding: 20px;
    background-color: #fff3cd;
    color: #856404;
    border-radius: 6px;
    text-align: center;
}
</style>