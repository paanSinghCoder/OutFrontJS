[![Awesome Badges](https://img.shields.io/badge/badges-awesome-green.svg)](https://github.com/Naereen/badges) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/paanSinghCoder/OutFrontJS/LICENSE) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/paanSinghCoder/OutFrontJS#contributing) [![made-with-javascript](https://img.shields.io/badge/Made%20with-JavaScript-1f425f.svg)](https://www.javascript.com) [![Npm package yearly downloads](https://badgen.net/npm/dy/express)](https://npmjs.com/package/outfront) [![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/Naereen/StrapDown.js/graphs/commit-activity) [![GitHub stars](https://img.shields.io/github/stars/Naereen/StrapDown.js.svg?style=social&label=Star&maxAge=2592000)](https://GitHub.com/paanSinghCoder/OutFrontJS) [![JavaScript](https://img.shields.io/badge/--F7DF1E?logo=javascript&logoColor=000)](https://www.javascript.com/) [![Open Source? Yes!](https://badgen.net/badge/Open%20Source%20%3F/Yes%21/blue?icon=github)](https://github.com/Naereen/badges/)

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/paansinghcoder/outfrontjs">
    <img src="https://user-images.githubusercontent.com/9462473/121512700-9f3ba480-ca07-11eb-8020-c873e045c6ca.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">OutFront JS 🚀</h3>

  <p align="center">
    Console for mobile browsers.
    <br />
    <a href="https://outfront-demo.netlify.app" target="_blank"><strong>See Demo »</strong></a>
    <br />
    <br />
    <a href="https://github.com/paansinghcoder/outfrontjs/issues">Report Bug</a>
    ·
    <a href="https://github.com/paanSinghCoder/OutFrontJS/issues">Request Feature</a>
    ·
    <a href="https://www.npmjs.com/package/outfront">See on NPM</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<!-- <details open="open"> -->
<!--   <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#demo">Demo</a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details> -->

<p align="center">
    <img alt="screenshot-outfront" width="300px" src="https://user-images.githubusercontent.com/9462473/121725725-43584500-cb07-11eb-9208-59989b990bd6.png" />
</p>

  <p align="center">
      <a href="https://www.producthunt.com/posts/outfront-js?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-outfront-js" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=299755&theme=light" alt="OutFront JS - Console log for mobile browsers. | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" /></a>
  </p>

<!-- ABOUT THE PROJECT -->

## About The Project

<!-- ![demo-img](https://user-images.githubusercontent.com/9462473/121516034-6a315100-ca0b-11eb-8455-793ca024ec01.jpeg | width=100) -->
<!-- ![screenshot](https://user-images.githubusercontent.com/9462473/121516751-3571c980-ca0c-11eb-97ba-63aad767bafd.png) -->

OutFront provides an onscreen console for mobile browsers 🔥

Intercepts all your console.log, console.warn, console.error and errors and logs them into a popup on screen itself(DOM). This can be useful in scenarios where you don't have access to Chrome, Firefox, Edge etc. inspect panels.

Example scenario to use OutFront JS:

-   You want to debug your webapp in a mobile browser or Webview where access to console is not present. Example: Chinese mobile browsers.
-   You want your tester to see console.logs straight on the screen.

OutFront JS intercepts following console methods currently:

-   `console.log`
-   `console.warn`
-   `console.error`
-   `console.debug`
-   `console.info`
-   `Inbuilt Javascript errors`

<!-- GETTING STARTED -->

### Demo

A demo is worth a thousand words.
[See demo](https://outfront-demo.netlify.app/)

### Built With

OutFront is extremely light weight and built with:

-   [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

<!-- GETTING STARTED -->

## Getting Started

OutFront **can be used with any web based projects and frameworks** such as React, Angular etc.

### Installation

OutFront requires Node to be installed in order to use yarn/npm.

-   npm
    ```sh
    npm install outfront
    ```
-   yarn
    ```sh
    yarn add outfront
    ```

<!-- USAGE EXAMPLES -->

## Usage

After installation import OutFront to your project and call `outfront()` function on the very top of project tree(for example index.js):

```jsx
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import outfront from 'outfront' // import outfront JS

outfront() // Call it on top of project.

ReactDOM.render(<HelloMessage name="Taylor" />, document.getElementById('container'))
```

## Pass config (optional)

Customize Outfront's behaviour by optionally passing config as an object:

```jsx
...

const config = {
  defaultOpen: true, // true/false (default = false) - Console will be open by default on page load.
  fullSize: true, // true/false (default = false) - Console will go full-screen (almost).
  opacity: 10 // 1-10 (default = 10) - Console opacity.
}

outfront(config) // Pass config object to outfront.

...
```

```
Note: Above example shows usage with React but, OutFront is built with vanilla JS and
      can be practically used with any JS framework/library.
```

<!-- ROADMAP -->

## Roadmap

See the [open issues](https://github.com/paansinghcoder/outfrontjs/issues) for the list of known issues.

See the [Product board](https://github.com/paanSinghCoder/OutFrontJS/projects/1) for the list of proposed features

<!-- CONTRIBUTING -->

## Contributing

**Consider starring this project on Github.**

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<div>Icon made by <a href="" title="iconixar">iconixar</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
