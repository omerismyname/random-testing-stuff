(this.webpackJsonptesting=this.webpackJsonptesting||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var i=n(1),c=n.n(i),s=n(4),a=n.n(s),r=(n(9),n(3)),o=(n(10),n(0));function h(){var e=Object(i.useState)(null),t=Object(r.a)(e,2),n=t[0],c=t[1],s=Object(i.useState)(window.history.state||new URLSearchParams(new URL(window.location.href).search).get("dir")||"web-stuff"),a=Object(r.a)(s,2),h=a[0],j=a[1];return Object(i.useEffect)((function(){fetch("https://api.omer.ws/tree",{cache:"no-cache"}).then((function(e){if(e.ok)return e})).then((function(e){return e.json()})).then((function(e){c(e)}))}),[]),window.onpopstate=function(){j(window.history.state||new URLSearchParams(new URL(window.location.href).search).get("dir")||"web-stuff")},Object(o.jsxs)("div",{className:"app",children:[Object(o.jsx)("header",{children:Object(o.jsx)("a",{href:"/",children:Object(o.jsx)("img",{src:"/favicons/icon-144.png",alt:"Logo"})})}),Object(o.jsx)(l,{tree:n,dir:h,setDir:j})]})}function l(e){var t=e.tree,n=e.dir,i=e.setDir;if(null===t)return Object(o.jsx)("div",{});var c=function(e,t){for(var n=[],i=t.split("/").length+1,c=0;c<e.length;c++)e[c].path.startsWith(t)&&e[c].path.split("/").length===i&&n.push(e[c]);return n}(t,n).map((function(e){return"tree"===e.type?Object(o.jsx)(j,{folder:e,setDir:i},e.sha):Object(o.jsx)(f,{file:e,dir:n},e.sha)}));return"web-stuff"!==n&&c.unshift(Object(o.jsx)("div",{className:"item",onClick:function(){return window.history.back()},children:Object(o.jsx)("img",{className:"item-icon",src:"/icons/back.svg",alt:"back"})},"back")),Object(o.jsx)("main",{className:"explorer",children:c})}function j(e){var t=e.folder,n=e.setDir,i=t.path.split("/").pop();return Object(o.jsxs)("div",{className:"item",onClick:function(){n(t.path),window.history.pushState(t.path,"Testing - "+i,"?dir=".concat(encodeURIComponent(t.path)))},children:[Object(o.jsx)("img",{className:"item-icon",src:"/icons/folder.svg",alt:"folder"}),Object(o.jsx)("span",{className:"item-name",children:i})]})}function f(e){var t=e.file;e.dir;return Object(o.jsx)("a",{href:"/"+t.path,children:Object(o.jsxs)("div",{className:"item",children:[Object(o.jsx)("img",{className:"item-icon",src:"/icons/file.svg",alt:"file"}),Object(o.jsx)("span",{className:"item-name",children:t.path.split("/").pop()}),Object(o.jsx)("span",{className:"item-size",children:u(t.size)})]})})}function u(e){var t=Math.max(Math.min(Math.floor(Math.log10(e)/3),5),0);return Math.round(e/Math.pow(1e3,t)*100)/100+["B","KB","MB","GB","TB","PB"][t]}var d=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),i(e),c(e),s(e),a(e)}))};a.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(h,{})}),document.getElementById("root")),d()},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.1758bb78.chunk.js.map