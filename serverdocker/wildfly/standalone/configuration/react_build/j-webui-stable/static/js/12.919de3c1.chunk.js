(this["webpackJsonpstable-app"]=this["webpackJsonpstable-app"]||[]).push([[12],{82:function(t,e,a){"use strict";a.r(e);var s=a(7),i=a(0),o=a.n(i),l=a(1),n=a(5),d=a(4),r=a(9);class g extends i.Component{constructor(t){super(t),this.changeInputHandler=(t,e)=>{let{stateData:a}=this.state,s=a.formTabs.data.filter(t=>t.tabInfo.id===this.state.selectedTabId);if(s.length>0){s[0].components[e].dataFull.value=t.target.value;let{data:i}=this.state;i[e]=t.target.value,this.setState({stateData:a,data:i})}},this.changeSelectHandler=(t,e,a)=>{let{stateData:s}=this.state,i=s.formTabs.data.filter(t=>t.tabInfo.id===this.state.selectedTabId);if(i.length>0){let o=[],l=[];if(o=i[0].components[a].dataFull.data.filter(t=>t.selected),l=i[0].components[a].dataFull.data.filter((t,a)=>a===e),o.length>0&&(o[0].selected=!1),l.length>0){let{data:e}=this.state;e[a]=t,l[0].selected=!0,this.setState({stateData:s,data:e})}}},this.changeTextAreaHandler=(t,e)=>{let{stateData:a}=this.state,s=a.formTabs.data.filter(t=>t.tabInfo.id===this.state.selectedTabId);if(s.length>0){let{value:o}=t.target,l=!1,n="";try{o=JSON.stringify(JSON.parse(o),null,4)}catch(i){l=!0,n=e+" is not JSON"}s[0].components[e].dataFull.value=o;let{data:d}=this.state;d[e]=o;let{error:r}=s[0].components[e].dataFull.config;r.message=l?n:"",r.type=l?"danger":"",this.setState({stateData:a,data:d,errorJson:l})}},this.clickViewButtonHandler=(t,e)=>{let a=e;a.isOld=!0,void 0!==a.response&&""!==a.response&&(a.response=JSON.stringify(a.response,null,4)),void 0!==a.actions&&""!==a.actions&&(a.actions=JSON.stringify(a.actions,null,4)),void 0!==a.input&&""!==a.input&&(a.input=JSON.stringify(a.input,null,4)),void 0===a.hasRole&&(a.hasRole="false");let s=this.getFlowBoConfig(e,this.state.all_txcode,this.state.languages,!0);this.setState({data:a,stateData:s})},this.changeTabHandler=(t,e)=>{void 0!==e&&this.setState({selectedTabId:e})},this.changeKeyLanguage=t=>{let e={note:l.g.getLang("note"),title:l.g.getLang("flowBo_title"),des:l.g.getLang("flowBo_des"),stt:l.g.getLang("stt"),btn_view:l.g.getLang("btnView"),status:l.g.getLang("flowBo_status"),active:l.g.getLang("flowBo_active"),inactive:l.g.getLang("flowBo_inactive"),btn_save:l.g.getLang("flowBo_btnSave"),version:l.g.getLang("flowBo_version"),update_time:l.g.getLang("flowBo_updateTime"),role:l.g.getLang("flowBo_role"),yes:l.g.getLang("flowBo_yes"),no:l.g.getLang("flowBo_no")};if(void 0!==t)return e;let a=this.state.infoA;a.title=l.g.getLang("flowBo_title"),a.des=l.g.getLang("flowBo_des"),a.lang_form.vi=l.g.getLang("flowBo_title"),a.lang_form.en=l.g.getLang("flowBo_title"),this.changeLanguageTemplate(e),this.setState({languages:e,infoA:a})},this.getInfoA=()=>this.state.infoA,this.getKeyFormAuto=()=>this.key_form,this.callSetHidden=t=>{this.setState({visibility:t})},this.onSaveFlow=()=>{let t=this.state.data;void 0!==t.input&&""!==t.input&&(t.input=JSON.parse(t.input)),void 0!==t.actions&&""!==t.actions&&(t.actions=JSON.parse(t.actions)),void 0!==t.response&&""!==t.response&&(t.response=JSON.parse(t.response));let e=this.state.all_txcode;if(t.isOld){for(let s=0;s<e.length;s++)if(e[s].txcode===t.txcode){void 0!==t.version?t.version=t.version+1:t.version=2,t.updateTime=l.g.getLongTime(),e[s]=t;break}}else e[e.length]=t;let a=this.getDataDefault();this.setState({all_txcode:e,data:a},()=>{this.setState({stateData:this.getFlowBoConfig(a,e,this.state.languages)})}),n.a.quickPost([{txcode:"#sys:bo-save-txBo",input:{txCode:this.state.data.txcode,txCodeContent:t}}],{})},this.key_form="flow_bo";let e=this.changeKeyLanguage("start");this.flowBOFOrm=Object(d.b)("flowBO"),this.dateFormat=l.g.getParameterSystem("DATE_FORMAT");let a=this.getDataDefault();this.state={selectedTabId:"info",stateData:this.getFlowBoConfig(a,this.props.all_txcode,e),visibility:"",errorJson:!1,infoA:{lang_form:{vi:l.g.getLang("flowBo_title"),en:l.g.getLang("flowBo_title")},title:"Server process",des:"Y\xeau c\u1ea7u l\xe0m tr\xean Desktop",openOne:"true",form_code:this.key_form,ofModal:!1},all_txcode:this.props.all_txcode,data:a,languages:e}}getDataJSelect(t,e){let a=t.filter(t=>t.value===e);return a.length>0&&(a[0].selected=!0),t}makeSmoothDataTable(){let t=[];return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).forEach((e,a)=>{t.push(Object(s.a)(Object(s.a)({},e),{},{order:a+1,updateTime:Object(r.b)(e.updateTime,this.dateFormat)}))}),t}getFlowBoConfig(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],a=arguments.length>2?arguments[2]:void 0,s=arguments.length>3&&void 0!==arguments[3]&&arguments[3];const i=this.makeSmoothDataTable(e);return{form:{config:{default:{title:a.title}},cmd:{visibility:""}},formTabs:{data:[{tabInfo:{title:"info",id:"info"},components:{txcode:{dataFull:{config:{default:{title:"txCode",type:"text",class:"col-sm-4",code_form_component:"txcode",required:!1},cmd:{disable:!!s,visible:!0,error:{message:"",type:""}},mode:{textAlign:"right",letterSpacing:""}},data:[],value:t.txcode},abs_Change:this.changeInputHandler},txname:{dataFull:{config:{default:{title:"txName",type:"text",class:"col-sm-4",code_form_component:"txname",required:!1},cmd:{disable:!1,visible:!0,error:{message:"",type:""}},mode:{textAlign:"right",letterSpacing:""}},data:[],value:t.txname},abs_Change:this.changeInputHandler},version:{dataFull:{config:{default:{title:a.version,type:"text",class:"col-sm-4",code_form_component:"version",required:!1},cmd:{disable:!0,visible:!0,error:{message:"",type:""}},mode:{textAlign:"right",letterSpacing:""}},data:[],value:t.version},abs_Change:this.changeInputHandler},txtype:{dataFull:{config:{default:{title:"txType",type:"",class:"col-sm-4",code_form_component:"txtype",required:!1},cmd:{disable:!1,visible:!0,error:{message:"",type:""}},mode:{}},data:this.getDataJSelect([{value:"bo",title:"bo"}],t.txtype),value:""},abs_Change:this.changeSelectHandler},status:{dataFull:{config:{default:{title:a.status,type:"",class:"col-sm-4",code_form_component:"status",required:!1},cmd:{disable:!1,visible:!0,error:{message:"",type:""}},mode:{}},data:this.getDataJSelect([{title:"Active",value:"A"},{title:"Inactive",value:"I"}],t.status),value:""},abs_Change:this.changeSelectHandler},hasRole:{dataFull:{config:{default:{title:a.role,type:"",class:"col-sm-4",code_form_component:"hasRole",required:!1},cmd:{disable:!1,visible:!0,error:{message:"",type:""}},mode:{}},data:this.getDataJSelect([{value:"false",title:a.no},{value:"true",title:a.yes}],t.hasRole),value:""},abs_Change:this.changeSelectHandler}}},{tabInfo:{title:"input",id:"input"},sysStyle:{show:""},components:{input:{dataFull:{config:{default:{title:"",class:"col-md-12",code_form_component:"input",rows:10,required:!1},error:{message:"",type:""},cmd:{disable:!1,visible:!0},mode:{}},data:[],value:t.input},abs_Change:this.changeTextAreaHandler}}},{tabInfo:{title:"actions",id:"actions"},sysStyle:{show:""},components:{actions:{dataFull:{config:{default:{title:"",class:"col-sm-12",rows:10,code_form_component:"actions",required:!1},error:{message:"",type:""},cmd:{disable:!1,visible:!0},mode:{}},data:[],value:t.actions},abs_Change:this.changeTextAreaHandler}}},{tabInfo:{title:"response",id:"response"},sysStyle:{show:""},components:{response:{dataFull:{config:{default:{title:"",class:"col-md-12",rows:10,code_form_component:"response",required:!1},error:{message:"",type:""},cmd:{disable:!1,visible:!0},mode:{}},data:[],value:t.response},abs_Change:this.changeTextAreaHandler}}}],abs_Change:this.changeTabHandler},boTable:{Header:{data:[{title:a.stt,id:"order",config:{width:"20px"}},{title:"txCode",id:"txcode",config:{width:""}},{title:"txName",id:"txname",config:{width:""}},{title:a.status,id:"status",config:{width:""}},{title:"txType",id:"txtype",config:{width:""}},{title:a.version,id:"version",config:{width:""}},{title:a.update_time,id:"updateTime",config:{width:""}},{title:"",id:"button",config:{width:""}}],config:{mode:{hasSearch:!1}}},config:{mode:"",noHeader:!1},data:i,button:{config:{title:a.btn_view},dataItem:{},abs_Click:this.clickViewButtonHandler}},saveButton:{dataFull:{config:{default:{title:a.btn_save,type:"submit",class:""}}},abs_Click:this.onSaveFlow}}}changeLanguageTemplate(t){let{stateData:e}=this.state;e.form.config.default.title=t.title,e.formTabs.data[0].components.version.dataFull.config.default.title=t.version,e.formTabs.data[0].components.status.dataFull.config.default.title=t.status,e.formTabs.data[0].components.hasRole.dataFull.config.default.title=t.role,e.boTable.Header.data[0].title=t.stt,e.boTable.Header.data[3].title=t.status,e.boTable.Header.data[5].title=t.version,e.boTable.Header.data[6].title=t.update_time,e.boTable.button.config.title=t.btn_view,e.saveButton.dataFull.config.default.title=t.btn_save,this.setState({stateData:e})}getDataDefault(){return{input:JSON.stringify({},null,4),actions:JSON.stringify([{name:"",function:"",type:"java",para:[],status:"A",response:{_default_:{fo:[{txcode:"",input:{}}]}}}],null,4),status:"A",txtype:"bo",txcode:"",txname:"",version:1,updateTime:l.g.getLongTime(),hasRole:"false",isOld:!1,response:JSON.stringify({fo:[{txcode:"",input:{}}]},null,4)}}componentDidMount(){l.g.addAppAuto(this.key_form,this,this.state.infoA.ofModal),l.g.form_addMapping(this.key_form,this.props.mapping_key)}render(){if("none"===this.state.visibility)return null;const t=this.flowBOFOrm;return o.a.createElement(t,{stateData:this.state.stateData})}}e.default=g}}]);