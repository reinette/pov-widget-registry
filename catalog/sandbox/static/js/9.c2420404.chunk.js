(this["webpackJsonp@reinette/widget-registry-boilerplate"]=this["webpackJsonp@reinette/widget-registry-boilerplate"]||[]).push([[9],{133:function(e,t,s){"use strict";s.r(t);var i=s(3),a=s(47),r=s(0),n=s.n(r),c=s(46),l=s(45),o=s(41),d=s(59),j=s(92),b=s(118),m=s(126),p=s(127),g=s(134),u=s(131),h=s(130),x=s(73),w=s(79),O=s(80),y=s(83),v=s(71),f=s(76),k=s(78),S=s(82),N=s(77),T=s(72),C=s(74),_=s(51),A=s(75),W=s(15),P=s(129),E=s(115),U=function(e){var t=e.rows,s=e.headers,a=e.descriptions,c=Object(r.useState)(t),l=Object(d.a)(c,2),U=l[0],M=l[1],D=Object(r.useState)(""),L=Object(d.a)(D,2),z=L[0],I=L[1],Z=new j.a(t,{keys:["name","owner.name","status"]});function J(e){switch(e.id.split(":")[1]){case"owner":return"object"===typeof e.value?Object(i.jsxs)(b.a,{href:"mailto:".concat(e.value.email),children:[Object(i.jsx)(P.a,{style:{verticalAlign:"middle"}})," ",e.value.name]}):null;case"translations":return e.value?Object(i.jsx)(m.a,{className:"bx--list__langcodes",children:e.value.map((function(e){return Object(i.jsx)(p.a,{children:Object(i.jsx)(g.a,{type:"inline",children:e})},"item-".concat(e))}))}):null;case"websegments":return e.value?Object(i.jsx)(m.a,{className:"bx--list__websegments",children:e.value.map((function(e,t){return Object(i.jsx)(p.a,{children:Object(i.jsx)(g.a,{type:"inline",children:e})},"ws-".concat(t))}))}):null;case"status":return e.value?Object(i.jsx)(g.a,{type:"inline",className:"status--".concat(e.value),children:e.value}):null;case"links":return e.value?Object(i.jsx)(u.a,{id:"default",label:"- Please select -",items:e.value,itemToString:function(e){return e?e.text:""},onChange:function(e){var t=e.selectedItem.id;window.location.href=t}}):null;default:return e.value}}return Object(i.jsx)(h.a,{rows:z?U:t,headers:s,render:function(e){var t=e.rows,s=e.headers,r=e.getHeaderProps,c=e.getRowProps,l=e.getTableProps;return Object(i.jsxs)(x.a,{children:[Object(i.jsx)(w.a,{"aria-label":"data table toolbar",children:Object(i.jsx)(O.a,{children:Object(i.jsx)(y.a,{onChange:function(e){I(e.target.value),M(Z.search(e.target.value).map((function(e){return e.item})))}})})}),Object(i.jsxs)(v.a,Object(o.a)(Object(o.a)({},l()),{},{children:[Object(i.jsx)(f.a,{children:Object(i.jsxs)(k.a,{children:[Object(i.jsx)(S.a,{}),s.map((function(e){return Object(i.jsx)(N.a,Object(o.a)(Object(o.a)({},r({header:e,isSortable:e.isSortable})),{},{children:e.header}),"header-".concat(e.key))}))]})}),Object(i.jsx)(T.a,{children:t.map((function(e){var t="".concat(c({row:e}).key);return Object(i.jsxs)(n.a.Fragment,{children:[Object(i.jsx)(C.a,Object(o.a)(Object(o.a)({},c({row:e})),{},{children:e.cells.map((function(e){return Object(i.jsx)(_.a,{className:"bx--table-cell__".concat(e.info.header),children:J(e)},e.id)}))})),Object(i.jsxs)(A.a,{colSpan:s.length+1,children:[Object(i.jsx)("h6",{children:"Description"}),Object(i.jsx)("div",{children:a[t]}),Object(i.jsx)("div",{className:"bx--expandable-row--ctas",children:Object(i.jsxs)(W.b,{to:"/widget-type/".concat(t),className:"bx--btn bx--btn--tertiary",children:["More details ",Object(i.jsx)(E.b,{className:"bx--btn__icon"})]})})]})]},e.id)}))})]}))]})}})},M=s(124),D=s(53),L=s(116),z=s(117),I=function(){var e=D.reduce((function(e,t){var s=t.shortcode,i=t.description;return Object.assign(e,Object(a.a)({},s,i))}),{}),t=D.map((function(e){var t;return{id:e.shortcode,name:e.title,description:e.description,version:e.version,status:null!==(t=e.status)&&void 0!==t?t:"",createdAt:e.createdAt?new Date(e.createdAt).toDateString():null,updatedAt:e.updatedAt?new Date(e.updatedAt).toDateString():null,owner:e.owner,translations:e.availableTranslations||null,websegments:e.webSegmentPaths||null,links:[{text:"Demo",id:"https://pages.".concat(e.repositoryUrl.substr(8))},{text:"Repository",id:e.repositoryUrl}],details:Object(i.jsx)(W.b,{to:"/widget-type/".concat(e.shortcode),children:Object(i.jsx)(M.a,{})})}})),s=function(e){return[{key:"name",header:"Name",isSortable:!0},{key:"version",header:"Version",isSortable:!0},{key:"status",header:"Status",isSortable:!0},{key:"createdAt",header:"Created",isSortable:!0},{key:"updatedAt",header:"Modified",isSortable:!0},{key:"translations",header:"Translations",isSortable:!1},{key:"owner",header:"Owner",isSortable:!0},{key:"websegments",header:"Web Segments",isSortable:!1},{key:"links",header:"Links",isSortable:!1},{key:"details",header:"",isSortable:!1}].filter((function(t){return e.reduce((function(e,s){return e||!!s[t.key]}),!1)}))}(t);return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(c.a,{}),Object(i.jsxs)("div",{className:"bx--grid bx--grid--full-width landing-page",children:[Object(i.jsx)("div",{className:"bx--row landing-page__banner",children:Object(i.jsxs)("div",{className:"bx--col-lg-16",children:[Object(i.jsxs)(L.a,{noTrailingSlash:!0,children:[Object(i.jsx)(z.a,{href:"/",children:"Home"}),Object(i.jsx)(z.a,{isCurrentPage:!0,href:"/",children:"Widget types"})]}),Object(i.jsx)("h1",{className:"landing-page__heading",children:"Widgets types"}),Object(i.jsx)("div",{children:"The collection of available widget types in the widget repository. Widget types in the repository are available in the CMS integrations without any additional effort."})]})}),Object(i.jsx)("div",{className:"bx--row",children:Object(i.jsx)("div",{className:"bx--col-lg-16",children:Object(i.jsx)(U,{variant:"dark",headers:s,rows:t,descriptions:e})})}),Object(i.jsx)(l.a,{})]})]})};t.default=I},45:function(e,t,s){"use strict";var i=s(3);s(0);var a=function(e){var t=e.className,s=e.children,a=e.heading;return Object(i.jsxs)("section",{className:"bx--row ".concat(t," info-section"),children:[Object(i.jsx)("div",{className:"bx--col-md-8 bx--col-lg-4 bx--col-xlg-3",children:Object(i.jsx)("h3",{className:"info-section__heading",children:a})}),s]})},r=function(e){var t=function(e){var t=e.split(" "),s=t.pop();return[t.join(" "),s]}(e.heading);return Object(i.jsxs)("article",{className:"info-card bx--col-md-4 bx--col-lg-4 bx--col-xlg-3 bx--offset-xlg-1",children:[Object(i.jsxs)("h4",{className:"info-card__heading",children:["".concat(t[0]," "),Object(i.jsx)("strong",{children:t[1]})]}),Object(i.jsx)("p",{className:"info-card__body",children:e.body}),e.icon]})},n=s(114),c=s(115),l=s(106),o=function(){return Object(i.jsxs)(a,{heading:"The Principles",className:"landing-page__r3",children:[Object(i.jsx)(r,{heading:"Widgets are Configurable",body:'Build once and embed many times. Configure your widgets when embedding to leverage the same widget in multiple situations. "Tweak the widget knobs and stamp".',icon:Object(i.jsx)(n.d,{})}),Object(i.jsx)(r,{heading:"Widgets are Modular",body:"Widgets are designed to work seamlessly with each other in any digital experience. Use them in a website, or an application, as your digital building blocks.",icon:Object(i.jsx)(c.a,{})}),Object(i.jsx)(r,{heading:"Widgets are Consistent",body:"Weather your organization uses a CMS, static HTML, or any other tech widgets stay the same. Feel free to re-platform while keeping your widgets intact. Leverage the CMS integrations for a better editorial experience.",icon:Object(i.jsx)(l.c,{})})]})};t.a=o},46:function(e,t,s){"use strict";var i=s(3),a=(s(0),s(15)),r=s(101),n=s(102),c=s(103),l=s(104),o=s(107),d=s(108),j=s(109),b=s(110),m=s(111),p=s(112),g=s(113),u=function(){return Object(i.jsx)(r.a,{render:function(e){var t=e.isSideNavExpanded,s=e.onClickSideNavExpand;return Object(i.jsxs)(n.a,{"aria-label":"Widget Catalog",children:[Object(i.jsx)(c.a,{}),Object(i.jsx)(l.a,{"aria-label":"Open menu",onClick:s,isActive:t}),Object(i.jsx)(o.a,{element:a.b,to:"/",prefix:"JS Widgets",children:"Widget Catalog"}),Object(i.jsx)(d.a,{"aria-label":"Widget Catalog",children:Object(i.jsx)(j.a,{element:a.b,to:"/widget-types",children:"Widget Types"})}),Object(i.jsx)(b.a,{"aria-label":"Side navigation",expanded:t,isPersistent:!1,children:Object(i.jsx)(m.a,{children:Object(i.jsx)(p.a,{children:Object(i.jsx)(j.a,{element:a.b,to:"/widget-types",children:"Widget Types"})})})}),Object(i.jsx)(g.a,{})]})}})};t.a=u},53:function(e){e.exports=JSON.parse('[{"repositoryUrl":"https://github.com/js-widgets/example-widget","shortcode":"example-widget","version":"v1.3.1","directoryUrl":"https://js-widgets.github.io/widget-registry-boilerplate/widget-registry/production/example-widget/v1","tarballUrl":"/tmp/widget-definitions-5bis34/example-widget.tar.gz","files":["css/main.css","css/main.css.map","js/main.js","js/main.js.LICENSE.txt","js/main.js.map","thumbnail.svg"],"updatedAt":"2021-03-04T16:27:19.107Z","createdAt":"2021-03-04T16:27:19.107Z","availableTranslations":["ar","de","en","es","esla","fr","it","ja","ko","pl","pt","ru","tr","zh-cn","zh-tw"],"description":"This example contains documentation and example code for creating widgets using React.","settingsSchema":{"type":"object","additionalProperties":false,"properties":{"fields":{"type":"object","properties":{"button-text":{"type":"string","title":"Button text","description":"Some random string to be displayed when the widget is rendered.","examples":["I am a button","Please, click me","CLICK"]}}}}},"externalPeerDependencies":{"react":{"src":"https://unpkg.com/react@^17/umd/react.production.min.js"},"react-dom":{"src":"https://unpkg.com/react-dom@^17/umd/react-dom.production.min.js"},"react-intl":{"src":"https://unpkg.com/react-intl-bundle@^1/dist/react-intl.production.min.js"}},"title":"Example Widget","status":"stable","assetManifest":{"files":{"main.css":"https://js-widgets.github.io/widget-registry-boilerplate/widget-registry/production/example-widget/v1/css/main.css","main.js":"https://js-widgets.github.io/widget-registry-boilerplate/widget-registry/production/example-widget/v1/js/main.js"},"entrypoints":["static/css/main.8343b28c.css","css/main.css","js/main.js"]}},{"repositoryUrl":"https://github.com/js-widgets/example-calculator","shortcode":"example-calculator","version":"v1.0.7","directoryUrl":"https://js-widgets.github.io/widget-registry-boilerplate/widget-registry/production/example-calculator/v1","tarballUrl":"/tmp/widget-definitions-5bis34/example-calculator.tar.gz","files":["css/main.css","css/main.css.map","js/main.js","js/main.js.LICENSE.txt","js/main.js.map","thumbnail.svg"],"updatedAt":"2021-03-04T16:27:19.107Z","createdAt":"2021-03-04T16:27:19.107Z","availableTranslations":["en"],"description":"This example contains a calculator.","externalPeerDependencies":{"react":{"src":"https://unpkg.com/react@^17/umd/react.production.min.js"},"react-dom":{"src":"https://unpkg.com/react-dom@^17/umd/react-dom.production.min.js"}},"title":"Example Calculator","status":"stable","assetManifest":{"files":{"main.css":"https://js-widgets.github.io/widget-registry-boilerplate/widget-registry/production/example-calculator/v1/css/main.css","main.js":"https://js-widgets.github.io/widget-registry-boilerplate/widget-registry/production/example-calculator/v1/js/main.js"},"entrypoints":["static/css/main.2028f805.css","css/main.css","js/main.js"]}},{"repositoryUrl":"https://github.com/js-widgets/example-emojis","shortcode":"example-emojis","version":"v1.0.4","directoryUrl":"https://js-widgets.github.io/widget-registry-boilerplate/widget-registry/production/example-emojis/v1","tarballUrl":"/tmp/widget-definitions-5bis34/example-emojis.tar.gz","files":["css/main.css","css/main.css.map","js/main.js","js/main.js.LICENSE.txt","js/main.js.map","thumbnail.svg"],"updatedAt":"2021-03-04T16:27:19.107Z","createdAt":"2021-03-04T16:27:19.107Z","availableTranslations":["en"],"description":"This example contains emojis.","externalPeerDependencies":{"react":{"src":"https://unpkg.com/react@^17/umd/react.production.min.js"},"react-dom":{"src":"https://unpkg.com/react-dom@^17/umd/react-dom.production.min.js"}},"title":"Example Emojis","status":"wip","assetManifest":{"files":{"main.css":"https://js-widgets.github.io/widget-registry-boilerplate/widget-registry/production/example-emojis/v1/css/main.css","main.js":"https://js-widgets.github.io/widget-registry-boilerplate/widget-registry/production/example-emojis/v1/js/main.js"},"entrypoints":["static/css/main.7c29b23a.css","css/main.css","js/main.js"]}}]')}}]);
//# sourceMappingURL=9.c2420404.chunk.js.map