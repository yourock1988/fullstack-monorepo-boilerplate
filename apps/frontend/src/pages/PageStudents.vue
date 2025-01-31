<script>
import FormStudent from '@/components/page-students/FormStudent.vue'
import TableStudents from '@/components/page-students/TableStudents.vue'

export default {
  components: { TableStudents, FormStudent },
}
</script>

<template>
  <div>
    <table-students></table-students>
    <form-student></form-student>
  </div>
</template>
