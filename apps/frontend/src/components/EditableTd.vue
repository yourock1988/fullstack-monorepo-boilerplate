<script>
import { mapActions } from 'vuex'

export default {
  props: ['student', 'propName'],

  data() {
    return {
      typeAttrs: {
        string: 'text',
        number: 'number',
        boolean: 'checkbox',
      },

      dataAttrs: {
        string: 'value',
        number: 'value',
        boolean: 'checked',
      },
    }
  },

  computed: {
    propType() {
      return typeof this.student[this.propName]
    },

    inputTypeAttr() {
      return this.typeAttrs[this.propType]
    },

    inputDataAttr() {
      return this.dataAttrs[this.propType]
    },
  },

  methods: {
    ...mapActions('students', ['updateStudentById']),

    handleUpdateInput(event) {
      this.updateStudentById({
        id: this.student.id,
        student: { [this.propName]: event.target[this.inputDataAttr] },
      })
    },
  },
}
</script>

<template>
  <td>
    <input
      :[inputDataAttr]="student[propName]"
      :type="inputTypeAttr"
      @change="handleUpdateInput"
    />
  </td>
</template>
