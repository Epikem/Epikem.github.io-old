(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{150:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return g});var r=n(7),a=n.n(r),i=n(0),o=n.n(i),l=n(166),c=n.n(l),m=n(36),p=n(162),s=n.n(p),u=n(169),d=n(161),g=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props.pathContext.categories;if(e)return o.a.createElement(u.e,null,o.a.createElement(c.a,{title:"Categories | "+d.a.siteTitle}),o.a.createElement(u.d,null,o.a.createElement(m.Link,{to:"/"},d.a.siteTitle),o.a.createElement(u.i,null,"Categories")),o.a.createElement(u.l,null,o.a.createElement(u.c,null,e.map(function(e,t){return o.a.createElement(u.k,{key:t},o.a.createElement(m.Link,{to:"/categories/"+s()(e)},e))}))))},t}(o.a.PureComponent)},160:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r={tablet:"(max-width: "+"1200px"+")",phone:"(max-width: "+"600px"+")"}},161:function(e,t,n){"use strict";t.a={pathPrefix:"/",siteTitle:"Epikem Blog",siteTitleAlt:"Epikem Blog",siteUrl:"https://blog.epikem.com",siteLanguage:"en",siteBanner:"/assets/banner.jpg",defaultBg:"/assets/bg.png",favicon:"src/favicon.png",siteDescription:"Epikem blog",author:"Epikem",siteLogo:"",siteFBAppID:"",userTwitter:"",ogSiteName:"",ogLanguage:"en_US",themeColor:"#F77F00",backgroundColor:"#003049",headerFontFamily:"Bitter",bodyFontFamily:"Open Sans",baseFontSize:"16px",Google_Tag_Manager_ID:"GTM-MVP42QK",POST_PER_PAGE:6}},167:function(e){e.exports={data:{site:{buildTime:"09.10.2019"}}}},168:function(e,t,n){},169:function(e,t,n){"use strict";var r=n(7),a=n.n(r),i=n(0),o=n.n(i),l=n(159),c=n(36),m=n(162),p=n.n(m),s=(n(170),n(163)),u=n.n(s),d=l.c.div.withConfig({displayName:"Subline",componentId:"qlsjny-0"})(["font-size:",";",";",";"],function(e){return e.theme.fontSize.small},function(e){return e.light&&"color: "+u()(e.theme.colors.white,.7)},function(e){return e.sectionTitle&&"text-align: center"}),g=l.c.article.withConfig({displayName:"Article__Post",componentId:"sc-1o6x1jn-0"})(["display:flex;flex-direction:column;margin-top:3.5rem;margin-bottom:3.5rem;"]),f=l.c.h2.withConfig({displayName:"Article__Title",componentId:"sc-1o6x1jn-1"})(["position:relative;text-shadow:0 12px 30px rgba(0,0,0,0.15);margin-bottom:0.75rem;"]),h=l.c.span.withConfig({displayName:"Article__Initiale",componentId:"sc-1o6x1jn-2"})(["display:none;position:absolute;font-size:7rem;transform:translate(-50%,-50%);opacity:0.08;user-select:none;z-index:-1;"]),b=l.c.p.withConfig({displayName:"Article__Excerpt",componentId:"sc-1o6x1jn-3"})(["grid-column:-1 / 1;margin-top:1rem;margin-bottom:1rem;"]),y=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props,t=e.title,n=e.date,r=e.excerpt,a=e.slug,i=e.timeToRead,l=e.category,m=t.charAt(0);return o.a.createElement(g,null,o.a.createElement(f,null,o.a.createElement(h,null,m),o.a.createElement(c.Link,{to:"/blog/"+a},t)),o.a.createElement(d,null,n," — ",i," Min Read — In",o.a.createElement(c.Link,{to:"/categories/"+p()(l)}," ",l)),o.a.createElement(b,null,r))},t}(o.a.PureComponent),x=(n(165),n(164)),E=n.n(x),w=l.c.button.withConfig({displayName:"Button",componentId:"sc-13424di-0"})(["background:",";border:none;display:inline-flex;align-items:center;margin:0 0.5rem;border-radius:",";font-size:",";color:white;padding:",";transition:all ",";box-shadow:0 4px 6px rgba(50,50,93,0.11),0 1px 3px rgba(0,0,0,0.08);&:hover{background:",";cursor:pointer;transform:translateY(-2px);}&:focus{outline:none;}svg{width:20px;height:20px;margin-right:0.75rem;fill:white;}"],function(e){return e.theme.colors.primary},function(e){return e.big?"1.5rem":"1rem"},function(e){return e.big?"1.2rem":"1rem"},function(e){return e.big?"0.35rem 1.6rem":"0.25rem 1.5rem"},function(e){return e.theme.transitions.normal},function(e){return E()(.3,e.theme.colors.primary)}),v=n(175),k=n(160),N=n(161),_=l.c.header.withConfig({displayName:"Header__HeaderWrapper",componentId:"sc-853xdk-0"})(["position:relative;background:linear-gradient( -185deg,",","," ),url(",") no-repeat;background-size:cover;padding:8rem 2rem 10rem;text-align:center;::after{background:transparent url(/assets/mask.svg) no-repeat bottom left;background-size:101%;bottom:-2px;content:'';display:block;height:100%;left:0;position:absolute;width:100%;}@media ","{padding:4rem 2rem 6rem;}@media ","{padding:1rem 0.5rem 2rem;}"],function(e){return u()(Object(v.a)(.1,e.theme.colors.primary),.6)},function(e){return u()(Object(v.b)(.1,e.theme.colors.grey.dark),.8)},function(e){return e.banner},k.a.tablet,k.a.phone),C=l.c.div.withConfig({displayName:"Header__Content",componentId:"sc-853xdk-1"})(["position:relative;z-index:999;a{color:white;&:hover{opacity:0.85;color:white;}}"]),P=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){return o.a.createElement(_,{banner:this.props.banner||N.a.defaultBg},o.a.createElement(C,null,this.props.children))},t}(o.a.PureComponent),I=n(171),T=n.n(I),z=n(167),S={colors:{primary:"#72cc96",bg:"#fff",white:"#fff",grey:{dark:"rgba(0, 0, 0, 0.9)",default:"rgba(0, 0, 0, 0.7)",light:"rgba(0, 0, 0, 0.5)",ultraLight:"rgba(0, 0, 0, 0.25)"}},transitions:{normal:"0.25s"},fontSize:{small:"0.9rem",big:"2.9rem"}},L=n(172),A=n.n(L);n(168);function j(){var e=T()(["\n  ::selection {\n    color: ",";\n    background: ",";\n  }\n  body {\n    background: ",";\n    color: ",";\n    @media "," {\n      font-size: 14px;\n    }\n  }\n  a {\n    color: ",";\n    text-decoration: none;\n    transition: all ",";\n  }\n  a:hover {\n    color: ",";\n  }\n  h1, h2, h3, h4 {\n    color: ",';\n  }\n  blockquote {\n    font-style: italic;\n    position: relative;\n  }\n\n  blockquote:before {\n    content: "";\n    position: absolute;\n    background: ',";\n    height: 100%;\n    width: 6px;\n    margin-left: -1.6rem;\n  }\n  label {\n    margin-bottom: .5rem;\n    color: ",";\n  }\n  input, textarea {\n    border-radius: .5rem;\n    border: none;\n    background: rgba(0, 0, 0, 0.05);\n    padding: .25rem 1rem;\n    &:focus {\n      outline: none;\n    }\n  }\n  .textRight {\n    text-align:right;\n  }\n"]);return j=function(){return e},e}var B=Object(l.b)(j(),S.colors.bg,S.colors.primary,S.colors.bg,S.colors.grey.default,k.a.phone,S.colors.grey.dark,S.transitions.normal,S.colors.primary,S.colors.grey.dark,S.colors.primary,S.colors.grey.dark),F=l.c.footer.withConfig({displayName:"Layout__Footer",componentId:"sc-1mmvrc-0"})(["text-align:center;padding:3rem 0;span{font-size:0.75rem;}"]),O=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props.children;return o.a.createElement(c.StaticQuery,{query:"1536950682",render:function(t){return o.a.createElement(l.a,{theme:S},o.a.createElement(o.a.Fragment,null,o.a.createElement(B,null),e,o.a.createElement(F,null,"© ",A()(t.site.buildTime,".")[2]," by Epikem. All rights reserved. ",o.a.createElement("br",null),o.a.createElement("a",{href:"https://www.github.com/epikem"},"GitHub Repository")," ",o.a.createElement("br",null),o.a.createElement("a",{href:"https://github.com/mhadaily/gatsby-starter-typescirpt-power-blog"},"Theme : gatsby-starter-typescirpt-power-blog")," ",o.a.createElement("br",null),o.a.createElement("span",null,"Last build: ",t.site.buildTime))))},data:z})},t}(o.a.PureComponent),W=l.c.div.withConfig({displayName:"PrevNext__Wrapper",componentId:"sc-147iq1p-0"})(["display:flex;margin:6rem auto 0 auto;a{color:",";display:flex;align-items:center;}justify-items:center;"],function(e){return e.theme.colors.primary}),q=l.c.div.withConfig({displayName:"PrevNext__Prev",componentId:"sc-147iq1p-1"})(["span{text-transform:uppercase;font-size:0.8rem;color:",";}"],function(e){return e.theme.colors.grey.light}),D=l.c.div.withConfig({displayName:"PrevNext__Next",componentId:"sc-147iq1p-2"})(["margin-left:auto;text-align:right;span{text-transform:uppercase;font-size:0.8rem;color:",";}"],function(e){return e.theme.colors.grey.light}),U=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props,t=e.prev,n=e.next;return o.a.createElement(W,null,t&&o.a.createElement(q,null,o.a.createElement("span",null,"Previous"),o.a.createElement(c.Link,{to:"/blog/"+p()(t.frontmatter.title)},t.frontmatter.title)),n&&o.a.createElement(D,null,o.a.createElement("span",null,"Next"),o.a.createElement(c.Link,{to:"/blog/"+p()(n.frontmatter.title)},n.frontmatter.title)))},t}(o.a.PureComponent),M=l.c.div.withConfig({displayName:"SectionTitle",componentId:"yonf4x-0"})(["font-size:",";text-transform:",";text-align:center;color:",";position:relative;padding:2rem 0 0;margin-bottom:2rem;&:after{content:'';height:1px;width:50px;position:absolute;bottom:0;left:50%;margin-left:-25px;background:",";}"],function(e){return e.theme.fontSize.big},function(e){return e.uppercase?"uppercase":"normal"},function(e){return e.theme.colors.white},function(e){return e.theme.colors.white}),R=n(166),G=n.n(R),H=function(e){var t,n,r,a,i=e.postNode,l=e.postPath,c=e.postSEO,m="/"===N.a.pathPrefix?"":N.a.pathPrefix;c?(t=i.frontmatter.title,n=i.excerpt,r=N.a.siteBanner,a=N.a.siteUrl+m+l):(t=N.a.siteTitle,n=N.a.siteDescription,r=N.a.siteBanner);r=N.a.siteUrl+m+r;var p=N.a.siteUrl+N.a.pathPrefix,s=[{"@context":"http://schema.org","@type":"WebSite","@id":p,url:p,name:t,alternateName:N.a.siteTitleAlt?N.a.siteTitleAlt:""}];return c&&(s=[{"@context":"http://schema.org","@type":"BlogPosting","@id":a,url:a,name:t,alternateName:N.a.siteTitleAlt?N.a.siteTitleAlt:"",headline:t,image:{"@type":"ImageObject",url:r},description:N.a.siteDescription,datePublished:i.frontmatter.date,dateModified:i.frontmatter.date,author:{"@type":"Person",name:N.a.author},publisher:{"@type":"Organization",name:N.a.author,logo:{"@type":"ImageObject",url:N.a.siteUrl+m+N.a.siteLogo}},isPartOf:p,mainEntityOfPage:{"@type":"WebSite","@id":p}}]),o.a.createElement(G.a,null,o.a.createElement("html",{lang:N.a.siteLanguage}),o.a.createElement("title",null,N.a.siteTitle),o.a.createElement("meta",{name:"description",content:n}),o.a.createElement("meta",{name:"image",content:r}),o.a.createElement("script",{type:"application/ld+json"},JSON.stringify(s)),o.a.createElement("meta",{property:"og:locale",content:N.a.ogLanguage}),o.a.createElement("meta",{property:"og:site_name",content:N.a.ogSiteName?N.a.ogSiteName:""}),o.a.createElement("meta",{property:"og:url",content:c?a:p}),c?o.a.createElement("meta",{property:"og:type",content:"article"}):null,o.a.createElement("meta",{property:"og:title",content:t}),o.a.createElement("meta",{property:"og:description",content:n}),o.a.createElement("meta",{property:"og:image",content:r}),o.a.createElement("meta",{property:"fb:app_id",content:N.a.siteFBAppID?N.a.siteFBAppID:""}),o.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),o.a.createElement("meta",{name:"twitter:creator",content:N.a.userTwitter?N.a.userTwitter:""}),o.a.createElement("meta",{name:"twitter:title",content:t}),o.a.createElement("meta",{name:"twitter:url",content:N.a.siteUrl}),o.a.createElement("meta",{name:"twitter:description",content:n}),o.a.createElement("meta",{name:"twitter:image",content:r}))},J=l.c.div.withConfig({displayName:"Wrapper",componentId:"bfzsh1-0"})(["display:flex;flex-direction:column;margin:0 auto;max-width:",";padding:",";@media ","{padding:",";}@media ","{padding:",";}"],function(e){return e.fullWidth?"100%":"100rem"},function(e){return e.fullWidth?"0":"0 6rem"},k.a.tablet,function(e){return e.fullWidth?"0":"0 3rem"},k.a.phone,function(e){return e.fullWidth?"0":"0 1rem"}),Q=l.c.div.withConfig({displayName:"Content",componentId:"sc-1ycqb4a-0"})(["box-shadow:0 4px 120px rgba(0,0,0,0.1);border-radius:1rem;padding:2rem 4rem;background-color:",";z-index:9000;margin-top:-4rem;form{p{label,input{display:block;}input{min-width:275px;}textarea{resize:vertical;min-height:150px;width:100%;}}}@media ","{padding:3rem 3rem;}@media ","{padding:2rem 1.5rem;}"],function(e){return e.theme.colors.bg},k.a.tablet,k.a.phone),K=l.c.h3.withConfig({displayName:"Title",componentId:"bn34ri-0"})(["position:relative;text-shadow:0 12px 30px rgba(0,0,0,0.15);margin-bottom:0.75rem;"]),V=(n(76),n(173),n(174),l.c.div.withConfig({displayName:"Pagination__PaginationContainer",componentId:"sc-5phg6h-0"})(["text-align:center;margin:2rem;"])),Y=l.c.div.withConfig({displayName:"Pagination__PaginationContent",componentId:"sc-5phg6h-1"})(["display:inline-block;padding:0 2.5rem;border-radius:3.5rem;background-color:#eee;@media ","{padding:0 1rem;}.page-numbers{display:block;float:left;transition:400ms ease;color:",";letter-spacing:0.1em;padding:1rem;&:hover,&.current{background-color:",";color:",";}&.prev{margin-left:-1.5rem;}&.next{margin-right:-1.5rem;}&.prev:hover,&.next:hover{background-color:transparent;color:",";}@media ","{padding:0 1.4rem;display:none;&:nth-of-type(2){position:relative;padding-right:5rem;&::after{content:'...';position:absolute;top:0;left:4.5rem;}}&:nth-child(-n + 3),&:nth-last-child(-n + 3){display:block;}&:nth-last-child(-n + 4){padding-right:1.4rem;&::after{content:none;}}}}"],k.a.phone,S.colors.grey.light,E()(.2,S.colors.primary),S.colors.white,E()(.2,S.colors.primary),k.a.tablet),X=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props,t=e.currentPage,n=e.totalPages,r=e.url,a=1===t,i=t===n,l=t-1==1?"/"+r+"/":"/"+r+"/"+(t-1).toString(),m="/"+r+"/"+(t+1).toString();return n>1?o.a.createElement(V,null,o.a.createElement(Y,null,!a&&o.a.createElement(c.Link,{className:"prev page-numbers",to:l,rel:"prev"},"← Prev"),Array.from({length:n},function(e,n){return o.a.createElement(c.Link,{className:t===n+1?"page-numbers current":"page-numbers",key:"pagination-number"+(n+1),to:"/"+r+"/"+(0===n?"":n+1)},n+1)}),!i&&o.a.createElement(c.Link,{className:"next page-numbers",to:m,rel:"next"},"Next →"))):null},t}(o.a.PureComponent);n.d(t,"a",function(){return y}),n.d(t,"b",function(){return w}),n.d(t,"d",function(){return P}),n.d(t,"e",function(){return O}),n.d(t,"g",function(){return U}),n.d(t,"i",function(){return M}),n.d(t,"h",function(){return H}),n.d(t,"j",function(){return d}),n.d(t,"l",function(){return J}),n.d(t,"c",function(){return Q}),n.d(t,"k",function(){return K}),n.d(t,"f",function(){return X})}}]);
//# sourceMappingURL=component---src-templates-all-category-tsx-6791c3443b37da46f5a7.js.map