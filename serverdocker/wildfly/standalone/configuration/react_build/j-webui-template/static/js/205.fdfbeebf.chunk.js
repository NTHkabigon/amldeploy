(this.webpackJsonpframeworkcss=this.webpackJsonpframeworkcss||[]).push([[205,227],{13:function(e,t,a){"use strict";a.r(t);var s=a(1),l=a(2),i=a(5),n=a(4),r=a(0),o=a.n(r),c=a(3),u=a(161),m=a(171),d=function(e){Object(i.a)(a,e);var t=Object(n.a)(a);function a(e){var l;return Object(s.a)(this,a),(l=t.call(this,e)).abstract_changeDevice=function(e){l.setState({device:e})},l.type_component="uAppMenu",l.code_component="malibu.uAppMenu",l.id_theme_component=Object(c.c)(),l.state={device:Object(c.f)(),skin_config:Object(u.configTemplate_getTheme)(),show:"",isDisMount:"none"},l}return Object(l.a)(a,[{key:"componentWillUnmount",value:function(){Object(c.h)(this.id_theme_component)}},{key:"componentDidMount",value:function(){Object(c.b)(this,this.id_theme_component),this.setState({isDisMount:"block"})}},{key:"renderForDevice",value:function(){var e,t=this;return"desktop"===this.state.device||"tablet"===this.state.device?o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"app-header",style:{userSelect:"none"}},o.a.createElement("div",{tabIndex:0,className:"app-span_btn ",style:{cursor:"pointer"},onClick:function(){t.openApp()},onBlur:function(){t.closeApp()}},o.a.createElement("i",{className:"material-icons"},"apps"))),o.a.createElement("div",{className:"app-list-menu"},o.a.createElement("div",{className:"app-list-menu-ul row",onMouseDown:function(e){e.target.focus(),e.preventDefault()}},null===(e=this.props.dataFull.appItem)||void 0===e?void 0:e.map((function(e,a){return void 0===e.class&&(e.class=""),o.a.createElement(m.default,{class:e.class,device:t.state.device,val:e.icon,key:a,index:a,title:e.title,sysStyle:e.sysStyle,dataItem:e.dataItem,appItem_Select:t.props.dataFull.abs_select})}))))):"mobile"===this.state.device?o.a.createElement("button",{className:"btn btn-success",type:"submit"},"mobile"):o.a.createElement("div",null,"Kh\xf4ng h\u1ed7 tr\u1ee3")}},{key:"openApp",value:function(){"expand"!==this.state.show?(this.setState({show:"expand"}),window.anime({targets:".app-list-menu",translateX:-379,duration:100})):(this.setState({show:""}),window.anime({targets:".app-list-menu",translateX:500,duration:100}))}},{key:"closeApp",value:function(){this.setState({show:""}),window.anime({targets:".app-list-menu",translateX:500,duration:100})}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"malibu-desktop-appnav "+this.state.show,style:{display:this.state.isDisMount}},this.renderForDevice()),o.a.createElement("div",{className:"blank-app"}))}}]),a}(r.Component);t.default=d},170:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return u}));var s=a(1),l=a(2),i=a(5),n=a(4),r=a(0),o=a.n(r),c=a(3),u=function(e){Object(i.a)(a,e);var t=Object(n.a)(a);function a(e){var l;return Object(s.a)(this,a),(l=t.call(this,e)).state={sysStyle:{show:!1}},l}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e){void 0!==this.props.sysStyle&&(void 0===e.sysStyle||this.props.sysStyle.show!==e.sysStyle.show)&&this.setState({sysStyle:this.props.sysStyle})}},{key:"renderForDevice",value:function(){var e=this;return"desktop"===this.props.device||"tablet"===this.props.device?o.a.createElement("li",{className:"malibu-desktop-uSidebarMenu-navbar-list-menu-ul-li "+this.state.sysStyle.show},o.a.createElement("div",{className:"malibu-desktop-uSidebarMenu-navbar-list-menu-ul-li-title",onClick:function(){0===e.props.data.length&&e.props.closeNav()}},o.a.createElement("span",{"aria-hidden":"true",className:"malibu-desktop-uSidebarMenu-navbar-list-menu-ul-li-icon material-icons-outlined "},Object(c.d)(this.props.icon)),o.a.createElement("label",{className:"malibu-desktop-uSidebarMenu-navbar-list-menu-ul-li-item"},this.props.title),this.props.data.length>0&&o.a.createElement("i",{className:"material-icons arrow-item"},"keyboard_arrow_right")),this.props.data.length>0&&o.a.createElement("div",{className:"transparent"}),this.props.data.length>0&&o.a.createElement("ul",{className:"malibu-desktop-uSidebarMenu-navbar-list-menu-child-ul"},this.props.data.map((function(t,a){return void 0===t.data&&(t.data=[]),void 0===t.sysStyle&&(t.sysStyle={}),void 0===t.sysStyle.show&&(t.sysStyle.show=""),o.a.createElement("li",{key:a,className:"malibu-desktop-uSidebarMenu-navbar-list-menu-child-ul-li ",onClick:function(){0===t.data.length&&(void 0!==e.props.uSidebarMenu_selectItem&&e.props.uSidebarMenu_selectItem(t),e.props.closeNav())}},o.a.createElement("div",{className:"malibu-desktop-uSidebarMenu-navbar-list-menu-child-ul-li-title"},o.a.createElement("label",{className:"malibu-desktop-uSidebarMenu-navbar-list-menu-child-ul-li-item",style:{cursor:"pointer"}},t.title),t.data.length>0&&o.a.createElement("i",{className:"material-icons arrow-item"},"keyboard_arrow_right")),o.a.createElement("div",{className:"transparent-child"}),t.data.length>0&&o.a.createElement("ul",{key:a,className:"malibu-desktop-uSidebarMenu-navbar-list-menu-child-child-ul "},t.data.map((function(t,a){return o.a.createElement("li",{key:a,className:"malibu-desktop-uSidebarMenu-navbar-list-menu-child-child-ul-li",onClick:function(){void 0!==e.props.uSidebarMenu_selectItem&&e.props.uSidebarMenu_selectItem(t),e.props.closeNav()},style:{cursor:"pointer"}},t.title)}))))})))):"mobile"===this.props.device?o.a.createElement("li",{className:"malibu-mobile-navbar-list-menu-ul-li "+(this.state.sysStyle.show?"expand":"")},o.a.createElement("div",{className:"malibu-mobile-navbar-list-menu-ul-li-title ",onClick:function(){0===e.props.data.length?e.props.closeNav():e.props.uSidebarMenu_chooseItem(e.props.index)}},o.a.createElement("label",{className:"malibu-mobile-navbar-list-menu-ul-li-item"},this.props.title),this.props.data.length>0&&o.a.createElement("i",{className:"material-icons arrow-item malibu-mobile-arrow-item-1"},"keyboard_arrow_right")),this.props.data.length>0&&o.a.createElement("ul",{className:"malibu-mobile-navbar-list-menu-child-ul",style:{display:this.state.sysStyle.show?"block":"none"}},this.props.data.map((function(t,a){return void 0===t.data&&(t.data=[]),void 0===t.sysStyle&&(t.sysStyle={}),void 0===t.sysStyle.show&&(t.sysStyle.show=!1),o.a.createElement("li",{key:a,className:"malibu-mobile-navbar-list-menu-child-ul-li ",onClick:function(){0===t.data.length?(void 0!==e.props.uSidebarMenu_selectItem&&e.props.uSidebarMenu_selectItem(t),e.props.closeNav()):void 0!==e.props.uSidebarMenu_selectItemChild&&e.props.uSidebarMenu_selectItemChild(e.props.index,a)}},o.a.createElement("div",{className:"malibu-mobile-navbar-list-menu-child-ul-li-title "+(t.sysStyle.show?"expand":"")},o.a.createElement("label",{className:"malibu-mobile-navbar-list-menu-child-ul-li-item",style:{cursor:"pointer"}},t.title),t.data.length>0&&o.a.createElement("i",{className:"material-icons arrow-item malibu-mobile-arrow-item-2"},"keyboard_arrow_right")),t.data.length>0&&o.a.createElement("ul",{key:a,className:"malibu-mobile-navbar-list-menu-child-child-ul ",style:{display:t.sysStyle.show?"block":"none"}},t.data.map((function(a,s){return o.a.createElement("li",{key:s,className:"malibu-mobile-navbar-list-menu-child-child-ul-li "+(0===s?"first":"")+(s===t.data.length-1?"last":""),onClick:function(){void 0!==e.props.uSidebarMenu_selectItem&&e.props.uSidebarMenu_selectItem(a),e.props.closeNav()},style:{cursor:"pointer"}},a.title)}))))})))):null}},{key:"render",value:function(){return this.renderForDevice()}}]),a}(r.Component)},171:function(e,t,a){"use strict";a.r(t);var s=a(1),l=a(2),i=a(5),n=a(4),r=a(0),o=a.n(r),c=a(6),u=function(e){Object(i.a)(a,e);var t=Object(n.a)(a);function a(e){var l;Object(s.a)(this,a);var i={paddingLeft:"8px"};return(l=t.call(this,e)).props.icon||(i={}),l.state={style:i,style_icon:{fontSize:"27.98px",float:"left"}},l}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:" app-item-card",style:{userSelect:"none"},onClick:function(t){void 0!==e.props.appItem_Select&&e.props.appItem_Select(e.props.dataItem,t)}},o.a.createElement("div",{className:"app-item "},o.a.createElement("div",{className:"malibu-uApp-img "},this.props.val?o.a.createElement("div",{className:"app-img"},o.a.createElement(c.default,{val:this.props.val,class:"",style:{width:"70px",height:"70px"},title:this.props.title})):null),o.a.createElement("div",{className:"malibu-uApp-title "},this.props.title?o.a.createElement("span",{className:"dHeader-span",style:this.state.style},o.a.createElement("div",{style:this.state.style_title},this.props.title)):null)))}}]),a}(r.Component);t.default=u},209:function(e,t,a){"use strict";a.r(t);var s=a(334),l=a(1),i=a(2),n=a(5),r=a(4),o=a(0),c=a.n(o),u=a(9),m=a(16),d=a(13),p=a(148),b=function(e){Object(n.a)(a,e);var t=Object(r.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"getDataForm",value:function(){return{form:{dataFull:{config:{default:{title:"User Information"}},cmd:{visibility:""}}}}}},{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"d-flex col-12 malibu-desktop-header"},c.a.createElement(u.default,{dataFull:this.props.dataFull.uSlidebarMenu}),c.a.createElement("div",{className:"main",style:{width:"100%"}},c.a.createElement(m.default,{sysCallBack:this.sysCallBack,dataFull:this.props.dataFull.uHeader})),c.a.createElement(d.default,{dataFull:this.props.dataFull.uAppMenu})),c.a.createElement("div",{className:"d-flex col-12 malibu-desktop-content"},c.a.createElement("div",{className:"main",style:{width:"100%"}},c.a.createElement(p.default,{stateData:Object(s.a)({},this.getDataForm())}))))}}]),a}(o.Component);t.default=b},9:function(e,t,a){"use strict";a.r(t);var s=a(1),l=a(2),i=a(5),n=a(4),r=a(0),o=a.n(r),c=a(3),u=a(161),m=a(170),d=a(6),p=function(e){Object(i.a)(a,e);var t=Object(n.a)(a);function a(e){var l;Object(s.a)(this,a),(l=t.call(this,e)).abstract_changeDevice=function(e){l.setState({device:e})},l.abs_changeLang=function(e){l.setState({sidebarBody:e})},l.uSidebarMenu_selectItem=function(e){var t,a=l.state.sidebarBody;if(a.length>0)for(var s=0;s<a.length;s++){a[s].sysStyle&&!0===a[s].sysStyle.show&&(t=s),a[s].sysStyle={show:!1};for(var i=0;i<a[s].data.length;i++)a[s].data[i].sysStyle&&!0===a[s].data[i].sysStyle.show&&(t=i),a[s].data[i].sysStyle={show:!1}}e!==t&&(a[e].sysStyle={show:!0}),l.setState({sidebarBody:a})},l.uSidebarMenu_selectItemChild=function(e,t){var a,s=l.state.sidebarBody;if(s.length>0)for(var i=0;i<s.length;i++)for(var n=0;n<s[i].data.length;n++)s[i].data[n].sysStyle&&!0===s[i].data[n].sysStyle.show&&(a=n),s[i].data[n].sysStyle={show:!1};t!==a&&(s[e].data[t].sysStyle={show:!0}),l.setState({sidebarBody:s})},l.checkData=function(){for(var e=l.state.sidebarBody,t=0;t<e.length;t++)void 0===e[t].sysStyle&&(e[t].sysStyle={}),void 0!==e[t].sysStyle.show&&"show"!==e[t].sysStyle.show||(e[t].sysStyle.show="");l.setState({sidebarBody:e})},l.closeNav=function(){l.checkData(),l.setState({show:""}),"mobile"!==l.state.device?window.anime({targets:".malibu-desktop-uSidebarMenu-navbar-list-menu",translateX:-516,duration:100}):window.anime({targets:".malibu-mobile-navbar-list-menu-div",translateX:-500,duration:100})},l.type_component="uSlidebar",l.code_component="malibu.uSidebarMenu",l.id_theme_component=Object(c.c)();var i=l.props.dataFull.sidebarBody;return void 0===i&&(i=[]),l.state={device:Object(c.f)(),skin_config:Object(u.configTemplate_getTheme)(),sidebarBody:i,show:"",isDisMount:"none"},l}return Object(l.a)(a,[{key:"componentWillUnmount",value:function(){Object(c.h)(this.id_theme_component)}},{key:"componentDidMount",value:function(){Object(c.b)(this,this.id_theme_component),this.setState({isDisMount:"block"})}},{key:"renderForDevice",value:function(){var e=this;return"desktop"===this.state.device||"tablet"===this.state.device?o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"malibu-desktop-uSidebarMenu "+this.state.show,style:{display:this.state.isDisMount}},o.a.createElement("div",{className:"malibu-desktop-uSidebarMenu-header",style:{userSelect:"none"}},o.a.createElement("div",{tabIndex:0,className:"malibu-desktop-uSidebarMenu-header-button",style:{cursor:"pointer"},onClick:function(){e.openNav()},onBlur:function(){e.closeNav()}},o.a.createElement("i",{className:"material-icons-outlined"},"menu"))),o.a.createElement("div",{className:"malibu-desktop-uSidebarMenu-navbar-list-menu"},o.a.createElement("ul",{className:"malibu-desktop-uSidebarMenu-navbar-list-menu-ul",onMouseDown:function(e){e.target.focus(),e.preventDefault()}},this.state.sidebarBody.map((function(t,a){return o.a.createElement(m.default,{key:a,index:a,icon:t.icon,title:t.title,value:t.value,device:e.state.device,data:t.data,sysStyle:t.sysStyle,uSidebarMenu_selectItem:e.props.dataFull.abs_select,uSidebarMenu_chooseItem:e.uSidebarMenu_selectItem,uSidebarMenu_selectItemChild:e.uSidebarMenu_selectItemChild,closeNav:e.closeNav})}))))),o.a.createElement("div",{className:"blank"})):"mobile"===this.state.device?o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"malibu-mobile-uSidebarMenu "+this.state.show,style:{display:this.state.isDisMount}},o.a.createElement("div",{className:"malibu-mobile-uSidebarMenu-header",style:{userSelect:"none",background:"unset "}},o.a.createElement("div",{tabIndex:0,className:"malibu-mobile-uSidebarMenu-header-button",style:{cursor:"pointer"},onClick:function(){e.openNav()},onBlur:function(){e.closeNav()}},o.a.createElement("i",{className:"material-icons-outlined"},"menu"))),o.a.createElement("div",{className:"malibu-mobile-navbar-list-menu ",onClick:function(e){e.stopPropagation(),e.preventDefault()}},o.a.createElement("div",{className:"malibu-mobile-navbar-list-menu-div",onMouseDown:function(e){e.preventDefault(),e.stopPropagation(),e.target.focus(),e.stopPropagation(),e.preventDefault()}},o.a.createElement("div",{className:"malibu-mobile-navbar-list-menu-header"},o.a.createElement("div",{className:"malibu-mobile-navbar-list-menu-header-button_close",onClick:function(){e.closeNav()}},o.a.createElement(d.default,{val:"close",style:{fontSize:"28px"}}))),o.a.createElement("div",{className:"malibu-mobile-navbar-list-menu-content"},o.a.createElement("ul",{className:"malibu-mobile-uSidebarMenu-list-menu-ul",onMouseDown:function(e){e.target.focus(),e.stopPropagation(),e.preventDefault()},style:{padding:"0px 16px"}},this.state.sidebarBody.map((function(t,a){return o.a.createElement(m.default,{key:a,index:a,icon:t.icon,title:t.title,value:t.value,data:t.data,sysStyle:t.sysStyle,device:e.state.device,uSidebarMenu_selectItem:e.props.dataFull.abs_select,uSidebarMenu_chooseItem:e.uSidebarMenu_selectItem,uSidebarMenu_selectItemChild:e.uSidebarMenu_selectItemChild,closeNav:e.closeNav})}))))))),o.a.createElement("div",{className:"blank"})):o.a.createElement("div",null,"Kh\xf4ng h\u1ed7 tr\u1ee3")}},{key:"openNav",value:function(){"expand"!==this.state.show?(this.setState({show:"expand"}),"mobile"!==this.state.device?window.anime({targets:".malibu-desktop-uSidebarMenu-navbar-list-menu",translateX:516,duration:100}):window.anime({targets:".malibu-mobile-navbar-list-menu-div",translateX:500,duration:100})):(this.setState({show:""}),"mobile"!==this.state.device?window.anime({targets:".malibu-desktop-uSidebarMenu-navbar-list-menu",translateX:-516,duration:100}):window.anime({targets:".malibu-mobile-navbar-list-menu-div",translateX:-500,duration:100}),this.checkData())}},{key:"render",value:function(){return this.renderForDevice()}}]),a}(r.Component);t.default=p}}]);