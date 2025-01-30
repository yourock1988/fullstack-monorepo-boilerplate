<script>
import { mapActions, mapGetters } from 'vuex'
import TableThead from './TableThead.vue'
import EditableTd from './EditableTd.vue'

export default {
  components: { TableThead, EditableTd },

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
    <table-thead :column-captions="columnCaptions"></table-thead>
    <tbody>
      <tr v-for="student of getStudents" :key="student.id">
        <th>{{ student.id }}</th>
        <editable-td
          v-for="columnCaption of columnCaptions"
          :key="student.id + columnCaption"
          :student="student"
          :prop-name="columnCaption"
        ></editable-td>
        <td>
          <button @click="deleteStudentById(student.id)">delete</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>
