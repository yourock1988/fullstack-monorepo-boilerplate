<script>
import StudentAppender from './components/StudentAppender.vue'
import TableStudents from './components/TableStudents.vue'

export default {
  components: { TableStudents, StudentAppender },
}
</script>

<template>
  <h1>Hello App!</h1>
  <p><strong>Текущий путь маршрута:</strong> {{ $route.fullPath }}</p>
  <nav>
    <RouterLink to="/">Go to Home</RouterLink>
    <RouterLink to="/about">Go to About</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
  <div>
    <table-students></table-students>
    <student-appender></student-appender>
  </div>
</template>
