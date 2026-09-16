<template>
    <div class="inicio-container">
        <h2>Página de Inicio</h2>
        <p>Bienvenido a la plataforma de gestión de la <strong>Editorial Nova</strong>.</p>
        <div class="hero-box">
            <h3>BookList SPA</h3>
            <p>Explora nuestro catálogo completo de libros, registra nuevas obras y consulta sus detalles en tiempo
                real.</p>
            <router-link to="/libros" class="btn btn-primary">Ver Catálogo de Libros</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'InicioView'
}
</script>

<style scoped>
.inicio-container {
    text-align: center;
    padding: 20px 0;
}

.hero-box {
    background-color: #eef7fc;
    border-left: 5px solid #3498db;
    padding: 25px;
    border-radius: 8px;
    margin-top: 20px;
}

.btn-primary {
    display: inline-block;
    background-color: #3498db;
    color: white;
    padding: 10px 20px;
    border-radius: 4px;
    text-decoration: none;
    font-weight: bold;
    margin-top: 15px;
}
</style>