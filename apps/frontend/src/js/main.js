function resolveLocation(pathname) {
  window.history.pushState(null, '', pathname)
  loadPage(pathname)
}

async function loadPage(pathname) {
  const resp = await fetch(pathname)
  const html = await resp.text()
  renderContent(html)
}

function renderContent(html) {
  const elContent = document.querySelector('.content')
  elContent.innerHTML = html
}

const routes = {
  '/': './index.html',
  about: './about.html',
  contacts: './contacts.html',
}

resolveLocation(window.location.pathname)
