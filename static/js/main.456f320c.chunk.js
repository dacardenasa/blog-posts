(this["webpackJsonpblog-posts"]=this["webpackJsonpblog-posts"]||[]).push([[0],{12:function(e,a,t){},13:function(e,a,t){"use strict";t.r(a);var s=t(0),r=t.n(s),n=t(2),i=t.n(n),o=t(3),l=t(4),c=t(6),u=t(5),d=[{id:1,title:"Manejo de dependencias en Ruby con Bundler",description:"Bundler es una manejador de dependencias para Ruby. Aunque viene incluido con Rails, Bundler no es exclusivo de Rails, lo puedes usar para manejar las dependencias de cualquier proyecto de Ruby.",url:"http://blog.makeitreal.camp/manejo-de-dependencias-en-ruby-con-bundler/",votes:42,writer_avatar_url:"//a.disquscdn.com/uploads/users/2864/1155/avatar92.jpg?1481303405",post_image_url:"http://blog.makeitreal.camp/assets/images/bg-images/bundler.jpg"},{id:2,title:"Descubre si Make it Real es para ti",description:"En Make it Real buscamos entrenar a los desarrolladores Web que nosotros mismos quisi\xe9ramos contratar. Personas con autodisciplina que sean capaces de resolver problemas complejos y se adapten r\xe1pidamente a nuevas tecnolog\xedas y escenarios. En este post vamos a discutir algunas caracter\xedsticas de nuestro programa para que descubras si Make it Real es para ti.",url:"http://blog.makeitreal.camp/descubre-si-make-it-real-es-para-ti/",votes:43,writer_avatar_url:"//a.disquscdn.com/uploads/users/2864/1155/avatar92.jpg?1481303405",post_image_url:"http://blog.makeitreal.camp/assets/images/bg-images/laptop-sublime.jpg"},{id:3,title:"\xbfQu\xe9 es c\xf3digo?",description:"Sem\xe1foros, autom\xf3viles, aviones, aeropuertos, sat\xe9lites, el sistema financiero, gran parte de nuestras vidas depende del c\xf3digo que varias generaciones de programadores han escrito. Pero \xbfqu\xe9 es c\xf3digo? \xbfqui\xe9n lo ejecuta y c\xf3mo? En este post vamos a hacer un recorrido hist\xf3rico para entender c\xf3mo es que la electricidad se convierte en c\xf3digo y c\xf3mo surgieron los lenguajes de programaci\xf3n.",url:"http://blog.makeitreal.camp/que-es-codigo/",votes:40,writer_avatar_url:"//a.disquscdn.com/uploads/users/2864/1155/avatar92.jpg?1481303405",post_image_url:"http://blog.makeitreal.camp/assets/images/bg-images/code.jpg"},{id:4,title:"Aprende Desarrollo Web gratis",description:"\xbfQuieres iniciar en el mundo del desarrollo Web y no sabes por d\xf3nde empezar? Conoce Aprende Desarrollo Web, un curso completamente gratis dirigido a personas sin experiencia en el que aprender\xe1s a crear y publicar sitios interactivos en Internet con HTML, CSS y JavaScript.",url:"http://blog.makeitreal.camp/aprende-desarrollo-web-gratis/",votes:45,writer_avatar_url:"//a.disquscdn.com/uploads/users/2864/1155/avatar92.jpg?1481303405",post_image_url:"http://blog.makeitreal.camp/assets/images/bg-images/aprende-desarrollo-web-bg.png"}],m=function(e,a){return"Asc"===a?e.sort((function(e,a){return e.votes-a.votes})):"Desc"===a?e.sort((function(e,a){return a.votes-e.votes})):void 0},p=function(e){Object(c.a)(t,e);var a=Object(u.a)(t);function t(){var e;return Object(o.a)(this,t),(e=a.call(this)).state={posts:m(d,"Desc")},e}return Object(l.a)(t,[{key:"handleAscOrderClick",value:function(){this.setState({posts:m(this.state.posts,"Asc")})}},{key:"handleDescOrderClick",value:function(){this.setState({posts:m(this.state.posts,"Desc")})}},{key:"handleAddVoteClick",value:function(e,a){a.preventDefault();var t=function(e,a){return e.map((function(e){return e.id===a?(e.votes+=1,e):e}))}(this.state.posts,e);this.setState({posts:m(t,"Desc")})}},{key:"handleRemoveVoteClick",value:function(e,a){a.preventDefault();var t=function(e,a){return e.map((function(e){return e.id===a?(e.votes-=1,e):e}))}(this.state.posts,e);this.setState({posts:m(t,"Desc")})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"filter-posts"},"Ordenar:",r.a.createElement("button",{className:"btn btn-outline-primary ml-2",onClick:this.handleAscOrderClick.bind(this)},"Ascendente"),r.a.createElement("button",{className:"btn btn-outline-info ml-2",onClick:this.handleDescOrderClick.bind(this)},"Descendente")),r.a.createElement("section",{className:"posts-box"},this.state.posts.map((function(a,t){return r.a.createElement("article",{className:"article-box",key:t},r.a.createElement("div",{className:"post-img"},r.a.createElement("img",{src:a.post_image_url,alt:a.title,className:"img-fluid post-image"})),r.a.createElement("div",{className:"votes-summary-box"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("button",{onClick:function(t){return e.handleAddVoteClick(a.id,t)}},r.a.createElement("i",{className:"fa fa-caret-up","aria-hidden":"true"}))),r.a.createElement("li",null,a.votes),r.a.createElement("li",null,r.a.createElement("button",{onClick:function(t){return e.handleRemoveVoteClick(a.id,t)}},r.a.createElement("i",{className:"fa fa-caret-down","aria-hidden":"true"})))),r.a.createElement("div",{className:"summary-box"},r.a.createElement("a",{href:a.url,rel:"noopener noreferrer",target:"_blank"},a.title),r.a.createElement("p",null,a.description),r.a.createElement("span",null,"Escrito por:"),r.a.createElement("img",{src:a.writer_avatar_url,alt:"German"}))))}))))}}]),t}(s.Component);var g=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"text-center",style:{marginTop:"10px",borderBottom:"1px solid",padding:"0 0 10px 0",color:"#ea907a",fontWeight:"bold"}},"Blog posts populares"),r.a.createElement(p,null))};t(12);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root"))},7:function(e,a,t){e.exports=t(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.456f320c.chunk.js.map