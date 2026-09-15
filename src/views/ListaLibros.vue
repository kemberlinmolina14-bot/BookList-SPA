<template>
    <div>
        <!-- Formulario interactivo (Lecciones 3 y 4) -->
        <FormularioLibro @agregar-libro="recibirNuevoLibro" />

        <section class="catalogo-section">
            <h3>Catálogo de Libros ({{ libros.length }})</h3>

            <!-- Lista reactiva (Lecciones 2 y 4) -->
            <div v-if="libros.length > 0" class="libros-grid">
                <Libro v-for="item in libros" :key="item.id" :libro="item" @eliminar-libro="eliminarLibroDeLista" />
            </div>

            <div v-else class="empty-message">
                <p>⚠️ No hay libros disponibles en el catálogo en este momento.</p>
            </div>
        </section>
    </div>
</template>

<script>
import Libro from '../components/Libro.vue';
import FormularioLibro from '../components/FormularioLibro.vue';

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
        recibirNuevoLibro(nuevoLibro) {
            this.$emit('agregar-libro', nuevoLibro);
        },
        eliminarLibroDeLista(id) {
            this.$emit('eliminar-libro', id);
        }
    }
};
</script>

<style scoped>
.catalogo-section {
    margin-top: 20px;
}

.empty-message {
    padding: 20px;
    background-color: #fff8e1;
    border: 1px solid #ffe082;
    border-radius: 6px;
    text-align: center;
    color: #b78103;
}
</style>