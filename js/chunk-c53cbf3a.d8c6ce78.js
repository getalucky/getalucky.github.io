(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c53cbf3a"],{"2b5a":function(s,t,a){"use strict";a.r(t);var i=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"w"},[a("div",{staticClass:"video"},[a("video",{attrs:{controls:"",preload:"",src:this.$axios.defaults.baseURL+s.news.content}})]),a("div",{staticClass:"header"},[a("div",{staticClass:"user"},[a("span",[a("img",{attrs:{src:this.$axios.defaults.baseURL+s.news.user.head_img,alt:""}})]),a("span",[s._v(s._s(s.news.user.nickname))])]),a("span",{staticClass:"follow",class:s.isfollow?"isfollow":"nofollow",on:{click:s.follow}},[s._v(s._s(s.isfollow?"已关注":"关注"))])]),a("div",{staticClass:"content"},[s._v(s._s(s.news.title))]),a("div",{staticClass:"icon"},[a("span",{on:{click:s.like}},[a("van-icon",{class:s.islike?"islike":"",attrs:{name:"good-job-o"}}),s._v(" "+s._s(s.news.like_length)+" ")],1),s._m(0)]),s._m(1),a("reply",{attrs:{newsId:s.newsId,news:s.news,isstar:s.news.has_star}})],1)},n=[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("span",[a("i",{staticClass:"iconfont icon-weixin"}),s._v("微信 ")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"comments"},[a("h2",[s._v("精彩跟帖")]),a("div",{staticClass:"acomments"},[a("div",[a("div",{staticClass:"information"},[a("span",{staticClass:"usericon"},[a("img",{attrs:{src:"",alt:""}})]),a("span",{staticClass:"username"},[a("p",[s._v("火星网友1")]),a("p",[s._v("2小时前")])])]),a("span",[s._v("回复")])]),a("p",[s._v("文章说的很有道理！")])])])}],e=a("2f3e"),o={data:function(){return{newsId:"",news:{user:""},isfollow:!1,islike:!1}},mounted:function(){var s=this;this.newsId=this.$route.params.id;var t=JSON.parse(localStorage.getItem("userInfo"))||"",a=t.token,i={url:"/post/"+this.newsId};a&&(i.headers={Authorization:a}),this.$axios(i).then((function(t){s.news=t.data.data,s.isfollow=t.data.data.has_follow,s.islike=t.data.data.has_like,s.isstar=t.data.data.has_star}))},methods:{follow:function(){var s=this,t=JSON.parse(localStorage.getItem("userInfo"))||"",a=t.token;this.isfollow?this.$axios({url:"/user_unfollow/"+this.news.user.id,headers:{Authorization:a}}).then((function(t){s.$toast(t.data.message),s.isfollow=!s.isfollow})):this.$axios({url:"/user_follows/"+this.news.user.id,headers:{Authorization:a}}).then((function(t){console.log(t),s.$toast(t.data.message),s.isfollow=!s.isfollow}))},like:function(){var s=this,t=JSON.parse(localStorage.getItem("userInfo"))||"",a=t.token;this.$axios({url:"/post_like/"+this.newsId,headers:{Authorization:a}}).then((function(t){s.islike=!s.islike,s.islike?s.news.like_length++:s.news.like_length--}))}},components:{reply:e["a"]}},l=o,r=(a("6c08"),a("2877")),c=Object(r["a"])(l,i,n,!1,null,"718070f8",null);t["default"]=c.exports},"2b60":function(s,t,a){},"2f3e":function(s,t,a){"use strict";var i=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",[a("div",{staticClass:"reply"},[a("div",{staticClass:"input",on:{click:function(t){return s.$router.push("/returncard/"+s.news.id)}}},[s._v("写跟帖")]),a("div",[a("i",{staticClass:"iconfont icon-xinxi"},[a("span",[s._v(s._s(s.news.comment_length))])]),a("i",{staticClass:"iconfont icon-shoucang",class:s.star?"isstar":"",on:{click:s.starOperation}}),a("i",{staticClass:"iconfont icon-fenxiang"})])]),a("div",{staticClass:"floor"})])},n=[],e={data:function(){return{star:""}},props:["newsId","news","isstar"],methods:{starOperation:function(){var s=this,t=JSON.parse(localStorage.getItem("userInfo"))||"",a=t.token;this.$axios({url:"/post_star/"+this.newsId,headers:{Authorization:a}}).then((function(t){s.$toast(t.data.message),s.star=!s.star}))}},watch:{isstar:function(){this.star=this.isstar}}},o=e,l=(a("7467"),a("2877")),r=Object(l["a"])(o,i,n,!1,null,"39087c01",null);t["a"]=r.exports},"6c08":function(s,t,a){"use strict";var i=a("2b60"),n=a.n(i);n.a},7467:function(s,t,a){"use strict";var i=a("f97a"),n=a.n(i);n.a},f97a:function(s,t,a){}}]);
//# sourceMappingURL=chunk-c53cbf3a.d8c6ce78.js.map