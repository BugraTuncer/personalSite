(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{191:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=(t(207),t(208)),c=t(219),i=t(227),s=t(232),o=t.n(s),m=t(233),d=t.n(m),f=t(234),p=t.n(f),u=t(235),E=t.n(u),v=t(236),h=t.n(v),g=function(e){var a=e.skill,t=a.imageSrc,n=a.title,r=a.skills;return l.a.createElement("div",{className:"flex-d-row skill-block"},l.a.createElement("div",{className:"flex-md-50 flex-100"},l.a.createElement("img",{src:t,alt:"",className:"img-responsive"})),l.a.createElement("div",{className:"flex-md-50 flex-100 text-center"},l.a.createElement("h2",{className:"text-center"},n),l.a.createElement("div",{className:"text-center"},r.map(function(e,a){return l.a.createElement("p",{key:a},e)}))))},b=function(){return l.a.createElement("div",{className:"header-bar"})},N=function(e){var a=e.experience,t=a.title,n=a.date,r=a.info;return l.a.createElement("div",{className:"flex-d-row experience-block text-center text-md-left"},l.a.createElement("h2",{className:"flex-100 title"},t),l.a.createElement("h4",{className:"flex-100 date"},n),l.a.createElement("div",{className:"flex-100"},r))};a.default=function(){var e=[{title:"Frontend Web Development",imageSrc:d.a,skills:["Angular","React","Vue","JQuery","HTML5","CSS3"]},{title:"Backend Web Development",imageSrc:p.a,skills:["NodeJs","ExpressJs","Python","Django","PHP","Laravel"]},{title:"Mobile Development",imageSrc:E.a,skills:["Native iOS development with Swift","Native Android development with Java","IONIC","React Native"]},{title:"General Development",imageSrc:h.a,skills:["C and C++","Qt Framework","Low level programming","OpenGL graphics development","Game development"]}],a=[{title:"Full Stack Web Developer - TEKBAS Group",date:"JULY 2018 - PRESENT",info:l.a.createElement("p",{className:"experience-job-info"},"Developed internal automation tool for interconnecting multiple departments of the company using Django/Python and Vue.JS Implemented multiple features to old automation tools using PHP/Laravel. Worked on micro services that uses MEAN stack. Developed internal mobile applications using IONIC.")},{title:"Full Stack Web Developer and Mobile Developer - SAIL Tech",date:"JUNE 2017 - JUNE 2018",info:l.a.createElement("p",{className:"experience-job-info"},"Developed native Android and iOS application of a vehicle tracking system that has hundreds of active users. Improved performance of the main backend server and improved responsiveness of the website of the tracking system using PHP/Laravel. Worked on porting front-end code to Angular. Created a mobile application of an e-commerce platform using IONIC.")},{title:"Mobile Developer Internship - AKBIM",date:"JUNE 2016 - AUGUST 2016",info:l.a.createElement("p",{className:"experience-job-info"},"Developed native Android application of accounting software Dinamik and worked on back-end to create API for mobile application")}],t=l.a.useRef(null),n=l.a.useState(!1),s=n[0],m=n[1],f=l.a.useState(!1),u=f[0],v=f[1];return l.a.useEffect(function(){return window.addEventListener("scroll",function(){var e=this.scrollY,a=t.current;if(a){var n=a.offsetTop;m(e>=n)}}),function(){window.removeEventListener("scroll")}},[]),l.a.createElement("div",{className:"container"},l.a.createElement(i.Helmet,null,l.a.createElement("meta",{charSet:"utf-8"}),l.a.createElement("title",null,"Sefer Ergün's Website"),l.a.createElement("meta",{name:"description",content:"Sefer Ergün's Personal Website"}),l.a.createElement("meta",{name:"keywords",content:"Sefer,Ergün,JavaScript,Developer,Web,Software,Engineer,Nodejs"}),l.a.createElement("meta",{name:"author",content:"Sefer Ergün"}),l.a.createElement("link",{rel:"stylesheet",href:"https://maxcdn.icons8.com/fonts/line-awesome/1.1/css/line-awesome-font-awesome.min.css"})),l.a.createElement(r.Fade,{top:!0,when:s},l.a.createElement("nav",{className:"navbar"},l.a.createElement(r.Slide,{top:!0,cascade:!0,when:s},l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",onClick:function(){return v(!u)}},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("ul",{className:"navbar-nav "+(u?"expanded":"")},l.a.createElement("li",{className:"nav-item"},l.a.createElement(c.Link,{activeClass:"active",to:"home",spy:!0,smooth:!0,duration:500,className:"nav-link"},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(c.Link,{activeClass:"active",to:"aboutMe",spy:!0,smooth:!0,duration:500,className:"nav-link"},"About Me")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(c.Link,{activeClass:"active",to:"skills",spy:!0,smooth:!0,duration:500,className:"nav-link"},"Skills")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(c.Link,{activeClass:"active",to:"experiences",spy:!0,smooth:!0,duration:500,className:"nav-link"},"Experiences")))))),l.a.createElement("section",{id:"home"},l.a.createElement("div",{className:"row align-items-center initial-header align-content-center"},l.a.createElement("div",{className:"col-md-6 col-12 initial-header-text-container"},l.a.createElement("h3",{className:"initial-header-text"},"Hi, I'm ",l.a.createElement("span",{className:"initial-header-text-name"},"Sefer Ergün")," ",l.a.createElement("br",null),"I'm a full-stack web developer")),l.a.createElement("div",{className:"col-md-6 col-12 overflow-hidden"},l.a.createElement("div",{className:"d-flex flex-column justify-content-center initial-header-link-container"},l.a.createElement("a",{href:"mailto:sefer@seferergun.com",target:"_blank",className:"initial-header-link"},l.a.createElement("i",{className:"fa fa-envelope"})," ",l.a.createElement("span",null,"sefer@seferergun.com")),l.a.createElement("a",{href:"https://www.linkedin.com/in/sefer-ergun/",target:"_blank",className:"initial-header-link"},l.a.createElement("i",{className:"fa fa-linkedin"}),l.a.createElement("span",null,"https://www.linkedin.com/in/sefer-ergun/")),l.a.createElement("a",{href:"https://github.com/seferergun",target:"_blank",className:"initial-header-link"},l.a.createElement("i",{className:"fa fa-github"}),l.a.createElement("span",null,"https://github.com/seferergun")))),l.a.createElement("div",{className:"col-12 text-center mt-5"},l.a.createElement(r.Flip,{top:!0},l.a.createElement(c.Link,{to:"aboutMe",smooth:!0,duration:500,className:"about-me btn"},"About Me ",l.a.createElement("i",{className:"fa fa-arrow-down"})))))),l.a.createElement("section",{className:"flex-d-column about-me-block flex-center",id:"aboutMe",ref:t},l.a.createElement(r.Slide,{left:!0,duration:500},l.a.createElement(r.Fade,null,l.a.createElement("h1",{className:"header-title"},"About Me"))),l.a.createElement(r.Slide,{left:!0,delay:50},l.a.createElement(r.Fade,null,l.a.createElement(b,null))),l.a.createElement("div",{className:"flex-d-row flex-center"},l.a.createElement("div",{className:"flex-100 flex-md-50 text-center"},l.a.createElement(r.Zoom,null,l.a.createElement("img",{src:o.a,alt:"",className:"profile-photo"}))),l.a.createElement("div",{className:"flex-100 flex-md-50"},l.a.createElement(r.Slide,{right:!0},l.a.createElement("p",{className:"info"},"I'm a software developer the graduated from Çukurova University with BSc. I have been programming since the age of 14. Through years I have worked on different projects in several fields. These include the operating system and kernel development, game and game engine development, native and hybrid mobile application development and full-stack web development.",l.a.createElement("br",null),"I'm open to freelance jobs and job offerings. You can contact me through my email"))))),l.a.createElement("section",{className:"flex-d-column flex-center",id:"skills"},l.a.createElement(r.Fade,null,l.a.createElement("div",null,l.a.createElement(r.Slide,{right:!0},l.a.createElement("h1",{className:"header-title"},"Skills")),l.a.createElement(r.Slide,{right:!0},l.a.createElement("h3",{className:"header-subtitle"},"Languages and Frameworks that I have used and have experince with")),l.a.createElement(r.Slide,{right:!0},l.a.createElement(b,null)))),e.map(function(e,a){return l.a.createElement(r.Zoom,{key:a},l.a.createElement(g,{skill:e}))})),l.a.createElement("section",{className:"flex-d-column flex-center",id:"experiences"},l.a.createElement(r.Fade,{left:!0},l.a.createElement("div",null,l.a.createElement(r.Slide,{left:!0},l.a.createElement("h2",{className:"header-title"},"Experiences")),l.a.createElement(r.Slide,{left:!0,delay:50},l.a.createElement(b,null)))),a.map(function(e,a){return l.a.createElement(r.Zoom,{key:a},l.a.createElement(N,{experience:e}))})))}},232:function(e,a,t){e.exports=t.p+"static/profile-38c88351148432e3227f019a9086d6d3.jpg"},233:function(e,a,t){e.exports=t.p+"static/front-a7008998a723d082a2e96449f31e62b6.png"},234:function(e,a,t){e.exports=t.p+"static/backend-c61baf6d41d5bd35aac745c5d6c7d5b3.png"},235:function(e,a,t){e.exports=t.p+"static/mobile-71583085df9a02083007e905077832e7.png"},236:function(e,a,t){e.exports=t.p+"static/general-98a6152e0d312529c9f58fbdb0230ba9.png"}}]);
//# sourceMappingURL=component---src-pages-index-jsx-bfae89b209dfd439a109.js.map