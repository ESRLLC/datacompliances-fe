(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"19691c95782ba934103e":function(e,t){e.exports="data:image/svg+xml,%3Csvg height='572pt' viewBox='-18 -18 572.00902 572' width='572pt' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m279.628906 143.855469c-4.851562-4.855469-12.722656-4.855469-17.582031 0-4.855469 4.851562-4.855469 12.726562 0 17.582031l94.164063 94.164062h-250.191407c-6.886719 0-12.472656 5.585938-12.472656 12.472657 0 6.890625 5.585937 12.472656 12.472656 12.472656h250.066407l-94.164063 94.164063c-2.335937 2.328124-3.648437 5.496093-3.648437 8.792968 0 3.300782 1.3125 6.460938 3.648437 8.792969 2.335937 2.355469 5.535156 3.660156 8.855469 3.617187 3.308594-.015624 6.484375-1.3125 8.851562-3.617187l115.367188-115.363281c2.347656-2.351563 3.65625-5.542969 3.621094-8.859375-.023438-3.308594-1.320313-6.472657-3.621094-8.851563zm0 0'/%3E%3Cpath d='m268.15625-.0742188c-108.457031-.0195312-206.242188 65.3085938-247.746094 165.5117188-41.496094 100.207031-18.542968 215.542969 58.171875 292.210938 104.703125 104.703124 274.453125 104.703124 379.152344 0 104.699219-104.695313 104.699219-274.445313 0-379.148438-50.167969-50.453125-118.429687-78.746094-189.578125-78.5742188zm0 511.3554688c-134.074219 0-243.203125-109.132812-243.203125-243.207031s109.128906-243.203125 243.203125-243.203125 243.207031 109.128906 243.207031 243.203125-109.132812 243.207031-243.207031 243.207031zm0 0'/%3E%3C/svg%3E"},"5bc955aeb31b34fcf410":function(e,t,r){"use strict";r.r(t);var n=r("8af190b70a6bc55c6f1b"),s=r.n(n),a=r("d7dd51e1bf6bfc2c9c3d"),o=r("a28fc3c963a1d4d1a2e5"),i=r("df4d709115ae1aca60ef"),c=r("adc20f99e57c573c589c"),u=r("d95b0cf107403b178365"),l=r("54f683fcda7806277002"),p="app/ViewPractice/SAVE_ANSWER_REQUEST",d="app/ViewPractice/SAVE_ANSWER_SUCCESS",f="app/ViewPractice/SAVE_ANSWER_FAILURE",m="app/ViewPractice/LOAD_ALL_QUESTIONNAIRE_REQUEST",v="app/ViewPractice/LOAD_ALL_QUESTIONNAIRE_SUCCESS",b="app/ViewPractice/LOAD_ALL_QUESTIONNAIRE_FAILURE",w="app/ViewPractice/POST_RESULT_REQUEST",g="app/ViewPractice/POST_RESULT_SUCCESS",_="app/ViewPractice/POST_RESULT_FAILURE",h="app/ViewPractice/POST_QUESTION_SCORE_REQUEST",S="app/ViewPractice/POST_QUESTION_SCORE_SUCCESS",y="app/ViewPractice/POST_QUESTION_SCORE_FAILURE",O="app/ViewPractice/CLEAR_MESSAGE",E=r("62cade0222f879de1092"),C=Object(l.fromJS)({response:"",error:"",requesting:!1,success:!1,getQuestionnaireSuccess:{},getFavoriteQuestionnaireSuccess:[],examDisplay:{},trialQuestions:{},resultResponse:{},faverror:"",favresponse:"",saveAnswerResponse:{}});var R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case p:case m:case w:case h:return e.merge({requesting:!0,success:!1,response:"",error:"",faverror:"",favresponse:"",saveAnswerResponse:{}});case S:return e.merge({requesting:!1,success:!0,response:t.response.message,error:""});case v:return e.merge({requesting:!1,success:!0,response:t.response.message,getQuestionnaireSuccess:Object(l.fromJS)(t.response.data.dataList),error:""});case g:return e.merge({requesting:!1,success:!0,response:t.response.message,error:null,resultResponse:Object(l.fromJS)(t.response.data)});case d:return e.merge({requesting:!1,success:!0,response:t.response.message,error:null,saveAnswerResponse:Object(l.fromJS)(t.response.data)});case f:case b:case _:case y:return e.merge({requesting:!1,success:!1,response:"",error:t.error.message});case O:return e.merge({requesting:!1,success:!1,response:"",error:"",faverror:"",favresponse:""});case E.t:return C;default:return e}},A=r("d782b72bc5b680c7122c"),j=r("3ad3c1378076e862aab0"),q=r("371a6f90cf4b090759be"),x=Object(q.a)(p,"payload"),k=Object(q.a)(d,"response"),N=Object(q.a)(f,"error"),P=(Object(q.a)("app/ViewPractice/DEFAULT_ACTION_REQUEST","payload"),Object(q.a)("app/ViewPractice/DEFAULT_ACTION_SUCCESS","response"),Object(q.a)("app/ViewPractice/DEFAULT_ACTION_FAILURE","error"),Object(q.a)(m,"id","package_id")),I=Object(q.a)(v,"response"),T=Object(q.a)(b,"error"),Q=Object(q.a)(h,"data"),U=Object(q.a)(S,"response"),V=Object(q.a)(y,"error"),L=Object(q.a)(w,"result"),B=Object(q.a)(g,"response"),D=Object(q.a)(_,"error"),J=Object(q.a)(O),F=r("8636a5b0e6ac43ae8b4d"),G=regeneratorRuntime.mark(Z),z=regeneratorRuntime.mark(ee),M=regeneratorRuntime.mark(te),H=regeneratorRuntime.mark(re),W=regeneratorRuntime.mark(ne),$=regeneratorRuntime.mark(se),Y=regeneratorRuntime.mark(ae),K=regeneratorRuntime.mark(oe),X=regeneratorRuntime.mark(ie);function Z(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(A.take)(v);case 2:e.sent;case 3:case"end":return e.stop()}},G)}function ee(e){var t,r,n;return regeneratorRuntime.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return t=localStorage.getItem("token"),r=e.id,e.package_id,s.next=4,Object(A.fork)(Z);case 4:return n=s.sent,s.next=7,Object(A.fork)(F.a.get("product/questionnaires/".concat(r,"?page=1&perpage=100"),I,T,t));case 7:return s.next=9,Object(A.take)([j.LOCATION_CHANGE,b]);case 9:return s.next=11,Object(A.cancel)(n);case 11:case"end":return s.stop()}},z)}function te(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(A.take)(g);case 2:e.sent;case 3:case"end":return e.stop()}},M)}function re(e){var t,r,n;return regeneratorRuntime.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return t=localStorage.getItem("token"),s.next=3,Object(A.fork)(te);case 3:return r=s.sent,n=e.result,s.next=7,Object(A.fork)(F.a.post("mcqs-exam/score",B,D,n,t));case 7:return s.next=9,Object(A.take)([j.LOCATION_CHANGE,_]);case 9:return s.next=11,Object(A.cancel)(r);case 11:case"end":return s.stop()}},H)}function ne(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(A.take)(S);case 2:e.sent;case 3:case"end":return e.stop()}},W)}function se(e){var t,r,n;return regeneratorRuntime.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return t=localStorage.getItem("token"),s.next=3,Object(A.fork)(ne);case 3:return r=s.sent,n=e.data,s.next=7,Object(A.fork)(F.a.post("mcqs-exam/record",U,V,n,t));case 7:return s.next=9,Object(A.take)([j.LOCATION_CHANGE,y]);case 9:return s.next=11,Object(A.cancel)(r);case 11:case"end":return s.stop()}},$)}function ae(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(A.take)(d);case 2:e.sent;case 3:case"end":return e.stop()}},Y)}function oe(e){var t,r,n;return regeneratorRuntime.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return t=localStorage.getItem("token"),s.next=3,Object(A.fork)(ae);case 3:return r=s.sent,n=e.payload,s.next=7,Object(A.fork)(F.a.post("user-answer",k,N,n,t));case 7:return s.next=9,Object(A.take)([j.LOCATION_CHANGE,_]);case 9:return s.next=11,Object(A.cancel)(r);case 11:case"end":return s.stop()}},K)}function ie(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(A.takeLatest)(m,ee);case 2:return e.next=4,Object(A.takeLatest)(w,re);case 4:return e.next=6,Object(A.takeLatest)(h,se);case 6:return e.next=8,Object(A.takeLatest)(p,oe);case 8:case"end":return e.stop()}},X)}var ce,ue=r("ab4cb61bcb2dc161defb"),le=r("6542cd13fd5dd1bcffd4"),pe=function(e){return e.viewQuestions},de=r("da310028ba2a28510514"),fe=r("6b20a4038fb2adfb033d"),me=r("3713851301f25187b918"),ve=r("2b8f49302ad2a05bdc68"),be=r("7f6f1d74f1e2335921b8"),we=r("ef0acc5ffa00a4bbaa73"),ge=r("e1074860633bf61d61c3");r("d9e1306b6982cddc4a24"),r("19691c95782ba934103e"),r("ed9f4dc215a99bf3dbca");function _e(e,t,r,n){ce||(ce="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var s=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),t&&s)for(var o in s)void 0===t[o]&&(t[o]=s[o]);else t||(t=s||{});if(1===a)t.children=n;else if(a>1){for(var i=new Array(a),c=0;c<a;c++)i[c]=arguments[c+3];t.children=i}return{$$typeof:ce,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}var he=_e("br",{}),Se=_e("i",{className:"icon-arrow-left mr-1"}),ye=_e("i",{className:"icon-arrow-right ml-1"}),Oe=_e(de.a,{className:"answer-tip",icon:"idea"}),Ee=_e("br",{}),Ce=_e("br",{}),Re=_e("h4",{className:"item"}),Ae=_e(fe.a.Field,{},void 0,_e(de.a,{color:"green",type:"submit"},void 0,"Save Answer")),je=_e("div",{className:"score_point"},void 0,_e("h2",{className:"main_title"},void 0,"Detail")),qe=_e("b",{},void 0,":"),xe=function(e){var t,r=e.data,n=(e.productId,e.page,e.perPage,e.handleAnswerChange),s=e.saveSubjectiveAnswer,a=e.handleNextButton,o=(e.handleViewResultButton,e.handleSubmitResultButton),i=e.questionIdx,c=(e.showAnswer,e.error_msg,e.show_final_result),u=(e.score,e.full_score,e.is_radio_disabled),l=(e.time,e.isCorrect,e.count,e.resultResponse,e.url,e.handleBackButton),p=(e.fav_questions,e.handleJump,e.correctAnswers,e.attempted_length,e.saveAnswerResponse),d=e.tempValue,f=e.bit,m=e.handleRevise,v=e.confirmSubmitQuestions,b=[{answer:"Yes"},{answer:"No"}];void 0!=p.question_answer&&(t=0,Object.values(p.question_answer).map(function(e,r){""!=e&&(t+=1)}));var w=t/r.length*100;return _e("div",{},void 0,!c&&_e("div",{},void 0,_e("h4",{},void 0,"Total Questions : ",r.length),_e("div",{style:{marginRight:"10%"}},void 0,he,_e(me.a,{percent:w,indicating:!0}))),_e(ve.a,{},void 0,r.length>0&&!c&&_e(ve.a.Column,{largeScreen:16,widescreen:16},void 0,_e("div",{className:"question-wrap mr-5"},void 0,0!=i&&_e(be.a,{content:"Previous Question",trigger:_e(de.a,{size:"mini",color:"blue",className:"buy-btn prev-btn",onClick:function(e){return l(e,i)},disabled:0==i},void 0,Se)}),i<r.length-1&&_e(be.a,{content:"Next Question",trigger:_e(de.a,{size:"mini",color:"blue",className:"buy-btn next-btn",onClick:function(e){return a(e,i,r[i].questionnaire_id)},disabled:i>r.length-1},void 0,ye)}),_e("span",{className:"float-right"},void 0,"Hint:",_e(be.a,{header:"Answer Tip:",content:r[i].answer_tip,position:"top right",trigger:Oe})),Ee,Ce,Re,r[i]&&"Objective"==r[i].type_of_questions&&_e(fe.a,{},void 0,_e("div",{className:"wrapper"},void 0," ",_e("h1",{className:"question-title"},void 0,_e("b",{},void 0,"Q.No.",i+1),"  ",r[i].question)),_e(fe.a.Field,{},void 0,r[i].answers.length>0&&r[i].answers.map(function(e,t){return _e("div",{},"ans".concat(t),_e(we.a,{disabled:u,label:"".concat(e.answer),value:e.answer,name:"ans".concat(i),checked:!(!p.question_answer||!p.question_answer.hasOwnProperty(r[i].questionnaire_id))&&p.question_answer[r[i].questionnaire_id]===e.answer,onChange:function(e,s){return n(e,s,t,i,r[i].questionnaire_id)}}))}))),r[i]&&"Yes/No"==r[i].type_of_questions&&_e("div",{},void 0,_e("div",{className:"wrapper"},void 0," ",_e("h1",{className:"question-title"},void 0,_e("b",{},void 0,"Q.No.",i+1),"  ",r[i].question)),_e(fe.a,{},void 0,_e(fe.a.Field,{},void 0,b.length>0&&b.map(function(e,t){return _e("div",{},"ans".concat(t),_e(we.a,{disabled:u,label:"".concat(e.answer),value:e.answer,name:"ans".concat(i),checked:!(!p.question_answer||!p.question_answer.hasOwnProperty(r[i].questionnaire_id))&&p.question_answer[r[i].questionnaire_id]===e.answer,onChange:function(e,s){return n(e,s,t,i,r[i].questionnaire_id)}}))})))),r[i]&&"Subjective"==r[i].type_of_questions&&_e("div",{},void 0,_e("div",{className:"wrapper"},void 0," ",_e("h1",{className:"question-title"},void 0,_e("b",{},void 0,"Q.No.",i+1),"  ",r[i].question)),_e(fe.a,{onSubmit:function(){return s()}},void 0,_e(fe.a.Field,{},void 0,_e(ge.a,{placeholder:"Tell us more",cols:100,rows:5,value:!f&&p.question_answer.hasOwnProperty(r[i].questionnaire_id)?p.question_answer[r[i].questionnaire_id]:d,onChange:function(e,t){return n(e,t,"",i,r[i].questionnaire_id)}})),Ae)),i===r.length-1&&_e(de.a,{color:"teal",content:"View Summary",onClick:function(e){return o(e,i)}})))),c&&_e("div",{},void 0,je,_e("div",{className:"resultdetail mr-5"},void 0,_e(ve.a,{},void 0,r&&r.length>0&&r.map(function(e,t){return _e(ve.a.Column,{largeScreen:16,widescreen:16},"que".concat(t),_e("div",{},void 0,_e("div",{className:"result_listing"},void 0,_e("div",{},void 0,_e("h3",{className:"question-title mb-3"},void 0,_e("span",{},void 0,_e("b",{},void 0,"Q.No.",t+1))," ",e.question),_e("p",{className:"your-answer"},void 0,qe,p.question_answer.hasOwnProperty(e.questionnaire_id)&&""!=p.question_answer[e.questionnaire_id]?p.question_answer[e.questionnaire_id]:"Not Answered")))))}),_e(de.a,{onClick:function(e){return m()},color:"blue"},void 0,"Revise"),_e(de.a,{onClick:v,color:"green"},void 0,"Confirm Submit")))))};var ke,Ne=r("344977176ae9f8bae630");function Pe(e){return(Pe="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Ie(e,t,r,n){ke||(ke="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var s=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),t&&s)for(var o in s)void 0===t[o]&&(t[o]=s[o]);else t||(t=s||{});if(1===a)t.children=n;else if(a>1){for(var i=new Array(a),c=0;c<a;c++)i[c]=arguments[c+3];t.children=i}return{$$typeof:ke,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}function Te(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Qe(e,t){return!t||"object"!==Pe(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Ue(e){return(Ue=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Ve(e,t){return(Ve=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var Le,Be=Ie(Ne.a.Header,{},void 0,"Assesment submitted for analysis."),De=Ie(Ne.a.Content,{},void 0,Ie("span",{},void 0,"It will around 3-4 days to prepare a detailed report of the assesment. To view the report, you will need the private key to decrypt the report.")),Je=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),Qe(this,Ue(t).apply(this,arguments))}var r,n,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Ve(e,t)}(t,s.a.PureComponent),r=t,(n=[{key:"render",value:function(){var e=this.props.closeClick;return Ie(Ne.a,{closeOnDimmerClick:!1,className:"confirmed-page",dimmer:"blurring",size:"mini",open:!0},void 0,Be,De,Ie(Ne.a.Actions,{},void 0,Ie(de.a,{negative:!0,content:"Okay",onClick:e})))}}])&&Te(r.prototype,n),a&&Te(r,a),t}(),Fe=r("e95a63b25fb92ed15721");function Ge(e){return(Ge="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ze(e,t,r,n){Le||(Le="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var s=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),t&&s)for(var o in s)void 0===t[o]&&(t[o]=s[o]);else t||(t=s||{});if(1===a)t.children=n;else if(a>1){for(var i=new Array(a),c=0;c<a;c++)i[c]=arguments[c+3];t.children=i}return{$$typeof:Le,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}function Me(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function He(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function We(e){return(We=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function $e(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Ye(e,t){return(Ye=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Ke(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var Xe=Object(o.b)({isSuccess:Object(o.a)(pe,function(e){return e.get("success")}),isRequesting:Object(o.a)(pe,function(e){return e.get("requesting")}),successResponse:Object(o.a)(pe,function(e){return e.get("response")}),errorResponse:Object(o.a)(pe,function(e){return e.get("error")}),getQuestionSucces:Object(o.a)(pe,function(e){return e.get("getQuestionnaireSuccess")}),examData:Object(o.a)(pe,function(e){return e.get("examDisplay")}),resultResponse:Object(o.a)(pe,function(e){return e.get("resultResponse")}),currentUser:Object(le.e)(),saveAnswerResponse:Object(o.a)(pe,function(e){return e.get("saveAnswerResponse")})}),Ze=[],et=ze(Fe.Redirect,{to:"/user/dashboard"}),tt=function(e){function t(){var e,r,n,s;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return n=this,s=(e=We(t)).call.apply(e,[this].concat(o)),r=!s||"object"!==Ge(s)&&"function"!==typeof s?$e(n):s,Ke($e(r),"state",{bit:!1,tempValue:"",payload:{},page:1,perPage:1,query:{},data:{},questionIdx:0,score:0,full_score:0,error_msg:"",correctAnswer:"",count:0,fav_questions:[],previousUrl:window.location.href,saveAnswerResponse:{},confirmedPage:!1,redirect:!1}),Ke($e(r),"saveSubjectiveAnswer",function(){if(r.setState({bit:!1}),void 0==r.state.payload.user_id){var e={user_id:r.props.currentUser.toJS()._id,product_id:r.props.match.params.product_id,question_answer:{}};r.props.saveAnswerRequest(e)}else r.props.saveAnswerRequest(r.state.payload)}),Ke($e(r),"handleAnswerChange",function(e,t,n,s,a){if("textarea"!=t.as){var o={user_id:r.props.currentUser.toJS()._id,product_id:r.props.match.params.product_id,question_answer:Ke({},a,t.value)};r.props.saveAnswerRequest(o)}else{r.setState({bit:!0,tempValue:t.value});var i={user_id:r.props.currentUser.toJS()._id,product_id:r.props.match.params.product_id,question_answer:Ke({},a,t.value)};r.setState({payload:i})}var c=r.state.data;c[s].user_answer=t.value,c[s].user_answer_number=n,r.setState({data:c,showAnswer:!1,error_msg:""},function(){localStorage.setItem("previousState>".concat(r.state.previousUrl),JSON.stringify(r.state))}),c[s].multi_answer_applicable&&(c[s].user_answers.includes(t.value)?r.handleAnswer(t.value,c,s,n+1):(c[s].user_answers=[].concat(Me(c[s].user_answers),[t.value]),c[s].user_answer_numbers=[].concat(Me(c[s].user_answer_numbers),[n+1]),r.setState({data:c})))}),Ke($e(r),"handleAnswer",function(e,t,n,s){var a=t[n].user_answers.filter(function(t){return t!==e}),o=t[n].user_answer_numbers.filter(function(e){return e!==s}),i=r.state.data;i[n].user_answers=a,i[n].user_answer_numbers=o,r.setState({data:i})}),Ke($e(r),"handleNextButton",function(e,t,n){var s=r.state,a=s.questionIdx;s.payload;a++,r.setState({questionIdx:a,showAnswer:!1,is_radio_disabled:!1,bit:!1})}),Ke($e(r),"handleSubmitResultButton",function(e,t){Ze=[];var n=r.state.data.filter(function(e){return Object.keys(e).includes("user_answer")});r.setState({attempted_length:n.length});var s=[];r.setState({show_final_result:!0}),r.state.data.map(function(e,t){e.answers.map(function(e){e.is_answer_correct_option&&(s[t]=e.answer)})}),r.state.data.map(function(e,t){e.multi_answer_applicable?s[t].map(function(r){e.user_answers.includes(r)?Ze[t]=e.point:Ze[t]=0}):s[t]==e.user_answer?Ze[t]=e.point:Ze[t]=0});var a=null,o=0;Ze.map(function(e){a+=e,0!=e&&(o+=1)}),r.setState({count:o}),r.setState({score:a},function(){}),localStorage.removeItem("previousState>".concat(r.state.previousUrl))}),Ke($e(r),"handleBackButton",function(e,t){r.setState({questionIdx:t-1,showAnswer:!1,is_radio_disabled:!1,bit:!1})}),Ke($e(r),"handleJump",function(e,t,n){var s="";if(r.state.data[n].user_answer){s=r.state.data[n].answers.filter(function(e){return e.answer==r.state.data[n].user_answer});var a={product_id:r.state.product_id,questionnaire_id:r.state.data[n]._id,answer_id:s[0].id};r.props.postQuestionScore(a)}r.setState({questionIdx:t,showAnswer:!1,is_radio_disabled:!1})}),Ke($e(r),"handleRevise",function(){r.setState({questionIdx:0,show_final_result:!1})}),Ke($e(r),"confirmSubmitQuestions",function(){r.setState({confirmedPage:!0})}),Ke($e(r),"closeClick",function(){r.setState({confirmedPage:!1,redirect:!0})}),r}var r,n,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Ye(e,t)}(t,s.a.Component),r=t,(n=[{key:"componentDidMount",value:function(){var e=this.state,t=(e.page,e.perPage,e.query,{user_id:this.props.currentUser.toJS()._id,product_id:this.props.match.params.product_id,question_answer:{}});this.props.saveAnswerRequest(t),JSON.parse(localStorage.getItem("previousState>".concat(this.state.previousUrl)));var r=this.props.match.params.product_id?this.props.match.params.product_id:null;r&&this.props.getQuestionRequest(r,"111")}},{key:"componentWillReceiveProps",value:function(e){var t=this;e.saveAnswerResponse!==this.props.saveAnswerResponse&&e.saveAnswerResponse.size>0&&this.setState({saveAnswerResponse:e.saveAnswerResponse&&e.saveAnswerResponse.toJS()}),e.getQuestionSucces!==this.props.getQuestionSucces&&this.setState({data:e.getQuestionSucces.toJS()},function(){var e=[],r=0;t.state.data&&t.state.data.length>0&&t.state.data.map(function(t,r){t.answers.map(function(t){t.is_answer_correct_option&&(e[r]=t.answer)})}),t.setState({correctAnswers:e}),t.state.data&&t.state.data.length>0&&t.state.data.map(function(e,n){r+=parseInt(e.point);var s=t.state.data;e.multi_answer_applicable&&(s[n].user_answers=[],s[n].user_answer_numbers=[]),t.setState({data:s})}),t.setState({full_score:r})}),e.examData!==this.props.examData&&this.setState({examData:e.examData.toJS()}),e.resultResponse!=this.props.resultResponse&&this.setState({resultResponse:e.resultResponse.toJS()})}},{key:"componentWillUnmount",value:function(){this.props.clearMessage()}},{key:"render",value:function(){var e=this.state,t=e.page,r=e.perPage,n=e.data,s=e.questionIdx,a=e.showAnswer,o=e.error_msg,c=e.show_final_result,u=e.score,l=e.full_score,p=e.is_radio_disabled,d=e.examData,f=e.resultResponse,m=e.url,v=e.fav_questions,b=e.favFailure,w=e.saveAnswerResponse,g=e.tempValue,_=e.bit,h=e.redirect,S=this.props,y=(S.successResponse,S.errorResponse,null);return b&&(y=ze(i.a,{message:b&&b,timeout:5e3,error:!0})),ze("div",{},void 0,y&&y,h&&et,this.state.confirmedPage&&ze(Je,{closeClick:this.closeClick}),ze(xe,{data:n,tempValue:g,confirmSubmitQuestions:this.confirmSubmitQuestions,bit:_,saveAnswerResponse:w,handleRevise:this.handleRevise,page:t,perPage:r,productId:this.state.product_id,saveSubjectiveAnswer:this.saveSubjectiveAnswer,handleAnswerChange:this.handleAnswerChange,handleNextButton:this.handleNextButton,questionIdx:s,showAnswer:a,handleViewResultButton:this.handleViewResultButton,handleSubmitResultButton:this.handleSubmitResultButton,error_msg:o,show_final_result:c,score:u,full_score:l,is_radio_disabled:p,time:d&&d.time_limit,isCorrect:this.state.correctAnswer,count:this.state.count,resultResponse:f,url:m,handleBackButton:this.handleBackButton,fav_questions:v,handleJump:this.handleJump,correctAnswers:this.state.correctAnswers,attempted_length:this.state.attempted_length}))}}])&&He(r.prototype,n),a&&He(r,a),t}(),rt=Object(u.a)({key:"viewQuestions",reducer:R}),nt=Object(c.a)({key:"viewQuestions",saga:ie}),st=Object(a.connect)(Xe,function(e){return{getQuestionRequest:function(t,r){return e(P(t,r))},clearMessage:function(){return e(J())},postResult:function(t){return e(L(t))},postQuestionScore:function(t){return e(Q(t))},saveAnswerRequest:function(t){return e(x(t))}}});t.default=Object(ue.compose)(rt,nt,st)(tt)},ed9f4dc215a99bf3dbca:function(e,t){e.exports="data:image/svg+xml,%3C?xml version='1.0' encoding='iso-8859-1'?%3E %3C!-- Generator: Adobe Illustrator 18.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E %3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E %3Csvg version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 219.151 219.151' style='enable-background:new 0 0 219.151 219.151;' xml:space='preserve'%3E %3Cg%3E %3Cpath d='M109.576,219.151c60.419,0,109.573-49.156,109.573-109.576C219.149,49.156,169.995,0,109.576,0S0.002,49.156,0.002,109.575 C0.002,169.995,49.157,219.151,109.576,219.151z M109.576,15c52.148,0,94.573,42.426,94.574,94.575 c0,52.149-42.425,94.575-94.574,94.576c-52.148-0.001-94.573-42.427-94.573-94.577C15.003,57.427,57.428,15,109.576,15z'/%3E %3Cpath d='M94.861,156.507c2.929,2.928,7.678,2.927,10.606,0c2.93-2.93,2.93-7.678-0.001-10.608l-28.82-28.819l83.457-0.008 c4.142-0.001,7.499-3.358,7.499-7.502c-0.001-4.142-3.358-7.498-7.5-7.498l-83.46,0.008l28.827-28.825 c2.929-2.929,2.929-7.679,0-10.607c-1.465-1.464-3.384-2.197-5.304-2.197c-1.919,0-3.838,0.733-5.303,2.196l-41.629,41.628 c-1.407,1.406-2.197,3.313-2.197,5.303c0.001,1.99,0.791,3.896,2.198,5.305L94.861,156.507z'/%3E %3C/g%3E %3Cg%3E %3C/g%3E %3Cg%3E %3C/g%3E %3Cg%3E %3C/g%3E %3Cg%3E %3C/g%3E %3Cg%3E %3C/g%3E %3Cg%3E %3C/g%3E %3Cg%3E %3C/g%3E %3Cg%3E %3C/g%3E %3Cg%3E %3C/g%3E %3Cg%3E %3C/g%3E %3Cg%3E %3C/g%3E %3Cg%3E %3C/g%3E %3Cg%3E %3C/g%3E %3Cg%3E %3C/g%3E %3Cg%3E %3C/g%3E %3C/svg%3E"}}]);