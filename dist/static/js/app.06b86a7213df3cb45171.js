webpackJsonp([1],{"1/oy":function(t,e){},"1tEt":function(t,e){},"94LH":function(t,e){},"9M+g":function(t,e){},GfHa:function(t,e){},Id91:function(t,e){},Jmt5:function(t,e){},MGpp:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("7+uW"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var o=s("VU/8")({name:"App"},i,!1,function(t){s("pKwF")},null,null).exports,a=s("/ocq"),r=s("mtWM"),c=s.n(r),l=function(){return c.a.create({baseURL:"https://polls.apiblueprint.org",headers:{Accept:"application/json","Content-Type":"application/json"}})},u=function(){return l().get("/questions")},d=function(t){return l().post(t)},h=function(t,e){var s={question:t,choices:e};return l().post("/questions",s,{headers:{"Content-Type":"application/json"}})},v={props:{index:{required:!0},question:{required:!0}},methods:{dateFormatter:function(t){return new Date(t).toLocaleDateString().toString()}}},p={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"header-content"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col col-1"},[t._v(" "+t._s(t.index+1)+" ")]),t._v(" "),s("div",{staticClass:"col col-10"},[t._v(" \n            "+t._s(t.question.question)),s("hr"),t._v(" "),s("div",{staticClass:"question-details"},[s("span",{staticClass:"date"},[t._v(" Published at :"+t._s(t.dateFormatter(t.question.published_at)))]),t._v(" "),s("span",{staticClass:"choices"},[t._v(" "+t._s(t.question.choices.length)+" Choices ")])])]),t._v(" "),s("div",{staticClass:"col col-1"},[s("button",{directives:[{name:"b-popover",rawName:"v-b-popover.hover",value:"Click me to vote !",expression:"'Click me to vote !'",modifiers:{hover:!0}},{name:"b-toggle",rawName:"v-b-toggle",value:"num-"+t.index,expression:"'num-'+index"}],staticClass:"vote-btn",attrs:{block:"",href:"#"}})])])])},staticRenderFns:[]};var m={data:function(){return{questionText:"",choicetags:[],showDismissibleAlert:!1,alertMessage:""}},methods:{createNewQuestion:function(t,e){var s=this;""!==t&&e.length>0?h(t,e).then(function(t){console.log(t),s.hideModal()}).catch(function(t){console.log(t),s.showDismissibleAlert=!0,s.alertMessage="Something went wrong.Please try again !"}):(this.showDismissibleAlert=!0,this.alertMessage="No Data to save.Please fill out the form !")},showModal:function(){this.$refs.myModalRef.show()},hideModal:function(){this.$refs.myModalRef.hide(),this.clearForm()},clearForm:function(){this.choicetags=[],this.questionText="",this.alertMessage="",this.showDismissibleAlert=!1}}},f={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row"},[s("div",{staticClass:" col add-button-wrapper"},[s("b-button",{directives:[{name:"b-popover",rawName:"v-b-popover.hover",value:"Add a new question with multiple choices",expression:"'Add a new question with multiple choices'",modifiers:{hover:!0}}],staticClass:"add-btn",on:{click:t.showModal}},[t._v("\n            + Create new question\n        ")]),t._v(" "),s("b-modal",{ref:"myModalRef",attrs:{"hide-footer":"",title:"Create new question"}},[s("div",{staticClass:"d-block text-center"},[s("b-container",{attrs:{fluid:""}},[s("b-row",{staticClass:"my-1"},[s("b-col",{attrs:{sm:"2"}},[s("label",{attrs:{for:"input-small"}},[t._v("Question:")])]),t._v(" "),s("b-col",{attrs:{sm:"10"}},[s("b-form-input",{attrs:{id:"input-small",size:"sm",type:"text",placeholder:"Enter your question"},model:{value:t.questionText,callback:function(e){t.questionText=e},expression:"questionText"}})],1)],1),t._v(" "),s("b-row",{staticClass:"my-1"},[s("b-col",{attrs:{sm:"2"}},[s("label",{attrs:{for:"input-small"}},[t._v("Choices:")])]),t._v(" "),s("b-col",{attrs:{sm:"10"}},[s("input-tag",{attrs:{placeholder:"Enter your choices",tags:t.choicetags,limit:"5"},on:{"update:tags":function(e){t.choicetags=e}}})],1)],1),t._v(" "),s("b-row",[s("b-alert",{staticClass:"alert",attrs:{variant:"danger",dismissible:"",show:t.showDismissibleAlert},on:{dismissed:function(e){t.showDismissibleAlert=!1}}},[t._v("\n                        "+t._s(t.alertMessage)+"\n                    ")])],1),t._v(" "),s("b-row",{staticClass:"my-1"},[s("b-btn",{staticClass:"mt-3 submit-btn",attrs:{block:""},on:{click:function(e){t.createNewQuestion(t.questionText,t.choicetags)}}},[t._v("Save")])],1)],1)],1)])],1)])},staticRenderFns:[]};var b={components:{QuestionDetails:s("VU/8")(v,p,!1,function(t){s("Z1vx")},null,null).exports,QuestionModal:s("VU/8")(m,f,!1,function(t){s("1tEt")},null,null).exports},data:function(){return{questionsList:[],checkedChoice:{},show:!1}},created:function(){this.getQuestions()},methods:{getQuestions:function(){var t=this;return u().then(function(e){return t.questionsList=e.data}).catch(function(t){return console.log("error :",t)}),this.questionsList},dateFormatter:function(t){return new Date(t).toLocaleDateString().toString()},getChoicePercentage:function(t,e){var s=0;return t.map(function(t){return s+=t.votes}),s>0?(e.votes*(100/s)).toFixed():0},voteOnAChoice:function(t){var e=this;d(t.url).then(function(t){return e.getQuestions()}).catch(function(t){return console.log(t)})}}},_={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"centred-wrapper"},[s("question-modal"),t._v(" "),s("div",{attrs:{role:"tablist"}},t._l(t.questionsList,function(e,n){return s("b-card",{key:n,staticClass:"mb-1",attrs:{"no-body":""}},[s("b-card-header",{staticClass:"header",attrs:{"header-tag":"header",role:"tab"}},[s("question-details",{attrs:{index:n,question:e}})],1),t._v(" "),s("b-collapse",{attrs:{id:"num-"+n,accordion:"my-accordion",role:"tabpanel"}},[s("b-card-body",[s("p",{staticClass:"card-text"},[s("table",t._l(e.choices,function(n){return s("tr",[s("td",[t._v(" "+t._s(n.choice))]),t._v(" "),s("td",[t._v(t._s(n.votes)+" votes")]),t._v(" "),s("td",[t._v(t._s(t.getChoicePercentage(e.choices,n))+" %")]),t._v(" "),s("td",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.checkedChoice,expression:"checkedChoice"}],attrs:{type:"radio",id:n},domProps:{value:n,checked:t._q(t.checkedChoice,n)},on:{change:function(e){t.checkedChoice=n}}})])])}))]),t._v(" "),s("p",{staticClass:"card-text btn-wrapper"},[s("b-button",{attrs:{size:"50",variant:"success"},on:{click:function(e){t.voteOnAChoice(t.checkedChoice)}}},[t._v("Submit")])],1)])],1)],1)}))],1)},staticRenderFns:[]};var g={components:{QuestionsList:s("VU/8")(b,_,!1,function(t){s("94LH")},"data-v-6b84239c",null).exports},data:function(){return{}},created:function(){},methods:{}},C={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("h1",[this._v("Please fill out this poll with your inputs")]),this._v(" "),this._m(0),this._v(" "),e("questions-list")],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("h3",[this._v(" Thanks for your time "),e("i",{staticClass:"em em-smiley"})])}]};var w=s("VU/8")(g,C,!1,function(t){s("MGpp")},"data-v-591aa06f",null).exports;n.a.use(a.a);var q=new a.a({routes:[{path:"/",name:"MainPage",component:w}]}),x=s("cOEn"),y=s("e6fC"),M=(s("Jmt5"),s("9M+g"),s("28+M")),k=s.n(M);n.a.config.productionTip=!1,n.a.component("input-tag",k.a),n.a.use(x.Collapse),n.a.use(y.a),new n.a({el:"#app",router:q,components:{App:o},template:"<App/>"})},Z1vx:function(t,e){},pKwF:function(t,e){},zj2Q:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.06b86a7213df3cb45171.js.map