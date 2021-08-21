(this["webpackJsonpsolar-connect"]=this["webpackJsonpsolar-connect"]||[]).push([[0],{201:function(e,n,t){"use strict";t.r(n);var o,c=t(12),i=t(0),r=t.n(i),d=t(20),a=t.n(d),s=t(13),l=(t(126),t(206)),b=t(207),j=t(203),u=t(39),x=t(57),p=t(6);function O(e){return Object(p.jsx)(x.a,{style:Object(u.a)({fontSize:"large"===e.size?48:24},e.style),spin:!0})}var f=Object(s.c)(l.a)(o||(o=Object(c.a)(["\n\tbackground-color: ",";\n"])),(function(e){return e["data-mask"]?"rgba(0, 0, 0, 0.1)":"transparent"}));function g(e){var n=e.tip,t=e.size,o=e.delay,c=e.style,i=e.mask,r=void 0!==i&&i;return Object(p.jsx)(f,{className:"spinner-wrap",justify:"center",align:"middle",style:c,"data-mask":r,children:Object(p.jsx)(b.a,{children:Object(p.jsx)(j.a,{indicator:Object(p.jsx)(O,{size:t}),delay:o,tip:n,size:t})})})}g.defaultProps={tip:"\ub85c\ub529\uc911\uc785\ub2c8\ub2e4.",size:"large",delay:0,style:{},mask:!1};var h,m=t(27),v=[],y=s.c.div(h||(h=Object(c.a)(["\n  width: 70%;\n  height: 800px;\n\n  min-width: 360px;\n  max-width: 700px;\n\n  position: relative;\n  background: white;\n  border-radius: 30px;\n  box-shadow: 0 0 50px 0 rgba(0, 0, 0, 0.1);\n\n  margin: 0 auto;\n\n  margin-top: 96px;\n  margin-bottom: 32px;\n  display: flex;\n  flex-direction: column;\n"])));function S(e){return Object(p.jsx)(y,{children:e.children})}var T,w,k,z,I,M,N,C,F,D,J,E,A,W,B,H,P=r.a.memo(S),Y=s.c.div(T||(T=Object(c.a)(["\n  display: flex;\n  justify-content: center;\n  padding-top: 52px;\n  padding-bottom: 24px;\n  border-bottom: 3px solid #33bb77;\n"]))),q=s.c.div(w||(w=Object(c.a)(["\n  font-size: 26px;\n  color: #119955;\n  padding-left: 10px;\n"]))),G=s.c.div(k||(k=Object(c.a)(["\n  font-size: 22px;\n  color: #119955;\n  padding-top: 5px;\n"]))),K=["Sun","Mon","Tue","Wed","Thur","Fri","Sat"],L=["January","February","March","April","May","June","July","August","September","October","November","December"],Q=function(){var e=Object(i.useState)(""),n=Object(m.a)(e,2),t=n[0],o=n[1],c=Object(i.useState)(""),r=Object(m.a)(c,2),d=r[0],a=r[1],s=function(){var e=function(){var e=new Date;return{day:K[e.getDay()],months:L[e.getMonth()],dates:String(e.getDate()).padStart(2,"0"),years:e.getFullYear(),hours:String(e.getHours()).padStart(2,"0"),mins:String(e.getMinutes()).padStart(2,"0")}}(),n=e.dates,t=e.day,c=e.hours,i=e.mins,r=e.months,d=e.years;o(t),a("".concat(r," ").concat(n,", ").concat(d," ").concat(c,":").concat(i))};return Object(i.useEffect)((function(){s(),setInterval((function(){s()}),1e3)}),[]),Object(p.jsxs)(Y,{children:[Object(p.jsx)(G,{children:t}),Object(p.jsx)(q,{children:d})]})},R=r.a.memo(Q),U=t(209),V=t(210),X=s.c.div(z||(z=Object(c.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #119955;\n  font-size: 16px;\n"]))),Z=s.c.div(I||(I=Object(c.a)(["\n  display: flex;\n  align-items: center;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  &:hover {\n    "," {\n      display: initial;\n    }\n  }\n"])),X),$=s.c.div(M||(M=Object(c.a)(["\n  width: 20px;\n  height: 20px;\n  border-radius: 16px;\n  border: 1px solid #33bb77;\n  font-size: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 20px;\n  cursor: pointer;\n  ","\n"])),(function(e){return e.done&&Object(s.b)(N||(N=Object(c.a)(["\n      border: 1px solid #dddddd;\n      color: #dddddd;\n    "])))})),_=s.c.div(C||(C=Object(c.a)(["\n  flex: 1;\n  font-size: 16px;\n  color: #119955;\n  ","\n"])),(function(e){return e.done&&Object(s.b)(F||(F=Object(c.a)(["\n      color: #ced4da;\n      text-decoration: line-through;\n    "])))})),ee=function(e){var n=e.toggleTodo,t=e.removeTodo,o=e.todo,c=Object(i.useState)(!1),r=Object(m.a)(c,2),d=r[0],a=r[1];return Object(p.jsxs)(Z,{children:[Object(p.jsx)($,{done:d,onClick:function(){n(o.id),a(!d)},children:d&&Object(p.jsx)(U.a,{})}),Object(p.jsx)(_,{done:d,children:o.text}),Object(p.jsx)(_,{done:d,children:o.deadline&&"\uae30\ud55c: ".concat(o.deadline)}),Object(p.jsx)(X,{onClick:function(){t(o.id)},children:Object(p.jsx)(V.a,{})})]})},ne=r.a.memo(ee),te=s.c.div(D||(D=Object(c.a)(["\n  flex: 1;\n  padding: 20px 32px;\n  padding-bottom: 48px;\n  overflow-y: auto;\n"]))),oe=function(e){var n=e.toggleTodo,t=e.removeTodo,o=e.todos;return Object(p.jsx)(te,{children:o&&o.map((function(e){return Object(p.jsx)(ne,{toggleTodo:n,removeTodo:t,todo:e},e.id)}))})},ce=r.a.memo(oe),ie=t(211),re=t(208),de=t(204),ae=function(e){var n=e.handleChangeDeadline;return Object(p.jsx)(re.b,{direction:"vertical",children:Object(p.jsx)(de.a,{style:{width:130,height:60},onChange:n})})},se=t(205),le=function(e){var n=e.isModal,t=e.setIsModal;return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(se.a,{title:"\uc785\ub825 \uc624\ub958",visible:n,onOk:function(){t(!1)},onCancel:function(){t(!1)},children:Object(p.jsx)("p",{children:"\ube48\uce78\uc744 \ucc44\uc6cc\uc8fc\uc138\uc694."})})})},be=s.c.button(J||(J=Object(c.a)(["\n  background: #33bb77;\n  width: 50px;\n  height: 50px;\n  align-items: center;\n  justify-content: center;\n  font-size: 60px;\n  left: 50%;\n  transform: translate(50%, 0%);\n  color: white;\n  border-radius: 50%;\n  border: none;\n  outline: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),je=s.c.div(E||(E=Object(c.a)(["\n  width: 100%;\n  border-bottom: 1px solid #eeeeee;\n"]))),ue=s.c.form(A||(A=Object(c.a)(["\n  display: flex;\n  background: #eeeeee;\n  padding-left: 40px;\n  padding-top: 36px;\n  padding-right: 60px;\n  padding-bottom: 36px;\n"]))),xe=s.c.input(W||(W=Object(c.a)(["\n  padding: 12px;\n  border: 1px solid #dddddd;\n  width: 100%;\n  outline: none;\n  font-size: 21px;\n  box-sizing: border-box;\n  color: #119955;\n  &::placeholder {\n    color: #dddddd;\n    font-size: 16px;\n  }\n"]))),pe=function(e){var n=e.nextId,t=e.createTodo,o=e.incrementNextId,c=Object(i.useState)(!1),r=Object(m.a)(c,2),d=r[0],a=r[1],s=Object(i.useState)(""),l=Object(m.a)(s,2),b=l[0],j=l[1],u=Object(i.useState)(""),x=Object(m.a)(u,2),O=x[0],f=x[1],g=Object(i.useState)(!1),h=Object(m.a)(g,2),v=h[0],y=h[1];return Object(p.jsxs)(p.Fragment,{children:[v&&Object(p.jsx)(le,{isModal:v,setIsModal:y}),Object(p.jsx)(je,{children:Object(p.jsxs)(ue,{onSubmit:function(e){e.preventDefault(),""!==b?(t({id:n,text:b,done:!1,deadline:O}),o(),j(""),f(""),a(!1)):y((function(e){return!e}))},children:[Object(p.jsx)(xe,{autoFocus:!0,placeholder:"What's need to be done?",onChange:function(e){j(e.target.value)},value:b}),Object(p.jsx)(ae,{handleChangeDeadline:function(e,n){var t=n.split("-").splice(1,2).join(".");f(t)}}),Object(p.jsx)(be,{onClick:function(){return a(!d)},open:d,children:Object(p.jsx)(ie.a,{})})]})})]})},Oe=r.a.memo(pe),fe=s.c.div(B||(B=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  padding-top: 24px;\n  padding-bottom: 24px;\n"]))),ge=s.c.div(H||(H=Object(c.a)(["\n  color: #33bb77;\n  font-size: 18px;\n"]))),he=function(e){var n=e.todos,t=null===n||void 0===n?void 0:n.filter((function(e){return!e.done}));return Object(p.jsx)(fe,{children:Object(p.jsxs)(ge,{className:"tasks-left",children:[null===t||void 0===t?void 0:t.length," items left"]})})},me=r.a.memo(he),ve=function(){var e=function(){var e=Object(i.useState)(v),n=Object(m.a)(e,2),t=n[0],o=n[1],c=0;Object(i.useEffect)((function(){d()}),[]),Object(i.useEffect)((function(){a()}),[t]);var r=function(){c+=1},d=function(){var e=localStorage.getItem("todos");void 0===e&&(e=""),(v=JSON.parse(e))&&v.length>=1&&r(),o(v)},a=function(){localStorage.setItem("todos",JSON.stringify(t))};return{todoState:t,nextIdState:c,incrementNextId:r,toggleTodo:function(e){o((function(n){return n.map((function(n){return n.id===e?Object(u.a)(Object(u.a)({},n),{},{done:!n.done}):Object(u.a)({},n)}))}))},removeTodo:function(e){o((function(n){return n.filter((function(n){return n.id!==e}))}))},createTodo:function(e){var n=(null===t||void 0===t?void 0:t.length)+1;o((function(t){return null===t||void 0===t?void 0:t.concat(Object(u.a)(Object(u.a)({},e),{},{id:n}))}))}}}(),n=e.todoState,t=e.nextIdState,o=e.incrementNextId,c=e.toggleTodo,r=e.removeTodo,d=e.createTodo;return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)(P,{children:[Object(p.jsx)(R,{}),Object(p.jsx)(Oe,{nextId:t,createTodo:d,incrementNextId:o}),Object(p.jsx)(ce,{toggleTodo:c,removeTodo:r,todos:n}),Object(p.jsx)(me,{todos:n})]})})};var ye,Se=function(){return Object(p.jsx)("div",{children:Object(p.jsx)(ve,{})})},Te=Object(s.a)(ye||(ye=Object(c.a)(["\n  body {\n    background: #eeeeee;\n  }\n"])));a.a.render(Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(Te,{}),Object(p.jsx)(Se,{})]}),document.getElementById("root"))}},[[201,1,2]]]);
//# sourceMappingURL=main.68d4216b.chunk.js.map