(this["webpackJsonp@reinette/widget-registry-boilerplate"]=this["webpackJsonp@reinette/widget-registry-boilerplate"]||[]).push([[9],{133:function(e,t,a){"use strict";a.r(t);var i=a(3),s=a(47),n=a(0),r=a.n(n),c=a(46),l=a(45),d=a(41),o=a(59),b=a(92),j=a(118),h=a(126),u=a(127),g=a(134),p=a(131),x=a(130),m=a(73),O=a(79),w=a(80),v=a(83),y=a(71),f=a(76),k=a(78),S=a(82),_=a(77),N=a(72),C=a(74),W=a(51),T=a(75),A=a(15),P=a(129),D=a(115),M=function(e){var t=e.rows,a=e.headers,s=e.descriptions,c=Object(n.useState)(t),l=Object(o.a)(c,2),M=l[0],E=l[1],L=Object(n.useState)(""),U=Object(o.a)(L,2),z=U[0],I=U[1],J=new b.a(t,{keys:["name","owner.name","status"]});function F(e){switch(e.id.split(":")[1]){case"owner":return"object"===typeof e.value?Object(i.jsxs)(j.a,{href:"mailto:".concat(e.value.email),children:[Object(i.jsx)(P.a,{style:{verticalAlign:"middle"}})," ",e.value.name]}):null;case"translations":return e.value?Object(i.jsx)(h.a,{className:"bx--list__langcodes",children:e.value.map((function(e){return Object(i.jsx)(u.a,{children:Object(i.jsx)(g.a,{type:"inline",children:e})},"item-".concat(e))}))}):null;case"websegments":return e.value?Object(i.jsx)(h.a,{className:"bx--list__websegments",children:e.value.map((function(e,t){return Object(i.jsx)(u.a,{children:Object(i.jsx)(g.a,{type:"inline",children:e})},"ws-".concat(t))}))}):null;case"status":return e.value?Object(i.jsx)(g.a,{type:"inline",className:"status--".concat(e.value),children:e.value}):null;case"links":return e.value?Object(i.jsx)(p.a,{id:"default",label:"- Please select -",items:e.value,itemToString:function(e){return e?e.text:""},onChange:function(e){var t=e.selectedItem.id;window.location.href=t}}):null;default:return e.value}}return Object(i.jsx)(x.a,{rows:z?M:t,headers:a,render:function(e){var t=e.rows,a=e.headers,n=e.getHeaderProps,c=e.getRowProps,l=e.getTableProps;return Object(i.jsxs)(m.a,{children:[Object(i.jsx)(O.a,{"aria-label":"data table toolbar",children:Object(i.jsx)(w.a,{children:Object(i.jsx)(v.a,{onChange:function(e){I(e.target.value),E(J.search(e.target.value).map((function(e){return e.item})))}})})}),Object(i.jsxs)(y.a,Object(d.a)(Object(d.a)({},l()),{},{children:[Object(i.jsx)(f.a,{children:Object(i.jsxs)(k.a,{children:[Object(i.jsx)(S.a,{}),a.map((function(e){return Object(i.jsx)(_.a,Object(d.a)(Object(d.a)({},n({header:e,isSortable:e.isSortable})),{},{children:e.header}),"header-".concat(e.key))}))]})}),Object(i.jsx)(N.a,{children:t.map((function(e){var t="".concat(c({row:e}).key);return Object(i.jsxs)(r.a.Fragment,{children:[Object(i.jsx)(C.a,Object(d.a)(Object(d.a)({},c({row:e})),{},{children:e.cells.map((function(e){return Object(i.jsx)(W.a,{className:"bx--table-cell__".concat(e.info.header),children:F(e)},e.id)}))})),Object(i.jsxs)(T.a,{colSpan:a.length+1,children:[Object(i.jsx)("h6",{children:"Description"}),Object(i.jsx)("div",{children:s[t]}),Object(i.jsx)("div",{className:"bx--expandable-row--ctas",children:Object(i.jsxs)(A.b,{to:"/widget-type/".concat(t),className:"bx--btn bx--btn--tertiary",children:["More details ",Object(i.jsx)(D.b,{className:"bx--btn__icon"})]})})]})]},e.id)}))})]}))]})}})},E=a(124),L=a(53),U=a(116),z=a(117),I=function(){var e=L.reduce((function(e,t){var a=t.shortcode,i=t.description;return Object.assign(e,Object(s.a)({},a,i))}),{}),t=L.map((function(e){var t;return{id:e.shortcode,name:e.title,description:e.description,version:e.version,status:null!==(t=e.status)&&void 0!==t?t:"",createdAt:e.createdAt?new Date(e.createdAt).toDateString():null,updatedAt:e.updatedAt?new Date(e.updatedAt).toDateString():null,owner:e.owner,translations:e.availableTranslations||null,websegments:e.webSegmentPaths||null,links:[{text:"Demo",id:"https://pages.".concat(e.repositoryUrl.substr(8))},{text:"Repository",id:e.repositoryUrl}],details:Object(i.jsx)(A.b,{to:"/widget-type/".concat(e.shortcode),children:Object(i.jsx)(E.a,{})})}})),a=function(e){return[{key:"name",header:"Name",isSortable:!0},{key:"version",header:"Version",isSortable:!0},{key:"status",header:"Status",isSortable:!0},{key:"createdAt",header:"Created",isSortable:!0},{key:"updatedAt",header:"Modified",isSortable:!0},{key:"translations",header:"Translations",isSortable:!1},{key:"owner",header:"Owner",isSortable:!0},{key:"websegments",header:"Web Segments",isSortable:!1},{key:"links",header:"Links",isSortable:!1},{key:"details",header:"",isSortable:!1}].filter((function(t){return e.reduce((function(e,a){return e||!!a[t.key]}),!1)}))}(t);return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(c.a,{}),Object(i.jsxs)("div",{className:"bx--grid bx--grid--full-width landing-page",children:[Object(i.jsx)("div",{className:"bx--row landing-page__banner",children:Object(i.jsxs)("div",{className:"bx--col-lg-16",children:[Object(i.jsxs)(U.a,{noTrailingSlash:!0,children:[Object(i.jsx)(z.a,{href:"/",children:"Home"}),Object(i.jsx)(z.a,{isCurrentPage:!0,href:"/",children:"Widget types"})]}),Object(i.jsx)("h1",{className:"landing-page__heading",children:"Widgets types"}),Object(i.jsx)("div",{children:"The collection of available widget types in the widget repository. Widget types in the repository are available in the CMS integrations without any additional effort."})]})}),Object(i.jsx)("div",{className:"bx--row",children:Object(i.jsx)("div",{className:"bx--col-lg-16",children:Object(i.jsx)(M,{variant:"dark",headers:a,rows:t,descriptions:e})})}),Object(i.jsx)(l.a,{})]})]})};t.default=I},45:function(e,t,a){"use strict";var i=a(3);a(0);var s=function(e){var t=e.className,a=e.children,s=e.heading;return Object(i.jsxs)("section",{className:"bx--row ".concat(t," info-section"),children:[Object(i.jsx)("div",{className:"bx--col-md-8 bx--col-lg-4 bx--col-xlg-3",children:Object(i.jsx)("h3",{className:"info-section__heading",children:s})}),a]})},n=function(e){var t=function(e){var t=e.split(" "),a=t.pop();return[t.join(" "),a]}(e.heading);return Object(i.jsxs)("article",{className:"info-card bx--col-md-4 bx--col-lg-4 bx--col-xlg-3 bx--offset-xlg-1",children:[Object(i.jsxs)("h4",{className:"info-card__heading",children:["".concat(t[0]," "),Object(i.jsx)("strong",{children:t[1]})]}),Object(i.jsx)("p",{className:"info-card__body",children:e.body}),e.icon]})},r=a(114),c=a(115),l=a(106),d=function(){return Object(i.jsxs)(s,{heading:"The Principles",className:"landing-page__r3",children:[Object(i.jsx)(n,{heading:"Widgets are Configurable",body:'Build once and embed many times. Configure your widgets when embedding to leverage the same widget in multiple situations. "Tweak the widget knobs and stamp".',icon:Object(i.jsx)(r.d,{})}),Object(i.jsx)(n,{heading:"Widgets are Modular",body:"Widgets are designed to work seamlessly with each other in any digital experience. Use them in a website, or an application, as your digital building blocks.",icon:Object(i.jsx)(c.a,{})}),Object(i.jsx)(n,{heading:"Widgets are Consistent",body:"Weather your organization uses a CMS, static HTML, or any other tech widgets stay the same. Feel free to re-platform while keeping your widgets intact. Leverage the CMS integrations for a better editorial experience.",icon:Object(i.jsx)(l.c,{})})]})};t.a=d},46:function(e,t,a){"use strict";var i=a(3),s=(a(0),a(15)),n=a(101),r=a(102),c=a(103),l=a(104),d=a(107),o=a(108),b=a(109),j=a(110),h=a(111),u=a(112),g=a(113),p=function(){return Object(i.jsx)(n.a,{render:function(e){var t=e.isSideNavExpanded,a=e.onClickSideNavExpand;return Object(i.jsxs)(r.a,{"aria-label":"Widget Catalog",children:[Object(i.jsx)(c.a,{}),Object(i.jsx)(l.a,{"aria-label":"Open menu",onClick:a,isActive:t}),Object(i.jsx)(d.a,{element:s.b,to:"/",prefix:"JS Widgets",children:"Widget Catalog"}),Object(i.jsx)(o.a,{"aria-label":"Widget Catalog",children:Object(i.jsx)(b.a,{element:s.b,to:"/widget-types",children:"Widget Types"})}),Object(i.jsx)(j.a,{"aria-label":"Side navigation",expanded:t,isPersistent:!1,children:Object(i.jsx)(h.a,{children:Object(i.jsx)(u.a,{children:Object(i.jsx)(b.a,{element:s.b,to:"/widget-types",children:"Widget Types"})})})}),Object(i.jsx)(g.a,{})]})}})};t.a=p},53:function(e){e.exports=JSON.parse('[{"tarballUrl":"/tmp/widget-definitions-lsKlVD/pov_widget_example.tar.gz","shortcode":"pov_widget_example","version":"v1.0.2","directoryUrl":"https://reinette.github.io/widget-registry-boilerplate/widget-registry/sandbox/pov_widget_example/v1","files":["css/main.css","css/main.css.map","js/main.js","js/main.js.LICENSE.txt","js/main.js.map","thumbnail.svg"],"updatedAt":"2021-04-07T05:03:23.623Z","createdAt":"2021-04-07T05:03:23.623Z","availableTranslations":["ar","de","en","es","esla","fr","it","ja","ko","pl","pt","ru","tr","zh-cn","zh-tw"],"description":"This contains an example widget using React.","settingsSchema":{"type":"object","additionalProperties":false,"properties":{"fields":{"type":"object","properties":{"button-text":{"type":"string","title":"Button text","description":"Some random string to be displayed when the widget is rendered.","examples":["I am a button","Please, click me","CLICK"]}}}}},"externalPeerDependencies":{"react":{"src":"https://unpkg.com/react@^17/umd/react.production.min.js"},"react-dom":{"src":"https://unpkg.com/react-dom@^17/umd/react-dom.production.min.js"},"react-intl":{"src":"https://unpkg.com/react-intl-bundle@^1/dist/react-intl.production.min.js"}},"title":"POV Widget Example","status":"stable","assetManifest":{"files":{"main.css":"https://reinette.github.io/widget-registry-boilerplate/widget-registry/sandbox/pov_widget_example/v1/css/main.css","main.js":"https://reinette.github.io/widget-registry-boilerplate/widget-registry/sandbox/pov_widget_example/v1/js/main.js"},"entrypoints":["static/css/main.8343b28c.css","css/main.css","js/main.js"]}}]')}}]);
//# sourceMappingURL=9.36982aae.chunk.js.map