"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[736],{69:function(n,t,e){e.d(t,{Df:function(){return s},M1:function(){return l},Pg:function(){return f},Ph:function(){return p},tx:function(){return d}});var r=e(861),a=e(757),c=e.n(a),u=e(44),i="https://api.themoviedb.org/3",o="8ce47aec5b56dd72034bc517ae24ed44",s=function(){var n=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.ZP.get("".concat(i,"/trending/movie/day?api_key=").concat(o));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.ZP.get("".concat(i,"/search/movie?api_key=").concat(o,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.ZP.get("".concat(i,"/movie/").concat(t,"?api_key=").concat(o,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.ZP.get("".concat(i,"/movie/").concat(t,"/credits?api_key=").concat(o,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.ZP.get("".concat(i,"/movie/").concat(t,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},736:function(n,t,e){e.r(t),e.d(t,{default:function(){return x}});var r,a,c,u=e(885),i=e(791),o=e(69),s=e(168),p=e(444),f=p.ZP.ul(r||(r=(0,s.Z)(["\n  margin-top: 10px;\n  margin-left: 20px;\n  display: flex;\nflex-direction: column;\n  list-style: none;\n"]))),l=p.ZP.li(a||(a=(0,s.Z)(["\ndisplay: flex;\nflex-direction: column;\n  > img {\n    width: 200px;\n    height: auto;\n    margin-top: 15px;\n  }\n  > p {\n    font-size: 16px;\n    font-weight: 700;\n  }\n"]))),d=p.ZP.p(c||(c=(0,s.Z)(["\n  font-size: 18px;\n  font-weight: 500;\n  margin-top: 10px;\n  margin-bottom: 5px;\n  font-family: Helvetica, 'Trebuchet MS', Verdana, sans-serif;\n"]))),h=e(739),m=e(473),g=e(184),x=function(){var n=(0,i.useState)(null),t=(0,u.Z)(n,2),e=t[0],r=t[1],a=(0,h.UO)().movieId;return(0,i.useEffect)((function(){o.M1(a).then(r).catch("error")}),[a]),(0,g.jsx)(g.Fragment,{children:e?(0,g.jsx)(f,{children:e.map((function(n){var t=n.id,e=n.name,r=n.character,a=n.profile_path;return(0,g.jsxs)(l,{children:[a&&(0,g.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(a),alt:e}),!a&&(0,g.jsx)("img",{src:m,alt:e}),(0,g.jsx)(d,{children:e}),(0,g.jsxs)(d,{children:["Character: ",r]})]},t)}))}):(0,g.jsx)("p",{children:"So sorry... But we don't have information about cast of this movie"})})}},473:function(n,t,e){n.exports=e.p+"static/media/image-coming-soon.c4a102e848bb9db329e4.webp"}}]);
//# sourceMappingURL=736.77c3c700.chunk.js.map