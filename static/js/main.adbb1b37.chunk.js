(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{357:function(e,t,a){e.exports=a(836)},361:function(e,t,a){},362:function(e,t,a){},592:function(e,t){},836:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),s=a(23),l=a.n(s),i=(a(361),a(31)),o=a(32),c=a(34),u=a(33),m=a(27),h=a(35),d=(a(362),a(71)),p=a(134),g=a.n(p);g.a.initializeApp({apiKey:"AIzaSyDT8vlV4rmSkA29wHnamuDAszkx_rTzw6s",authDomain:"hacksc-2020-72721.firebaseapp.com",databaseURL:"https://hacksc-2020-72721.firebaseio.com",projectId:"hacksc-2020-72721",storageBucket:"hacksc-2020-72721.appspot.com",messagingSenderId:"120013387215",appId:"1:120013387215:web:fc65d61082c955dff94eba"});var y=g.a.firestore(),f=g.a,v=a(10),b=a(87),E=a.n(b),k=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(v.p,{color:"dark-green",dark:!0,expand:"md"},r.a.createElement(v.q,null,r.a.createElement("strong",{className:"white-text"}," Live&Learn")," ",r.a.createElement(v.i,{icon:"apple-alt"})),r.a.createElement(v.s,{onClick:this.toggleCollapse}),r.a.createElement(v.r,{left:!0},r.a.createElement(v.n,null,r.a.createElement(v.o,{to:"../"},r.a.createElement(v.i,{icon:"home"}),"Home")),r.a.createElement(v.n,null,r.a.createElement(v.o,{to:"/streams"},r.a.createElement(v.i,{icon:"video"}),"Streams")),r.a.createElement(v.n,null,r.a.createElement(v.o,{to:"/profile"},r.a.createElement(v.i,{icon:"user-edit"}),"Profile")),r.a.createElement(v.n,null,r.a.createElement(v.o,{to:"/guide"},r.a.createElement(v.i,{icon:"clipboard-list"}),"Guide")),r.a.createElement(v.n,null,r.a.createElement(v.o,{to:"/dashboard"},r.a.createElement(v.i,{icon:"question"}),"Dashboard")))))}}]),t}(n.Component),C=(a(53),a(67)),w=(a(720),new C.a("4zbz7yw374h6"));w.setUser({id:"divine-art-9",name:"Divine art",image:"https://getstream.io/random_svg/?id=divine-art-9&name=Divine+art"},"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiZGl2aW5lLWFydC05In0.0Ce-vmn7fcec-PCD2OWy3sIVRLrmKRhBXp69vSGlgtw");w.channel("livestream","spacex",{image:"https://goo.gl/Zefkbx",name:"SpaceX launch discussion"});var j=a(332),O=a(350),D=a.n(O),I=a(355),S=a.n(I),x=a(352),L=a.n(x),T=a(353),q=a.n(T),N=a(354),U=a.n(N),M=a(356),A=a.n(M),K=a(111),_=a.n(K),P=a(140),W=a.n(P),F=a(141),R=a.n(F),H=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).state={messages:[],user:"",isAuthenticated:!1},e}return Object(h.a)(t,e),Object(o.a)(t,[{key:"signOut",value:function(){f.auth().signOut()}},{key:"componentDidMount",value:function(){var e=this;f.auth().onAuthStateChanged((function(t){t?(e.setState({isAuthenticated:!0,user:t}),e.loadMessages()):e.setState({isAuthenticated:!1,user:{},messages:[]})}))}},{key:"loadMessages",value:function(){var e=this;f.database().ref("/messages/").limitToLast(12).on("child_added",(function(t){var a=t.val();a.id=t.key;var n=e.state.messages;n.push(a),e.setState({messages:n})}))}},{key:"onSend",value:function(e){var t=!0,a=!1,n=void 0;try{for(var r,s=e[Symbol.iterator]();!(t=(r=s.next()).done);t=!0){var l=r.value;this.saveMessage(l)}}catch(i){a=!0,n=i}finally{try{t||null==s.return||s.return()}finally{if(a)throw n}}}},{key:"saveMessage",value:function(e){return f.database().ref("/messages/").push(e).catch((function(e){console.error("Error saving message to Database:",e)}))}},{key:"renderSignOutButton",value:function(){var e=this;return this.state.isAuthenticated?r.a.createElement(D.a,{onClick:function(){return e.signOut()}},"Sign out"):null}},{key:"renderChat",value:function(){var e=this;return r.a.createElement(j.GiftedChat,{user:this.chatUser,messages:this.state.messages.slice().reverse(),onSend:function(t){return e.onSend(t)}})}},{key:"renderChannels",value:function(){return r.a.createElement(L.a,null,r.a.createElement(q.a,{button:!0},r.a.createElement(U.a,null,r.a.createElement(S.a,null,"D")),r.a.createElement(A.a,{primary:"Default"})))}},{key:"renderChannelsHeader",value:function(){return r.a.createElement(W.a,{position:"static",color:"default"},r.a.createElement(R.a,null,r.a.createElement(_.a,{variant:"h6",color:"inherit"},"Channels")))}},{key:"renderChatHeader",value:function(){return r.a.createElement(W.a,{position:"static",color:"default"},r.a.createElement(R.a,null,r.a.createElement(_.a,{variant:"h6",color:"inherit"},"Default channel")))}},{key:"renderSettingsHeader",value:function(){return r.a.createElement(W.a,{position:"static",color:"default"},r.a.createElement(R.a,null,r.a.createElement(_.a,{variant:"h6",color:"inherit"},"Settings")))}},{key:"render",value:function(){return r.a.createElement("div",{style:B.container},r.a.createElement("div",{style:B.chat},this.renderChatHeader(),this.renderChat()),r.a.createElement("div",{style:B.settings},this.renderSettingsHeader(),this.renderSignOutButton()))}}]),t}(n.Component),B={container:{flex:1,display:"flex",flexDirection:"row",height:"50vh"},channelList:{display:"flex",flex:1,flexDirection:"column"},chat:{display:"flex",flex:3,flexDirection:"column",borderWidth:"1px",borderColor:"#ccc",borderRightStyle:"solid",borderLeftStyle:"solid"},settings:{display:"flex",flex:1,flexDirection:"column"}},J=H,z=a(62),G=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleClick=function(e,t){e.upvotes++,y.collection("questions").doc(e.uid).set({question:e.question,upvotes:e.upvotes,uid:e.uid});var n=[];y.collection("questions").get().then((function(e){e.forEach((function(e){n.push(e.data()),a.state.questions=n}))})),a.forceUpdate()},a.logout=a.logout.bind(Object(m.a)(a)),a.handleChange=a.handleChange.bind(Object(m.a)(a)),a.submitQuestion=a.submitQuestion.bind(Object(m.a)(a)),a.componentDidMount=a.componentDidMount.bind(Object(m.a)(a)),a.componentDidUpdate=a.componentDidUpdate.bind(Object(m.a)(a)),a.state={question:"",questions:[],upvotes:[]},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"handleChange",value:function(e){console.log(e.target.name),this.setState(Object(z.a)({},e.target.name,e.target.value)),console.log(e.target.value),console.log(this.state.name)}},{key:"submitQuestion",value:function(e){var t=a(88)();f.firestore().doc("/questions/".concat(t)).set({uid:t,question:this.state.question,upvotes:0})}},{key:"componentDidMount",value:function(){var e=this,t=[];y.collection("questions").get().then((function(a){a.forEach((function(a){t.push(a.data()),e.state.questions=t}))}))}},{key:"componentDidUpdate",value:function(){var e=this,t=[];y.collection("questions").get().then((function(a){a.forEach((function(a){t.push(a.data()),e.state.questions=t}))}))}},{key:"logout",value:function(){f.auth().signOut()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"}},r.a.createElement(v.g,null,r.a.createElement(v.d,{style:{padding:"20px"}},r.a.createElement("center",null,r.a.createElement("h1",null,"Live&Learn"),r.a.createElement("h3",null,"Free interactive live streams for educators and students")," ",this.state.questions.map((function(t,a){return r.a.createElement(v.l,{className:"d-flex justify-content-between align-items-center",key:a},t.question," ",r.a.createElement(v.i,{value:t,onClick:e.handleClick.bind(e,t),icon:"thumbs-up"}," ",t.upvotes," "))})),r.a.createElement(v.k,{value:this.state.question,onChange:this.handleChange,label:"Ask a question",name:"question",type:"text",error:"wrong",success:"right"}),r.a.createElement(v.c,{color:"green",type:"button",onClick:this.submitQuestion},"Submit")))))}}]),t}(n.Component),Y=function(e){function t(e){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).call(this,e))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"}},r.a.createElement(v.g,null,r.a.createElement(v.d,{style:{padding:"20px"}},r.a.createElement("h1",null,"Live&Learn"),r.a.createElement("h3",null,"Free interactive live streams for educators and students"),r.a.createElement(J,null)))))}}]),t}(n.Component),Q=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this)))._isMounted=!1,e.updateInfo=e.updateInfo.bind(Object(m.a)(e)),e.handleChange=e.handleChange.bind(Object(m.a)(e)),e.state={email:"",streamDescription:"",playbackID:"",streamTitle:"",streamCategory:"",streamURL:""},e}return Object(h.a)(t,e),Object(o.a)(t,[{key:"handleChange",value:function(e){this._isMounted&&(console.log(e.target.name),this.setState(Object(z.a)({},e.target.name,e.target.value)),console.log(e.target.value)),console.log(this.state.name)}},{key:"handleErrors",value:function(e){if(!e.ok)throw Error(e.statusText);return e}},{key:"fetchStatusHandler",value:function(e){if(200===e.status)return e;throw new Error(e.statusText)}},{key:"updateInfo",value:function(){if(""!=this.state.email){var e=this;y.collection("users").doc(this.state.email).onSnapshot({includeMetadataChanges:!0},(function(t){try{e.setState({streamDescription:t.data().streamDescription,playbackID:t.data().playbackID,streamTitle:t.data().streamTitle,streamCategory:t.data().streamCategory});var a="https://stream.mux.com/"+t.data().playbackID+".m3u8";fetch(a).then((function(t){if(!t.ok)return alert("Stream is currently offline!"),void e.setState({streamTitle:"OFFLINE",streamDescription:"OFFLINE",streamCategory:"OFFLINE",streamURL:"https://pixabay.com/videos/download/video-7070_large.mp4"});e.setState({streamURL:a})})).catch((function(e){}))}catch(n){alert("Something went wrong"),0}}))}else alert("please enter a valid email")}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"componentDidMount",value:function(){this._isMounted=!0}},{key:"render",value:function(){return r.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"}},r.a.createElement(v.g,null,r.a.createElement(v.d,{style:{padding:"20px"}},r.a.createElement("center",null,r.a.createElement(v.c,{color:"green",type:"button",onClick:this.updateInfo},"Load Stream"),r.a.createElement(E.a,{url:this.state.streamURL,playing:"true"}),r.a.createElement(v.k,{value:this.state.email,onChange:this.handleChange,label:"Enter user's email",group:!0,name:"email",type:"text",error:"wrong",success:"right",required:!0}),r.a.createElement("h4",null,"Title: ",this.state.streamTitle),r.a.createElement("h5",null,"Description: ",this.state.streamDescription),r.a.createElement("h6",null,"Category: ",this.state.streamCategory),r.a.createElement("p",null)))),r.a.createElement(v.g,null,r.a.createElement("div",{className:"w-85 p-20"},r.a.createElement(v.d,{style:{alignItems:"left"}},r.a.createElement(J,null)))),"/")}}]),t}(n.Component),V=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this)))._isMounted=!1,e.generateKey=function(){null==e.state.streamKey?(fetch("http://localhost:9000/streamLive",{method:"POST"}).then((function(e){return e.json()})).then((function(t){return e.setState({streamKey:t.stream_key,playbackID:t.playbackid})})),e.updateInfo()):alert("You already have a stream key.")},e.updateInfo=e.updateInfo.bind(Object(m.a)(e)),e.handleChange=e.handleChange.bind(Object(m.a)(e)),e.generateKey=e.generateKey.bind(Object(m.a)(e)),e.state={streamKey:"",streamDescription:"",playbackID:"",streamTitle:"",streamCategory:""},e}return Object(h.a)(t,e),Object(o.a)(t,[{key:"handleChange",value:function(e){console.log(e.target.value),this._isMounted&&this.setState(Object(z.a)({},e.target.name,e.target.value))}},{key:"updateInfo",value:function(e){y.collection("users").doc(f.auth().currentUser.email).update({streamKey:this.state.streamKey,playbackID:this.state.playbackID,streamTitle:this.state.streamTitle,streamDescription:this.state.streamDescription,streamCategory:this.state.streamCategory}).then((function(){alert("UPDATE DONE")})).catch((function(e){alert("something went wrong..")}))}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"componentDidMount",value:function(){this._isMounted=!0;var e=this;f.auth().onAuthStateChanged((function(t){if(t){var a=0,n=y.collection("users").doc(f.auth().currentUser.email);f.auth().currentUser.email;n.onSnapshot({includeMetadataChanges:!0},(function(t){try{e.setState({email:t.data().email,streamKey:t.data().streamKey,streamDescription:t.data().streamDescription,playbackID:t.data().playbackID,streamTitle:t.data().streamTitle,streamCategory:t.data().streamCategory})}catch(n){console.log("We getting an error: ",n),a=0}})),1==a||e.setState({budget:["N/A"]})}}))}},{key:"logout",value:function(){f.auth().signOut()}},{key:"render",value:function(){return r.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"}},r.a.createElement(v.g,null,r.a.createElement(v.d,{style:{padding:"20px"}},r.a.createElement("center",null,r.a.createElement("h3",null,"Stream Configurations"),r.a.createElement(v.k,{value:this.state.streamTitle,onChange:this.handleChange,label:"Stream Title",group:!0,name:"streamTitle",type:"text",error:"wrong",success:"right",required:!0}),r.a.createElement(v.k,{value:this.state.streamDescription,onChange:this.handleChange,label:"Stream Description",group:!0,name:"streamDescription",type:"text",error:"wrong",success:"right",required:!0}),r.a.createElement(v.k,{value:this.state.streamCategory,onChange:this.handleChange,label:"Stream Category",group:!0,name:"streamCategory",type:"text",error:"wrong",success:"right",required:!0}),r.a.createElement(v.k,{value:this.state.streamKey,onChange:this.handleChange,label:"Stream Key",group:!0,name:"streamKey",type:"text",error:"wrong",success:"right",disabled:!0}),r.a.createElement(v.k,{value:this.state.playbackID,onChange:this.handleChange,label:"Playback ID",group:!0,name:"playbackID",type:"text",error:"wrong",success:"right",disabled:!0}),r.a.createElement("div",{className:"text-center py-4 mt-3"},r.a.createElement(v.c,{color:"primary",type:"button",onClick:this.updateInfo},r.a.createElement(v.i,{icon:"edit"}),"Update Info"),r.a.createElement(v.c,{color:"warning",type:"button",onClick:this.generateKey},r.a.createElement(v.i,{icon:"key"}),"Generate Key"),r.a.createElement(v.c,{color:"success",type:"button",onClick:this.logout},"Logout"))))))}}]),t}(n.Component),X=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"}},r.a.createElement(v.g,null,r.a.createElement(v.d,null,r.a.createElement("center",null,r.a.createElement("h3",null,"Categories here!"),r.a.createElement("p",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")))))}}]),t}(n.Component),Z=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"}},r.a.createElement(v.g,null,r.a.createElement(v.d,{style:{padding:"20px"}},r.a.createElement("center",null,r.a.createElement("h2",null,"Getting Started"),r.a.createElement("p",null,r.a.createElement("i",null,"First and foremost, welcome to Live&Learn, we are so happy to have you on board. Here at Live&Learn, we provide you a platform for you to broadcast seamlessly and share deeper connections with others.")),r.a.createElement("h4",null,r.a.createElement(v.i,{icon:"headset"}),r.a.createElement("b",null,"Streamer")),r.a.createElement("p",null,"Please navigate to the Profile page via the Navigation Bar in order to set your stream key and stream ID. This will allow you to broadcast to audiences. In order to stream, you must use valid broadcasting service like OBS and configure your stream settings accordingly. Never share your stream key with anyone. You can also update your stream information, like your stream title, description, and category on the Profile page."),r.a.createElement("h4",null,r.a.createElement(v.i,{icon:"book"}),r.a.createElement("b",null,"User")),r.a.createElement("p",null,"We welcome you to indulge yourself in spending time and relaxing on our site. You can view anybody's broadcast on this site. Navigate to the Streams section of our website and simply just enter the person's email you would like to view. Feel free to chat with others online and treat each other with respect! There is a broadcast for everyone to enjoy here."),r.a.createElement("h2",null,r.a.createElement(v.i,{icon:"street-view"}),"The Rules"),r.a.createElement("p",null,"Don't challenge or attack others. The discussions and comments are meant to stimulate conversation not to create contention. Let others have their say, just as you may. Don't post commercial messages on any discussion list, resource library entry, or other area where others might see it. Contact people directly with product and service information if you believe it would help them. Use caution when discussing products. Information posted on the lists and in the libraries is available for all to see, and comments are subject to libel, slander, and antitrust laws. All defamatory, abusive, profane, threatening, offensive, or illegal materials are strictly prohibited. Do not post anything that you would not want the world to see or that you would not want anyone to know came from you. Please note carefully all items listed in the disclaimer and legal rules below, particularly regarding the copyright ownership of information posted. Remember that other participants have the right to reproduce postings to this site unless you specify otherwise. Post your message or documents only to the most appropriate lists or libraries. Do not spam several lists or libraries with the same message. All messages must add to the body of knowledge. We reserve the right to reject any message for any reason.")))))}}]),t}(n.Component),$=function(){return r.a.createElement(d.c,null,r.a.createElement(d.a,{exact:!0,path:"/",component:Y}),r.a.createElement(d.a,{path:"/streams",component:Q}),r.a.createElement(d.a,{path:"/profile",component:V}),r.a.createElement(d.a,{path:"/categories",component:X}),r.a.createElement(d.a,{path:"/guide",component:Z}),r.a.createElement(d.a,{path:"/dashboard",component:G}))},ee=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).createNewToken=function(){fetch("http://localhost:9000/chatToken",{method:"POST"}).then((function(e){return e.json()})).then((function(e){a.setState({chatToken:e.chatToken})}))},a.handleChange=a.handleChange.bind(Object(m.a)(a)),a.signup=a.signup.bind(Object(m.a)(a)),a.state={name:"",email:"",password:"",chatID:"",chatImage:"",chatToken:""},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"handleChange",value:function(e){if(this.setState(Object(z.a)({},e.target.name,e.target.value)),"name"===e.target.name){var t=e.target.value.split(" "),a=t[0].charAt(0)+t[1];this.setState({chatID:a}),this.setState({chatImage:"https://getstream.io/random_svg/?id="+a+"&name="+e.target.value}),this.createNewToken()}}},{key:"signup",value:function(e){""!=this.state.name&&""!=this.state.email&&""!=this.state.password?(e.preventDefault(),f.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then((function(e){})).then((function(e){console.log(e)})).catch((function(e){console.log(e),alert(e)})),f.firestore().doc("/users/".concat(this.state.email)).set({name:this.state.name,password:this.state.password,streamKey:null,playbackID:null,streamTitle:null,streamDescription:null,streamCategory:null,chatID:this.state.chatID,chatName:this.state.name,chatImage:this.state.chatImage,chatToken:this.state.chatToken})):alert("please fill out all fields")}},{key:"render",value:function(){return r.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"3vh",width:"1000px"}},r.a.createElement(v.m,null,r.a.createElement(v.g,null,r.a.createElement(v.v,null,r.a.createElement(v.f,{md:"6"},r.a.createElement(v.d,null,r.a.createElement(v.e,null,r.a.createElement("form",null,r.a.createElement("p",{className:"h4 text-center py-4"},"Sign up"),r.a.createElement("div",{className:"grey-text"},r.a.createElement(v.k,{value:this.state.name,onChange:this.handleChange,label:"Your name",icon:"user",group:!0,name:"name",type:"text",validate:!0,error:"wrong",success:"right"}),r.a.createElement(v.k,{value:this.state.email,onChange:this.handleChange,label:"Your email",icon:"envelope",group:!0,name:"email",type:"email",validate:!0,error:"wrong",success:"right"}),r.a.createElement(v.k,{value:this.state.password,onChange:this.handleChange,label:"Your password",icon:"lock",group:!0,name:"password",type:"password",validate:!0})),r.a.createElement("div",{className:"text-center py-4 mt-3"},r.a.createElement(v.c,{color:"orange",type:"submit",onClick:this.signup},"Register"),r.a.createElement(v.c,{color:"blue",type:"submit",onClick:"close"},"Close"))))))))))}}]),t}(n.Component),te=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).login=a.login.bind(Object(m.a)(a)),a.handleChange=a.handleChange.bind(Object(m.a)(a)),a.signup=a.signup.bind(Object(m.a)(a)),a.state={email:"",password:"",showsignup:!1},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"login",value:function(e){e.preventDefault(),console.log(this.state.email),f.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((function(e){})).catch((function(e){alert(e)}))}},{key:"handleChange",value:function(e){this.setState(Object(z.a)({},e.target.name,e.target.value))}},{key:"signup",value:function(e){this.setState({showsignup:!0})}},{key:"render",value:function(){return r.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"}},r.a.createElement(v.g,null,r.a.createElement(v.d,{style:{justifyContent:"center",padding:"50px"}},r.a.createElement("form",null,r.a.createElement("p",{className:"h5 mb-4"},"Sign in to Live&Learn"),r.a.createElement("div",{className:"grey-text"},r.a.createElement(v.k,{value:this.state.email,onChange:this.handleChange,label:"Type your email",icon:"envelope",group:!0,name:"email",type:"email",validate:!0,error:"wrong",success:"right"}),r.a.createElement(v.k,{value:this.state.password,onChange:this.handleChange,label:"Type your password",icon:"lock",group:!0,name:"password",type:"password",validate:!0})),r.a.createElement("div",{className:"d-inline"},r.a.createElement(v.c,{type:"submit",onClick:this.login},"Login")),r.a.createElement("div",{className:"d-inline"},r.a.createElement(v.c,{color:"indigo",onClick:this.signup},"SignUp"),this.state.showsignup?r.a.createElement(ee,null):null)))))}}]),t}(n.Component),ae=(a(832),a(833),a(834),function(){return r.a.createElement("center",null,r.a.createElement(v.h,{color:"dark-green",className:"font-small pt-4 mt-4"},r.a.createElement("div",{className:"footer-copyright text-center py-3"},r.a.createElement("center",null,r.a.createElement(v.g,{fluid:!0},"\xa9 ",(new Date).getFullYear(),":",r.a.createElement("a",{href:"https://github.com/jaeeee/HackSC_2020/"}," Live&Learn ")," ",r.a.createElement(v.i,{icon:"heart"}))))))}),ne=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).state={user:null,name:""},e.authListener=e.authListener.bind(Object(m.a)(e)),e}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,this.state.user?r.a.createElement(k,null):"",this.state.user?r.a.createElement($,null):r.a.createElement(te,null),r.a.createElement("center",null,this.state.user?r.a.createElement(ae,null):""))}},{key:"componentDidMount",value:function(){this.authListener()}},{key:"authListener",value:function(){var e=this;f.auth().onAuthStateChanged((function(t){t?(e.setState({user:t}),localStorage.setItem("user",t.uid)):(e.setState({user:null}),localStorage.removeItem("user"))}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var re=a(61);l.a.render(r.a.createElement(re.a,null,r.a.createElement(ne,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[357,1,2]]]);
//# sourceMappingURL=main.adbb1b37.chunk.js.map