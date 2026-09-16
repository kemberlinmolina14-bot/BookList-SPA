<template>
    <div class="card-libro">
        <div class="info">
            <!-- v-bind para clases dinámicas y atributos -->
            <h3 :title="'Título: ' + libro.titulo">{{ libro.titulo }}</h3>
            <p><strong>Autor:</strong> {{ libro.autor }}</p>
            <p><strong>Categoría:</strong> {{ libro.categoria }}</p>
            <p v-if="libro.resumen"><strong>Resumen:</strong> {{ libro.resumen }}</p>

            <!-- v-show para disponibilidad -->
            <span v-show="libro.disponible" class="badge badge-disponible">Disponible</span>
            <span v-show="!libro.disponible" class="badge badge-agotado">Agotado</span>
        </div>

        <!-- Lección 4: Manejo de eventos con @click para eliminar -->
        <button @click="$emit('eliminar-libro', libro.id)" class="btn-delete" title="Eliminar libro">
            🗑️ Eliminar
        </button>
    </div>
</template>

<script>
export default {
    name: 'LibroItem',
    props: {
        libro: {
            type: Object,
            required: true
        }
    },
    emits: ['eliminar-libro']
}
</script>

<style scoped>
.card-libro {
    border: 1px solid #ddd;
    border-radius: 6px;
    padding: 15px;
    margin-bottom: 12px;
    background-color: #ffffff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.info {
    flex-grow: 1;
}

.badge {
    display: inline-block;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 0.8rem;
    font-weight: bold;
    margin-top: 5px;
}

.badge-disponible {
    background-color: #d4edda;
    color: #155724;
}

.badge-agotado {
    background-color: #f8d7da;
    color: #721c24;
}

.btn-delete {
    background-color: #dc3545;
    color: white;
    border: none;
    padding: 8px 12px;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
    margin-left: 15px;
}

.btn-delete:hover {
    background-color: #c82333;
}
</style>