!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=1)}([function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(a=r,l=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l),"/*# ".concat(c," */")),i=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(i).concat([o]).join("\n")}var a,l,c;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var l=0;l<e.length;l++){var c=[].concat(e[l]);r&&o[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},function(e,t,n){n(5),e.exports=n(2)},function(e,t,n){var r=n(3),o=n(4);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);e.exports=o.locals||{}},function(e,t,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function l(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},r=[],o=0;o<e.length;o++){var i=e[o],c=t.base?i[0]+t.base:i[0],s=n[c]||0,u="".concat(c," ").concat(s);n[c]=s+1;var d=l(u),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==d?(a[d].references++,a[d].updater(p)):a.push({identifier:u,updater:g(p,t),references:1}),r.push(u)}return r}function s(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var u,d=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function p(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function m(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var h=null,f=0;function g(e,t){var n,r,o;if(t.singleton){var i=f++;n=h||(h=s(t)),r=p.bind(null,n,i,!1),o=p.bind(null,n,i,!0)}else n=s(t),r=m.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=l(n[r]);a[o].references--}for(var i=c(e,t),s=0;s<n.length;s++){var u=l(n[s]);0===a[u].references&&(a[u].updater(),a.splice(u,1))}n=i}}}},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r)()(!1);o.push([e.i,"\r\n.container{\r\n    background-color:red;\r\n    height: 610px;\r\n    width: 610px;\r\n    display: grid;\r\n    grid-column-gap: 5px;\r\n    grid-template-columns: auto auto auto;\r\n    grid-row-gap: 5px;\r\n    grid-template-rows: auto auto auto;\r\n    margin: auto;\r\n\r\n  }\r\n  .cell{\r\n    height: 200px;\r\n    width: 200px;\r\n    background-color:rgb(3, 3, 3);\r\n    text-align:center;\r\n    }\r\n   img{\r\n    height: 150px;\r\n    width: 150px;\r\n    padding-top: 20px\r\n   }\r\n   .playButton{\r\n     background-color: rgb(255, 0, 0);\r\n     border-radius:5px;\r\n     border: solid rgb(2, 2, 2);\r\n     height: 50px;\r\n    width: 150px;\r\n    margin: auto;\r\n    color: white;\r\n    text-emphasis: bold;\r\n\r\n   }\r\n   .homeContainer{\r\n    background-color:rgba(241, 236, 236, 0);\r\n    height: 610px;\r\n    width: 610px;\r\n    display: grid;\r\n    margin: auto;\r\n    margin-top: 100px;\r\n   }\r\n   .xoImage{\r\n    height: 500px;\r\n    width: 500px;\r\n   }\r\n   .hidden{\r\n     display: none;\r\n   }\r\n   .restButton{\r\n    background-color: rgb(0, 204, 255);\r\n    border-radius:5px;\r\n    border: solid rgb(2, 2, 2);\r\n    height: 50px;\r\n   width: 150px;\r\n   margin: auto;\r\n   color: rgb(0, 0, 0);\r\n   }\r\n   .TopDiv{\r\n    width: 610px;\r\n    display: grid;\r\n    grid-row-gap: 5px;\r\n    margin: auto;\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n\r\n   }\r\n   .textSpan{\r\n    height: 50px;\r\n    width: 200px;\r\nfont-weight: bold;\r\nfont-size: medium;\r\ntext-align: center;\r\n  }",""]),t.default=o},function(e,t,n){"use strict";n.r(t);class r{constructor(e){this.symbole=e,this.cellNumbers=[],this.score=0}getSymbole(){return this.symbole}addClickedCells(e){this.cellNumbers.push(e)}getClickedCells(){return this.cellNumbers}}class o{constructor(){this.gamebuilder=new i,this.player1=new r("X"),this.player2=new r("O"),this.playingPalyer=this.player1}gameStart(e){let t=document.querySelector(".textSpan");this.playingPalyer.addClickedCells(e),this.checkWin(this.playingPalyer.cellNumbers)?(t.innerText="Player "+this.playingPalyer.symbole+" Win",this.gamebuilder.xoInsertion(this.playingPalyer.symbole,e),setTimeout((function(){(new i).endGame()}),1e3)):(this.gamebuilder.xoInsertion(this.playingPalyer.symbole,e),this.playingPalyer="X"===this.playingPalyer.symbole?this.player2:this.player1)}checkWin(e){let t=new RegExp("(?=.*0)(?=.*1)(?=.*2)|(?=.*3)(?=.*4)(?=.*5)|(?=.*6)(?=.*7)(?=.*8)|(?=.*1)(?=.*4)(?=.*7)|(?=.*2)(?=.*5)(?=.*8)|(?=.*0)(?=.*4)(?=.*8)|(?=.*0)(?=.*4)(?=.*6)");const n=e.join("");return e.length>=3&&t.test(n)}}class i{buildHome(){const e=new o,t=document.createElement("div");t.className="homeContainer";let n=document.createElement("img");n.setAttribute("src","./images/xo.png"),n.setAttribute("class","xoImage");let r=document.createElement("button");r.setAttribute("class","playButton"),r.setAttribute("type","button"),r.innerText=" Play",r.addEventListener("click",()=>{t.remove(),this.gameBuild();Array.prototype.slice.call(document.querySelectorAll(".cell")).forEach((t,n)=>{t.addEventListener("click",(function(){e.gameStart(n)}),{once:!0})})}),t.appendChild(n),t.appendChild(r),document.body.appendChild(t)}buildCell(){let e="";for(let t=0;t<9;t++)e+=`<div class='cell cell${t}'></div>`;return e}buildCells(){const e=document.createElement("div");e.className="container",e.innerHTML=this.buildCell(),document.body.appendChild(e)}gameBuild(){const e=document.createElement("button");e.setAttribute("class","restButton"),e.setAttribute("type","button"),e.innerText=" Rest",e.addEventListener("click",()=>{this.endGame()});const t=document.createElement("div"),n=document.createElement("span");t.setAttribute("class","TopDiv"),n.setAttribute("class","textSpan"),t.appendChild(e),t.appendChild(n),document.body.appendChild(t),this.buildCells()}xoInsertion(e,t){let n=document.querySelectorAll(".cell"),r=document.createElement("img");"X"===e?(r.setAttribute("src","images/x.png"),n[t].appendChild(r),console.log(r)):"O"===e&&(r.setAttribute("src","images/o.png"),n[t].appendChild(r),console.log(r))}endGame(){const e=new o;let t=document.querySelector(".container"),n=document.querySelector(".textSpan");t.remove(),n.innerText="Keep Playing",this.buildCells();Array.prototype.slice.call(document.querySelectorAll(".cell")).forEach((t,n)=>{t.addEventListener("click",(function(){e.gameStart(n)}),{once:!0})})}}(new i).buildHome()}]);