(this["webpackJsonp@reinette/pov-widget-registry"]=this["webpackJsonp@reinette/pov-widget-registry"]||[]).push([[8],{132:function(e,t,i){"use strict";i.r(t);var s=i(41),n=i(3),c=i(47),r=i(59),a=i(0),d=i(53),o=i(137),l=i(119),j=i(116),b=i(117),p=i(138),m=i(134),g=i(123),h=i(135),x=i(126),u=i(127),O=i(118),w=i(46),y=i(45),f=function(e){var t="render"+e.shortcode.split("-").map((function(e){return"".concat(e[0].toUpperCase()).concat(e.substr(1))})).join(""),i=e.version.split(".")[0];return'\n<html>\n    \x3c!-- ... --\x3e\n  <body>\n    \x3c!-- ... --\x3e\n    <div id="widget-id"></div>\n    \x3c!-- ... --\x3e\n    <script src="http://s3.us.cloud-object-storage.appdomain.cloud/widget-registry/'.concat(e.shortcode,"/").concat(i,'/js/main.js" defer><\/script>\n    <script src="http://s3.us.cloud-object-storage.appdomain.cloud/widget-registry/loader.js" defer><\/script>\n    <script defer>\n      document.loadWidget({\n        instanceId: "widget-id",\n        language: "",\n        onRenderFinish: domElement => {},\n        origin: "",\n        renderFunctionName: "').concat(t,'",\n      });\n    <\/script>\n  </body>\n</html>\n')},v=i(121),N=i(106),k=i(125),_=i(122),S=i(115),T=i(114),C=i(128),U=function(e,t){var i=e.shortcode.replace(/^([a-z])|-([a-z])/g,(function(e){return e.toUpperCase()})).replace(/-/g,""),s="render".concat(i),n=window[s],c=document.getElementById(t);n&&c&&!c.getAttribute("rendered")&&n(t,"","",(function(e){e.setAttribute("rendered",!0)}))},P=i(139),E=function(e){var t=e.widget,i=e.doLoad,c=e.moreProps,d=Object(a.useState)(!1),o=Object(r.a)(d,2),l=o[0],j=o[1],b="widget-id--".concat(t.shortcode,"--").concat(JSON.stringify(c).split("").reduce((function(e,t){return e+t.charCodeAt(0)}),0)),p=c.className||"";p="".concat(p," widget-instance").trim(),delete c.className;var m=Object(n.jsx)("div",Object(s.a)(Object(s.a)({id:b,className:p},c),{},{children:Object(n.jsx)(P.a,{})}));return Object(a.useEffect)((function(){l||function(e){var t=e.externalPeerDependencies||{},i=Object.keys(t);return i.length?Promise.all(i.map((function(e){return new Promise((function(i,s){var n="widget-type-runtime-dep--".concat(e);if(document.getElementById(n))return i(e);var c=document.createElement("script");c.id=n,c.src=t[e].src,c.crossorigin="anonymous",c.async=!1,c.onload=i,c.onerror=s,document.body.appendChild(c)}))}))):Promise.resolve([])}(t).then((function(){return j(!0)}))})),i?(function(e,t){var i="widget-type-".concat(e.shortcode,"-runtime-code");if(document.getElementById(i))return Promise.resolve().then((function(){return U(e,t)}));var s=[new Promise((function(t,s){var n=document.createElement("script");n.id=i,n.src="".concat(e.directoryUrl,"/js/main.js"),n.crossorigin="anonymous",n.async=!0,n.onload=t,n.onerror=s,document.body.appendChild(n)}))];e.files.includes("css/main.css")&&s.push(new Promise((function(t,i){var s=document.createElement("link");s.crossOrigin="anonymous",s.type="text/css",s.media="all",s.rel="stylesheet",s.href="".concat(e.directoryUrl,"/css/main.css"),s.onload=t,s.onerror=i,document.head.appendChild(s)}))),Promise.all(s).then((function(){return U(e,t)}))}(t,b),m):m},I=function(e){var t=e.match.params.shortCode,i=d.find((function(e){return e.shortcode===t})),U={role:"presentation",tabIndex:0},P=Object(a.useState)(!1),I=Object(r.a)(P,2),W=I[0],A=I[1],D=function(e){return e.settingsSchema&&e.settingsSchema.properties.fields&&Object.keys(e.settingsSchema.properties.fields.properties).length?Object.keys(e.settingsSchema.properties.fields.properties).reduce((function(t,i){var s=e.settingsSchema.properties.fields.properties[i],n=Math.floor(Math.random()*s.examples.length),r=s.examples[n];return Object.assign(t,Object(c.a)({},i,r))}),{}):[]}(i),L=Object.keys(D).reduce((function(e,t){return e["data-".concat(t)]=D[t],e}),{});return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(w.a,{}),Object(n.jsxs)("div",{className:"bx--grid bx--grid--full-width landing-page widget-type",children:[Object(n.jsxs)(o.a,Object(s.a)(Object(s.a)({className:"widget-type--tabs"},{role:"presentation",tabIndex:0}),{},{children:[Object(n.jsxs)(l.a,Object(s.a)(Object(s.a)({},U),{},{id:"".concat(i.shortcode,"--tab-1"),label:"Information",children:[Object(n.jsx)("div",{className:"bx--row bx--row--r1",children:Object(n.jsxs)("div",{className:"bx--col-lg-16",children:[Object(n.jsxs)(j.a,{noTrailingSlash:!0,children:[Object(n.jsx)(b.a,{href:"/",children:"Home"}),Object(n.jsx)(b.a,{href:"/widget-types",children:"Widget types"}),Object(n.jsx)(b.a,{isCurrentPage:!0,href:"/",children:i.title})]}),Object(n.jsxs)("div",{className:"widget-type__heading--wrapper",children:[Object(n.jsxs)("div",{className:"widget-type__heading",children:[Object(n.jsx)("div",{className:"widget-type__heading--icon",children:Object(n.jsx)(v.a,{})}),Object(n.jsx)("h1",{className:"widget-type__heading--text",children:i.title})]}),i.repositoryUrl?Object(n.jsx)("div",{className:"widget-type__heading--repo-link",children:Object(n.jsx)(p.a,{href:i.repositoryUrl,renderIcon:N.a,kind:"tertiary",children:"Source code"})}):Object(n.jsx)(n.Fragment,{})]})]})}),Object(n.jsx)("div",{className:"bx--row bx--row--r2",children:Object(n.jsx)("div",{className:"bx--col-lg-8",children:Object(n.jsxs)("p",{className:"widget-type--notes",children:["All the information contained in this page has been extracted from the widget registry. Some info is generated by the compilation process, while some other is provided by the widget developer in the"," ",Object(n.jsx)(m.a,{type:"inline",children:"widget.json"})," file."]})})}),Object(n.jsxs)("div",{className:"bx--row bx--row--r3",children:[Object(n.jsxs)("div",{className:"bx--col-lg-8",children:[Object(n.jsx)(g.a,{children:Object(n.jsx)(h.a,{triggerText:"Thumbnail",children:"Thumbnail image as stored in the widget type code base. Check the \u201cLive preview\u201d tab for an interactive demo."})}),i.files.find((function(e){return"thumbnail.svg"===e}))?Object(n.jsx)("div",{children:Object(n.jsx)("img",{src:"".concat(i.directoryUrl,"/thumbnail.svg"),alt:"Widget thumbnail"})}):Object(n.jsx)("div",{children:Object(n.jsx)(k.a,{})})]}),Object(n.jsxs)("div",{className:"bx--col-lg-4",children:[Object(n.jsx)(g.a,{children:"Version"}),Object(n.jsxs)("div",{children:[i.status?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(m.a,{type:"inline",className:"status--".concat(i.status),children:i.status})," "]}):Object(n.jsx)(n.Fragment,{}),Object(n.jsx)("code",{className:"widget-type--version",children:i.version})]})]}),Object(n.jsxs)("div",{className:"bx--col-lg-4",children:[Object(n.jsx)(g.a,{children:"Date"}),Object(n.jsxs)(x.a,{children:[Object(n.jsxs)(u.a,{children:["Created on"," ",i.createdAt?new Date(i.createdAt).toDateString():"Unknown"]}),Object(n.jsxs)(u.a,{children:["Updated on"," ",i.updatedAt?new Date(i.updatedAt).toDateString():"Unknown"]})]})]})]}),Object(n.jsxs)("article",{className:"bx--row bx--row--r4",children:[Object(n.jsxs)("section",{className:"bx--col-lg-8 bx--col-md-8",children:[Object(n.jsx)(g.a,{children:"Description"}),Object(n.jsx)("p",{className:"widget-type--description",children:i.description})]}),Object(n.jsxs)("aside",{className:"bx--col-lg-4 bx--col-md-4 bx--col-sm-4",children:[Object(n.jsxs)("div",{children:[Object(n.jsx)(g.a,{children:Object(n.jsx)(h.a,{triggerText:"Files",children:"Technical information about the compiled assets of the widget."})}),Object(n.jsx)(x.a,{children:i.files.map((function(e,t){return Object(n.jsx)(u.a,{children:Object(n.jsx)(m.a,{type:"inline",children:e})},"key-".concat(t))}))})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)(g.a,{className:"bx--label--inline--sm",children:Object(n.jsx)(h.a,{triggerText:"External dependencies",children:"This widget expects the following dependecies to exist in the page when being rendered."})}),Object(n.jsx)(x.a,{children:Object.keys(i.externalPeerDependencies||{}).map((function(e,t){return Object(n.jsx)(u.a,{children:Object(n.jsxs)(h.a,{triggerText:e,renderIcon:_.b,children:[Object(n.jsx)("p",{id:"tooltip-body",children:i.externalPeerDependencies[e].src}),Object(n.jsx)("div",{className:"bx--tooltip__footer",children:Object(n.jsx)(p.a,{href:i.externalPeerDependencies[e].src,size:"small",renderIcon:S.b,children:"Visit"})})]})},"key-".concat(t))}))})]})]}),Object(n.jsxs)("aside",{className:"bx--col-lg-4 bx--col-md-4 bx--col-sm-4",children:[Object(n.jsx)(g.a,{children:"Translations"}),Object(n.jsx)(x.a,{children:i.availableTranslations.map((function(e,t){return Object(n.jsx)(u.a,{children:Object(n.jsx)(m.a,{type:"inline",children:e})},"key-".concat(t))}))})]})]})]})),Object(n.jsxs)(l.a,Object(s.a)(Object(s.a)({},U),{},{id:"".concat(i.shortcode,"--tab-3"),label:"Code snippet",children:[Object(n.jsx)("div",{className:"bx--row bx--row--r1",children:Object(n.jsxs)("div",{className:"bx--col-lg-16",children:[Object(n.jsxs)(j.a,{noTrailingSlash:!0,children:[Object(n.jsx)(b.a,{href:"/",children:"Home"}),Object(n.jsx)(b.a,{href:"/widget-types",children:"Widget types"}),Object(n.jsx)(b.a,{isCurrentPage:!0,href:"/",children:i.title})]}),Object(n.jsxs)("div",{className:"widget-type__heading--wrapper",children:[Object(n.jsxs)("div",{className:"widget-type__heading",children:[Object(n.jsx)("div",{className:"widget-type__heading--icon",children:Object(n.jsx)(T.a,{})}),Object(n.jsx)("h1",{className:"widget-type__heading--text",children:i.title})]}),i.repositoryUrl?Object(n.jsx)("div",{className:"widget-type__heading--repo-link",children:Object(n.jsx)(p.a,{href:i.repositoryUrl,renderIcon:N.a,kind:"tertiary",children:"Source code"})}):Object(n.jsx)(n.Fragment,{})]})]})}),Object(n.jsxs)("div",{className:"bx--row bx--row--r2",children:[Object(n.jsx)("div",{className:"bx--col-lg-8",children:Object(n.jsxs)("p",{children:["Use the following snippet of code to inject this widget in an static HTML page. If you are looking for a more advanced integration, take a look at the"," ",Object(n.jsx)(O.a,{href:"https://drupal.org/project/widget_instance",children:"Drupal module"}),", and the ",Object(n.jsx)(O.a,{href:"https://www.youtube.com/watch?v=SdDEbP-vtZg",children:"demo video"}),"."]})}),Object(n.jsx)("div",{className:"bx--col-lg-16",children:Object(n.jsx)(m.a,{type:"multi",hideCopyButton:!0,children:f(i)})})]})]})),Object(n.jsxs)(l.a,Object(s.a)(Object(s.a)({},U),{},{id:"".concat(i.shortcode,"--tab-3"),label:"Live Preview",onClick:function(){return A(!0)},children:[Object(n.jsx)("div",{className:"bx--row bx--row--r1",children:Object(n.jsxs)("div",{className:"bx--col-lg-16",children:[Object(n.jsxs)(j.a,{noTrailingSlash:!0,children:[Object(n.jsx)(b.a,{href:"/",children:"Home"}),Object(n.jsx)(b.a,{href:"/widget-types",children:"Widget types"}),Object(n.jsx)(b.a,{isCurrentPage:!0,href:"/",children:i.title})]}),Object(n.jsxs)("div",{className:"widget-type__heading--wrapper",children:[Object(n.jsxs)("div",{className:"widget-type__heading",children:[Object(n.jsx)("div",{className:"widget-type__heading--icon",children:Object(n.jsx)(v.b,{})}),Object(n.jsx)("h1",{className:"widget-type__heading--text",children:i.title})]}),i.repositoryUrl?Object(n.jsx)("div",{className:"widget-type__heading--repo-link",children:Object(n.jsx)(p.a,{href:i.repositoryUrl,renderIcon:N.a,kind:"tertiary",children:"Source code"})}):Object(n.jsx)(n.Fragment,{})]})]})}),Object(n.jsxs)("div",{className:"bx--row bx--row--r2",children:[Object(n.jsx)("div",{className:"bx--col-lg-12 some-content",style:{display:"flex"},children:Object(n.jsx)(E,{widget:i,doLoad:W,moreProps:L})}),Object(n.jsxs)("div",{className:"bx--col-lg-4",children:[Object(n.jsx)("h3",{children:"Widget settings"}),Object(n.jsxs)("div",{className:"widget-type--settings-warning",children:[Object(n.jsx)(C.a,{style:{marginRight:"5px"}}),Object(n.jsx)("div",{children:"Some widget types require settings at the time of embedding the widget. Here are some example values."})]}),Object(n.jsx)(x.a,{className:"widget-type--settings-values",children:Object.keys(D).map((function(e){var t=i.settingsSchema.properties.fields.properties[e];return Object(n.jsxs)(u.a,{children:[Object(n.jsx)(g.a,{children:Object(n.jsx)(h.a,{triggerText:"".concat(t.title," (").concat(t.type,")"),children:t.description})}),Object(n.jsx)("div",{children:D[e]})]},e)}))})]})]})]}))]})),Object(n.jsx)(y.a,{})]})]})};t.default=I},45:function(e,t,i){"use strict";var s=i(3);i(0);var n=function(e){var t=e.className,i=e.children,n=e.heading;return Object(s.jsxs)("section",{className:"bx--row ".concat(t," info-section"),children:[Object(s.jsx)("div",{className:"bx--col-md-8 bx--col-lg-4 bx--col-xlg-3",children:Object(s.jsx)("h3",{className:"info-section__heading",children:n})}),i]})},c=function(e){var t=function(e){var t=e.split(" "),i=t.pop();return[t.join(" "),i]}(e.heading);return Object(s.jsxs)("article",{className:"info-card bx--col-md-4 bx--col-lg-4 bx--col-xlg-3 bx--offset-xlg-1",children:[Object(s.jsxs)("h4",{className:"info-card__heading",children:["".concat(t[0]," "),Object(s.jsx)("strong",{children:t[1]})]}),Object(s.jsx)("p",{className:"info-card__body",children:e.body}),e.icon]})},r=i(114),a=i(115),d=i(106),o=function(){return Object(s.jsxs)(n,{heading:"The Principles",className:"landing-page__r3",children:[Object(s.jsx)(c,{heading:"Widgets are Configurable",body:'Build once and embed many times. Configure your widgets when embedding to leverage the same widget in multiple situations. "Tweak the widget knobs and stamp".',icon:Object(s.jsx)(r.d,{})}),Object(s.jsx)(c,{heading:"Widgets are Modular",body:"Widgets are designed to work seamlessly with each other in any digital experience. Use them in a website, or an application, as your digital building blocks.",icon:Object(s.jsx)(a.a,{})}),Object(s.jsx)(c,{heading:"Widgets are Consistent",body:"Weather your organization uses a CMS, static HTML, or any other tech widgets stay the same. Feel free to re-platform while keeping your widgets intact. Leverage the CMS integrations for a better editorial experience.",icon:Object(s.jsx)(d.c,{})})]})};t.a=o},46:function(e,t,i){"use strict";var s=i(3),n=(i(0),i(15)),c=i(101),r=i(102),a=i(103),d=i(104),o=i(107),l=i(108),j=i(109),b=i(110),p=i(111),m=i(112),g=i(113),h=function(){return Object(s.jsx)(c.a,{render:function(e){var t=e.isSideNavExpanded,i=e.onClickSideNavExpand;return Object(s.jsxs)(r.a,{"aria-label":"Widget Catalog",children:[Object(s.jsx)(a.a,{}),Object(s.jsx)(d.a,{"aria-label":"Open menu",onClick:i,isActive:t}),Object(s.jsx)(o.a,{element:n.b,to:"/",prefix:"JS Widgets",children:"Widget Catalog"}),Object(s.jsx)(l.a,{"aria-label":"Widget Catalog",children:Object(s.jsx)(j.a,{element:n.b,to:"/widget-types",children:"Widget Types"})}),Object(s.jsx)(b.a,{"aria-label":"Side navigation",expanded:t,isPersistent:!1,children:Object(s.jsx)(p.a,{children:Object(s.jsx)(m.a,{children:Object(s.jsx)(j.a,{element:n.b,to:"/widget-types",children:"Widget Types"})})})}),Object(s.jsx)(g.a,{})]})}})};t.a=h},53:function(e){e.exports=JSON.parse('[{"repositoryUrl":"https://github.com/reinette/pov-conf-widget","shortcode":"pov-conf-widget","version":"v1.3.0","directoryUrl":"https://reinette.github.io/widget-registry-boilerplate/widget-registry/sandbox/pov-conf-widget/v1","tarballUrl":"/tmp/widget-definitions-SolEbU/pov-conf-widget.tar.gz","files":["css/main.css","css/main.css.map","js/main.js","js/main.js.LICENSE.txt","js/main.js.map","thumbnail.svg"],"updatedAt":"2021-04-08T00:04:38.968Z","createdAt":"2021-04-08T00:04:38.968Z","availableTranslations":["en"],"description":"This example contains documentation and example code for creating widgets using React.","settingsSchema":{"type":"object","additionalProperties":false,"properties":{"fields":{"type":"object","properties":{"button-text":{"type":"string","title":"Button text","description":"Some random string to be displayed when the widget is rendered.","examples":["I am a button","Please, click me","CLICK"]}}}}},"externalPeerDependencies":{"react":{"src":"https://unpkg.com/react@^17/umd/react.production.min.js"},"react-dom":{"src":"https://unpkg.com/react-dom@^17/umd/react-dom.production.min.js"},"react-intl":{"src":"https://unpkg.com/react-intl-bundle@^1/dist/react-intl.production.min.js"}},"title":"POV Configuration Widget","status":"stable","assetManifest":{"files":{"main.css":"https://reinette.github.io/widget-registry-boilerplate/widget-registry/sandbox/pov-conf-widget/v1/css/main.css","main.js":"https://reinette.github.io/widget-registry-boilerplate/widget-registry/sandbox/pov-conf-widget/v1/js/main.js"},"entrypoints":["static/css/main.8343b28c.css","css/main.css","js/main.js"]}},{"repositoryUrl":"https://github.com/js-widgets/example-widget","shortcode":"example-widget","version":"v1.3.1","directoryUrl":"https://reinette.github.io/widget-registry-boilerplate/widget-registry/sandbox/example-widget/v1","tarballUrl":"/tmp/widget-definitions-SolEbU/example-widget.tar.gz","files":["css/main.css","css/main.css.map","js/main.js","js/main.js.LICENSE.txt","js/main.js.map","thumbnail.svg"],"updatedAt":"2021-04-08T00:04:38.968Z","createdAt":"2021-04-08T00:04:38.968Z","availableTranslations":["ar","de","en","es","esla","fr","it","ja","ko","pl","pt","ru","tr","zh-cn","zh-tw"],"description":"This example contains documentation and example code for creating widgets using React.","settingsSchema":{"type":"object","additionalProperties":false,"properties":{"fields":{"type":"object","properties":{"button-text":{"type":"string","title":"Button text","description":"Some random string to be displayed when the widget is rendered.","examples":["I am a button","Please, click me","CLICK"]}}}}},"externalPeerDependencies":{"react":{"src":"https://unpkg.com/react@^17/umd/react.production.min.js"},"react-dom":{"src":"https://unpkg.com/react-dom@^17/umd/react-dom.production.min.js"},"react-intl":{"src":"https://unpkg.com/react-intl-bundle@^1/dist/react-intl.production.min.js"}},"title":"Example Widget","status":"stable","assetManifest":{"files":{"main.css":"https://reinette.github.io/widget-registry-boilerplate/widget-registry/sandbox/example-widget/v1/css/main.css","main.js":"https://reinette.github.io/widget-registry-boilerplate/widget-registry/sandbox/example-widget/v1/js/main.js"},"entrypoints":["static/css/main.8343b28c.css","css/main.css","js/main.js"]}},{"repositoryUrl":"https://github.com/js-widgets/example-calculator","shortcode":"example-calculator","version":"v1.0.7","directoryUrl":"https://reinette.github.io/widget-registry-boilerplate/widget-registry/sandbox/example-calculator/v1","tarballUrl":"/tmp/widget-definitions-SolEbU/example-calculator.tar.gz","files":["css/main.css","css/main.css.map","js/main.js","js/main.js.LICENSE.txt","js/main.js.map","thumbnail.svg"],"updatedAt":"2021-04-08T00:04:38.968Z","createdAt":"2021-04-08T00:04:38.968Z","availableTranslations":["en"],"description":"This example contains a calculator.","externalPeerDependencies":{"react":{"src":"https://unpkg.com/react@^17/umd/react.production.min.js"},"react-dom":{"src":"https://unpkg.com/react-dom@^17/umd/react-dom.production.min.js"}},"title":"Example Calculator","status":"stable","assetManifest":{"files":{"main.css":"https://reinette.github.io/widget-registry-boilerplate/widget-registry/sandbox/example-calculator/v1/css/main.css","main.js":"https://reinette.github.io/widget-registry-boilerplate/widget-registry/sandbox/example-calculator/v1/js/main.js"},"entrypoints":["static/css/main.2028f805.css","css/main.css","js/main.js"]}},{"repositoryUrl":"https://github.com/js-widgets/example-emojis","shortcode":"example-emojis","version":"v1.0.4","directoryUrl":"https://reinette.github.io/widget-registry-boilerplate/widget-registry/sandbox/example-emojis/v1","tarballUrl":"/tmp/widget-definitions-SolEbU/example-emojis.tar.gz","files":["css/main.css","css/main.css.map","js/main.js","js/main.js.LICENSE.txt","js/main.js.map","thumbnail.svg"],"updatedAt":"2021-04-08T00:04:38.968Z","createdAt":"2021-04-08T00:04:38.968Z","availableTranslations":["en"],"description":"This example contains emojis.","externalPeerDependencies":{"react":{"src":"https://unpkg.com/react@^17/umd/react.production.min.js"},"react-dom":{"src":"https://unpkg.com/react-dom@^17/umd/react-dom.production.min.js"}},"title":"Example Emojis","status":"wip","assetManifest":{"files":{"main.css":"https://reinette.github.io/widget-registry-boilerplate/widget-registry/sandbox/example-emojis/v1/css/main.css","main.js":"https://reinette.github.io/widget-registry-boilerplate/widget-registry/sandbox/example-emojis/v1/js/main.js"},"entrypoints":["static/css/main.7c29b23a.css","css/main.css","js/main.js"]}}]')}}]);
//# sourceMappingURL=8.6f54f487.chunk.js.map