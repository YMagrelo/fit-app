(this.webpackJsonpreact_article=this.webpackJsonpreact_article||[]).push([[0],{12:function(e,t,i){e.exports=i(24)},22:function(e,t,i){},23:function(e,t,i){},24:function(e,t,i){"use strict";i.r(t);var a=i(0),s=i.n(a),r=i(3),n=i.n(r),l=i(4),c=(i(22),function(){return s.a.createElement("div",{className:"heading"},s.a.createElement("h1",{className:"heading__title"},"\u0417\u0430\u043f\u0438\u0441\u044c \u043d\u0430 \u0442\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043a\u0438 \u043e\u043d\u043b\u0430\u0439\u043d"),s.a.createElement("p",{className:"heading__list-title"},"\u041d\u0430 \u043d\u0430\u0448\u0435\u043c \u0441\u0430\u0439\u0442\u0435 \u0432\u044b \u0441\u043c\u043e\u0436\u0435\u0442\u0435:"),s.a.createElement("ul",{className:"heading__list"},s.a.createElement("li",{className:"heading__item"},"\u0423\u0437\u043d\u0430\u0442\u044c \u0440\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0442\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043e\u043a \u0432 \u0441\u043f\u043e\u0440\u0442\u0438\u0432\u043d\u044b\u0445 \u043a\u043b\u0443\u0431\u0430\u0445"),s.a.createElement("li",{className:"heading__item"},"\u0417\u0430\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f \u043d\u0430 \u0442\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043a\u0443"),s.a.createElement("li",{className:"heading__item"},"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u0430\u0431\u043e\u043d\u0435\u043c\u0435\u043d\u0442 \u0438 \u043e\u043f\u043b\u0430\u0442\u0438\u0442\u044c \u0435\u0433\u043e \u043a\u0440\u0435\u0434\u0438\u0442\u043d\u043e\u0439 \u043a\u0430\u0440\u0442\u043e\u0439")))}),u=i(11),o={clubsList:[]},d=function(){return function(e){fetch("https://instasport.co/dashboard/api/v1/clubs/").then((function(e){return e.json()})).then((function(t){e({type:"GET_CLUBS",payload:t})}))}},m=(i(23),i(1)),g=i.n(m),h=(g.a.arrayOf(g.a.shape({title_short:g.a.string.isRequired,city:g.a.shape({title:g.a.string.isRequired,slug:g.a.string.isRequired}).isRequired,title:g.a.string.isRequired,activity:g.a.arrayOf(g.a.shape({title:g.a.string.isRequired,slug:g.a.string.isRequired}).isRequired).isRequired,link:g.a.string.isRequired,logo:g.a.string.isRequired}).isRequired).isRequired,g.a.shape({title_short:g.a.string.isRequired,city:g.a.shape({title:g.a.string.isRequired,slug:g.a.string.isRequired}).isRequired,title:g.a.string.isRequired,activity:g.a.arrayOf(g.a.shape({title:g.a.string.isRequired,slug:g.a.string.isRequired}).isRequired).isRequired,link:g.a.string.isRequired,logo:g.a.string.isRequired}).isRequired,function(e){var t=e.clubsList;return s.a.createElement("div",{className:"list"},t.map((function(e){return s.a.createElement(f,{club:e,key:e.title})})))}),f=function(e){var t=e.club;return s.a.createElement("div",{className:"item",key:t.title},s.a.createElement("a",{href:t.link,className:"item__link"},s.a.createElement("img",{src:t.logo,alt:"club logo",className:"item__logo"})),s.a.createElement("p",{className:"item__title"},t.title_short))},p=Object(l.b)((function(e){return{clubsList:e.clubsList}}),(function(e){return{getClubs:function(){return e(d())}}}))((function(e){var t=e.clubsList,i=e.getClubs;return Object(a.useEffect)((function(){i()}),[]),s.a.createElement("div",{className:"app-wrapper"},s.a.createElement(c,null),s.a.createElement("div",null,s.a.createElement("h2",null,"City list")),s.a.createElement("div",null,s.a.createElement("h2",null,"Workout list")),s.a.createElement(h,{clubsList:t}))})),E=i(2),q=i(10),R=Object(E.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_CLUBS":return Object(u.a)({},e,{clubsList:t.payload});default:return e}}),Object(E.a)(q.a));window.store=R,n.a.render(s.a.createElement(l.a,{store:R},s.a.createElement(p,null)),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.2a7fd16d.chunk.js.map