(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{AC2l:function(e,t,i){"use strict";i.r(t),i.d(t,"query",(function(){return N}));var a=i("5C0Z"),o=i("q1tI"),n=i.n(o),l=i("Wbzz"),r=i("ofer"),c=i("EYWl"),s=i("uVCN"),m=(i("AqHK"),i("wx14")),d=i("Ff2n"),p=(i("TOwV"),i("17x9"),i("iuhU")),u=i("H2TA"),f=o.forwardRef((function(e,t){var i=e.cellHeight,a=void 0===i?180:i,n=e.children,l=e.classes,r=e.className,c=e.cols,s=void 0===c?2:c,u=e.component,f=void 0===u?"ul":u,h=e.spacing,g=void 0===h?4:h,w=e.style,b=Object(d.a)(e,["cellHeight","children","classes","className","cols","component","spacing","style"]);return o.createElement(f,Object(m.a)({className:Object(p.a)(l.root,r),ref:t,style:Object(m.a)({margin:-g/2},w)},b),o.Children.map(n,(function(e){if(!o.isValidElement(e))return null;var t=e.props.cols||1,i=e.props.rows||1;return o.cloneElement(e,{style:Object(m.a)({width:"".concat(100/s*t,"%"),height:"auto"===a?"auto":a*i+g,padding:g/2},e.props.style)})})))})),h=Object(u.a)({root:{display:"flex",flexWrap:"wrap",overflowY:"auto",listStyle:"none",padding:0,WebkitOverflowScrolling:"touch"}},{name:"MuiGridList"})(f),g=(i("HQhv"),i("KQm4")),w=i("l3Wi"),b=i("ucBr"),v=function(e,t){var i,a,o,n;e&&e.complete&&(e.width/e.height>e.parentElement.offsetWidth/e.parentElement.offsetHeight?((i=e.classList).remove.apply(i,Object(g.a)(t.imgFullWidth.split(" "))),(a=e.classList).add.apply(a,Object(g.a)(t.imgFullHeight.split(" ")))):((o=e.classList).remove.apply(o,Object(g.a)(t.imgFullHeight.split(" "))),(n=e.classList).add.apply(n,Object(g.a)(t.imgFullWidth.split(" ")))))};var E=o.forwardRef((function(e,t){var i=e.children,a=e.classes,n=e.className,l=(e.cols,e.component),r=void 0===l?"li":l,c=(e.rows,Object(d.a)(e,["children","classes","className","cols","component","rows"])),s=o.useRef(null);return o.useEffect((function(){!function(e,t){e&&(e.complete?v(e,t):e.addEventListener("load",(function(){v(e,t)})))}(s.current,a)})),o.useEffect((function(){var e=Object(w.a)((function(){v(s.current,a)}));return window.addEventListener("resize",e),function(){e.clear(),window.removeEventListener("resize",e)}}),[a]),o.createElement(r,Object(m.a)({className:Object(p.a)(a.root,n),ref:t},c),o.createElement("div",{className:a.tile},o.Children.map(i,(function(e){return o.isValidElement(e)?"img"===e.type||Object(b.a)(e,["Image"])?o.cloneElement(e,{ref:s}):e:null}))))})),j=Object(u.a)({root:{boxSizing:"border-box",flexShrink:0},tile:{position:"relative",display:"block",height:"100%",overflow:"hidden"},imgFullHeight:{height:"100%",transform:"translateX(-50%)",position:"relative",left:"50%"},imgFullWidth:{width:"100%",position:"relative",transform:"translateY(-50%)",top:"50%"}},{name:"MuiGridListTile"})(E),y=o.forwardRef((function(e,t){var i=e.actionIcon,a=e.actionPosition,n=void 0===a?"right":a,l=e.classes,r=e.className,c=e.subtitle,s=e.title,u=e.titlePosition,f=void 0===u?"bottom":u,h=Object(d.a)(e,["actionIcon","actionPosition","classes","className","subtitle","title","titlePosition"]),g=i&&n;return o.createElement("div",Object(m.a)({className:Object(p.a)(l.root,r,"top"===f?l.titlePositionTop:l.titlePositionBottom,c&&l.rootSubtitle),ref:t},h),o.createElement("div",{className:Object(p.a)(l.titleWrap,{left:l.titleWrapActionPosLeft,right:l.titleWrapActionPosRight}[g])},o.createElement("div",{className:l.title},s),c?o.createElement("div",{className:l.subtitle},c):null),i?o.createElement("div",{className:Object(p.a)(l.actionIcon,"left"===g&&l.actionIconActionPosLeft)},i):null)})),O=Object(u.a)((function(e){return{root:{position:"absolute",left:0,right:0,height:48,background:"rgba(0, 0, 0, 0.5)",display:"flex",alignItems:"center",fontFamily:e.typography.fontFamily},titlePositionBottom:{bottom:0},titlePositionTop:{top:0},rootSubtitle:{height:68},titleWrap:{flexGrow:1,marginLeft:16,marginRight:16,color:e.palette.common.white,overflow:"hidden"},titleWrapActionPosLeft:{marginLeft:0},titleWrapActionPosRight:{marginRight:0},title:{fontSize:e.typography.pxToRem(16),lineHeight:"24px",textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"},subtitle:{fontSize:e.typography.pxToRem(12),lineHeight:1,textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"},actionIcon:{},actionIconActionPosLeft:{order:-1}}}),{name:"MuiGridListTileBar"})(y),L=i("PsDL"),W=i("1hMD"),N="679162118";t.default=Object(a.a)((function(e){var t=e.data.allMarkdownRemark.edges;return n.a.createElement(s.a,{title:"Meet the Team"},n.a.createElement(c.a,{title:"Meet the Team"}),n.a.createElement(r.a,{paragraph:!0},"We are here to help! Let us know what we can do. And we're of course always interested to find new recruits to join our amazing team. We are here to help! Let us know what we can do. And we're of course always interested to find new recruits to join our amazing team. We are here to help! Let us know what we can do. And we're of course always interested to find new recruits to join our amazing team."),n.a.createElement(h,{cellHeight:500,cols:3},t.map((function(e){var t=e.node.frontmatter,i=t.path,a=t.title,o=t.image.publicURL,r=t.jobtitle;return n.a.createElement(l.a,{key:i,to:i},n.a.createElement(j,{cols:1},n.a.createElement("img",{alt:a,src:Object(l.c)(o)}),n.a.createElement(O,{actionIcon:n.a.createElement(L.a,{className:"teamIcon",style:{color:"rgba(255, 255, 255, 0.54)"}},n.a.createElement(W.b,null)),subtitle:r,title:a})))}))))}))}}]);
//# sourceMappingURL=component---src-pages-team-index-js-c94a5cfe1b369d6edc69.js.map