(this.webpackJsonptrain=this.webpackJsonptrain||[]).push([[0],{18:function(e,a,t){},51:function(e,a,t){e.exports=t(86)},58:function(e,a,t){},59:function(e,a,t){},86:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),c=t(25),r=t.n(c),m=(t(56),t(57),t(58),t(19)),s=t(20),o=t(22),i=t(23),E=(t(59),t(18),t(87)),u=t(88),p=t(89),d=t(90),f=t(91),h=function(e){return n.a.createElement("div",{className:"card-container"},n.a.createElement(E.a,null,n.a.createElement(u.a,null,n.a.createElement(p.a,{src:e.employee.picture,className:"profile-pic",onClick:function(){return e.onClick(e.employee,e.history)}}),n.a.createElement(d.a,null,e.employee.name)),n.a.createElement(f.a,null,n.a.createElement("span",{className:"fa fa-window-close",onClick:function(){return e.Delete(e.employee)}}))))},N=function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement("span",{className:"fa fa-search"}),n.a.createElement("input",{className:"search ",type:"search",placeholder:e.placeholder,onChange:function(a){e.onChange(a)}}))},g=function(e){Object(i.a)(t,e);var a=Object(o.a)(t);function t(e){var l;return Object(m.a)(this,t),(l=a.call(this,e)).handleClick=function(e,a){l.setState({clickedEmployee:e,showEmployee:!l.state.showEmployee}),a.push({pathname:"/employee/"+e.id})},l.handleChange=function(e){l.setState({searchText:e.target.value})},l.handleDelete=function(e){var a=l.state.employees.filter((function(a){return a.id!==e.id}));l.setState({employees:a})},l.state={employees:e.employees,searchText:"",clickedEmployee:null,showEmployee:!1},l}return Object(s.a)(t,[{key:"render",value:function(){var e=this,a=this.state,t=a.employees,l=a.searchText,c=t.filter((function(e){return e.name.toLowerCase().includes(l.toLowerCase())}));return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"App"},n.a.createElement(N,{placeholder:"Search by Name",onChange:this.handleChange})),n.a.createElement("div",{className:"card-list"},c.map((function(a){return n.a.createElement(h,{key:a.id,employee:a,onClick:e.handleClick,Delete:e.handleDelete,history:e.props.history})}))))}}]),t}(l.Component),y=t(9),v=t(12),b=t(92),k=t(93),w=t(94),O=t(95),C=t(96),D=t(97),I=t(105),j=t(104),A=t(106),S=t(98),x=function(e){Object(i.a)(t,e);var a=Object(o.a)(t);function t(e){var l;return Object(m.a)(this,t),(l=a.call(this,e)).collapseOpen=function(){l.setState({isOpen:!l.state.collapsedOpen})},l.state={collapsedOpen:!1},l}return Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(b.a,{color:"light",light:!0,expand:"md"},n.a.createElement("div",{className:"container"},n.a.createElement(k.a,{onClick:this.collapseOpen}),n.a.createElement(w.a,{className:"mr-auto heading",href:"/"},"\u0645\u0631\u0643\u0632 \u0627\u0644\u062a\u062d\u0648\u0644 \u0627\u0644\u0631\u0642\u0645\u0649",n.a.createElement("img",{src:"assets/images/logo.png",alt:"logo",height:"30",width:"41"})),n.a.createElement(O.a,{navbar:!0,isOpen:this.state.collapsedOpen},n.a.createElement(C.a,{navbar:!0},n.a.createElement(D.a,null,n.a.createElement(v.c,{className:"nav-link",to:"/"},n.a.createElement("span",{className:"fa fa-home"})," Home")),n.a.createElement(D.a,null,n.a.createElement(v.c,{className:"nav-link",to:"/employee"},n.a.createElement("span",{className:"fa fa-user"})," Employee")),n.a.createElement(I.a,{nav:!0,inNavbar:!0},n.a.createElement(j.a,{nav:!0,caret:!0},n.a.createElement("span",{className:"fa fa-building"}),"  Departments"),n.a.createElement(A.a,{right:!0},n.a.createElement(S.a,null,n.a.createElement(v.c,{className:"nav-link",to:"/iotandgis"},n.a.createElement("span",{className:"fa fa-map"}),"  IOT & GIS",n.a.createElement("span",{className:"badge badge-light"},this.props.iot))),n.a.createElement(S.a,null,n.a.createElement(v.c,{to:"/developers",className:"nav-link"},n.a.createElement("span",{className:"fa fa-mobile"}),"  Developers",n.a.createElement("span",{className:"badge badge-light"},this.props.dev))),n.a.createElement(S.a,null,n.a.createElement(v.c,{to:"/networks",className:"nav-link"},n.a.createElement("span",{className:"fa fa-laptop"}),"  Network Security",n.a.createElement("span",{className:"badge badge-light"},this.props.net))))))))))}}]),t}(l.Component),T=function(){return n.a.createElement("div",{className:"footer"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row justify-content-center"},n.a.createElement("div",{className:"col-4 offset-1 col-sm-2"},n.a.createElement("h5",null,"Links"),n.a.createElement("ul",{className:"list-unstyled"},n.a.createElement("li",null," ",n.a.createElement(v.b,{to:"/"},n.a.createElement("span",{className:"fa fa-home fa-lg"})," ")),n.a.createElement("li",null," ",n.a.createElement(v.b,{to:"/employee"},n.a.createElement("span",{className:"fa fa-user fa-lg"})," ")))),n.a.createElement("div",{className:"col-7 col-sm-5"},n.a.createElement("h5",null,"Our Address"),n.a.createElement("address",null,"Digital Transformation Center",n.a.createElement("br",null),"MAsr Elgedida , Cairo",n.a.createElement("br",null),"Egypt",n.a.createElement("br",null),n.a.createElement("i",{className:"fa fa-phone fa-lg"}),": 01111343463",n.a.createElement("br",null),n.a.createElement("i",{className:"fa fa-fax fa-lg"}),": +852 8765 4321",n.a.createElement("br",null),n.a.createElement("i",{className:"fa fa-envelope fa-lg"}),": ",n.a.createElement("a",{href:"mailto:m.yassen.93@gmail.com"},"Contact US"))),n.a.createElement("div",{className:"col-12 col-sm-4 align-self-center"},n.a.createElement("div",{className:"text-center"},n.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://google.com/+"},n.a.createElement("i",{className:"fa fa-google-plus"})),n.a.createElement("a",{className:"btn btn-social-icon btn-facebook",href:"http://www.facebook.com/profile.php?id="},n.a.createElement("i",{className:"fa fa-facebook"})),n.a.createElement("a",{className:"btn btn-social-icon btn-linkedin",href:"http://www.linkedin.com/in/"},n.a.createElement("i",{className:"fa fa-linkedin"})),n.a.createElement("a",{className:"btn btn-social-icon btn-twitter",href:"http://twitter.com/"},n.a.createElement("i",{className:"fa fa-twitter"})),n.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://youtube.com/"},n.a.createElement("i",{className:"fa fa-youtube"})),n.a.createElement("a",{className:"btn btn-social-icon",href:"mailto:"},n.a.createElement("i",{className:"fa fa-envelope-o"}))))),n.a.createElement("div",{className:"row justify-content-center"},n.a.createElement("div",{className:"col-auto"},n.a.createElement("p",null,"\xa9 Copyright 2020  DTC")))))},G=t(99),F=t(100),L=function(){return n.a.createElement("div",null,n.a.createElement(G.a,{fluid:!0},n.a.createElement(F.a,{fluid:!0},n.a.createElement("h1",{className:"App heading display-3"},"\u0645\u0631\u0643\u0632 \u0627\u0644\u062a\u062d\u0648\u0644 \u0627\u0644\u0631\u0642\u0645\u0649 "),n.a.createElement("center",null,n.a.createElement("img",{src:"assets/images/logo.png",alt:"logo",width:"100",height:"50",className:"App-logo"})),n.a.createElement("p",{className:"App heading lead"},"\u0645\u0633\u062a\u0642\u0628\u0644 \u0645\u0635\u0631 \u0628\u0623\u064a\u062f\u064a\u0646\u0627"))))},M=function(e){return n.a.createElement("div",null,n.a.createElement(g,{employees:e.employees,history:e.history}))},B=t(101),J=t(102),W=t(103),_=function(e){var a=parseInt(e.match.params.empId),t=e.employees.filter((function(e){return e.id===a}));return console.log(t),t?t.map((function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md"},n.a.createElement(E.a,null,n.a.createElement(p.a,{src:e.picture,className:"profile-pic",alt:e.name}),n.a.createElement(u.a,null,n.a.createElement(B.a,{className:"App heading"}," ",n.a.createElement("span",{className:"fa fa-user-circle"})," ",e.name))))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-6"},n.a.createElement("card",null,n.a.createElement(J.a,null,n.a.createElement(d.a,{className:"App heading"}," \u0627\u0644\u0628\u0637\u0627\u0642\u0647 \u0627\u0644\u0634\u062e\u0635\u064a\u0647 ",n.a.createElement("span",{className:"fa fa-address-card"})," ")),n.a.createElement(u.a,null,n.a.createElement(W.a,null,n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null," ",n.a.createElement("span",{className:"fa fa-user"})),n.a.createElement("td",null,n.a.createElement(d.a,null,e.age))),n.a.createElement("tr",null,n.a.createElement("td",null," ",n.a.createElement("span",{className:"fa fa-map"})),n.a.createElement("td",null,n.a.createElement(d.a,null,e.address))),n.a.createElement("tr",null,n.a.createElement("td",null," ",n.a.createElement("span",{className:"fa fa-mobile-phone"})),n.a.createElement("td",null,n.a.createElement(d.a,null,e.phone))),n.a.createElement("tr",null,n.a.createElement("td",null," ",n.a.createElement("span",{className:"fa fa-heartbeat"})),n.a.createElement("td",null,n.a.createElement(d.a,null,e.status))),n.a.createElement("tr",null,n.a.createElement("td",null," ",n.a.createElement("span",{className:"fa fa-envelope"})),n.a.createElement("td",null,n.a.createElement(d.a,null,e.email))),n.a.createElement("tr",null,n.a.createElement("td",null," ",n.a.createElement("span",{className:"fa fa-info-circle"})),n.a.createElement("td",null,n.a.createElement(d.a,null,e.isbn))),n.a.createElement("tr",null,n.a.createElement("td",null," ",n.a.createElement("span",{className:"fa fa-building-o"})),n.a.createElement("td",null,n.a.createElement(d.a,null,e.department))),n.a.createElement("tr",null,n.a.createElement("td",null," ",n.a.createElement("span",{className:"fa fa-graduation-cap"})),n.a.createElement("td",null,n.a.createElement(d.a,null,e.specialization))),n.a.createElement("tr",null,n.a.createElement("td",null," ",n.a.createElement("span",{className:"fa fa-university"})),n.a.createElement("td",null,n.a.createElement(d.a,null,e.university))),n.a.createElement("tr",null,n.a.createElement("td",null," ",n.a.createElement("span",{className:"fa fa-birthday-cake"})),n.a.createElement("td",null,n.a.createElement(d.a,null,e.birth_date))),n.a.createElement("tr",null,n.a.createElement("td",null," ",n.a.createElement("span",{className:"fa fa-calendar-check-o"})),n.a.createElement("td",null,n.a.createElement(d.a,null,e.date_hired)))))))),n.a.createElement("div",{className:"col-6"},n.a.createElement("card",null,n.a.createElement(J.a,null,n.a.createElement(d.a,{className:"App heading"}," \u0627\u0644\u0645\u0647\u0627\u0631\u0627\u062a ",n.a.createElement("span",{className:"fa fa-laptop"})," ",n.a.createElement("span",{className:"badge badge-dark"}),e.skill.length)),n.a.createElement(u.a,null,n.a.createElement(W.a,null,n.a.createElement("tbody",null,e.skill.map((function(e){return n.a.createElement("tr",null,n.a.createElement("td",null," ",n.a.createElement("span",{className:"fa  fa-play-circle fa-spin"})),n.a.createElement("td",null,n.a.createElement(d.a,null,e)))})))))))))})):n.a.createElement("div",null)},z=function(e){Object(i.a)(t,e);var a=Object(o.a)(t);function t(e){var l;return Object(m.a)(this,t),(l=a.call(this,e)).Employee=function(e){var a=e.history;return n.a.createElement(g,{employees:l.state.employees,history:a})},l.DevEmp=function(e){var a=e.history;return n.a.createElement(M,{employees:l.state.Developers,history:a})},l.NetEmp=function(e){var a=e.history;return n.a.createElement(M,{employees:l.state.networks,history:a})},l.IOTEmp=function(e){var a=e.history;return n.a.createElement(M,{employees:l.state.IotAndGis,history:a})},l.EmployeeId=function(e){var a=e.match;return n.a.createElement(_,{employees:l.state.employees,match:a})},l.state={employees:[],IotAndGis:[],Developers:[],networks:[]},l}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://dtcdashboard.pythonanywhere.com/api/v1/employee/").then((function(e){return e.json()})).then((function(a){return e.setState({employees:a,IotAndGis:a.filter((function(e){return"IOT & GIS"===e.department})),Developers:a.filter((function(e){return"Developers"===e.department})),networks:a.filter((function(e){return"Network Security"===e.department}))})}))}},{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(x,{iot:this.state.IotAndGis.length,dev:this.state.Developers.length,net:this.state.networks.length}),n.a.createElement(y.d,null,n.a.createElement(y.b,{path:"/networks",component:this.NetEmp}),n.a.createElement(y.b,{path:"/employee/:empId",component:this.EmployeeId}),n.a.createElement(y.b,{path:"/developers",component:this.DevEmp}),n.a.createElement(y.b,{path:"/iotandgis",component:this.IOTEmp}),n.a.createElement(y.b,{exact:!0,path:"/employee",component:this.Employee}),n.a.createElement(y.b,{path:"/",exact:!0,component:function(){return n.a.createElement(L,null)}}),n.a.createElement(y.a,{to:"/"})),n.a.createElement(T,null))}}]),t}(l.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(v.a,null,n.a.createElement(z,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[51,1,2]]]);
//# sourceMappingURL=main.75ff7ffb.chunk.js.map