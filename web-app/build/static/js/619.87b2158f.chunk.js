(self.webpackChunkweb_app=self.webpackChunkweb_app||[]).push([[619],{8619:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>x});var n=r(5043),o=r(3097),a=r.n(o),i=r(4574),l=r(9923),c=r(4141),s=r(1476),u=r.n(s),p=r(2961),d=r(4159),f=r(579);const y=e=>{let{label:t="",value:r=""}=e;const n=(0,p.jL)();return(0,f.jsxs)(l.azJ,{sx:{marginTop:12},children:[(0,f.jsx)(l.l1Y,{children:t}),(0,f.jsx)(l.EmB,{actionButton:(0,f.jsx)(u(),{text:r,children:(0,f.jsx)(l.$nd,{id:"copy-path",variant:"regular",onClick:()=>{n((0,d.h0)("".concat(t," copied to clipboard")))},style:{marginRight:"5px",width:"28px",height:"28px",padding:"0px"},icon:(0,f.jsx)(l.TdU,{})})}),children:r})]})};var m=r(6681),h=r(7403);const b=i.Ay.div((e=>{let{theme:t}=e;return{color:a()(t,"signalColors.danger","#C51B3F"),fontSize:".85rem",margin:".5rem 0 .5rem 0",display:"flex",alignItems:"center","& svg ":{marginRight:".3rem",height:16,width:16}}})),g=(e,t)=>{let r=document.createElement("a");r.setAttribute("href","data:text/plain;charset=utf-8,"+t),r.setAttribute("download",e),r.style.display="none",document.body.appendChild(r),r.click(),document.body.removeChild(r)},x=e=>{let{newServiceAccount:t,open:r,closeModal:o,entity:i}=e;if(!t)return null;const s=a()(t,"console",null),u=a()(t,"idp",!1);return(0,f.jsx)(c.A,{modalOpen:r,onClose:()=>{o()},title:"New ".concat(i," Created"),titleIcon:(0,f.jsx)(l.kQt,{}),children:(0,f.jsxs)(l.xA9,{container:!0,children:[(0,f.jsxs)(l.xA9,{item:!0,xs:12,children:["A new ",i," has been created with the following details:",!u&&s&&(0,f.jsx)(n.Fragment,{children:(0,f.jsxs)(l.xA9,{item:!0,xs:12,sx:{overflowY:"auto",maxHeight:350},children:[(0,f.jsx)(l.azJ,{sx:{padding:".8rem 0 0 0",fontWeight:600,fontSize:".9rem"},children:"Console Credentials"}),Array.isArray(s)&&s.map(((e,t)=>(0,f.jsxs)(n.Fragment,{children:[(0,f.jsx)(y,{label:"Access Key",value:e.accessKey}),(0,f.jsx)(y,{label:"Secret Key",value:e.secretKey})]}))),!Array.isArray(s)&&(0,f.jsxs)(n.Fragment,{children:[(0,f.jsx)(y,{label:"Access Key",value:s.accessKey}),(0,f.jsx)(y,{label:"Secret Key",value:s.secretKey})]})]})}),(null===s||void 0===s)&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(y,{label:"Access Key",value:t.accessKey||""}),(0,f.jsx)(y,{label:"Secret Key",value:t.secretKey||""})]}),u?(0,f.jsx)(b,{children:"Please Login via the configured external identity provider."}):(0,f.jsxs)(b,{children:[(0,f.jsx)(l.cJw,{}),(0,f.jsx)("span",{children:"Write these down, as this is the only time the secret will be displayed."})]})]}),(0,f.jsx)(l.xA9,{item:!0,xs:12,sx:{...h.U.modalButtonBar},children:!u&&(0,f.jsxs)(n.Fragment,{children:[(0,f.jsx)(m.A,{tooltip:"Download credentials in a JSON file formatted for import using mc alias import. This will only include the default login credentials.",children:(0,f.jsx)(l.$nd,{id:"download-button",label:"Download for import",onClick:()=>{let e={};if(s)if(Array.isArray(s)){e=s.map((e=>({url:e.url,accessKey:e.accessKey,secretKey:e.secretKey,api:"s3v4",path:"auto"})))[0]}else e={url:s.url,accessKey:s.accessKey,secretKey:s.secretKey,api:"s3v4",path:"auto"};else e={url:t.url,accessKey:t.accessKey,secretKey:t.secretKey,api:"s3v4",path:"auto"};g("credentials.json",JSON.stringify({...e}))},icon:(0,f.jsx)(l.s3U,{}),variant:"callAction"})}),Array.isArray(s)&&s.length>1&&(0,f.jsx)(m.A,{tooltip:"Download all access credentials to a JSON file. NOTE: This file is not formatted for import using mc alias import. If you plan to import this alias from the file, please use the Download for Import button. ",children:(0,f.jsx)(l.$nd,{id:"download-all-button",label:"Download all access credentials",onClick:()=>{let e={};if(s&&Array.isArray(s)&&s.length>1){e=s.map((e=>({accessKey:e.accessKey,secretKey:e.secretKey})))}g("all_credentials.json",JSON.stringify({...e}))},icon:(0,f.jsx)(l.s3U,{}),variant:"callAction",color:"primary"})})]})})]})})}},7403:(e,t,r)=>{"use strict";r.d(t,{U:()=>o,_:()=>n});const n={label:{color:"#07193E",fontSize:13,alignSelf:"center",whiteSpace:"nowrap","&:not(:first-of-type)":{marginLeft:10}},actionsTray:{display:"flex",justifyContent:"space-between",marginBottom:"1rem",alignItems:"center","& button":{flexGrow:0,marginLeft:8}}},o={modalButtonBar:{marginTop:15,display:"flex",alignItems:"center",justifyContent:"flex-end","& button":{marginRight:10},"& button:last-child":{marginRight:0}},modalFormScrollable:{maxHeight:"calc(100vh - 300px)",overflowY:"auto",paddingTop:10}}},4141:(e,t,r)=>{"use strict";r.d(t,{A:()=>u});var n=r(5043),o=r(9456),a=r(9923),i=r(2961),l=r(4159),c=r(9555),s=r(579);const u=e=>{let{onClose:t,modalOpen:r,title:u,children:p,wideLimit:d=!0,titleIcon:f=null,iconColor:y="default",sx:m}=e;const h=(0,i.jL)(),[b,g]=(0,n.useState)(!1),x=(0,o.d4)((e=>e.system.modalSnackBar));(0,n.useEffect)((()=>{h((0,l.h0)(""))}),[h]),(0,n.useEffect)((()=>{if(x){if(""===x.message)return void g(!1);"error"!==x.type&&g(!0)}}),[x]);let v="";return x&&(v=x.detailedErrorMsg,(""===x.detailedErrorMsg||x.detailedErrorMsg.length<5)&&(v=x.message)),(0,s.jsxs)(a.ngX,{onClose:t,open:r,title:u,titleIcon:f,widthLimit:d,sx:m,iconColor:y,children:[(0,s.jsx)(c.A,{isModal:!0}),(0,s.jsx)(a.qb_,{onClose:()=>{g(!1),h((0,l.h0)(""))},open:b,message:v,mode:"inline",variant:"error"===x.type?"error":"default",autoHideDuration:"error"===x.type?10:5,condensed:!0}),p]})}},5270:(e,t,r)=>{"use strict";var n=r(139),o={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var r,a,i,l,c,s,u=!1;t||(t={}),r=t.debug||!1;try{if(i=n(),l=document.createRange(),c=document.getSelection(),(s=document.createElement("span")).textContent=e,s.ariaHidden="true",s.style.all="unset",s.style.position="fixed",s.style.top=0,s.style.clip="rect(0, 0, 0, 0)",s.style.whiteSpace="pre",s.style.webkitUserSelect="text",s.style.MozUserSelect="text",s.style.msUserSelect="text",s.style.userSelect="text",s.addEventListener("copy",(function(n){if(n.stopPropagation(),t.format)if(n.preventDefault(),"undefined"===typeof n.clipboardData){r&&console.warn("unable to use e.clipboardData"),r&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var a=o[t.format]||o.default;window.clipboardData.setData(a,e)}else n.clipboardData.clearData(),n.clipboardData.setData(t.format,e);t.onCopy&&(n.preventDefault(),t.onCopy(n.clipboardData))})),document.body.appendChild(s),l.selectNodeContents(s),c.addRange(l),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");u=!0}catch(p){r&&console.error("unable to copy using execCommand: ",p),r&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),u=!0}catch(p){r&&console.error("unable to copy using clipboardData: ",p),r&&console.error("falling back to prompt"),a=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(a,e)}}finally{c&&("function"==typeof c.removeRange?c.removeRange(l):c.removeAllRanges()),s&&document.body.removeChild(s),i()}return u}},2099:(e,t,r)=>{"use strict";function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var o=l(r(5043)),a=l(r(5270)),i=["text","onCopy","options","children"];function l(e){return e&&e.__esModule?e:{default:e}}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){h(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function p(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e,t){return d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},d(e,t)}function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,o=m(e);if(t){var a=m(this).constructor;r=Reflect.construct(o,arguments,a)}else r=o.apply(this,arguments);return function(e,t){if(t&&("object"===n(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return y(e)}(this,r)}}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},m(e)}function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var b=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)}(c,e);var t,r,n,l=f(c);function c(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return h(y(e=l.call.apply(l,[this].concat(r))),"onClick",(function(t){var r=e.props,n=r.text,i=r.onCopy,l=r.children,c=r.options,s=o.default.Children.only(l),u=(0,a.default)(n,c);i&&i(n,u),s&&s.props&&"function"===typeof s.props.onClick&&s.props.onClick(t)})),e}return t=c,(r=[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),r=u(e,i),n=o.default.Children.only(t);return o.default.cloneElement(n,s(s({},r),{},{onClick:this.onClick}))}}])&&p(t.prototype,r),n&&p(t,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(o.default.PureComponent);t.CopyToClipboard=b,h(b,"defaultProps",{onCopy:void 0,options:void 0})},1476:(e,t,r)=>{"use strict";var n=r(2099).CopyToClipboard;n.CopyToClipboard=n,e.exports=n},139:e=>{e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,r=[],n=0;n<e.rangeCount;n++)r.push(e.getRangeAt(n));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||r.forEach((function(t){e.addRange(t)})),t&&t.focus()}}}}]);
//# sourceMappingURL=619.87b2158f.chunk.js.map