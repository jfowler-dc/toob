webpackJsonp([1],{"2kDy":function(t,e){},"3mYD":function(t,e){},JMAv:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var n=a("VU/8")({name:"App"},i,!1,function(t){a("Yiav")},null,null).exports,r=a("/ocq"),o=a("bOdI"),l=a.n(o),c=a("kxiW"),d=a.n(c),u={name:"HelloWorld",props:["stationName","code","lc1","lc2","lc3","lc4","lc5","link","address","lat","lon"],data:function(){return{map:!1,distance:"",geo:!1,favoriteStar:!1,favs:[],newFav:[]}},methods:{UserLocation:function(t){this.geo=!0,this.distance=this.calcCrow(t.coords.latitude,t.coords.longitude,this.lat,this.lon)},calcCrow:function(t,e,a,s){var i=this.toRad(a-t),n=this.toRad(s-e),r=(t=this.toRad(t),a=this.toRad(a),Math.sin(i/2)*Math.sin(i/2)+Math.sin(n/2)*Math.sin(n/2)*Math.cos(t)*Math.cos(a));return.62137*(6371*(2*Math.atan2(Math.sqrt(r),Math.sqrt(1-r))))},toRad:function(t){return t*Math.PI/180},round:function(t,e){var a=Math.pow(10,e);return Math.round(t*a)/a},pageSwipeLeft:function(t,e,a){$(t).swipe({swipeLeft:function(t,s,i,n,r){$(e).css(a)},threshold:75})},pageSwipeRight:function(t,e,a){$(t).swipe({swipeRight:function(t,e,s,i,n){$(this).css(a)},threshold:75})},slugify:function(t){return t.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")},clickFav:function(){0==this.favoriteStar?(this.favoriteStar=!0,d.a.auth().onAuthStateChanged(function(t){d.a.database().ref("/users").child(t.uid+"/favorites").update(l()({},this.slugify(this.code),this.code))}.bind(this))):(this.favoriteStar=!1,this.newFav=[],d.a.auth().onAuthStateChanged(function(t){d.a.database().ref("/users").child(t.uid+"/favorites").update(l()({},this.slugify(this.code),null))}.bind(this)))}},mounted:function(){var t=this;d.a.auth().currentUser&&d.a.database().ref("users/"+d.a.auth().currentUser.uid+"/favorites").on("value",function(e){var a;for(a in t.favs.push(e.val()),t.favs[t.favs.length-1])t.newFav.push(a.toUpperCase());t.newFav.includes(t.code)&&(t.favoriteStar=!0)})}},h={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"border",class:t.lc1+" "+t.lc2+" "+t.lc3},[a("h4",[1==t.link?a("router-link",{staticClass:"stationText",attrs:{to:{path:"/station/"+t.code}}},[t._v(t._s(t.stationName))]):a("span",[t._v(t._s(t.stationName))]),t._v(" "),0==t.link?a("span",{staticClass:"lines",attrs:{id:"lines1"}},[t.lc1?a("span",{staticClass:"line",class:t.lc1}):t._e(),t._v(" "),t.lc2?a("span",{staticClass:"line",class:t.lc2}):t._e(),t._v(" "),t.lc3?a("span",{staticClass:"line",class:t.lc3}):t._e(),t._v(" "),t.lc4?a("span",{staticClass:"line",class:t.lc4}):t._e()]):t._e(),t._v(" "),1==t.link?a("span",{staticClass:"favorite",on:{click:t.clickFav}},[0==t.favoriteStar&&t.favs!=t.code?a("i",{staticClass:"far fa-star"}):a("i",{staticClass:"fas fa-star"})]):t._e()],1),t._v(" "),1==t.link?a("span",{staticClass:"lines",attrs:{id:"lines2"}},[t.lc1?a("span",{staticClass:"line",class:t.lc1}):t._e(),t._v(" "),t.lc2?a("span",{staticClass:"line",class:t.lc2}):t._e(),t._v(" "),t.lc3?a("span",{staticClass:"line",class:t.lc3}):t._e(),t._v(" "),t.lc4?a("span",{staticClass:"line",class:t.lc4}):t._e()]):t._e(),t._v(" "),0==t.link?a("p",{staticClass:"address"},[a("span",[t._v(t._s(t.address.Street))]),t._v(", "),a("br"),t._v(" "),a("span",[t._v(t._s(t.address.City))]),t._v(", \n    "),a("span",[t._v(t._s(t.address.State))]),t._v(" "),a("span",[t._v(t._s(t.address.Zip))])]):t._e(),t._v(" "),0==t.link?a("div",{staticClass:"options"},[a("div",{staticClass:"btn",on:{click:t.clickFav}},[0==t.favoriteStar&&t.favs!=t.code?a("i",{staticClass:"far fa-star"}):a("i",{staticClass:"fas fa-star"}),t._v(" "),a("span",[t._v("My Stop")])]),t._v(" "),0==t.link?a("div",{staticClass:"btn"},[a("a",{attrs:{target:"_blank",href:"https://maps.google.com/maps?q="+t.lat+","+t.lon}},[a("i",{staticClass:"far fa-map"}),t._v(" "),a("span",[t._v("Directions")])])]):t._e()]):t._e()])},staticRenderFns:[]};var p=a("VU/8")(u,h,!1,function(t){a("sPvX")},"data-v-4bcec1d6",null).exports,v=a("mtWM"),m=a.n(v),f={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[e("router-link",{attrs:{to:"/navigation"}},[e("i",{staticClass:"fas fa-bars"})]),this._v(" "),e("h1",[this._v(this._s(this.pageTitle))])],1)},staticRenderFns:[]};var g=a("VU/8")({name:"AppHeader",props:["pageTitle","hamburger"],data:function(){return{}},methods:{},mounted:function(){},components:{}},f,!1,function(t){a("3mYD")},"data-v-b9cb0446",null).exports,_={name:"Login",data:function(){return{email:"",password:""}},methods:{signIn:function(){var t=this;d.a.auth().signInWithEmailAndPassword(this.email,this.password).then(function(e){console.log(e),t.$router.replace("favorites")},function(e){t.alertMessage("Oops! "+e.message,"error")})}},components:{AppHeader:g}},T={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"login"}},[a("AppHeader",{attrs:{pageTitle:"Sign In",hamburger:"true"}}),t._v(" "),a("div",{attrs:{id:"form"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"email",placeholder:"Email"},domProps:{value:t.email},on:{keyup:function(e){return"keyCode"in e&&13!==e.keyCode?null:t.signIn(e)},input:function(e){e.target.composing||(t.email=e.target.value)}}}),a("br"),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",placeholder:"Password"},domProps:{value:t.password},on:{keyup:function(e){return"keyCode"in e&&13!==e.keyCode?null:t.signIn(e)},input:function(e){e.target.composing||(t.password=e.target.value)}}}),a("br"),t._v(" "),a("button",{on:{click:t.signIn}},[t._v("Sign In")])]),t._v(" "),a("p",[t._v("Need an account? Sign Up "),a("router-link",{attrs:{to:"/sign-up"}},[t._v("here")]),t._v("!")],1)],1)},staticRenderFns:[]};var C=a("VU/8")(_,T,!1,function(t){a("gej5")},"data-v-043f17be",null).exports,y={name:"SignUp",data:function(){return{email:"",password:""}},methods:{signUp:function(){var t=this;d.a.auth().createUserWithEmailAndPassword(this.email,this.password).then(function(e){console.log(e),t.$router.replace("favorites")},function(e){t.alertMessage("Oops! "+e.message,"error")})}},components:{AppHeader:g}},k={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"sign-up"}},[a("AppHeader",{attrs:{pageTitle:"Sign Up",hamburger:"true"}}),t._v(" "),a("div",{attrs:{id:"form"}},[a("p",[t._v("Create a new account below!")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"email",placeholder:"Email"},domProps:{value:t.email},on:{keyup:function(e){return"keyCode"in e&&13!==e.keyCode?null:t.signUp(e)},input:function(e){e.target.composing||(t.email=e.target.value)}}}),a("br"),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",placeholder:"Password"},domProps:{value:t.password},on:{keyup:function(e){return"keyCode"in e&&13!==e.keyCode?null:t.signUp(e)},input:function(e){e.target.composing||(t.password=e.target.value)}}}),a("br"),t._v(" "),a("button",{on:{click:t.signUp}},[t._v("Sign Up")])]),t._v(" "),a("p",[t._v("or go back to "),a("router-link",{attrs:{to:"/login"}},[t._v("login")]),t._v(".")],1)],1)},staticRenderFns:[]};var b=a("VU/8")(y,k,!1,function(t){a("JMAv")},"data-v-8a1c64cc",null).exports,S={name:"Stations",data:function(){return{allStations:[],filterInput:"",red:!1,blue:!1,yellow:!1,orange:!1,green:!1,silver:!1,selectedColors:[]}},methods:{getAllStations:function(){var t=this;m.a.get("https://api.wmata.com/Rail.svc/json/jStations",{headers:{api_key:"6c0afb2a0f824f0f9b85bfd174ecae6d"}}).then(function(e){t.allStations=e.data.Stations}).catch(function(t){console.log("Error: "+t)})},removeA:function(t){for(var e,a,s=arguments,i=s.length;i>1&&t.length;)for(e=s[--i];-1!==(a=t.indexOf(e));)t.splice(a,1);return t},sort:function(){var t=this.filterInput.toLowerCase();$("#trains .border").filter(function(){$(this).toggle($(this).find(".stationText").text().toLowerCase().indexOf(t)>-1)})},clickGetColorId:function(t){switch($("#trains .border").hide(),t){case"RD":0==this.red?(this.red=!0,this.selectedColors.push("RD")):(this.red=!1,this.removeA(this.selectedColors,"RD"));break;case"BL":0==this.blue?(this.blue=!0,this.selectedColors.push("BL")):(this.blue=!1,this.removeA(this.selectedColors,"BL"));break;case"YL":0==this.yellow?(this.yellow=!0,this.selectedColors.push("YL")):(this.yellow=!1,this.removeA(this.selectedColors,"YL"));break;case"OR":0==this.orange?(this.orange=!0,this.selectedColors.push("OR")):(this.orange=!1,this.removeA(this.selectedColors,"OR"));break;case"GR":0==this.green?(this.green=!0,this.selectedColors.push("GR")):(this.green=!1,this.removeA(this.selectedColors,"GR"));break;case"SV":0==this.silver?(this.silver=!0,this.selectedColors.push("SV")):(this.silver=!1,this.removeA(this.selectedColors,"SV"))}$("#trains .border").hide();var e="\\b("+this.selectedColors.join("|")+")\\b",a=new RegExp(e,"i");$("#trains .border").each(function(){var t=" "+$(this).attr("class").replace(/\s+/," ")+" ";a.test(t)&&$(this).show()})}},mounted:function(){this.getAllStations()},computed:{sortedArray:function(){return this.allStations.sort(function(t,e){return t.Name<e.Name?-1:t.Name>e.Name?1:0})}},components:{HelloWorld:p,AppHeader:g}},w={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("AppHeader",{attrs:{pageTitle:"All Trains",hamburger:"true"}}),t._v(" "),a("div",{staticClass:"sticky"},[a("div",{staticClass:"bord"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.filterInput,expression:"filterInput"}],attrs:{id:"input",placeholder:"Search for a station",type:"text"},domProps:{value:t.filterInput},on:{keyup:t.sort,input:function(e){e.target.composing||(t.filterInput=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"bord lines"},[a("div",{staticClass:"line RD",on:{click:function(e){return t.clickGetColorId("RD")}}},[1==t.red?a("i",{staticClass:"fas fa-check-circle"}):t._e()]),t._v(" "),a("div",{staticClass:"line BL",on:{click:function(e){return t.clickGetColorId("BL")}}},[1==t.blue?a("i",{staticClass:"fas fa-check-circle"}):t._e()]),t._v(" "),a("div",{staticClass:"line YL",on:{click:function(e){return t.clickGetColorId("YL")}}},[1==t.yellow?a("i",{staticClass:"fas fa-check-circle"}):t._e()]),t._v(" "),a("div",{staticClass:"line OR",on:{click:function(e){return t.clickGetColorId("OR")}}},[1==t.orange?a("i",{staticClass:"fas fa-check-circle"}):t._e()]),t._v(" "),a("div",{staticClass:"line GR",on:{click:function(e){return t.clickGetColorId("GR")}}},[1==t.green?a("i",{staticClass:"fas fa-check-circle"}):t._e()]),t._v(" "),a("div",{staticClass:"line SV",on:{click:function(e){return t.clickGetColorId("SV")}}},[1==t.silver?a("i",{staticClass:"fas fa-check-circle"}):t._e()])])]),t._v(" "),a("div",{attrs:{id:"trains"}},t._l(t.sortedArray,function(t,e){return a("HelloWorld",{key:e,attrs:{stationName:t.Name,address:t.Address,lat:t.Lat,lon:t.Lon,link:!0,code:t.Code,lc1:t.LineCode1,lc2:t.LineCode2,lc3:t.LineCode3,lc4:t.LineCode4,lc5:t.LineCode5}})}),1)],1)},staticRenderFns:[]};var A=a("VU/8")(S,w,!1,function(t){a("epud")},"data-v-660c2ce2",null).exports,L={name:"Station",data:function(){return{nextTrains:[],allStations:[],stationTimes:[],stationId:"",timer:30,currentHour:"",currentMinute:"",day:"",startTime:"",startHour:"",startMinute:"",todaysHours:[]}},methods:{theNextTrain:function(){var t=this,e="https://api.wmata.com/StationPrediction.svc/json/GetPrediction/"+this.stationId;m.a.get(e,{headers:{api_key:"6c0afb2a0f824f0f9b85bfd174ecae6d"}}).then(function(e){t.nextTrains=e.data.Trains}).catch(function(t){console.log("Error: "+t)})},getThisStation:function(){var t=this;m.a.get("https://api.wmata.com/Rail.svc/json/jStationInfo",{params:{StationCode:this.stationId},headers:{api_key:"6c0afb2a0f824f0f9b85bfd174ecae6d"}}).then(function(e){t.allStations.push(e.data)}).catch(function(t){console.log("Error: "+t)})},getStationTimes:function(){var t=this;m.a.get("https://api.wmata.com/Rail.svc/json/jStationTimes",{params:{StationCode:this.stationId},headers:{api_key:"6c0afb2a0f824f0f9b85bfd174ecae6d"}}).then(function(e){t.stationTimes.push(e.data.StationTimes[0]),t.startAppTime(t.makeTimer())}).catch(function(t){console.log("Error: "+t)})},makeStationId:function(){this.stationId=this.$route.params.pageSlug},makeTimer:function(){setInterval(function(){this.timer=this.timer-1}.bind(this),1e3)},runNextTrain:function(){this.theNextTrain(),setInterval(function(){this.timer=30,this.theNextTrain()}.bind(this),3e4)},getCurrentDayTime:function(){var t=new Date;this.currentHour=t.getHours(),this.currentMinute=t.getMinutes(),this.day=t.getDay()},startAppTime:function(t){if(this.stationTimes.length>0){switch(this.day){case 0:this.startTime=this.stationTimes[0].Sunday.OpeningTime,this.todaysHours.push({openingTime:this.stationTimes[0].Sunday.OpeningTime,firstTrain:this.stationTimes[0].Sunday.FirstTrains[0].Time,lastTrain:this.stationTimes[0].Sunday.LastTrains[0].Time});break;case 1:this.startTime=this.stationTimes[0].Monday.OpeningTime,this.todaysHours.push({openingTime:this.stationTimes[0].Monday.OpeningTime,firstTrain:this.stationTimes[0].Monday.FirstTrains[0].Time,lastTrain:this.stationTimes[0].Monday.LastTrains[0].Time});break;case 2:this.startTime=this.stationTimes[0].Tuesday.OpeningTime,this.todaysHours.push({openingTime:this.stationTimes[0].Tuesday.OpeningTime,firstTrain:this.stationTimes[0].Tuesday.FirstTrains[0].Time,lastTrain:this.stationTimes[0].Tuesday.LastTrains[0].Time});break;case 3:this.startTime=this.stationTimes[0].Wednesday.OpeningTime,this.todaysHours.push({openingTime:this.stationTimes[0].Wednesday.OpeningTime,firstTrain:this.stationTimes[0].Wednesday.FirstTrains[0].Time,lastTrain:this.stationTimes[0].Wednesday.LastTrains[0].Time});break;case 4:this.startTime=this.stationTimes[0].Thursday.OpeningTime,this.todaysHours.push({openingTime:this.stationTimes[0].Thursday.OpeningTime,firstTrain:this.stationTimes[0].Thursday.FirstTrains[0].Time,lastTrain:this.stationTimes[0].Thursday.LastTrains[0].Time});break;case 5:this.startTime=this.stationTimes[0].Friday.OpeningTime,this.todaysHours.push({openingTime:this.stationTimes[0].Friday.OpeningTime,firstTrain:this.stationTimes[0].Friday.FirstTrains[0].Time,lastTrain:this.stationTimes[0].Friday.LastTrains[0].Time});break;case 6:this.startTime=this.stationTimes[0].Saturday.OpeningTime,this.todaysHours.push({openingTime:this.stationTimes[0].Saturday.OpeningTime,firstTrain:this.stationTimes[0].Saturday.FirstTrains[0].Time,lastTrain:this.stationTimes[0].Saturday.LastTrains[0].Time})}this.startHour=this.startTime.split(":")[0],this.startMinute=this.startTime.split(":")[1],t&&this.currentHour>=parseInt(this.startHour)&&(this.currentMinute,parseInt(this.startMinute))}}},mounted:function(){this.makeStationId(),this.getCurrentDayTime(),this.getThisStation(),this.getStationTimes(),this.startAppTime(this.runNextTrain())},components:{HelloWorld:p,AppHeader:g}},M={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.allStations.length>0?a("AppHeader",{attrs:{pageTitle:t.allStations[0].Name,hamburger:"true"}}):t._e(),t._v(" "),a("div",{attrs:{id:"station"}},t._l(t.allStations,function(e,s){return e.Code==t.stationId?a("HelloWorld",{key:s,attrs:{link:!1,address:e.Address,lat:e.Lat,lon:e.Lon,stationName:e.Name,code:e.Code,lc1:e.LineCode1,lc2:e.LineCode2,lc3:e.LineCode3,lc4:e.LineCode4,lc5:e.LineCode5}}):t._e()}),1),t._v(" "),t._m(0),t._v(" "),t._l(t.nextTrains,function(e){return 1==e.Group?a("div",{staticClass:"next-train"},[a("span",{staticClass:"line",class:e.Line},[t._v(t._s(e.Line))]),t._v(" "),a("h4",[t._v(t._s(e.DestinationName))]),t._v(" "),"ARR"==e.Min||"BRD"==e.Min||"---"==e.Min||"DLY"==e.Min?a("span",{staticClass:"arrival"},[t._v(t._s(e.Min))]):""==e.Min?a("span",{staticClass:"arrival"},[t._v("NA")]):a("span",{staticClass:"arrival"},[t._v(t._s(e.Min)+" Min")])]):t._e()}),t._v(" "),t._m(1),t._v(" "),t._l(t.nextTrains,function(e){return 2==e.Group?a("div",{staticClass:"next-train"},[a("span",{staticClass:"line",class:e.Line},[t._v(t._s(e.Line))]),t._v(" "),a("h4",[t._v(t._s(e.DestinationName))]),t._v(" "),"ARR"==e.Min||"BRD"==e.Min||"---"==e.Min||"DLY"==e.Min?a("span",{staticClass:"arrival"},[t._v(t._s(e.Min))]):""==e.Min?a("span",{staticClass:"arrival"},[t._v("NA")]):a("span",{staticClass:"arrival"},[t._v(t._s(e.Min)+" Min")])]):t._e()})],2)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex"},[e("h3",[this._v("This Way")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex"},[e("h3",[this._v("That Way")])])}]};var R=a("VU/8")(L,M,!1,function(t){a("gLLp")},"data-v-947945ea",null).exports,H={name:"Wmata",data:function(){return{favorites:[],allStations:[],distance:""}},methods:{getStation:function(t){var e=this;m.a.get("https://api.wmata.com/Rail.svc/json/jStationInfo",{params:{StationCode:t},headers:{api_key:"6c0afb2a0f824f0f9b85bfd174ecae6d"}}).then(function(t){e.allStations.push(t.data)}).catch(function(t){console.log("Error: "+t)})},loadFavorites:function(){var t;if(Array.isArray(this.favorites))for(t in this.allStations=[],this.favorites[this.favorites.length-1])this.getStation(t);else this.getStation([this.favorites[this.favorites.length-1]])}},mounted:function(){var t=this;d.a.auth().currentUser&&d.a.database().ref("users/"+d.a.auth().currentUser.uid+"/favorites").on("value",function(e){t.favorites.push(e.val()),t.loadFavorites()})},computed:{sortedArray:function(){if(d.a.auth().currentUser){return this.allStations.sort(function(t,e){return t.Name<e.Name?-1:t.Name>e.Name?1:0})}}},components:{HelloWorld:p,AppHeader:g}},I={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("AppHeader",{attrs:{pageTitle:"My Stops",hamburger:"true"}}),t._v(" "),a("div",{attrs:{id:"favorites"}},[t._l(t.sortedArray,function(e,s){return t.sortedArray.length>0?a("HelloWorld",{key:s,attrs:{star:!0,link:!0,address:e.Address,lat:e.Lat,lon:e.Lon,stationName:e.Name,code:e.Code,lc1:e.LineCode1,lc2:e.LineCode2,lc3:e.LineCode3,lc4:e.LineCode4,lc5:e.LineCode5}}):t._e()}),t._v(" "),t.sortedArray.length<=0?a("p",[t._v('You don\'t have any stops. Go to the "All Trains" page and favorite some stations for them to show up on this page.')]):t._e()],2)],1)},staticRenderFns:[]};var N=a("VU/8")(H,I,!1,function(t){a("QRvh")},"data-v-0420a87e",null).exports,x={name:"Navigation",data:function(){return{favs:!1}},methods:{logout:function(){var t=this;d.a.auth().signOut().then(function(){t.$router.replace("stations")})}},mounted:function(){d.a.auth().currentUser&&(this.favs=!0)},components:{AppHeader:g}},F={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("AppHeader",{attrs:{pageTitle:"Navigation",hamburger:"false"}}),t._v(" "),a("nav",[a("ul",[1==t.favs?a("li",[a("router-link",{attrs:{to:"/favorites"}},[t._v("My Stops")])],1):a("li",[a("router-link",{attrs:{to:"/login"}},[t._v("My Stops")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"/"}},[t._v("All Trains")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"/map"}},[t._v("Map")])],1),t._v(" "),1==t.favs?a("li",{on:{click:t.logout}},[t._v("Log Out")]):t._e()])])],1)},staticRenderFns:[]};var U=a("VU/8")(x,F,!1,function(t){a("2kDy")},"data-v-20c02f43",null).exports,O={name:"TrainMap",data:function(){return{}},methods:{},mounted:function(){},components:{AppHeader:g}},E={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("AppHeader",{attrs:{pageTitle:"Map"}}),this._v(" "),this._m(0)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"mapContainer"}},[e("iframe",{attrs:{src:"./static/2017-System-Map.pdf",frameborder:"0"}})])}]};var D=a("VU/8")(O,E,!1,function(t){a("odar")},"data-v-248725f0",null).exports;s.a.use(r.a);var W=new r.a({routes:[{path:"*",redirect:"/login"},{path:"/",redirect:"/stations"},{path:"/stations",name:"Stations",component:A},{path:"/station/:pageSlug",name:"Station",component:R},{path:"/favorites",name:"Wmata",component:N,meta:{requiresAuth:!0}},{path:"/navigation",name:"Navigation",component:U},{path:"/map",name:"TrainMap",component:D},{path:"/sign-up",name:"Sign Up",component:b},{path:"/login",name:"Login",component:C}]});s.a.config.productionTip=!1;var G=void 0;d.a.initializeApp({apiKey:"AIzaSyAHA5huBTw3zZn8grduBnmDPiU-ej-Lsr4",authDomain:"toob-e1e0a.firebaseapp.com",databaseURL:"https://toob-e1e0a.firebaseio.com",projectId:"toob-e1e0a",storageBucket:"toob-e1e0a.appspot.com",messagingSenderId:"184738608827"}),d.a.auth().onAuthStateChanged(function(t){G||(G=new s.a({el:"#app",router:W,components:{App:n},template:"<App/>"}))})},QRvh:function(t,e){},Yiav:function(t,e){},epud:function(t,e){},gLLp:function(t,e){},gej5:function(t,e){},odar:function(t,e){},sPvX:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.a3e47662a67c47890977.js.map