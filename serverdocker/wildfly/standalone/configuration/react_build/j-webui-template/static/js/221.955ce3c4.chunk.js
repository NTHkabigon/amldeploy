(this.webpackJsonpframeworkcss=this.webpackJsonpframeworkcss||[]).push([[221,153,154,155,156,157,158,170],{177:function(t,e,s){"use strict";s.r(e),s.d(e,"default",(function(){return p}));var i=s(1),r=s(2),a=s(5),o=s(4),n=s(0),c=s.n(n),l=s(6),p=function(t){Object(a.a)(s,t);var e=Object(o.a)(s);function s(t){var r,a;Object(i.a)(this,s),(r=e.call(this,t)).class_desktop="malibu-desktop-uNotification";var o=r.props.item.config;return void 0===o&&(o={}),a=void 0===o.time_out?5e3:o.time_out,r.state={visible:!0,time_out:a,class:""},r._isClose=!1,r}return Object(r.a)(s,[{key:"componentDidMount",value:function(){this.setTimer()}},{key:"setTimer",value:function(){var t=this;null!=this._timer_child&&clearTimeout(this._timer_child),this._timer_child=setTimeout((function(){!1===t._isClose&&t.setState({class:"fade-in"},(function(){setTimeout((function(){t.setState({visible:!1},(function(){t._timer_child=null,t.props.abs_uNotificationItem_DeleteMe(t.props.item.id)}))}),1e3)}))}),this.state.time_out)}},{key:"render",value:function(){var t=this;return this.state.visible&&c.a.createElement("div",{key:this.props.index,className:this.class_desktop+" "+this.props.mode+" "+this.state.class+" "+this.props.item.color},"toast"===this.props.mode&&c.a.createElement("div",{className:this.class_desktop+"-header"}," "),c.a.createElement("div",{className:this.class_desktop+"-content row"},"toast"===this.props.mode&&c.a.createElement(l.default,{val:this.props.icon_.val,class:this.props.icon_.class,style:{width:"28px",height:"28px",fontSize:"28px",margin:"auto 0px",padding:"0px 20px"},isPointer:!1,title:this.props.icon_.title}),c.a.createElement("div",{className:this.class_desktop+"-title-div"},c.a.createElement("div",{className:this.class_desktop+"-title"},this.props.item.title)),"toast"===this.props.mode&&c.a.createElement("div",{className:this.class_desktop+"-close",onClick:function(){t._isClose=!0,t.setTimer(),t.setState({class:"fade-out"},(function(){setTimeout((function(){t.setState({visible:!1}),t._timer_child=null}),300)})),t.props.abs_uNotificationItem_DeleteMe(t.props.item.id)}},c.a.createElement(l.default,{val:"close",style:{width:"20px",height:"20px",fontSize:"20px"},title:"close"}))))}}]),s}(n.Component)},334:function(t,e,s){"use strict";function i(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}function r(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,i)}return s}function a(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?r(Object(s),!0).forEach((function(e){i(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):r(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}s.d(e,"a",(function(){return a}))},6:function(t,e,s){"use strict";s.r(e);var i=s(334),r=s(1),a=s(2),o=s(5),n=s(4),c=s(0),l=s.n(c),p=s(3),u=function(t){Object(o.a)(s,t);var e=Object(n.a)(s);function s(t){var a;Object(r.a)(this,s);var o=(a=e.call(this,t)).props.class;void 0===o&&(o="-outlined");var n=a.props.style;return void 0===n&&(n={fontSize:"20px"}),n=!1===a.props.isPointer?Object(i.a)(Object(i.a)({},n),{},{userSelect:"none"}):"disable"===a.props.isPointer?Object(i.a)(Object(i.a)({},n),{},{userSelect:"none",cursor:"not-allowed"}):Object(i.a)(Object(i.a)({},n),{},{userSelect:"none",cursor:"pointer"}),a.state={class:o,style:n},a}return Object(a.a)(s,[{key:"componentDidUpdate",value:function(t){if(void 0!==this.props.isPointer&&void 0!==t.isPointer&&this.props.isPointer!==t.isPointer){var e=this.state.style;e="disable"===this.props.isPointer?Object(i.a)(Object(i.a)({},e),{},{cursor:"not-allowed"}):!1===this.props.isPointer?Object(i.a)(Object(i.a)({},e),{},{cursor:"default"}):Object(i.a)(Object(i.a)({},e),{},{cursor:"pointer"}),this.setState({style:e})}}},{key:"renderForCondition",value:function(){if(this.props.val.includes("data:image")&&this.props.val.includes(";base64,")||this.props.val.includes("//"))return l.a.createElement("img",{className:this.state.class,src:this.props.val,alt:this.props.title,style:this.state.style});if(this.props.val.includes("../")){var t=this.props.val;return p.a.managerTemplate_isDev()&&(t=t.replace("../",p.a.managerTemplate_getUrlResouce())),l.a.createElement("img",{className:this.state.class,src:t,alt:this.props.title,style:this.state.style})}return l.a.createElement("i",{className:"material-icons"+this.state.class+" "+this.props.color,style:this.state.style},Object(p.d)(this.props.val))}},{key:"render",value:function(){return this.renderForCondition()}}]),s}(c.Component);e.default=u}}]);