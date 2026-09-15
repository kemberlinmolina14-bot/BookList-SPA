<template>
    <div class="inicio-container">
        <h2>Página Principal</h2>
        <p>Bienvenido al sistema de gestión bibliográfica de <strong>Editorial Nova</strong>.</p>

        <div class="banner">
            <h3>📚 Catálogo Digital</h3>
            <p>Administra tu colección, registra nuevos títulos y revisa la ficha técnica detallada de cada libro.</p>
            <router-link to="/libros" class="btn-ir">Ver Catálogo de Libros</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'InicioView'
};
</script>

<style scoped>
.inicio-container {
    text-align: center;
    padding: 10px;
}

h2 {
    color: #2c3e50;
}

.banner {
    background-color: #f0fdf4;
    border: 1px solid #bbf7d0;
    border-radius: 8px;
    padding: 25px;
    margin-top: 20px;
}

.btn-ir {
    display: inline-block;
    margin-top: 15px;
    background-color: #42b983;
    color: white;
    text-decoration: none;
    padding: 10px 18px;
    border-radius: 6px;
    font-weight: bold;
}

.btn-ir:hover {
    background-color: #3aa876;
}
</style>