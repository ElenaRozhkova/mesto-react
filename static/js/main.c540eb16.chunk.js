(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(4),o=n.n(s),i=(n(11),n(2)),r=(n(12),n.p+"static/media/Vector.bbe2a6ea.svg"),p=n(0);var u=function(){return Object(p.jsx)("header",{className:"header root__section",children:Object(p.jsx)("img",{className:"header__logo",src:r,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f"})})},l=n(5),d=n(6),_=new(function(){function e(t){Object(l.a)(this,e),this._token=t.token,this._url=t.url}return Object(d.a)(e,[{key:"_getResponseData",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this._url,"/cards"),{headers:{authorization:this._token}}).then((function(t){return e._getResponseData(t)}))}},{key:"getProfileInfo",value:function(){var e=this;return fetch("".concat(this._url,"/users/me"),{headers:{authorization:this._token}}).then((function(t){return e._getResponseData(t)}))}},{key:"setProfileEdit",value:function(e,t){var n=this;return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e,about:t})}).then((function(e){return n._getResponseData(e)}))}},{key:"addCard",value:function(e,t){var n=this;return fetch("".concat(this._url,"/cards"),{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e,link:t})}).then((function(e){return n._getResponseData(e)}))}},{key:"addLike",value:function(e){var t=this;return fetch("".concat(this._url,"/cards/likes/").concat(e),{method:"PUT",headers:{authorization:this._token}}).then((function(e){return t._getResponseData(e)}))}},{key:"deleteLike",value:function(e){var t=this;return fetch("".concat(this._url,"/cards/likes/").concat(e),{method:"DELETE",headers:{authorization:this._token}}).then((function(e){return t._getResponseData(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",headers:{authorization:this._token}}).then((function(e){return t._getResponseData(e)}))}},{key:"changeAvatar",value:function(e){var t=this;return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({avatar:e})}).then((function(e){return t._getResponseData(e)}))}}]),e}())({url:"https://mesto.nomoreparties.co/v1/cohort-25",token:"e2f184c2-a2b5-47dc-b13c-5faef2aabe75"}),j=n.p+"static/media/avataricon.ae1a976d.svg";var m=function(e){return Object(p.jsxs)("article",{className:"card",id:"card",children:[Object(p.jsx)("img",{className:"card__image",src:e.card.link,alt:e.card.name,onClick:function(){e.onCardClick(e.card)}}),Object(p.jsxs)("div",{className:"card__text",children:[Object(p.jsx)("h2",{className:"card__title",children:e.card.name}),Object(p.jsxs)("div",{className:"card__like-group",children:[Object(p.jsx)("button",{type:"button",className:"card__vector-like"}),Object(p.jsx)("label",{className:"card__amount-like",children:e.card.likes.length})]})]}),Object(p.jsx)("button",{type:"button",className:"card__vector-delete card__vector-delete_type_activ"})]})};var b=function(e){var t=c.a.useState(),n=Object(i.a)(t,2),a=n[0],s=n[1],o=c.a.useState(),r=Object(i.a)(o,2),u=r[0],l=r[1],d=c.a.useState(),b=Object(i.a)(d,2),h=b[0],f=b[1];return c.a.useEffect((function(){_.getProfileInfo().then((function(e){s(e.name),l(e.about),f(e.avatar)})).catch((function(e){console.log(e)})).finally((function(){}))}),[]),Object(p.jsxs)("main",{className:"content",children:[Object(p.jsxs)("section",{className:"profile root__section",children:[Object(p.jsxs)("div",{className:"profile__avatar-info",children:[Object(p.jsxs)("div",{className:"profile__change-avatar",children:[Object(p.jsx)("div",{className:"profile__avatar",style:{backgroundImage:"url(".concat(h,")")}}),Object(p.jsx)("img",{onClick:e.onEditAvatar,className:"profile__edit-icon",src:j,alt:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"})]}),Object(p.jsxs)("div",{className:"profile__info",children:[Object(p.jsxs)("div",{className:"profile__info-name",children:[Object(p.jsx)("h1",{className:"profile__name",children:a}),Object(p.jsx)("button",{onClick:e.onEditProfile,type:"button",className:"profile__edit-button","aria-label":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"})]}),Object(p.jsx)("p",{className:"profile__job",children:u})]})]}),Object(p.jsx)("button",{type:"button",onClick:e.onAddPlace,className:"profile__add-button","aria-label":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]}),Object(p.jsx)("section",{className:"cards root__section",id:"cards",children:e.cards.map((function(t,n){return Object(p.jsx)("div",{children:Object(p.jsx)(m,{card:t,onCardClick:e.onCardClick})},n)}))})]})};var h=function(){return Object(p.jsx)("footer",{className:"footer root__section",children:Object(p.jsx)("p",{className:"footer__copyright",children:" \xa9 2021 Mesto Russia"})})};var f=function(e){return Object(p.jsx)("div",{className:"popup popup_type_".concat(e.name," ").concat(e.isOpen?"popup_opened":""),children:Object(p.jsx)("div",{className:"popup__container popup__container-".concat(e.name),children:Object(p.jsx)("form",{className:"popup__form popup__form-".concat(e.name),children:Object(p.jsxs)("fieldset",{className:"popup__form-set",children:[Object(p.jsx)("button",{type:"button",onClick:e.onClose,className:"popup__close popup__close_type_".concat(e.name),children:Object(p.jsx)("div",{className:"popup__close-icon"})}),Object(p.jsx)("h2",{className:"popup__title",children:e.title}),e.children]})})})})};var O=function(e){return Object(p.jsx)("div",{className:"popup popup_type_img ".concat(e.card.link?"popup_opened":""),children:Object(p.jsxs)("form",{id:"imagePopup",className:"popup__img",children:[Object(p.jsx)("button",{type:"button",className:"popup__close popup__close_type_img",onClick:e.onClose,children:Object(p.jsx)("div",{className:"popup__close-icon"})}),Object(p.jsx)("img",{className:"popup__image",src:"".concat(e.card.link),alt:"\u0421\u0441\u044b\u043b\u043a\u0430"}),Object(p.jsx)("label",{type:"text",className:"popup__name",name:"nameInputImage",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",required:!0,children:e.card.name})]})})};var x=function(){var e=c.a.useState(!1),t=Object(i.a)(e,2),n=t[0],a=t[1],s=c.a.useState(!1),o=Object(i.a)(s,2),r=o[0],l=o[1],d=c.a.useState(!1),j=Object(i.a)(d,2),m=j[0],x=j[1],v=c.a.useState([]),N=Object(i.a)(v,2),y=N[0],k=N[1],g=c.a.useState({}),C=Object(i.a)(g,2),E=C[0],P=C[1];function S(){x(!1),a(!1),l(!1),P({})}return c.a.useEffect((function(){_.getInitialCards().then((function(e){k(e)})).catch((function(e){console.log(e)})).finally((function(){}))}),[]),c.a.useEffect((function(){var e=function(e){27===e.keyCode&&S()};return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}),[]),c.a.useEffect((function(){var e=function(e){e.target.classList.contains("popup")&&S()};return document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}}),[]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{className:"root-page"}),Object(p.jsxs)("div",{className:"root",children:[Object(p.jsx)(u,{}),Object(p.jsx)(b,{cards:y,onCardClick:function(e){P(e)},onEditAvatar:function(){x(!0)},onEditProfile:function(){a(!0)},onAddPlace:function(){l(!0)}}),Object(p.jsx)(h,{})]}),Object(p.jsx)(f,{name:"edit",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",isOpen:n,onClose:S,children:Object(p.jsxs)("div",{className:"form__container",children:[Object(p.jsx)("input",{type:"text",className:"popup__input popup__input_type_name",id:"name",name:"nameInput",placeholder:"\u0418\u043c\u044f",required:!0}),Object(p.jsx)("span",{className:"popup__input-error name-error"}),Object(p.jsx)("input",{type:"text",className:"popup__input popup__input_type_job",id:"job",name:"jobInput",placeholder:"\u041e \u0441\u0435\u0431\u0435",required:!0}),Object(p.jsx)("span",{className:"popup__input-error job-error"}),Object(p.jsx)("button",{type:"submit",className:"popup__button",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})}),Object(p.jsx)(f,{name:"add",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",isOpen:r,onClose:S,children:Object(p.jsxs)("div",{className:"form__container",children:[Object(p.jsx)("input",{type:"text",className:"popup__input popup__input_type_text",id:"add",name:"name",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",required:!0}),Object(p.jsx)("span",{className:"popup__input-error add-error"}),Object(p.jsx)("input",{type:"url",className:"popup__input popup__input_type_link",id:"url",name:"link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0}),Object(p.jsx)("span",{className:"popup__input-error url-error"}),Object(p.jsx)("button",{type:"submit",className:"popup__button popup__button_type_add",children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"})]})}),Object(p.jsx)(f,{name:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",isOpen:m,onClose:S,children:Object(p.jsxs)("div",{className:"form__container",children:[Object(p.jsx)("input",{type:"url",className:"popup__input popup__input_type_text",id:"avatar",name:"avatar",placeholder:"https://somewebsite.com/someimage.jpg",required:!0}),Object(p.jsx)("span",{className:"popup__input-error avatar-error"}),Object(p.jsx)("button",{type:"submit",className:"popup__button popup__button_type_add",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})}),Object(p.jsx)("div",{className:"popup popup_type_question",children:Object(p.jsx)("div",{className:"popup__container",children:Object(p.jsx)("form",{id:"newQuestionPopup",name:"questionPopup",className:"popup__form",children:Object(p.jsxs)("fieldset",{className:"popup__form-set",children:[Object(p.jsx)("button",{type:"button",className:"popup__close popup__close_type_question",children:Object(p.jsx)("div",{className:"popup__close-icon"})}),Object(p.jsx)("label",{className:"popup__title popup__title_type_question",children:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?"}),Object(p.jsx)("button",{type:"submit",className:"popup__button popup__button_type_question",children:"\u0414\u0430"})]})})})}),Object(p.jsx)(O,{card:E,onClose:S})]})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),s(e),o(e)}))};o.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(x,{})}),document.getElementById("root")),v()}},[[14,1,2]]]);
//# sourceMappingURL=main.c540eb16.chunk.js.map