<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      appendableStudent: {
        firstName: 'q',
        secondName: 'qq',
        age: 1,
        isOnBudget: true,
        faculty: 'qqq',
      },
    }
  },

  methods: {
    ...mapActions('students', ['createStudent']),
  },
}
</script>

<template>
  <div class="wrap-form">
    <form @submit.prevent="createStudent(appendableStudent)">
      <div>
        <input v-model="appendableStudent.firstName" />
      </div>
      <div>
        <input v-model="appendableStudent.secondName" />
      </div>
      <div>
        <input v-model="appendableStudent.age" type="number" />
      </div>
      <div>
        <input v-model="appendableStudent.isOnBudget" type="checkbox" />
      </div>
      <div>
        <input v-model="appendableStudent.faculty" />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  </div>
</template>
