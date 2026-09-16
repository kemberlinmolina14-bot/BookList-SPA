<template>
    <div class="form-container">
        <h3>Añadir Nuevo Libro</h3>

        <form @submit.prevent="guardarLibro">
            <!-- Mensaje de error / advertencia -->
            <div v-if="mensajeError" class="error-box">
                ⚠️ {{ mensajeError }}
            </div>

            <!-- Input Título -->
            <div class="form-group">
                <label for="titulo">Título del Libro:</label>
                <input id="titulo" v-model="nuevoLibro.titulo" type="text" placeholder="Ej. Rayuela" required
                    @keydown.enter.prevent="enfocarCampo('autorInput')" />
            </div>

            <!-- Input Autor -->
            <div class="form-group">
                <label for="autor">Autor:</label>
                <input id="autor" ref="autorInput" v-model="nuevoLibro.autor" type="text"
                    placeholder="Ej. Julio Cortázar" required
                    @keydown.enter.prevent="enfocarCampo('categoriaSelect')" />
            </div>

            <!-- Select Categoría -->
            <div class="form-group">
                <label for="categoria">Categoría:</label>
                <select id="categoria" ref="categoriaSelect" v-model="nuevoLibro.categoria" required
                    @keydown.enter.prevent="enfocarCampo('resumenTextarea')">
                    <option value="" disabled>Seleccione una categoría</option>
                    <option value="Novela">Novela</option>
                    <option value="Clásico">Clásico</option>
                    <option value="Cuentos">Cuentos</option>
                    <option value="Fantasía">Fantasía</option>
                    <option value="Ensayo">Ensayo</option>
                </select>
            </div>

            <!-- Textarea Resumen -->
            <div class="form-group">
                <label for="resumen">Resumen / Descripción:</label>
                <textarea id="resumen" ref="resumenTextarea" v-model="nuevoLibro.resumen" rows="3"
                    placeholder="Breve resumen del libro... (Presiona Enter para agregar)"
                    @keydown.enter.exact.prevent="guardarLibro"></textarea>
            </div>

            <div class="action-buttons">
                <button type="submit" class="btn btn-save">Añadir al Catálogo</button>
                <button type="button" @click.once="mostrarConsejo" class="btn btn-info">
                    💡 Ver Consejo (Solo una vez)
                </button>
            </div>
        </form>

        <p v-if="mensajeConsejo" class="consejo-box">{{ mensajeConsejo }}</p>

        <!-- Vista previa en tiempo real -->
        <div class="preview-box">
            <h4>Vista Previa en Tiempo Real:</h4>
            <p><strong>Título:</strong> {{ nuevoLibro.titulo || '(Sin título)' }}</p>
            <p><strong>Autor:</strong> {{ nuevoLibro.autor || '(Sin autor)' }}</p>
            <p><strong>Categoría:</strong> {{ nuevoLibro.categoria || '(Sin categoría)' }}</p>
            <p><strong>Resumen:</strong> {{ nuevoLibro.resumen || '(Sin resumen)' }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FormularioLibro',
    data() {
        return {
            nuevoLibro: {
                titulo: '',
                autor: '',
                categoria: '',
                resumen: '',
                disponible: true
            },
            mensajeConsejo: '',
            mensajeError: ''
        }
    },
    emits: ['agregar-libro'],
    methods: {
        enfocarCampo(nombreRef) {
            if (this.$refs[nombreRef]) {
                this.$refs[nombreRef].focus()
            }
        },
        guardarLibro() {
            // Validar si falta algún campo obligatorio
            if (!this.nuevoLibro.titulo.trim() || !this.nuevoLibro.autor.trim() || !this.nuevoLibro.categoria) {
                this.mensajeError = 'Por favor, llena todos los campos obligatorios (Título, Autor y Categoría) antes de agregar el libro.'
                return
            }

            // Si están completos, limpiar el mensaje de error y emitir el evento
            this.mensajeError = ''
            this.$emit('agregar-libro', { ...this.nuevoLibro, id: Date.now() })

            // Reiniciar formulario
            this.nuevoLibro.titulo = ''
            this.nuevoLibro.autor = ''
            this.nuevoLibro.categoria = ''
            this.nuevoLibro.resumen = ''
        },
        mostrarConsejo() {
            this.mensajeConsejo = '¡Consejo! Puedes usar la tecla Enter para avanzar entre casillas o el botón para guardar.'
        }
    }
}
</script>

<style scoped>
.form-container {
    background-color: #f4f6f8;
    padding: 20px;
    border-radius: 8px;
    margin-bottom: 25px;
}

.error-box {
    background-color: #f8d7da;
    color: #721c24;
    border: 1px solid #f5c6cb;
    padding: 10px;
    border-radius: 4px;
    margin-bottom: 15px;
    font-weight: bold;
}

.form-group {
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
}

.form-group label {
    font-weight: bold;
    margin-bottom: 5px;
}

.form-group input,
.form-group select,
.form-group textarea {
    padding: 8px 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 0.95rem;
}

.action-buttons {
    display: flex;
    gap: 10px;
}

.btn-save {
    background-color: #3498db;
    color: white;
    flex: 2;
    padding: 10px;
    border: none;
    border-radius: 4px;
    font-weight: bold;
    cursor: pointer;
}

.btn-info {
    background-color: #17a2b8;
    color: white;
    flex: 1;
    padding: 10px;
    border: none;
    border-radius: 4px;
    font-weight: bold;
    cursor: pointer;
}

.consejo-box {
    margin-top: 10px;
    padding: 10px;
    background-color: #e2e3e5;
    border-radius: 4px;
    font-size: 0.9rem;
}

.preview-box {
    margin-top: 20px;
    padding: 12px;
    background-color: #eef7fc;
    border-left: 4px solid #3498db;
    border-radius: 4px;
}
</style>