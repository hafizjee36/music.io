(function(t){function e(e){for(var i,a,o=e[0],c=e[1],u=e[2],p=0,f=[];p<o.length;p++)a=o[p],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&f.push(r[a][0]),r[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);l&&l(e);while(f.length)f.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],i=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(i=!1)}i&&(s.splice(e--,1),t=a(a.s=n[0]))}return t}var i={},r={app:0},s=[];function a(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=i,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"06f0":function(t,e,n){t.exports=n.p+"media/Ringtone_2018.745a4f97.mp3"},"1c3d":function(t,e,n){t.exports=n.p+"media/Emotional.04795aff.mp3"},3226:function(t,e,n){t.exports=n.p+"media/kaun_tujhe_yu.dd14cf1d.mp3"},"33bc":function(t,e,n){t.exports=n.p+"media/Tere_Sang_reh_Kar.d1d7bd2c.mp3"},"3e6e":function(t,e,n){t.exports=n.p+"media/Maa_o_meri_maa.f9cdf3ed.mp3"},"54e4":function(t,e,n){t.exports=n.p+"media/Pal_eK_pal.62a2dc46.mp3"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t._m(0),n("main",[n("section",{staticClass:"player"},[n("h2",{staticClass:"song-title"},[t._v(t._s(t.current.title)+" - "),n("span",[t._v(t._s(t.current.artist))])]),n("div",{staticClass:"controls"},[n("button",{staticClass:"prev",on:{click:t.prev}},[t._v("Prev")]),t.isPlaying?n("button",{staticClass:"pause",on:{click:t.pause}},[t._v("Pause")]):n("button",{staticClass:"play",on:{click:t.play}},[t._v("Play")]),n("button",{staticClass:"next",on:{click:t.next}},[t._v("Next")])])]),n("section",{staticClass:"playlist"},[n("h3",[t._v("The Playlist")]),t._l(t.songs,(function(e){return n("button",{key:e.src,class:e.src==t.current.src?"song playing":"song",on:{click:function(n){return t.play(e)}}},[t._v(" "+t._s(e.title)+" - "+t._s(e.artist)+" ")])}))],2)])])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("h1",[t._v("My Music")])])}],a={name:"App",data:function(){return{current:{},index:0,isPlaying:!1,songs:[{title:"Duniya",artist:"Atif Aslam",src:n("7c67")},{title:"Emotional",artist:"Ring Tone",src:n("1c3d")},{title:"iPhone",artist:"Apple",src:n("fd5c")},{title:"Kaun Tujhe Yu",artist:"Ring Tone",src:n("3226")},{title:"KGF Moms Love Flute",artist:"KGF",src:n("8239")},{title:"Let Me Love You",artist:"Ring Tone",src:n("ae40")},{title:"Maa o Meri Maa",artist:"Ring Tone",src:n("3e6e")},{title:"Pal Ek Pal",artist:"Ring Tone",src:n("54e4")},{title:"Ringtone",artist:"Ring Tone",src:n("06f0")},{title:"Tere Sang Reh Kar",artist:"Ring Tone",src:n("33bc")},{title:"Most Romantic",artist:"Ring Tone",src:n("70f5")},{title:"Tu Hi Joh Jannat",artist:"Ring Tone",src:n("58e2")},{title:"Turkish Tune",artist:"Ring Tone",src:n("7296")},{title:"UU Na Na",artist:"Ring Tone",src:n("9983")}],player:new Audio}},methods:{play:function(t){"undefined"!=typeof t.src&&(this.current=t,this.player.src=this.current.src),this.player.play(),this.player.addEventListener("ended",function(){this.index++,this.index>this.songs.length-1&&(this.index=0),this.current=this.songs[this.index],this.play(this.current)}.bind(this)),this.isPlaying=!0},pause:function(){this.player.pause(),this.isPlaying=!1},next:function(){this.index++,this.index>this.songs.length-1&&(this.index=0),this.current=this.songs[this.index],this.play(this.current)},prev:function(){this.index--,this.index<0&&(this.index=this.songs.length-1),this.current=this.songs[this.index],this.play(this.current)}},created:function(){this.current=this.songs[this.index],this.player.src=this.current.src}},o=a,c=(n("034f"),n("2877")),u=Object(c["a"])(o,r,s,!1,null,null,null),l=u.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(l)}}).$mount("#app")},"58e2":function(t,e,n){t.exports=n.p+"media/tu_hi_toh_jannat.3d15dc8e.mp3"},"70f5":function(t,e,n){t.exports=n.p+"media/romantic.681040ca.mp3"},7296:function(t,e,n){t.exports=n.p+"media/turkish.f339fa78.mp3"},"7c67":function(t,e,n){t.exports=n.p+"media/duniyaa.141400a2.mp3"},8239:function(t,e,n){t.exports=n.p+"media/kgf_moms_love_flute.066048b9.mp3"},"85ec":function(t,e,n){},9983:function(t,e,n){t.exports=n.p+"media/uu_na_na_na.46be276b.mp3"},ae40:function(t,e,n){t.exports=n.p+"media/let_me_love_you.eb7bcdbd.mp3"},fd5c:function(t,e,n){t.exports=n.p+"media/iphone.fedc1eda.mp3"}});
//# sourceMappingURL=app.27fd630b.js.map