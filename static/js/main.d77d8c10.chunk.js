(this.webpackJsonpreact_article=this.webpackJsonpreact_article||[]).push([[0],{17:function(e,t,i){e.exports=i(32)},27:function(e,t,i){},29:function(e,t,i){},30:function(e,t,i){},31:function(e,t,i){},32:function(e,t,i){"use strict";i.r(t);var a=i(0),n=i.n(a),r=i(3),s=i.n(r),c=i(5),u=i(11),l=(i(27),i(1)),o=i.n(l),m=function(){return n.a.createElement("div",{className:"heading"},n.a.createElement("h1",{className:"heading__title"},"\u0417\u0430\u043f\u0438\u0441\u044c \u043d\u0430 \u0442\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043a\u0438 \u043e\u043d\u043b\u0430\u0439\u043d"),n.a.createElement("p",{className:"heading__list-title"},"\u041d\u0430 \u043d\u0430\u0448\u0435\u043c \u0441\u0430\u0439\u0442\u0435 \u0432\u044b \u0441\u043c\u043e\u0436\u0435\u0442\u0435:"),n.a.createElement("ul",{className:"heading__list"},n.a.createElement("li",{className:"heading__item"},"\u0423\u0437\u043d\u0430\u0442\u044c \u0440\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0442\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043e\u043a \u0432 \u0441\u043f\u043e\u0440\u0442\u0438\u0432\u043d\u044b\u0445 \u043a\u043b\u0443\u0431\u0430\u0445"),n.a.createElement("li",{className:"heading__item"},"\u0417\u0430\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f \u043d\u0430 \u0442\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043a\u0443"),n.a.createElement("li",{className:"heading__item"},"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u0430\u0431\u043e\u043d\u0435\u043c\u0435\u043d\u0442 \u0438 \u043e\u043f\u043b\u0430\u0442\u0438\u0442\u044c \u0435\u0433\u043e \u043a\u0440\u0435\u0434\u0438\u0442\u043d\u043e\u0439 \u043a\u0430\u0440\u0442\u043e\u0439")))},d=i(10),f=i.n(d),p=i(12),v=i(15),y=i(6),b={clubsList:[],cities:[],activities:[]},g=function(e){return{type:"SET_SITIES",payload:e}},E=function(e){return{type:"SET_ACTIVITIES",payload:e}},h=(i(29),o.a.arrayOf(o.a.shape({title_short:o.a.string.isRequired,city:o.a.shape({title:o.a.string.isRequired,slug:o.a.string.isRequired}).isRequired,title:o.a.string.isRequired,activity:o.a.arrayOf(o.a.shape({title:o.a.string.isRequired,slug:o.a.string.isRequired}).isRequired).isRequired,link:o.a.string.isRequired,logo:o.a.string.isRequired}).isRequired).isRequired,o.a.shape({title_short:o.a.string.isRequired,city:o.a.shape({title:o.a.string.isRequired,slug:o.a.string.isRequired}).isRequired,title:o.a.string.isRequired,activity:o.a.arrayOf(o.a.shape({title:o.a.string.isRequired,slug:o.a.string.isRequired}).isRequired).isRequired,link:o.a.string.isRequired,logo:o.a.string.isRequired}).isRequired,function(e){var t=e.clubsList;return n.a.createElement("div",{className:"list"},t.map((function(e){return n.a.createElement(_,{club:e,key:e.title})})))}),_=function(e){var t=e.club;return n.a.createElement("div",{className:"item",key:t.title},n.a.createElement("a",{href:t.link,className:"item__link"},n.a.createElement("img",{src:t.logo,alt:"club logo",className:"item__logo"})),n.a.createElement("p",{className:"item__title"},t.title_short))};h.defaultProps={clubsList:o.a.array},_.defaultProps={club:o.a.object};i(30);var R=i(4),q=i.n(R),S=function(e){var t=e.cities,i=e.setSelectedCity,a=e.selectedCity;return n.a.createElement("div",{className:"citiesList"},a&&n.a.createElement("button",{type:"button",className:"citiesItem citiesItem--reset",onClick:function(){return i("")}},"Reset"),t.map((function(e){return n.a.createElement("button",{type:"button",className:q()("citiesItem",{isActive:a===e}),onClick:function(){return i(e)},key:e},e)})))};S.defaultProps={selectedCity:o.a.string};i(31);var N=function(e){var t=e.activities,i=e.selectedActivity,a=e.setSelectedActivity;return n.a.createElement("div",{className:"activitiesList"},i&&n.a.createElement("button",{type:"button",className:"activitiesItem activitiesItem--reset",onClick:function(){return a("")}},"Reset"),t.map((function(e){return n.a.createElement("button",{type:"button",className:q()("activitiesItem",{isActive:e===i}),onClick:function(){return a(e)},key:e},e)})))};N.defaultProps={selectedActivity:o.a.string};var I=function(e){var t=e.clubsList,i=e.getClubs,r=e.cities,s=e.activities,c=Object(a.useState)(""),l=Object(u.a)(c,2),o=l[0],d=l[1],f=Object(a.useState)(""),p=Object(u.a)(f,2),v=p[0],y=p[1];Object(a.useEffect)((function(){i()}),[]);var b=t;return o?b=t.filter((function(e){return e.city.title===o})):v&&(b=t.filter((function(e){return e.activity.some((function(e){return e.slug===v}))}))),v&&o&&(b=t.filter((function(e){return e.city.title===o&&e.activity.some((function(e){return e.slug===v}))}))),n.a.createElement("div",{className:"app-wrapper"},n.a.createElement(m,null),n.a.createElement(S,{cities:r,setSelectedCity:d,selectedCity:o}),n.a.createElement(N,{activities:s,selectedActivity:v,setSelectedActivity:y}),n.a.createElement(h,{clubsList:b}))},O=Object(c.b)((function(e){return{clubsList:e.clubsList,cities:e.cities,activities:e.activities}}),(function(e){return{getClubs:function(){return e(function(){var e=Object(v.a)(f.a.mark((function e(t){var i,a,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://instasport.co/dashboard/api/v1/clubs/").then((function(e){return e.json()}));case 2:i=e.sent,t({type:"SET_CLUBS",payload:i}),a=Object(p.a)(new Set(i.map((function(e){return e.city.title})))),n=Object(p.a)(new Set(i.map((function(e){return e.activity.map((function(e){return e.slug}))})).flat())),t(g(a)),t(E(n));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}}))(I);I.defaultProps={clubsList:o.a.array};var j=i(2),k=i(16),C=Object(j.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CLUBS":return Object(y.a)({},e,{clubsList:t.payload});case"SET_SITIES":return Object(y.a)({},e,{cities:t.payload});case"SET_ACTIVITIES":return Object(y.a)({},e,{activities:t.payload});default:return e}}),Object(j.a)(k.a));window.store=C,s.a.render(n.a.createElement(c.a,{store:C},n.a.createElement(O,null)),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.d77d8c10.chunk.js.map