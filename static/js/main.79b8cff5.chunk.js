(this["webpackJsonpbat-attack"]=this["webpackJsonpbat-attack"]||[]).push([[0],{123:function(t,e,a){},188:function(t,e,a){},189:function(t,e,a){},209:function(t,e,a){},210:function(t,e,a){},211:function(t,e,a){},348:function(t,e,a){},349:function(t,e,a){"use strict";a.r(e);var s=a(0),r=a.n(s),n=a(61),c=a.n(n),i=(a(188),a(189),a(25)),o=a.n(i),l=a(69),b=a(155),h=a(156),_=a(53),d=a(157),j=a(178),u=a(27),m=a.n(u),g=a(57),p=a.n(g),O=(a(123),a(2)),x=function(t){var e=t.current_batter,a=t.current_batter_image;return Object(O.jsxs)("div",{className:"baseball_card",children:[Object(O.jsx)("img",{className:"batter_image",src:"".concat(a),alt:"batter_image"}),Object(O.jsx)("img",{className:"team_image",src:"".concat(e.teamImage),alt:"team_image"}),Object(O.jsx)("h1",{className:"batter_name",children:e.fullName})]})},f=(a(209),function(t){for(var e=t.current_batter,a=t.current_batter_stats,s=0,r=0;r<a.length;r++)s+=a[r].AB;for(var n=0,c=0;c<a.length;c++)n+=a[c].BB;for(var i=0,o=0;o<a.length;o++)i+=a[o].H;for(var l=0,b=0;b<a.length;b++)l+=a[b].HBP;for(var h=0,_=0;_<a.length;_++)h+=a[_].HR;for(var d=0;d<a.length;d++)a[d].K;for(var j=0;j<a.length;j++)a[j].PA;for(var u=0,m=0;m<a.length;m++)u+=a[m].RBI;for(var g=0,p=0;p<a.length;p++)g+=a[p].SF;for(var x=0,f=0;f<a.length;f++)x+=a[f].TB;var v=(i/s).toFixed(3),k=((i+n+l)/(s+n+l+g)).toFixed(3),B=(x/s).toFixed(3),S=(parseFloat(k)+parseFloat(B)).toFixed(3);return Object(O.jsxs)("div",{className:"stats_box",children:[Object(O.jsx)("h1",{className:"batter_name_stats",children:e.fullName}),Object(O.jsxs)("table",{className:"stats_table",children:[Object(O.jsx)("thead",{children:Object(O.jsx)("tr",{children:Object(O.jsx)("th",{className:"stats_header",colSpan:"3",children:"2018 Batting Stats"})})}),Object(O.jsxs)("tbody",{children:[Object(O.jsxs)("tr",{children:[Object(O.jsxs)("td",{className:"stats",children:["AB: ",s]}),Object(O.jsxs)("td",{className:"stats",children:["H: ",i]}),Object(O.jsxs)("td",{className:"stats",children:["HR: ",h]})]}),Object(O.jsxs)("tr",{children:[Object(O.jsxs)("td",{className:"stats",children:["RBI: ",u]}),Object(O.jsxs)("td",{className:"stats",children:["AVG: ",v]}),Object(O.jsxs)("td",{className:"stats",children:["OBP: ",k]})]}),Object(O.jsxs)("tr",{children:[Object(O.jsxs)("td",{className:"stats",children:["SLG: ",B]}),Object(O.jsxs)("td",{className:"stats",children:["OPS: ",S]})]})]})]})]})}),v=(a(210),a.p+"static/media/mlblogo.5ae49ae7.jpg"),k=(a(211),a(351)),B=a(352),S=a(176),N=a(175),w=a(72),T=a(68),y=a(356),C=a(179),A=function(t){var e=t.current_batter_stats;var a=function(){for(var t=[],a=0,s=0,r=0,n=[],c=0;c<e.length;c++)r=(a+=e[c].H)/(s+=e[c].AB),n.push(r.toFixed(3));for(var i=0,o=0,l=0,b=0,h=0,_=0,d=0,j=[],u=0;u<e.length;u++){l+=e[u].H,o+=e[u].AB,d=(i+=e[u].TB)/o+(l+(b+=e[u].BB)+(h+=e[u].HBP))/(o+b+(_+=e[u].SF)+h),j.push(d.toFixed(3))}for(var m=0;m<e.length;m++){var g={};g.date=e[m].gameDate.slice(5,10),g.AVG=n[m],g.OPS=j[m],t.push(g)}return t}();return Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{className:"graph_title",children:Object(O.jsx)("h1",{children:"AVG and OPS over 2018"})}),Object(O.jsx)(k.a,{width:"100%",aspect:3,children:Object(O.jsxs)(B.a,{width:1200,height:400,data:a,margin:{top:5,right:0,left:0,bottom:5},children:[Object(O.jsx)(S.a,{stroke:"black"}),Object(O.jsx)(N.a,{dataKey:"date",stroke:"black"}),Object(O.jsx)(w.a,{}),Object(O.jsx)(T.a,{}),Object(O.jsx)(y.a,{stroke:"#f5f5f5"}),Object(O.jsx)(C.a,{type:"monotone",dataKey:"OPS",stroke:"#002D72",dot:!1,strokeWidth:2}),Object(O.jsx)(C.a,{type:"monotone",dataKey:"AVG",stroke:"#D50032",dot:!1,strokeWidth:2})]})})]})},P=(a(348),function(t){var e=t.current_batter,a=t.current_batter_image,s=t.change_batter;return Object(O.jsx)("div",{children:Object(O.jsxs)("button",{className:"selector_button",onClick:s,children:[Object(O.jsx)("img",{className:"button_image",src:a,alt:"Batter Image"}),Object(O.jsx)("h3",{className:"button_name",children:e.fullName})]})})}),F=function(t){Object(d.a)(a,t);var e=Object(j.a)(a);function a(){var t;return Object(b.a)(this,a),(t=e.call(this)).state={batters:[],batter_one:[],batter_two:[],batter_three:[],batter_prop_passed:[],batter_one_image:"",batter_two_image:"",batter_three_image:"",batter_image_passed:"",batter_one_stats:[],batter_two_stats:[],batter_three_stats:[],batter_stats_passed:[],loading:"true"},t.handleBatterOneClick=t.handleBatterOneClick.bind(Object(_.a)(t)),t.handleBatterTwoClick=t.handleBatterTwoClick.bind(Object(_.a)(t)),t.handleBatterThreeClick=t.handleBatterThreeClick.bind(Object(_.a)(t)),t}return Object(h.a)(a,[{key:"getTempToken",value:function(){var t=Object(l.a)(o.a.mark((function t(){var e=this;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(m.a.get("tempToken")){t.next=4;break}return t.next=4,p.a.get("https://project.trumedianetworks.com/api/token",{headers:{apiKey:Object({NODE_ENV:"production",PUBLIC_URL:"/bat-attack",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).BAT_ATTACK_API_KEY}}).then((function(t){return t.data})).then((function(t){e.setState({tempToken:t.token}),m.a.set("tempToken",t.token,{expires:1})})).catch((function(t){console.error(t)}));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},{key:"getAllBatters",value:function(){var t=Object(l.a)(o.a.mark((function t(){var e,a=this;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=m.a.get("tempToken"),t.next=3,p.a.get("https://project.trumedianetworks.com/api/mlb/players",{headers:{tempToken:e}}).then((function(t){return t.data})).then((function(t){a.setState({batter_one:t[0]}),a.setState({batter_two:t[1]}),a.setState({batter_three:t[2]}),m.a.set("batter_one_id",a.state.batter_one.playerId),m.a.set("batter_two_id",a.state.batter_two.playerId),m.a.set("batter_three_id",a.state.batter_three.playerId);var e=a.state.batter_one.playerImage,s=e.slice(0,4)+e.slice(5,8)+e.slice(12);a.setState({batter_one_image:s});var r=a.state.batter_two.playerImage,n=r.slice(0,4)+r.slice(5,8)+r.slice(12);a.setState({batter_two_image:n});var c=a.state.batter_three.playerImage,i=c.slice(0,4)+c.slice(5,8)+c.slice(12);a.setState({batter_three_image:i})})).catch((function(t){console.error(t)}));case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},{key:"getAllBattersStats",value:function(){var t=Object(l.a)(o.a.mark((function t(){var e,a,s,r,n=this;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=m.a.get("tempToken"),a=m.a.get("batter_one_id"),s=m.a.get("batter_two_id"),r=m.a.get("batter_three_id"),t.next=6,p.a.get("https://project.trumedianetworks.com/api/mlb/player/".concat(a),{headers:{tempToken:e}}).then((function(t){return t.data})).then((function(t){n.setState({batter_one_stats:t}),n.setState({batter_prop_passed:n.state.batter_one}),n.setState({batter_image_passed:n.state.batter_one_image})})).catch((function(t){console.error(t)}));case 6:return t.next=8,p.a.get("https://project.trumedianetworks.com/api/mlb/player/".concat(s),{headers:{tempToken:e}}).then((function(t){return t.data})).then((function(t){n.setState({batter_two_stats:t}),n.setState({batter_stats_passed:n.state.batter_one_stats})})).catch((function(t){console.error(t)}));case 8:return t.next=10,p.a.get("https://project.trumedianetworks.com/api/mlb/player/".concat(r),{headers:{tempToken:e}}).then((function(t){return t.data})).then((function(t){n.setState({batter_three_stats:t})})).catch((function(t){console.error(t)}));case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var t=Object(l.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getTempToken();case 2:return t.next=4,this.getAllBatters();case 4:return t.next=6,this.getAllBattersStats();case 6:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"handleBatterOneClick",value:function(){this.setState({batter_prop_passed:this.state.batter_one}),this.setState({batter_image_passed:this.state.batter_one_image}),this.setState({batter_stats_passed:this.state.batter_one_stats}),this.setState({loading:"false"})}},{key:"handleBatterTwoClick",value:function(){this.setState({batter_prop_passed:this.state.batter_two}),this.setState({batter_image_passed:this.state.batter_two_image}),this.setState({batter_stats_passed:this.state.batter_two_stats}),this.setState({loading:"false"})}},{key:"handleBatterThreeClick",value:function(){this.setState({batter_prop_passed:this.state.batter_three}),this.setState({batter_image_passed:this.state.batter_three_image}),this.setState({batter_stats_passed:this.state.batter_three_stats}),this.setState({loading:"false"})}},{key:"render",value:function(){if("true"===this.state.loading){var t=this.state,e=t.batter_one,a=t.batter_one_image,s=t.batter_two_image,r=t.batter_three_image,n=t.batter_three,c=t.batter_two;return Object(O.jsxs)("div",{className:"top_header_container",children:[Object(O.jsxs)("div",{className:"logo_name_container",children:[Object(O.jsx)("img",{className:"logo",src:v,alt:"MLB Logo"}),Object(O.jsx)("h2",{className:"project_name",children:"Bat Attack"})]}),Object(O.jsx)("h2",{className:"batter_prompt",children:"Choose your batter:"}),Object(O.jsx)(P,{current_batter_image:a,current_batter:e,change_batter:this.handleBatterOneClick}),Object(O.jsx)(P,{current_batter_image:s,current_batter:c,change_batter:this.handleBatterTwoClick}),Object(O.jsx)(P,{current_batter_image:r,current_batter:n,change_batter:this.handleBatterThreeClick})]})}if("false"===this.state.loading){var i=this.state,o=i.batter_prop_passed,l=i.batter_image_passed,b=i.batter_stats_passed,h=i.batter_one,_=i.batter_one_image,d=(i.batter_one_stats,i.batter_two_image),j=i.batter_three_image,u=i.batter_three,m=i.batter_two;return Object(O.jsxs)("div",{className:"main_page",children:[Object(O.jsxs)("div",{className:"top_header_container",children:[Object(O.jsxs)("div",{className:"logo_name_container",children:[Object(O.jsx)("img",{className:"logo",src:v,alt:"MLB Logo"}),Object(O.jsx)("h2",{className:"project_name",children:"Bat Attack"})]}),Object(O.jsx)("h2",{className:"batter_prompt",children:"Choose your batter:"}),Object(O.jsx)(P,{current_batter_image:_,current_batter:h,change_batter:this.handleBatterOneClick}),Object(O.jsx)(P,{current_batter_image:d,current_batter:m,change_batter:this.handleBatterTwoClick}),Object(O.jsx)(P,{current_batter_image:j,current_batter:u,change_batter:this.handleBatterThreeClick})]}),Object(O.jsxs)("div",{className:"pic_stats",children:[Object(O.jsx)(x,{current_batter:o,current_batter_image:l}),Object(O.jsx)(f,{current_batter:o,current_batter_stats:b})]}),Object(O.jsx)("div",{className:"line_chart_container",children:Object(O.jsx)(A,{current_batter_stats:b})}),Object(O.jsx)("div",{className:"glossary_container",children:Object(O.jsxs)("table",{className:"glossary_table",children:[Object(O.jsx)("thead",{children:Object(O.jsx)("tr",{children:Object(O.jsx)("th",{className:"glossary_header",colSpan:"3",children:"Glossary"})})}),Object(O.jsxs)("tbody",{children:[Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{className:"stats",children:"AB: At Bat"}),Object(O.jsx)("td",{className:"stats",children:"H: Hits"}),Object(O.jsx)("td",{className:"stats",children:"HR: Home Runs"})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{className:"stats",children:"RBI: Runs Batted In"}),Object(O.jsx)("td",{className:"stats",children:"AVG: Batting Average"}),Object(O.jsx)("td",{className:"stats",children:"OBP: Total On Base Percentage"})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{className:"stats",children:"SLG: Slugging"}),Object(O.jsx)("td",{className:"stats",children:"OPS: On Base Percentage Plus Slugging"})]})]})]})})]})}}}]),a}(s.Component);var I=function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsx)(F,{})})},H=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,358)).then((function(e){var a=e.getCLS,s=e.getFID,r=e.getFCP,n=e.getLCP,c=e.getTTFB;a(t),s(t),r(t),n(t),c(t)}))};c.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(I,{})}),document.getElementById("root")),H()}},[[349,1,2]]]);
//# sourceMappingURL=main.79b8cff5.chunk.js.map