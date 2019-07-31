(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{105:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(16),o=n.n(c),s=(n(70),n(8)),i=n(9),l=n(12),u=n(10),h=n(11),p=(n(71),n(63),n(55)),g=n(107),m=n(45),f=n(46),d=n(47),v=n.n(d),z=n(56),M={SUCCESS:"SUCCESS",ERROR:"ERROR",LOADING:"LOADING"},y="sport",E="business",w="https://newsapi.org/v2/top-headlines?apiKey=bcf19d759fd14f3e8c848c4fa6233cae",b=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={news:[],loadState:M.LOADING,category:"technology",source:"",country:"us",totalResults:0,pageSize:5,currentPage:1},n.fetchNews=function(e){var t=w,a=n.state,r=a.country,c=a.pageSize,o=a.category,s=e;v.a.get(t).query({country:r,category:o,pageSize:c,page:s}).set("Accept","application/json").end(function(t,a){!t&&a?n.setState({news:a.body,loadState:M.SUCCESS,totalResults:a.body.totalResults,currentPage:e}):console.log("There was an error fetching from News.org",t)})},n.onChangeSport=function(e){n.fetchNews(n.state.currentPage),n.setState({category:{sport:y}})},n.onChangeBusiness=function(e){n.fetchNews(n.state.currentPage),n.setState({category:{business:E}})},n.onQueryChange=function(e){n.setState({category:e.target.value})},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.fetchNews(this.state.currentPage)}},{key:"shouldComponentUpdate",value:function(e,t){return this.props.news!==t.news}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"Trending"},r.a.createElement(p.a,{onRouteChange:this.props.onRouteChange,searchHandler:function(){return e.fetchNews(e.state.currentPage)},onQueryChange:this.onQueryChange,query:this.state.category}),r.a.createElement(f.a,{sport:this.onChangeSport,business:this.onChangeBusiness}),this.state.loadState===M.LOADING?r.a.createElement("div",{className:"loader"}):r.a.createElement(k,{data:this.state.news}),r.a.createElement(m.a,{current:this.state.currentPage,total:this.state.totalResults,pageSize:this.state.pageSize,onPageChanged:this.fetchNews}))}}]),t}(a.Component),k=function(e){var t=e.data,n=t.articles.map(function(e){return r.a.createElement(z.a,{key:Math.random(),article:e})});return r.a.createElement("div",{className:"grid"},n,r.a.createElement(g.a,null,r.a.createElement("h6",null,t.totalResults," ","news discovered")))},N=b,O=n(41),C=n.n(O),S=n(61);var j=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={route:"trending",component:null},n.onRouteChange=function(e){n.setState({route:e})},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){if("trending"===this.state.route)return r.a.createElement(N,{onRouteChange:this.onRouteChange});if("all"===this.state.route){var e=(t=function(){return n.e(3).then(n.bind(null,112))},function(e){function n(){var e,t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=Object(l.a)(this,(e=Object(u.a)(n)).call.apply(e,[this].concat(r)))).state={component:null},t}return Object(h.a)(n,e),Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=Object(S.a)(C.a.mark(function e(){var n,a;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t();case 2:n=e.sent,a=n.default,this.setState({component:a});case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.component;return e?r.a.createElement(e,this.props):null}}]),n}(a.Component));return r.a.createElement(e,{onRouteChange:this.onRouteChange})}var t}}]),t}(a.Component),A=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function R(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}o.a.render(r.a.createElement(j,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/LinkNews",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/LinkNews","/service-worker.js");A?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):R(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):R(t,e)})}}()},45:function(e,t,n){"use strict";var a=n(8),r=n(9),c=n(12),o=n(10),s=n(11),i=n(0),l=n.n(i),u=(n(81),function(e){function t(){return Object(a.a)(this,t),Object(c.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"pages",value:function(){for(var e=[],t=this.rangeStart();t<=this.rangeEnd();t++)e.push(t);return e}},{key:"rangeStart",value:function(){var e=this.props.current-this.props.pageRange;return e>0?e:1}},{key:"rangeEnd",value:function(){var e=this.props.current+this.props.pageRange,t=this.totalPages();return e<t?e:t}},{key:"totalPages",value:function(){return Math.ceil(this.props.total/this.props.pageSize)}},{key:"nextPage",value:function(){return this.props.current+1}},{key:"prevPage",value:function(){return this.props.current-1}},{key:"hasFirst",value:function(){return 1!==this.rangeStart()}},{key:"hasLast",value:function(){return this.rangeEnd()<this.totalPages()}},{key:"hasPrev",value:function(){return this.props.current>1}},{key:"hasNext",value:function(){return this.props.current<this.totalPages()}},{key:"changePage",value:function(e){this.props.onPageChanged(e)}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"pagination"},l.a.createElement("div",{className:"pagination__left"},l.a.createElement("a",{href:"#",className:this.hasPrev()?"":"hidden",onClick:function(t){return e.changePage(e.prevPage())}},"Prev")),l.a.createElement("div",{className:"pagination__mid"},l.a.createElement("ul",null,l.a.createElement("li",{className:this.hasFirst()?"":"hidden"},l.a.createElement("a",{href:"#",onClick:function(t){return e.changePage(1)}},"1")),l.a.createElement("li",{className:this.hasFirst()?"":"hidden"},"..."),this.pages().map(function(t,n){return l.a.createElement("li",{key:n},l.a.createElement("a",{href:"#",onClick:function(n){return e.changePage(t)},className:e.props.current==t?"current":""},t))}),l.a.createElement("li",{className:this.hasLast()?"":"hidden"},"..."),l.a.createElement("li",{className:this.hasLast()?"":"hidden"},l.a.createElement("a",{href:"#",onClick:function(t){return e.changePage(e.totalPages())}},this.totalPages())))),l.a.createElement("div",{className:"pagination__right"},l.a.createElement("a",{href:"#",className:this.hasNext()?"":"hidden",onClick:function(t){return e.changePage(e.nextPage())}},"Next")))}}]),t}(i.Component));u.defaultProps={pageRange:2},t.a=u},46:function(e,t,n){"use strict";var a=n(8),r=n(9),c=n(12),o=n(10),s=n(11),i=n(0),l=n.n(i),u=n(22),h=(n(82),function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return(n=Object(c.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(s)))).handleClick=function(){n.props.cat()},n}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement(u.a,{className:"justify-content-center",variant:"pills",style:{borderRadius:"0px"},defaultActiveKey:"/home"},l.a.createElement(u.a.Item,null,l.a.createElement(u.a.Link,{href:"/home"},"Tech")),l.a.createElement(u.a.Item,{onClick:this.props.sport},l.a.createElement(u.a.Link,{eventKey:"link-1"},"Sport")),l.a.createElement(u.a.Item,{onClick:this.props.business},l.a.createElement(u.a.Link,{eventKey:"link-2"},"Business")))}}]),t}(i.Component));t.a=h},55:function(e,t,n){"use strict";var a=n(8),r=n(9),c=n(12),o=n(10),s=n(11),i=n(0),l=n.n(i),u=n(57),h=n.n(u),p=n(110),g=n(107),m=n(22),f=(n(72),n(58)),d=n.n(f),v=function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return(n=Object(c.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(s)))).state={iconShow:!1},n.HandleIcon=function(){n.setState({iconShow:!0})},n}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e;return console.log("Search"),e=this.state.iconShow?l.a.createElement("form",{className:"form",onSubmit:this.props.searchHandler},l.a.createElement("input",{className:"search-input",type:"text",placeholder:"Search",value:this.props.query,onChange:this.props.onQueryChange})):l.a.createElement("img",{src:d.a,alt:"search",onClick:this.HandleIcon}),l.a.createElement("div",null,e)}}]),t}(i.Component),z=function(e){function t(){return Object(a.a)(this,t),Object(c.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(p.a,{sticky:"top",collapseOnSelect:!0,expand:"lg",className:"nav"},l.a.createElement(g.a,null,l.a.createElement(p.a.Toggle,{id:"toggle"}),l.a.createElement(p.a.Collapse,{id:"responsive-navbar-nav"},l.a.createElement(m.a,{className:"mr-auto"},l.a.createElement(m.a.Link,null,l.a.createElement("div",{onClick:function(){return e.props.onRouteChange("trending")}},"Trending")),l.a.createElement(m.a.Link,null,l.a.createElement("div",{onClick:function(){return e.props.onRouteChange("all")}},"All")))),l.a.createElement(p.a.Brand,{href:"#home",id:"logo"},l.a.createElement("img",{src:h.a,alt:"logo"})),l.a.createElement(v,{searchHandler:this.props.searchHandler,onQueryChange:this.props.onQueryChange,query:this.props.query})))}}]),t}(i.Component);t.a=z},56:function(e,t,n){"use strict";var a=n(62),r=n(0),c=n.n(r),o=n(111),s=n(108),i=n(109);n(89);var l=function(e){var t=e.content.author?e.content.author:"Unknown",n=new Date("".concat(e.content.publishedAt)),a=n.toDateString(),r=n.toLocaleTimeString();return c.a.createElement(i.a,Object.assign({},e,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0}),c.a.createElement(i.a.Header,{closeButton:!0},c.a.createElement(i.a.Title,{id:"contained-modal-title-vcenter"},e.content.title)),c.a.createElement(i.a.Body,null,c.a.createElement("h6",{className:"date"},r,", ",a),c.a.createElement("p",null,e.content.content,c.a.createElement("br",null),c.a.createElement("a",{href:e.content.url},"read more"),c.a.createElement("br",null),"Posted by ",t)),c.a.createElement(i.a.Footer,null,c.a.createElement(s.a,{onClick:e.onHide},"Close")))};t.a=function(e){var t=e.article,n=Object(r.useState)(!1),i=Object(a.a)(n,2),u=i[0],h=i[1],p=new Date("".concat(t.publishedAt)).toDateString(),g=t.author?t.author:"Unknown",m=t.urlToImage?t.urlToImage:"https://www.reynoldsam.com/wordpress/wp-content/themes/ram/_images/nophoto.jpg";return c.a.createElement("div",{className:"news"},c.a.createElement("div",{className:"container"},c.a.createElement(o.a,{className:"card"},c.a.createElement(o.a.Img,{variant:"top",src:m,className:"image"}),c.a.createElement(o.a.Body,null,c.a.createElement(o.a.Text,{className:"title"},t.title),c.a.createElement(o.a.Text,{className:"content"},t.description,c.a.createElement("br",null),"posted by ",g," on ",p),c.a.createElement(s.a,{className:"read-more",onClick:function(){return h(!0)}},"Read More"),c.a.createElement(l,{content:t,show:u,onHide:function(){return h(!1)}})))))}},57:function(e,t,n){e.exports=n.p+"static/media/logo.abe77198.png"},58:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAABKVBMVEVHcEzMzMzNzc3MzMzMzMzLy8vMzMzMzMzMzMzR0dH////MzMzIyMjLy8vLy8vMzMzMzMzOzs7MzMzV1dXMzMzMzMzMzMzMzMzLy8vMzMzMzMzKysrJycnQ0NDKysrMzMzMzMzMzMzMzMzMzMzMzMzMzMzNzc3MzMzLy8vNzc3MzMzNzc3Ozs7MzMzMzMzb29vMzMzNzc3IyMjKysrOzs7MzMzMzMzNzc3MzMzNzc3Ly8vMzMzLy8vNzc3Ly8vNzc3MzMzNzc3MzMzLy8vMzMzMzMzMzMzMzMzLy8vNzc3Ly8vLy8vNzc3MzMzNzc3MzMzMzMzMzMzLy8vMzMzLy8vMzMzMzMzMzMzMzMzMzMzMzMzLy8vOzs7Nzc3Nzc3Nzc3Pz8/Nzc3MzMwZXlRMAAAAYnRSTlMAVVv6/VRa/PsWAfIXWVh9qhWzBvn1oYioeOsdIRs6cuzN9sJ0wzh+gHrzrBoFIweHthwYPjc8iV+xYveyf1Nc/lZ3T2/q4fjBdctjwJbKoKXJItw7zHOwxLSfmTlSMz0QYV5tbXEAAAGmSURBVEjH1ZZ3U8IwGIcrLaQDSpllyUbBjYPh3nvvPX7f/0MI6jkuA8udnua/Pm+ey5vkTRpJ+idtYjqay8py4iz65P2WMBlU8d7U2YeOwkgVIJuZKW14WOs7LxDg6lhsuAYQGQt8fGt2HoZPZPQDsd6vaNwC/HyjjMWyTtFVhe+4oLhZvEeByZn5AJbZkTiMFDNQRYwzvG4hyNwP5JO8lHsjqDFwEGP8hbHRZFSJSgJ8RSOyRsEd7Ip2rIQGxaLIiJQirimWw5RISWOfYlkERIoXaxQLIyRSRrHhXDGcJ3bCmH6fSDlFyfki31BsGgWRcok7OlmVaKKCUR9pOgubr9RhMegtZkTFfy8xq9/SOUdsEBfMQMpAnK1UkBhiR3xQelh8ScEKL2U/lDiVm15RoLgkvgNr/CtKDrbvZuLhOqaBvP1pf7T6DAzSdvi3bCrYCheKaW8o5E1vlVq9Y0OeDo5Ua376WYQP28X66piCetIaB9uJcGT9aM98OxC+jg7jWm6PTBa6cFw/7ri7djzOHPl3nJc16Hf28JiXMef0seL2/+3H1DPZQU6aOBg1vwAAAABJRU5ErkJggg=="},63:function(e,t,n){},64:function(e,t,n){e.exports=n(105)},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){},89:function(e,t,n){}},[[64,1,2]]]);
//# sourceMappingURL=main.d8ce6697.chunk.js.map