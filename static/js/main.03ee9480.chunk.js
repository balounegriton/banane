(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{19:function(t,e,o){},43:function(t,e,o){"use strict";o.r(e);var a=o(0),s=o.n(a),n=o(13),c=o.n(n),r=(o(19),o(4)),l=o(5),i=o(7),m=o(6),d=(o(8),o.p+"static/media/logoBanane.78b8f44c.png"),p=o(1),u=function(t){Object(i.a)(o,t);var e=Object(m.a)(o);function o(){var t;return Object(r.a)(this,o),(t=e.call(this)).state={},t}return Object(l.a)(o,[{key:"render",value:function(){return Object(p.jsx)("img",{className:"logoLanding",id:"logoL",src:d,alt:"logoL"})}}]),o}(a.Component),g=o(14),v=o.n(g),j=function(t){Object(i.a)(o,t);var e=Object(m.a)(o);function o(){var t;return Object(r.a)(this,o),(t=e.call(this)).state={},t}return Object(l.a)(o,[{key:"render",value:function(){return Object(p.jsx)("div",{className:"demo-width",children:Object(p.jsx)("div",{className:"player-wrapper",children:Object(p.jsx)(v.a,{className:"react-player",url:"https://vimeo.com/403432891",width:"100%",height:"100%",controls:"true"})})})}}]),o}(a.Component),b=function(t){Object(i.a)(o,t);var e=Object(m.a)(o);function o(){var t;return Object(r.a)(this,o),(t=e.call(this)).state={},t}return Object(l.a)(o,[{key:"render",value:function(){return Object(p.jsx)("div",{children:"contact lll"})}}]),o}(a.Component),x=function(t){Object(i.a)(o,t);var e=Object(m.a)(o);function o(){var t;return Object(r.a)(this,o),(t=e.call(this)).state={},t}return Object(l.a)(o,[{key:"render",value:function(){return Object(p.jsx)("div",{className:"texteApro",children:"La Banane est un studio cr\xe9atif plein services, bas\xe9 \xe0 Bromont, Qc. Nous sommes sp\xe9cialis\xe9s dans les publicit\xe9s TV et web. Nous offrons un service de consultation qui cible vos besoins afin de proposer une solution \xe9fficace adapt\xe9e \xe0 vos besoins. Nos experts multidiciplinaires ne reculent devant rien pour livrer la marchandise.Nous offrons un service de consultation qui cible vos besoins afin de proposer une solution \xe9fficace adapt\xe9e \xe0 vos besoins. Nos experts multidiciplinaires ne reculent devant rien pour livrer la marchandise."})}}]),o}(a.Component),h=function(t){Object(i.a)(o,t);var e=Object(m.a)(o);function o(){var t;return Object(r.a)(this,o),(t=e.call(this)).demoReel=function(){!0===t.state.demo&&!1===t.state.apropos&&!1===t.state.logo&&!1===t.state.contact&&(t.setState({demo:!1,apropos:!1,logo:!0,contact:!1}),t.setState({playing:!1}),document.getElementById("texteDemo").className="notHover"),!1===t.state.demo&&!0===t.state.apropos&&!1===t.state.logo&&!1===t.state.contact&&(t.setState({demo:!0,apropos:!1,logo:!1,contact:!1}),document.getElementById("texteDemo").className="Hover",document.getElementById("texteApro").className="notHover"),!1===t.state.demo&&!1===t.state.apropos&&!0===t.state.logo&&!1===t.state.contact&&(t.setState({demo:!0,apropos:!1,logo:!1,contact:!1}),document.getElementById("texteDemo").className="Hover"),!1===t.state.demo&&!1===t.state.apropos&&!1===t.state.logo&&!0===t.state.contact&&(t.setState({demo:!0,apropos:!1,logo:!1,contact:!1}),document.getElementById("texteContact").className="notHover",document.getElementById("texteDemo").className="Hover")},t.contact=function(){!0===t.state.demo&&!1===t.state.apropos&&!1===t.state.logo&&!1===t.state.contact&&(t.setState({demo:!1,apropos:!1,logo:!1,contact:!0}),t.setState({playing:!1}),document.getElementById("texteContact").className="Hover",document.getElementById("texteDemo").className="notHover"),!1===t.state.demo&&!0===t.state.apropos&&!1===t.state.logo&&!1===t.state.contact&&(t.setState({demo:!1,apropos:!1,logo:!1,contact:!0}),document.getElementById("texteContact").className="Hover",document.getElementById("texteApro").className="notHover"),!1===t.state.demo&&!1===t.state.apropos&&!0===t.state.logo&&!1===t.state.contact&&(t.setState({demo:!1,apropos:!1,logo:!1,contact:!0}),document.getElementById("texteContact").className="Hover"),!1===t.state.demo&&!1===t.state.apropos&&!1===t.state.logo&&!0===t.state.contact&&(t.setState({demo:!1,apropos:!1,logo:!0,contact:!1}),document.getElementById("texteContact").className="notHover")},t.apropo=function(){!0===t.state.demo&&!1===t.state.apropos&&!1===t.state.logo&&!1===t.state.contact&&(t.setState({demo:!1,apropos:!0,logo:!1,contact:!1}),document.getElementById("texteApro").className="Hover",document.getElementById("texteDemo").className="notHover",t.setState({playing:!1})),!1===t.state.demo&&!0===t.state.apropos&&!1===t.state.logo&&!1===t.state.contact&&(t.setState({demo:!1,apropos:!1,logo:!0,contact:!1}),document.getElementById("texteDemo").className="notHover",document.getElementById("texteApro").className="notHover",t.setState({playing:!1})),!1===t.state.demo&&!1===t.state.apropos&&!0===t.state.logo&&!1===t.state.contact&&(t.setState({demo:!1,apropos:!0,logo:!1,contact:!1}),document.getElementById("texteApro").className="Hover"),!1===t.state.demo&&!1===t.state.apropos&&!1===t.state.logo&&!0===t.state.contact&&(t.setState({demo:!1,apropos:!0,logo:!1,contact:!1}),document.getElementById("texteContact").className="notHover",document.getElementById("texteApro").className="Hover")},t.state={demo:!1,apropos:!1,logo:!0,contact:!1},t}return Object(l.a)(o,[{key:"render",value:function(){return Object(p.jsxs)("div",{className:"box",children:[Object(p.jsxs)("div",{className:"container",children:[this.state.logo&&Object(p.jsx)(u,{}),this.state.apropos&&Object(p.jsx)(x,{}),this.state.contact&&Object(p.jsx)(b,{}),this.state.demo&&Object(p.jsx)(j,{})]}),Object(p.jsx)("div",{className:"texteDemo",children:Object(p.jsx)("div",{id:"texteDemo",className:"notHover",onClick:this.demoReel,children:"demo reel  "})}),Object(p.jsx)("div",{className:"apropos",children:Object(p.jsx)("div",{id:"texteApro",className:"notHover",onClick:this.apropo,children:"\xe0 propos  "})}),Object(p.jsx)("div",{className:"texteContact",children:Object(p.jsx)("div",{id:"texteContact",className:"notHover",onClick:this.contact,children:" contact "})})]})}}]),o}(a.Component),O=function(t){t&&t instanceof Function&&o.e(3).then(o.bind(null,44)).then((function(e){var o=e.getCLS,a=e.getFID,s=e.getFCP,n=e.getLCP,c=e.getTTFB;o(t),a(t),s(t),n(t),c(t)}))};c.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(h,{})}),document.getElementById("root")),O()},8:function(t,e,o){}},[[43,1,2]]]);
//# sourceMappingURL=main.03ee9480.chunk.js.map