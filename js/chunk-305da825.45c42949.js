(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-305da825"],{"06c6":function(t,e,s){},1194:function(t,e,s){"use strict";var n=s("3e8e"),a=s.n(n);a.a},2141:function(t,e,s){},"3e8e":function(t,e,s){},"43b3":function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"personal"},[s("i",{staticClass:"iconfont iconjiantou2",on:{click:function(e){return t.$router.back()}}}),s("h1",[t._v(t._s(t.titleName))]),t.show?s("i",{staticClass:"iconfont iconshouye",on:{click:function(e){return t.$router.replace("/")}}}):s("i",{staticClass:"iconfont iconshouye notShow"})])},a=[],o={props:["titleName","show"]},i=o,r=(s("766a"),s("2877")),c=Object(r["a"])(i,n,a,!1,null,"5e805094",null);e["a"]=c.exports},"70d3":function(t,e,s){"use strict";var n=s("06c6"),a=s.n(n);a.a},"74b3":function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("router-link",{attrs:{to:this.path||"#"}},[s("span",[t._v(t._s(t.label))]),s("span",[t._v(" "+t._s(t.note)+" "),s("i",{staticClass:"iconfont iconjiantou1"})])])},a=[],o={props:["label","note","path"],mounted:function(){}},i=o,r=(s("1194"),s("2877")),c=Object(r["a"])(i,n,a,!1,null,"67e45c3e",null);e["a"]=c.exports},"766a":function(t,e,s){"use strict";var n=s("2141"),a=s.n(n);a.a},fb5e:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"w"},[s("titleBar",{attrs:{titleName:"编辑资料"}}),s("div",{staticClass:"icon"},[s("span",[s("img",{attrs:{src:t.$axios.defaults.baseURL+t.userInfo.head_img,alt:"头像"}}),s("van-uploader",{staticClass:"uploader",attrs:{"after-read":t.afterRead}})],1)]),s("div",{staticClass:"list"},[s("userlist",{attrs:{label:"昵称",note:t.userInfo.nickname},nativeOn:{click:function(e){return function(){t.nickshow=!0,t.nickname=t.userInfo.nickname}()}}}),s("van-dialog",{attrs:{title:"提示","show-cancel-button":""},on:{confirm:t.affirmNick},model:{value:t.nickshow,callback:function(e){t.nickshow=e},expression:"nickshow"}},[s("van-cell-group",[s("van-field",{attrs:{placeholder:"请输入昵称"},model:{value:t.nickname,callback:function(e){t.nickname=e},expression:"nickname"}})],1)],1),s("userlist",{attrs:{label:"密码",note:"******"},nativeOn:{click:function(e){t.passshow=!0,t.password=t.userInfo.password}}}),s("van-dialog",{attrs:{title:"提示","show-cancel-button":""},on:{confirm:t.affirmPass},model:{value:t.passshow,callback:function(e){t.passshow=e},expression:"passshow"}},[s("van-cell-group",[s("van-field",{attrs:{placeholder:"请输入密码",type:"password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),s("userlist",{attrs:{label:"性别",note:["女","男"][t.userInfo.gender]},nativeOn:{click:function(e){t.sexshow=!0}}}),s("van-action-sheet",{attrs:{actions:t.actions,"close-on-click-action":""},on:{select:t.onSelect},model:{value:t.sexshow,callback:function(e){t.sexshow=e},expression:"sexshow"}})],1)],1)},a=[],o=s("74b3"),i=s("43b3"),r={data:function(){return{userInfo:{},actions:[{name:"女",value:0},{name:"男",value:1}],nickshow:!1,passshow:!1,sexshow:!1,nickname:"",password:""}},components:{userlist:o["a"],titleBar:i["a"]},mounted:function(){var t=this,e=JSON.parse(localStorage.getItem("userInfo")),s="/user/"+e.user.id;this.$axios({headers:{Authorization:e.token},url:s}).then((function(e){var s=e.data.data;t.userInfo=s,t.nickname=s.nickname,t.password=s.password}))},methods:{afterRead:function(t){var e=this,s=t.file,n=new FormData;n.append("file",s);var a=JSON.parse(localStorage.getItem("userInfo")).token;this.$axios({method:"post",url:"/upload",headers:{Authorization:a},data:n}).then((function(t){var s=t.data.data.url;e.userInfo.head_img=s,e.setProfile({head_img:s})}))},setProfile:function(t){var e=this,s=JSON.parse(localStorage.getItem("userInfo")).user.id,n=JSON.parse(localStorage.getItem("userInfo")).token;this.$axios({method:"post",url:"/user_update/"+s,headers:{Authorization:n},data:t}).then((function(t){e.$toast("修改成功")}))},affirmNick:function(){this.setProfile({nickname:this.nickname}),this.userInfo.nickname=this.nickname},affirmPass:function(){this.setProfile({password:this.password}),this.userInfo.password=this.password},onSelect:function(t){this.sexshow=!1,this.setProfile({gender:t.value}),this.userInfo.gender=t.value}}},c=r,l=(s("70d3"),s("2877")),u=Object(l["a"])(c,n,a,!1,null,"e979854a",null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-305da825.45c42949.js.map