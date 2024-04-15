!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t=function(){return r};var r={},n=Object.prototype,o=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",l=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(B){c=function(e,t,r){return e[t]=r}}function s(e,t,r,n){var o=t&&t.prototype instanceof d?t:d,i=Object.create(o.prototype),a=new P(n||[]);return i._invoke=function(e,t,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return L()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var l=x(a,r);if(l){if(l===p)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=h(e,t,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===p)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(e,r,a),i}function h(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(B){return{type:"throw",arg:B}}}r.wrap=s;var p={};function d(){}function f(){}function g(){}var v={};c(v,a,(function(){return this}));var y=Object.getPrototypeOf,b=y&&y(y(_([])));b&&b!==n&&o.call(b,a)&&(v=b);var m=g.prototype=d.prototype=Object.create(v);function w(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function k(t,r){function n(i,a,l,u){var c=h(t[i],t,a);if("throw"!==c.type){var s=c.arg,p=s.value;return p&&"object"==e(p)&&o.call(p,"__await")?r.resolve(p.__await).then((function(e){n("next",e,l,u)}),(function(e){n("throw",e,l,u)})):r.resolve(p).then((function(e){s.value=e,l(s)}),(function(e){return n("throw",e,l,u)}))}u(c.arg)}var i;this._invoke=function(e,t){function o(){return new r((function(r,o){n(e,t,r,o)}))}return i=i?i.then(o,o):o()}}function x(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,x(e,t),"throw"===t.method))return p;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var n=h(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,p;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,p):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,p)}function q(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function P(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(q,this),this.reset(!0)}function _(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,n=function t(){for(;++r<e.length;)if(o.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return n.next=n}}return{next:L}}function L(){return{value:void 0,done:!0}}return f.prototype=g,c(m,"constructor",g),c(g,"constructor",f),f.displayName=c(g,u,"GeneratorFunction"),r.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},r.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,c(e,u,"GeneratorFunction")),e.prototype=Object.create(m),e},r.awrap=function(e){return{__await:e}},w(k.prototype),c(k.prototype,l,(function(){return this})),r.AsyncIterator=k,r.async=function(e,t,n,o,i){void 0===i&&(i=Promise);var a=new k(s(e,t,n,o),i);return r.isGeneratorFunction(t)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},w(m),c(m,u,"Generator"),c(m,a,(function(){return this})),c(m,"toString",(function(){return"[object Generator]"})),r.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},r.values=_,P.prototype={constructor:P,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!e)for(var t in this)"t"===t.charAt(0)&&o.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(r,n){return a.type="throw",a.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var l=o.call(i,"catchLoc"),u=o.call(i,"finallyLoc");if(l&&u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),S(r),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:_(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},r}function r(e,t,r,n,o,i,a){try{var l=e[i](a),u=l.value}catch(c){return void r(c)}l.done?t(u):Promise.resolve(u).then(n,o)}function n(e){return function(){var t=this,n=arguments;return new Promise((function(o,i){var a=e.apply(t,n);function l(e){r(a,o,i,l,u,"next",e)}function u(e){r(a,o,i,l,u,"throw",e)}l(void 0)}))}}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,i=[],a=!0,l=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(u){l=!0,o=u}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return i}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}System.register(["./index-legacy.38a490ba.js","./index-legacy.ef314ec6.js","./index-legacy.7dfc1c48.js","./SettingItem-legacy.dfc9eb27.js","./ResponsiveGrid-legacy.8d7dd830.js","./index-legacy.1892571b.js","./index-legacy.780fa28d.js","./item_type-legacy.d1f1c701.js"],(function(e){"use strict";var r,i,a,l,u,c,s,h,p,d,f,g,v,y,b,m,w,k,x,q,S,P,_,L,B,E,C,j,O,T,A,G,H,I,U,K;return{setters:[function(e){r=e.a,i=e.b,a=e.aS,l=e.b5,u=e.c5,c=e.cs,s=e.k,h=e.e,p=e.D,d=e.b6,f=e.n,g=e.bl,v=e.bm,y=e.bn,b=e.bo,m=e.bp,w=e.bq,k=e.br,x=e.E,q=e.bs,S=e.bt,P=e.bu,_=e.aH,L=e.S,B=e.b1,E=e.av,C=e.c6,j=e.I,O=e.ad,T=e.B,A=e.a3,G=e.ah},function(e){H=e.o},function(e){I=e.F},function(e){U=e.I},function(e){K=e.R},function(){},function(){},function(){}],execute:function(){var Q=G('<form name="notifier" id="notifier"></form>'),X=[{value:"closed",label:"已关闭"},{value:"aibotk",label:"智能微秘书"},{value:"bark",label:"Bark"},{value:"chat",label:"群晖chat"},{value:"chronocat",label:"Chronocat"},{value:"dingtalkBot",label:"钉钉机器人"},{value:"email",label:"邮箱"},{value:"goCqHttpBot",label:"GoCqHttpBot"},{value:"gotify",label:"Gotify"},{value:"iGot",label:"IGot"},{value:"lark",label:"飞书机器人"},{value:"pushDeer",label:"PushDeer"},{value:"pushMe",label:"PushMe"},{value:"pushPlus",label:"PushPlus"},{value:"serverChan",label:"Server酱"},{value:"telegramBot",label:"Telegram机器人"},{value:"webhook",label:"自定义通知"},{value:"weWorkApp",label:"企业微信应用"},{value:"weWorkBot",label:"企业微信机器人"}],N={gotify:[{label:"gotifyUrl",tip:"gotify的url地址，例如 https://push.example.de:8080",required:!0},{label:"gotifyToken",tip:"gotify的消息应用token码",required:!0},{label:"gotifyPriority",tip:"推送消息的优先级"}],chat:[{label:"chatUrl",tip:"chat的url地址",required:!0},{label:"chatToken",tip:"chat的token码",required:!0}],goCqHttpBot:[{label:"goCqHttpBotUrl",tip:"推送到个人QQ: http://127.0.0.1/send_private_msg，群：http://127.0.0.1/send_group_msg",required:!0},{label:"goCqHttpBotToken",tip:"访问密钥",required:!0},{label:"goCqHttpBotQq",tip:"如果GOBOT_URL设置 /send_private_msg 则需要填入 user_id=个人QQ 相反如果是 /send_group_msg 则需要填入 group_id=QQ群",required:!0}],serverChan:[{label:"serverChanKey",tip:"Server酱SENDKEY",required:!0}],pushDeer:[{label:"pushDeerKey",tip:"PushDeer的Key，https://github.com/easychen/pushdeer",required:!0},{label:"pushDeerUrl",tip:"PushDeer的自架API endpoint，默认是 https://api2.pushdeer.com/message/push"}],bark:[{label:"barkPush",tip:"Bark的信息IP/设备码，例如：https://api.day.app/XXXXXXXX",required:!0},{label:"barkIcon",tip:"BARK推送图标，自定义推送图标 (需iOS15或以上才能显示)"},{label:"barkSound",tip:"BARK推送铃声，铃声列表去APP查看复制填写"},{label:"barkGroup",tip:"BARK推送消息的分组，默认为qinglong"},{label:"barkLevel",tip:"BARK推送消息的时效性，默认为active"},{label:"barkUrl",tip:"BARK推送消息的跳转URL"}],telegramBot:[{label:"telegramBotToken",tip:"telegram机器人的token，例如：1077xxx4424:AAFjv0FcqxxxxxxgEMGfi22B4yh15R5uw",required:!0},{label:"telegramBotUserId",tip:"telegram用户的id，例如：129xxx206",required:!0},{label:"telegramBotProxyHost",tip:"代理IP"},{label:"telegramBotProxyPort",tip:"代理端口"},{label:"telegramBotProxyAuth",tip:"telegram代理配置认证参数，用户名与密码用英文冒号连接 user:password"},{label:"telegramBotApiHost",tip:"telegram api自建的反向代理地址，默认tg官方api"}],dingtalkBot:[{label:"dingtalkBotToken",tip:"钉钉机器人webhook token，例如：5a544165465465645d0f31dca676e7bd07415asdasd",required:!0},{label:"dingtalkBotSecret",tip:"密钥，机器人安全设置页面，加签一栏下面显示的SEC开头的字符串"}],weWorkBot:[{label:"weWorkBotKey",tip:"企业微信机器人的webhook(详见文档 https://work.weixin.qq.com/api/doc/90000/90136/91770)，例如：693a91f6-7xxx-4bc4-97a0-0ec2sifa5aaa",required:!0},{label:"weWorkOrigin",tip:"企业微信代理地址"}],weWorkApp:[{label:"weWorkAppKey",tip:"corpid、corpsecret、touser(注:多个成员ID使用|隔开)、agentid、消息类型(选填，不填默认文本消息类型) 注意用,号隔开(英文输入法的逗号)，例如：wwcfrs,B-76WERQ,qinglong,1000001,2COat",required:!0},{label:"weWorkOrigin",tip:"企业微信代理地址"}],aibotk:[{label:"aibotkKey",tip:"密钥key，智能微秘书个人中心获取apikey，申请地址：https://wechat.aibotk.com/signup?from=ql",required:!0},{label:"aibotkType",tip:"发送的目标，群组或者好友",required:!0,placeholder:"请输入要发送的目标",items:[{value:"room",label:"群聊"},{value:"contact",label:"好友"}]},{label:"aibotkName",tip:"要发送的用户昵称或群名，如果目标是群，需要填群名，如果目标是好友，需要填好友昵称",required:!0}],iGot:[{label:"iGotPushKey",tip:"iGot的信息推送key，例如：https://push.hellyw.com/XXXXXXXX",required:!0}],pushPlus:[{label:"pushPlusToken",tip:"微信扫码登录后一对一推送或一对多推送下面的token(您的Token)，不提供PUSH_PLUS_USER则默认为一对一推送，参考 https://www.pushplus.plus/",required:!0},{label:"pushPlusUser",tip:"一对多推送的“群组编码”（一对多推送下面->您的群组(如无则创建)->群组编码，如果您是创建群组人。也需点击“查看二维码”扫描绑定，否则不能接受群组消息推送）"}],lark:[{label:"larkKey",tip:"飞书群组机器人：https://www.feishu.cn/hc/zh-CN/articles/360024984973",required:!0}],email:[{label:"emailService",tip:"邮箱服务名称，比如126、163、Gmail、QQ等，支持列表https://github.com/nodemailer/nodemailer/blob/master/lib/well-known/services.json",required:!0},{label:"emailUser",tip:"邮箱地址",required:!0},{label:"emailPass",tip:"SMTP 登录密码，也可能为特殊口令，视具体邮件服务商说明而定",required:!0}],pushMe:[{label:"pushMeKey",tip:"PushMe的Key，https://push.i-i.me/",required:!0}],chronocat:[{label:"chronocatURL",tip:"Chronocat Red 服务的连接地址 https://chronocat.vercel.app/install/docker/official/",required:!0},{label:"chronocatQQ",tip:"个人:user_id=个人QQ 群则填入group_id=QQ群 多个用英文;隔开同时支持个人和群 如：user_id=xxx;group_id=xxxx;group_id=xxxxx",required:!0},{label:"chronocatToken",tip:"docker安装在持久化config目录下的chronocat.yml文件可找到",required:!0}],webhook:[{label:"webhookMethod",tip:"请求方法",required:!0,items:[{value:"GET"},{value:"POST"},{value:"PUT"}]},{label:"webhookContentType",tip:"请求头Content-Type",required:!0,items:[{value:"text/plain"},{value:"application/json"},{value:"multipart/form-data"},{value:"application/x-www-form-urlencoded"}]},{label:"webhookUrl",tip:"请求链接以http或者https开头。url或者body中必须包含$title，$content可选，对应api内容的位置",required:!0,placeholder:"https://xxx.cn/api?content=$title\n"},{label:"webhookHeaders",tip:"请求头格式Custom-Header1: Header1，多个换行分割",placeholder:"Custom-Header1: Header1\nCustom-Header2: Header2"},{label:"webhookBody",tip:"请求体格式key1: value1，多个换行分割。url或者body中必须包含$title，$content可选，对应api内容的位置",placeholder:"key1: $title\nkey2: $content"}]};e("default",(function(e){var G=r(),R=i().pathname;H("manage.sidemenu.".concat(R().split("/").pop()));var $=o(a((function(){return l.get("/admin/setting/list?group=".concat(e.group))})),2),D=$[0],M=$[1],W=o(u([]),2),F=W[0],Y=W[1],J=o(u([]),2),z=J[0],V=J[1],Z=o(u({}),2),ee=Z[0],te=Z[1],re=function(){var e=n(t().mark((function e(){var r;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M();case 2:r=e.sent,d(r,Y),ce(F[1].value),te(JSON.parse(F[2].value));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();re();var ne=o(a((function(){return l.post("/admin/setting/save",c(F))})),2),oe=ne[0],ie=ne[1],ae=o(s(!1),2),le=ae[0],ue=ae[1],ce=function(e){Y((function(e){return F[1].key===e.key}),"value",e),V(N[e]||[])},se=function(e,t){te(e,t);var r=JSON.stringify(ee);Y((function(e){return F[2].key===e.key}),"value",r)};return h(A,{w:"$full",alignItems:"start",spacing:"$2",get children(){return[h(K,{get children(){return[h(U,p((function(){return F[0]}),{onChange:function(e){Y((function(e){return F[0].key===e.key}),"value",e)},onDelete:(r=n(t().mark((function e(){var r;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return ue(!0),e.next=3,l.post("/admin/setting/delete?key=".concat(F[0].key));case 3:r=e.sent,ue(!1),d(r,(function(){f.success(G("global.delete_success")),re()}));case 6:case"end":return e.stop()}}),e)}))),function(){return r.apply(this,arguments)})})),h(g,{get id(){var e;return null===(e=F[1])||void 0===e?void 0:e.key},get defaultValue(){var e;return null===(e=F[1])||void 0===e?void 0:e.value},get value(){var e;return null===(e=F[1])||void 0===e?void 0:e.value},onChange:function(e){return ce(e)},get readOnly(){var e;return(null===(e=F[1])||void 0===e?void 0:e.flag)===I.READONLY},get children(){return[h(v,{get children(){return[h(y,{get children(){return G("global.choose")}}),h(b,{}),h(m,{})]}}),h(w,{get children(){return h(k,{get children(){return h(x,{each:X,children:function(e){return h(q,{get value(){return e.value},get children(){return[h(S,{get children(){return G("".concat(e.label))}}),h(P,{})]}})}})}})}})]}}),(e=Q.cloneNode(!0),_(e,(function(){return z.map((function(e){return h(L,{get when(){return e.items},fallback:function(){return[h(B,{mb:"$2",get children(){return[E((function(){return e.label})),h(L,{get when(){return e.required},get children(){return h(C,{colorScheme:"danger",children:"*"})}})]}}),h(j,{get value(){return ee[e.label]},onChange:function(t){return se(e.label,t.currentTarget.value)},get name(){return e.label},get placeholder(){return e.placeholder?e.placeholder:e.tip}})]},get children(){return[h(B,{mb:"$2",get children(){return[E((function(){return e.label})),h(L,{get when(){return e.required},get children(){return h(C,{colorScheme:"danger",children:"*"})}})]}}),h(g,{onChange:function(t){return se(e.label,t)},get value(){return ee[e.label]},get children(){return[h(v,{get children(){return[h(y,{get children(){return e.placeholder||e.tip}}),h(b,{}),h(m,{})]}}),h(w,{get children(){return h(k,{get children(){return e.items.map((function(e){return h(q,{get value(){return e.value},get children(){return[h(S,{get children(){return e.label||e.value}}),h(P,{})]}})}))}})}})]}})]}})}))})),e)];var e,r}}),h(O,{spacing:"$2",get children(){return[h(T,{colorScheme:"accent",onClick:re,get loading(){return D()||le()},get children(){return G("global.refresh")}}),h(T,{get loading(){return oe()},onClick:(e=n(t().mark((function e(){var r;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ie();case 2:r=e.sent,d(r,(function(){return f.success(G("global.save_success"))}));case 4:case"end":return e.stop()}}),e)}))),function(){return e.apply(this,arguments)}),get children(){return G("global.save")}})];var e}})]}})}))}}}))}();