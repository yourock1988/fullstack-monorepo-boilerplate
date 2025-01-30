<script>
export default {}
</script>

<template>
  <h1>Vue Router</h1>
  <p><strong>Текущий путь маршрута: </strong> {{ $route.fullPath }}</p>
  <nav>
    <RouterLink to="/">Go to Home</RouterLink>
    <span> | </span>
    <RouterLink to="/students">Go to Students</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>
