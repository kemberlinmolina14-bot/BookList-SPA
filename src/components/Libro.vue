<template>
    <div class="libro-card" :class="{ 'destacado': libro.destacado }">
        <h4>{{ libro.titulo }}</h4>
        <p><strong>Autor:</strong> {{ libro.autor }}</p>
        <p><strong>Categoría:</strong> {{ libro.categoria }}</p>
        <p v-if="libro.resumen" class="resumen"><em>"{{ libro.resumen }}"</em></p>

        <div class="acciones">
            <!-- Enlace dinámico con Vue Router -->
            <router-link :to="`/libros/${libro.id}`" class="btn-detalle">
                🔍 Ver Detalle
            </router-link>

            <!-- Evento @click directo para eliminar -->
            <button class="btn-eliminar" @click="borrarLibro(libro.id)">
                🗑️ Eliminar
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Libro',
    emits: ['eliminar-libro'],
    props: {
        libro: {
            type: Object,
            required: true
        }
    },
    methods: {
        borrarLibro(id) {
            this.$emit('eliminar-libro', id);
        }
    }
};
</script>

<style scoped>
.libro-card {
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    padding: 15px;
    margin-bottom: 12px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02);
    transition: transform 0.2s;
}

.libro-card:hover {
    transform: translateY(-2px);
}

.libro-card.destacado {
    border-left: 5px solid #42b983;
    background-color: #f0fdf4;
}

h4 {
    margin: 0 0 8px 0;
    color: #2c3e50;
}

p {
    margin: 4px 0;
    font-size: 0.9rem;
    color: #4a5568;
}

.resumen {
    font-size: 0.85rem;
    color: #718096;
    margin-top: 6px;
}

.acciones {
    display: flex;
    gap: 10px;
    margin-top: 12px;
}

.btn-detalle {
    background-color: #3182ce;
    color: white;
    text-decoration: none;
    padding: 6px 10px;
    border-radius: 4px;
    font-size: 0.8rem;
    font-weight: bold;
}

.btn-detalle:hover {
    background-color: #2b6cb0;
}

.btn-eliminar {
    background-color: #e53e3e;
    color: white;
    border: none;
    padding: 6px 10px;
    border-radius: 4px;
    font-size: 0.8rem;
    cursor: pointer;
}

.btn-eliminar:hover {
    background-color: #c53030;
}
</style>