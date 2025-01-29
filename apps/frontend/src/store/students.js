import * as apiStudents from '../api/students'

export default {
  namespaced: true,

  state() {
    return {
      students: [],
    }
  },

  getters: {
    getStudents(state) {
      return state.students.toSorted(({ id }, { id: prevId }) => id - prevId)
    },

    getCountStudents(state) {
      return state.students.length
    },

    getBudgetStudents(state) {
      return state.students.filter(student => student.isOnBudget)
    },

    getCountBudgetStudents(_, getters) {
      return getters.getBudgetStudents.length
    },
  },

  mutations: {
    SET_STUDENTS(state, students) {
      state.students = students
    },

    ADD_STUDENT(state, student) {
      state.students.push(student)
    },

    UPDATE_STUDENT_BY_ID(state, id, updatedStudent) {
      const findedStudent = state.students.find(student => student.id === id)
      if (findedStudent) Object.assign(findedStudent, updatedStudent)
    },

    REMOVE_STUDENT_BY_ID(state, id) {
      state.students = state.students.filter(student => student.id !== id)
    },
  },

  actions: {
    async createStudent({ commit }, student) {
      const createdStudent = await apiStudents.postStudent(student)
      commit('ADD_STUDENT', createdStudent)
    },

    async readStudents({ commit }) {
      const readedStudents = await apiStudents.getStudents()
      commit('SET_STUDENTS', readedStudents)
    },

    async updateStudentById({ commit }, { id, student }) {
      const updatedStudent = await apiStudents.patchStudentById(id, student)
      commit('UPDATE_STUDENT_BY_ID', id, updatedStudent)
    },

    async deleteStudentById({ commit }, id) {
      await apiStudents.deleteStudentById(id)
      commit('REMOVE_STUDENT_BY_ID', id)
    },
  },
}
