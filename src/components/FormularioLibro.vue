<template>
    <div class="formulario-container">
        <h3>Registrar Nuevo Libro</h3>

        <form @submit.prevent="guardarLibro">
            <!-- 1. Campo Título -->
            <div class="form-group">
                <label for="titulo">Título:</label>
                <input id="titulo" v-model="nuevoLibro.titulo" type="text" placeholder="Ej: El principito" required />
            </div>

            <!-- 2. Campo Autor -->
            <div class="form-group">
                <label for="autor">Autor:</label>
                <input id="autor" v-model="nuevoLibro.autor" type="text" placeholder="Ej: Antoine de Saint-Exupéry"
                    required />
            </div>

            <!-- 3. Campo Categoría -->
            <div class="form-group">
                <label for="categoria">Categoría:</label>
                <select id="categoria" v-model="nuevoLibro.categoria" required>
                    <option value="" disabled>Selecciona una categoría</option>
                    <option value="Novela">Novela</option>
                    <option value="Desarrollo Web">Desarrollo Web</option>
                    <option value="Ficción">Ficción</option>
                    <option value="Historia">Historia</option>
                </select>
            </div>

            <!-- 4. Campo Resumen: Evento de teclado @keyup.enter con modificador .prevent -->
            <div class="form-group">
                <label for="resumen">Resumen / Reseña:</label>
                <textarea id="resumen" v-model="nuevoLibro.resumen" rows="3"
                    placeholder="Escribe un resumen y presiona Enter..." @keyup.enter.prevent="guardarLibro"></textarea>
                <small class="hint">⌨️ Presiona Enter en este cuadro para agregar el libro.</small>
            </div>

            <!-- Botón para Agregar usando @click con modificador .prevent -->
            <button type="button" @click.prevent="guardarLibro">
                ➕ Agregar Libro
            </button>
        </form>

        <!-- Vista previa en tiempo real -->
        <div class="preview-card">
            <h4>👀 Vista previa en tiempo real:</h4>
            <p><strong>Título:</strong> {{ nuevoLibro.titulo || '---' }}</p>
            <p><strong>Autor:</strong> {{ nuevoLibro.autor || '---' }}</p>
            <p><strong>Categoría:</strong> {{ nuevoLibro.categoria || '---' }}</p>
            <p><strong>Resumen:</strong> {{ nuevoLibro.resumen || '---' }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FormularioLibro',
    emits: ['agregar-libro'],
    data() {
        return {
            nuevoLibro: {
                titulo: '',
                autor: '',
                categoria: '',
                resumen: ''
            }
        };
    },
    methods: {
        guardarLibro() {
            if (!this.nuevoLibro.titulo || !this.nuevoLibro.autor || !this.nuevoLibro.categoria) {
                alert('Por favor completa el título, autor y categoría.');
                return;
            }

            this.$emit('agregar-libro', {
                id: Date.now(),
                titulo: this.nuevoLibro.titulo,
                autor: this.nuevoLibro.autor,
                categoria: this.nuevoLibro.categoria,
                resumen: this.nuevoLibro.resumen,
                destacado: false
            });

            // Limpiar campos
            this.nuevoLibro.titulo = '';
            this.nuevoLibro.autor = '';
            this.nuevoLibro.categoria = '';
            this.nuevoLibro.resumen = '';
        }
    }
};
</script>

<style scoped>
.formulario-container {
    background-color: #f8f9fa;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    padding: 20px;
    margin-bottom: 25px;
}

h3 {
    margin-top: 0;
    color: #2c3e50;
}

.form-group {
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
}

label {
    font-weight: bold;
    margin-bottom: 5px;
    color: #4a5568;
}

input,
select,
textarea {
    padding: 8px 12px;
    border: 1px solid #cbd5e0;
    border-radius: 4px;
    font-size: 0.95rem;
}

.hint {
    font-size: 0.75rem;
    color: #718096;
    margin-top: 4px;
}

button {
    background-color: #42b983;
    color: white;
    border: none;
    padding: 10px 16px;
    border-radius: 4px;
    font-weight: bold;
    cursor: pointer;
    width: 100%;
}

button:hover {
    background-color: #3aa876;
}

.preview-card {
    margin-top: 20px;
    padding: 12px;
    background-color: #ffffff;
    border: 1px dashed #42b983;
    border-radius: 6px;
    font-size: 0.9rem;
}

.preview-card h4 {
    margin: 0 0 8px 0;
    color: #42b983;
}

.preview-card p {
    margin: 4px 0;
}
</style>