const LINK_KEY ='_injector_links'
const STYLE_KEY = '_injector_styles'

const logger = (msg) => {
  console.log(
    ` %c Injector: %c ${msg.replace(/[\r\n]/g, '')} %c`,
    'background:#35495e ; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff',
    'background:#41b883 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff',
    'background:transparent'
  )
}

class Injector {
  static styleList = []
  static linkList = []

  static _setInject (url, type = 'link') {
    if (type === 'link') {
      const linkTag = document.createElement('link')
      linkTag.href = url
      document.querySelector('head').appendChild(linkTag)
    } else if (type === 'style') {
      const styleTag = document.createElement('style')
      styleTag.innerHTML = url
      document.querySelector('head').appendChild(styleTag)
    }
  }

  static getInjected () {
    logger('Injector is ready.')
    logger('Apis: .injectFromUrl(), .injectFromText()')

    const links = localStorage.getItem(LINK_KEY)
    if (links) {
      Injector.linkList = links.split(',')
      Injector.linkList.forEach(href => {
        Injector._setInject(href)
      })
      logger(`${Injector.linkList}`)
    }

    const styles = localStorage.getItem(STYLE_KEY)
    if (styles) {
      Injector.styleList = JSON.parse(styles)
      Injector.styleList.forEach(href => {
        Injector._setInject(href, 'style')
      })
      logger(`${Injector.styleList}`)
    }
  }

  static injectFromUrl (url) {
    if (url.endsWith('.css')) {
      Injector.linkList.push(url)
      Injector._setInject(url)
      localStorage.setItem(LINK_KEY, [...new Set(Injector.linkList)])
    } else {
      throw new Error('Only .css url was allowed!')
    }
  }

  static injectFromText (styleText) {
    Injector._setInject(styleText, 'style')
    Injector.styleList.push(styleText)
    localStorage.setItem(STYLE_KEY, JSON.stringify([...new Set(Injector.styleList)]))
    logger(`Style injected succeed.`)
  }
}

window.Injector = Injector

window.Injector.getInjected()
