(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d63f1"],{7277:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("v-container",{attrs:{"fill-height":"",fluid:"","grid-list-xl":""}},[a("v-layout",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],attrs:{wrap:""}},[a("v-flex",{attrs:{md12:"",sm12:"",lg4:""}},[a("material-chart-card",{attrs:{data:t.commitsChart,options:t.ChartsOptions,color:"info",type:"Line"}},[a("h4",{staticClass:"title font-weight-light"},[t._v("Commits per week")]),a("p",{staticClass:"category d-inline-flex font-weight-light"},[t._v("All time data of cryptocurrency_prediction project")]),a("template",{slot:"actions"},[a("v-icon",{staticClass:"mr-2",attrs:{small:""}},[t._v("\n            mdi-tag\n          ")]),a("span",{staticClass:"caption grey--text font-weight-light"},[t._v("Tracked from Github")])],1)],2)],1),a("v-flex",{attrs:{md12:"",sm12:"",lg4:""}},[a("material-chart-card",{attrs:{data:t.additionsChart,options:t.ChartsOptions,color:"green",type:"Bar"}},[a("h4",{staticClass:"title font-weight-light"},[t._v("Additions on each commit")]),a("p",{staticClass:"category d-inline-flex font-weight-light"},[t._v("All time data of cryptocurrency_prediction project")]),a("template",{slot:"actions"},[a("v-icon",{staticClass:"mr-2",attrs:{small:""}},[t._v("\n            mdi-tag\n          ")]),a("span",{staticClass:"caption grey--text font-weight-light"},[t._v("Tracked from Github")])],1)],2)],1),a("v-flex",{attrs:{md12:"",sm12:"",lg4:""}},[a("material-chart-card",{attrs:{data:t.deletionsChart,options:t.ChartsOptions,color:"red",type:"Bar"}},[a("h3",{staticClass:"title font-weight-light"},[t._v("Deletetions on each commit")]),a("p",{staticClass:"category d-inline-flex font-weight-light"},[t._v("All time data of cryptocurrency_prediction project")]),a("template",{slot:"actions"},[a("v-icon",{staticClass:"mr-2",attrs:{small:""}},[t._v("\n            mdi-tag\n          ")]),a("span",{staticClass:"caption grey--text font-weight-light"},[t._v("Tracked from Github")])],1)],2)],1),a("v-flex",{attrs:{sm6:"",xs12:"",md6:"",lg3:""}},[a("material-stats-card",{attrs:{value:t.stargazers_count,color:"green",icon:"mdi-store",title:"Closed Issues","sub-icon":"mdi-calendar","sub-text":"Last 24 Hours"}})],1),a("v-flex",{attrs:{sm6:"",xs12:"",md6:"",lg3:""}},[a("material-stats-card",{attrs:{color:"orange",icon:"mdi-content-copy",title:"Open Issues",value:t.open_issues,"small-value":"GB","sub-icon":"mdi-alert","sub-icon-color":"error","sub-text":"Get More Space...","sub-text-color":"text-primary"}})],1),a("v-flex",{attrs:{sm6:"",xs12:"",md6:"",lg3:""}},[a("material-stats-card",{attrs:{color:"red",icon:"mdi-information-outline",title:"Forks",value:t.forks,"sub-icon":"mdi-tag","sub-text":"Tracked from Github"}})],1),a("v-flex",{attrs:{sm6:"",xs12:"",md6:"",lg3:""}},[a("material-stats-card",{attrs:{value:t.stargazers_count,color:"info",icon:"mdi-twitter",title:"Stargazers","sub-icon":"mdi-update","sub-text":"Just Updated"}})],1),a("v-flex",{attrs:{md12:"",lg6:""}},[a("material-card",{attrs:{color:"orange",title:"Professional Stats",text:"Most important jobs"}},[a("v-data-table",{attrs:{headers:t.headers,items:t.items,"hide-actions":""},scopedSlots:t._u([{key:"headerCell",fn:function(s){var e=s.header;return[a("span",{staticClass:"font-weight-light text-warning text--darken-3",domProps:{textContent:t._s(e.text)}})]}},{key:"items",fn:function(s){var e=s.index,i=s.item;return[a("td",[t._v(t._s(e+1))]),a("td",[t._v(t._s(i.name))]),a("td",{staticClass:"text-xs-right"},[t._v(t._s(i.salary))]),a("td",{staticClass:"text-xs-right"},[t._v(t._s(i.country))]),a("td",{staticClass:"text-xs-right"},[t._v(t._s(i.city))])]}}])})],1)],1),a("v-flex",{attrs:{md12:"",lg6:""}},[a("material-card",{staticClass:"card-tabs",attrs:{color:"green"}},[a("v-flex",{attrs:{slot:"header"},slot:"header"},[a("v-tabs",{attrs:{color:"transparent","slider-color":"white"},model:{value:t.tabs,callback:function(s){t.tabs=s},expression:"tabs"}},[a("span",{staticClass:"subheading font-weight-light mr-3",staticStyle:{"align-self":"center"}},[t._v("Tasks:")]),a("v-tab",{staticClass:"mr-3"},[a("v-icon",{staticClass:"mr-2"},[t._v("mdi-bug")]),t._v("\n              Bugs\n            ")],1),a("v-tab",{staticClass:"mr-3"},[a("v-icon",{staticClass:"mr-2"},[t._v("mdi-code-tags")]),t._v("\n              Website\n            ")],1),a("v-tab",[a("v-icon",{staticClass:"mr-2"},[t._v("mdi-cloud")]),t._v("\n              Server\n            ")],1)],1)],1),a("v-tabs-items",{model:{value:t.tabs,callback:function(s){t.tabs=s},expression:"tabs"}},t._l(3,function(s){return a("v-tab-item",{key:s},[a("v-list",{attrs:{"three-line":""}},[a("v-list-tile",{on:{click:function(s){t.complete(0)}}},[a("v-list-tile-action",[a("v-checkbox",{attrs:{value:t.list[0],color:"green"}})],1),a("v-list-tile-title",[t._v('\n                  Sign contract for "What are conference organized afraid of?"\n                ')]),a("div",{staticClass:"d-flex"},[a("v-tooltip",{attrs:{top:"","content-class":"top"}},[a("v-btn",{staticClass:"v-btn--simple",attrs:{slot:"activator",color:"success",icon:""},slot:"activator"},[a("v-icon",{attrs:{color:"primary"}},[t._v("mdi-pencil")])],1),a("span",[t._v("Edit")])],1),a("v-tooltip",{attrs:{top:"","content-class":"top"}},[a("v-btn",{staticClass:"v-btn--simple",attrs:{slot:"activator",color:"danger",icon:""},slot:"activator"},[a("v-icon",{attrs:{color:"error"}},[t._v("mdi-close")])],1),a("span",[t._v("Close")])],1)],1)],1),a("v-divider"),a("v-list-tile",{on:{click:function(s){t.complete(1)}}},[a("v-list-tile-action",[a("v-checkbox",{attrs:{value:t.list[1],color:"success"}})],1),a("v-list-tile-title",[t._v("\n                  Lines From Great Russian Literature? Or E-mails From My Boss?\n                ")]),a("div",{staticClass:"d-flex"},[a("v-tooltip",{attrs:{top:"","content-class":"top"}},[a("v-btn",{staticClass:"v-btn--simple",attrs:{slot:"activator",color:"success",icon:""},slot:"activator"},[a("v-icon",{attrs:{color:"primary"}},[t._v("mdi-pencil")])],1),a("span",[t._v("Edit")])],1),a("v-tooltip",{attrs:{top:"","content-class":"top"}},[a("v-btn",{staticClass:"v-btn--simple",attrs:{slot:"activator",color:"danger",icon:""},slot:"activator"},[a("v-icon",{attrs:{color:"error"}},[t._v("mdi-close")])],1),a("span",[t._v("Close")])],1)],1)],1),a("v-divider"),a("v-list-tile",{on:{click:function(s){t.complete(2)}}},[a("v-list-tile-action",[a("v-checkbox",{attrs:{value:t.list[2],color:"success"}})],1),a("v-list-tile-title",[t._v("\n                  Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit\n                ")]),a("div",{staticClass:"d-flex"},[a("v-tooltip",{attrs:{top:"","content-class":"top"}},[a("v-btn",{staticClass:"v-btn--simple",attrs:{slot:"activator",color:"success",icon:""},slot:"activator"},[a("v-icon",{attrs:{color:"primary"}},[t._v("mdi-pencil")])],1),a("span",[t._v("Edit")])],1),a("v-tooltip",{attrs:{top:"","content-class":"top"}},[a("v-btn",{staticClass:"v-btn--simple",attrs:{slot:"activator",color:"danger",icon:""},slot:"activator"},[a("v-icon",{attrs:{color:"error"}},[t._v("mdi-close")])],1),a("span",[t._v("Close")])],1)],1)],1)],1)],1)}))],1)],1)],1)],1)},i=[],o=a("bc3a"),r=a.n(o),l={data:function(){return{loading:!1,stargazers_count:null,open_issues:null,forks:null,numberOfCommits:null,contributorsTotal:null,additionsChart:null,commitsAuthor:null,deletionsChart:null,commitsChart:null,ChartsOptions:{axisX:{showLabel:!1,showGrid:!1},lineSmooth:!0,showPoint:!1,showArea:!0,chartPadding:{top:25,right:0,bottom:0,left:15}},headers:[{sortable:!1,text:"ID",value:"id"},{sortable:!1,text:"Company",value:"name"},{sortable:!1,text:"Salary",value:"salary",align:"right"},{sortable:!1,text:"Country",value:"country",align:"right"},{sortable:!1,text:"City",value:"city",align:"right"}],items:[{name:"Banco do Brasil Você Azul",country:"Brazil",city:"Remote",salary:"$35,738"},{name:"2Mundos",country:"Brazil / USA",city:"São Paulo",salary:"$23,738"},{name:"IBM",country:"Brazil",city:"São Paulo",salary:"$56,142"},{name:"Tagview Tech",country:"Brazil",city:"Remote",salary:"$38,735"}],tabs:0,list:{0:!1,1:!1,2:!1}}},methods:{complete:function(t){this.list[t]=!this.list[t]}},beforeCreate:function(){var t=this;this.loading=!0;var s,a={labels:[],series:[[]]},e={labels:[],series:[[]]},i={labels:[],series:[[]]};r.a.get("https://api.github.com/repos/Draichi/cryptocurrency_prediction").then(function(s){t.stargazers_count=String(s.data.stargazers_count),t.open_issues=String(s.data.open_issues),t.forks=String(s.data.forks)}),r.a.get("https://api.github.com/repos/Draichi/cryptocurrency_prediction/stats/contributors").then(function(o){for(var r in t.numberOfCommits=String(o.data[1].total),t.commitsAuthor=o.data[1].author,s=o.data[1].weeks,s)a.labels.push(r),a.series[0].push(s[r].a),e.labels.push(r),e.series[0].push(s[r].d),i.labels.push(r),i.series[0].push(s[r].c);t.additionsChart=a,t.deletionsChart=e,t.commitsChart=i}),this.loading=!1}},n=l,c=a("2877"),d=Object(c["a"])(n,e,i,!1,null,null,null);s["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d0d63f1.40bd731c.js.map