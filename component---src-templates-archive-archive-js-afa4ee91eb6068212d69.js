(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{FT44:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l=a("Wbzz"),u=a("ph5I"),c=a.n(u),o=function(e){var t=e.children,a=e.to,n=e.buttonStyle;return r.a.createElement(l.Link,{to:a,className:c.a.button+" "+n},t)};o.defaultProps={buttonStyle:""};var s=o;a.d(t,"a",(function(){return s}))},JIeO:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l=a("ma3e"),u=a("FT44"),c=a("obyI"),o=a.n(c),s=a("Al62"),i=a.n(s),p=a("qux6"),v=a.n(p),m=function(e){var t=e.prevPage,a=e.nextPage;return r.a.createElement("div",{className:v.a.container},t?r.a.createElement(u.a,{to:i.a.resolvePageUrl(o.a.pages.archive,t),buttonStyle:v.a.buttonLeft},r.a.createElement(l.a,null),r.a.createElement("span",null,"Newer posts")):null,a?r.a.createElement(u.a,{to:i.a.resolvePageUrl(o.a.pages.archive,a),buttonStyle:v.a.buttonRight},r.a.createElement("span",null,"Older posts"),r.a.createElement(l.b,null)):null)};a.d(t,"a",(function(){return m}))},bpH6:function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return p}));var n=a("q1tI"),r=a.n(n),l=a("I/Ru"),u=a("jNNy"),c=a("fC2M"),o=a("JIeO"),s=a("obyI"),i=a.n(s),p="3350011143";t.default=function(e){var t=e.data,a=e.pageContext,n=a.archivePage,s=n>1?n-1:null,p=n<a.lastArchivePage?n+1:null;return r.a.createElement(l.a,{title:"Archive"},r.a.createElement(u.a,{title:"Archive | Page "+n,description:"Old posts",path:i.a.pages.archive}),r.a.createElement(c.a,{posts:t.allMarkdownRemark.edges}),r.a.createElement(o.a,{prevPage:s,nextPage:p}))}}}]);
//# sourceMappingURL=component---src-templates-archive-archive-js-afa4ee91eb6068212d69.js.map