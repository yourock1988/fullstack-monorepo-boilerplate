<script>
import StudentAppender from '@/components/widget-students/StudentAppender.vue'
import TableStudents from '@/components/widget-students/TableStudents.vue'

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
