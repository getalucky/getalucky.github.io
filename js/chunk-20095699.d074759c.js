(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-20095699"],{1194:function(t,e,n){"use strict";var s=n("3e8e"),a=n.n(s);a.a},2141:function(t,e,n){},"3e8e":function(t,e,n){},"43b3":function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"personal"},[n("i",{staticClass:"iconfont iconjiantou2",on:{click:function(e){return t.$router.back()}}}),n("h1",[t._v(t._s(t.titleName))]),t.show?n("i",{staticClass:"iconfont iconshouye",on:{click:function(e){return t.$router.replace("/")}}}):n("i",{staticClass:"iconfont iconshouye notShow"})])},a=[],i={props:["titleName","show"]},o=i,c=(n("766a"),n("2877")),r=Object(c["a"])(o,s,a,!1,null,"5e805094",null);e["a"]=r.exports},"74b3":function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-link",{attrs:{to:this.path||"#"}},[n("span",[t._v(t._s(t.label))]),n("span",[t._v(" "+t._s(t.note)+" "),n("i",{staticClass:"iconfont iconjiantou1"})])])},a=[],i={props:["label","note","path"],mounted:function(){}},o=i,c=(n("1194"),n("2877")),r=Object(c["a"])(o,s,a,!1,null,"67e45c3e",null);e["a"]=r.exports},"766a":function(t,e,n){"use strict";var s=n("2141"),a=n.n(s);a.a},"90ab":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w"},[n("titleBar",{attrs:{titleName:"个人中心",show:"1"}}),n("div",{staticClass:"header"},[n("span",[n("img",{attrs:{src:this.$axios.defaults.baseURL+this.userInfo.head_img,alt:"头像"}})]),n("div",[n("div",{staticClass:"userContent"},[1==this.userInfo.gender?n("span",{staticClass:"iconfont iconxingbienan blueIcon"}):t._e(),0==this.userInfo.gender?n("span",{staticClass:"iconfont iconxingbienv pinkIcon"}):t._e(),n("span",[t._v(t._s(this.userInfo.nickname))]),n("div",{staticClass:"time"},[t._v(t._s(t.moment(this.userInfo.create_date).format("YYYY-MM-DD")))])]),n("router-link",{attrs:{to:"editprofile"}},[n("i",{staticClass:"iconfont iconjiantou1"})])],1)]),n("div",{staticClass:"sectedCard"},[t._l(t.selectCard,(function(t,e){return n("userlist",{key:e,attrs:{label:t.label,note:t.note,path:t.path}})})),n("userlist",{attrs:{label:"退出"},nativeOn:{click:function(e){return t.exit(e)}}})],2)],1)},a=[],i=n("74b3"),o=n("43b3"),c=n("c1df"),r=n.n(c),l=n("2241"),u={data:function(){return{selectCard:[{label:"我的关注",note:"关注的用户",path:"/follow"},{label:"我的跟帖",note:"跟帖/回复",path:"/comments"},{label:"我的收藏",note:"文章/视频",path:"/collect"}],userInfo:{},moment:r.a}},components:{userlist:i["a"],titleBar:o["a"]},mounted:function(){var t=this,e=JSON.parse(localStorage.getItem("userInfo")),n="/user/"+e.user.id;this.$axios({headers:{Authorization:e.token},url:n}).then((function(e){var n=e.data.data;t.userInfo=n}))},methods:{exit:function(){var t=this;l["a"].confirm({title:"提示",message:"确定要退出吗？"}).then((function(){localStorage.removeItem("userInfo"),t.$router.push("/login")})).catch((function(){}))}}},f=u,h=(n("a5ee"),n("2877")),p=Object(h["a"])(f,s,a,!1,null,"c86c6ea2",null);e["default"]=p.exports},9765:function(t,e,n){},a5ee:function(t,e,n){"use strict";var s=n("9765"),a=n.n(s);a.a}}]);
//# sourceMappingURL=chunk-20095699.d074759c.js.map