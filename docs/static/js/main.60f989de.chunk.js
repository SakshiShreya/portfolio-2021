(this["webpackJsonpportfolio-2021"]=this["webpackJsonpportfolio-2021"]||[]).push([[0],{10:function(e,n,t){e.exports={cont:"HomeScreen_cont__2eeUk",head:"HomeScreen_head__1BzkK",name:"HomeScreen_name__2pGCA",psText:"HomeScreen_psText__1vxeN",help:"HomeScreen_help__104em"}},15:function(e,n,t){e.exports={drawer:"SideNavCont_drawer__2BGom",show:"SideNavCont_show__j8KpI",logo:"SideNavCont_logo__3Xfmx",li:"SideNavCont_li__2lDmQ"}},18:function(e,n,t){e.exports={main:"Layout_main__2BliD"}},19:function(e,n,t){e.exports={cont:"NavContainer_cont__XPOC8",backdrop:"NavContainer_backdrop__3nmxZ",show:"NavContainer_show__2cE5R"}},22:function(e,n,t){e.exports={orange:"Name_orange__ilCo9",green:"Name_green__1dh2S"}},25:function(e,n,t){e.exports={cont:"Content_cont__1QTQ7",slide:"Content_slide__1tW-a"}},26:function(e,n,t){e.exports={toolbar:"Toolbar_toolbar__2aTU_",title:"Toolbar_title__3qgPm",logo:"Toolbar_logo__2Kt_i"}},42:function(e,n,t){},43:function(e,n,t){},71:function(e,n,t){"use strict";t.r(n);var a=t(1),o=t.n(a),c=t(35),s=t.n(c),i=(t(42),t(13)),r=t(11),l=(t(43),function(e){return e>=992?"desktop":e>=576?"tablet":"mobile"});var j=window,d=j.innerWidth,h=j.innerHeight,b=Object(a.createContext)({width:d,height:h,device:l(d)}),u=Object(a.createContext)({isOpen:!1,onOpen:function(){}}),m=t(2),p=t(22),_=t.n(p),x=t(0),O=function(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("span",{className:_.a.orange,children:"S"}),"akshi ",Object(x.jsx)("span",{className:_.a.green,children:"S"}),"hreya"]})},g=t(8),f=t.n(g),v=t(36),N=t.n(v).a.create({baseURL:"https://morning-sierra-84003.herokuapp.com"}),w=function(){var e,n,t,o=a.useState({position:"",company:"",location:"",prevCompanies:[]}),c=Object(i.a)(o,2),s=c[0],r=c[1],l=(e=new Date,n=new Date("11/26/2018"),((e.getTime()-n.getTime())/31536e6).toFixed(1));return a.useEffect((function(){N.get("/about").then((function(e){r(e.data)})).catch((function(e){console.log(e)}))}),[]),Object(x.jsxs)("article",{className:f.a.cont,children:[Object(x.jsx)("h1",{className:f.a.heading,children:Object(x.jsx)(O,{})}),Object(x.jsxs)("p",{className:f.a.para,children:["I am a ",s.position," in ",s.company,". I am located in ",s.location,". I have around ",l,"yrs of professional experience. I love learning and trying new things. And after learning, I love to share my knowledge with the world; mentoring people is one of the things that I do in my spare time."]}),Object(x.jsx)("img",{src:"./assets/images/me.png",className:f.a.headshot,alt:"Sakshi's Headshot"}),Object(x.jsx)("h2",{className:f.a.subHead,children:"Previous Experience"}),Object(x.jsxs)("p",{className:f.a.para,children:["Before ",s.company,", I have worked in ",(t=s.prevCompanies,1===t.length?t[0]:0===t.length?"":t.slice(0,t.length-1).join(", ")+" and "+t[t.length-1]),". I have gained lots of technical and non-technical knowledge from these companies."]}),Object(x.jsx)("p",{className:f.a.para,children:"You can read more about my experience in my experiences section."}),Object(x.jsx)("h2",{className:f.a.subHead,children:"Hobbies"}),Object(x.jsxs)("p",{className:f.a.para,children:["In my free time, I like to draw, sketch, sing, read, mentor, write blogs, learn something new... ",Object(x.jsx)("span",{title:"tired",children:"\ud83e\udd71"}),Object(x.jsx)("br",{}),"I have lots of those hobbies. So many, that even I forget sometimes. ",Object(x.jsx)("span",{title:"mock",children:"\ud83d\ude1c"})]})]})},C=t(10),k=t.n(C),S=function(){return Object(x.jsx)("div",{className:k.a.cont,children:Object(x.jsxs)("div",{children:[Object(x.jsx)("p",{className:"h1 "+k.a.head,children:"Hello World... "}),Object(x.jsxs)("h2",{className:["h1",k.a.head,k.a.name].join(" "),children:["I am ",Object(x.jsx)(O,{}),","]}),Object(x.jsx)("p",{className:"h1 "+k.a.head,children:"Web Developer"}),Object(x.jsx)("p",{className:"h2",children:"and Mentor."}),Object(x.jsx)("p",{className:k.a.psText,children:"I can develop responsive and pixel-perfect websites. I love what I do. I can mentor you to be the same."}),Object(x.jsx)(r.b,{to:".",className:"secondary-btn "+k.a.help,title:"TODO",children:"How can I help you?"})]})})},H=function(){return Object(x.jsxs)(m.c,{children:[Object(x.jsx)(m.a,{path:"/about",children:Object(x.jsx)(w,{})}),Object(x.jsx)(m.a,{path:"/",children:Object(x.jsx)(S,{})})]})},I=t(25),y=t.n(I),T=function(){var e=Object(a.useContext)(u).isOpen,n=Object(a.useContext)(b).device;return Object(x.jsx)("div",{className:[y.a.cont,"desktop"===n||e?y.a.slide:null].join(" "),children:Object(x.jsx)(H,{})})},E=t(15),L=t.n(E),A=[{title:"Home",link:"/"},{title:"About Me",link:"/about"}],D=function(e){var n=Object(a.useContext)(u),t=n.isOpen,o=n.onOpen,c=Object(a.useContext)(b).device;return Object(x.jsxs)("nav",{className:[L.a.drawer,t?L.a.show:null].join(" "),children:["desktop"===c&&Object(x.jsx)("img",{src:"./assets/logo/SSlogo.png",className:L.a.logo,alt:"Logo"}),Object(x.jsx)("ul",{children:A.map((function(e){return Object(x.jsx)("li",{className:L.a.li+" h4",children:Object(x.jsx)(r.b,{to:e.link,onClick:function(){return"desktop"!==c&&o(!t)},children:e.title})},e.title)}))})]})},F=t(19),B=t.n(F),P=function(){var e=Object(a.useContext)(u).isOpen,n=Object(a.useContext)(b).device;return Object(x.jsxs)("div",{className:B.a.cont,children:["desktop"!==n&&Object(x.jsx)("div",{className:[B.a.backdrop,e?B.a.show:null].join(" ")}),Object(x.jsx)(D,{}),Object(x.jsx)(T,{})]})},W=t(18),M=t.n(W),z=function(){return Object(x.jsx)("div",{className:M.a.main,children:Object(x.jsx)(P,{})})},J=t(9),K=t.n(J),Q=function(e){var n=Object(a.useContext)(u),t=n.isOpen,o=n.onOpen;return Object(x.jsx)("button",{className:K.a.hamburger+" "+(t?K.a.open:""),onClick:function(){o(!t)},children:Object(x.jsxs)("svg",{width:"40",height:"40",viewBox:"0 0 100 100",children:[Object(x.jsx)("path",{className:K.a.line+" "+K.a.line1,d:"M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"}),Object(x.jsx)("path",{className:K.a.line+" "+K.a.line2,d:"M 20,50 H 80"}),Object(x.jsx)("path",{className:K.a.line+" "+K.a.line3,d:"M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"})]})})},R=t(26),U=t.n(R),q=function(){return Object(x.jsxs)("div",{className:U.a.toolbar,children:[Object(x.jsx)(Q,{}),Object(x.jsx)("img",{src:"./assets/logo/SSlogo.png",height:"100",className:U.a.logo,alt:"Logo"})]})},G=function(){return Object(x.jsxs)("div",{className:M.a.main,children:[Object(x.jsx)(q,{}),Object(x.jsx)(P,{})]})};function X(){var e=window,n=e.innerWidth;return{width:n,height:e.innerHeight,device:l(n)}}var Y=function(){var e=function(){var e=Object(a.useState)(X()),n=Object(i.a)(e,2),t=n[0],o=n[1];return Object(a.useEffect)((function(){function e(){o(X())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),t}(),n=e.device,t=Object(a.useState)("desktop"===n),o=Object(i.a)(t,2),c=o[0],s=o[1];return Object(a.useEffect)((function(){s("desktop"===n)}),[n]),Object(x.jsx)(b.Provider,{value:e,children:Object(x.jsx)(u.Provider,{value:{isOpen:c,onOpen:s},children:Object(x.jsx)(r.a,{children:"desktop"!==n?Object(x.jsx)(G,{}):Object(x.jsx)(z,{})})})})},Z=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,72)).then((function(n){var t=n.getCLS,a=n.getFID,o=n.getFCP,c=n.getLCP,s=n.getTTFB;t(e),a(e),o(e),c(e),s(e)}))};s.a.render(Object(x.jsx)(o.a.StrictMode,{children:Object(x.jsx)(Y,{})}),document.getElementById("root")),Z()},8:function(e,n,t){e.exports={cont:"AboutScreen_cont__3WFfx",heading:"AboutScreen_heading__1Jdqk",para:"AboutScreen_para__1fsCW",subHead:"AboutScreen_subHead__2DcQ8",headshot:"AboutScreen_headshot__h_zQh"}},9:function(e,n,t){e.exports={hamburger:"Hamburger_hamburger__3EE3H",line:"Hamburger_line__3hFlR",line1:"Hamburger_line1__20xNp",line2:"Hamburger_line2__C8fz_",line3:"Hamburger_line3__1STKJ",open:"Hamburger_open__2CfKJ"}}},[[71,1,2]]]);
//# sourceMappingURL=main.60f989de.chunk.js.map