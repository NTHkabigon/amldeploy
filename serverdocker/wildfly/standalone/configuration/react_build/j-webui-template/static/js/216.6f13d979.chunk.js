(this.webpackJsonpframeworkcss=this.webpackJsonpframeworkcss||[]).push([[216,227],{170:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return c}));var l=a(1),s=a(2),i=a(5),n=a(4),r=a(0),o=a.n(r),u=a(3),c=function(e){Object(i.a)(a,e);var t=Object(n.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).state={sysStyle:{show:!1}},s}return Object(s.a)(a,[{key:"componentDidUpdate",value:function(e){void 0!==this.props.sysStyle&&(void 0===e.sysStyle||this.props.sysStyle.show!==e.sysStyle.show)&&this.setState({sysStyle:this.props.sysStyle})}},{key:"renderForDevice",value:function(){var e=this;return"desktop"===this.props.device||"tablet"===this.props.device?o.a.createElement("li",{className:"malibu-desktop-uSidebarMenu-navbar-list-menu-ul-li "+this.state.sysStyle.show},o.a.createElement("div",{className:"malibu-desktop-uSidebarMenu-navbar-list-menu-ul-li-title",onClick:function(){0===e.props.data.length&&e.props.closeNav()}},o.a.createElement("span",{"aria-hidden":"true",className:"malibu-desktop-uSidebarMenu-navbar-list-menu-ul-li-icon material-icons-outlined "},Object(u.d)(this.props.icon)),o.a.createElement("label",{className:"malibu-desktop-uSidebarMenu-navbar-list-menu-ul-li-item"},this.props.title),this.props.data.length>0&&o.a.createElement("i",{className:"material-icons arrow-item"},"keyboard_arrow_right")),this.props.data.length>0&&o.a.createElement("div",{className:"transparent"}),this.props.data.length>0&&o.a.createElement("ul",{className:"malibu-desktop-uSidebarMenu-navbar-list-menu-child-ul"},this.props.data.map((function(t,a){return void 0===t.data&&(t.data=[]),void 0===t.sysStyle&&(t.sysStyle={}),void 0===t.sysStyle.show&&(t.sysStyle.show=""),o.a.createElement("li",{key:a,className:"malibu-desktop-uSidebarMenu-navbar-list-menu-child-ul-li ",onClick:function(){0===t.data.length&&(void 0!==e.props.uSidebarMenu_selectItem&&e.props.uSidebarMenu_selectItem(t),e.props.closeNav())}},o.a.createElement("div",{className:"malibu-desktop-uSidebarMenu-navbar-list-menu-child-ul-li-title"},o.a.createElement("label",{className:"malibu-desktop-uSidebarMenu-navbar-list-menu-child-ul-li-item",style:{cursor:"pointer"}},t.title),t.data.length>0&&o.a.createElement("i",{className:"material-icons arrow-item"},"keyboard_arrow_right")),o.a.createElement("div",{className:"transparent-child"}),t.data.length>0&&o.a.createElement("ul",{key:a,className:"malibu-desktop-uSidebarMenu-navbar-list-menu-child-child-ul "},t.data.map((function(t,a){return o.a.createElement("li",{key:a,className:"malibu-desktop-uSidebarMenu-navbar-list-menu-child-child-ul-li",onClick:function(){void 0!==e.props.uSidebarMenu_selectItem&&e.props.uSidebarMenu_selectItem(t),e.props.closeNav()},style:{cursor:"pointer"}},t.title)}))))})))):"mobile"===this.props.device?o.a.createElement("li",{className:"malibu-mobile-navbar-list-menu-ul-li "+(this.state.sysStyle.show?"expand":"")},o.a.createElement("div",{className:"malibu-mobile-navbar-list-menu-ul-li-title ",onClick:function(){0===e.props.data.length?e.props.closeNav():e.props.uSidebarMenu_chooseItem(e.props.index)}},o.a.createElement("label",{className:"malibu-mobile-navbar-list-menu-ul-li-item"},this.props.title),this.props.data.length>0&&o.a.createElement("i",{className:"material-icons arrow-item malibu-mobile-arrow-item-1"},"keyboard_arrow_right")),this.props.data.length>0&&o.a.createElement("ul",{className:"malibu-mobile-navbar-list-menu-child-ul",style:{display:this.state.sysStyle.show?"block":"none"}},this.props.data.map((function(t,a){return void 0===t.data&&(t.data=[]),void 0===t.sysStyle&&(t.sysStyle={}),void 0===t.sysStyle.show&&(t.sysStyle.show=!1),o.a.createElement("li",{key:a,className:"malibu-mobile-navbar-list-menu-child-ul-li ",onClick:function(){0===t.data.length?(void 0!==e.props.uSidebarMenu_selectItem&&e.props.uSidebarMenu_selectItem(t),e.props.closeNav()):void 0!==e.props.uSidebarMenu_selectItemChild&&e.props.uSidebarMenu_selectItemChild(e.props.index,a)}},o.a.createElement("div",{className:"malibu-mobile-navbar-list-menu-child-ul-li-title "+(t.sysStyle.show?"expand":"")},o.a.createElement("label",{className:"malibu-mobile-navbar-list-menu-child-ul-li-item",style:{cursor:"pointer"}},t.title),t.data.length>0&&o.a.createElement("i",{className:"material-icons arrow-item malibu-mobile-arrow-item-2"},"keyboard_arrow_right")),t.data.length>0&&o.a.createElement("ul",{key:a,className:"malibu-mobile-navbar-list-menu-child-child-ul ",style:{display:t.sysStyle.show?"block":"none"}},t.data.map((function(a,l){return o.a.createElement("li",{key:l,className:"malibu-mobile-navbar-list-menu-child-child-ul-li "+(0===l?"first":"")+(l===t.data.length-1?"last":""),onClick:function(){void 0!==e.props.uSidebarMenu_selectItem&&e.props.uSidebarMenu_selectItem(a),e.props.closeNav()},style:{cursor:"pointer"}},a.title)}))))})))):null}},{key:"render",value:function(){return this.renderForDevice()}}]),a}(r.Component)},192:function(e,t,a){"use strict";a.r(t);var l=a(1),s=a(2),i=a(5),n=a(4),r=a(0),o=a.n(r),u=a(9),c=a(16),m=a(143),d=function(e){Object(i.a)(a,e);var t=Object(n.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"d-flex col-12 malibu-desktop-header"},o.a.createElement(u.default,{dataFull:this.props.dataFull.uSlidebarMenu}),o.a.createElement("div",{className:"main",style:{width:"100%"}},o.a.createElement(c.default,{sysCallBack:this.sysCallBack,dataFull:this.props.dataFull.uHeader}))),o.a.createElement("div",{className:"d-flex col-12 malibu-desktop-content"},o.a.createElement("div",{className:"main",style:{width:"100%"}},o.a.createElement(m.default,{stateData:{uFormNotify:{title:"Oops, error. Please try again later.",data:[{title:"Customer Name: Family Name English: Can not be blank en; Given Name English: Can not be blank en; Family Name Khm: Can not be blank en; Given Name Khm: Can not be blank en; Nick Name/ Other Name: Can not be blank en;",dataItem:{name:"test"},redirect:"loading1",time:"3 min ago"},{title:"test",dataItem:{name:"test"},redirect:"loading2",time:"4 min ago"},{title:"test",dataItem:{name:"test"},redirect:"loading3",time:"5 min ago"}],value:"test"}}}))))}}]),a}(r.Component);t.default=d},9:function(e,t,a){"use strict";a.r(t);var l=a(1),s=a(2),i=a(5),n=a(4),r=a(0),o=a.n(r),u=a(3),c=a(161),m=a(170),d=a(6),b=function(e){Object(i.a)(a,e);var t=Object(n.a)(a);function a(e){var s;Object(l.a)(this,a),(s=t.call(this,e)).abstract_changeDevice=function(e){s.setState({device:e})},s.abs_changeLang=function(e){s.setState({sidebarBody:e})},s.uSidebarMenu_selectItem=function(e){var t,a=s.state.sidebarBody;if(a.length>0)for(var l=0;l<a.length;l++){a[l].sysStyle&&!0===a[l].sysStyle.show&&(t=l),a[l].sysStyle={show:!1};for(var i=0;i<a[l].data.length;i++)a[l].data[i].sysStyle&&!0===a[l].data[i].sysStyle.show&&(t=i),a[l].data[i].sysStyle={show:!1}}e!==t&&(a[e].sysStyle={show:!0}),s.setState({sidebarBody:a})},s.uSidebarMenu_selectItemChild=function(e,t){var a,l=s.state.sidebarBody;if(l.length>0)for(var i=0;i<l.length;i++)for(var n=0;n<l[i].data.length;n++)l[i].data[n].sysStyle&&!0===l[i].data[n].sysStyle.show&&(a=n),l[i].data[n].sysStyle={show:!1};t!==a&&(l[e].data[t].sysStyle={show:!0}),s.setState({sidebarBody:l})},s.checkData=function(){for(var e=s.state.sidebarBody,t=0;t<e.length;t++)void 0===e[t].sysStyle&&(e[t].sysStyle={}),void 0!==e[t].sysStyle.show&&"show"!==e[t].sysStyle.show||(e[t].sysStyle.show="");s.setState({sidebarBody:e})},s.closeNav=function(){s.checkData(),s.setState({show:""}),"mobile"!==s.state.device?window.anime({targets:".malibu-desktop-uSidebarMenu-navbar-list-menu",translateX:-516,duration:100}):window.anime({targets:".malibu-mobile-navbar-list-menu-div",translateX:-500,duration:100})},s.type_component="uSlidebar",s.code_component="malibu.uSidebarMenu",s.id_theme_component=Object(u.c)();var i=s.props.dataFull.sidebarBody;return void 0===i&&(i=[]),s.state={device:Object(u.f)(),skin_config:Object(c.configTemplate_getTheme)(),sidebarBody:i,show:"",isDisMount:"none"},s}return Object(s.a)(a,[{key:"componentWillUnmount",value:function(){Object(u.h)(this.id_theme_component)}},{key:"componentDidMount",value:function(){Object(u.b)(this,this.id_theme_component),this.setState({isDisMount:"block"})}},{key:"renderForDevice",value:function(){var e=this;return"desktop"===this.state.device||"tablet"===this.state.device?o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"malibu-desktop-uSidebarMenu "+this.state.show,style:{display:this.state.isDisMount}},o.a.createElement("div",{className:"malibu-desktop-uSidebarMenu-header",style:{userSelect:"none"}},o.a.createElement("div",{tabIndex:0,className:"malibu-desktop-uSidebarMenu-header-button",style:{cursor:"pointer"},onClick:function(){e.openNav()},onBlur:function(){e.closeNav()}},o.a.createElement("i",{className:"material-icons-outlined"},"menu"))),o.a.createElement("div",{className:"malibu-desktop-uSidebarMenu-navbar-list-menu"},o.a.createElement("ul",{className:"malibu-desktop-uSidebarMenu-navbar-list-menu-ul",onMouseDown:function(e){e.target.focus(),e.preventDefault()}},this.state.sidebarBody.map((function(t,a){return o.a.createElement(m.default,{key:a,index:a,icon:t.icon,title:t.title,value:t.value,device:e.state.device,data:t.data,sysStyle:t.sysStyle,uSidebarMenu_selectItem:e.props.dataFull.abs_select,uSidebarMenu_chooseItem:e.uSidebarMenu_selectItem,uSidebarMenu_selectItemChild:e.uSidebarMenu_selectItemChild,closeNav:e.closeNav})}))))),o.a.createElement("div",{className:"blank"})):"mobile"===this.state.device?o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"malibu-mobile-uSidebarMenu "+this.state.show,style:{display:this.state.isDisMount}},o.a.createElement("div",{className:"malibu-mobile-uSidebarMenu-header",style:{userSelect:"none",background:"unset "}},o.a.createElement("div",{tabIndex:0,className:"malibu-mobile-uSidebarMenu-header-button",style:{cursor:"pointer"},onClick:function(){e.openNav()},onBlur:function(){e.closeNav()}},o.a.createElement("i",{className:"material-icons-outlined"},"menu"))),o.a.createElement("div",{className:"malibu-mobile-navbar-list-menu ",onClick:function(e){e.stopPropagation(),e.preventDefault()}},o.a.createElement("div",{className:"malibu-mobile-navbar-list-menu-div",onMouseDown:function(e){e.preventDefault(),e.stopPropagation(),e.target.focus(),e.stopPropagation(),e.preventDefault()}},o.a.createElement("div",{className:"malibu-mobile-navbar-list-menu-header"},o.a.createElement("div",{className:"malibu-mobile-navbar-list-menu-header-button_close",onClick:function(){e.closeNav()}},o.a.createElement(d.default,{val:"close",style:{fontSize:"28px"}}))),o.a.createElement("div",{className:"malibu-mobile-navbar-list-menu-content"},o.a.createElement("ul",{className:"malibu-mobile-uSidebarMenu-list-menu-ul",onMouseDown:function(e){e.target.focus(),e.stopPropagation(),e.preventDefault()},style:{padding:"0px 16px"}},this.state.sidebarBody.map((function(t,a){return o.a.createElement(m.default,{key:a,index:a,icon:t.icon,title:t.title,value:t.value,data:t.data,sysStyle:t.sysStyle,device:e.state.device,uSidebarMenu_selectItem:e.props.dataFull.abs_select,uSidebarMenu_chooseItem:e.uSidebarMenu_selectItem,uSidebarMenu_selectItemChild:e.uSidebarMenu_selectItemChild,closeNav:e.closeNav})}))))))),o.a.createElement("div",{className:"blank"})):o.a.createElement("div",null,"Kh\xf4ng h\u1ed7 tr\u1ee3")}},{key:"openNav",value:function(){"expand"!==this.state.show?(this.setState({show:"expand"}),"mobile"!==this.state.device?window.anime({targets:".malibu-desktop-uSidebarMenu-navbar-list-menu",translateX:516,duration:100}):window.anime({targets:".malibu-mobile-navbar-list-menu-div",translateX:500,duration:100})):(this.setState({show:""}),"mobile"!==this.state.device?window.anime({targets:".malibu-desktop-uSidebarMenu-navbar-list-menu",translateX:-516,duration:100}):window.anime({targets:".malibu-mobile-navbar-list-menu-div",translateX:-500,duration:100}),this.checkData())}},{key:"render",value:function(){return this.renderForDevice()}}]),a}(r.Component);t.default=b}}]);