(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{"5bc955aeb31b34fcf410":function(e,t,r){"use strict";r.r(t);var n=r("8af190b70a6bc55c6f1b"),s=r.n(n),a=r("d7dd51e1bf6bfc2c9c3d"),o=r("a28fc3c963a1d4d1a2e5"),i=r("df4d709115ae1aca60ef"),c=r("adc20f99e57c573c589c"),u=r("d95b0cf107403b178365"),p=r("54f683fcda7806277002"),l="app/ViewPractice/SAVE_ANSWER_REQUEST",d="app/ViewPractice/SAVE_ANSWER_SUCCESS",f="app/ViewPractice/SAVE_ANSWER_FAILURE",v="app/ViewPractice/LOAD_ALL_QUESTIONNAIRE_REQUEST",_="app/ViewPractice/LOAD_ALL_QUESTIONNAIRE_SUCCESS",w="app/ViewPractice/LOAD_ALL_QUESTIONNAIRE_FAILURE",m="app/ViewPractice/POST_RESULT_REQUEST",b="app/ViewPractice/POST_RESULT_SUCCESS",h="app/ViewPractice/POST_RESULT_FAILURE",g="app/ViewPractice/POST_QUESTION_SCORE_REQUEST",S="app/ViewPractice/POST_QUESTION_SCORE_SUCCESS",O="app/ViewPractice/POST_QUESTION_SCORE_FAILURE",A="app/ViewPractice/CLEAR_MESSAGE",R=r("62cade0222f879de1092"),y=Object(p.fromJS)({response:"",error:"",requesting:!1,success:!1,getQuestionnaireSuccess:{},getFavoriteQuestionnaireSuccess:[],examDisplay:{},trialQuestions:{},resultResponse:{},faverror:"",favresponse:"",saveAnswerResponse:{}});var j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case l:case v:case m:case g:return e.merge({requesting:!0,success:!1,response:"",error:"",faverror:"",favresponse:"",saveAnswerResponse:{}});case S:return e.merge({requesting:!1,success:!0,response:t.response.message,error:""});case _:return e.merge({requesting:!1,success:!0,response:t.response.message,getQuestionnaireSuccess:Object(p.fromJS)(t.response.data.dataList),error:""});case b:return e.merge({requesting:!1,success:!0,response:t.response.message,error:null,resultResponse:Object(p.fromJS)(t.response.data)});case d:return e.merge({requesting:!1,success:!0,response:t.response.message,error:null,saveAnswerResponse:Object(p.fromJS)(t.response.data)});case f:case w:case h:case O:return e.merge({requesting:!1,success:!1,response:"",error:t.error.message});case A:return e.merge({requesting:!1,success:!1,response:"",error:"",faverror:"",favresponse:""});case R.t:return y;default:return e}},q=r("d782b72bc5b680c7122c"),x=r("3ad3c1378076e862aab0"),k=r("371a6f90cf4b090759be"),E=Object(k.a)(l,"payload"),N=Object(k.a)(d,"response"),C=Object(k.a)(f,"error"),I=(Object(k.a)("app/ViewPractice/DEFAULT_ACTION_REQUEST","payload"),Object(k.a)("app/ViewPractice/DEFAULT_ACTION_SUCCESS","response"),Object(k.a)("app/ViewPractice/DEFAULT_ACTION_FAILURE","error"),Object(k.a)(v,"id","package_id")),P=Object(k.a)(_,"response"),U=Object(k.a)(w,"error"),T=Object(k.a)(g,"data"),L=Object(k.a)(S,"response"),Q=Object(k.a)(O,"error"),V=Object(k.a)(m,"result"),B=Object(k.a)(b,"response"),J=Object(k.a)(h,"error"),D=Object(k.a)(A),F=r("8636a5b0e6ac43ae8b4d"),G=regeneratorRuntime.mark(Z),H=regeneratorRuntime.mark(ee),M=regeneratorRuntime.mark(te),W=regeneratorRuntime.mark(re),Y=regeneratorRuntime.mark(ne),$=regeneratorRuntime.mark(se),z=regeneratorRuntime.mark(ae),K=regeneratorRuntime.mark(oe),X=regeneratorRuntime.mark(ie);function Z(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(q.take)(_);case 2:e.sent;case 3:case"end":return e.stop()}},G)}function ee(e){var t,r,n;return regeneratorRuntime.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return t=localStorage.getItem("token"),r=e.id,e.package_id,s.next=4,Object(q.fork)(Z);case 4:return n=s.sent,s.next=7,Object(q.fork)(F.a.get("product/questionnaires/".concat(r,"?page=1&perpage=100"),P,U,t));case 7:return s.next=9,Object(q.take)([x.LOCATION_CHANGE,w]);case 9:return s.next=11,Object(q.cancel)(n);case 11:case"end":return s.stop()}},H)}function te(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(q.take)(b);case 2:e.sent;case 3:case"end":return e.stop()}},M)}function re(e){var t,r,n;return regeneratorRuntime.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return t=localStorage.getItem("token"),s.next=3,Object(q.fork)(te);case 3:return r=s.sent,n=e.result,s.next=7,Object(q.fork)(F.a.post("mcqs-exam/score",B,J,n,t));case 7:return s.next=9,Object(q.take)([x.LOCATION_CHANGE,h]);case 9:return s.next=11,Object(q.cancel)(r);case 11:case"end":return s.stop()}},W)}function ne(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(q.take)(S);case 2:e.sent;case 3:case"end":return e.stop()}},Y)}function se(e){var t,r,n;return regeneratorRuntime.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return t=localStorage.getItem("token"),s.next=3,Object(q.fork)(ne);case 3:return r=s.sent,n=e.data,s.next=7,Object(q.fork)(F.a.post("mcqs-exam/record",L,Q,n,t));case 7:return s.next=9,Object(q.take)([x.LOCATION_CHANGE,O]);case 9:return s.next=11,Object(q.cancel)(r);case 11:case"end":return s.stop()}},$)}function ae(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(q.take)(d);case 2:e.sent;case 3:case"end":return e.stop()}},z)}function oe(e){var t,r,n;return regeneratorRuntime.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return t=localStorage.getItem("token"),s.next=3,Object(q.fork)(ae);case 3:return r=s.sent,n=e.payload,s.next=7,Object(q.fork)(F.a.post("user-answer",N,C,n,t));case 7:return s.next=9,Object(q.take)([x.LOCATION_CHANGE,h]);case 9:return s.next=11,Object(q.cancel)(r);case 11:case"end":return s.stop()}},K)}function ie(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(q.takeLatest)(v,ee);case 2:return e.next=4,Object(q.takeLatest)(m,re);case 4:return e.next=6,Object(q.takeLatest)(g,se);case 6:return e.next=8,Object(q.takeLatest)(l,oe);case 8:case"end":return e.stop()}},X)}var ce,ue=r("ab4cb61bcb2dc161defb"),pe=r("6542cd13fd5dd1bcffd4"),le=function(e){return e.viewQuestions},de=r("da310028ba2a28510514"),fe=r("6b20a4038fb2adfb033d"),ve=r("2b8f49302ad2a05bdc68"),_e=r("7f6f1d74f1e2335921b8"),we=r("ef0acc5ffa00a4bbaa73"),me=r("e1074860633bf61d61c3"),be=r("bf479727ef34adb276a5");r("d9e1306b6982cddc4a24");function he(e,t,r,n){ce||(ce="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var s=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),t&&s)for(var o in s)void 0===t[o]&&(t[o]=s[o]);else t||(t=s||{});if(1===a)t.children=n;else if(a>1){for(var i=new Array(a),c=0;c<a;c++)i[c]=arguments[c+3];t.children=i}return{$$typeof:ce,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}var ge,Se=he(de.a,{className:"answer-tip",icon:"info"}),Oe=he(de.a,{className:"answer-tip",icon:"info"}),Ae=he(de.a,{className:"answer-tip",icon:"info"}),Re=he(fe.a.Field,{},void 0,he(de.a,{color:"green",type:"submit"},void 0,"Save Answer")),ye=he("i",{className:"icon-arrow-left mr-1"}),je=he("i",{className:"icon-arrow-right ml-1"}),qe=he("div",{className:"score_point"},void 0,he("h2",{className:"main_title"},void 0,"Detail")),xe=he("p",{}),ke=he("p",{}),Ee=he("p",{}),Ne=function(e){var t=e.data,r=(e.productId,e.page,e.perPage,e.handleAnswerChange),n=e.saveSubjectiveAnswer,s=e.handleNextButton,a=(e.handleViewResultButton,e.handleSubmitResultButton,e.questionIdx),o=e.showAnswer,i=(e.error_msg,e.show_final_result),c=(e.score,e.full_score,e.is_radio_disabled),u=(e.time,e.isCorrect),p=(e.count,e.resultResponse,e.url,e.handleBackButton),l=(e.fav_questions,e.handleJump,e.correctAnswers),d=(e.attempted_length,e.saveAnswerResponse),f=e.tempValue,v=[{answer:"Yes"},{answer:"No"}];return he("div",{},void 0,he(ve.a,{},void 0,t.length>0&&!i&&he(ve.a.Column,{largeScreen:16,widescreen:16},void 0,he("div",{className:"question-wrap mr-5"},void 0,he("h4",{className:"item"},void 0,a+1," / ",t.length),t[a]&&"Objective"==t[a].type_of_questions&&he(fe.a,{},void 0,he("div",{className:"wrapper"},void 0," ",he("h1",{className:"question-title"},void 0,t[a].question),he(_e.a,{content:t[a].answer_tip,trigger:Se})),he(fe.a.Field,{},void 0,t[a].answers.length>0&&t[a].answers.map(function(e,n){return he("div",{},"ans".concat(n),he(we.a,{disabled:c,label:"".concat(e.answer),value:e.answer,name:"ans".concat(a),checked:!(!d.question_answer||!d.question_answer.hasOwnProperty(t[a].questionnaire_id))&&d.question_answer[t[a].questionnaire_id]===e.answer,onChange:function(e,s){return r(e,s,n,a,t[a].questionnaire_id)}}))}))),t[a]&&"Yes/No"==t[a].type_of_questions&&he("div",{},void 0,he("div",{className:"wrapper"},void 0," ",he("h1",{className:"question-title"},void 0,t[a].question),he(_e.a,{content:t[a].answer_tip,trigger:Oe})),he(fe.a,{},void 0,he(fe.a.Field,{},void 0,v.length>0&&v.map(function(e,n){return he("div",{},"ans".concat(n),he(we.a,{disabled:c,label:"".concat(e.answer),value:e.answer,name:"ans".concat(a),checked:!(!d.question_answer||!d.question_answer.hasOwnProperty(t[a].questionnaire_id))&&d.question_answer[t[a].questionnaire_id]===e.answer,onChange:function(e,s){return r(e,s,n,a,t[a].questionnaire_id)}}))})))),t[a]&&"Subjective"==t[a].type_of_questions&&he("div",{},void 0,he("div",{className:"wrapper"},void 0," ",he("h1",{className:"question-title"},void 0,t[a].question),he(_e.a,{content:t[a].answer_tip,trigger:Ae})),he(fe.a,{onSubmit:function(){return n()}},void 0,he(fe.a.Field,{},void 0,he(me.a,{placeholder:"Tell us more",cols:100,rows:5,value:""==f&&d.question_answer.hasOwnProperty(t[a].questionnaire_id)?d.question_answer[t[a].questionnaire_id]:f,onChange:function(e,n){return r(e,n,"",a,t[a].questionnaire_id)}})),Re)),0!=a&&he(de.a,{className:"buy-btn prev-btn",onClick:function(e){return p(e,a)}},void 0,ye," Previous"),a<t.length-1&&he(de.a,{className:"buy-btn next-btn",onClick:function(e){return s(e,a,t[a].questionnaire_id)}},void 0,"Next",je),o&&he("div",{className:"correct"===u?"result__dis_correct":"result__dis"},void 0,he("h1",{},void 0,"You are ",u,he(be.a,{name:"correct"===u?"check":"close",color:"correct"===u?"green":"red"})),he("p",{},void 0,he("span",{},void 0,"Correct Answer : ",l[a])),t&&t.length>0&&he("div",{className:"rationale",dangerouslySetInnerHTML:{__html:t[a].rationale}}))))),i&&he("div",{},void 0,qe,he("div",{className:"resultdetail"},void 0,he(ve.a,{},void 0,t&&t.length>0&&t.map(function(e,t){return he(ve.a.Column,{largeScreen:16,widescreen:16},"que".concat(t),he("div",{},void 0,he("div",{className:"result_listing"},void 0,"Objective"==e.type_of_questions&&he("div",{},void 0,he("span",{},void 0,he("b",{},void 0,"Q) ",t+1)),he("h3",{},void 0,e.question),xe),"Yes/No"==e.type_of_questions&&he("div",{},void 0,he("span",{},void 0,he("b",{},void 0,"Q) ",t+1)),he("h3",{},void 0,e.question),ke),"Subjective"==e.type_of_questions&&he("div",{},void 0,he("span",{},void 0,he("b",{},void 0,"Q) ",t+1)),he("h3",{},void 0,e.question),Ee))))})))))};function Ce(e){return(Ce="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Ie(e,t,r,n){ge||(ge="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var s=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),t&&s)for(var o in s)void 0===t[o]&&(t[o]=s[o]);else t||(t=s||{});if(1===a)t.children=n;else if(a>1){for(var i=new Array(a),c=0;c<a;c++)i[c]=arguments[c+3];t.children=i}return{$$typeof:ge,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}function Pe(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function Ue(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Te(e){return(Te=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Le(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Qe(e,t){return(Qe=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Ve(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var Be=Object(o.b)({isSuccess:Object(o.a)(le,function(e){return e.get("success")}),isRequesting:Object(o.a)(le,function(e){return e.get("requesting")}),successResponse:Object(o.a)(le,function(e){return e.get("response")}),errorResponse:Object(o.a)(le,function(e){return e.get("error")}),getQuestionSucces:Object(o.a)(le,function(e){return e.get("getQuestionnaireSuccess")}),examData:Object(o.a)(le,function(e){return e.get("examDisplay")}),resultResponse:Object(o.a)(le,function(e){return e.get("resultResponse")}),currentUser:Object(pe.e)(),saveAnswerResponse:Object(o.a)(le,function(e){return e.get("saveAnswerResponse")})}),Je=[],De=Ie("h1",{className:"main_title"},void 0,"Questionnaire"),Fe=function(e){function t(){var e,r,n,s;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return n=this,s=(e=Te(t)).call.apply(e,[this].concat(o)),r=!s||"object"!==Ce(s)&&"function"!==typeof s?Le(n):s,Ve(Le(r),"state",{bit:!1,tempValue:"",payload:{},page:1,perPage:1,query:{},data:{},questionIdx:0,score:0,full_score:0,error_msg:"",correctAnswer:"",count:0,fav_questions:[],previousUrl:window.location.href,saveAnswerResponse:{}}),Ve(Le(r),"saveSubjectiveAnswer",function(){r.props.saveAnswerRequest(r.state.payload)}),Ve(Le(r),"handleAnswerChange",function(e,t,n,s,a){if("textarea"!=t.as){var o={user_id:r.props.currentUser.toJS()._id,product_id:r.props.match.params.product_id,question_answer:Ve({},a,t.value)};r.props.saveAnswerRequest(o)}else{r.setState({bit:!0,tempValue:t.value});var i={user_id:r.props.currentUser.toJS()._id,product_id:r.props.match.params.product_id,question_answer:Ve({},a,t.value)};r.setState({payload:i})}var c=r.state.data;c[s].user_answer=t.value,c[s].user_answer_number=n,r.setState({data:c,showAnswer:!1,error_msg:""},function(){localStorage.setItem("previousState>".concat(r.state.previousUrl),JSON.stringify(r.state))}),c[s].multi_answer_applicable&&(c[s].user_answers.includes(t.value)?r.handleAnswer(t.value,c,s,n+1):(c[s].user_answers=[].concat(Pe(c[s].user_answers),[t.value]),c[s].user_answer_numbers=[].concat(Pe(c[s].user_answer_numbers),[n+1]),r.setState({data:c})))}),Ve(Le(r),"handleAnswer",function(e,t,n,s){var a=t[n].user_answers.filter(function(t){return t!==e}),o=t[n].user_answer_numbers.filter(function(e){return e!==s}),i=r.state.data;i[n].user_answers=a,i[n].user_answer_numbers=o,r.setState({data:i})}),Ve(Le(r),"handleNextButton",function(e,t,n){var s=r.state,a=s.questionIdx;s.payload;a++,r.setState({questionIdx:a,showAnswer:!1,is_radio_disabled:!1})}),Ve(Le(r),"handleSubmitResultButton",function(e,t){Je=[];var n=r.state.data.filter(function(e){return Object.keys(e).includes("user_answer")});r.setState({attempted_length:n.length});var s=[];r.setState({show_final_result:!0}),r.state.data.map(function(e,t){e.answers.map(function(e){e.is_answer_correct_option&&(s[t]=e.answer)})}),r.state.data.map(function(e,t){e.multi_answer_applicable?s[t].map(function(r){e.user_answers.includes(r)?Je[t]=e.point:Je[t]=0}):s[t]==e.user_answer?Je[t]=e.point:Je[t]=0});var a=null,o=0;Je.map(function(e){a+=e,0!=e&&(o+=1)}),r.setState({count:o}),r.setState({score:a},function(){}),localStorage.removeItem("previousState>".concat(r.state.previousUrl))}),Ve(Le(r),"handleBackButton",function(e,t){r.setState({questionIdx:t-1,showAnswer:!1,is_radio_disabled:!1})}),Ve(Le(r),"handleJump",function(e,t,n){var s="";if(r.state.data[n].user_answer){s=r.state.data[n].answers.filter(function(e){return e.answer==r.state.data[n].user_answer});var a={product_id:r.state.product_id,questionnaire_id:r.state.data[n]._id,answer_id:s[0].id};r.props.postQuestionScore(a)}r.setState({questionIdx:t,showAnswer:!1,is_radio_disabled:!1})}),r}var r,n,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Qe(e,t)}(t,s.a.Component),r=t,(n=[{key:"componentDidMount",value:function(){var e=this.state,t=(e.page,e.perPage,e.query,{user_id:this.props.currentUser.toJS()._id,product_id:this.props.match.params.product_id,question_answer:{}});this.props.saveAnswerRequest(t),JSON.parse(localStorage.getItem("previousState>".concat(this.state.previousUrl)));var r=this.props.match.params.product_id?this.props.match.params.product_id:null;r&&this.props.getQuestionRequest(r,"111")}},{key:"componentWillReceiveProps",value:function(e){var t=this;e.saveAnswerResponse!==this.props.saveAnswerResponse&&e.saveAnswerResponse.size>0&&this.setState({saveAnswerResponse:e.saveAnswerResponse&&e.saveAnswerResponse.toJS()}),e.getQuestionSucces!==this.props.getQuestionSucces&&this.setState({data:e.getQuestionSucces.toJS()},function(){var e=[],r=0;t.state.data&&t.state.data.length>0&&t.state.data.map(function(t,r){t.answers.map(function(t){t.is_answer_correct_option&&(e[r]=t.answer)})}),t.setState({correctAnswers:e}),t.state.data&&t.state.data.length>0&&t.state.data.map(function(e,n){r+=parseInt(e.point);var s=t.state.data;e.multi_answer_applicable&&(s[n].user_answers=[],s[n].user_answer_numbers=[]),t.setState({data:s})}),t.setState({full_score:r})}),e.examData!==this.props.examData&&this.setState({examData:e.examData.toJS()}),e.resultResponse!=this.props.resultResponse&&this.setState({resultResponse:e.resultResponse.toJS()})}},{key:"componentWillUnmount",value:function(){this.props.clearMessage()}},{key:"render",value:function(){var e=this.state,t=e.page,r=e.perPage,n=e.data,s=e.questionIdx,a=e.showAnswer,o=e.error_msg,c=e.show_final_result,u=e.score,p=e.full_score,l=e.is_radio_disabled,d=e.examData,f=e.resultResponse,v=e.url,_=e.fav_questions,w=e.favFailure,m=e.saveAnswerResponse,b=e.tempValue,h=this.props,g=(h.successResponse,h.errorResponse,null);return w&&(g=Ie(i.a,{message:w&&w,timeout:5e3,error:!0})),Ie("div",{},void 0,g&&g,!c&&De,Ie(Ne,{data:n,tempValue:b,saveAnswerResponse:m,page:t,perPage:r,productId:this.state.product_id,saveSubjectiveAnswer:this.saveSubjectiveAnswer,handleAnswerChange:this.handleAnswerChange,handleNextButton:this.handleNextButton,questionIdx:s,showAnswer:a,handleViewResultButton:this.handleViewResultButton,handleSubmitResultButton:this.handleSubmitResultButton,error_msg:o,show_final_result:c,score:u,full_score:p,is_radio_disabled:l,time:d&&d.time_limit,isCorrect:this.state.correctAnswer,count:this.state.count,resultResponse:f,url:v,handleBackButton:this.handleBackButton,fav_questions:_,handleJump:this.handleJump,correctAnswers:this.state.correctAnswers,attempted_length:this.state.attempted_length}))}}])&&Ue(r.prototype,n),a&&Ue(r,a),t}(),Ge=Object(u.a)({key:"viewQuestions",reducer:j}),He=Object(c.a)({key:"viewQuestions",saga:ie}),Me=Object(a.connect)(Be,function(e){return{getQuestionRequest:function(t,r){return e(I(t,r))},clearMessage:function(){return e(D())},postResult:function(t){return e(V(t))},postQuestionScore:function(t){return e(T(t))},saveAnswerRequest:function(t){return e(E(t))}}});t.default=Object(ue.compose)(Ge,He,Me)(Fe)}}]);