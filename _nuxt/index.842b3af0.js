const d=Object.create(null);d.open="0";d.close="1";d.ping="2";d.pong="3";d.message="4";d.upgrade="5";d.noop="6";const T=Object.create(null);Object.keys(d).forEach(s=>{T[d[s]]=s});const le={type:"error",data:"parser error"},j=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",Z=typeof ArrayBuffer=="function",ee=s=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(s):s&&s.buffer instanceof ArrayBuffer,D=({type:s,data:e},t,i)=>j&&e instanceof Blob?t?i(e):H(e,i):Z&&(e instanceof ArrayBuffer||ee(e))?t?i(e):H(new Blob([e]),i):i(d[s]+(e||"")),H=(s,e)=>{const t=new FileReader;return t.onload=function(){const i=t.result.split(",")[1];e("b"+(i||""))},t.readAsDataURL(s)};function K(s){return s instanceof Uint8Array?s:s instanceof ArrayBuffer?new Uint8Array(s):new Uint8Array(s.buffer,s.byteOffset,s.byteLength)}let C;function pe(s,e){if(j&&s.data instanceof Blob)return s.data.arrayBuffer().then(K).then(e);if(Z&&(s.data instanceof ArrayBuffer||ee(s.data)))return e(K(s.data));D(s,!1,t=>{C||(C=new TextEncoder),e(C.encode(t))})}const W="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",E=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let s=0;s<W.length;s++)E[W.charCodeAt(s)]=s;const de=s=>{let e=s.length*.75,t=s.length,i,n=0,r,o,h,u;s[s.length-1]==="="&&(e--,s[s.length-2]==="="&&e--);const w=new ArrayBuffer(e),y=new Uint8Array(w);for(i=0;i<t;i+=4)r=E[s.charCodeAt(i)],o=E[s.charCodeAt(i+1)],h=E[s.charCodeAt(i+2)],u=E[s.charCodeAt(i+3)],y[n++]=r<<2|o>>4,y[n++]=(o&15)<<4|h>>2,y[n++]=(h&3)<<6|u&63;return w},ye=typeof ArrayBuffer=="function",I=(s,e)=>{if(typeof s!="string")return{type:"message",data:te(s,e)};const t=s.charAt(0);return t==="b"?{type:"message",data:ge(s.substring(1),e)}:T[t]?s.length>1?{type:T[t],data:s.substring(1)}:{type:T[t]}:le},ge=(s,e)=>{if(ye){const t=de(s);return te(t,e)}else return{base64:!0,data:s}},te=(s,e)=>{switch(e){case"blob":return s instanceof Blob?s:new Blob([s]);case"arraybuffer":default:return s instanceof ArrayBuffer?s:s.buffer}},se=String.fromCharCode(30),me=(s,e)=>{const t=s.length,i=new Array(t);let n=0;s.forEach((r,o)=>{D(r,!1,h=>{i[o]=h,++n===t&&e(i.join(se))})})},be=(s,e)=>{const t=s.split(se),i=[];for(let n=0;n<t.length;n++){const r=I(t[n],e);if(i.push(r),r.type==="error")break}return i};let B;function we(s,e,t){B||(B=new TextDecoder);const i=e||s[0]<48||s[0]>54;return I(i?s:B.decode(s),t)}const ie=4;function a(s){if(s)return _e(s)}function _e(s){for(var e in a.prototype)s[e]=a.prototype[e];return s}a.prototype.on=a.prototype.addEventListener=function(s,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+s]=this._callbacks["$"+s]||[]).push(e),this};a.prototype.once=function(s,e){function t(){this.off(s,t),e.apply(this,arguments)}return t.fn=e,this.on(s,t),this};a.prototype.off=a.prototype.removeListener=a.prototype.removeAllListeners=a.prototype.removeEventListener=function(s,e){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var t=this._callbacks["$"+s];if(!t)return this;if(arguments.length==1)return delete this._callbacks["$"+s],this;for(var i,n=0;n<t.length;n++)if(i=t[n],i===e||i.fn===e){t.splice(n,1);break}return t.length===0&&delete this._callbacks["$"+s],this};a.prototype.emit=function(s){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),t=this._callbacks["$"+s],i=1;i<arguments.length;i++)e[i-1]=arguments[i];if(t){t=t.slice(0);for(var i=0,n=t.length;i<n;++i)t[i].apply(this,e)}return this};a.prototype.emitReserved=a.prototype.emit;a.prototype.listeners=function(s){return this._callbacks=this._callbacks||{},this._callbacks["$"+s]||[]};a.prototype.hasListeners=function(s){return!!this.listeners(s).length};const f=(()=>typeof self<"u"?self:typeof window<"u"?window:Function("return this")())();function ne(s,...e){return e.reduce((t,i)=>(s.hasOwnProperty(i)&&(t[i]=s[i]),t),{})}const ve=f.setTimeout,Ee=f.clearTimeout;function O(s,e){e.useNativeTimers?(s.setTimeoutFn=ve.bind(f),s.clearTimeoutFn=Ee.bind(f)):(s.setTimeoutFn=f.setTimeout.bind(f),s.clearTimeoutFn=f.clearTimeout.bind(f))}const ke=1.33;function Ae(s){return typeof s=="string"?Te(s):Math.ceil((s.byteLength||s.size)*ke)}function Te(s){let e=0,t=0;for(let i=0,n=s.length;i<n;i++)e=s.charCodeAt(i),e<128?t+=1:e<2048?t+=2:e<55296||e>=57344?t+=3:(i++,t+=4);return t}function Re(s){let e="";for(let t in s)s.hasOwnProperty(t)&&(e.length&&(e+="&"),e+=encodeURIComponent(t)+"="+encodeURIComponent(s[t]));return e}function Oe(s){let e={},t=s.split("&");for(let i=0,n=t.length;i<n;i++){let r=t[i].split("=");e[decodeURIComponent(r[0])]=decodeURIComponent(r[1])}return e}class Ce extends Error{constructor(e,t,i){super(e),this.description=t,this.context=i,this.type="TransportError"}}class F extends a{constructor(e){super(),this.writable=!1,O(this,e),this.opts=e,this.query=e.query,this.socket=e.socket}onError(e,t,i){return super.emitReserved("error",new Ce(e,t,i)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(e){this.readyState==="open"&&this.write(e)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(e){const t=I(e,this.socket.binaryType);this.onPacket(t)}onPacket(e){super.emitReserved("packet",e)}onClose(e){this.readyState="closed",super.emitReserved("close",e)}pause(e){}createUri(e,t={}){return e+"://"+this._hostname()+this._port()+this.opts.path+this._query(t)}_hostname(){const e=this.opts.hostname;return e.indexOf(":")===-1?e:"["+e+"]"}_port(){return this.opts.port&&(this.opts.secure&&+(this.opts.port!==443)||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(e){const t=Re(e);return t.length?"?"+t:""}}const re="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),N=64,Be={};let $=0,k=0,z;function Y(s){let e="";do e=re[s%N]+e,s=Math.floor(s/N);while(s>0);return e}function oe(){const s=Y(+new Date);return s!==z?($=0,z=s):s+"."+Y($++)}for(;k<N;k++)Be[re[k]]=k;let ce=!1;try{ce=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const Se=ce;function he(s){const e=s.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!e||Se))return new XMLHttpRequest}catch{}if(!e)try{return new f[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}function Ne(){}const xe=function(){return new he({xdomain:!1}).responseType!=null}();class Le extends F{constructor(e){if(super(e),this.polling=!1,typeof location<"u"){const i=location.protocol==="https:";let n=location.port;n||(n=i?"443":"80"),this.xd=typeof location<"u"&&e.hostname!==location.hostname||n!==e.port}const t=e&&e.forceBase64;this.supportsBinary=xe&&!t,this.opts.withCredentials&&(this.cookieJar=void 0)}get name(){return"polling"}doOpen(){this.poll()}pause(e){this.readyState="pausing";const t=()=>{this.readyState="paused",e()};if(this.polling||!this.writable){let i=0;this.polling&&(i++,this.once("pollComplete",function(){--i||t()})),this.writable||(i++,this.once("drain",function(){--i||t()}))}else t()}poll(){this.polling=!0,this.doPoll(),this.emitReserved("poll")}onData(e){const t=i=>{if(this.readyState==="opening"&&i.type==="open"&&this.onOpen(),i.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(i)};be(e,this.socket.binaryType).forEach(t),this.readyState!=="closed"&&(this.polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this.poll())}doClose(){const e=()=>{this.write([{type:"close"}])};this.readyState==="open"?e():this.once("open",e)}write(e){this.writable=!1,me(e,t=>{this.doWrite(t,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const e=this.opts.secure?"https":"http",t=this.query||{};return this.opts.timestampRequests!==!1&&(t[this.opts.timestampParam]=oe()),!this.supportsBinary&&!t.sid&&(t.b64=1),this.createUri(e,t)}request(e={}){return Object.assign(e,{xd:this.xd,cookieJar:this.cookieJar},this.opts),new p(this.uri(),e)}doWrite(e,t){const i=this.request({method:"POST",data:e});i.on("success",t),i.on("error",(n,r)=>{this.onError("xhr post error",n,r)})}doPoll(){const e=this.request();e.on("data",this.onData.bind(this)),e.on("error",(t,i)=>{this.onError("xhr poll error",t,i)}),this.pollXhr=e}}class p extends a{constructor(e,t){super(),O(this,t),this.opts=t,this.method=t.method||"GET",this.uri=e,this.data=t.data!==void 0?t.data:null,this.create()}create(){var e;const t=ne(this.opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");t.xdomain=!!this.opts.xd;const i=this.xhr=new he(t);try{i.open(this.method,this.uri,!0);try{if(this.opts.extraHeaders){i.setDisableHeaderCheck&&i.setDisableHeaderCheck(!0);for(let n in this.opts.extraHeaders)this.opts.extraHeaders.hasOwnProperty(n)&&i.setRequestHeader(n,this.opts.extraHeaders[n])}}catch{}if(this.method==="POST")try{i.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{i.setRequestHeader("Accept","*/*")}catch{}(e=this.opts.cookieJar)===null||e===void 0||e.addCookies(i),"withCredentials"in i&&(i.withCredentials=this.opts.withCredentials),this.opts.requestTimeout&&(i.timeout=this.opts.requestTimeout),i.onreadystatechange=()=>{var n;i.readyState===3&&((n=this.opts.cookieJar)===null||n===void 0||n.parseCookies(i)),i.readyState===4&&(i.status===200||i.status===1223?this.onLoad():this.setTimeoutFn(()=>{this.onError(typeof i.status=="number"?i.status:0)},0))},i.send(this.data)}catch(n){this.setTimeoutFn(()=>{this.onError(n)},0);return}typeof document<"u"&&(this.index=p.requestsCount++,p.requests[this.index]=this)}onError(e){this.emitReserved("error",e,this.xhr),this.cleanup(!0)}cleanup(e){if(!(typeof this.xhr>"u"||this.xhr===null)){if(this.xhr.onreadystatechange=Ne,e)try{this.xhr.abort()}catch{}typeof document<"u"&&delete p.requests[this.index],this.xhr=null}}onLoad(){const e=this.xhr.responseText;e!==null&&(this.emitReserved("data",e),this.emitReserved("success"),this.cleanup())}abort(){this.cleanup()}}p.requestsCount=0;p.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",J);else if(typeof addEventListener=="function"){const s="onpagehide"in f?"pagehide":"unload";addEventListener(s,J,!1)}}function J(){for(let s in p.requests)p.requests.hasOwnProperty(s)&&p.requests[s].abort()}const V=(()=>typeof Promise=="function"&&typeof Promise.resolve=="function"?e=>Promise.resolve().then(e):(e,t)=>t(e,0))(),A=f.WebSocket||f.MozWebSocket,X=!0,Pe="arraybuffer",Q=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class qe extends F{constructor(e){super(e),this.supportsBinary=!e.forceBase64}get name(){return"websocket"}doOpen(){if(!this.check())return;const e=this.uri(),t=this.opts.protocols,i=Q?{}:ne(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(i.headers=this.opts.extraHeaders);try{this.ws=X&&!Q?t?new A(e,t):new A(e):new A(e,t,i)}catch(n){return this.emitReserved("error",n)}this.ws.binaryType=this.socket.binaryType||Pe,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=e=>this.onClose({description:"websocket connection closed",context:e}),this.ws.onmessage=e=>this.onData(e.data),this.ws.onerror=e=>this.onError("websocket error",e)}write(e){this.writable=!1;for(let t=0;t<e.length;t++){const i=e[t],n=t===e.length-1;D(i,this.supportsBinary,r=>{const o={};try{X&&this.ws.send(r)}catch{}n&&V(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.close(),this.ws=null)}uri(){const e=this.opts.secure?"wss":"ws",t=this.query||{};return this.opts.timestampRequests&&(t[this.opts.timestampParam]=oe()),this.supportsBinary||(t.b64=1),this.createUri(e,t)}check(){return!!A}}function De(s,e){return s.type==="message"&&typeof s.data!="string"&&e[0]>=48&&e[0]<=54}class Ie extends F{get name(){return"webtransport"}doOpen(){typeof WebTransport=="function"&&(this.transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name]),this.transport.closed.then(()=>{this.onClose()}).catch(e=>{this.onError("webtransport error",e)}),this.transport.ready.then(()=>{this.transport.createBidirectionalStream().then(e=>{const t=e.readable.getReader();this.writer=e.writable.getWriter();let i;const n=()=>{t.read().then(({done:o,value:h})=>{o||(!i&&h.byteLength===1&&h[0]===54?i=!0:(this.onPacket(we(h,i,"arraybuffer")),i=!1),n())}).catch(o=>{})};n();const r=this.query.sid?`0{"sid":"${this.query.sid}"}`:"0";this.writer.write(new TextEncoder().encode(r)).then(()=>this.onOpen())})}))}write(e){this.writable=!1;for(let t=0;t<e.length;t++){const i=e[t],n=t===e.length-1;pe(i,r=>{De(i,r)&&this.writer.write(Uint8Array.of(54)),this.writer.write(r).then(()=>{n&&V(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})})}}doClose(){var e;(e=this.transport)===null||e===void 0||e.close()}}const Fe={websocket:qe,webtransport:Ie,polling:Le},Ve=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,Ue=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function x(s){const e=s,t=s.indexOf("["),i=s.indexOf("]");t!=-1&&i!=-1&&(s=s.substring(0,t)+s.substring(t,i).replace(/:/g,";")+s.substring(i,s.length));let n=Ve.exec(s||""),r={},o=14;for(;o--;)r[Ue[o]]=n[o]||"";return t!=-1&&i!=-1&&(r.source=e,r.host=r.host.substring(1,r.host.length-1).replace(/;/g,":"),r.authority=r.authority.replace("[","").replace("]","").replace(/;/g,":"),r.ipv6uri=!0),r.pathNames=Me(r,r.path),r.queryKey=He(r,r.query),r}function Me(s,e){const t=/\/{2,9}/g,i=e.replace(t,"/").split("/");return(e.slice(0,1)=="/"||e.length===0)&&i.splice(0,1),e.slice(-1)=="/"&&i.splice(i.length-1,1),i}function He(s,e){const t={};return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(i,n,r){n&&(t[n]=r)}),t}let ae=class m extends a{constructor(e,t={}){super(),this.writeBuffer=[],e&&typeof e=="object"&&(t=e,e=null),e?(e=x(e),t.hostname=e.host,t.secure=e.protocol==="https"||e.protocol==="wss",t.port=e.port,e.query&&(t.query=e.query)):t.host&&(t.hostname=x(t.host).host),O(this,t),this.secure=t.secure!=null?t.secure:typeof location<"u"&&location.protocol==="https:",t.hostname&&!t.port&&(t.port=this.secure?"443":"80"),this.hostname=t.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=t.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=t.transports||["polling","websocket","webtransport"],this.writeBuffer=[],this.prevBufferLen=0,this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},t),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=Oe(this.opts.query)),this.id=null,this.upgrades=null,this.pingInterval=null,this.pingTimeout=null,this.pingTimeoutTimer=null,typeof addEventListener=="function"&&(this.opts.closeOnBeforeunload&&(this.beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this.beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this.offlineEventListener=()=>{this.onClose("transport close",{description:"network connection lost"})},addEventListener("offline",this.offlineEventListener,!1))),this.open()}createTransport(e){const t=Object.assign({},this.opts.query);t.EIO=ie,t.transport=e,this.id&&(t.sid=this.id);const i=Object.assign({},this.opts,{query:t,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[e]);return new Fe[e](i)}open(){let e;if(this.opts.rememberUpgrade&&m.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1)e="websocket";else if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}else e=this.transports[0];this.readyState="opening";try{e=this.createTransport(e)}catch{this.transports.shift(),this.open();return}e.open(),this.setTransport(e)}setTransport(e){this.transport&&this.transport.removeAllListeners(),this.transport=e,e.on("drain",this.onDrain.bind(this)).on("packet",this.onPacket.bind(this)).on("error",this.onError.bind(this)).on("close",t=>this.onClose("transport close",t))}probe(e){let t=this.createTransport(e),i=!1;m.priorWebsocketSuccess=!1;const n=()=>{i||(t.send([{type:"ping",data:"probe"}]),t.once("packet",g=>{if(!i)if(g.type==="pong"&&g.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",t),!t)return;m.priorWebsocketSuccess=t.name==="websocket",this.transport.pause(()=>{i||this.readyState!=="closed"&&(y(),this.setTransport(t),t.send([{type:"upgrade"}]),this.emitReserved("upgrade",t),t=null,this.upgrading=!1,this.flush())})}else{const _=new Error("probe error");_.transport=t.name,this.emitReserved("upgradeError",_)}}))};function r(){i||(i=!0,y(),t.close(),t=null)}const o=g=>{const _=new Error("probe error: "+g);_.transport=t.name,r(),this.emitReserved("upgradeError",_)};function h(){o("transport closed")}function u(){o("socket closed")}function w(g){t&&g.name!==t.name&&r()}const y=()=>{t.removeListener("open",n),t.removeListener("error",o),t.removeListener("close",h),this.off("close",u),this.off("upgrading",w)};t.once("open",n),t.once("error",o),t.once("close",h),this.once("close",u),this.once("upgrading",w),this.upgrades.indexOf("webtransport")!==-1&&e!=="webtransport"?this.setTimeoutFn(()=>{i||t.open()},200):t.open()}onOpen(){if(this.readyState="open",m.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush(),this.readyState==="open"&&this.opts.upgrade){let e=0;const t=this.upgrades.length;for(;e<t;e++)this.probe(this.upgrades[e])}}onPacket(e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",e),this.emitReserved("heartbeat"),e.type){case"open":this.onHandshake(JSON.parse(e.data));break;case"ping":this.resetPingTimeout(),this.sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong");break;case"error":const t=new Error("server error");t.code=e.data,this.onError(t);break;case"message":this.emitReserved("data",e.data),this.emitReserved("message",e.data);break}}onHandshake(e){this.emitReserved("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this.upgrades=this.filterUpgrades(e.upgrades),this.pingInterval=e.pingInterval,this.pingTimeout=e.pingTimeout,this.maxPayload=e.maxPayload,this.onOpen(),this.readyState!=="closed"&&this.resetPingTimeout()}resetPingTimeout(){this.clearTimeoutFn(this.pingTimeoutTimer),this.pingTimeoutTimer=this.setTimeoutFn(()=>{this.onClose("ping timeout")},this.pingInterval+this.pingTimeout),this.opts.autoUnref&&this.pingTimeoutTimer.unref()}onDrain(){this.writeBuffer.splice(0,this.prevBufferLen),this.prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const e=this.getWritablePackets();this.transport.send(e),this.prevBufferLen=e.length,this.emitReserved("flush")}}getWritablePackets(){if(!(this.maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let t=1;for(let i=0;i<this.writeBuffer.length;i++){const n=this.writeBuffer[i].data;if(n&&(t+=Ae(n)),i>0&&t>this.maxPayload)return this.writeBuffer.slice(0,i);t+=2}return this.writeBuffer}write(e,t,i){return this.sendPacket("message",e,t,i),this}send(e,t,i){return this.sendPacket("message",e,t,i),this}sendPacket(e,t,i,n){if(typeof t=="function"&&(n=t,t=void 0),typeof i=="function"&&(n=i,i=null),this.readyState==="closing"||this.readyState==="closed")return;i=i||{},i.compress=i.compress!==!1;const r={type:e,data:t,options:i};this.emitReserved("packetCreate",r),this.writeBuffer.push(r),n&&this.once("flush",n),this.flush()}close(){const e=()=>{this.onClose("forced close"),this.transport.close()},t=()=>{this.off("upgrade",t),this.off("upgradeError",t),e()},i=()=>{this.once("upgrade",t),this.once("upgradeError",t)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?i():e()}):this.upgrading?i():e()),this}onError(e){m.priorWebsocketSuccess=!1,this.emitReserved("error",e),this.onClose("transport error",e)}onClose(e,t){(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")&&(this.clearTimeoutFn(this.pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),typeof removeEventListener=="function"&&(removeEventListener("beforeunload",this.beforeunloadEventListener,!1),removeEventListener("offline",this.offlineEventListener,!1)),this.readyState="closed",this.id=null,this.emitReserved("close",e,t),this.writeBuffer=[],this.prevBufferLen=0)}filterUpgrades(e){const t=[];let i=0;const n=e.length;for(;i<n;i++)~this.transports.indexOf(e[i])&&t.push(e[i]);return t}};ae.protocol=ie;function Ke(s,e="",t){let i=s;t=t||typeof location<"u"&&location,s==null&&(s=t.protocol+"//"+t.host),typeof s=="string"&&(s.charAt(0)==="/"&&(s.charAt(1)==="/"?s=t.protocol+s:s=t.host+s),/^(https?|wss?):\/\//.test(s)||(typeof t<"u"?s=t.protocol+"//"+s:s="https://"+s),i=x(s)),i.port||(/^(http|ws)$/.test(i.protocol)?i.port="80":/^(http|ws)s$/.test(i.protocol)&&(i.port="443")),i.path=i.path||"/";const r=i.host.indexOf(":")!==-1?"["+i.host+"]":i.host;return i.id=i.protocol+"://"+r+":"+i.port+e,i.href=i.protocol+"://"+r+(t&&t.port===i.port?"":":"+i.port),i}const We=typeof ArrayBuffer=="function",$e=s=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(s):s.buffer instanceof ArrayBuffer,ue=Object.prototype.toString,ze=typeof Blob=="function"||typeof Blob<"u"&&ue.call(Blob)==="[object BlobConstructor]",Ye=typeof File=="function"||typeof File<"u"&&ue.call(File)==="[object FileConstructor]";function U(s){return We&&(s instanceof ArrayBuffer||$e(s))||ze&&s instanceof Blob||Ye&&s instanceof File}function R(s,e){if(!s||typeof s!="object")return!1;if(Array.isArray(s)){for(let t=0,i=s.length;t<i;t++)if(R(s[t]))return!0;return!1}if(U(s))return!0;if(s.toJSON&&typeof s.toJSON=="function"&&arguments.length===1)return R(s.toJSON(),!0);for(const t in s)if(Object.prototype.hasOwnProperty.call(s,t)&&R(s[t]))return!0;return!1}function Je(s){const e=[],t=s.data,i=s;return i.data=L(t,e),i.attachments=e.length,{packet:i,buffers:e}}function L(s,e){if(!s)return s;if(U(s)){const t={_placeholder:!0,num:e.length};return e.push(s),t}else if(Array.isArray(s)){const t=new Array(s.length);for(let i=0;i<s.length;i++)t[i]=L(s[i],e);return t}else if(typeof s=="object"&&!(s instanceof Date)){const t={};for(const i in s)Object.prototype.hasOwnProperty.call(s,i)&&(t[i]=L(s[i],e));return t}return s}function Xe(s,e){return s.data=P(s.data,e),delete s.attachments,s}function P(s,e){if(!s)return s;if(s&&s._placeholder===!0){if(typeof s.num=="number"&&s.num>=0&&s.num<e.length)return e[s.num];throw new Error("illegal attachments")}else if(Array.isArray(s))for(let t=0;t<s.length;t++)s[t]=P(s[t],e);else if(typeof s=="object")for(const t in s)Object.prototype.hasOwnProperty.call(s,t)&&(s[t]=P(s[t],e));return s}const Qe=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"],Ge=5;var c;(function(s){s[s.CONNECT=0]="CONNECT",s[s.DISCONNECT=1]="DISCONNECT",s[s.EVENT=2]="EVENT",s[s.ACK=3]="ACK",s[s.CONNECT_ERROR=4]="CONNECT_ERROR",s[s.BINARY_EVENT=5]="BINARY_EVENT",s[s.BINARY_ACK=6]="BINARY_ACK"})(c||(c={}));class je{constructor(e){this.replacer=e}encode(e){return(e.type===c.EVENT||e.type===c.ACK)&&R(e)?this.encodeAsBinary({type:e.type===c.EVENT?c.BINARY_EVENT:c.BINARY_ACK,nsp:e.nsp,data:e.data,id:e.id}):[this.encodeAsString(e)]}encodeAsString(e){let t=""+e.type;return(e.type===c.BINARY_EVENT||e.type===c.BINARY_ACK)&&(t+=e.attachments+"-"),e.nsp&&e.nsp!=="/"&&(t+=e.nsp+","),e.id!=null&&(t+=e.id),e.data!=null&&(t+=JSON.stringify(e.data,this.replacer)),t}encodeAsBinary(e){const t=Je(e),i=this.encodeAsString(t.packet),n=t.buffers;return n.unshift(i),n}}function G(s){return Object.prototype.toString.call(s)==="[object Object]"}class M extends a{constructor(e){super(),this.reviver=e}add(e){let t;if(typeof e=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");t=this.decodeString(e);const i=t.type===c.BINARY_EVENT;i||t.type===c.BINARY_ACK?(t.type=i?c.EVENT:c.ACK,this.reconstructor=new Ze(t),t.attachments===0&&super.emitReserved("decoded",t)):super.emitReserved("decoded",t)}else if(U(e)||e.base64)if(this.reconstructor)t=this.reconstructor.takeBinaryData(e),t&&(this.reconstructor=null,super.emitReserved("decoded",t));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+e)}decodeString(e){let t=0;const i={type:Number(e.charAt(0))};if(c[i.type]===void 0)throw new Error("unknown packet type "+i.type);if(i.type===c.BINARY_EVENT||i.type===c.BINARY_ACK){const r=t+1;for(;e.charAt(++t)!=="-"&&t!=e.length;);const o=e.substring(r,t);if(o!=Number(o)||e.charAt(t)!=="-")throw new Error("Illegal attachments");i.attachments=Number(o)}if(e.charAt(t+1)==="/"){const r=t+1;for(;++t&&!(e.charAt(t)===","||t===e.length););i.nsp=e.substring(r,t)}else i.nsp="/";const n=e.charAt(t+1);if(n!==""&&Number(n)==n){const r=t+1;for(;++t;){const o=e.charAt(t);if(o==null||Number(o)!=o){--t;break}if(t===e.length)break}i.id=Number(e.substring(r,t+1))}if(e.charAt(++t)){const r=this.tryParse(e.substr(t));if(M.isPayloadValid(i.type,r))i.data=r;else throw new Error("invalid payload")}return i}tryParse(e){try{return JSON.parse(e,this.reviver)}catch{return!1}}static isPayloadValid(e,t){switch(e){case c.CONNECT:return G(t);case c.DISCONNECT:return t===void 0;case c.CONNECT_ERROR:return typeof t=="string"||G(t);case c.EVENT:case c.BINARY_EVENT:return Array.isArray(t)&&(typeof t[0]=="number"||typeof t[0]=="string"&&Qe.indexOf(t[0])===-1);case c.ACK:case c.BINARY_ACK:return Array.isArray(t)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class Ze{constructor(e){this.packet=e,this.buffers=[],this.reconPack=e}takeBinaryData(e){if(this.buffers.push(e),this.buffers.length===this.reconPack.attachments){const t=Xe(this.reconPack,this.buffers);return this.finishedReconstruction(),t}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}const et=Object.freeze(Object.defineProperty({__proto__:null,Decoder:M,Encoder:je,get PacketType(){return c},protocol:Ge},Symbol.toStringTag,{value:"Module"}));function l(s,e,t){return s.on(e,t),function(){s.off(e,t)}}const tt=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class fe extends a{constructor(e,t,i){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=e,this.nsp=t,i&&i.auth&&(this.auth=i.auth),this._opts=Object.assign({},i),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const e=this.io;this.subs=[l(e,"open",this.onopen.bind(this)),l(e,"packet",this.onpacket.bind(this)),l(e,"error",this.onerror.bind(this)),l(e,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...e){return e.unshift("message"),this.emit.apply(this,e),this}emit(e,...t){if(tt.hasOwnProperty(e))throw new Error('"'+e.toString()+'" is a reserved event name');if(t.unshift(e),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(t),this;const i={type:c.EVENT,data:t};if(i.options={},i.options.compress=this.flags.compress!==!1,typeof t[t.length-1]=="function"){const o=this.ids++,h=t.pop();this._registerAckCallback(o,h),i.id=o}const n=this.io.engine&&this.io.engine.transport&&this.io.engine.transport.writable;return this.flags.volatile&&(!n||!this.connected)||(this.connected?(this.notifyOutgoingListeners(i),this.packet(i)):this.sendBuffer.push(i)),this.flags={},this}_registerAckCallback(e,t){var i;const n=(i=this.flags.timeout)!==null&&i!==void 0?i:this._opts.ackTimeout;if(n===void 0){this.acks[e]=t;return}const r=this.io.setTimeoutFn(()=>{delete this.acks[e];for(let o=0;o<this.sendBuffer.length;o++)this.sendBuffer[o].id===e&&this.sendBuffer.splice(o,1);t.call(this,new Error("operation has timed out"))},n);this.acks[e]=(...o)=>{this.io.clearTimeoutFn(r),t.apply(this,[null,...o])}}emitWithAck(e,...t){const i=this.flags.timeout!==void 0||this._opts.ackTimeout!==void 0;return new Promise((n,r)=>{t.push((o,h)=>i?o?r(o):n(h):n(o)),this.emit(e,...t)})}_addToQueue(e){let t;typeof e[e.length-1]=="function"&&(t=e.pop());const i={id:this._queueSeq++,tryCount:0,pending:!1,args:e,flags:Object.assign({fromQueue:!0},this.flags)};e.push((n,...r)=>i!==this._queue[0]?void 0:(n!==null?i.tryCount>this._opts.retries&&(this._queue.shift(),t&&t(n)):(this._queue.shift(),t&&t(null,...r)),i.pending=!1,this._drainQueue())),this._queue.push(i),this._drainQueue()}_drainQueue(e=!1){if(!this.connected||this._queue.length===0)return;const t=this._queue[0];t.pending&&!e||(t.pending=!0,t.tryCount++,this.flags=t.flags,this.emit.apply(this,t.args))}packet(e){e.nsp=this.nsp,this.io._packet(e)}onopen(){typeof this.auth=="function"?this.auth(e=>{this._sendConnectPacket(e)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(e){this.packet({type:c.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},e):e})}onerror(e){this.connected||this.emitReserved("connect_error",e)}onclose(e,t){this.connected=!1,delete this.id,this.emitReserved("disconnect",e,t)}onpacket(e){if(e.nsp===this.nsp)switch(e.type){case c.CONNECT:e.data&&e.data.sid?this.onconnect(e.data.sid,e.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case c.EVENT:case c.BINARY_EVENT:this.onevent(e);break;case c.ACK:case c.BINARY_ACK:this.onack(e);break;case c.DISCONNECT:this.ondisconnect();break;case c.CONNECT_ERROR:this.destroy();const i=new Error(e.data.message);i.data=e.data.data,this.emitReserved("connect_error",i);break}}onevent(e){const t=e.data||[];e.id!=null&&t.push(this.ack(e.id)),this.connected?this.emitEvent(t):this.receiveBuffer.push(Object.freeze(t))}emitEvent(e){if(this._anyListeners&&this._anyListeners.length){const t=this._anyListeners.slice();for(const i of t)i.apply(this,e)}super.emit.apply(this,e),this._pid&&e.length&&typeof e[e.length-1]=="string"&&(this._lastOffset=e[e.length-1])}ack(e){const t=this;let i=!1;return function(...n){i||(i=!0,t.packet({type:c.ACK,id:e,data:n}))}}onack(e){const t=this.acks[e.id];typeof t=="function"&&(t.apply(this,e.data),delete this.acks[e.id])}onconnect(e,t){this.id=e,this.recovered=t&&this._pid===t,this._pid=t,this.connected=!0,this.emitBuffered(),this.emitReserved("connect"),this._drainQueue(!0)}emitBuffered(){this.receiveBuffer.forEach(e=>this.emitEvent(e)),this.receiveBuffer=[],this.sendBuffer.forEach(e=>{this.notifyOutgoingListeners(e),this.packet(e)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(e=>e()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:c.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(e){return this.flags.compress=e,this}get volatile(){return this.flags.volatile=!0,this}timeout(e){return this.flags.timeout=e,this}onAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(e),this}prependAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(e),this}offAny(e){if(!this._anyListeners)return this;if(e){const t=this._anyListeners;for(let i=0;i<t.length;i++)if(e===t[i])return t.splice(i,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(e),this}prependAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(e),this}offAnyOutgoing(e){if(!this._anyOutgoingListeners)return this;if(e){const t=this._anyOutgoingListeners;for(let i=0;i<t.length;i++)if(e===t[i])return t.splice(i,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(e){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const t=this._anyOutgoingListeners.slice();for(const i of t)i.apply(this,e.data)}}}function b(s){s=s||{},this.ms=s.min||100,this.max=s.max||1e4,this.factor=s.factor||2,this.jitter=s.jitter>0&&s.jitter<=1?s.jitter:0,this.attempts=0}b.prototype.duration=function(){var s=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),t=Math.floor(e*this.jitter*s);s=Math.floor(e*10)&1?s+t:s-t}return Math.min(s,this.max)|0};b.prototype.reset=function(){this.attempts=0};b.prototype.setMin=function(s){this.ms=s};b.prototype.setMax=function(s){this.max=s};b.prototype.setJitter=function(s){this.jitter=s};class q extends a{constructor(e,t){var i;super(),this.nsps={},this.subs=[],e&&typeof e=="object"&&(t=e,e=void 0),t=t||{},t.path=t.path||"/socket.io",this.opts=t,O(this,t),this.reconnection(t.reconnection!==!1),this.reconnectionAttempts(t.reconnectionAttempts||1/0),this.reconnectionDelay(t.reconnectionDelay||1e3),this.reconnectionDelayMax(t.reconnectionDelayMax||5e3),this.randomizationFactor((i=t.randomizationFactor)!==null&&i!==void 0?i:.5),this.backoff=new b({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(t.timeout==null?2e4:t.timeout),this._readyState="closed",this.uri=e;const n=t.parser||et;this.encoder=new n.Encoder,this.decoder=new n.Decoder,this._autoConnect=t.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(e){return arguments.length?(this._reconnection=!!e,this):this._reconnection}reconnectionAttempts(e){return e===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=e,this)}reconnectionDelay(e){var t;return e===void 0?this._reconnectionDelay:(this._reconnectionDelay=e,(t=this.backoff)===null||t===void 0||t.setMin(e),this)}randomizationFactor(e){var t;return e===void 0?this._randomizationFactor:(this._randomizationFactor=e,(t=this.backoff)===null||t===void 0||t.setJitter(e),this)}reconnectionDelayMax(e){var t;return e===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=e,(t=this.backoff)===null||t===void 0||t.setMax(e),this)}timeout(e){return arguments.length?(this._timeout=e,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(e){if(~this._readyState.indexOf("open"))return this;this.engine=new ae(this.uri,this.opts);const t=this.engine,i=this;this._readyState="opening",this.skipReconnect=!1;const n=l(t,"open",function(){i.onopen(),e&&e()}),r=h=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",h),e?e(h):this.maybeReconnectOnOpen()},o=l(t,"error",r);if(this._timeout!==!1){const h=this._timeout,u=this.setTimeoutFn(()=>{n(),r(new Error("timeout")),t.close()},h);this.opts.autoUnref&&u.unref(),this.subs.push(()=>{this.clearTimeoutFn(u)})}return this.subs.push(n),this.subs.push(o),this}connect(e){return this.open(e)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const e=this.engine;this.subs.push(l(e,"ping",this.onping.bind(this)),l(e,"data",this.ondata.bind(this)),l(e,"error",this.onerror.bind(this)),l(e,"close",this.onclose.bind(this)),l(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(e){try{this.decoder.add(e)}catch(t){this.onclose("parse error",t)}}ondecoded(e){V(()=>{this.emitReserved("packet",e)},this.setTimeoutFn)}onerror(e){this.emitReserved("error",e)}socket(e,t){let i=this.nsps[e];return i?this._autoConnect&&!i.active&&i.connect():(i=new fe(this,e,t),this.nsps[e]=i),i}_destroy(e){const t=Object.keys(this.nsps);for(const i of t)if(this.nsps[i].active)return;this._close()}_packet(e){const t=this.encoder.encode(e);for(let i=0;i<t.length;i++)this.engine.write(t[i],e.options)}cleanup(){this.subs.forEach(e=>e()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close"),this.engine&&this.engine.close()}disconnect(){return this._close()}onclose(e,t){this.cleanup(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",e,t),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const t=this.backoff.duration();this._reconnecting=!0;const i=this.setTimeoutFn(()=>{e.skipReconnect||(this.emitReserved("reconnect_attempt",e.backoff.attempts),!e.skipReconnect&&e.open(n=>{n?(e._reconnecting=!1,e.reconnect(),this.emitReserved("reconnect_error",n)):e.onreconnect()}))},t);this.opts.autoUnref&&i.unref(),this.subs.push(()=>{this.clearTimeoutFn(i)})}}onreconnect(){const e=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",e)}}const v={};function S(s,e){typeof s=="object"&&(e=s,s=void 0),e=e||{};const t=Ke(s,e.path||"/socket.io"),i=t.source,n=t.id,r=t.path,o=v[n]&&r in v[n].nsps,h=e.forceNew||e["force new connection"]||e.multiplex===!1||o;let u;return h?u=new q(i,e):(v[n]||(v[n]=new q(i,e)),u=v[n]),t.query&&!e.query&&(e.query=t.queryKey),u.socket(t.path,e)}Object.assign(S,{Manager:q,Socket:fe,io:S,connect:S});export{q as Manager,fe as Socket,S as connect,S as default,S as io,Ge as protocol};
