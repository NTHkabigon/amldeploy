(this.webpackJsonpframeworkcss=this.webpackJsonpframeworkcss||[]).push([[109,133,170],{110:function(e,t,a){"use strict";a.r(t);var s=a(1),i=a(2),r=a(5),o=a(4),n=a(0),c=a.n(n),l=a(7),p=function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(e){var i;return Object(s.a)(this,a),(i=t.call(this,e)).class___="designForm-screen_preview",i.state={value:"",mode_id:"desktop",isRotate:!1},i}return Object(i.a)(a,[{key:"render",value:function(){var e,t,a=this;return c.a.createElement("div",{className:this.class___,style:{display:this.props.stateData.cmd.visibility?"block":"none"}},c.a.createElement("div",{className:this.class___+"-header row"},c.a.createElement("div",{className:this.class___+"-header-icon_back",onClick:function(){void 0!==a.props.stateData.back_to_home.abs_Click&&a.props.stateData.back_to_home.abs_Click()}},c.a.createElement(l.default,{val:"keyboard_backspace",style:{fontSize:"28px"}})),c.a.createElement("div",{className:this.class___+"-header-title",onClick:function(){void 0!==a.props.stateData.back_to_home.abs_Click&&a.props.stateData.back_to_home.abs_Click()}},this.props.stateData.back_to_home.title),c.a.createElement("div",{className:this.class___+"-header-mode row"},this.props.stateData.device_mode.map((function(e,t){return c.a.createElement("div",{key:t,title:e.title,className:a.class___+"-header-mode-item"+(a.state.mode_id===e.id?" designForm-choose":""),onClick:function(t){a.state.mode_id!==e.id&&void 0!==e.abs_Click&&(e.abs_Click(e.id),a.setState({mode_id:e.id}))}},c.a.createElement(l.default,{val:e.img,style:{fontSize:"24px",height:"24px",width:"22px",margin:"auto"}}))})),c.a.createElement("div",{className:this.class___+"-header-change_device"+("desktop"===this.state.mode_id?" designForm-desktop":""),onClick:function(e){a.setState({isRotate:!a.state.isRotate})}},c.a.createElement(l.default,{val:"screen_rotation",style:{fontSize:"24px",height:"24px",width:"24px",margin:"auto"}}))),c.a.createElement("div",{className:this.class___+"-header-template"},c.a.createElement("div",{className:"row",onClick:function(e){a.myChooseLang.focus()}},c.a.createElement(l.default,{val:null===(e=this.props.stateData.templates.data.find((function(e){return e.selected})))||void 0===e?void 0:e.img,style:{width:"32px",height:"32px",fontSize:"32px",borderRadius:"50%"}}),c.a.createElement("div",{className:this.class___+"-header-template-title",tabIndex:1,ref:function(e){a.myChooseLang=e}},null===(t=this.props.stateData.templates.data.find((function(e){return e.selected})))||void 0===t?void 0:t.title),c.a.createElement("i",{className:"material-icons md-20",style:{fontSize:"20px",margin:"auto 0px",marginLeft:"8px",cursor:"pointer"},onClick:function(e){a.myChooseLang.focus()}},"expand_more")),c.a.createElement("ul",{className:this.class___+"-header-template-menu ",style:{background:"#FFFFFF"}},this.props.stateData.templates.data.map((function(e,t){return c.a.createElement("li",{key:t,className:a.class___+"-header-template-item row "+(e.selected?"designForm-active":""),onMouseDown:function(s){e.selected||void 0!==a.props.stateData.templates.abs_Click&&a.props.stateData.templates.abs_Click(e.dataItem,t)}},c.a.createElement(l.default,{val:e.img,style:{width:"28px",height:"28px",fontSize:"28px",borderRadius:"50%"}}),c.a.createElement("div",{style:{paddingLeft:"12px",margin:"auto 0px"}},e.title))}))))),c.a.createElement("div",{className:this.class___+"-content"},c.a.createElement("div",{className:this.class___+"-content-desktop",style:{display:"desktop"===this.state.mode_id?"block":"none"}},c.a.createElement("iframe",{src:this.props.stateData.data_view.link_form,className:this.class___+"-content-desktop-content",title:this.props.stateData.data_view.title})),c.a.createElement("div",{className:this.class___+"-content-tablet"+(this.state.isRotate?" designForm-rotate":""),style:{display:"tablet"===this.state.mode_id?"block":"none"}},c.a.createElement("iframe",{src:this.props.stateData.data_view.link_form,className:this.class___+"-content-tablet-content",title:this.props.stateData.data_view.title})),c.a.createElement("div",{className:this.class___+"-content-mobile"+(this.state.isRotate?" designForm-rotate":""),style:{display:"mobile"===this.state.mode_id?"block":"none"}},c.a.createElement("iframe",{src:this.props.stateData.data_view.link_form,className:this.class___+"-content-mobile-content",title:this.props.stateData.data_view.title}))))}}]),a}(n.Component);t.default=p},334:function(e,t,a){"use strict";function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}a.d(t,"a",(function(){return r}))},7:function(e,t,a){"use strict";a.r(t);var s=a(334),i=a(1),r=a(2),o=a(5),n=a(4),c=a(0),l=a.n(c),p=a(3),d=function(e){Object(o.a)(a,e);var t=Object(n.a)(a);function a(e){var r;Object(i.a)(this,a);var o=(r=t.call(this,e)).props.class;void 0===o&&(o="-outlined");var n=r.props.style;return void 0===n&&(n={fontSize:"20px"}),n=!1===r.props.isPointer?Object(s.a)(Object(s.a)({},n),{},{userSelect:"none"}):"disable"===r.props.isPointer?Object(s.a)(Object(s.a)({},n),{},{userSelect:"none",cursor:"not-allowed"}):Object(s.a)(Object(s.a)({},n),{},{userSelect:"none",cursor:"pointer"}),r.state={class:o,style:n},r}return Object(r.a)(a,[{key:"componentDidUpdate",value:function(e){if(void 0!==this.props.isPointer&&void 0!==e.isPointer&&this.props.isPointer!==e.isPointer){var t=this.state.style;t="disable"===this.props.isPointer?Object(s.a)(Object(s.a)({},t),{},{cursor:"not-allowed"}):!1===this.props.isPointer?Object(s.a)(Object(s.a)({},t),{},{cursor:"default"}):Object(s.a)(Object(s.a)({},t),{},{cursor:"pointer"}),this.setState({style:t})}}},{key:"renderForCondition",value:function(){if(this.props.val.includes("data:image")&&this.props.val.includes(";base64,")||this.props.val.includes("//"))return l.a.createElement("img",{className:this.state.class,src:this.props.val,alt:this.props.title,style:this.state.style});if(this.props.val.includes("../")){var e=this.props.val;return p.a.managerTemplate_isDev()&&(e=e.replace("../",p.a.managerTemplate_getUrlResouce())),l.a.createElement("img",{className:this.state.class,src:e,alt:this.props.title,style:this.state.style})}return l.a.createElement("i",{className:"material-icons"+this.state.class+" "+this.props.color,style:this.state.style},Object(p.d)(this.props.val))}},{key:"render",value:function(){return this.renderForCondition()}}]),a}(c.Component);t.default=d}}]);