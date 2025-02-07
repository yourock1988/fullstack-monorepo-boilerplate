import sendRequest from './sendRequest'

const url = 'https://university.web-app.click/api/v1/students/'

export async function getStudents() {
  const response = await sendRequest(url)
  return response.payload
}

export async function getStudentById(id) {
  const response = await sendRequest(url + id)
  return response.payload
}

export async function postStudent(student) {
  const response = await sendRequest(url, 'POST', student)
  return response.payload
}

export async function patchStudentById(id, student) {
  const response = await sendRequest(url + id, 'PATCH', student)
  return response.payload
}

export async function deleteStudentById(id) {
  const response = await sendRequest(url + id, 'DELETE')
  return response
}
