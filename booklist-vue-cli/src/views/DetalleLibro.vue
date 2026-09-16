<template>
    <div class="detalle-container">
        <router-link to="/libros" class="btn-back">← Volver a la Lista</router-link>

        <div v-if="libroEncontrado" class="card-detalle">
            <h2>{{ libroEncontrado.titulo }}</h2>
            <p class="autor"><strong>Autor:</strong> {{ libroEncontrado.autor }}</p>
            <p class="categoria"><strong>Categoría:</strong> {{ libroEncontrado.categoria }}</p>
            <p class="id-info"><strong>ID de Registro:</strong> {{ libroEncontrado.id }}</p>

            <div class="resumen-box">
                <h4>Resumen / Sinopsis:</h4>
                <p>{{ libroEncontrado.resumen || 'Sin descripción disponible para este libro.' }}</p>
            </div>

            <div class="estado">
                <span v-if="libroEncontrado.disponible" class="badge badge-disponible">Disponible en stock</span>
                <span v-else class="badge badge-agotado">Agotado actualmente</span>
            </div>
        </div>

        <div v-else class="not-found">
            <h3>⚠️ Libro no encontrado</h3>
            <p>No existe ningún libro registrado con el ID: <strong>{{ id }}</strong>.</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DetalleLibro',
    props: {
        // Recibe el parámetro dinámico :id directamente como prop
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
        libroEncontrado() {
            return this.libros.find(item => String(item.id) === String(this.id))
        }
    }
}
</script>

<style scoped>
.detalle-container {
    margin-top: 15px;
}

.btn-back {
    display: inline-block;
    margin-bottom: 15px;
    color: #3498db;
    text-decoration: none;
    font-weight: bold;
}

.card-detalle {
    background: white;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 25px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.resumen-box {
    background-color: #f8f9fa;
    padding: 15px;
    border-radius: 6px;
    margin: 15px 0;
}

.badge {
    display: inline-block;
    padding: 6px 12px;
    border-radius: 4px;
    font-weight: bold;
}

.badge-disponible {
    background-color: #d4edda;
    color: #155724;
}

.badge-agotado {
    background-color: #f8d7da;
    color: #721c24;
}

.not-found {
    background-color: #f8d7da;
    color: #721c24;
    padding: 20px;
    border-radius: 6px;
    text-align: center;
}
</style>