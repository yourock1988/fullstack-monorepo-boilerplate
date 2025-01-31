<script>
import { mapActions, mapGetters } from 'vuex'
import TheadPart from './TheadPart.vue'
import TdEditable from './TdEditable.vue'

export default {
  components: { TheadPart, TdEditable },

  computed: {
    ...mapGetters('students', ['getStudents']),

    columnCaptions() {
      return Object.keys(this.getStudents[0] ?? {}).filter(key => key !== 'id')
    },
  },

  created() {
    // eslint-disable-next-line vue/no-undef-properties
    this.readStudents()
  },

  methods: {
    ...mapActions('students', ['readStudents', 'deleteStudentById']),
  },
}
</script>

<template>
  <table>
    <thead-part :column-captions="columnCaptions"></thead-part>
    <tbody>
      <tr v-for="student of getStudents" :key="student.id">
        <th>{{ student.id }}</th>
        <td-editable
          v-for="columnCaption of columnCaptions"
          :key="student.id + columnCaption"
          :student="student"
          :prop-name="columnCaption"
        ></td-editable>
        <td>
          <button @click="deleteStudentById(student.id)">delete</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>
