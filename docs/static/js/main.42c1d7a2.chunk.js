(this["webpackJsonpportfolio-2021"]=this["webpackJsonpportfolio-2021"]||[]).push([[0],{10:function(e,n,t){e.exports={hamburger:"Hamburger_hamburger__3EE3H",line:"Hamburger_line__3hFlR",line1:"Hamburger_line1__20xNp",line2:"Hamburger_line2__C8fz_",line3:"Hamburger_line3__1STKJ",open:"Hamburger_open__2CfKJ"}},12:function(e,n,t){e.exports={loader:"Loader_loader__2S8xH",box:"Loader_box__3vGsg","color-change":"Loader_color-change__n2f8q","flip-1":"Loader_flip-1__1IqbE","squidge-1":"Loader_squidge-1__3EyRy","flip-2":"Loader_flip-2__3H7Wq","squidge-2":"Loader_squidge-2__2bIHE","flip-3":"Loader_flip-3__3mtiv","squidge-3":"Loader_squidge-3__LJFt4","flip-4":"Loader_flip-4__1ueEy","squidge-4":"Loader_squidge-4__1Ys7-",loader_200:"Loader_loader_200__zGvcx","slide-200px":"Loader_slide-200px__3SSx7",loader_60:"Loader_loader_60__1ZBfV","slide-60px":"Loader_slide-60px__2v10x"}},13:function(e,n,t){e.exports={cont:"HomeScreen_cont__2eeUk",head:"HomeScreen_head__1BzkK",name:"HomeScreen_name__2pGCA",psText:"HomeScreen_psText__1vxeN",help:"HomeScreen_help__104em"}},16:function(e,n,t){e.exports={cont:"SomethingWentWrong_cont__34W5k",content:"SomethingWentWrong_content__1Yp0u",icon:"SomethingWentWrong_icon__3f7WD",ctas:"SomethingWentWrong_ctas__sT5ml",reload:"SomethingWentWrong_reload__1ja9K"}},18:function(e,n,t){e.exports={drawer:"SideNavCont_drawer__2BGom",show:"SideNavCont_show__j8KpI",logo:"SideNavCont_logo__3Xfmx",li:"SideNavCont_li__2lDmQ"}},22:function(e,n,t){e.exports={main:"Layout_main__2BliD"}},23:function(e,n,t){e.exports={cont:"NavContainer_cont__XPOC8",backdrop:"NavContainer_backdrop__3nmxZ",show:"NavContainer_show__2cE5R"}},26:function(e,n,t){e.exports={orange:"Name_orange__ilCo9",green:"Name_green__1dh2S"}},29:function(e,n,t){e.exports={cont:"Content_cont__1QTQ7",slide:"Content_slide__1tW-a"}},30:function(e,n,t){e.exports={toolbar:"Toolbar_toolbar__2aTU_",title:"Toolbar_title__3qgPm",logo:"Toolbar_logo__2Kt_i"}},49:function(e,n,t){},50:function(e,n,t){},78:function(e,n,t){"use strict";t.r(n);var a=t(1),o=t.n(a),s=t(40),c=t.n(s),i=(t(49),t(11)),r=t(14),l=(t(50),function(e){return e>=992?"desktop":e>=576?"tablet":"mobile"});var d=window,j=d.innerWidth,_=d.innerHeight,b=Object(a.createContext)({width:j,height:_,device:l(j)}),h=Object(a.createContext)({isOpen:!1,onOpen:function(){}}),u=t(3),m=t(26),x=t.n(m),p=t(0),O=function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("span",{className:x.a.green,children:"S"}),"akshi ",Object(p.jsx)("span",{className:x.a.orange,children:"S"}),"hreya"]})},g=t(9),f=t.n(g),v=t(41),N=t.n(v),S="local"===Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_ENV?"http://localhost:5000/api":"https://portfolio-mw-sakshi.herokuapp.com/api",w=N.a.create({baseURL:S}),C=t(12),k=t.n(C),H=function(e){return Object(p.jsxs)("div",{className:"".concat(k.a.loader," ").concat(k.a["loader_"+e.size]),children:[Object(p.jsx)("div",{className:k.a.box}),Object(p.jsx)("div",{className:k.a.box}),Object(p.jsx)("div",{className:k.a.box}),Object(p.jsx)("div",{className:k.a.box}),Object(p.jsx)("div",{className:k.a.box})]})},L=t(42),y=t(16),I=t.n(y),E=t(43),T=function(e){return Object(p.jsxs)("section",{className:I.a.cont,children:[Object(p.jsx)(L.a,{icon:E.a,size:"5x",className:I.a.icon}),Object(p.jsx)("h1",{children:e.title||"Oops! Something went wrong"}),e.children&&Object(p.jsx)("div",{className:I.a.content,children:e.children}),Object(p.jsxs)("div",{className:I.a.ctas,children:[e.reload&&Object(p.jsx)("button",{className:"btn secondary medium fill "+I.a.reload,onClick:e.reloadFn,children:"Reload"}),Object(p.jsx)("button",{className:"btn primary medium fill",children:"Give Feedback"})]})]})},W=function(){var e,n,t,o=a.useState(null),s=Object(i.a)(o,2),c=s[0],r=s[1],l=a.useState(!0),d=Object(i.a)(l,2),j=d[0],_=d[1],b=a.useState(null),h=Object(i.a)(b,2),u=h[0],m=h[1],x=(e=new Date,n=new Date("26 Nov, 2018"),((e.getTime()-n.getTime())/31536e6).toFixed(1));function g(){_(!0),w.get("/v1/about").then((function(e){r(e.data.data),_(!1),m(null)})).catch((function(e){var n,t;r(null),_(!1),(null===(n=e.response)||void 0===n||null===(t=n.data)||void 0===t?void 0:t.message)?m({msg:e.response.data.message,reload:!0}):null===e.toJSON().status?m({msg:"Not able to fetch data properly. Could you please try again.",reload:!0}):m({msg:e.message,reload:!0})}))}return a.useEffect((function(){g()}),[]),j?Object(p.jsx)("div",{className:[f.a.cont,f.a.center].join(" "),children:Object(p.jsx)(H,{size:200})}):u?Object(p.jsx)(T,{reload:u.reload,reloadFn:g,children:Object(p.jsx)("p",{children:u.msg})}):c&&Object(p.jsxs)("article",{className:f.a.cont,children:[Object(p.jsx)("h1",{className:f.a.heading,children:Object(p.jsx)(O,{})}),Object(p.jsxs)("p",{className:f.a.para,children:["I am a ",c.position," in ",c.company,". I am located in ",c.location,". I have around ",x,"yrs of professional experience. I love learning and trying new things. And after learning, I love to share my knowledge with the world; mentoring people is one of the things that I do in my spare time."]}),Object(p.jsx)("img",{src:"./assets/images/me.png",className:f.a.headshot,alt:"Sakshi's Headshot"}),Object(p.jsx)("h2",{className:f.a.subHead,children:"Previous Experience"}),Object(p.jsxs)("p",{className:f.a.para,children:["Before ",c.company,", I have worked in ",(t=c.prevCompanies,1===t.length?t[0]:0===t.length?"":t.slice(0,t.length-1).join(", ")+" and "+t[t.length-1]),". I have gained lots of technical and non-technical knowledge from these companies."]}),Object(p.jsx)("p",{className:f.a.para,children:"You can read more about my experience in my experiences section."}),Object(p.jsx)("h2",{className:f.a.subHead,children:"Hobbies"}),Object(p.jsxs)("p",{className:f.a.para,children:["In my free time, I like to draw, sketch, sing, read, mentor, write blogs, learn something new... ",Object(p.jsx)("span",{title:"tired",children:"\ud83e\udd71"}),Object(p.jsx)("br",{}),"I have lots of those hobbies. So many, that even I forget sometimes. ",Object(p.jsx)("span",{title:"mock",children:"\ud83d\ude1c"})]})]})},F=t(13),q=t.n(F),A=function(){return Object(p.jsx)("div",{className:q.a.cont,children:Object(p.jsxs)("div",{children:[Object(p.jsx)("p",{className:"h1 "+q.a.head,children:"Hello World... "}),Object(p.jsxs)("h2",{className:["h1",q.a.head,q.a.name].join(" "),children:["I am ",Object(p.jsx)(O,{}),","]}),Object(p.jsx)("p",{className:"h1 "+q.a.head,children:"Web Developer"}),Object(p.jsx)("p",{className:"h2",children:"and Mentor."}),Object(p.jsx)("p",{className:q.a.psText,children:"I can develop responsive and pixel-perfect websites. I love what I do. I can mentor you to be the same."}),Object(p.jsx)(r.b,{to:".",className:"btn secondary small border "+q.a.help,children:"How can I help you?"})]})})},D=function(){return Object(p.jsxs)(u.c,{children:[Object(p.jsx)(u.a,{path:"/about",children:Object(p.jsx)(W,{})}),Object(p.jsx)(u.a,{path:"/",children:Object(p.jsx)(A,{})})]})},P=t(29),R=t.n(P),z=function(){var e=Object(a.useContext)(h).isOpen,n=Object(a.useContext)(b).device;return Object(p.jsx)("div",{className:[R.a.cont,"desktop"===n||e?R.a.slide:null].join(" "),children:Object(p.jsx)(D,{})})},B=t(18),K=t.n(B),J=[{title:"Home",link:"/"},{title:"About Me",link:"/about"}],M=function(e){var n=Object(a.useContext)(h),t=n.isOpen,o=n.onOpen,s=Object(a.useContext)(b).device;return Object(p.jsxs)("nav",{className:[K.a.drawer,t?K.a.show:null].join(" "),children:["desktop"===s&&Object(p.jsx)("img",{src:"./assets/logo/SSlogo.png",className:K.a.logo,alt:"Logo"}),Object(p.jsx)("ul",{children:J.map((function(e){return Object(p.jsx)("li",{className:K.a.li+" h4",children:Object(p.jsx)(r.b,{to:e.link,onClick:function(){return"desktop"!==s&&o(!t)},children:e.title})},e.title)}))})]})},U=t(23),G=t.n(U),Q=function(){var e=Object(a.useContext)(h).isOpen,n=Object(a.useContext)(b).device;return Object(p.jsxs)("div",{className:G.a.cont,children:["desktop"!==n&&Object(p.jsx)("div",{className:[G.a.backdrop,e?G.a.show:null].join(" ")}),Object(p.jsx)(M,{}),Object(p.jsx)(z,{})]})},V=t(22),Y=t.n(V),X=function(){return Object(p.jsx)("div",{className:Y.a.main,children:Object(p.jsx)(Q,{})})},Z=t(10),$=t.n(Z),ee=function(e){var n=Object(a.useContext)(h),t=n.isOpen,o=n.onOpen;return Object(p.jsx)("button",{className:$.a.hamburger+" "+(t?$.a.open:""),onClick:function(){o(!t)},children:Object(p.jsxs)("svg",{width:"40",height:"40",viewBox:"0 0 100 100",children:[Object(p.jsx)("path",{className:$.a.line+" "+$.a.line1,d:"M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"}),Object(p.jsx)("path",{className:$.a.line+" "+$.a.line2,d:"M 20,50 H 80"}),Object(p.jsx)("path",{className:$.a.line+" "+$.a.line3,d:"M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"})]})})},ne=t(30),te=t.n(ne),ae=function(){return Object(p.jsxs)("div",{className:te.a.toolbar,children:[Object(p.jsx)(ee,{}),Object(p.jsx)("img",{src:"./assets/logo/SSlogo.png",height:"100",className:te.a.logo,alt:"Logo"})]})},oe=function(){return Object(p.jsxs)("div",{className:Y.a.main,children:[Object(p.jsx)(ae,{}),Object(p.jsx)(Q,{})]})};function se(){var e=window,n=e.innerWidth;return{width:n,height:e.innerHeight,device:l(n)}}var ce=function(){var e=function(){var e=Object(a.useState)(se()),n=Object(i.a)(e,2),t=n[0],o=n[1];return Object(a.useEffect)((function(){function e(){o(se())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),t}(),n=e.device,t=Object(a.useState)("desktop"===n),o=Object(i.a)(t,2),s=o[0],c=o[1];return Object(a.useEffect)((function(){c("desktop"===n)}),[n]),Object(p.jsx)(b.Provider,{value:e,children:Object(p.jsx)(h.Provider,{value:{isOpen:s,onOpen:c},children:Object(p.jsx)(r.a,{children:"desktop"!==n?Object(p.jsx)(oe,{}):Object(p.jsx)(X,{})})})})},ie=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,79)).then((function(n){var t=n.getCLS,a=n.getFID,o=n.getFCP,s=n.getLCP,c=n.getTTFB;t(e),a(e),o(e),s(e),c(e)}))};c.a.render(Object(p.jsx)(o.a.StrictMode,{children:Object(p.jsx)(ce,{})}),document.getElementById("root")),ie()},9:function(e,n,t){e.exports={cont:"AboutScreen_cont__3WFfx",center:"AboutScreen_center__2yUT7",heading:"AboutScreen_heading__1Jdqk",para:"AboutScreen_para__1fsCW",subHead:"AboutScreen_subHead__2DcQ8",headshot:"AboutScreen_headshot__h_zQh"}}},[[78,1,2]]]);