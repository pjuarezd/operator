"use strict";(self.webpackChunkweb_app=self.webpackChunkweb_app||[]).push([[723],{7403:(e,t,n)=>{n.d(t,{U:()=>s,_:()=>i});const i={label:{color:"#07193E",fontSize:13,alignSelf:"center",whiteSpace:"nowrap","&:not(:first-of-type)":{marginLeft:10}},actionsTray:{display:"flex",justifyContent:"space-between",marginBottom:"1rem",alignItems:"center","& button":{flexGrow:0,marginLeft:8}}},s={modalButtonBar:{marginTop:15,display:"flex",alignItems:"center",justifyContent:"flex-end","& button":{marginRight:10},"& button:last-child":{marginRight:0}},modalFormScrollable:{maxHeight:"calc(100vh - 300px)",overflowY:"auto",paddingTop:10}}},7593:(e,t,n)=>{n.d(t,{A:()=>d});n(5043);var i=n(9923),s=n(4241),a=n(4574),r=n(3097),c=n.n(r),o=n(579);const l=a.Ay.div((e=>{let{theme:t}=e;return{position:"relative",margin:0,userSelect:"none",appearance:"none",maxWidth:"100%",fontFamily:"'Inter', sans-serif",fontSize:13,display:"inline-flex",alignItems:"center",justifyContent:"center",gap:6,border:"1px solid ".concat(c()(t,"borderColor","#E2E2E2")),borderRadius:3,padding:"5px 10px","& .certificateName":{display:"flex",alignItems:"center",gap:5,fontWeight:"bold",color:c()(t,"signalColors.main","#07193E")},"& .deleteTagButton":{backgroundColor:"transparent",border:0,display:"flex",alignItems:"center",justifyContent:"center",padding:0,cursor:"pointer",opacity:.6,"&:hover":{opacity:1},"& svg":{fill:c()(t,"tag.grey.background","#07193E"),width:10,height:10,minWidth:10,minHeight:10}},"& .certificateContainer":{margin:"5px 10px"},"& .certificateExpiry":{color:c()(t,"secondaryText","#5B5C5C"),display:"flex",alignItems:"center",flexWrap:"wrap",marginBottom:5,"& .label":{fontWeight:"bold"}},"& .certificateDomains":{color:c()(t,"secondaryText","#5B5C5C"),"& .label":{fontWeight:"bold"}},"& .certificatesList":{border:"1px solid ".concat(c()(t,"borderColor","#E2E2E2")),borderRadius:4,color:c()(t,"secondaryText","#5B5C5C"),textTransform:"lowercase",overflowY:"scroll",maxHeight:145,marginTop:3,marginBottom:5,padding:0,"& li":{listStyle:"none",padding:"5px 10px",margin:0,display:"flex",alignItems:"center","&:before":{content:"' '"}}},"& .certificatesListItem":{padding:"0px 16px",borderBottom:"1px solid ".concat(c()(t,"borderColor","#E2E2E2")),"& div":{minWidth:0},"& svg":{fontSize:12,marginRight:10,opacity:.5},"& span":{fontSize:12}},"& .certificateExpiring":{color:c()(t,"signalColors.warning","#FFBD62"),"& .label":{fontWeight:"bold"}},"& .certificateExpired":{color:c()(t,"signalColors.danger","#C51B3F"),"& .label":{fontWeight:"bold"}},"& .closeIcon":{transform:"scale(0.8)"}}})),d=e=>{let{certificateInfo:t,onDelete:n=(()=>{})}=e;const a=t.domains||[],r=s.c9.fromISO(t.expiry),c=s.c9.utc();let d=0,m="",x="";if(r){let e=r.diff(c);d=e.as("days"),m=e.minus(s.dw.fromObject({days:1})).shiftTo("days").toHuman({listStyle:"long",maximumFractionDigits:0}),d>=10&&d<30&&(x="certificateExpiring"),d<10&&(x="certificateExpired",d<2&&(m=e.minus(s.dw.fromObject({minutes:1})).shiftTo("hours","minutes").toHuman({listStyle:"long",maximumFractionDigits:0}),e.as("minutes")<=1&&(m="EXPIRED")))}return(0,o.jsxs)(l,{children:[(0,o.jsxs)(i.azJ,{children:[(0,o.jsxs)(i.azJ,{className:"certificateName",children:[(0,o.jsx)(i.j$V,{}),(0,o.jsx)("span",{children:t.name})]}),(0,o.jsxs)(i.azJ,{className:"certificateContainer",children:[(0,o.jsxs)(i.azJ,{className:"certificateExpiry",children:[(0,o.jsx)(i.PoC,{color:"inherit",fontSize:"small"}),"\xa0",(0,o.jsx)("span",{className:"label",children:"Expiry:\xa0"}),(0,o.jsx)("span",{children:r.toFormat("yyyy/MM/dd")})]}),(0,o.jsxs)(i.azJ,{className:"certificateExpiry",children:[(0,o.jsx)(i.b1c,{}),"\xa0",(0,o.jsx)("span",{className:"label",children:"Expires in:\xa0"}),(0,o.jsx)("span",{className:x,children:m})]}),(0,o.jsx)("hr",{style:{marginBottom:12}}),(0,o.jsx)(i.azJ,{className:"certificateDomains",children:(0,o.jsx)("span",{className:"label",children:"".concat(a.length," Domain (s):")})}),(0,o.jsx)("ul",{className:"certificatesList",children:a.map(((e,t)=>(0,o.jsxs)("li",{className:"certificatesListItem",children:[(0,o.jsx)(i.UaP,{}),(0,o.jsx)("span",{children:e})]},"".concat(e,"-").concat(t))))})]})]}),(0,o.jsx)(i.K0,{size:"small",onClick:n,className:"closeIcon",children:(0,o.jsx)(i.evq,{})})]})}},3084:(e,t,n)=>{n.d(t,{A:()=>o});n(5043);var i=n(9456),s=n(9923),a=n(3216),r=n(579);const c=e=>{let{icon:t,description:n}=e;return(0,r.jsxs)(s.azJ,{sx:{display:"flex","& .min-icon":{marginRight:"10px",height:"23px",width:"23px",marginBottom:"10px"}},children:[t," ",(0,r.jsx)(s.azJ,{className:"muted",sx:{fontSize:"14px",fontStyle:"italic"},children:n})]})},o=()=>{const e=(0,a.g)(),t=e.tenantName||"",n=e.tenantNamespace||"",o=(0,i.d4)((e=>""!==n?n:""!==e.createTenant.fields.nameTenant.namespace?e.createTenant.fields.nameTenant.namespace:"<namespace>")),l=(0,i.d4)((e=>""!==t?t:""!==e.createTenant.fields.nameTenant.tenantName?e.createTenant.fields.nameTenant.tenantName:"<tenant-name>"));return(0,r.jsx)(s.azJ,{sx:{flex:1,border:"1px solid #eaeaea",borderRadius:"2px",display:"flex",flexFlow:"column",padding:"20px",["@media (max-width: ".concat(s.nmC.sm,"px)")]:{marginTop:0}},children:(0,r.jsxs)(s.azJ,{sx:{display:"flex",flexFlow:"column"},children:[(0,r.jsx)(c,{icon:(0,r.jsx)(s.j$V,{}),description:"TLS Certificates Warning"}),(0,r.jsxs)(s.azJ,{sx:{fontSize:"14px",marginBottom:"15px"},children:["Automatic certificate generation is not enabled.",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"If you wish to continue only with ",(0,r.jsx)("b",{children:"custom certificates"})," make sure they are valid for the following internode hostnames, i.e.:",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsxs)(s.azJ,{sx:{fontSize:"14px",fontStyle:"italic"},className:"muted",children:["minio.",o,(0,r.jsx)("br",{}),"minio.",o,".svc",(0,r.jsx)("br",{}),"minio.",o,".svc.<cluster domain>",(0,r.jsx)("br",{}),"*.",l,"-hl.",o,".svc.<cluster domain>",(0,r.jsx)("br",{}),"*.",o,".svc.<cluster domain>"]}),(0,r.jsx)("br",{}),"Replace ",(0,r.jsx)("em",{children:"<tenant-name>"}),","," ",(0,r.jsx)("em",{children:"<namespace>"})," and",(0,r.jsx)("em",{children:"<cluster domain>"})," with the actual values for your MinIO tenant.",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"You can learn more at our"," ",(0,r.jsx)("a",{href:"https://min.io/docs/minio/kubernetes/upstream/operations/network-encryption.html?ref=op#id5",target:"_blank",rel:"noopener",children:"documentation"}),"."]})]})})}},3104:(e,t,n)=>{n.r(t),n.d(t,{default:()=>f});var i=n(5043),s=n(9456),a=n(9923),r=n(7403),c=n(2961),o=n(4159),l=n(649),d=n(8661),m=n(7593),x=n(579);const u=e=>{let{runAsGroup:t,runAsUser:n,fsGroup:r,fsGroupChangePolicy:c,runAsNonRoot:o,setRunAsUser:l,setRunAsGroup:d,setFSGroup:m,setRunAsNonRoot:u,setFSGroupChangePolicy:h}=e;const p=(0,s.wA)();return(0,x.jsx)(i.Fragment,{children:(0,x.jsxs)("fieldset",{className:"inputItem",children:[(0,x.jsx)("legend",{children:"Security Context"}),(0,x.jsxs)(a.azJ,{sx:{"& .multiContainerStackNarrow":{display:"flex",alignItems:"center",justifyContent:"flex-start",gap:"8px","@media (max-width: 750px)":{flexFlow:"column",flexDirection:"column"}},"& .configSectionItem":{marginRight:15,marginBottom:10}},children:[(0,x.jsx)(a.xA9,{item:!0,xs:12,children:(0,x.jsxs)(a.azJ,{className:"multiContainerStackNarrow",children:[(0,x.jsx)(a.azJ,{className:"configSectionItem",children:(0,x.jsx)(a.cl_,{type:"number",id:"securityContext_runAsUser",name:"securityContext_runAsUser",onChange:e=>{p(l(e.target.value))},label:"Run As User",value:n,required:!0,min:"0"})}),(0,x.jsx)(a.azJ,{className:"configSectionItem",children:(0,x.jsx)(a.cl_,{type:"number",id:"securityContext_runAsGroup",name:"securityContext_runAsGroup",onChange:e=>{p(d(e.target.value))},label:"Run As Group",value:t,required:!0,min:"0"})})]})}),(0,x.jsx)(a.xA9,{item:!0,xs:12,children:(0,x.jsxs)(a.azJ,{className:"multiContainerStackNarrow ",children:[(0,x.jsx)(a.azJ,{className:"configSectionItem",children:(0,x.jsx)(a.cl_,{type:"number",id:"securityContext_fsGroup",name:"securityContext_fsGroup",onChange:e=>{p(m(e.target.value))},label:"FsGroup",value:r,required:!0,min:"0"})}),(0,x.jsx)(a.azJ,{className:"configSectionItem",children:(0,x.jsx)(a.l6P,{label:"FsGroupChangePolicy",id:"securityContext_fsGroupChangePolicy",name:"securityContext_fsGroupChangePolicy",onChange:e=>{p(h(e))},value:c,options:[{label:"Always",value:"Always"},{label:"OnRootMismatch",value:"OnRootMismatch"}]})})]})}),(0,x.jsx)(a.xA9,{item:!0,xs:12,children:(0,x.jsx)(a.dOG,{value:"SecurityContextRunAsNonRoot",id:"securityContext_runAsNonRoot",name:"securityContext_runAsNonRoot",checked:o,onChange:()=>{p(u(!o))},label:"Do not run as Root"})})]})]})})};var h=n(2987),p=n(3084);const f=()=>{const e=(0,c.jL)(),t=(0,s.d4)((e=>e.tenants.tenantInfo)),n=(0,s.d4)((e=>e.tenants.loadingTenant)),[f,C]=(0,i.useState)(!1),[g,j]=(0,i.useState)(!1),[y,b]=(0,i.useState)(!1),[A,S]=(0,i.useState)(!1),[v,k]=(0,i.useState)(!1),[N,w]=(0,i.useState)([]),[R,T]=(0,i.useState)([{id:Date.now().toString(),key:"",cert:"",encoded_key:"",encoded_cert:""}]),[I,_]=(0,i.useState)([{id:Date.now().toString(),key:"",cert:"",encoded_key:"",encoded_cert:""}]),[z,G]=(0,i.useState)([{id:Date.now().toString(),key:"",cert:"",encoded_key:"",encoded_cert:""}]),[E,D]=(0,i.useState)([]),[B,F]=(0,i.useState)([]),[J,P]=(0,i.useState)([]),O=(0,s.d4)((e=>e.editTenantSecurityContext.runAsGroup)),L=(0,s.d4)((e=>e.editTenantSecurityContext.runAsUser)),K=(0,s.d4)((e=>e.editTenantSecurityContext.fsGroup)),U=(0,s.d4)((e=>e.editTenantSecurityContext.runAsNonRoot)),W=(0,s.d4)((e=>e.editTenantSecurityContext.fsGroupChangePolicy)),M=(0,i.useCallback)((()=>{l.A.invoke("GET","/api/v1/namespaces/".concat(null===t||void 0===t?void 0:t.namespace,"/tenants/").concat(null===t||void 0===t?void 0:t.name,"/security")).then((t=>{S(t.autoCert),b(t.autoCert),(t.customCertificates.minio||t.customCertificates.client||t.customCertificates.minioCAs)&&(k(!0),b(!0)),D(t.customCertificates.minio||[]),F(t.customCertificates.client||[]),P(t.customCertificates.minioCAs||[]),e((0,h.vi)(t.securityContext.runAsGroup)),e((0,h.r2)(t.securityContext.runAsUser)),e((0,h.Nn)(t.securityContext.fsGroup)),e((0,h.rW)(t.securityContext.runAsNonRoot)),e((0,h.TR)(t.securityContext.fsGroupChangePolicy))})).catch((t=>{e((0,o.C9)(t))}))}),[t,e]);(0,i.useEffect)((()=>{t&&M()}),[t,M]);const H=e=>{w([...N,e.name]);const t=E.filter((t=>t.name!==e.name)),n=B.filter((t=>t.name!==e.name)),i=J.filter((t=>t.name!==e.name));D(t),F(n),P(i)},Y=(e,t,n,i,s)=>{let a=R,r=()=>{};switch(e){case"minio":a=R,r=T;break;case"client":a=I,r=_;break;case"minioCAs":a=z,r=G}r(a.map((e=>e.id===t?{...e,[n]:i,["encoded_".concat(n)]:s}:e)))},q=(e,t)=>{let n=R,i=()=>{};switch(e){case"minio":n=R,i=T;break;case"client":n=I,i=_;break;case"minioCAs":n=z,i=G}if(n.length>1){i(n.filter((e=>e.id!==t)))}},V=e=>{let t=R,n=()=>{};switch(e){case"minio":t=R,n=T;break;case"client":t=I,n=_;break;case"minioCAs":t=z,n=G}n([...t,{id:Date.now().toString(),key:"",cert:"",encoded_key:"",encoded_cert:""}])};return(0,x.jsxs)(i.Fragment,{children:[(0,x.jsx)(d.A,{title:"Save and Restart",confirmText:"Restart",cancelText:"Cancel",titleIcon:(0,x.jsx)(a.$rg,{}),isLoading:f,onClose:()=>j(!1),isOpen:g,onConfirm:()=>{C(!0);let n={autoCert:A,customCertificates:{},securityContext:{runAsGroup:O,runAsUser:L,runAsNonRoot:U,fsGroup:K,fsGroupChangePolicy:W}};n.customCertificates=v?{secretsToBeDeleted:N,minioServerCertificates:R.map((e=>({crt:e.encoded_cert,key:e.encoded_key}))).filter((e=>e.crt&&e.key)),minioClientCertificates:I.map((e=>({crt:e.encoded_cert,key:e.encoded_key}))).filter((e=>e.crt&&e.key)),minioCAsCertificates:z.map((e=>e.encoded_cert)).filter((e=>e))}:{secretsToBeDeleted:[...E.map((e=>e.name)),...B.map((e=>e.name)),...J.map((e=>e.name))],minioServerCertificates:[],minioClientCertificates:[],minioCAsCertificates:[]},l.A.invoke("POST","/api/v1/namespaces/".concat(null===t||void 0===t?void 0:t.namespace,"/tenants/").concat(null===t||void 0===t?void 0:t.name,"/security"),n).then((()=>{C(!1),j(!1),T([{cert:"",encoded_cert:"",encoded_key:"",id:Date.now().toString(),key:""}]),_([{cert:"",encoded_cert:"",encoded_key:"",id:Date.now().toString(),key:""}]),G([{cert:"",encoded_cert:"",encoded_key:"",id:Date.now().toString(),key:""}]),M()})).catch((t=>{e((0,o.C9)(t)),C(!1)}))},confirmationContent:(0,x.jsx)(i.Fragment,{children:"Are you sure you want to save the changes and restart the service?"})}),n?(0,x.jsx)(a.azJ,{sx:{textAlign:"center"},children:(0,x.jsx)(a.aHM,{})}):(0,x.jsxs)(i.Fragment,{children:[(0,x.jsx)(a.azJ,{children:(0,x.jsx)(a._xt,{separator:!0,sx:{marginBottom:15},children:"Security"})}),(0,x.jsxs)(a.Hbc,{withBorders:!1,containerPadding:!1,sx:{"& .minioCertificateRows":{display:"flex",alignItems:"center",justifyContent:"flex-start",padding:5,"& .inputItem":{marginBottom:0},"&:last-child":{borderBottom:0},"@media (max-width: 900px)":{flex:1}},"& .overlayAction":{marginLeft:10},"& .rowActions":{display:"flex",justifyContent:"flex-end","@media (max-width: 900px)":{flex:1}}},children:[(0,x.jsx)(a.dOG,{value:"enableTLS",id:"enableTLS",name:"enableTLS",checked:y,onChange:e=>{const t=e.target.checked;b(t)},label:"TLS",description:"Securing all the traffic using TLS. This is required for Encryption Configuration"}),y&&(0,x.jsxs)(i.Fragment,{children:[(0,x.jsx)(a.dOG,{value:"enableAutoCert",id:"enableAutoCert",name:"enableAutoCert",checked:A,onChange:e=>{const t=e.target.checked;S(t)},label:"AutoCert",description:"The internode certificates will be generated and managed by MinIO Operator"}),(0,x.jsx)(a.dOG,{value:"enableCustomCerts",id:"enableCustomCerts",name:"enableCustomCerts",checked:v,onChange:e=>{const t=e.target.checked;k(t)},label:"Custom Certificates",description:"Certificates used to terminated TLS at MinIO"}),v&&(0,x.jsxs)(i.Fragment,{children:[!A&&(0,x.jsx)(a.xA9,{item:!0,xs:12,children:(0,x.jsx)(p.A,{})}),(0,x.jsx)(a.xA9,{item:!0,xs:12,className:"inputItem",children:(0,x.jsx)("h5",{children:"MinIO Server Certificates"})}),(0,x.jsx)(a.xA9,{item:!0,xs:12,children:E.map((e=>(0,x.jsx)(m.A,{certificateInfo:e,onDelete:()=>H(e)})))}),(0,x.jsx)(a.xA9,{item:!0,xs:12,children:R.map(((e,t)=>(0,x.jsxs)(a.xA9,{item:!0,xs:12,className:"minioCertificateRows",children:[(0,x.jsx)(a.SxS,{onChange:(t,n,i)=>{i&&Y("minio",e.id,"cert",n,i)},accept:".cer,.crt,.cert,.pem",id:"tlsCert",name:"tlsCert",label:"Cert",value:e.cert,returnEncodedData:!0}),(0,x.jsx)(a.SxS,{onChange:(t,n,i)=>{i&&Y("minio",e.id,"key",n,i)},accept:".key,.pem",id:"tlsKey",name:"tlsKey",label:"Key",value:e.key,returnEncodedData:!0}),(0,x.jsxs)(a.xA9,{item:!0,xs:2,className:"rowActions",children:[(0,x.jsx)("div",{className:"overlayAction",children:(0,x.jsx)(a.K0,{size:"small",onClick:()=>V("minio"),disabled:t!==R.length-1,children:(0,x.jsx)(a.REV,{})})}),(0,x.jsx)("div",{className:"overlayAction",children:(0,x.jsx)(a.K0,{size:"small",onClick:()=>q("minio",e.id),disabled:R.length<=1,children:(0,x.jsx)(a.YPx,{})})})]})]},e.id)))}),(0,x.jsx)(a.xA9,{item:!0,xs:12,className:"inputItem",children:(0,x.jsx)("h5",{children:"MinIO Client Certificates"})}),(0,x.jsx)(a.xA9,{item:!0,xs:12,children:B.map((e=>(0,x.jsx)(m.A,{certificateInfo:e,onDelete:()=>H(e)})))}),(0,x.jsx)(a.xA9,{item:!0,xs:12,className:"inputItem",children:I.map(((e,t)=>(0,x.jsxs)(a.xA9,{item:!0,xs:12,className:"minioCertificateRows",children:[(0,x.jsx)(a.SxS,{onChange:(t,n,i)=>{i&&Y("client",e.id,"cert",n,i)},accept:".cer,.crt,.cert,.pem",id:"tlsCert",name:"tlsCert",label:"Cert",value:e.cert,returnEncodedData:!0}),(0,x.jsx)(a.SxS,{onChange:(t,n,i)=>{i&&Y("client",e.id,"key",n,i)},accept:".key,.pem",id:"tlsKey",name:"tlsKey",label:"Key",value:e.key,returnEncodedData:!0}),(0,x.jsxs)(a.xA9,{item:!0,xs:2,className:"rowActions",children:[(0,x.jsx)("div",{className:"overlayAction",children:(0,x.jsx)(a.K0,{size:"small",onClick:()=>V("client"),disabled:t!==I.length-1,children:(0,x.jsx)(a.REV,{})})}),(0,x.jsx)("div",{className:"overlayAction",children:(0,x.jsx)(a.K0,{size:"small",onClick:()=>q("client",e.id),disabled:I.length<=1,children:(0,x.jsx)(a.YPx,{})})})]})]},e.id)))}),(0,x.jsx)(a.xA9,{item:!0,xs:12,children:(0,x.jsx)("h5",{children:"MinIO CA Certificates"})}),(0,x.jsx)(a.xA9,{item:!0,xs:12,children:J.map((e=>(0,x.jsx)(m.A,{certificateInfo:e,onDelete:()=>H(e)})))}),(0,x.jsx)(a.xA9,{item:!0,xs:12,children:z.map(((e,t)=>(0,x.jsxs)(a.xA9,{item:!0,xs:12,className:"minioCertificateRows",children:[(0,x.jsx)(a.xA9,{item:!0,xs:10,children:(0,x.jsx)(a.SxS,{onChange:(t,n,i)=>{i&&Y("minioCAs",e.id,"cert",n,i)},accept:".cer,.crt,.cert,.pem",id:"tlsCert",name:"tlsCert",label:"Cert",value:e.cert,returnEncodedData:!0})}),(0,x.jsx)(a.xA9,{item:!0,xs:2,children:(0,x.jsxs)("div",{className:"rowActions",children:[(0,x.jsx)("div",{className:"overlayAction",children:(0,x.jsx)(a.K0,{size:"small",onClick:()=>V("minioCAs"),disabled:t!==z.length-1,children:(0,x.jsx)(a.REV,{})})}),(0,x.jsx)("div",{className:"overlayAction",children:(0,x.jsx)(a.K0,{size:"small",onClick:()=>q("minioCAs",e.id),disabled:z.length<=1,children:(0,x.jsx)(a.YPx,{})})})]})})]},e.id)))})]})]}),(0,x.jsx)(a.xA9,{item:!0,xs:12,className:"inputItem",children:(0,x.jsx)(a._xt,{separator:!0,children:"Security Context"})}),(0,x.jsx)(a.xA9,{item:!0,xs:12,className:"inputItem",children:(0,x.jsx)(u,{runAsGroup:O,runAsUser:L,fsGroup:K,runAsNonRoot:U,fsGroupChangePolicy:W,setFSGroup:t=>e((0,h.Nn)(t)),setRunAsUser:t=>e((0,h.r2)(t)),setRunAsGroup:t=>e((0,h.vi)(t)),setRunAsNonRoot:t=>e((0,h.rW)(t)),setFSGroupChangePolicy:t=>e((0,h.TR)(t))})}),(0,x.jsx)(a.xA9,{item:!0,xs:12,sx:r.U.modalButtonBar,children:(0,x.jsx)(a.$nd,{id:"save-security",type:"submit",variant:"callAction",disabled:g||f,onClick:()=>j(!0),label:"Save"})})]})]})]})}}}]);
//# sourceMappingURL=723.799b7760.chunk.js.map