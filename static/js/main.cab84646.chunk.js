(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{314:function(e,t,n){},472:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),i=n(112),o=n(39),c=n.n(o),s=(n(314),n(42)),l=n(21),d=n(238),u=n(188),b=n(237),j=n(136),h=n(8),f=function(){return Object(h.jsx)(u.a,{position:"absolute",top:"0",left:"0",bottom:"0",right:"0",background:"rgba(0,0,0,0.5)",backdropFilter:"blur(5px)",zIndex:"100",display:"flex",justifyContent:"center",alignItems:"center",children:Object(h.jsx)(j.a,{color:"white",size:"xl"})})},p=n(224),x=n(36),m=n(483),g=n(223),O=n(269),v=n(178),w=n(190),S=n(191),y=function(e,t){for(var n in t){var r=new RegExp(":".concat(n,"[?]?"));e=e.replace(r,t[n].toString())}return e},k=function(e){var t=e.data,n=e.handleSelect,r=e.active;return Object(h.jsxs)(u.b,{borderWidth:"1px",borderColor:"gray.400",height:"30vh",w:["90%","80%"],borderRadius:"md",p:"2",my:"5",shadow:r?"lg":"sm",onClick:n,flexDirection:"column",justifyContent:"space-between",alignItems:"center",cursor:"pointer",_hover:{shadow:"lg"},"data-testid":"weather-card",backgroundColor:"#bdd4e7",backgroundImage:"linear-gradient(315deg, #bdd4e7 0%, #8693ab 74%)",children:[Object(h.jsx)(u.c,{fontSize:"sm",color:"#000",children:t.title}),Object(h.jsx)(w.a,{variant:"subtle",colorScheme:"blackAlpha",borderRadius:"full",size:"sm",py:"0",mt:"1",fontSize:"sm",textTransform:"capitalize",color:"#000",children:t.data[0].weather[0].description}),Object(h.jsx)(S.a,{src:y("http://openweathermap.org/img/wn/:icon@4x.png",{icon:t.data[0].weather[0].icon}),boxSize:"100px"}),Object(h.jsx)(u.b,{children:Object(h.jsxs)(u.f,{color:"#000",children:[function(){var e=t.data.reduce((function(e,t){return e+t.main.temp}),0);return Math.round(e/t.data.length)}(),Object(h.jsx)("sup",{children:"o"}),localStorage.getItem("temperature_unit")&&"metric"===localStorage.getItem("temperature_unit")?"C":"F"]})})]})},C=n(114),z=n.n(C),E=n(477),I=n(478),F=n(482),M=n(258),R=n(259),T=n(125),Y=n(121),_=n(268),D=function(e){var t=e.data,n=e.w,r=void 0===n?"100%":n,a=e.h,i=void 0===a?"100%":a;return Object(h.jsx)(u.a,{minW:r,minH:i,"data-testid":"chart",children:Object(h.jsx)(E.a,{width:r,height:i,children:Object(h.jsxs)(I.a,{width:500,height:300,data:t,margin:{top:5,right:30,left:20,bottom:5},children:[Object(h.jsx)(F.a,{strokeDasharray:"3 3"}),Object(h.jsx)(M.a,{dataKey:"time",stroke:"#fff"}),Object(h.jsx)(R.a,{stroke:"#fff"}),Object(h.jsx)(T.a,{}),Object(h.jsx)(Y.a,{}),Object(h.jsx)(_.a,{dataKey:"temp",fill:"#8fe0ff"})]})})})},P=[{width:1,itemsToShow:1},{width:550,itemsToShow:2,itemsToScroll:2},{width:768,itemsToShow:3}],L=function(e){var t=e.data,n=Object(r.useState)(),a=Object(l.a)(n,2),i=a[0],o=a[1],c=Object(r.useState)(),s=Object(l.a)(c,2),d=s[0],b=s[1],j=Object(g.a)("(max-width: 665px)"),f=Object(l.a)(j,1)[0];Object(r.useEffect)((function(){if(t&&d){var e,n,r=null===(e=t[d])||void 0===e||null===(n=e.data)||void 0===n?void 0:n.map((function(e){return{time:z()(e.dt_txt).format("ha"),temp:e.main.temp}}));o(r)}}),[t]);return Object(h.jsxs)(u.b,{flexDirection:"column",alignItems:"center",children:[Object(h.jsx)(O.a,{renderArrow:function(e){return"PREV"===e.type?Object(h.jsx)(p.a,{onClick:function(){e.onClick(),f&&o(void 0)},"aria-label":"arrow",icon:Object(h.jsx)(x.a,{as:v.a}),disabled:e.isEdge,borderRadius:"full",size:"sm",alignSelf:"center"}):Object(h.jsx)(p.a,{onClick:function(){e.onClick(),f&&o(void 0)},"aria-label":"arrow",icon:Object(h.jsx)(x.a,{as:v.b}),disabled:e.isEdge,borderRadius:"full",size:"sm",alignSelf:"center"})},pagination:!1,showEmptySlots:!1,isRTL:!1,breakPoints:P,children:t.map((function(e,n){return Object(h.jsx)(k,{data:e,handleSelect:function(){return function(e){b(e);var n=t[e].data.map((function(e){return{time:z()(e.dt_txt).format("ha"),temp:e.main.temp}}));o(n)}(n)},active:d===n},JSON.stringify(e.data[0].main))}))}),i&&Object(h.jsx)(u.b,{mt:"14",justifyContent:"center",h:"400px",w:["100%","500px"],children:Object(h.jsx)(D,{data:i})})]})},A=n(263),J=(n(260),function(e){return z()(e.dt_txt,"YYYY-MM-DD").format("MMMM D, YYYY")});var Q,W=n(262),B=n.n(W),K={hidden:{y:"100vh"},visible:{y:0,transition:{duration:1}}},N=Object(m.a)(u.a),H=function(e){var t=e.reload,n=e.data,a=Object(r.useState)([]),i=Object(l.a)(a,2),o=i[0],c=i[1];return Object(r.useEffect)((function(){if(n){var e=B()(n,J),t=[];for(var r in e){var a={title:r,data:e[r]};t.push(a)}c(t)}}),[n]),Object(h.jsxs)(N,{variants:K,initial:"hidden",animate:"visible",height:"80vh",bg:"white",borderTopRadius:"3xl",padding:"4",pt:"7",pos:"relative",overflowY:"scroll",background:"linear-gradient(120deg,rgba(255,255,255,0.3),transparent)",backdropFilter:"blur(30px)",children:[Object(h.jsx)(p.a,{onClick:t,position:"absolute",top:"0",left:"0",variant:"ghost","aria-label":"refresh",icon:Object(h.jsx)(x.a,{as:A.a,w:"6",h:"6"}),size:"lg",borderRadius:"full"}),Object(h.jsx)(u.d,{height:"10"}),Object(h.jsx)(L,{data:o})]})},V=function(e){var t=e.data;return Object(h.jsx)(u.b,{h:"20vh",justifyContent:"center",alignItems:"center",children:Object(h.jsx)(u.c,{color:"white",size:"md",fontWeight:"medium",children:null===t||void 0===t?void 0:t.name})})},q=n(120),G=n(30),U=n.n(G),X=n(180),Z=n(65),$=n(264),ee=n.n($),te="http://api.openweathermap.org/data/2.5/forecast?appid=75f972b80e26f14fe6c920aa6a85ad57",ne=function(e){var t;if(e&&((null===(t=e.response)||void 0===t?void 0:t.data)&&e.response.data.message))return e.response.data.message;return"An error occurred, please try again"},re=function(){var e=Object(Z.a)(U.a.mark((function e(t,n){var r,a;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ee.a.get(te,{params:Object(X.a)(Object(X.a)({},t),{},{units:n})});case 3:if(r=e.sent,![200].includes(r.status)){e.next=8;break}return e.abrupt("return",r.data);case 8:throw new Error;case 9:e.next=15;break;case 11:throw e.prev=11,e.t0=e.catch(0),a=ne(e.t0),new Error(a);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,n){return e.apply(this,arguments)}}(),ae="imperial",ie="metric",oe=function(){var e=Object(d.a)(),t=Object(r.useState)(),n=Object(l.a)(t,2),a=n[0],i=n[1],o=Object(r.useState)(ie),c=Object(l.a)(o,2),s=c[0],j=c[1],p=function(e,t){return Object(q.useQuery)(["weatherInfo",e,t],(function(){return e&&re(e,t)}),{enabled:!!e&&!!t})}(a,s),x=p.data,m=p.isLoading,g=p.isFetching,O=p.isError,v=p.error,w=p.refetch;return Object(r.useEffect)((function(){var e=localStorage.getItem("temperature_unit");e&&j(e)}),[]),Object(r.useEffect)((function(){"geolocation"in navigator?navigator.geolocation.getCurrentPosition((function(e){i({lat:e.coords.latitude,lon:e.coords.longitude})})):e({title:"Location service",description:"Please enable browser location",status:"warning",duration:9e3,isClosable:!0})}),[e]),Object(r.useEffect)((function(){localStorage.setItem("temperature_unit",s)}),[s]),Object(r.useEffect)((function(){O&&e({title:"Network error",description:null===v||void 0===v?void 0:v.error,status:"error",duration:9e3,isClosable:!0,position:"top"})}),[O,v,e]),Object(h.jsxs)(u.b,{direction:"column",background:"#31255a",h:"100vh",children:[Object(h.jsx)(u.b,{direction:"column",background:"linear-gradient(120deg,rgba(255,255,255,0.3),transparent)",backdropFilter:"blur(30px)"}),m&&void 0!==a?Object(h.jsx)(f,{}):Object(h.jsxs)(h.Fragment,{children:[g&&Object(h.jsx)(f,{}),Object(h.jsx)(b.b,{onChange:j,value:s,m:"4",mb:"0",children:Object(h.jsxs)(u.e,{direction:"row",justifyContent:["space-between","flex-start"],children:[Object(h.jsx)(b.a,{colorScheme:"green",value:ie,children:Object(h.jsx)(u.f,{color:"white",fontSize:"sm",children:"Celsius"})}),Object(h.jsx)(b.a,{colorScheme:"green",value:ae,children:Object(h.jsx)(u.f,{color:"white",fontSize:"sm",children:"Fahrenheit"})})]})}),Object(h.jsx)(V,{data:null===x||void 0===x?void 0:x.city}),Object(h.jsx)(H,{data:null===x||void 0===x?void 0:x.list,reload:function(){return w()}})]})]})},ce=n(40),se=n(266),le=Object(ce.b)(Q||(Q=Object(se.a)(["\n  .next,\n  .prev {\n    top: calc(50% - 20px);\n    position: absolute;\n    background: white;\n    border-radius: 30px;\n    width: 40px;\n    height: 40px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    user-select: none;\n    cursor: pointer;\n    font-weight: bold;\n    font-size: 18px;\n    z-index: 2;\n  }\n\n  .next {\n    right: 10px;\n  }\n\n  .prev {\n    left: 10px;\n    transform: scale(-1);\n  }\n\n  .rec-arrow{\n    border-radius: 50%;\n  }\n"]))),de=Object(s.b)({colors:{},fonts:{body:"Montserrat",heading:"Montserrat"},components:{}}),ue=new q.QueryClient;var be=function(){return Object(h.jsx)(q.QueryClientProvider,{client:ue,children:Object(h.jsxs)(s.a,{theme:de,children:[Object(h.jsx)(ce.a,{styles:le}),Object(h.jsx)(oe,{})]})})},je=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,485)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),r(e),a(e),i(e),o(e)}))};n(471);c.a.render(Object(h.jsxs)(a.a.StrictMode,{children:[Object(h.jsx)(i.c,{}),Object(h.jsx)(be,{})]}),document.getElementById("root")),je()}},[[472,1,2]]]);
//# sourceMappingURL=main.cab84646.chunk.js.map