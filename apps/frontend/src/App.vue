<script>
import StudentAppender from './components/StudentAppender.vue'
import TableStudents from './components/TableStudents.vue'

export default {
  components: { TableStudents, StudentAppender },
}
</script>

<template>
  <div>
    <table-students></table-students>
    <student-appender></student-appender>
  </div>
</template>
