(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8795],{86010:function(e,t,n){"use strict";function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.Z=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}},50324:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tool/auto-post-fb-group",function(){return n(10688)}])},76736:function(e,t,n){"use strict";var r=n(85893),o=n(11163),i=(n(67294),n(9473));t.Z=function(e){var t,n=e.children,a=(0,i.v9)((function(e){return e.user})),s=(0,o.useRouter)();return(null===a||void 0===a?void 0:a.data)||(null===a||void 0===a||null===(t=a.data)||void 0===t?void 0:t.role)||s.push("/"),(0,r.jsx)("div",{children:n})}},10688:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Q}});var r=n(85893),o=n(2962),i=n(67294),a=n(76736),s=n(5506),l=n(36388),u=n(24634),c=n(69641),d=n(63048);function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f.apply(this,arguments)}var p=i.useLayoutEffect,m=function(e,t){"function"!==typeof e?e.current=t:e(t)},h=function(e,t){var n=(0,i.useRef)();return(0,i.useCallback)((function(r){e.current=r,n.current&&m(n.current,null),n.current=t,t&&m(t,r)}),[t])},g={"min-height":"0","max-height":"none",height:"0",visibility:"hidden",overflow:"hidden",position:"absolute","z-index":"-1000",top:"0",right:"0"},x=function(e){Object.keys(g).forEach((function(t){e.style.setProperty(t,g[t],"important")}))},v=null,b=function(e,t){var n=e.scrollHeight;return"border-box"===t.sizingStyle.boxSizing?n+t.borderSize:n-t.paddingSize};var y=function(){},w=["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth","boxSizing","fontFamily","fontSize","fontStyle","fontWeight","letterSpacing","lineHeight","paddingBottom","paddingLeft","paddingRight","paddingTop","tabSize","textIndent","textRendering","textTransform","width","wordBreak"],j=!!document.documentElement.currentStyle;function N(e,t,n){var r=function(e){var t=i.useRef(e);return p((function(){t.current=e})),t}(n);(0,i.useLayoutEffect)((function(){var n=function(e){return r.current(e)};return e.addEventListener(t,n),function(){return e.removeEventListener(t,n)}}),[])}var k=["cacheMeasurements","maxRows","minRows","onChange","onHeightChange"],S=function(e,t){var n=e.cacheMeasurements,r=e.maxRows,o=e.minRows,a=e.onChange,s=void 0===a?y:a,l=e.onHeightChange,u=void 0===l?y:l,c=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,k);var d=void 0!==c.value,p=(0,i.useRef)(null),m=h(p,t),g=(0,i.useRef)(0),S=(0,i.useRef)(),E=function(){var e=p.current,t=n&&S.current?S.current:function(e){var t=window.getComputedStyle(e);if(null===t)return null;var n,r=(n=t,w.reduce((function(e,t){return e[t]=n[t],e}),{})),o=r.boxSizing;return""===o?null:(j&&"border-box"===o&&(r.width=parseFloat(r.width)+parseFloat(r.borderRightWidth)+parseFloat(r.borderLeftWidth)+parseFloat(r.paddingRight)+parseFloat(r.paddingLeft)+"px"),{sizingStyle:r,paddingSize:parseFloat(r.paddingBottom)+parseFloat(r.paddingTop),borderSize:parseFloat(r.borderBottomWidth)+parseFloat(r.borderTopWidth)})}(e);if(t){S.current=t;var i=function(e,t,n,r){void 0===n&&(n=1),void 0===r&&(r=1/0),v||((v=document.createElement("textarea")).setAttribute("tabindex","-1"),v.setAttribute("aria-hidden","true"),x(v)),null===v.parentNode&&document.body.appendChild(v);var o=e.paddingSize,i=e.borderSize,a=e.sizingStyle,s=a.boxSizing;Object.keys(a).forEach((function(e){var t=e;v.style[t]=a[t]})),x(v),v.value=t;var l=b(v,e);v.value=t,l=b(v,e),v.value="x";var u=v.scrollHeight-o,c=u*n;"border-box"===s&&(c=c+o+i),l=Math.max(c,l);var d=u*r;return"border-box"===s&&(d=d+o+i),[l=Math.min(d,l),u]}(t,e.value||e.placeholder||"x",o,r),a=i[0],s=i[1];g.current!==a&&(g.current=a,e.style.setProperty("height",a+"px","important"),u(a,{rowHeight:s}))}};return(0,i.useLayoutEffect)(E),N(window,"resize",E),function(e){N(document.fonts,"loadingdone",e)}(E),(0,i.createElement)("textarea",f({},c,{onChange:function(e){d||E(),s(e)},ref:m}))},E=(0,i.forwardRef)(S),C=n(74931),O=n(9473),P=n(37173),R=n(59850),L=n(79521),A=n(67031);function H(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function F(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){F(e,t,n[t])}))}return e}function z(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,s=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(l){s=!0,o=l}finally{try{a||null==n.return||n.return()}finally{if(s)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return H(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return H(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function T(e,t,n){return e.filter((function(e){var r=n||"";return e.values[t].toLowerCase().includes(r.toLowerCase())}))}function Z(e){var t=e.column,n=t.filterValue,o=t.setFilter;t.preFilteredRows,t.id;return(0,r.jsx)("input",{placeholder:"Name",className:" py-1 px-3 rounded-md bg-gray-200 text-gray-700 ",type:"text",value:n||void 0,onChange:function(e){if(""===e.target.value)return o(void 0);o(e.target.value)}})}var M=function(){(0,i.useRef)();var e=(0,i.useState)([]),t=(e[0],e[1],(0,O.v9)((function(e){return e.auto_g_post}))),n=t.groups,o=(t.loading,(0,i.useState)(0)),a=o[0],s=o[1],l=(0,O.I0)(),u=(0,i.useMemo)((function(){return Object.keys(n).length>0?Object.entries(n).map((function(e){var t=z(e,2),n=(t[0],t[1]);return{id:n.id,name:n.name||"",cover:n.profile_picture.uri,select:n.selected}})):[]}),[n]),c=(0,i.useMemo)((function(){return{text:function(e,t,n){return e.filter((function(e){var r=e.values[t];return void 0===r||String(r).toLowerCase().startsWith(String(n).toLowerCase())}))}}}),[]),d=(0,i.useMemo)((function(){return[{Header:"",accessor:"select"},{Header:"Name",accessor:"name",isFilt:!0,Filter:Z,filter:T}]}),[]),f=(0,L.useTable)({columns:d,data:u,filterTypes:c,initialState:{pageIndex:a,pageSize:10}},L.useFilters,L.useSortBy,L.usePagination),p=f.getTableProps,m=f.getTableBodyProps,h=f.headerGroups,g=f.page,x=(f.rows,f.prepareRow),v=(f.canPreviousPage,f.canNextPage,f.pageOptions,f.pageCount),b=f.gotoPage,y=(f.nextPage,f.previousPage,f.visibleColumns,f.setPageSize,f.state);return y.pageIndex,y.pageSize,(0,i.useEffect)((function(){b(a)}),[a]),(0,r.jsxs)("div",{className:" flex flex-col space-y-3 ",children:[(0,r.jsxs)("table",_({className:"min-w-full leading-normal table rounded-md overflow-hidden shadow-md"},p(),{children:[(0,r.jsx)("thead",{className:"w-full border-b-2 border-gray-100",children:h.map((function(e,t){return(0,r.jsx)("tr",_({className:"text-[12px] "},e.getHeaderGroupProps(),{children:e.headers.map((function(e){return"select"==e.id?(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("th",{className:"px-5 py-3 bg-white text-left font-semibold text-gray-100 uppercase tracking-wider ",children:(0,r.jsx)("input",{onChange:function(e){var t;t=e.target.checked,u.map((function(e){return l((0,R.yh)({id:e.id,select:t}))}))},type:"checkbox",defaultChecked:!1,className:"w-4 h-4 text-blue-600 "})})}):(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("th",_({className:"px-5 py-3 bg-white text-left font-semibold text-gray-100 uppercase tracking-wider "},e.getHeaderProps(),{children:e.isFilt?e.render("Filter"):e.render("Header")}))})}))}))}))}),(0,r.jsx)("tbody",_({className:"w-full "},m(),{children:g.map((function(e){return x(e),(0,r.jsx)("tr",_({},e.getRowProps(),{className:" transition ease-in duration-150",children:e.cells.map((function(e){var t=e.row.original.cover,n=e.row.original.id,o=e.row.original.select;return"Name"===e.column.Header?(0,r.jsx)("td",{className:"px-5 py-3 border-b border-gray-200 bg-white text-sm ",children:(0,r.jsxs)("div",{className:" flex items-start cursor-pointer",children:[(0,r.jsx)("div",{className:"flex-shrink-0 w-7 h-7",children:(0,r.jsx)("img",{className:"w-full h-full rounded-full",src:t,alt:""})}),(0,r.jsxs)("div",{className:"ml-3 flex flex-col",children:[(0,r.jsxs)("p",{className:"text-gray-900 whitespace-no-wrap text-[11px] leading-3 font-semibold",children:[e.value," "]}),(0,r.jsx)("p",{className:"text-gray-600 whitespace-no-wrap text-[9px]",children:n})]})]})}):""===e.column.Header?(0,r.jsx)("td",{className:"px-5 py-3 border-b border-gray-200 bg-white text-sm ",children:(0,r.jsx)("input",{onClick:function(){return l((0,R.yh)({id:n,select:!o}))},type:"checkbox",checked:o,className:"w-4 h-4 text-blue-600 "})}):(0,r.jsx)("td",_({},e.getCellProps(),{className:"px-5 py-3 border-b border-gray-200 bg-white text-sm ",onClick:function(){return"ID"===e.column.Header&&window.open("https://www.facebook.com/groups/".concat(e.value,"/"),"_blank").focus()},children:e.render("Cell")}))}))}))}))}))]})),(0,r.jsx)(A.Z,{current:a+1,total:v,onPageChange:function(e){s(e-1)}})," "]})},I=n(2465),W=n(6512),B=n(68715),D=n(19965),U=n(98779),$=n(85298),V=n(25935);function G(e){var t=e.groups,n=e.task,o=n.gid,i=(n.post_id,n.loading,t[o]),a=i.name,s=i.id,l=i.profile_picture.uri;return(0,r.jsx)(W.p,{children:function(e){e.open;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(W.p.Button,{className:"flex w-full items-center justify-between border-b border-gray-200 bg-gray-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75",children:[(0,r.jsxs)("span",{className:"flex items-start truncate w-[80%]",children:[(0,r.jsx)("img",{src:l,referrerPolicy:"no-referrer",alt:"",className:"w-7 h-7 rounded-full border border-yellow-400"}),(0,r.jsxs)("span",{className:" flex flex-col ml-1 ",children:[(0,r.jsx)("span",{className:" block text-sm font-extrabold",children:a}),(0,r.jsx)("span",{className:" block text-[8px] text-gray-500",children:s})]})]}),(null===n||void 0===n?void 0:n.is_loading)?(0,r.jsx)(U.Z,{size:25,lineWeight:5,speed:2,color:"gray"}):(null===n||void 0===n?void 0:n.post_id)?2===(null===n||void 0===n?void 0:n.post_status)?(0,r.jsx)(B.Z,{className:"w-7 h-7 text-yellow-500"}):(0,r.jsx)(B.Z,{className:"w-7 h-7 text-blue-300"}):(0,r.jsx)(D.Z,{className:"w-7 h-7 text-red-500"})]}),(0,r.jsx)(W.p.Panel,{className:"px-4 py-3 pb-2 text-sm text-gray-500 bg-gray-50 flex flex-col items-center border-b border-gray-200",children:(null===n||void 0===n?void 0:n.is_loading)?(0,r.jsx)($.Z,{size:100,lineWeight:5,speed:1.4,color:"blue"}):(null===n||void 0===n?void 0:n.post_id)?(0,r.jsxs)("div",{className:" flex space-x-2 w-full gap-2 items-center",children:[(0,r.jsx)("div",{className:" max-w-[70%] flex-1 bg-blue-50 rounded-md flex items-center justify-center py-2 font-bold text-gray-600 uppercase px-2",children:(0,r.jsx)("p",{className:" w-full truncate overflow-hidden text-xs text-violet-400",children:n.status})}),(0,r.jsx)("button",{onClick:function(){return window.open("https://www.facebook.com/".concat(null===n||void 0===n?void 0:n.post_id),"_blank").focus()},className:" py-1 px-3 bg-green-500 rounded-md text-white text-sm font-extrabold border border-gray-300 cursor-pointer uppercas",children:"View Post"})]}):(0,r.jsx)("p",{className:" text-red-500 text-[12px]",children:(0,V.ZP)(null===n||void 0===n?void 0:n.status)})})]})}})}function X(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,s=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(l){s=!0,o=l}finally{try{a||null==n.return||n.return()}finally{if(s)throw o}}return i}}(e,t)||q(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function J(e){return function(e){if(Array.isArray(e))return X(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||q(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function q(e,t){if(e){if("string"===typeof e)return X(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?X(e,t):void 0}}var K=function(){var e,t=(0,O.I0)(),n=(0,O.v9)((function(e){return e})),o=(0,i.useRef)(),a=(0,i.useRef)(),f=(0,i.useState)(""),p=f[0],m=f[1],h=(0,i.useState)([]),g=h[0],x=h[1],v=(0,i.useState)(),b=v[0],y=v[1],w=(0,i.useState)(!1),j=w[0],N=w[1],k=(null===n||void 0===n||null===(e=n.user)||void 0===e||e.role,(0,i.useRef)(null)),S=(0,i.useRef)(null),L=(0,i.useState)(null),A=L[0],H=L[1],F=(0,i.useState)(1),_=F[0],z=F[1],T=(0,i.useState)(3),Z=T[0],W=T[1],B=(0,i.useState)("text"),D=B[0],U=B[1],$=n.fb_init,V=$.account,X=V.dtsg,q=(V.ID,V.dtsg_ag,V.instagram_token,$.info.cookie,$.is4G,n.user.data,n.auto_g_post),K=q.groups,Q=q.loading,ee=q.tasks,te=function(e){S.current&&!S.current.contains(e.target)&&N(!1)};(0,i.useEffect)((function(){return document.addEventListener("click",te,!0),function(){document.removeEventListener("click",te,!0)}}));var ne=(0,i.useMemo)((function(){return"text"===D?p&&p.length:"video"===D?null===b||void 0===b?void 0:b.name:"photo"===D?g.length:void 0}),[D,b,p,g]),re=(0,i.useMemo)((function(){var e=[];return Object.keys(K).length>0&&Object.entries(K).map((function(t){var n=Y(t,2),r=n[0];n[1];K[r].selected&&e.push(K[r].id)})),e}),[K]),oe=(0,i.useMemo)((function(){return Object.entries(ee).map((function(e){var t=Y(e,2);t[0];return t[1]}))}),[ee]);return(0,i.useEffect)((function(){X&&t((0,R.B_)())}),[X]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"w-full min-h-[100vh] mx-auto rounded-md gap-4 grid md:grid-cols-5 grid-cols-1",children:[(0,r.jsxs)("div",{className:" flex flex-col space-y-3 md:col-span-3",children:[(0,r.jsxs)("div",{className:" rounded-md p-5 bg-white shadow-md flex flex-col space-y-4 ",children:[(0,r.jsxs)("div",{className:" relative",children:[(0,r.jsx)(E,{value:p,ref:k,onChange:function(e){return m(e.target.value)},placeholder:"Write something...",className:" rounded-sm w-full bg-gray-100 resize-none text-sm overflow-y-hidden p-5 outline-none ",maxRows:15}),(0,r.jsx)("div",{className:" absolute right-1 bottom-3 ",children:(0,r.jsx)("span",{className:" cursor-pointer",onClick:function(){return N(!j)},children:"\ud83d\ude00"})}),j&&(0,r.jsx)("div",{ref:S,className:" absolute right-1 bottom-100 z-10 ",children:(0,r.jsx)(d.ZP,{onEmojiClick:function(e,t){var n=k.current,r=n.selectionStart,o=n.selectionEnd,i=p.slice(0,r)+e.emoji+p.slice(o);m(i)}})})]}),"video"==D&&(0,r.jsxs)("div",{className:" relative",children:[(0,r.jsx)("div",{className:"border-[1px] min-h-[50px] rounded-lg p-3 gap-1 ",children:b&&(0,r.jsxs)("div",{className:" relative",children:[(0,r.jsx)("video",{src:URL.createObjectURL(b),className:" max-h-[600px] w-full object-cover object-center first-line:"}),(0,r.jsx)("div",{className:"flex  items-center justify-center rounded-full bg-white shadow-md  p-1 absolute top-1 right-1",onClick:function(){return y(null)},children:(0,r.jsx)(s.Z,{className:" w-6 h-6 text-gray-700 cursor-pointer"})})]})}),(0,r.jsxs)("button",{className:" absolute w-fit top-2 bg-gray-50 shadow-lg rounded-sm m-auto left-0 right-0 px-3 py-1 flex items-center space-x-1 text-md",onClick:function(){return a.current.click()},children:[(0,r.jsx)(l.Z,{className:" w-4 h-4"}),(0,r.jsx)("p",{children:"Add Video"})]})]}),"photo"==D&&(0,r.jsxs)("div",{className:" relative",children:[(0,r.jsx)(I.ZP,{onSortEnd:function(e,t){var n=J(g);x((0,P.NL)(n,e,t))},className:"border-[1px] min-h-[50px] rounded-lg p-3 grid md:grid-cols-2 grid-cols-1 gap-1",draggedItemClassName:"dragged",children:g&&(null===g||void 0===g?void 0:g.map((function(e,t){return(0,r.jsx)(I.TR,{children:(0,r.jsxs)("div",{className:" relative",children:[(0,r.jsx)("img",{src:URL.createObjectURL(e),alt:"",className:" w-full h-[200px] object-cover object-center cursor-move"}),(0,r.jsx)("div",{className:"flex  items-center justify-center rounded-full bg-white shadow-md  p-1 absolute top-1 right-1",onClick:function(){return function(e){var t=J(g);t.splice(e,1),x(t)}(t)},children:(0,r.jsx)(s.Z,{className:" w-6 h-6 text-gray-700 cursor-pointer"})})]})},e)})))}),(0,r.jsxs)("button",{className:" w-fit absolute top-2 bg-gray-50 shadow-lg rounded-sm m-auto left-0 right-0 px-3 py-1 flex items-center space-x-1 text-md",onClick:function(){return o.current.click()},children:[(0,r.jsx)(u.Z,{className:" w-4 h-4"}),(0,r.jsx)("p",{children:"Add Photos"})]})]}),(0,r.jsx)("span",{className:" w-full border-b-2 border-gray-100 "}),(0,r.jsxs)("div",{className:" border-2 h-[50px] rounded-md flex items-center px-4",children:[(0,r.jsx)("div",{className:" flex-1"}),(0,r.jsxs)("div",{className:"flex items-center space-x-4",children:[(0,r.jsx)("div",{className:"flex  items-center justify-center rounded-full ".concat("text"===D?"bg-gray-100 ":"","p-1"),children:(0,r.jsx)(c.Z,{className:" w-6 h-6 text-blue-400 cursor-pointer",onClick:function(){return U("text")}})}),(0,r.jsx)("div",{className:"flex  items-center justify-center rounded-full ".concat("photo"===D?"bg-gray-100 ":"","p-1"),children:(0,r.jsx)(u.Z,{className:" w-6 h-6 text-green-400 cursor-pointer",onClick:function(){return U("photo")}})}),(0,r.jsx)("div",{className:"flex  items-center justify-center rounded-full ".concat("video"===D?"bg-gray-100 ":"","p-1"),children:(0,r.jsx)(l.Z,{className:" w-6 h-6 text-pink-400 cursor-pointer",onClick:function(){return U("video")}})})]})]}),(0,r.jsx)("span",{className:" w-full border-b-2 border-gray-100 "}),(0,r.jsxs)("div",{className:" grid grid-cols-2 gap-3",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:" text-[9px] text-gray-700 font-bold uppercase",children:"Thread ( recommended 1 ):"}),(0,r.jsx)("input",{onChange:function(e){return z(+e.target.value)},value:_,type:"number",className:"bg-gray-50 py-1 px-3 outline-none rounded-md text-[11px] w-full"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:" text-[9px] text-gray-700 font-bold uppercase",children:"Delay ( recommended 3 ):"}),(0,r.jsx)("input",{onChange:function(e){return W(+e.target.value)},value:Z,type:"number",className:"bg-gray-50 py-1 px-3 outline-none rounded-md text-[11px] w-full "})]})]}),Q?(0,r.jsx)("button",{className:"w-full py-2 bg-red-500 text-white hover:bg-red-600 transition-all delay-75\n                } font-bold rounded-md shadow-sm",onClick:function(){return A.abort()},children:"Stop"}):(0,r.jsx)("button",{className:"w-full py-2 ".concat(ne?"bg-blue-500 text-white hover:bg-blue-600 transition-all delay-75":"bg-gray-100 text-gray-300"," font-bold rounded-md shadow-sm"),onClick:function(){return ne&&function(){re.length||C.ZP.error("Please selected destination groups for auto post");var e={thread:_,delay:Z,post:{message:p,files:"video"===D?b:"photo"===D?g:[]},lists:re,type:D},n=t((0,R.Dd)(e));H(n)}()},children:"Post"})]}),(0,r.jsx)("div",{className:" flex-1 max-h-[250650px] overflow-y-auto ",children:oe.length>0&&J(oe).reverse().slice(0,100).map((function(e){return(0,r.jsx)(G,{task:e,groups:K})}))})]}),(0,r.jsx)("div",{className:"w-full md:col-span-2 flex flex-col space-y-3 ",children:(0,r.jsx)(M,{})})]}),(0,r.jsx)("input",{onChange:function(e){var t=e.target.files;t&&t.length&&x((function(e){return J(e).concat(J(t))}))},type:"file",multiple:!0,accept:"image/png, image/jpeg",className:" hidden",ref:o}),(0,r.jsx)("input",{onChange:function(e){var t=e.target.files[0];t&&y(t)},type:"file",accept:"video/mp4",className:" hidden",ref:a})]})};var Q=function(){return(0,r.jsxs)(a.Z,{children:[(0,r.jsx)(o.PB,{title:"Auto Post Facebook Groups - FewFeed"}),(0,r.jsx)("div",{className:" flex flex-col",children:(0,r.jsx)(K,{})})]})}},61363:function(e,t,n){"use strict";n.d(t,{R:function(){return o}});var r,o=((r=o||{}).Space=" ",r.Enter="Enter",r.Escape="Escape",r.Backspace="Backspace",r.Delete="Delete",r.ArrowLeft="ArrowLeft",r.ArrowUp="ArrowUp",r.ArrowRight="ArrowRight",r.ArrowDown="ArrowDown",r.Home="Home",r.End="End",r.PageUp="PageUp",r.PageDown="PageDown",r.Tab="Tab",r)},73781:function(e,t,n){"use strict";n.d(t,{z:function(){return i}});var r=n(67294),o=n(3855);let i=function(e){let t=(0,o.E)(e);return r.useCallback(((...e)=>t.current(...e)),[t])}},19946:function(e,t,n){"use strict";n.d(t,{M:function(){return u}});var r,o=n(67294),i=n(16723),a=n(82180);let s=0;function l(){return++s}let u=null!=(r=o.useId)?r:function(){let e=(0,a.H)(),[t,n]=o.useState(e?l:null);return(0,i.e)((()=>{null===t&&n(l())}),[t]),null!=t?""+t:void 0}},16723:function(e,t,n){"use strict";n.d(t,{e:function(){return o}});var r=n(67294);let o="undefined"!=typeof window?r.useLayoutEffect:r.useEffect},3855:function(e,t,n){"use strict";n.d(t,{E:function(){return i}});var r=n(67294),o=n(16723);function i(e){let t=(0,r.useRef)(e);return(0,o.e)((()=>{t.current=e}),[e]),t}},14157:function(e,t,n){"use strict";n.d(t,{f:function(){return a}});var r=n(67294),o=n(16723);function i(e){var t;if(e.type)return e.type;let n=null!=(t=e.as)?t:"button";return"string"==typeof n&&"button"===n.toLowerCase()?"button":void 0}function a(e,t){let[n,a]=(0,r.useState)((()=>i(e)));return(0,o.e)((()=>{a(i(e))}),[e.type,e.as]),(0,o.e)((()=>{n||!t.current||t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&a("button")}),[n,t]),n}},82180:function(e,t,n){"use strict";n.d(t,{H:function(){return i}});var r=n(67294);let o={serverHandoffComplete:!1};function i(){let[e,t]=(0,r.useState)(o.serverHandoffComplete);return(0,r.useEffect)((()=>{!0!==e&&t(!0)}),[e]),(0,r.useEffect)((()=>{!1===o.serverHandoffComplete&&(o.serverHandoffComplete=!0)}),[]),e}},23784:function(e,t,n){"use strict";n.d(t,{T:function(){return s},h:function(){return a}});var r=n(67294),o=n(73781);let i=Symbol();function a(e,t=!0){return Object.assign(e,{[i]:t})}function s(...e){let t=(0,r.useRef)(e);(0,r.useEffect)((()=>{t.current=e}),[e]);let n=(0,o.z)((e=>{for(let n of t.current)null!=n&&("function"==typeof n?n(e):n.current=e)}));return e.every((e=>null==e||(null==e?void 0:e[i])))?void 0:n}},16567:function(e,t,n){"use strict";n.d(t,{ZM:function(){return a},oJ:function(){return s},up:function(){return l}});var r=n(67294);let o=(0,r.createContext)(null);o.displayName="OpenClosedContext";var i,a=((i=a||{})[i.Open=0]="Open",i[i.Closed=1]="Closed",i);function s(){return(0,r.useContext)(o)}function l({value:e,children:t}){return r.createElement(o.Provider,{value:e},t)}},64103:function(e,t,n){"use strict";function r(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=""===(null==t?void 0:t.getAttribute("disabled"));return(!r||!function(e){if(!e)return!1;let t=e.previousElementSibling;for(;null!==t;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}(n))&&r}n.d(t,{P:function(){return r}})},32984:function(e,t,n){"use strict";function r(e,t,...n){if(e in t){let r=t[e];return"function"==typeof r?r(...n):r}let o=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((e=>`"${e}"`)).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,r),o}n.d(t,{E:function(){return r}})},15466:function(e,t,n){"use strict";function r(e){return"undefined"==typeof window?null:e instanceof Node?e.ownerDocument:null!=e&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}n.d(t,{r:function(){return r}})},12351:function(e,t,n){"use strict";n.d(t,{AN:function(){return s},l4:function(){return l},oA:function(){return p},sY:function(){return u},yV:function(){return f}});var r,o,i=n(67294),a=n(32984),s=((o=s||{})[o.None=0]="None",o[o.RenderStrategy=1]="RenderStrategy",o[o.Static=2]="Static",o),l=((r=l||{})[r.Unmount=0]="Unmount",r[r.Hidden=1]="Hidden",r);function u({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:o,visible:i=!0,name:s}){let l=d(t,e);if(i)return c(l,n,r,s);let u=null!=o?o:0;if(2&u){let{static:e=!1,...t}=l;if(e)return c(t,n,r,s)}if(1&u){let{unmount:e=!0,...t}=l;return(0,a.E)(e?0:1,{0:()=>null,1:()=>c({...t,hidden:!0,style:{display:"none"}},n,r,s)})}return c(l,n,r,s)}function c(e,t={},n,r){let{as:o=n,children:a,refName:s="ref",...l}=m(e,["unmount","static"]),u=void 0!==e.ref?{[s]:e.ref}:{},c="function"==typeof a?a(t):a;l.className&&"function"==typeof l.className&&(l.className=l.className(t));let f={};if(o===i.Fragment&&Object.keys(p(l)).length>0){if(!(0,i.isValidElement)(c)||Array.isArray(c)&&c.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(l).map((e=>`  - ${e}`)).join("\n"),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map((e=>`  - ${e}`)).join("\n")].join("\n"));return(0,i.cloneElement)(c,Object.assign({},d(c.props,p(m(l,["ref"]))),f,u))}return(0,i.createElement)(o,Object.assign({},m(l,["ref"]),o!==i.Fragment&&u,o!==i.Fragment&&f),c)}function d(...e){if(0===e.length)return{};if(1===e.length)return e[0];let t={},n={};for(let r of e)for(let e in r)e.startsWith("on")&&"function"==typeof r[e]?(null!=n[e]||(n[e]=[]),n[e].push(r[e])):t[e]=r[e];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map((e=>[e,void 0]))));for(let r in n)Object.assign(t,{[r](e,...t){let o=n[r];for(let n of o){if(e.defaultPrevented)return;n(e,...t)}}});return t}function f(e){var t;return Object.assign((0,i.forwardRef)(e),{displayName:null!=(t=e.displayName)?t:e.name})}function p(e){let t=Object.assign({},e);for(let n in t)void 0===t[n]&&delete t[n];return t}function m(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}},69641:function(e,t,n){"use strict";var r=n(67294);const o=r.forwardRef((function(e,t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:t},e),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"}))}));t.Z=o},36388:function(e,t,n){"use strict";var r=n(67294);const o=r.forwardRef((function(e,t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:t},e),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"}))}));t.Z=o},5506:function(e,t,n){"use strict";var r=n(67294);const o=r.forwardRef((function(e,t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:t},e),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"}))}));t.Z=o}},function(e){e.O(0,[8307,7695,7031,9521,9645,9774,2888,179],(function(){return t=50324,e(e.s=t);var t}));var t=e.O();_N_E=t}]);