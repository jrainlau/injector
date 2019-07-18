function injectCustomJs(jsPath) {
  const temp = document.createElement('script')
  temp.setAttribute('type', 'module')
  temp.src = chrome.extension.getURL(jsPath)
  document.body.appendChild(temp)
}

document.addEventListener('DOMContentLoaded', () => {
  injectCustomJs('js/injector.js')
})