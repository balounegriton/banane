(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{13:function(e,t,a){e.exports=a(28)},18:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var c,n=a(0),s=a.n(n),l=a(11),o=a.n(l),r=(a(18),a(1)),i=a(2),m=a(3),d=a(4),u=(a(5),a(12)),p=a.n(u),v=a.p+"static/media/logoBanane.78b8f44c.png",E=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).demoReel=function(){!0===e.state.demo&&!1===e.state.apropos&&!1===e.state.logo&&(e.setState({demo:!1,apropos:!1,logo:!0}),document.getElementById("texteDemo").className="notHover"),!1===e.state.demo&&!0===e.state.apropos&&!1===e.state.logo&&(e.setState({demo:!0,apropos:!1,logo:!1}),document.getElementById("texteDemo").className="Hover",document.getElementById("texteApro").className="notHover"),!1===e.state.demo&&!1===e.state.apropos&&!0===e.state.logo&&(e.setState({demo:!0,apropos:!1,logo:!1}),document.getElementById("texteDemo").className="Hover")},e.apropo=function(){!0===e.state.demo&&!1===e.state.apropos&&!1===e.state.logo&&(e.setState({demo:!1,apropos:!0,logo:!1}),document.getElementById("texteApro").className="Hover",document.getElementById("texteDemo").className="notHover"),!1===e.state.demo&&!0===e.state.apropos&&!1===e.state.logo&&(e.setState({demo:!1,apropos:!1,logo:!0}),document.getElementById("texteDemo").className="notHover",document.getElementById("texteApro").className="notHover"),!1===e.state.demo&&!1===e.state.apropos&&!0===e.state.logo&&(e.setState({demo:!1,apropos:!0,logo:!1}),document.getElementById("texteApro").className="Hover")},e.state={demo:!1,apropos:!1,logo:!0},e}return Object(i.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"box2"},s.a.createElement("div",{className:"test5"},this.state.demo&&s.a.createElement("div",{className:"test4"},s.a.createElement("div",{className:"test2"},s.a.createElement("iframe",{className:"test3",src:"https://player.vimeo.com/video/403432891?badge=0&autopause=0&player_id=0&app_id=58479",frameBorder:"0",allow:"autoplay; fullscreen; picture-in-picture",allowFullScreen:!0,title:"demo v333"}))),this.state.logo&&s.a.createElement("img",{className:"logoLanding",id:"logoL",src:v,alt:"logoL"}),this.state.apropos&&s.a.createElement("div",null,s.a.createElement("div",{className:"texteApro"},"La Banane est un studio cr\xe9atif plein services, bas\xe9 \xe0 Bromont, Qc. Nous sommes sp\xe9cialis\xe9s dans les publicit\xe9s TV et web. Nous offrons un service de consultation qui cible vos besoins afin de proposer une solution \xe9fficace adapt\xe9e \xe0 vos besoins. Nos experts multidiciplinaires ne reculent devant rien pour livrer la marchandise."),s.a.createElement("div",{className:"texteApro textContact"},"Contactez-nous d\xe8s maintenant!",s.a.createElement("br",null),"info@la-banane.ca",s.a.createElement("br",null),"514-712-0366"))),s.a.createElement("div",{className:"texteDemo"},s.a.createElement("div",{id:"texteDemo",className:"notHover",onClick:this.demoReel},"DEMO REEL  ")),s.a.createElement("div",{className:"apropos"},s.a.createElement("div",{id:"texteApro",className:"notHover",onClick:this.apropo},"\xe0 propos  ")))}}]),a}(n.Component),f=a.p+"static/media/tablebois.be754426.png",h=a.p+"static/media/paliser.6396d0f2.png",g=a.p+"static/media/cactus.1d4b876c.png",N=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).allo=function(){e.props.actionName()},e.jcp1=function(){e.setState({jcp1:!0,jcp2:!1,jcp3:!1}),document.getElementById("jcp1").className="numb",document.getElementById("jcp2").className="numbOff",document.getElementById("jcp3").className="numbOff"},e.jcp2=function(){e.setState({jcp1:!1,jcp2:!0,jcp3:!1}),document.getElementById("jcp1").className="numbOff",document.getElementById("jcp2").className="numb",document.getElementById("jcp3").className="numbOff"},e.jcp3=function(){e.setState({jcp1:!1,jcp2:!1,jcp3:!0}),document.getElementById("jcp1").className="numbOff",document.getElementById("jcp2").className="numbOff",document.getElementById("jcp3").className="numb"},e.state={jcp1:!0},e}return Object(i.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"container white"},s.a.createElement("div",{className:"box2 "},s.a.createElement("div",{className:"centerAll"},s.a.createElement("div",{className:" "},s.a.createElement("hr",{className:"lineSplit"}),s.a.createElement("div",{className:"JcpName "},"JCPERRAULT"),s.a.createElement("hr",{className:"lineSplit"}),s.a.createElement("div",{className:"containerTextVideo"},s.a.createElement("div",{className:"boxSize"},s.a.createElement("div",{className:"test2"},!this.state.jcp3&&s.a.createElement("div",{className:"test33",onClick:this.jcp3},s.a.createElement("img",{id:"",className:"imgCover",src:g,alt:"cover"})),this.state.jcp3&&s.a.createElement("iframe",{className:"test3",src:"https://player.vimeo.com/video/540287695?badge=0&autopause=0&player_id=0&app_id=58479",frameBorder:"0",allow:"autoplay; fullscreen; picture-in-picture",allowFullScreen:!0,title:"demo v333"}))),s.a.createElement("div",{className:"largeScreen2"},s.a.createElement("div",{className:"test2 "},!this.state.jcp2&&s.a.createElement("div",{className:"test33",onClick:this.jcp2},s.a.createElement("img",{id:"",className:"imgCover",src:h,alt:"cover"})),this.state.jcp2&&s.a.createElement("iframe",{className:"test3",src:"https://player.vimeo.com/video/540295699?badge=0&autopause=0&player_id=0&app_id=58479",frameBorder:"0",allow:"autoplay; fullscreen; picture-in-picture",allowFullScreen:!0,title:"demo v333"}))),s.a.createElement("div",{className:"largeScreen3"},s.a.createElement("div",{className:"test2"},!this.state.jcp1&&s.a.createElement("div",{className:"test33",onClick:this.jcp1},s.a.createElement("img",{id:"",className:"imgCover",src:f,alt:"cover"})),this.state.jcp1&&s.a.createElement("iframe",{className:"test3",src:"https://player.vimeo.com/video/540310664?badge=0&autopause=0&player_id=0&app_id=58479",frameBorder:"0",allow:"autoplay; fullscreen; picture-in-picture",allowFullScreen:!0,title:"demo v333"}))),s.a.createElement("div",null,this.state.jcp1&&s.a.createElement("div",null,s.a.createElement("div",{className:"titreJcp"},"Commandite Star Acad\xe9mie"),s.a.createElement("div",{className:"texteJcp"},"Montage vid\xe9o \xe0 partir donner un peu plus de qualit\xe9, nous avons ajout\xe9 de l\u2019animation/effets dans certaines images pour rendre le tout plus dynamique.")),this.state.jcp2&&s.a.createElement("div",null,s.a.createElement("div",{className:"titreJcp"},"Palliser"),s.a.createElement("div",{className:"texteJcp"},"Montage vid\xe9o \xe0 partir d\u2019images fixes (photos) fournies par le client. Pour donner un peu plus de qualit\xe9, nous avons ajout\xe9 de l\u2019animation/effets dans certaines images pour rendre le tout plus dynamique.")),this.state.jcp3&&s.a.createElement("div",null,s.a.createElement("div",{className:"titreJcp"},"Natuzzi (Remontage 30s)"),s.a.createElement("div",{className:"texteJcp"},"Nous avons \xe9t\xe9 mandat\xe9 de produire une publicit\xe9 30s \xe0 partir d\u2019une vid\xe9o existante de 55 secondes. Nous avons d\xfb recr\xe9er une histoire \xe0 partir d\u2019images existantes et cr\xe9er une ambiance qui fait r\xeaver avec des effets sonores."))),"     "),s.a.createElement("div",{className:"numberContainer"},s.a.createElement("div",{id:"jcp1",className:"numb",onClick:this.jcp1},"0  "),s.a.createElement("div",{id:"jcp2",className:"numbOff",onClick:this.jcp2},"0  "),s.a.createElement("div",{id:"jcp3",className:"numbOff",onClick:this.jcp3},"0  "))))))}}]),a}(n.Component),b=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).state={},e}return Object(i.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"box"},s.a.createElement("div",{className:""})))}}]),a}(n.Component),j=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).state={},e}return Object(i.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"box"},s.a.createElement("div",{className:""})))}}]),a}(n.Component),y=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).state={},e}return Object(i.a)(a,[{key:"render",value:function(){return 1===this.props.active?s.a.createElement("div",{className:"bleueText"},"1/3"):2===this.props.active?s.a.createElement("div",null,"2/3"):3===this.props.active?s.a.createElement("div",{className:"blackText"},"3/3"):s.a.createElement("div",null)}}]),a}(n.Component),x=(a(26),a(6)),O=a.n(x),C=a(7),k=a.n(C),B=a(8),S=a.n(B),w=a(9),I=a.n(w),D=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(D,"px"));var H=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).next=function(){c.next()},e.prev=function(){c.prev()},e.update=function(){e.setState({active:c.getPos()}),0===c.getPos()&&(document.body.style.backgroundColor="black",e.setState({flecheDroite:k.a,flecheGauche:O.a})),1===c.getPos()&&(document.body.style.backgroundColor="#FFF1C6",e.setState({flecheDroite:I.a,flecheGauche:S.a})),2===c.getPos()&&(document.body.style.backgroundColor="purple",e.setState({flecheDroite:k.a,flecheGauche:O.a})),3===c.getPos()&&(document.body.style.backgroundColor="orange",e.setState({flecheDroite:I.a,flecheGauche:S.a}))},e.state={active:0,flecheDroite:k.a,flecheGauche:O.a},e}return Object(i.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement("div",null,s.a.createElement(p.a,{swipeOptions:{continuous:!0,callback:this.update},ref:function(e){return c=e}},s.a.createElement("div",null,s.a.createElement(E,null)),s.a.createElement("div",null,s.a.createElement(N,null)),s.a.createElement("div",null,s.a.createElement(b,null)),s.a.createElement("div",null,s.a.createElement(j,null)))),s.a.createElement("div",{className:"flecheGauche"},s.a.createElement("img",{id:"gauche",src:this.state.flecheGauche,alt:"cover",onClick:this.prev}),s.a.createElement("div",{className:"compteur"}," ",s.a.createElement(y,{active:this.state.active}))),s.a.createElement("div",{className:"flecheDroite"},s.a.createElement("img",{id:"droite",src:this.state.flecheDroite,alt:"cover",onClick:this.next}),s.a.createElement("div",{className:"compteur"}," ",s.a.createElement(y,{active:this.state.active})," ")))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},5:function(e,t,a){},6:function(e,t,a){e.exports=a.p+"static/media/gauche.9805d2a6.svg"},7:function(e,t,a){e.exports=a.p+"static/media/droite.695dc4ca.svg"},8:function(e,t,a){e.exports=a.p+"static/media/gauche2.eb6bc1c0.svg"},9:function(e,t,a){e.exports=a.p+"static/media/droite2.1a1cb999.svg"}},[[13,1,2]]]);
//# sourceMappingURL=main.bff4b94c.chunk.js.map