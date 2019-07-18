const STYLE_KEY = '_injector_style'

const logger = (msg) => {
  console.log(
    ` %c Injector: %c ${msg.replace(/[\r\n]/g, '')} %c`,
    'background:#35495e ; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff',
    'background:#41b883 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff',
    'background:transparent'
  )
}

class Injector {
  static async _setInject (style) {
    const content = style.endsWith('.css') ? await fetch(style).then(res => res.text()) : style
    const styleTag = document.createElement('style')
    styleTag.innerHTML = content
    document.querySelector('head').appendChild(styleTag)
  }

  static getInjected () {
    logger('Injector is ready.')

    const style = localStorage.getItem(STYLE_KEY)
    if (style) {
      Injector._setInject(style)
      logger(style)
    }
  }

  static inject (content) {
    Injector._setInject(content)
    localStorage.setItem(STYLE_KEY, content)
    logger(`Style injected succeed.`)
  }

  static clear () {
    localStorage.removeItem(STYLE_KEY)
    location.reload()
  }
}

window.Injector = Injector

window.Injector.getInjected()
