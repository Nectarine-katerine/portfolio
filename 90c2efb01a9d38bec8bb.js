(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{386:function(t,e,s){},399:function(t,e,s){"use strict";var i=s(386);s.n(i).a},406:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",{staticClass:"admin-reviews__item admin-block",class:{edited:t.editedReview.id===t.review.id}},[s("div",{staticClass:"admin-block__header"},[s("div",{staticClass:"reviews__author"},[s("div",{staticClass:"avatar avatar__w50 reviews__avatar"},[s("img",{staticClass:"avatar__img",attrs:{src:"https://webdev-api.loftschool.com/"+t.review.photo}})]),s("div",{staticClass:"reviews__author-data"},[s("div",{staticClass:"reviews__name"},[t._v(t._s(t.review.author))]),s("div",{staticClass:"reviews__post"},[t._v(t._s(t.review.occ))])])])]),s("div",{staticClass:"admin-block__content"},[s("div",{staticClass:"admin-reviews__text"},[s("p",[t._v(t._s(t.review.text))])])]),s("div",{staticClass:"admin-block__footer"},[s("div",{staticClass:"controls"},[s("ul",{staticClass:"controls__list admin-reviews__controls"},[s("li",{staticClass:"controls__item"},[s("button",{staticClass:"controls__btn",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.editThisReview(t.review)}}},[s("span",{staticClass:"controls__text"},[t._v("Править")]),s("div",{staticClass:"controls__icon controls__icon_pencil"})])]),s("li",{staticClass:"controls__item"},[s("button",{staticClass:"controls__btn",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.deleteReview(t.review.id)}}},[s("span",{staticClass:"controls__text"},[t._v("Удалить")]),s("div",{staticClass:"controls__icon controls__icon_cross"})])])])])])])};i._withStripped=!0;var r=s(96);function n(t,e,s,i,r,n,a){try{var o=t[n](a),c=o.value}catch(t){return void s(t)}o.done?e(c):Promise.resolve(c).then(i,r)}function a(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{},i=Object.keys(s);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(s).filter(function(t){return Object.getOwnPropertyDescriptor(s,t).enumerable}))),i.forEach(function(e){o(t,e,s[e])})}return t}function o(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var c={props:{review:Object},data:function(){return{}},methods:a({},Object(r.b)("reviews",["removeReview"]),Object(r.b)("errors",["setError"]),{deleteReview:function(){var t,e=(t=regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.removeReview(e);case 3:this.setError({message:"Отзыв удален",type:"success"}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),this.setError({message:t.t0,type:"error"});case 9:case"end":return t.stop()}},t,this,[[0,6]])}),function(){var e=this,s=arguments;return new Promise(function(i,r){var a=t.apply(e,s);function o(t){n(a,i,r,o,c,"next",t)}function c(t){n(a,i,r,o,c,"throw",t)}o(void 0)})});return function(t){return e.apply(this,arguments)}}(),editThisReview:function(t){this.$emit("editReview",t)}}),computed:a({},Object(r.d)("reviews",{editedReview:function(t){return t.editedReview}}))},l=(s(399),s(51)),v=Object(l.a)(c,i,[],!1,null,"cb42c6d8",null);v.options.__file="src/admin/components/reviews/reviews-list.vue";e.default=v.exports}}]);