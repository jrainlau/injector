# Injector

![](./images/logo.png)

**Injector** is a Chrome extension for injecting custom stylesheet to any website.

## Install
1. Open [Chrome extensions page](chrome://extensions), turn on the "Developer mode" from the top right, then drag [Injector.crx](https://github.com/jrainlau/injector/releases/download/0.0.1/injector.crx) into the page.

2. Done!

## Usage
**Injector** should be used from the *console panel*. Press `cmd + option + i` (MacOS) or `F12` (Windows) to open up the developer tool, and switch to the *console panel*.

- `Injector.inject(String)`
  
  The `inject()` methods receives a stylesheet url string or a stylesheet text string as its param. It detects whether the string is a url or a normal text automatically, and inject the stylesheet to the page.

- `Injector.clear()`

  Clear all the injected stylesheet from the page.

# Lisence
MIT