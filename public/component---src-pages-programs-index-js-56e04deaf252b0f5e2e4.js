(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"30+C":function(e,t,a){"use strict";var n=a("wx14"),o=a("Ff2n"),r=a("q1tI"),i=(a("17x9"),a("iuhU")),s=a("kKAo"),c=a("H2TA"),l=r.forwardRef((function(e,t){var a=e.classes,c=e.className,l=e.raised,d=void 0!==l&&l,p=Object(o.a)(e,["classes","className","raised"]);return r.createElement(s.a,Object(n.a)({className:Object(i.a)(a.root,c),elevation:d?8:1,ref:t},p))}));t.a=Object(c.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(l)},"6Cl6":function(e,t,a){},"9a8T":function(e,t,a){(function(t){a("V+eJ"),a("bWfx"),a("xfY5"),a("KKXr"),a("0l/t"),a("91GP"),a("HAE/"),a("8+KV"),a("pIFo"),a("a1Th"),a("h7Nl"),a("Btvt"),e.exports=function(){"use strict";var e="undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{},a="Expected a function",n=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,i=/^0o[0-7]+$/i,s=parseInt,c="object"==typeof e&&e&&e.Object===Object&&e,l="object"==typeof self&&self&&self.Object===Object&&self,d=c||l||Function("return this")(),p=Object.prototype.toString,u=Math.max,m=Math.min,f=function(){return d.Date.now()};function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function h(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==p.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var a=r.test(e);return a||i.test(e)?s(e.slice(2),a?2:8):o.test(e)?NaN:+e}var v=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError(a);return g(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),function(e,t,n){var o,r,i,s,c,l,d=0,p=!1,v=!1,w=!0;if("function"!=typeof e)throw new TypeError(a);function b(t){var a=o,n=r;return o=r=void 0,d=t,s=e.apply(n,a)}function y(e){var a=e-l;return void 0===l||a>=t||a<0||v&&e-d>=i}function k(){var e=f();if(y(e))return T(e);c=setTimeout(k,function(e){var a=t-(e-l);return v?m(a,i-(e-d)):a}(e))}function T(e){return c=void 0,w&&o?b(e):(o=r=void 0,s)}function A(){var e=f(),a=y(e);if(o=arguments,r=this,l=e,a){if(void 0===c)return function(e){return d=e,c=setTimeout(k,t),p?b(e):s}(l);if(v)return c=setTimeout(k,t),b(l)}return void 0===c&&(c=setTimeout(k,t)),s}return t=h(t)||0,g(n)&&(p=!!n.leading,i=(v="maxWait"in n)?u(h(n.maxWait)||0,t):i,w="trailing"in n?!!n.trailing:w),A.cancel=function(){void 0!==c&&clearTimeout(c),d=0,o=l=r=c=void 0},A.flush=function(){return void 0===c?s:T(f())},A}(e,t,{leading:o,maxWait:t,trailing:r})},w=/^\s+|\s+$/g,b=/^[-+]0x[0-9a-f]+$/i,y=/^0b[01]+$/i,k=/^0o[0-7]+$/i,T=parseInt,A="object"==typeof e&&e&&e.Object===Object&&e,x="object"==typeof self&&self&&self.Object===Object&&self,E=A||x||Function("return this")(),C=Object.prototype.toString,O=Math.max,j=Math.min,N=function(){return E.Date.now()};function I(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function q(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==C.call(e)}(e))return NaN;if(I(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=I(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(w,"");var a=y.test(e);return a||k.test(e)?T(e.slice(2),a?2:8):b.test(e)?NaN:+e}var D=function(e,t,a){var n,o,r,i,s,c,l=0,d=!1,p=!1,u=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function m(t){var a=n,r=o;return n=o=void 0,l=t,i=e.apply(r,a)}function f(e){var a=e-c;return void 0===c||a>=t||a<0||p&&e-l>=r}function g(){var e=N();if(f(e))return h(e);s=setTimeout(g,function(e){var a=t-(e-c);return p?j(a,r-(e-l)):a}(e))}function h(e){return s=void 0,u&&n?m(e):(n=o=void 0,i)}function v(){var e=N(),a=f(e);if(n=arguments,o=this,c=e,a){if(void 0===s)return function(e){return l=e,s=setTimeout(g,t),d?m(e):i}(c);if(p)return s=setTimeout(g,t),m(c)}return void 0===s&&(s=setTimeout(g,t)),i}return t=q(t)||0,I(a)&&(d=!!a.leading,r=(p="maxWait"in a)?O(q(a.maxWait)||0,t):r,u="trailing"in a?!!a.trailing:u),v.cancel=function(){void 0!==s&&clearTimeout(s),l=0,n=c=o=s=void 0},v.flush=function(){return void 0===s?i:h(N())},v},M=function(){};function S(e){e&&e.forEach((function(e){var t=Array.prototype.slice.call(e.addedNodes),a=Array.prototype.slice.call(e.removedNodes);if(function e(t){var a=void 0,n=void 0;for(a=0;a<t.length;a+=1){if((n=t[a]).dataset&&n.dataset.aos)return!0;if(n.children&&e(n.children))return!0}return!1}(t.concat(a)))return M()}))}function W(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}var R=function(){return!!W()},z=function(e,t){var a=window.document,n=new(W())(S);M=t,n.observe(a.documentElement,{childList:!0,subtree:!0,removedNodes:!0})},L=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},H=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,F=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,P=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,K=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;function Q(){return navigator.userAgent||navigator.vendor||window.opera||""}var J=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return L(e,[{key:"phone",value:function(){var e=Q();return!(!H.test(e)&&!F.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=Q();return!(!P.test(e)&&!K.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}},{key:"ie11",value:function(){return"-ms-scroll-limit"in document.documentElement.style&&"-ms-ime-align"in document.documentElement.style}}]),e}()),G=function(e,t){var a=void 0;return J.ie11()?(a=document.createEvent("CustomEvent")).initCustomEvent(e,!0,!0,{detail:t}):a=new CustomEvent(e,{detail:t}),document.dispatchEvent(a)},U=function(e){return e.forEach((function(e,t){return function(e,t){var a=e.options,n=e.position,o=e.node,r=(e.data,function(){e.animated&&(function(e,t){t&&t.forEach((function(t){return e.classList.remove(t)}))}(o,a.animatedClassNames),G("aos:out",o),e.options.id&&G("aos:in:"+e.options.id,o),e.animated=!1)});a.mirror&&t>=n.out&&!a.once?r():t>=n.in?e.animated||(function(e,t){t&&t.forEach((function(t){return e.classList.add(t)}))}(o,a.animatedClassNames),G("aos:in",o),e.options.id&&G("aos:in:"+e.options.id,o),e.animated=!0):e.animated&&!a.once&&r()}(e,window.pageYOffset)}))},V=function(e){for(var t=0,a=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),a+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:a,left:t}},Z=function(e,t,a){var n=e.getAttribute("data-aos-"+t);if(void 0!==n){if("true"===n)return!0;if("false"===n)return!1}return n||a},Y=function(e,t){return e.forEach((function(e,a){var n=Z(e.node,"mirror",t.mirror),o=Z(e.node,"once",t.once),r=Z(e.node,"id"),i=t.useClassNames&&e.node.getAttribute("data-aos"),s=[t.animatedClassName].concat(i?i.split(" "):[]).filter((function(e){return"string"==typeof e}));t.initClassName&&e.node.classList.add(t.initClassName),e.position={in:function(e,t,a){var n=window.innerHeight,o=Z(e,"anchor"),r=Z(e,"anchor-placement"),i=Number(Z(e,"offset",r?0:t)),s=r||a,c=e;o&&document.querySelectorAll(o)&&(c=document.querySelectorAll(o)[0]);var l=V(c).top-n;switch(s){case"top-bottom":break;case"center-bottom":l+=c.offsetHeight/2;break;case"bottom-bottom":l+=c.offsetHeight;break;case"top-center":l+=n/2;break;case"center-center":l+=n/2+c.offsetHeight/2;break;case"bottom-center":l+=n/2+c.offsetHeight;break;case"top-top":l+=n;break;case"bottom-top":l+=n+c.offsetHeight;break;case"center-top":l+=n+c.offsetHeight/2}return l+i}(e.node,t.offset,t.anchorPlacement),out:n&&function(e,t){window.innerHeight;var a=Z(e,"anchor"),n=Z(e,"offset",t),o=e;return a&&document.querySelectorAll(a)&&(o=document.querySelectorAll(a)[0]),V(o).top+o.offsetHeight-n}(e.node,t.offset)},e.options={once:o,mirror:n,animatedClassNames:s,id:r}})),e},X=function(){var e=document.querySelectorAll("[data-aos]");return Array.prototype.map.call(e,(function(e){return{node:e}}))},$=[],_=!1,ee={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,mirror:!1,anchorPlacement:"top-bottom",startEvent:"DOMContentLoaded",animatedClassName:"aos-animate",initClassName:"aos-init",useClassNames:!1,disableMutationObserver:!1,throttleDelay:99,debounceDelay:50},te=function(){return document.all&&!window.atob},ae=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&(_=!0),_&&($=Y($,ee),U($),window.addEventListener("scroll",v((function(){U($,ee.once)}),ee.throttleDelay)))},ne=function(){if($=X(),re(ee.disable)||te())return oe();ae()},oe=function(){$.forEach((function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay"),ee.initClassName&&e.node.classList.remove(ee.initClassName),ee.animatedClassName&&e.node.classList.remove(ee.animatedClassName)}))},re=function(e){return!0===e||"mobile"===e&&J.mobile()||"phone"===e&&J.phone()||"tablet"===e&&J.tablet()||"function"==typeof e&&!0===e()};return{init:function(e){return ee=B(ee,e),$=X(),ee.disableMutationObserver||R()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),ee.disableMutationObserver=!0),ee.disableMutationObserver||z("[data-aos]",ne),re(ee.disable)||te()?oe():(document.querySelector("body").setAttribute("data-aos-easing",ee.easing),document.querySelector("body").setAttribute("data-aos-duration",ee.duration),document.querySelector("body").setAttribute("data-aos-delay",ee.delay),-1===["DOMContentLoaded","load"].indexOf(ee.startEvent)?document.addEventListener(ee.startEvent,(function(){ae(!0)})):window.addEventListener("load",(function(){ae(!0)})),"DOMContentLoaded"===ee.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1&&ae(!0),window.addEventListener("resize",D(ae,ee.debounceDelay,!0)),window.addEventListener("orientationchange",D(ae,ee.debounceDelay,!0)),$)},refresh:ae,refreshHard:ne}}()}).call(this,a("yLpj"))},HiYx:function(e){e.exports=JSON.parse('{"data":{"allContentfulFranchisee":{"edges":[{"node":{"courseCatalog":{"programsAvailable":[{"slug":"ai","title":"Artificial Intelligence (AI)","shortDescription":{"childMarkdownRemark":{"html":"<p>A one year AI program in Python, Numpy, Pandas, deep learning with Tensorflow, AI model deployment with Kubernetes and Kubeflow, and micro services development using Flask.</p>"}},"image":{"file":{"url":"//images.ctfassets.net/6y7x6a0he6ux/fnmiegLZP7y4t5vqUvrsl/1c229ee250ce3e2e2f7b989e8b51b50c/ai.jpeg"}},"longDescription":{"json":{"data":{},"content":[{"data":{},"content":[{"data":{},"marks":[],"value":"A one year program AI smart application development program in Data Science, Machine Learning, and Deep Learning. In this program we will learn to develop smart AI based end-to-end applications. The program consists of three tracks (sequence of courses which run in parallel):","nodeType":"text"}],"nodeType":"paragraph"},{"data":{},"content":[{"data":{},"content":[{"data":{},"content":[{"data":{},"marks":[],"value":"AI Technical Track (3 hr/wk, consisting of four quarters)","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"list-item"},{"data":{},"content":[{"data":{},"content":[{"data":{},"marks":[],"value":"Innovation Track (2 hr/wk, starting from Quarter 2, consisting of three quarters)","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"list-item"},{"data":{},"content":[{"data":{},"content":[{"data":{},"marks":[],"value":"Application Development Track (2 hr/wk, starting from Quarter 2, consisting of three quarters)","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"list-item"}],"nodeType":"ordered-list"},{"data":{},"content":[{"data":{},"marks":[],"value":"In the main AI technical track we cover these areas: Python programming, Numpy, Pandas, deep learning with Tensorflow, AI model deployment with Kubernetes and Kubeflow, and micro services development using Flask.","nodeType":"text"}],"nodeType":"paragraph"},{"data":{},"content":[{"data":{},"marks":[],"value":"In the innovation track we will cover both the art and science of innovation. Our innovation model combines Design Thinking, Lean Startup, Agile and DevOps. We will cover the following technologies in this track: Linux, Git, Docker Containers, Terraform, Serverless Containers, and CI/CD pipelines. ","nodeType":"text"}],"nodeType":"paragraph"},{"data":{},"content":[{"data":{},"marks":[],"value":"We are making the innovation track compulsory because it has always been an efficient and effective tool to resolve the challenges we face in software development. However, in this new era of digital restoration during and after the COVID-19 crisis, digital innovation will play a major part in restoring global prosperity. In the long term, the crisis will spur\\nand stimulate advancements in digital technology. Digital innovation and AI technologies will have to play a major part we want to have our lives back.  ","nodeType":"text"}],"nodeType":"paragraph"},{"data":{},"content":[{"data":{},"marks":[],"value":"In the application development track we will learn how to build end-to-end web applications using the JAMstack and MERN stack. The following technologies will be covered JavaScript, React, Progressive Web App (PWA), Gatsby, Headless CMS, Node.js/Express and MongoDB.","nodeType":"text"}],"nodeType":"paragraph"},{"data":{},"content":[{"data":{},"marks":[],"value":"The innovation and the application development track classes will start in the second quarter of the program in parallel to the main AI technical track. \\n\\n\\n\\n","nodeType":"text"}],"nodeType":"paragraph"},{"data":{},"content":[{"data":{},"marks":[],"value":"","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"document"}}},{"slug":"iot","title":"Internet of Things (IoT)","shortDescription":{"childMarkdownRemark":{"html":"<p>A one year program IoT program covering Rust, Embedded Rust, Async Rust, Web Apps using Assembly, Edge and Cloud Computing. </p>"}},"image":{"file":{"url":"//images.ctfassets.net/6y7x6a0he6ux/ZIEFHoLnZNDHnqHYBc0T0/f2179918a99694473285d9aef9d26495/iot.jpeg"}},"longDescription":{"json":{"data":{},"content":[{"data":{},"content":[{"data":{},"marks":[],"value":"A one year IoT program covering Rust, Embedded Rust, Async Rust, Web Assembly, Edge and Cloud Computing. In this program we will learn to develop smart IoT based end-to-end applications. The program consists of three tracks (sequence of courses which run in parallel):","nodeType":"text"}],"nodeType":"paragraph"},{"data":{},"content":[{"data":{},"content":[{"data":{},"content":[{"data":{},"marks":[],"value":"IoT Technical Track (3 hr/wk, consisting of four quarters)","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"list-item"},{"data":{},"content":[{"data":{},"content":[{"data":{},"marks":[],"value":"Innovation Track (2 hr/wk, starting from Quarter 2, consisting of four quarters)","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"list-item"},{"data":{},"content":[{"data":{},"content":[{"data":{},"marks":[],"value":"Application Development Track (2 hr/wk, starting from Quarter 2, consisting of four quarters)","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"list-item"}],"nodeType":"ordered-list"},{"data":{},"content":[{"data":{},"marks":[],"value":"In the main AI technical track we cover these areas: Rust, Embedded Rust, Async Rust, Web Assembly, microservices deployment with Kubernetes and KubeEdge, and micro services development using Hyper.","nodeType":"text"}],"nodeType":"paragraph"},{"data":{},"content":[{"data":{},"marks":[],"value":"In the innovation track we will cover both the art and science of innovation. Our innovation model combines Design Thinking, Lean Startup, Agile and DevOps. We will cover the following technologies in this track: Linux, Git, Docker Containers, Terraform, Serverless Containers, and CI/CD pipelines. ","nodeType":"text"}],"nodeType":"paragraph"},{"data":{},"content":[{"data":{},"marks":[],"value":"We are making the innovation track compulsory because it has always been an efficient and effective tool to resolve the challenges we face in software development. However, in this new era of digital restoration during and after the COVID-19 crisis, digital innovation will play a major part in restoring global prosperity. In the long term, the crisis will spur\\nand stimulate advancements in digital technology. Digital innovation and AI technologies will have to play a major part we want to have our lives back.  ","nodeType":"text"}],"nodeType":"paragraph"},{"data":{},"content":[{"data":{},"marks":[],"value":"In the application development track we will learn how to build end-to-end web applications using the JAMstack and MERN stack. The following technologies will be covered JavaScript, React, Progressive Web App (PWA), Gatsby, Headless CMS, Node.js/Express and MongoDB.","nodeType":"text"}],"nodeType":"paragraph"},{"data":{},"content":[{"data":{},"marks":[],"value":"The innovation and the application development track classes will start in the second quarter of the program in parallel to the main IoT technical track. \\n","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"document"}}},{"slug":"bc","title":"Blockchain","shortDescription":{"childMarkdownRemark":{"html":"<p>A one year Blockchain program in business foundations of Blockchain, Ethereum, Smart Contracts, Dapps, and crypto currencies. </p>"}},"image":{"file":{"url":"//images.ctfassets.net/6y7x6a0he6ux/2ZQpRgqddKMDZQwTbJXts2/8bc6e1a03187ea1615206e19ceb35186/bc.jpeg"}},"longDescription":{"json":{"data":{},"content":[{"data":{},"content":[{"data":{},"marks":[],"value":"A one year Blockchain program in business foundations of Blockchain, Ethereum, Smart Contracts, Dapps, and crypto currencies. The program consists of three tracks (sequence of courses which run in parallel):","nodeType":"text"}],"nodeType":"paragraph"},{"data":{},"content":[{"data":{},"content":[{"data":{},"content":[{"data":{},"marks":[],"value":"Blockchain Technical Track (3 hr/wk, consisting of four quarters)","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"list-item"},{"data":{},"content":[{"data":{},"content":[{"data":{},"marks":[],"value":"Innovation Track (2 hr/wk, starting from Quarter 2, consisting of four quarters)","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"list-item"},{"data":{},"content":[{"data":{},"content":[{"data":{},"marks":[],"value":"Application Development Track (2 hr/wk, starting from Quarter 2, consisting of four quarters)","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"list-item"}],"nodeType":"ordered-list"},{"data":{},"content":[{"data":{},"marks":[],"value":"In the main Blockchain technical track we cover these areas: business foundations of Blockchain, Ethereum, Smart Contracts, Dapps, and crypto currencies. ","nodeType":"text"}],"nodeType":"paragraph"},{"data":{},"content":[{"data":{},"marks":[],"value":"In the innovation track we will cover both the art and science of innovation. Our innovation model combines Design Thinking, Lean Startup, Agile and DevOps. We will cover the following technologies in this track: Linux, Git, Docker Containers, Terraform, Serverless Containers, and CI/CD pipelines. ","nodeType":"text"}],"nodeType":"paragraph"},{"data":{},"content":[{"data":{},"marks":[],"value":"We are making the innovation track compulsory because it has always been an efficient and effective tool to resolve the challenges we face in software development. However, in this new era of digital restoration during and after the COVID-19 crisis, digital innovation will play a major part in restoring global prosperity. In the long term, the crisis will spur\\nand stimulate advancements in digital technology. Digital innovation and AI technologies will have to play a major part we want to have our lives back.  ","nodeType":"text"}],"nodeType":"paragraph"},{"data":{},"content":[{"data":{},"marks":[],"value":"In the application development track we will learn how to build end-to-end web applications using the JAMstack and MERN stack. The following technologies will be covered JavaScript, React, Progressive Web App (PWA), Gatsby, Headless CMS, Node.js/Express and MongoDB.","nodeType":"text"}],"nodeType":"paragraph"},{"data":{},"content":[{"data":{},"marks":[],"value":"The innovation and the application development track classes will start in the second quarter of the program in parallel to the main Blockchain technical track. \\n\\n\\n\\n","nodeType":"text"}],"nodeType":"paragraph"},{"data":{},"content":[{"data":{},"marks":[],"value":"","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"document"}}},{"slug":"cn","title":"Cloud Native","shortDescription":{"childMarkdownRemark":{"html":"<p>A one year Cloud Native program covering Docker, Terraform, Kubernetes, Helm, Operators, Istio, Knative, GitOps, and cloud native patterns using the multicloud strategy.</p>"}},"image":{"file":{"url":"//images.ctfassets.net/6y7x6a0he6ux/51n7G7a9IkxmdhrnMaU7kj/795335a11d81294e58f3a4d0dacc1f4f/cn.jpeg"}},"longDescription":{"json":{"data":{},"content":[{"data":{},"content":[{"data":{},"marks":[],"value":"A one year Cloud Native program covering Docker, Terraform, Kubernetes, Helm, Operators, Istio, Knative, GitOps, and cloud native patterns using the multicloud strategy. The program consists of tracks (sequence of courses which run in parallel):","nodeType":"text"}],"nodeType":"paragraph"},{"data":{},"content":[{"data":{},"content":[{"data":{},"content":[{"data":{},"marks":[],"value":"Cloud Native Technical Track (3 hr/wk, consisting of four quarters)","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"list-item"},{"data":{},"content":[{"data":{},"content":[{"data":{},"marks":[],"value":"Innovation Track (2 hr/wk, starting from Quarter 2, consisting of four quarters)","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"list-item"},{"data":{},"content":[{"data":{},"content":[{"data":{},"marks":[],"value":"Application Development Track (2 hr/wk, starting from Quarter 2, consisting of four quarters)","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"list-item"}],"nodeType":"ordered-list"},{"data":{},"content":[{"data":{},"marks":[],"value":"In the main cloud native technical track we cover these areas: Docker, Terraform, Kubernetes, Helm, Kubernetes Operators, Istio, Knative, GitOps, and cloud native patterns.","nodeType":"text"}],"nodeType":"paragraph"},{"data":{},"content":[{"data":{},"marks":[],"value":"In the innovation track we will cover both the art and science of innovation. Our innovation model combines Design Thinking, Lean Startup, Agile and DevOps. We will cover the following technologies in this track: Linux, Git, Docker Containers, Terraform, Serverless Containers, and CI/CD pipelines. ","nodeType":"text"}],"nodeType":"paragraph"},{"data":{},"content":[{"data":{},"marks":[],"value":"We are making the innovation track compulsory because it has always been an efficient and effective tool to resolve the challenges we face in software development. However, in this new era of digital restoration during and after the COVID-19 crisis, digital innovation will play a major part in restoring global prosperity. In the long term, the crisis will spur\\nand stimulate advancements in digital technology. Digital innovation and AI technologies will have to play a major part we want to have our lives back.  ","nodeType":"text"}],"nodeType":"paragraph"},{"data":{},"content":[{"data":{},"marks":[],"value":"In the application development track we will learn how to build end-to-end web applications using the JAMstack and MERN stack. The following technologies will be covered JavaScript, React, Progressive Web App (PWA), Gatsby, Headless CMS, Node.js/Express and MongoDB.","nodeType":"text"}],"nodeType":"paragraph"},{"data":{},"content":[{"data":{},"marks":[],"value":"The innovation and the application development track classes will start in the second quarter of the program in parallel to the main AI technical track. \\n","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"document"}}}]}}}]}}}')},"Hu+W":function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),r=a("Wbzz"),i=a("tRbT"),s=a("30+C"),c=a("oa/T"),l=a("Ie8z"),d=a("ofer"),p=a("ucgz"),u=a("HiYx"),m=function(){return u.data.allContentfulFranchisee.edges[0].node.courseCatalog.programsAvailable},f=(a("6Cl6"),"undefined"!=typeof window?a("9a8T"):null);f&&f.init();t.a=Object(p.a)({content:{height:"100%",display:"flex",flexDirection:"column",justifyContent:"center"},cover:{height:"400px"},root:{display:"flex",boxShadow:"none !important"},findMore:{display:"flex",alignItems:"center",color:"#706aaf",fontWeight:"700",marginTop:"10px"},findMoreImg:{marginLeft:"25px",width:"53px",background:"#f4f5f6",padding:"10px",borderRadius:"34px"},contentTitle:{color:"#706aaf"},rootWithMargin:{display:"flex",boxShadow:"none !important",marginTop:"70px"}})((function(e){var t=e.classes;return m().map((function(e,n){return o.a.createElement(s.a,{className:0===n?t.root:t.rootWithMargin,"data-aos":"fade-up",key:"/programs/"+e.slug},o.a.createElement(i.a,{container:!0,justify:"center"},1===n||3===n?o.a.createElement(o.a.Fragment,null,o.a.createElement(i.a,{item:!0,md:4,xs:12},o.a.createElement(c.a,{className:t.content},o.a.createElement(d.a,{gutterBottom:!0,variant:"h4",className:t.contentTitle},"Certified ",e.title," Professional"),o.a.createElement(d.a,{variant:"body1",dangerouslySetInnerHTML:{__html:e.shortDescription.childMarkdownRemark.html}}),o.a.createElement(r.a,{to:"/programs/"+e.slug,state:{program:e}},o.a.createElement("div",{className:t.findMore},"Find more",o.a.createElement("img",{className:t.findMoreImg,src:a("xdTz"),alt:"arrow"}))))),o.a.createElement(i.a,{item:!0,md:8,xs:12},o.a.createElement(l.a,{className:t.cover,image:e.image.file.url}))):o.a.createElement(o.a.Fragment,null,o.a.createElement(i.a,{item:!0,md:8,xs:12},o.a.createElement(l.a,{className:t.cover,image:e.image.file.url})),o.a.createElement(i.a,{item:!0,md:4,xs:12},o.a.createElement(c.a,{className:t.content},o.a.createElement(d.a,{gutterBottom:!0,variant:"h4",className:t.contentTitle},"Certified ",e.title," Professional"),o.a.createElement(d.a,{variant:"body1",dangerouslySetInnerHTML:{__html:e.shortDescription.childMarkdownRemark.html}}),o.a.createElement(r.a,{to:"/programs/"+e.slug,state:{program:e}},o.a.createElement("div",{className:t.findMore},"Find more",o.a.createElement("img",{className:t.findMoreImg,src:a("xdTz"),alt:"arrow"}))))))))}))}))},Ie8z:function(e,t,a){"use strict";a("V+eJ");var n=a("wx14"),o=a("Ff2n"),r=a("q1tI"),i=(a("17x9"),a("iuhU")),s=a("H2TA"),c=["video","audio","picture","iframe","img"],l=r.forwardRef((function(e,t){var a=e.children,s=e.classes,l=e.className,d=e.component,p=void 0===d?"div":d,u=e.image,m=e.src,f=e.style,g=Object(o.a)(e,["children","classes","className","component","image","src","style"]),h=-1!==c.indexOf(p),v=!h&&u?Object(n.a)({backgroundImage:'url("'.concat(u,'")')},f):f;return r.createElement(p,Object(n.a)({className:Object(i.a)(s.root,l,h&&s.media,-1!=="picture img".indexOf(p)&&s.img),ref:t,style:v,src:h?u||m:void 0},g),a)}));t.a=Object(s.a)({root:{display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},media:{width:"100%"},img:{objectFit:"cover"}},{name:"MuiCardMedia"})(l)},W2pj:function(e,t,a){"use strict";a.r(t);var n=a("5C0Z"),o=a("q1tI"),r=a.n(o),i=(a("Wbzz"),a("EYWl")),s=a("uVCN"),c=a("Hu+W");t.default=Object(n.a)((function(e){return r.a.createElement(s.a,{title:"Certification Programs of Study"},r.a.createElement(i.a,{title:"Certification Programs of Study"}),r.a.createElement(c.a,null))}))},"oa/T":function(e,t,a){"use strict";var n=a("wx14"),o=a("Ff2n"),r=a("q1tI"),i=(a("17x9"),a("iuhU")),s=a("H2TA"),c=r.forwardRef((function(e,t){var a=e.classes,s=e.className,c=e.component,l=void 0===c?"div":c,d=Object(o.a)(e,["classes","className","component"]);return r.createElement(l,Object(n.a)({className:Object(i.a)(a.root,s),ref:t},d))}));t.a=Object(s.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(c)},xdTz:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAsVBMVEUAAABtbapxaq9xarBwa66AVapvaq5waq9waa9xaLNwbK1waq9waq9waK9wa61waq9waq9waq9za61tba1waq9yba5waq9wa65uarBxa65waq9waq9pabRwaq9waa5waq9waq9waq9xarBwaq9waq9xaq9waq9waa9xa69waq9ya65waq5vabFwaq9zbKxvarBwaq5waq9waq9waq5uaa9xabBwaa5xabBmZplwaq8AAABSwoP3AAAAOXRSTlMAFXORYgY86dAbO/LfIDLz29MfHM8v8Tk6WPtZEfqb6OX2msbaRv5J1f0m5CfmKOcp6sjUMz1yYQWyxx/NAAAAAWJLR0QAiAUdSAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAAd0SU1FB+QFFQUjG9whp48AAADWSURBVFjD7dfXDoJQEEXRUSxgRcWOir1hr/P/P6ZXY3syzkkkEM772uEmEIAo3F8WiWqxOOATSWbWDbFPpVktkxX6XJ7vM4XXUGCGCkV+TXSKEqMF670gOUW5ghaqFfQUwSjU8EI6LKilgluo6w0W7vZsNqX6cQ06EmDTphYU4DZhnjtowKEuFuhRH/IDm4YjxKsbYTyZQv6nzeagd7z1rt/9AvNLv/uVt34NeneDedqC3gD9x6euxBPtQE/7POafb2SxJzqoXx5L7q8/XUftdAZ8uG+7ANIs/OiBy6mKAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIwLTA1LTIxVDA1OjM1OjI3KzAwOjAwrSTNuwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMC0wNS0yMVQwNTozNToyNyswMDowMNx5dQcAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAAElFTkSuQmCC"}}]);
//# sourceMappingURL=component---src-pages-programs-index-js-56e04deaf252b0f5e2e4.js.map