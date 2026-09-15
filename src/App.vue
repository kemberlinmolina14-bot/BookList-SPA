<template>
  <div class="container">
    <header class="header">
      <h1>Editorial Nova 📚</h1>
      <h2>Bienvenido, {{ userName }}</h2>

      <!-- Modificador .once (Lección 4) -->
      <button class="btn-once" @click.once="mostrarAvisoBienvenida">
        🎁 Reclamar Guía de Bienvenida (Solo 1 uso)
      </button>
      <p v-if="avisoReclamado" class="aviso-exito">¡Guía enviada a tu perfil de usuario!</p>

      <!-- BARRA DE NAVEGACIÓN SPA CON VUE ROUTER -->
      <nav class="nav-bar">
        <router-link to="/">Inicio</router-link> |
        <router-link to="/libros">Catálogo de Libros</router-link>
      </nav>
    </header>

    <hr />

    <!-- VISTA DINÁMICA: Renderiza InicioView, ListaLibros o DetalleLibro -->
    <router-view :libros="libros" @agregar-libro="recibirNuevoLibro" @eliminar-libro="eliminarLibroDeLista" />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userName: 'Desarrollador Frontend',
      avisoReclamado: false,
      libros: [
        { id: 1, titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez', categoria: 'Novela', destacado: true, resumen: 'Una obra maestra del realismo mágico.' },
        { id: 2, titulo: 'Clean Code', autor: 'Robert C. Martin', categoria: 'Desarrollo Web', destacado: false, resumen: 'Guía para escribir código limpio y mantenible.' }
      ]
    };
  },
  methods: {
    recibirNuevoLibro(libro) {
      this.libros.push(libro);
    },
    eliminarLibroDeLista(id) {
      this.libros = this.libros.filter(libro => libro.id !== id);
    },
    mostrarAvisoBienvenida() {
      this.avisoReclamado = true;
    }
  }
};
</script>

<style scoped>
.container {
  font-family: Arial, sans-serif;
  max-width: 650px;
  margin: 30px auto;
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.header h1 {
  color: #2c3e50;
  margin-bottom: 5px;
}

.header h2 {
  color: #42b983;
  font-size: 1.1rem;
}

.btn-once {
  background-color: #3182ce;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.85rem;
  margin-top: 10px;
}

.btn-once:hover {
  background-color: #2b6cb0;
}

.aviso-exito {
  color: #38a169;
  font-weight: bold;
  font-size: 0.85rem;
  margin-top: 5px;
}

.nav-bar {
  margin-top: 15px;
}

.nav-bar a {
  color: #2c3e50;
  text-decoration: none;
  font-weight: bold;
  margin: 0 10px;
}

.nav-bar a.router-link-exact-active {
  color: #42b983;
  border-bottom: 2px solid #42b983;
}
</style>