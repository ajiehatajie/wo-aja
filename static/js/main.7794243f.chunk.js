(this["webpackJsonpclient-whatsapp"]=this["webpackJsonpclient-whatsapp"]||[]).push([[0],{173:function(e){e.exports=JSON.parse('["/dashboard"]')},178:function(e,t){},19:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"d",(function(){return a})),n.d(t,"c",(function(){return c})),n.d(t,"e",(function(){return o})),n.d(t,"f",(function(){return s})),n.d(t,"a",(function(){return i})),n.d(t,"g",(function(){return u}));var r="LOGIN_RESET",a="LOGIN_USER",c="LOGIN_SUCCESS",o="LOGOUT_USER",s="LOGOUT_USER_SUCCESS",i="LOGIN_API_ERROR",u="SOCIAL_LOGIN"},190:function(e,t,n){},20:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"e",(function(){return a})),n.d(t,"c",(function(){return c})),n.d(t,"d",(function(){return o})),n.d(t,"b",(function(){return s}));var r="FETCH_LIST_ANTRIAN_WO",a="FETCH_LIST_ANTRIAN_WO_SUCCESS",c="FETCH_LIST_ANTRIAN_WO_FAILED",o="FETCH_LIST_ANTRIAN_WO_RESET",s="FETCH_LIST_ANTRIAN_WO_CLEAR"},213:function(e,t,n){},244:function(e,t,n){},28:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a}));var r="http://103.58.100.219:10021/API_H2/api/v1",a={SUCCESS:200,NEED_ACTION:300,UNAUTHORIZED:401,BAD_REQUEST:400,NOT_FOUND:404,FORBIDDEN:403,ERROR:500}},335:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(52),o=n.n(c),s=(n(190),n(57)),i=n(34),u=n(167),b=n(73),d=n(36),l=n(71),j=n(6),O="CHANGE_LAYOUT",p="CHANGE_LAYOUT_WIDTH",f="CHANGE_SIDEBAR_THEME",h="CHANGE_SIDEBAR_THEME_IMAGE",x="CHANGE_SIDEBAR_TYPE",m="CHANGE_TOPBAR_THEME",v="SHOW_SIDEBAR",y="TOGGLE_LEFTMENU",g="SHOW_RIGHT_SIDEBAR",w="CHANGE_PRELOADER",E={layoutType:"vertical",layoutWidth:"fluid",leftSideBarTheme:"dark",leftSideBarThemeImage:"none",leftSideBarType:"default",topbarTheme:"light",isPreloader:!1,showRightSidebar:!1,isMobile:!1,showSidebar:!0,leftMenu:!1},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(j.a)(Object(j.a)({},e),{},{layoutType:t.payload});case w:return Object(j.a)(Object(j.a)({},e),{},{isPreloader:t.payload});case p:return Object(j.a)(Object(j.a)({},e),{},{layoutWidth:t.payload});case f:return Object(j.a)(Object(j.a)({},e),{},{leftSideBarTheme:t.payload});case h:return Object(j.a)(Object(j.a)({},e),{},{leftSideBarThemeImage:t.payload});case x:return Object(j.a)(Object(j.a)({},e),{},{leftSideBarType:t.payload.sidebarType});case m:return Object(j.a)(Object(j.a)({},e),{},{topbarTheme:t.payload});case g:return Object(j.a)(Object(j.a)({},e),{},{showRightSidebar:t.payload});case v:return Object(j.a)(Object(j.a)({},e),{},{showSidebar:t.payload});case y:return Object(j.a)(Object(j.a)({},e),{},{leftMenu:t.payload});default:return e}},T=n(18),S=n(19),N=n(27),I=n.n(N),_={error:"",loading:!1,isLoggedIn:!1,isFailedLogin:!1,action:"",sessionUser:{accessToken:"",refreshToken:"",expired_at:""},email:""},A=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,n=arguments.length>1?arguments[1]:void 0,r=n.payload,a=n.type;console.log(r);var c=(e={},Object(T.a)(e,S.b,(function(){return Object(j.a)(Object(j.a)({},t),{},{loading:!1,action:a})})),Object(T.a)(e,S.d,(function(){return Object(j.a)(Object(j.a)({},t),{},{loading:!0,action:a,email:r.user.email})})),Object(T.a)(e,S.c,(function(){return Object(j.a)(Object(j.a)({},t),{},{loading:!1,isLoggedIn:!0,sessionUser:r,action:a})})),Object(T.a)(e,S.e,(function(){return Object(j.a)(Object(j.a)({},t),{},{action:a})})),Object(T.a)(e,S.f,(function(){return Object(j.a)(Object(j.a)(Object(j.a)({},t),Object(N.cloneDeep)(_)),{},{action:a,isLoggedIn:!1})})),Object(T.a)(e,S.a,(function(){return Object(j.a)(Object(j.a)({},t),{},{error:r,loading:!1,isFailedLogin:!0,action:a})})),Object(T.a)(e,"DEFAULT",(function(){return t})),e);return(c[a]||c.DEFAULT)()},L=n(20),C={loading:!1,type:"",status:"iddle",response:{},responseError:{},responseParam:{},action:""},R=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object(N.cloneDeep)(C),n=arguments.length>1?arguments[1]:void 0,r=n.payload,a=n.type,c=(e={},Object(T.a)(e,L.d,(function(){return Object(j.a)(Object(j.a)({},t),{},{loading:!1,action:a,status:"iddle"})})),Object(T.a)(e,L.a,(function(){return Object(j.a)(Object(j.a)({},t),{},{loading:!0,action:a,responseParam:r,status:"fetch"})})),Object(T.a)(e,L.e,(function(){return Object(j.a)(Object(j.a)({},t),{},{loading:!0,action:a,response:r,status:"success"})})),Object(T.a)(e,L.c,(function(){return Object(j.a)(Object(j.a)({},t),{},{loading:!0,action:a,responseError:r,status:"failed"})})),Object(T.a)(e,L.b,(function(){return Object(j.a)(Object(j.a)(Object(j.a)({},t),Object(N.cloneDeep)(C)),{},{action:a})})),Object(T.a)(e,"DEFAULT",(function(){return t})),e);return(c[a]||c.DEFAULT)()},D=Object(d.b)({Layout:k,auth:A,wo:R}),F=n(169),U=n.n(F),B=n(170),M=n(171),H=Object(M.createBlacklistFilter)([""]),P={active:!0,reducerVersion:"1.0",storeConfig:{key:"root",storage:U.a,whitelist:["auth","Layout"],transforms:[H,Object(B.encryptTransform)({secretKey:"app@bintangmotor.com",onError:function(e){console.error("createEncryptor error ".concat(e))}})]}},G=n(181),W=Object(G.a)(),z=[W],J=D;if(P.active){var Q=P.storeConfig;J=Object(l.persistReducer)(Q,D)}var Y=d.c,V=Object(d.d)(J,Y(d.a.apply(void 0,[W].concat(Object(b.a)(z))))),Z=Object(l.persistStore)(V),$=n(16),K=n(345),q=n(344),X=n(179),ee=n(4),te=n.n(ee),ne=n(2),re=function(e){var t=e.children;return Object(ne.jsx)(ne.Fragment,{children:t})};re.propTypes={children:te.a.node};var ae=re,ce=n(81),oe=n(82),se=n(85),ie=n(84),ue=function(e,t){return{type:x,payload:{sidebarType:e,isMobile:t}}},be=function(e){return{type:m,payload:e}},de=n(55),le=n(337),je=n(338),Oe=n(172),pe=n.n(Oe),fe=(n(213),function(){var e=a.a.useState(0),t=Object(de.a)(e,2),n=t[0],c=t[1],o=a.a.useState(0),s=Object(de.a)(o,2),u=(s[0],s[1]),b=Object(r.useState)([]),d=Object(de.a)(b,2),l=d[0],j=d[1],O=Object(i.d)((function(e){return e})),p=(O.wo,O.auth.sessionUser.data.user_branch_id);Object(r.useEffect)((function(){fetch("./promo.json").then((function(e){return e.json()})).then((function(e){j(e),console.log("data",e)})).catch((function(e){console.log(e," error")}))}),[]),Object(r.useEffect)((function(){var e=setInterval((function(){fetch("./promo.json").then((function(e){return e.json()})).then((function(e){j(e),console.log("data",e)})).catch((function(e){console.log(e," error")}))}),12e4);return function(){return clearInterval(e)}}),[]);var f=I()(l).filter((function(e){return e.branchId===p})).head();return function(){var e=function(e){return e<10?"0"+e:e};setInterval((function(){var t,n,r,a,o,s,i;t=new Date,n=e((i=t.getHours())>12?i-12:i),r=e(t.getMinutes()),a=e(t.getSeconds()),o="".concat(n,":").concat(r,":").concat(a),s=t.getHours()>=12?"pm":"am",c(o),u(s)}),1e3)}(),Object(ne.jsx)(a.a.Fragment,{children:Object(ne.jsx)("footer",{className:"footer footer-color",children:Object(ne.jsx)(le.a,{children:Object(ne.jsxs)(je.a,{md:12,children:[Object(ne.jsx)(pe.a,{gradient:!1,children:Object(ne.jsx)("div",{style:{fontSize:30,fontWeight:"bold",padding:"5px",color:"#FFFFFF"},children:null===f||void 0===f?void 0:f.textPromo})}),Object(ne.jsx)("div",{className:"most-inner",children:Object(ne.jsxs)("span",{className:"00:00:00"===n?"time blink":"time",children:[" ",n]})})]})})})})}),he=function(e){Object(se.a)(n,e);var t=Object(ie.a)(n);function n(e){var r;return Object(ce.a)(this,n),(r=t.call(this,e)).openMenu=function(){r.setState({isMenuOpened:!r.state.isMenuOpened})},r.state={isMenuOpened:!1},r}return Object(oe.a)(n,[{key:"componentDidMount",value:function(){!0===this.props.isPreloader?(document.getElementById("preloader").style.display="block",document.getElementById("status").style.display="block",setTimeout((function(){document.getElementById("preloader").style.display="none",document.getElementById("status").style.display="none"}),2500)):(document.getElementById("preloader").style.display="none",document.getElementById("status").style.display="none"),window.scrollTo(0,0);var e=this.props.location.pathname,t=e.charAt(1).toUpperCase()+e.slice(2);document.title=t+" | Skote - React Admin & Dashboard Template",this.props.changeLayout("horizontal"),this.props.topbarTheme&&this.props.changeTopbarTheme(this.props.topbarTheme),this.props.layoutWidth&&this.props.changeLayoutWidth(this.props.layoutWidth)}},{key:"render",value:function(){return Object(ne.jsxs)(a.a.Fragment,{children:[Object(ne.jsx)("div",{id:"preloader",children:Object(ne.jsx)("div",{id:"status",children:Object(ne.jsxs)("div",{className:"spinner-chase",children:[Object(ne.jsx)("div",{className:"chase-dot"}),Object(ne.jsx)("div",{className:"chase-dot"}),Object(ne.jsx)("div",{className:"chase-dot"}),Object(ne.jsx)("div",{className:"chase-dot"}),Object(ne.jsx)("div",{className:"chase-dot"}),Object(ne.jsx)("div",{className:"chase-dot"})]})})}),Object(ne.jsxs)("div",{id:"layout-wrapper",children:[Object(ne.jsx)("div",{className:"main-content content-center",children:this.props.children}),Object(ne.jsx)(fe,{})]})]})}}]),n}(r.Component),xe=Object(i.b)((function(e){return Object(j.a)({},e.Layout)}),{changeTopbarTheme:be,changeLayout:function(e){return{type:O,payload:e}},changeLayoutWidth:function(e){return{type:p,payload:e}}})(Object($.h)(he)),me=n(173),ve=n(166);var ye=Object(i.b)((function(e){return{auth:e.auth}}))((function(e){var t=e.component,n=e.auth,r=(e.access,Object(ve.a)(e,["component","auth","access"]));return Object(ne.jsx)($.b,Object(j.a)(Object(j.a)({},r),{},{render:function(e){return n.isLoggedIn?Object(ne.jsx)(t,Object(j.a)({},e)):Object(ne.jsx)($.a,{to:{pathname:"/signin",state:{from:e.location}}})}}))})),ge=n(7),we=n.n(ge),Ee=n(50),ke=n(105),Te=n.n(ke),Se=n(174),Ne=n.n(Se);n(220),n(221);var Ie=function(){return Object(ne.jsx)(ne.Fragment,{children:Object(ne.jsx)(ye,{path:"/dashboard",component:(e=function(){return n(336)},function(t){Object(se.a)(r,t);var n=Object(ie.a)(r);function r(e){var t;return Object(ce.a)(this,r),(t=n.call(this,e)).state={component:null},t}return Object(oe.a)(r,[{key:"UNSAFE_componentWillMount",value:function(){Te.a.start()}},{key:"UNSAFE_componentWillUnmount",value:function(){this.mounted=!1}},{key:"componentDidMount",value:function(){var t=Object(Ee.a)(we.a.mark((function t(){var n,r;return we.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.mounted=!0,t.next=3,e();case 3:n=t.sent,r=n.default,Te.a.done(),this.mounted&&this.setState({component:Object(ne.jsx)(r,Object(j.a)({},this.props))});case 7:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.component;return Object(ne.jsx)(Ne.a,{type:"text",rows:7,ready:null!==e,children:e})}}]),r}(r.Component)),access:"ADMIN_READ"})});var e},_e=Object(i.b)((function(e){return{}}),null)((function(e){var t=Object($.g)(),a={initial:{opacity:0,scale:.99},in:{opacity:1,scale:1},out:{opacity:0,scale:1.01}},c={type:"tween",ease:"anticipate",duration:.4},o=function(){return Object(ne.jsx)(ne.Fragment,{children:Object(ne.jsxs)("div",{className:"d-flex align-items-center flex-column vh-100 justify-content-center text-center py-3",children:[Object(ne.jsx)("div",{className:"d-flex align-items-center flex-column px-4",children:Object(ne.jsx)(X.ClimbingBoxLoader,{color:"#3c44b1",loading:!0})}),Object(ne.jsx)("div",{className:"text-muted font-size-xl text-center pt-3",children:"Sedang memuat ..."})]})})};return Object(ne.jsx)(K.a,{children:Object(ne.jsx)(r.Suspense,{fallback:Object(ne.jsx)(o,{}),children:Object(ne.jsxs)($.d,{children:[Object(ne.jsx)($.a,{exact:!0,from:"/",to:"/signin"}),Object(ne.jsx)($.b,{path:["/signin"],children:Object(ne.jsx)(ae,{children:Object(ne.jsx)($.d,{location:t,children:Object(ne.jsx)(q.a.div,{initial:"initial",animate:"in",exit:"out",variants:a,transition:c,children:Object(ne.jsx)($.b,{path:"/signin",component:Object(r.lazy)((function(){return Promise.all([n.e(2),n.e(4)]).then(n.bind(null,778))}))})})},t.pathname)})}),Object(ne.jsx)($.b,{path:["/logout"],children:Object(ne.jsx)(ae,{children:Object(ne.jsx)($.d,{location:t,children:Object(ne.jsx)(q.a.div,{initial:"initial",animate:"in",exit:"out",variants:a,transition:c,children:Object(ne.jsx)($.b,{path:"/logout",component:Object(r.lazy)((function(){return n.e(5).then(n.bind(null,776))}))})})},t.pathname)})}),Object(ne.jsx)($.b,{path:me,children:Object(ne.jsx)(xe,{children:Object(ne.jsx)($.d,{location:t,children:Object(ne.jsx)(q.a.div,{initial:"initial",animate:"in",exit:"out",variants:a,transition:c,children:Object(ne.jsx)(Ie,{})})},t.pathname)})})]})})})}));function Ae(e){Object(r.useEffect)((function(){}),[]);var t=e.children;return Object(ne.jsx)(ne.Fragment,{children:t})}Ae.propTypes={children:te.a.node};var Le=Ae,Ce=n(5),Re=we.a.mark(Ke),De=we.a.mark(qe),Fe=we.a.mark(Xe),Ue=we.a.mark(et),Be=we.a.mark(tt),Me=we.a.mark(nt),He=we.a.mark(rt),Pe=we.a.mark(at),Ge=we.a.mark(ct),We=we.a.mark(ot),ze=we.a.mark(st),Je=we.a.mark(it),Qe=we.a.mark(ut),Ye=we.a.mark(bt),Ve=we.a.mark(dt);function Ze(e,t){return document.body&&document.body.setAttribute(e,t),!0}function $e(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"toggle";switch(t){case"add":document.body&&document.body.classList.add(e);break;case"remove":document.body&&document.body.classList.remove(e);break;default:document.body&&document.body.classList.toggle(e)}return!0}function Ke(e){var t;return we.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t=e.payload,n.prev=1,"horizontal"!==t){n.next=10;break}return n.next=5,Object(Ce.d)(be("dark"));case 5:document.body.removeAttribute("data-sidebar"),document.body.removeAttribute("data-sidebar-image"),document.body.removeAttribute("data-sidebar-size"),n.next=12;break;case 10:return n.next=12,Object(Ce.d)(be("light"));case 12:return n.next=14,Object(Ce.b)(Ze,"data-layout",t);case 14:n.next=18;break;case 16:n.prev=16,n.t0=n.catch(1);case 18:case"end":return n.stop()}}),Re,null,[[1,16]])}function qe(e){var t;return we.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t=e.payload,n.prev=1,"boxed"!==t){n.next=11;break}return n.next=5,Object(Ce.d)(ue("icon"));case 5:return n.next=7,Object(Ce.b)(Ze,"data-layout-size",t);case 7:return n.next=9,Object(Ce.b)(Ze,"data-layout-scrollable",!1);case 9:n.next=24;break;case 11:if("scrollable"!==t){n.next=18;break}return n.next=14,Object(Ce.d)(ue("default"));case 14:return n.next=16,Object(Ce.b)(Ze,"data-layout-scrollable",!0);case 16:n.next=24;break;case 18:return n.next=20,Object(Ce.d)(ue("default"));case 20:return n.next=22,Object(Ce.b)(Ze,"data-layout-size",t);case 22:return n.next=24,Object(Ce.b)(Ze,"data-layout-scrollable",!1);case 24:n.next=28;break;case 26:n.prev=26,n.t0=n.catch(1);case 28:case"end":return n.stop()}}),De,null,[[1,26]])}function Xe(e){var t;return we.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.payload,n.prev=1,n.next=4,Object(Ce.b)(Ze,"data-sidebar",t);case 4:n.next=8;break;case 6:n.prev=6,n.t0=n.catch(1);case 8:case"end":return n.stop()}}),Fe,null,[[1,6]])}function et(e){var t;return we.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.payload,n.prev=1,n.next=4,Object(Ce.b)(Ze,"data-sidebar-image",t);case 4:n.next=8;break;case 6:n.prev=6,n.t0=n.catch(1);case 8:case"end":return n.stop()}}),Ue,null,[[1,6]])}function tt(e){var t;return we.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.payload,n.prev=1,n.next=4,Object(Ce.b)(Ze,"data-topbar",t);case 4:n.next=8;break;case 6:n.prev=6,n.t0=n.catch(1);case 8:case"end":return n.stop()}}),Be,null,[[1,6]])}function nt(e){var t,n,r;return we.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:t=e.payload,n=t.sidebarType,r=t.isMobile,a.prev=1,a.t0=n,a.next="compact"===a.t0?5:"icon"===a.t0?12:"condensed"===a.t0?19:37;break;case 5:return a.next=7,Object(Ce.b)(Ze,"data-sidebar-size","small");case 7:return a.next=9,Object(Ce.b)($e,"sidebar-enable","remove");case 9:return a.next=11,Object(Ce.b)($e,"vertical-collpsed","remove");case 11:return a.abrupt("break",45);case 12:return a.next=14,Object(Ce.b)(Ze,"data-sidebar-size","");case 14:return a.next=16,Object(Ce.b)(Ze,"data-keep-enlarged","true");case 16:return a.next=18,Object(Ce.b)($e,"vertical-collpsed","add");case 18:return a.abrupt("break",45);case 19:return a.next=21,Object(Ce.b)($e,"sidebar-enable","add");case 21:if(!(window.screen.width>=992)){a.next=32;break}return a.next=24,Object(Ce.b)($e,"vertical-collpsed","remove");case 24:return a.next=26,Object(Ce.b)($e,"sidebar-enable","remove");case 26:return a.next=28,Object(Ce.b)($e,"vertical-collpsed","add");case 28:return a.next=30,Object(Ce.b)($e,"sidebar-enable","add");case 30:a.next=36;break;case 32:return a.next=34,Object(Ce.b)($e,"sidebar-enable","add");case 34:return a.next=36,Object(Ce.b)($e,"vertical-collpsed","add");case 36:return a.abrupt("break",45);case 37:return a.next=39,Object(Ce.b)(Ze,"data-sidebar-size","");case 39:return a.next=41,Object(Ce.b)($e,"sidebar-enable","remove");case 41:if(r){a.next=44;break}return a.next=44,Object(Ce.b)($e,"vertical-collpsed","remove");case 44:return a.abrupt("break",45);case 45:a.next=49;break;case 47:a.prev=47,a.t1=a.catch(1);case 49:case"end":return a.stop()}}),Me,null,[[1,47]])}function rt(){return we.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(Ce.b)($e,"right-bar-enabled","add");case 3:e.next=7;break;case 5:e.prev=5,e.t0=e.catch(0);case 7:case"end":return e.stop()}}),He,null,[[0,5]])}function at(){return we.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ce.f)(O,Ke);case 2:case"end":return e.stop()}}),Pe)}function ct(){return we.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ce.f)(p,qe);case 2:case"end":return e.stop()}}),Ge)}function ot(){return we.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ce.f)(f,Xe);case 2:case"end":return e.stop()}}),We)}function st(){return we.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ce.f)(h,et);case 2:case"end":return e.stop()}}),ze)}function it(){return we.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ce.f)(x,nt);case 2:case"end":return e.stop()}}),Je)}function ut(){return we.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ce.f)(m,tt);case 2:case"end":return e.stop()}}),Qe)}function bt(){return we.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ce.f)(g,rt);case 2:case"end":return e.stop()}}),Ye)}function dt(){return we.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ce.a)([Object(Ce.c)(at),Object(Ce.c)(ct),Object(Ce.c)(ot),Object(Ce.c)(st),Object(Ce.c)(it),Object(Ce.c)(bt),Object(Ce.c)(ut)]);case 2:case"end":return e.stop()}}),Ve)}var lt=dt,jt=n(29),Ot=function(e){var t=e.type,n=e.text,r=e.delay,a=void 0===r?2e3:r;"success"===t&&jt.c.success(n,{containerId:"B",transition:jt.a,autoClose:a}),"error"===t&&jt.c.error(n,{containerId:"B",transition:jt.a,autoClose:a}),"warning"===t&&jt.c.warning(n,{containerId:"B",transition:jt.a,autoClose:a})},pt=n(46),ft=n(28),ht=n(180),xt=n.n(ht).a.create({headers:{Accept:"application/json","Content-Type":"application/json"},responseType:"json",baseURL:ft.a,timeout:1e4});function mt(e,t){return vt.apply(this,arguments)}function vt(){return(vt=Object(Ee.a)(we.a.mark((function e(t,n){var r,a=arguments;return we.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.length>2&&void 0!==a[2]?a[2]:{},e.abrupt("return",xt.post(t,Object(j.a)({},n),Object(j.a)({},r)).then((function(e){return e.data})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var yt=function(e){return mt("/auth",{username:e.username,password:e.password})},gt=we.a.mark(Et),wt=we.a.mark(kt);function Et(e){var t,n,r,a,c,o;return we.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return t=e.payload,n=t.user,r=t.history,s.prev=1,a=n.username,c=n.password,s.next=5,Object(Ce.b)(yt,{username:a,password:c});case 5:o=s.sent,s.t0=o.status.code,s.next=s.t0===ft.b.SUCCESS?9:s.t0===ft.b.BAD_REQUEST?14:s.t0===ft.b.NOT_FOUND?18:s.t0===ft.b.ERROR?22:26;break;case 9:return s.next=11,Object(Ce.d)(Object(pt.c)(o));case 11:return Ot({type:"success",text:"Berhasil login"}),r.push("/dashboard"),s.abrupt("break",27);case 14:return Ot({type:"error",text:"username dan password tidak sesuai"}),s.next=17,Object(Ce.d)(Object(pt.a)(o));case 17:return s.abrupt("break",27);case 18:return Ot({type:"error",text:"username dan password tidak sesuai"}),s.next=21,Object(Ce.d)(Object(pt.a)(o));case 21:return s.abrupt("break",27);case 22:return Ot({type:"error",text:"username dan password tidak sesuai"}),s.next=25,Object(Ce.d)(Object(pt.a)(o));case 25:case 26:return s.abrupt("break",27);case 27:s.next=34;break;case 29:return s.prev=29,s.t1=s.catch(1),Ot({type:"error euy",text:s.t1.message}),s.next=34,Object(Ce.d)(Object(pt.a)({error:s.t1.message}));case 34:return s.prev=34,s.next=37,Object(Ce.d)(Object(pt.b)());case 37:return s.finish(34);case 38:case"end":return s.stop()}}),gt,null,[[1,29,34,38]])}function kt(e){var t;return we.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.payload.history,n.prev=1,n.next=4,Object(Ce.d)(Object(pt.f)());case 4:t.push("/signin"),n.next=11;break;case 7:return n.prev=7,n.t0=n.catch(1),n.next=11,Object(Ce.d)(Object(pt.a)(n.t0));case 11:case"end":return n.stop()}}),wt,null,[[1,7]])}var Tt=[Object(Ce.g)(S.d,Et),Object(Ce.f)(S.e,kt)],St=n(45),Nt=function(e){return xt.defaults.headers.common={Authorization:"Bearer ".concat(e.token)},mt("/workorder?pagesize=250",{startDate:e.startDate,FromDate:e.FromDate,operation:"branchId"})},It=we.a.mark(_t);function _t(e){var t,n,r,a,c;return we.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return t=e.payload,n=t.startDate,r=t.FromDate,o.prev=1,o.next=4,Object(Ce.e)((function(e){return e.auth.sessionUser.data.user_token}));case 4:return a=o.sent,o.next=7,Object(Ce.b)(Nt,{startDate:n,FromDate:r,token:a});case 7:c=o.sent,o.t0=c.status.code,o.next=o.t0===ft.b.SUCCESS?11:o.t0===ft.b.BAD_REQUEST?14:o.t0===ft.b.NOT_FOUND?17:o.t0===ft.b.ERROR?20:23;break;case 11:return o.next=13,Object(Ce.d)(Object(St.e)(c));case 13:return o.abrupt("break",24);case 14:return o.next=16,Object(Ce.d)(Object(St.c)(c));case 16:return o.abrupt("break",24);case 17:return o.next=19,Object(Ce.d)(Object(St.c)(c));case 19:return o.abrupt("break",24);case 20:return o.next=22,Object(Ce.d)(Object(St.c)(c));case 22:case 23:return o.abrupt("break",24);case 24:o.next=31;break;case 26:return o.prev=26,o.t1=o.catch(1),Ot({type:"error",text:o.t1.message}),o.next=31,Object(Ce.d)(Object(St.c)({error:o.t1.message}));case 31:return o.prev=31,o.next=34,Object(Ce.d)(Object(St.d)());case 34:return o.finish(31);case 35:case"end":return o.stop()}}),It,null,[[1,26,31,35]])}var At=[Object(Ce.g)(L.a,_t)],Lt=we.a.mark(Ct);function Ct(){return we.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ce.a)([lt()].concat(Object(b.a)(Tt),Object(b.a)(At)));case 2:case"end":return e.stop()}}),Lt)}var Rt=Ct,Dt=Object($.h)((function(e){var t=e.children,n=e.location.pathname;return Object(r.useEffect)((function(){window.scrollTo({top:0,left:0,behavior:"smooth"})}),[n]),t||null})),Ft=(n(334),function(){});function Ut(){return Object(ne.jsx)(i.a,{store:V,children:Object(ne.jsx)(u.a,{loading:null,persistor:Z,children:Object(ne.jsx)(Le,{children:Object(ne.jsxs)(s.a,{basename:"/",children:[Object(ne.jsx)(Dt,{children:Object(ne.jsx)(_e,{})}),Object(ne.jsx)(jt.b,{enableMultiContainer:!0,containerId:"A",position:jt.c.POSITION.BOTTOM_LEFT}),Object(ne.jsx)(jt.b,{enableMultiContainer:!0,containerId:"B",position:jt.c.POSITION.TOP_RIGHT}),Object(ne.jsx)(jt.b,{enableMultiContainer:!0,containerId:"C",position:jt.c.POSITION.BOTTOM_CENTER})]})})})})}console.log=Ft,console.warn=Ft,console.error=Ft,console.log=console.warn=console.error=function(){},W.run(Rt);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Bt=function(e){e&&e instanceof Function&&n.e(6).then(n.bind(null,777)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),r(e),a(e),c(e),o(e)}))};o.a.render(Object(ne.jsx)(Ut,{}),document.getElementById("root")),Bt(),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},336:function(e,t,n){"use strict";n.r(t);var r=n(18),a=n(55),c=n(0),o=n.n(c),s=n(339),i=n(340),u=n(341),b=n(338),d=n(342),l=n(337),j=n(175),O=n.n(j),p=(n(239),n(106)),f=n(34),h=n(45),x=(n(244),n(27)),m=n.n(x),v=n(86),y=n.n(v),g=n(182);n(7),n(178),n(5),n(28);function w(e){return null!={}[e]}function E(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];try{var n=Object(x.split)(Object(x.toLower)(e)," "),r=[];return n.forEach((function(e){var n,a=e.toString();""!==a&&null!=a&&(n=w(a)?a:t?"".concat(a[0].toUpperCase()).concat(a.substring(1,e.length)):"".concat(a[0].toUpperCase()).concat(a.substring(1,e.length).toLowerCase()),r.push(n))})),r.join(" ")}catch(a){return e}}var k=n(20),T=n(2);t.default=function(e){var t=Object(f.c)(),n=Object(c.useRef)(null),j=Object(c.useState)([]),x=Object(a.a)(j,2),v=x[0],w=x[1],S=Object(c.useState)([]),N=Object(a.a)(S,2),I=N[0],_=N[1],A=Object(f.d)((function(e){return e})),L=A.wo,C=A.auth,R=L.action,D=C.sessionUser.data.user_branch_id,F=function(e){var t=Object(c.useRef)();return Object(c.useEffect)((function(){t.current=e})),t.current}(L),U=function(){t(Object(h.a)({startDate:y()().format("yyyy/MM/DD"),FromDate:y()().format("yyyy/MM/DD")}))};function B(e){if(e.length>2){var t=e.substr(0,2);return/^[a-zA-Z]*$/.test(t)?e.substr(0,2)+"-"+e.substr(2,4)+"-"+e.substr(6):e[0]+"-"+e.substr(1,4)+"-"+e.substr(5)}return e}Object(c.useEffect)((function(){var e=setInterval((function(){U(),fetch("./promo.json").then((function(e){return e.json()})).then((function(e){_(e),console.log("data",e)})).catch((function(e){console.log(e," error")}))}),12e4);return function(){return clearInterval(e)}}),[t]),Object(c.useEffect)((function(){fetch("./promo.json").then((function(e){return e.json()})).then((function(e){_(e),console.log("data",e)})).catch((function(e){console.log(e," error")})),U()}),[t]),Object(c.useEffect)((function(){F&&F!==R&&function(e){var t,n=(t={},Object(r.a)(t,k.e,(function(){var e;w(null===L||void 0===L||null===(e=L.response)||void 0===e?void 0:e.listObj)})),Object(r.a)(t,"DEFAULT",(function(){})),t);(n[e]||n.DEFAULT)()}(R)}),[R]);var M=m()(I).filter((function(e){return e.branchId===D})).head();return Object(T.jsx)(o.a.Fragment,{children:Object(T.jsxs)(l.a,{children:[Object(T.jsx)(b.a,{xl:"8",children:Object(T.jsxs)(l.a,{children:[Object(T.jsx)(i.a,{children:Object(T.jsx)(u.a,{children:Object(T.jsx)("nav",{children:Object(T.jsx)(b.a,{lg:12,children:Object(T.jsx)(i.a,{children:Object(T.jsx)(d.a,{className:"img-fluid",src:null===M||void 0===M?void 0:M.topBanner,alt:"bintang"})})})})})}),Object(T.jsx)(b.a,{xl:"12",children:Object(T.jsx)(p.Carousel,{showArrows:!1,showThumbs:!1,dynamicHeight:!1,autoPlay:!0,interval:1e4,infiniteLoop:!0,children:m.a.size(v)>1?m.a.chunk(v,6).map((function(e,t){return function(e,t){return Object(T.jsx)("div",{children:Object(T.jsxs)(s.a,{className:"table table-striped mb-0",children:[Object(T.jsx)("thead",{className:"table-light",children:Object(T.jsxs)("tr",{children:[Object(T.jsx)("th",{children:"NO"}),Object(T.jsx)("th",{children:"NAMA"}),Object(T.jsx)("th",{children:"NOPOL"}),Object(T.jsx)("th",{children:"STATUS"})]})}),Object(T.jsx)("tbody",{children:t.map((function(t,n){var r=6*e+n+1,a="ANTRIAN",c="bg-green";switch(t.status){case"OPEN":a="ANTRIAN",c="bg-primary text-dark";break;case"PROSES":a="SEDANG SERVIS",c="bg-warning text-dark";break;case"CLOSE":case"FINISH":a="SELESAI",c="bg-success text-dark";break;default:a=t.status,c="bg-success text-dark"}return Object(T.jsxs)("tr",{className:"table-light",children:[Object(T.jsx)("th",{scope:"row",children:r}),Object(T.jsx)("td",{children:E(t.wO_Cont_Name,!1)}),Object(T.jsx)("td",{children:B(t.wo_Registration_number)}),Object(T.jsx)("td",{className:c,children:a})]})}))})]})},e)}(t,e)})):Object(T.jsx)("div",{children:"Belum ada data"})})})]})}),Object(T.jsx)(b.a,{xl:"4",children:Object(T.jsx)(i.a,{children:Object(T.jsxs)(u.a,{children:[Object(T.jsx)("div",{className:"ratio ratio-4x3 rounded",children:Object(T.jsx)(O.a,{ref:n,playing:!0,loop:!0,url:null===M||void 0===M?void 0:M.youtube,width:"100%",height:"100%",className:"ratio ratio-4x3 rounded"})}),Object(T.jsx)("div",{className:"banner rounded",children:Object(T.jsx)(g.a,{style:{maxHeight:"500px"},children:Object(T.jsx)(p.Carousel,{showArrows:!0,showThumbs:!1,dynamicHeight:!1,autoPlay:!0,interval:1e4,infiniteLoop:!0,axis:"vertical",children:null===M||void 0===M?void 0:M.banner.map((function(e,t){return Object(T.jsx)("div",{className:"rounded",children:Object(T.jsx)("img",{src:e.url})},t)}))})})})]})})})]})})}},45:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"e",(function(){return c})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return s})),n.d(t,"b",(function(){return i}));var r=n(20),a=function(e){return{type:r.a,payload:e}},c=function(e){return{type:r.e,payload:e}},o=function(e){return{type:r.c,payload:e}},s=function(){return{type:r.d}},i=function(){return{type:r.b}}},46:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"d",(function(){return c})),n.d(t,"c",(function(){return o})),n.d(t,"e",(function(){return s})),n.d(t,"f",(function(){return i})),n.d(t,"a",(function(){return u}));var r=n(19),a=function(){return{type:r.b}},c=function(e,t){return{type:r.d,payload:{user:e,history:t}}},o=function(e){return{type:r.c,payload:e}},s=function(e){return{type:r.e,payload:{history:e}}},i=function(){return{type:r.f,payload:{}}},u=function(e){return{type:r.a,payload:e}}}},[[335,1,3]]]);
//# sourceMappingURL=main.7794243f.chunk.js.map