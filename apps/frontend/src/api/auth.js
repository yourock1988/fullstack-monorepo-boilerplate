import sendRequest from './sendRequest'

async function auth() {
  const url = 'https://pc-shop.web-app.click/api/v0/auth'
  await sendRequest(url)
}

export default auth
