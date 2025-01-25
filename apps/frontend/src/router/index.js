const routes = {
  '/': '/assets/html/home.html',
  '/about/': '/assets/html/about.html',
  '/contacts/': '/assets/html/contacts.html',
}

function resolveLocation(pathname) {
  window.history.pushState(null, '', pathname)
  loadPage(pathname)
}

async function loadPage(pathname) {
  const route = routes[pathname]
  const resp = await fetch(route)
  const html = await resp.text()
  renderContent(html)
}

function renderContent(html) {
  const elContent = document.querySelector('.content')
  elContent.innerHTML = html
}

function renderApp() {
  const elApp = document.querySelector('#app')
  elApp.innerHTML = `
    <h1>SPA</h1>
    <span onclick="resolveLocation('/')">home</span>
    <span onclick="resolveLocation('/contacts/')">contacts</span>
    <span onclick="resolveLocation('/about/')">about</span>
    <div class="content"></div>
  `
}

window.resolveLocation = resolveLocation

renderApp()
resolveLocation(window.location.pathname)
