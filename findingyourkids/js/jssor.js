function $JssorPlayerClass$(){function i(n){function r(u){var f=$Jssor$.$EventSrc(u);t=f.pInstance;$Jssor$.$RemoveEvent(f,"dataavailable",r);$Jssor$.$Each(i,function(n){n!=t&&n.$Remove()});n.pTagName=t.tagName;i=null}function u(t){var u,f;return t.pInstance||(f=$Jssor$.$AttributeEx(t,"pHandler"),$JssorPlayer$[f]&&($Jssor$.$AddEvent(t,"dataavailable",r),u=new $JssorPlayer$[f](n,t),i.push(u),$JssorDebug$.$Execute(function(){$Jssor$.$Type(u.$Remove)!="function"&&$JssorDebug$.$Fail("'pRemove' interface not implemented for player handler '"+f+"'.")}))),u}var f=this,t,i=[];f.$InitPlayerController=function(){if(!n.pInstance&&!u(n)){var t=$Jssor$.$Children(n);$Jssor$.$Each(t,function(n){u(n)})}}}var t=this,n=[];t.$EVT_SWITCH=21;t.$FetchPlayers=function(t){t=t||document.body;var r=$Jssor$.$FindChildren(t,"player");$Jssor$.$Each(r,function(t){n[t.pId]||(t.pId=n.length,n.push(new i(t)));var r=n[t.pId];r.$InitPlayerController()})}}var $JssorDebug$=new function(){function n(t){if(t.constructor===n.caller)throw new Error("Cannot create instance of an abstract class.");}this.$DebugMode=!0;this.$Log=function(n,t){var i=window.console||{},r=this.$DebugMode;r&&i.log?i.log(n):r&&t&&alert(n)};this.$Error=function(n,t){var r=window.console||{},i=this.$DebugMode;if(i&&r.error?r.error(n):i&&alert(n),i)throw t||new Error(n);};this.$Fail=function(n){throw new Error(n);};this.$Assert=function(n,t){var i=this.$DebugMode;if(i&&!n)throw new Error("Assert failed "+t||"");};this.$Trace=function(n){var t=window.console||{},i=this.$DebugMode;i&&t.log&&t.log(n)};this.$Execute=function(n){var t=this.$DebugMode;t&&n()};this.$LiveStamp=function(n,t){var r=this.$DebugMode,i;r&&(i=document.createElement("DIV"),i.setAttribute("id",t),n.$Live=i)};this.$C_AbstractMethod=function(){throw new Error("The method is abstract, it should be implemented by subclass.");};this.$C_AbstractClass=n},$JssorEasing$=window.$JssorEasing$={$EaseLinear:function(n){return n},$EaseGoBack:function(n){return 1-Math.abs((n*=2)-1)},$EaseSwing:function(n){return-Math.cos(n*Math.PI)/2+.5},$EaseInQuad:function(n){return n*n},$EaseOutQuad:function(n){return-n*(n-2)},$EaseInOutQuad:function(n){return(n*=2)<1?1/2*n*n:-1/2*(--n*(n-2)-1)},$EaseInCubic:function(n){return n*n*n},$EaseOutCubic:function(n){return(n-=1)*n*n+1},$EaseInOutCubic:function(n){return(n*=2)<1?1/2*n*n*n:1/2*((n-=2)*n*n+2)},$EaseInQuart:function(n){return n*n*n*n},$EaseOutQuart:function(n){return-((n-=1)*n*n*n-1)},$EaseInOutQuart:function(n){return(n*=2)<1?1/2*n*n*n*n:-1/2*((n-=2)*n*n*n-2)},$EaseInQuint:function(n){return n*n*n*n*n},$EaseOutQuint:function(n){return(n-=1)*n*n*n*n+1},$EaseInOutQuint:function(n){return(n*=2)<1?1/2*n*n*n*n*n:1/2*((n-=2)*n*n*n*n+2)},$EaseInSine:function(n){return 1-Math.cos(n*Math.PI/2)},$EaseOutSine:function(n){return Math.sin(n*Math.PI/2)},$EaseInOutSine:function(n){return-1/2*(Math.cos(Math.PI*n)-1)},$EaseInExpo:function(n){return n==0?0:Math.pow(2,10*(n-1))},$EaseOutExpo:function(n){return n==1?1:-Math.pow(2,-10*n)+1},$EaseInOutExpo:function(n){return n==0||n==1?n:(n*=2)<1?1/2*Math.pow(2,10*(n-1)):1/2*(-Math.pow(2,-10*--n)+2)},$EaseInCirc:function(n){return-(Math.sqrt(1-n*n)-1)},$EaseOutCirc:function(n){return Math.sqrt(1-(n-=1)*n)},$EaseInOutCirc:function(n){return(n*=2)<1?-1/2*(Math.sqrt(1-n*n)-1):1/2*(Math.sqrt(1-(n-=2)*n)+1)},$EaseInElastic:function(n){if(!n||n==1)return n;return-(Math.pow(2,10*(n-=1))*Math.sin((n-.075)*2*Math.PI/.3))},$EaseOutElastic:function(n){if(!n||n==1)return n;return Math.pow(2,-10*n)*Math.sin((n-.075)*2*Math.PI/.3)+1},$EaseInOutElastic:function(n){if(!n||n==1)return n;var t=.45,i=.1125;return(n*=2)<1?-.5*Math.pow(2,10*(n-=1))*Math.sin((n-i)*2*Math.PI/t):Math.pow(2,-10*(n-=1))*Math.sin((n-i)*2*Math.PI/t)*.5+1},$EaseInBack:function(n){var t=1.70158;return n*n*((t+1)*n-t)},$EaseOutBack:function(n){var t=1.70158;return(n-=1)*n*((t+1)*n+t)+1},$EaseInOutBack:function(n){var t=1.70158;return(n*=2)<1?1/2*n*n*(((t*=1.525)+1)*n-t):1/2*((n-=2)*n*(((t*=1.525)+1)*n+t)+2)},$EaseInBounce:function(n){return 1-$JssorEasing$.$EaseOutBounce(1-n)},$EaseOutBounce:function(n){return n<1/2.75?7.5625*n*n:n<2/2.75?7.5625*(n-=1.5/2.75)*n+.75:n<2.5/2.75?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375},$EaseInOutBounce:function(n){return n<1/2?$JssorEasing$.$EaseInBounce(n*2)*.5:$JssorEasing$.$EaseOutBounce(n*2-1)*.5+.5},$EaseInWave:function(n){return 1-Math.cos(n*Math.PI*2)},$EaseOutWave:function(n){return Math.sin(n*Math.PI*2)},$EaseOutJump:function(n){return 1-((n*=2)<1?(n=1-n)*n*n:(n-=1)*n*n)},$EaseInJump:function(n){return(n*=2)<1?n*n*n:(n=2-n)*n*n}},$JssorDirection$=window.$JssorDirection$={$TO_LEFT:1,$TO_RIGHT:2,$TO_TOP:4,$TO_BOTTOM:8,$HORIZONTAL:3,$VERTICAL:12,$LEFTRIGHT:3,$TOPBOTOM:12,$TOPLEFT:5,$TOPRIGHT:6,$BOTTOMLEFT:9,$BOTTOMRIGHT:10,$AROUND:15,$GetDirectionHorizontal:function(n){return n&3},$GetDirectionVertical:function(n){return n&12},$ChessHorizontal:function(n){return(~n&3)+(n&12)},$ChessVertical:function(n){return(~n&12)+(n&3)},$IsToLeft:function(n){return(n&3)==1},$IsToRight:function(n){return(n&3)==2},$IsToTop:function(n){return(n&12)==4},$IsToBottom:function(n){return(n&12)==8},$IsHorizontal:function(n){return(n&3)>0},$IsVertical:function(n){return(n&12)>0}},$JssorKeyCode$={$BACKSPACE:8,$COMMA:188,$DELETE:46,$DOWN:40,$END:35,$ENTER:13,$ESCAPE:27,$HOME:36,$LEFT:37,$NUMPAD_ADD:107,$NUMPAD_DECIMAL:110,$NUMPAD_DIVIDE:111,$NUMPAD_ENTER:108,$NUMPAD_MULTIPLY:106,$NUMPAD_SUBTRACT:109,$PAGE_DOWN:34,$PAGE_UP:33,$PERIOD:190,$RIGHT:39,$SPACE:32,$TAB:9,$UP:38},$JssorAlignment$={$TopLeft:17,$TopCenter:18,$TopRight:20,$MiddleLeft:33,$MiddleCenter:34,$MiddleRight:36,$BottomLeft:65,$BottomCenter:66,$BottomRight:68,$IsTop:function(n){return n&!0},$IsMiddle:function(n){return n&!0},$IsBottom:function(n){return n&!0},$IsLeft:function(n){return n&!0},$IsCenter:function(n){return n&!0},$IsRight:function(n){return n&!0}},$JssorMatrix$,$JssorAnimator$,$Jssor$=window.$Jssor$=new function(){function v(){var n,h,f;if(!u)if(ri!="Microsoft Internet Explorer"||!window.attachEvent||!window.ActiveXObject)if(ri!="Netscape"||!window.addEventListener)f=/(opera)(?:.*version|)[ \/]([\w.]+)/i.exec(t),f&&(u=ti,r=o(f[2]));else{var e=t.indexOf("Firefox"),i=t.indexOf("Safari"),c=t.indexOf("Chrome"),s=t.indexOf("AppleWebKit");e>=0?(u=tt,r=o(t.substring(e+8))):i>=0&&(h=t.substring(0,i).lastIndexOf("/"),u=c>=0?ni:tt,r=o(t.substring(h+1,i)));s>=0&&(b=o(t.substring(s+12)))}else{n=t.indexOf("MSIE");u=gt;l=o(t.substring(n+5,t.indexOf(";",n)));/*@cc_on ii=@_jscript_version@*/;r=document.documentMode||l}}function h(){return v(),u==gt}function ht(){return h()&&(r<6||document.compatMode=="BackCompat")}function ki(){return v(),u==tt}function ui(){return v(),u==tt}function fi(){return v(),u==ni}function ei(){return v(),u==ti}function oi(){return ui()&&b>534&&b<535}function d(){return h()&&r<9}function a(n){return k||(i(["transform","WebkitTransform","msTransform","MozTransform","OTransform"],function(t){if(n.style[t]!=undefined)return k=t,!0}),k=k||"transform"),k}function si(n){return Object.prototype.toString.call(n)}function i(n,t){var i,r;if(si(n)=="[object Array]"){for(i=0;i<n.length;i++)if(t(n[i],i,n))return!0}else for(r in n)if(t(n[r],r,n))return!0}function di(){return it||(it={},i(["Boolean","Number","String","Function","Array","Date","RegExp","Object"],function(n){it["[object "+n+"]"]=n.toLowerCase()})),it}function y(n){return n==null?String(n):di()[si(n)]||"object"}function gi(t){var i,r;if(!t||y(t)!=="object"||t.nodeType||n.$IsWindow(t))return!1;i=Object.prototype.hasOwnProperty;try{if(t.constructor&&!i.call(t,"constructor")&&!i.call(t.constructor.prototype,"isPrototypeOf"))return!1}catch(u){return!1}for(r in t);return r===undefined||i.call(t,r)}function p(n,t){return{x:n,y:t}}function hi(n,t){setTimeout(n,t||0)}function rt(n,t,r){var u=!n||n=="inherit"?"":n;return i(t,function(n){var t=n.exec(u),i,r;t&&(i=u.substr(0,t.index),r=u.substr(t.lastIndex+1,u.length-(t.lastIndex+1)),u=i+r)}),u=r+(u.indexOf(" ")!=0?" ":"")+u}function ci(n,t){r<9&&(n.style.filter=t)}function nr(t,i,r){if(ii<9){var u=t.style.filter,f=new RegExp(/[\s]*progid:DXImageTransform\.Microsoft\.Matrix\([^\)]*\)/g),e=i?"progid:DXImageTransform.Microsoft.Matrix(M11="+i[0][0]+", M12="+i[0][1]+", M21="+i[1][0]+", M22="+i[1][1]+", SizingMethod='auto expand')":"",o=rt(u,[f],e);ci(t,o);n.$CssMarginTop(t,r.y);n.$CssMarginLeft(t,r.x)}}function li(n){n.constructor===li.caller&&n.$Construct&&n.$Construct()}function c(n){return n||window.event}function g(n,t,i){if(i!=undefined)n.style[t]=i;else{var r=n.currentStyle||n.style;return i=r[t],i==""&&window.getComputedStyle&&(r=n.ownerDocument.defaultView.getComputedStyle(n,null),r&&(i=r.getPropertyValue(t)||r[t])),i}}function ct(n,t,i,r){if(i!=undefined)r&&(i+="px"),g(n,t,i);else return o(g(n,t))}function tr(n,t,i){return ct(n,t,i,!0)}function e(n,t){var i=t&2,r=t?ct:g;return function(t,u){return r(t,n,u,i)}}function ir(n){if(h()&&l<9){var t=/opacity=([^)]*)/.exec(n.style.filter||"");return t?o(t[1])/100:1}return o(n.style.opacity||"1")}function rr(n,t,i){var f;if(h()&&l<9){var e=n.style.filter||"",o=new RegExp(/[\s]*alpha\([^\)]*\)/g),r=Math.round(100*t),u="";(r<100||i)&&(u="alpha(opacity="+r+") ");f=rt(e,[o],u);ci(n,f)}else n.style.opacity=t==1?"":Math.round(t*100)/100}function ai(t,i){var u=i.$Rotate||0,r=i.$Scale==undefined?1:i.$Scale,f,e,o;d()?(f=n.$CreateMatrix(u/180*Math.PI,r,r),nr(t,!u&&r==1?null:f,n.$GetMatrixOffset(f,i.$OriginalWidth,i.$OriginalHeight))):(e=a(t),e&&(o="rotate("+u%360+"deg) scale("+r+")",fi()&&b>535&&(o+=" perspective(2000px)"),t.style[e]=o))}function vi(n,t,i,r){for(r=r||"u",n=n?n.firstChild:null;n;n=n.nextSibling)if(n.nodeType==1){if(wt(n,r)==t)return n;if(!i){var u=vi(n,t,i,r);if(u)return u}}}function yi(n,t,i,r){var u,f;for(r=r||"u",u=[],n=n?n.firstChild:null;n;n=n.nextSibling)n.nodeType==1&&(wt(n,r)==t&&u.push(n),i||(f=yi(n,t,i,r),f.length&&(u=u.concat(f))));return u}function pi(n,t,i){for(n=n?n.firstChild:null;n;n=n.nextSibling)if(n.nodeType==1){if(n.tagName==t)return n;if(!i){var r=pi(n,t,i);if(r)return r}}}function wi(n,t,i){var r=[],u;for(n=n?n.firstChild:null;n;n=n.nextSibling)n.nodeType==1&&(t&&n.tagName!=t||r.push(n),i||(u=wi(n,t,i),u.length&&(r=r.concat(u))));return r}function vt(n){for(var i,r,t=1;t<arguments.length;t++)if(i=arguments[t],i)for(r in i)n[r]=i[r];return n}function ur(n,t){var r,i;$JssorDebug$.$Assert(t);r={};for(i in n)n[i]!=t[i]&&(r[i]=n[i]);return r}function yt(n){return document.createElement(n)}function pt(n,t,i){if(i==undefined)return n.getAttribute(t);n.setAttribute(t,i)}function wt(n,t){return pt(n,t)||pt(n,"data-"+t)}function s(n,t){if(t==undefined)return n.className;n.className=t}function ft(n){var t={};return i(n,function(n){t[n]=n}),t}function bt(n,t){var r="";return i(t,function(t){r&&(r+=n);r+=t}),r}function o(n){return parseFloat(n)}function kt(n,t){return n.cloneNode(!t)}function dt(n){if(n){var t=n.$FlyDirection;t&1&&(n.x=n.$ScaleHorizontal||1);t&2&&(n.x=-n.$ScaleHorizontal||-1);t&4&&(n.y=n.$ScaleVertical||1);t&8&&(n.y=-n.$ScaleVertical||-1);n.$Rotate==!0&&(n.$Rotate=1);dt(n.$Brother)}}function fr(t){function f(){var n=h;u?n+="ds":e?n+="dn":o&&(n+="av");s(t,n)}function c(t){u?n.$CancelEvent(t):(nt.push(r),e=!0,f())}var r=this,h,e,o,u;r.$MouseUp=function(){e=!1;f()};r.$Activate=function(n){if(n!=undefined)o=n,f();else return o};r.$Enable=function(n){if(n!=undefined)u=!n,f();else return!u};t=n.$GetElement(t);nt||(n.$AddEventBrowserMouseUp(function(){var n=nt;nt=[];i(n,function(n){n.$MouseUp()})}),nt=[]);h=s(t);$Jssor$.$AddEvent(t,"mousedown",c)}function ot(){return w||(w=vt({$MarginTop:n.$CssMarginTop,$MarginLeft:n.$CssMarginLeft,$Clip:n.$SetStyleClip,$Transform:n.$SetStyleTransform},et)),w}function bi(){return ot(),w.$Transform=w.$Transform,w}var n=this,st=/\S+/g,gt=1,tt=2,tt=3,ni=4,ti=5,u=0,r=0,l=0,ii=0,b=0,ri=navigator.appName,er=navigator.appVersion,t=navigator.userAgent,f=document.documentElement,k,it,lt,at,ut,nt,et,w;n.$IsBrowserIE=h;n.$IsBrowserIeQuirks=ht;n.$IsBrowserFireFox=ki;n.$IsBrowserSafari=ui;n.$IsBrowserChrome=fi;n.$IsBrowserOpera=ei;n.$IsBrowserBadTransform=oi;n.$IsBrowserIe9Earlier=d;n.$BrowserVersion=function(){return r};n.$BrowserEngineVersion=function(){return l||r};n.$WebKitVersion=function(){return v(),b};n.$Delay=hi;n.$Inherit=function(n,t){return t.apply(n,[].slice.call(arguments,2)),vt({},n)};n.$Construct=li;n.$GetElement=function(t){return n.$IsString(t)&&(t=document.getElementById(t)),t};c=c;n.$EventSrc=function(n){return n=c(n),n.target||n.srcElement||document};n.$EventDst=function(n){return n=c(n),n.relatedTarget||n.toElement};n.$MousePosition=function(n){n=c(n);var t=document.body;return{x:n.pageX||n.clientX+(f.scrollLeft||t.scrollLeft||0)-(f.clientLeft||t.clientLeft||0)||0,y:n.pageY||n.clientY+(f.scrollTop||t.scrollTop||0)-(f.clientTop||t.clientTop||0)||0}};n.$PageScroll=function(){var n=document.body;return{x:(window.pageXOffset||f.scrollLeft||n.scrollLeft||0)-(f.clientLeft||n.clientLeft||0),y:(window.pageYOffset||f.scrollTop||n.scrollTop||0)-(f.clientTop||n.clientTop||0)}};n.$WindowSize=function(){var n=document.body;return{x:n.clientWidth||f.clientWidth,y:n.clientHeight||f.clientHeight}};n.$SetStyleTransform=function(t,i){oi()?hi(n.$CreateCallback(null,ai,t,i)):ai(t,i)};n.$SetStyleTransformOrigin=function(n,t){var i=a(n);i&&(n.style[i+"Origin"]=t)};n.$CssScale=function(n,t){var i;if(h()&&l<9||l<10&&ht())n.style.zoom=t==1?"":t;else if(i=a(n),i){var r="scale("+t+")",u=n.style[i],f=new RegExp(/[\s]*scale\(.*?\)/g),e=rt(u,[f],r);n.style[i]=e}};n.$EnableHWA=function(n){n.style[a(n)]&&n.style[a(n)]!="none"||(n.style[a(n)]="perspective(2000px)")};n.$DisableHWA=function(n){n.style[a(n)]="none"};lt=0;at=0;n.$WindowResizeFilter=function(n,t){return d()?function(){var f=!0,i=ht()?n.document.body:n.document.documentElement,r,u;i&&(r=i.offsetWidth-lt,u=i.offsetHeight-at,r||u?(lt+=r,at+=u):f=!1);f&&t()}:t};n.$MouseOverOutFilter=function(t,i){return $JssorDebug$.$Execute(function(){if(!i)throw new Error('Null reference, parameter "target".');}),function(r){r=c(r);var f=r.type,u=r.relatedTarget||(f=="mouseout"?r.toElement:r.fromElement);u&&(u===i||n.$IsChild(i,u))||t(r)}};n.$AddEvent=function(t,i,r,u){t=n.$GetElement(t);t.addEventListener?(i=="mousewheel"&&t.addEventListener("DOMMouseScroll",r,u),t.addEventListener(i,r,u)):t.attachEvent&&(t.attachEvent("on"+i,r),u&&t.setCapture&&t.setCapture());$JssorDebug$.$Execute(function(){t.addEventListener||t.attachEvent||$JssorDebug$.$Fail("Unable to attach event handler, no known technique.")})};n.$RemoveEvent=function(t,i,r,u){t=n.$GetElement(t);t.removeEventListener?(i=="mousewheel"&&t.removeEventListener("DOMMouseScroll",r,u),t.removeEventListener(i,r,u)):t.detachEvent&&(t.detachEvent("on"+i,r),u&&t.releaseCapture&&t.releaseCapture())};n.$FireEvent=function(n,t){var i,r;$JssorDebug$.$Execute(function(){document.createEvent||document.createEventObject||$JssorDebug$.$Fail("Unable to fire event, no known technique.");n.dispatchEvent||n.fireEvent||$JssorDebug$.$Fail("Unable to fire event, no known technique.")});document.createEvent?(i=document.createEvent("HTMLEvents"),i.initEvent(t,!1,!1),n.dispatchEvent(i)):(r="on"+t,i=document.createEventObject(),n.fireEvent(r,i))};n.$AddEventBrowserMouseUp=function(t,i){n.$AddEvent(d()?document:window,"mouseup",t,i)};n.$RemoveEventBrowserMouseUp=function(t,i){n.$RemoveEvent(d()?document:window,"mouseup",t,i)};n.$CancelEvent=function(n){n=c(n);n.preventDefault&&n.preventDefault();n.cancel=!0;n.returnValue=!1};n.$StopEvent=function(n){n=c(n);n.stopPropagation&&n.stopPropagation();n.cancelBubble=!0};n.$CreateCallback=function(n,t){var i=[].slice.call(arguments,2);return function(){var r=i.concat([].slice.call(arguments,0));return t.apply(n,r)}};n.$FreeElement=function(t){ut||(ut=n.$CreateDiv());t&&($Jssor$.$AppendChild(ut,t),$Jssor$.$ClearInnerHtml(ut))};n.$InnerText=function(t,i){if(i==undefined)return t.textContent||t.innerText;var r=document.createTextNode(i);n.$ClearInnerHtml(t);t.appendChild(r)};n.$InnerHtml=function(n,t){if(t==undefined)return n.innerHTML;n.innerHTML=t};n.$GetClientRect=function(n){var t=n.getBoundingClientRect();return{x:t.left,y:t.top,w:t.right-t.left,h:t.bottom-t.top}};n.$ClearInnerHtml=function(n){n.innerHTML=""};n.$EncodeHtml=function(t){var i=n.$CreateDiv();return n.$InnerText(i,t),n.$InnerHtml(i)};n.$DecodeHtml=function(t){var i=n.$CreateDiv();return n.$InnerHtml(i,t),n.$InnerText(i)};n.$SelectElement=function(n){var i,t;window.getSelection&&(i=window.getSelection());t=null;document.createRange?(t=document.createRange(),t.selectNode(n)):(t=document.body.createTextRange(),t.moveToElementText(n),t.select());i&&i.addRange(t)};n.$DeselectElements=function(){document.selection?document.selection.empty():window.getSelection&&window.getSelection().removeAllRanges()};n.$Children=function(n){for(var i=[],t=n.firstChild;t;t=t.nextSibling)t.nodeType==1&&i.push(t);return i};n.$FindChild=vi;n.$FindChildren=yi;n.$FindChildByTag=pi;n.$FindChildrenByTag=wi;n.$GetElementsByTag=function(n,t){return n.getElementsByTagName(t)};n.$Extend=vt;n.$Unextend=ur;n.$IsUndefined=function(n){return y(n)=="undefined"};n.$IsFunction=function(n){return y(n)=="function"};n.$IsArray=function(n){return y(n)=="array"};n.$IsString=function(n){return y(n)=="string"};n.$IsNumeric=function(n){return!isNaN(o(n))&&isFinite(n)};n.$IsWindow=function(n){return n&&n==n.window};n.$Type=y;n.$Each=i;n.$IsPlainObject=gi;n.$CreateElement=yt;n.$CreateDiv=function(){return yt("DIV",document)};n.$CreateSpan=function(){return yt("SPAN",document)};n.$EmptyFunction=function(){};n.$Attribute=pt;n.$AttributeEx=wt;n.$ClassName=s;n.$ToHash=ft;n.$Join=bt;n.$AddClass=function(n,t){var i=s(n)+" "+t;s(n,bt(" ",ft(i.match(st))))};n.$RemoveClass=function(t,i){s(t,bt(" ",n.$Unextend(ft(s(t).match(st)),ft(i.match(st)))))};n.$ParentNode=function(n){return n.parentNode};n.$HideElement=function(t){n.$CssDisplay(t,"none")};n.$HideElements=function(t){for(var i=0;i<t.length;i++)n.$HideElement(t[i])};n.$ShowElement=function(t,i){n.$CssDisplay(t,i?"none":"")};n.$ShowElements=function(t,i){for(var r=0;r<t.length;r++)n.$ShowElement(t[r],i)};n.$RemoveAttribute=function(n,t){n.removeAttribute(t)};n.$CanClearClip=function(){return h()&&r<10};n.$SetStyleClip=function(n,t){if(t)n.style.clip="rect("+Math.round(t.$Top)+"px "+Math.round(t.$Right)+"px "+Math.round(t.$Bottom)+"px "+Math.round(t.$Left)+"px)";else{var i=n.style.cssText,r=[new RegExp(/[\s]*clip: rect\(.*?\)[;]?/i),new RegExp(/[\s]*cliptop: .*?[;]?/i),new RegExp(/[\s]*clipright: .*?[;]?/i),new RegExp(/[\s]*clipbottom: .*?[;]?/i),new RegExp(/[\s]*clipleft: .*?[;]?/i)],u=rt(i,r,"");$Jssor$.$CssCssText(n,u)}};n.$GetNow=function(){return(new Date).getTime()};n.$AppendChild=function(n,t){n.appendChild(t)};n.$AppendChildren=function(t,r){i(r,function(i){n.$AppendChild(t,i)})};n.$InsertBefore=function(n,t,i){n.insertBefore(t,i)};n.$InsertAdjacentHtml=function(n,t,i){n.insertAdjacentHTML(t,i)};n.$RemoveChild=function(n,t){n.removeChild(t)};n.$RemoveChildren=function(t,r){i(r,function(i){n.$RemoveChild(t,i)})};n.$ClearChildren=function(t){n.$RemoveChildren(t,n.$Children(t))};n.$ParseInt=function(n,t){return parseInt(n,t||10)};n.$ParseFloat=o;n.$IsChild=function(n,t){for(var i=document.body;t&&n!=t&&i!=t;)try{t=t.parentNode}catch(r){return!1}return n==t};n.$CloneNode=kt;n.$TranslateTransitions=function(n){var t,i;if(n){for(t=0;t<n.length;t++)dt(n[t]);for(i in n)dt(n[i])}};n.$LoadImage=function(t,i){function f(t){n.$RemoveEvent(u,"load",f);n.$RemoveEvent(u,"abort",e);n.$RemoveEvent(u,"error",e);i&&i(u,t)}function e(){f(!0)}var u=new Image;ei()&&r<11.6||!t?f(!t):(n.$AddEvent(u,"load",f),n.$AddEvent(u,"abort",e),n.$AddEvent(u,"error",e),u.src=t)};n.$LoadImages=function(t,r,u){function e(n){f--;r&&n&&n.src==r.src&&(r=n);!f&&u&&u(r)}var f=t.length+1;i(t,function(t){n.$LoadImage(t.src,e)});e()};n.$BuildElement=function(n,t,i,r){var o,f,u,e,h;for(r&&(n=kt(n)),o=$Jssor$.$GetElementsByTag(n,t),f=o.length-1;f>-1;f--)u=o[f],e=kt(i),s(e,s(u)),$Jssor$.$CssCssText(e,u.style.cssText),h=$Jssor$.$ParentNode(u),$Jssor$.$InsertBefore(h,e,u),$Jssor$.$RemoveChild(h,u);return n};n.$Buttonize=function(n){return new fr(n)};n.$Css=g;n.$CssN=ct;n.$CssP=tr;n.$CssOverflow=e("overflow");n.$CssTop=e("top",2);n.$CssLeft=e("left",2);n.$CssWidth=e("width",2);n.$CssHeight=e("height",2);n.$CssMarginLeft=e("marginLeft",2);n.$CssMarginTop=e("marginTop",2);n.$CssPosition=e("position");n.$CssDisplay=e("display");n.$CssZIndex=e("zIndex",1);n.$CssFloat=function(n,t){return g(n,h()?"styleFloat":"cssFloat",t)};n.$CssOpacity=function(n,t,i){if(t!=undefined)rr(n,t,i);else return ir(n)};n.$CssCssText=function(n,t){if(t!=undefined)n.style.cssText=t;else return n.style.cssText};et={$Opacity:n.$CssOpacity,$Top:n.$CssTop,$Left:n.$CssLeft,$Width:n.$CssWidth,$Height:n.$CssHeight,$Position:n.$CssPosition,$Display:n.$CssDisplay,$ZIndex:n.$CssZIndex};n.$StyleSetter=ot;n.$StyleSetterEx=bi;n.$GetStyles=function(n,t){ot();var r={};return i(t,function(t,i){et[i]&&(r[i]=et[i](n))}),r};n.$SetStyles=function(n,t){var r=ot();i(t,function(t,i){r[i]&&r[i](n,t)})};n.$SetStylesEx=function(t,i){bi();n.$SetStyles(t,i)};$JssorMatrix$=new function(){function t(n,t){for(var o,i,f,r,s=n[0].length,h=n.length,c=t[0].length,e=[],u=0;u<h;u++)for(o=e[u]=[],i=0;i<c;i++){for(f=0,r=0;r<s;r++)f+=n[u][r]*t[r][i];o[i]=f}return e}var n=this;n.$ScaleX=function(t,i){return n.$ScaleXY(t,i,0)};n.$ScaleY=function(t,i){return n.$ScaleXY(t,0,i)};n.$ScaleXY=function(n,i,r){return t(n,[[i,0],[0,r]])};n.$TransformPoint=function(n,i){var r=t(n,[[i.x],[i.y]]);return p(r[0][0],r[1][0])}};n.$CreateMatrix=function(n,t,i){var r=Math.cos(n),u=Math.sin(n);return[[r*t,-u*i],[u*t,r*i]]};n.$GetMatrixOffset=function(n,t,i){var r=$JssorMatrix$.$TransformPoint(n,p(-t/2,-i/2)),u=$JssorMatrix$.$TransformPoint(n,p(t/2,-i/2)),f=$JssorMatrix$.$TransformPoint(n,p(t/2,i/2)),e=$JssorMatrix$.$TransformPoint(n,p(-t/2,i/2));return p(Math.min(r.x,u.x,f.x,e.x)+t/2,Math.min(r.y,u.y,f.y,e.y)+i/2)};n.$Transform=function(n,t,i,r,u,f,e){var o=t,s,a;if(n){o={};for(s in t){var d=f[s]||1,w=u[s]||[0,1],h=(i-w[0])/w[1];h=Math.min(Math.max(h,0),1);h=h*d;a=Math.floor(h);h!=a&&(h-=a);var g=r[s]||r.$Default,b=g(h),c,k=n[s],v=t[s];$Jssor$.$IsNumeric(v)?c=k+(v-k)*b:(c=$Jssor$.$Extend({$Offset:{}},n[s]),$Jssor$.$Each(v.$Offset,function(n,t){var i=n*b;c.$Offset[t]=i;c[t]+=i}));o[s]=c}n.$Zoom&&(o.$Transform={$Rotate:o.$Rotate||0,$Scale:o.$Zoom,$OriginalWidth:e.$OriginalWidth,$OriginalHeight:e.$OriginalHeight})}if(t.$Clip&&e.$Move){var l=o.$Clip.$Offset,y=(l.$Top||0)+(l.$Bottom||0),p=(l.$Left||0)+(l.$Right||0);o.$Left=(o.$Left||0)+p;o.$Top=(o.$Top||0)+y;o.$Clip.$Left-=p;o.$Clip.$Right-=p;o.$Clip.$Top-=y;o.$Clip.$Bottom-=y}return o.$Clip&&$Jssor$.$CanClearClip()&&!o.$Clip.$Top&&!o.$Clip.$Left&&o.$Clip.$Right==e.$OriginalWidth&&o.$Clip.$Bottom==e.$OriginalHeight&&(o.$Clip=null),o}},$JssorObject$=window.$JssorObject$=function(){function u(n,i){$JssorDebug$.$Execute(function(){if(n==undefined||n==null)throw new Error("param 'eventName' is null or empty.");if(typeof i!="function")throw"param 'handler' must be a function.";$Jssor$.$Each(t,function(t){if(t.$EventName==n&&t.$Handler===i)throw new Error("The handler listened to the event already, cannot listen to the same event of the same object with the same handler twice.");})});t.push({$EventName:n,$Handler:i})}function f(n,i){$JssorDebug$.$Execute(function(){if(n==undefined||n==null)throw new Error("param 'eventName' is null or empty.");if(typeof i!="function")throw"param 'handler' must be a function.";});$Jssor$.$Each(t,function(r,u){r.$EventName==n&&r.$Handler===i&&t.splice(u,1)})}function e(){t=[]}function r(){$Jssor$.$Each(i,function(n){$Jssor$.$RemoveEvent(n.$Obj,n.$EventName,n.$Handler)});i=[]}var n=this,t=[],i=[];n.$Listen=function(n,t,r,u){$JssorDebug$.$Execute(function(){if(!n)throw new Error("param 'obj' is null or empty.");if(t==undefined||t==null)throw new Error("param 'eventName' is null or empty.");if(typeof r!="function")throw"param 'handler' must be a function.";$Jssor$.$Each(i,function(i){if(i.$Obj===n&&i.$EventName==t&&i.$Handler===r)throw new Error("The handler listened to the event already, cannot listen to the same event of the same object with the same handler twice.");})});$Jssor$.$AddEvent(n,t,r,u);i.push({$Obj:n,$EventName:t,$Handler:r})};n.$Unlisten=function(n,t,r){$JssorDebug$.$Execute(function(){if(!n)throw new Error("param 'obj' is null or empty.");if(t==undefined||t==null)throw new Error("param 'eventName' is null or empty.");if(typeof r!="function")throw"param 'handler' must be a function.";});$Jssor$.$Each(i,function(u,f){u.$Obj===n&&u.$EventName==t&&u.$Handler===r&&($Jssor$.$RemoveEvent(n,t,r),i.splice(f,1))})};n.$UnlistenAll=r;n.$On=n.addEventListener=u;n.$Off=n.removeEventListener=f;n.$TriggerEvent=function(n){var i=[].slice.call(arguments,1);$Jssor$.$Each(t,function(t){try{t.$EventName==n&&t.$Handler.apply(window,i)}catch(r){$JssorDebug$.$Error(r.name+" while executing "+n+" handler: "+r.message,r)}})};n.$Destroy=function(){r();e();for(var t in n)delete n[t]};$JssorDebug$.$C_AbstractClass(n)};$JssorAnimator$=function(n,t,i,r,u,f){function ct(n){h+=n;o+=n;c+=n;k+=n;s+=n;b+=n;$Jssor$.$Each(d,function(t){t;t.$Shift(n)})}function yt(t,i){var r=t-h+n*i;return ct(r),o}function g(n,l){var a=n,v,p,k,g,nt;y&&(a>=o||a<=h)&&(a=((a-h)%y+y)%y+h);(!rt||w||l||s!=a)&&(v=Math.min(a,o),v=Math.max(v,h),(!rt||w||l||v!=b)&&(f&&(p=(v-c)/(t||1),i.$Reverse&&(p=1-p),k=$Jssor$.$Transform(u,f,p,et,st,ot,i),$Jssor$.$Each(k,function(n,t){ut[t]&&ut[t](r,n)})),e.$OnInnerOffsetChange(b-c,v-c)),b=v,$Jssor$.$Each(d,function(t,i){var r=n<s?d[d.length-i-1]:t;r.$GoToPosition(n,l)}),g=s,nt=n,s=a,rt=!0,e.$OnPositionChange(g,nt))}function ft(n,t){$JssorDebug$.$Execute(function(){t!==0&&t!==1&&$JssorDebug$.$Fail("Argument out of range, the value of 'combineMode' should be either 0 or 1.")});t&&n.$Locate(o,1);o=Math.max(o,n.$GetPosition_OuterEnd());d.push(n)}function lt(){if(l){var t=$Jssor$.$GetNow(),r=Math.min(t-tt,i.$IntervalMax),n=s+r*v;tt=t;n*v>=a*v&&(n=a);g(n);!w&&n*v>=a*v?at(it):p(lt)}}function nt(n,t,i){l||(l=!0,w=i,it=t,n=Math.max(n,h),n=Math.min(n,o),a=n,v=a<s?-1:1,e.$OnStart(),tt=$Jssor$.$GetNow(),p(lt))}function at(n){l&&(w=l=it=!1,e.$OnStop(),n&&n())}var p;n=n||0;var e=this,l,vt,a,v,w,tt=0,et,ot,st,it,s=0,b=0,rt,c=n,k=n+t,h,o,y,d=[],ut;p=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame;$Jssor$.$IsBrowserSafari()&&$Jssor$.$BrowserVersion()<7&&(p=null,$JssorDebug$.$Log("Custom animation frame for safari before 7."));p=p||function(n){$Jssor$.$Delay(n,i.$Interval)};e.$Play=function(n,t,i){nt(n?s+n:o,t,i)};e.$PlayToPosition=nt;e.$PlayToBegin=function(n,t){nt(h,n,t)};e.$PlayToEnd=function(n,t){nt(o,n,t)};e.$Stop=at;e.$Continue=function(n){nt(n)};e.$GetPosition=function(){return s};e.$GetPlayToPosition=function(){return a};e.$GetPosition_Display=function(){return b};e.$GoToPosition=g;e.$GoToBegin=function(){g(h,!0)};e.$GoToEnd=function(){g(o,!0)};e.$Move=function(n){g(s+n)};e.$CombineMode=function(){return vt};e.$GetDuration=function(){return t};e.$IsPlaying=function(){return l};e.$IsOnTheWay=function(){return s>c&&s<=k};e.$SetLoopLength=function(n){y=n};e.$Locate=yt;e.$Shift=ct;e.$Join=ft;e.$Combine=function(n){ft(n,0)};e.$Chain=function(n){ft(n,1)};e.$GetPosition_InnerBegin=function(){return c};e.$GetPosition_InnerEnd=function(){return k};e.$GetPosition_OuterBegin=function(){return h};e.$GetPosition_OuterEnd=function(){return o};e.$OnPositionChange=e.$OnStart=e.$OnStop=e.$OnInnerOffsetChange=$Jssor$.$EmptyFunction;e.$Version=$Jssor$.$GetNow();i=$Jssor$.$Extend({$Interval:16,$IntervalMax:50},i);$JssorDebug$.$Execute(function(){i=$Jssor$.$Extend({$LoopLength:undefined,$Setter:undefined,$Easing:undefined},i)});y=i.$LoopLength;ut=$Jssor$.$Extend({},$Jssor$.$StyleSetter(),i.$Setter);h=c=n;o=k=n+t;ot=i.$Round||{};st=i.$During||{};et=$Jssor$.$Extend({$Default:$Jssor$.$IsFunction(i.$Easing)&&i.$Easing||$JssorEasing$.$EaseSwing},i.$Easing)};