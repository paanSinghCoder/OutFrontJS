
<!-- PROJECT SHIELDS -->
<!-- [![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url] -->



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">OutFront JS 🚀</h3>

  <p align="center">
    DOM Console logger for JavaScript.
    <br />
    <a href="" target="_blank"><strong>See Demo »</strong></a>
    <br />
    <br />
    <a href="https://github.com/paansinghcoder/outfrontjs/issues">Report Bug</a>
    ·
    <a href="https://github.com/paanSinghCoder/OutFrontJS/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<!-- <details open="open"> -->
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
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
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

OutFront JS intercepts all your console.log, console.warn, console.error and errors and logs them into a popup on screen itself(DOM). This can be useful in scenarios where you don't have access to Chrome, Firefox, Edge etc. inspect panels.

Example scenario to use OutFront JS:
* You want to debug your webapp in a mobile browser where access to console is not present. Example: Chinese mobile browsers.
* You want your tester to see console.logs straight on the screen.

### Built With

OutFront is extremely light weight and built with: 
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)



<!-- GETTING STARTED -->
## Getting Started

OutFront can be used with any web based projects and frameworks such as React, Angular etc.

### Installation

OutFront requires Node to be installed in order to use yarn/npm.
* npm
  ```sh
  npm install outfront
  ```
* yarn
  ```sh
  yarn add outfront
  ```

<!-- USAGE EXAMPLES -->
## Usage

After installation import OutFront to your project and call `outfront()` function on the very top of project tree(for example index.js):

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import outfront from 'outfront' // import outfront JS

outfront() // Call it on top of project.

ReactDOM.render(
  <HelloMessage name="Taylor" />,
  document.getElementById('container')
);
```

``` 
Note: Above example shows usage with React but, OutFront is built with vanilla JS and 
      can be practically used with any JS framework/library.
```

<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/othneildrew/Best-README-Template/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
<!-- [contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png -->
