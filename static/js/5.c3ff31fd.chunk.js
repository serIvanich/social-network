(this["webpackJsonpreact-kabzda-1"]=this["webpackJsonpreact-kabzda-1"]||[]).push([[5],{239:function(e,t,s){e.exports={formControl:"FormsControls_formControl__1Px8x",error:"FormsControls_error__2dzJ9",formSummaryError:"FormsControls_formSummaryError__2pFC1",captcha:"FormsControls_captcha__j12X_"}},240:function(e,t,s){"use strict";s.d(t,"b",(function(){return d})),s.d(t,"a",(function(){return j})),s.d(t,"c",(function(){return l}));var a=s(3),n=s(243),r=(s(0),s(121)),c=s(239),i=s.n(c),o=s(1),u=function(e){e.input;var t=e.meta,s=Object(n.a)(e,["input","meta"]),a=t.touched&&t.error;return Object(o.jsxs)("div",{className:i.a.formControl+" "+(a?i.a.error:""),children:[Object(o.jsx)("div",{children:s.children}),a&&Object(o.jsx)("span",{children:t.error})]})},d=function(e){var t=e.input,s=(e.meta,e.children,Object(n.a)(e,["input","meta","children"]));return Object(o.jsx)(u,Object(a.a)(Object(a.a)({},e),{},{children:Object(o.jsx)("textarea",Object(a.a)(Object(a.a)({},t),s))}))},j=function(e){var t=e.input,s=(e.meta,e.children,Object(n.a)(e,["input","meta","children"]));return Object(o.jsx)(u,Object(a.a)(Object(a.a)({},e),{},{children:Object(o.jsx)("input",Object(a.a)(Object(a.a)({},t),s))}))};function l(e,t,s,n,c){var i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(o.jsxs)("div",{children:[Object(o.jsx)(r.a,Object(a.a)({placeholder:e,name:t,validate:s,component:n},c))," ",i]})}},241:function(e,t,s){"use strict";s.d(t,"b",(function(){return a})),s.d(t,"a",(function(){return n}));var a=function(e){if(!e)return"Field is required"},n=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},246:function(e,t,s){e.exports={dialogs:"Dialogs_dialogs__2tfwq",dialogsItem:"Dialogs_dialogsItem__3XXR4",dialog:"Dialogs_dialog__2066d",active:"Dialogs_active__22mwi",messages:"Dialogs_messages__2GgNH",message:"Dialogs_message__3rjD7"}},251:function(e,t,s){"use strict";s.d(t,"a",(function(){return u}));var a=s(3),n=s(243),r=(s(0),s(11)),c=s(8),i=s(1),o=function(e){return{isAuth:e.auth.isAuth}};function u(e){return Object(r.b)(o)((function(t){t.isAuth;var s=Object(n.a)(t,["isAuth"]);return!1===t.isAuth?Object(i.jsx)(c.a,{to:"/login"}):Object(i.jsx)(e,Object(a.a)({},s))}))}},309:function(e,t,s){"use strict";s.r(t);var a=s(83),n=(s(0),s(246)),r=s.n(n),c=s(15),i=s(1),o=function(e){var t="/dialogs/".concat(e.id);return Object(i.jsx)("div",{className:r.a.dialog,children:Object(i.jsxs)(c.b,{to:t,activeClassName:r.a.active,children:[Object(i.jsx)("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRMx6nyE6BtBUpxyikA6w1afyKRpCc1M38QrA&usqp=CAU"}),e.name]})})},u=function(e){return Object(i.jsxs)("div",{className:r.a.message,children:[Object(i.jsx)("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRMx6nyE6BtBUpxyikA6w1afyKRpCc1M38QrA&usqp=CAU"}),"-",e.message]})},d=s(122),j=s(241),l=s(240),m=Object(j.a)(30),b=Object(d.a)({form:"dialogsMessage"})((function(e){return Object(i.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(l.c)("enter you message","newMessage",[j.b,m],l.b),Object(i.jsx)("button",{children:"new post"})]})})),g=function(e){var t=e.dialogs.map((function(e){return Object(i.jsx)(o,{name:e.name,id:e.id},e.id)})),s=e.myMessages.map((function(e){return Object(i.jsx)(u,{message:e.message},e.id)})),a=e.friendsMessages.map((function(e){return Object(i.jsx)(u,{message:e.message},e.id)}));return Object(i.jsxs)("div",{className:r.a.dialogs,children:[Object(i.jsx)("div",{className:r.a.dialogsItem,children:t}),Object(i.jsx)("div",{className:r.a.messages,children:s}),Object(i.jsx)("div",{className:r.a.messages,children:a}),Object(i.jsx)(b,{onSubmit:function(t){e.sendMessage(t.newMessage)}})]})},f=s(11),O=s(251),h=s(21);t.default=Object(h.d)(Object(f.b)((function(e){return{dialogs:e.dialogsPage.dialogs,myMessages:e.dialogsPage.myMessages,friendsMessages:e.dialogsPage.friendsMessages,newMessageBody:e.dialogsPage.newMessageBody}}),{sendMessage:a.a.sendMessage}),O.a)(g)}}]);
//# sourceMappingURL=5.c3ff31fd.chunk.js.map