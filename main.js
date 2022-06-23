// import './style.css'

// document.querySelector('#app').innerHTML = `
//   <h1>Hello Vite!</h1>
//   <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
// `

import navbar from "./src/components/navBar.js";
import logoImg from "./src/svg/svgImg.js";

document.querySelector("#head-nav").innerHTML = navbar();

document.querySelector(".logoImg").innerHTML = logoImg();
