(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{197:function(t,n,e){"use strict";e.r(n);var a=e(1),o=e.n(a),r=e(79),i=e.n(r),c=(e(93),e(9)),s=e(3),l=e(4),b=e(7),d=e(8),p=e(44),u=e(87),x=e(19),m=e(10);var h=Object(m.a)("div",{target:"eacsz310"})({name:"xsihsn",styles:"width:100%;height:100vh;padding:0 15px;margin:0 auto"}),g=e(2);var j,f,O=function(t){var n=t.children;return Object(g.jsx)(h,{children:n})},v=e(20),y=e(21),w=y.a.div(j||(j=Object(v.a)(["\n\n  width: 500px;\n  display: block;\n  padding: 20px 30px;\n  margin: 0 auto;\n  margin-top: 40px;\n\n  text-align: center;\n\n  background-color: var(--bg-section);\n  color: var(--text-color-main);\n  border-radius: 4px;\n  box-shadow: 4px 4px 8px 0px rgba(154, 158, 171, 0.2);\n\n  &:not(:last-child) {\n    margin-bottom: 30px;\n  }\n"]))),k=y.a.h2(f||(f=Object(v.a)(["\n  display: inline-block;\n  align-items: baseline;\n  margin: 0;\n  margin-bottom: 20px;\n  margin-right: 10px;\n  font-size: 32px;\n  font-weight: 700;\n\n  text-align: center;\n\n\n"])));var C=function(t){var n=t.title,e=t.children;return Object(g.jsxs)(w,{children:[Object(g.jsx)(k,{children:n})," ",e]})},S=e(22),z=e(32),F=(e(196),e(199));var N,D,I,P=Object(m.a)(S.c,{target:"esootih4"})({name:"5kov97",styles:"display:flex;flex-wrap:wrap"}),q=Object(m.a)("label",{target:"esootih3"})({name:"97q7l3",styles:"display:inline-block;align-items:baseline;text-align:start;font-size:20px;margin-bottom:20px;&>svg{margin-right:10px;}"}),J=Object(m.a)(S.b,{target:"esootih2"})({name:"ulqorw",styles:"display:block;margin-top:5px;margin-bottom:5px;width:400px;height:35px;border:none;border-radius:4px;padding-left:15px;color:#444c5c;&:placeholder-shown{font-size:14px;}&:hover,&:focus{outline:none;border:1px solid #444c5c;box-shadow:3px 4px 5px 0px rgb(120 165 163 / 20%);}"}),L=Object(m.a)("button",{target:"esootih1"})({name:"bsm6j6",styles:"display:block;background-color:white;border:none;border-radius:4px;outline:none;padding:8px 16px;color:#ec96a4;font-weight:bold;font-size:14px;line-height:24px;text-transform:uppercase;cursor:pointer;margin:0 auto;margin-top:15px;transition:all 300ms linear;&:hover,&:focus{color:#f1f1f2;background-color:#444c5c;transform:scale(1.03);}"}),A=Object(m.a)("div",{target:"esootih0"})({name:"spwlyl",styles:"font-size:14px;color:var(--notification-color);margin-bottom:10px"}),T=z.object({name:z.string().required("Please enter contact name"),number:z.string().phone("UA",!0,"Please enter a valid phone number").required()}),B=function(t){var n=t.onSubmit;return Object(g.jsx)("div",{children:Object(g.jsx)(S.d,{initialValues:{name:"",number:""},validationSchema:T,onSubmit:function(t,e){var a=e.setSubmitting,o=e.resetForm,r=t.name,i=t.number;n({id:Object(F.a)(),name:r,number:i}),o(),a(!1)},children:function(t){var n=t.touched;return Object(g.jsxs)(P,{autoComplete:"off",children:[Object(g.jsxs)(q,{htmlFor:"firstName",children:[Object(g.jsx)(x.d,{size:"16"}),"Name",Object(g.jsx)(J,{type:"text",name:"name",placeholder:"Name"}),Object(g.jsx)(S.a,{name:"name",component:A})]}),Object(g.jsxs)(q,{htmlFor:"firstName",children:[Object(g.jsx)(x.b,{size:"16"}),"Number",Object(g.jsx)(J,{type:"text",name:"number",placeholder:"38(***) *** ****"}),n.number&&Object(g.jsx)(S.a,{name:"number",component:A})]}),Object(g.jsx)(L,{type:"submit",children:"Add Contact"})]})}})})},M=e(86),U=e(85),E=y.a.ul(N||(N=Object(v.a)(["\n  padding: 0;\n  list-style: none;\n  margin:0;\n  margin-top: 35px;\n\n  font-size: 17px;\n"]))),V=y.a.li(D||(D=Object(v.a)(["\n\n  border: 1px solid white;\n  border-radius: 5px;\n  padding: 8px;\n  display: flex;\n  align-items: center;\n  \n\n  &:not(:last-child) {\n    margin-bottom: 15px;\n  }\n  &>svg{\n    margin-right: 10px;\n  }\n"]))),G=y.a.button(I||(I=Object(v.a)(["\n  display: inline-flex;\n  align-items: center;\n\n  background-color: white;\n  border: none;\n  border-radius: 4px;\n  outline: none;\n  padding: 4px 8px;\n  color: var(--text-color-accent);\n  \n  font-size: 17px;\n  line-height: 20px;\n  text-transform: capitalize;\n\n  cursor: pointer;\n\n  transition: all 300ms linear;\n  margin-left: auto;\n\n  &:hover,\n  &:focus {\n    color: #f1f1f2;\n    background-color: #444c5c;\n    transform: scale(1.03);\n  }\n  & > svg {\n    margin-left: 8px;\n  }\n"])));var H=function(t){var n=t.contacts,e=t.onDeleteContact;return Object(g.jsx)(E,{children:n.map((function(t){return Object(g.jsxs)(V,{children:[Object(g.jsx)(U.a,{size:"17"}),t.name,":  ",t.number,Object(g.jsxs)(G,{type:"button",onClick:function(){return e(t.id)},children:["Delete",Object(g.jsx)(M.a,{})]})]},t.id)}))})};var K=Object(m.a)("input",{target:"e16t0fpd1"})({name:"sbgurg",styles:"&:hover,&:focus{outline:none;border:1px solid #444c5c;box-shadow:3px 4px 5px 0px rgb(120 165 163 / 20%);}"}),Q=Object(m.a)("label",{target:"e16t0fpd0"})({name:"3fo4ic",styles:"text-align:start;display:inline-block;align-items:baseline;font-size:20px;&:not(:last-child){margin-bottom:10px;}& input{margin-top:5px;width:400px;height:35px;border:none;border-radius:4px;}&>svg{margin-right:10px;}"});var R=function(t){var n=t.value,e=t.onChange;return Object(g.jsx)("div",{children:Object(g.jsxs)(Q,{children:[Object(g.jsx)(x.c,{size:"14"}),"Find contacts by name",Object(g.jsx)(K,{type:"text",name:"filter",title:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u043f\u0440\u043e\u0441 \u0434\u043b\u044f \u043f\u043e\u0438\u0441\u043a\u0430",required:!0,onChange:e,value:n})]})})},W=function(t){Object(b.a)(e,t);var n=Object(d.a)(e);function e(){var t;Object(s.a)(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=n.call.apply(n,[this].concat(o))).state={contacts:[],filter:""},t.addContact=function(n){t.state.contacts.find((function(t){return t.name===n.name}))?p.b.error("".concat(n.name," is already in contacts."),{duration:4e3,position:"top-right"}):(t.setState((function(t){var e=t.contacts;return{contacts:[n].concat(Object(c.a)(e))}})),p.b.success("Contact ".concat(n.name," added to Phonebook"),{duration:4e3,position:"top-right"}))},t.changeFilter=function(n){t.setState({filter:n.currentTarget.value})},t.onInputSearch=function(){var n=t.state,e=n.filter,a=n.contacts,o=e.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(o)}))},t.deleteContact=function(n){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==n}))}}))},t}return Object(l.a)(e,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),n=JSON.parse(t);n&&this.setState({contacts:n})}},{key:"componentDidUpdate",value:function(t){t.contacts!==this.state.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.state.filter,n=this.onInputSearch();return Object(g.jsxs)(O,{children:[Object(g.jsx)(p.a,{}),Object(g.jsxs)(C,{title:"Phonebook",children:[Object(g.jsx)(x.a,{size:"24"}),Object(g.jsx)(B,{onSubmit:this.addContact})]}),Object(g.jsxs)(C,{title:"Contacts",children:[Object(g.jsx)(u.a,{size:"26"}),Object(g.jsx)(R,{onChange:this.changeFilter,value:t}),Object(g.jsx)(H,{contacts:n,onDeleteContact:this.deleteContact})]})]})}}]),e}(a.Component),X=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,200)).then((function(n){var e=n.getCLS,a=n.getFID,o=n.getFCP,r=n.getLCP,i=n.getTTFB;e(t),a(t),o(t),r(t),i(t)}))};i.a.render(Object(g.jsx)(o.a.StrictMode,{children:Object(g.jsx)(W,{})}),document.getElementById("root")),X()},93:function(t,n,e){}},[[197,1,2]]]);
//# sourceMappingURL=main.78e27dcc.chunk.js.map