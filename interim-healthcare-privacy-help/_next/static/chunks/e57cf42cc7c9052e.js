(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,20228,e=>{"use strict";var t=e.i(71645);let n="landing-consent-accepted";function a(e,t,n){if(document.getElementById(e))return;let a=document.createElement("script");a.id=e,a.dataset.trackingPixel=t,a.text=n,document.head.appendChild(a)}function r({metaPixelId:e,tiktokPixelId:r,twitterPixelId:i,redditPixelId:o,googleAdsId:l,zeetoPixelUrl:s,linkedinPartnerId:d,adrollAdvId:c,adrollPixelId:u,rdStationHeadUrl:m,rdStationFooterUrl:f}){return(0,t.useEffect)(()=>{let t=()=>{e&&a(`meta-pixel-${e}`,"meta",`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
          n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
          document,'script','https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${e}');
          fbq('track', 'PageView');`),i&&a(`twitter-pixel-${i}`,"twitter",`!function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);},s.version="1.1",s.queue=[],u=t.createElement(n),u.async=!0,u.src="https://static.ads-twitter.com/uwt.js",a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,"script");twq("config","${i}");`),r&&a(`tiktok-pixel-${r}`,"tiktok",`!function (w, d, t) {w.TiktokAnalyticsObject = t;var ttq = (w[t] = w[t] || []);(ttq.methods = ["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"]),(ttq.setAndDefer = function (t, e) {t[e] = function () {t.push([e].concat(Array.prototype.slice.call(arguments, 0)));};});for (var i = 0; i < ttq.methods.length; i++) ttq.setAndDefer(ttq, ttq.methods[i]);(ttq.instance = function (t) {for (var e = ttq._i[t] || [], n = 0; n < ttq.methods.length; n++) ttq.setAndDefer(e, ttq.methods[n]);return e;}),(ttq.load = function (e, n) {var i = "https://analytics.tiktok.com/i18n/pixel/events.js";(ttq._i = ttq._i || {}),(ttq._i[e] = []),(ttq._i[e]._u = i),(ttq._t = ttq._t || {}),(ttq._t[e] = +new Date()),(ttq._o = ttq._o || {}),(ttq._o[e] = n || {});var o = document.createElement("script");(o.type = "text/javascript"),(o.async = !0),(o.src = i + "?sdkid=" + e + "&lib=" + t);var a = document.getElementsByTagName("script")[0];a.parentNode.insertBefore(o, a);});ttq.load("${r}");ttq.page();}(window, document, "ttq");`),o&&a(`reddit-pixel-${o}`,"reddit",`!function(w,d){if(!w.rdt){var p=w.rdt=function(){p.sendEvent?p.sendEvent.apply(p,arguments):p.callQueue.push(arguments)};p.callQueue=[];var t=d.createElement("script");t.src="https://www.redditstatic.com/ads/pixel.js?pixel_id=${o}";t.async=!0;var s=d.getElementsByTagName("script")[0];s.parentNode.insertBefore(t,s)}}(window,document);rdt("init","${o}");rdt("track","PageVisit");`),l&&(!function(e,t,n){if(document.getElementById(e))return;let a=document.createElement("script");a.id=e,a.dataset.trackingPixel=t,a.async=!0,a.src=n,document.head.appendChild(a)}(`google-ads-loader-${l}`,"google-ads",`https://www.googletagmanager.com/gtag/js?id=${l}`),a(`google-ads-config-${l}`,"google-ads",`window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag("js", new Date());gtag("config", "${l}");`)),s&&function(e,t,n){if(document.getElementById(e))return;let a=document.createElement("iframe");a.id=e,a.dataset.trackingPixel=t,a.src=n,a.style.display="none",document.body.appendChild(a)}(`zeeto-pixel-${btoa(s).replace(/[=+/]/g,"")}`,"zeeto",s),d&&(a(`linkedin-pixel-partner-${d}`,"linkedin",`_linkedin_partner_id = "${d}"; window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || []; window._linkedin_data_partner_ids.push(_linkedin_partner_id);`),a(`linkedin-pixel-loader-${d}`,"linkedin",'(function(l) { if (!l) { window.lintrk = function(a,b) { window.lintrk.q.push([a,b]); }; window.lintrk.q = []; } var s = document.getElementsByTagName("script")[0]; var b = document.createElement("script"); b.type = "text/javascript"; b.async = true; b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js"; s.parentNode.insertBefore(b, s); })(window.lintrk);')),c&&u&&a(`adroll-pixel-${u}`,"adroll",`adroll_adv_id = "${c}"; adroll_pix_id = "${u}"; adroll_version = "2.0"; (function (w, d, e, o, a) { w.__adroll_loaded = true; w.adroll = w.adroll || []; w.adroll.f = ["setProperties", "identify", "track", "identify_email"]; var roundtripUrl = "https://s.adroll.com/j/" + adroll_adv_id + "/roundtrip.js"; for (a = 0; a < w.adroll.f.length; a++) { w.adroll[w.adroll.f[a]] = w.adroll[w.adroll.f[a]] || (function (n) { return function () { w.adroll.push([n, arguments]); }; })(w.adroll.f[a]); } e = d.createElement("script"); o = d.getElementsByTagName("script")[0]; e.async = 1; e.src = roundtripUrl; o.parentNode.insertBefore(e, o); })(window, document); adroll.track("pageView");`),m&&a("rd-station-head-pixel","rd-station",`(function (w, d, s, u, dbg) { var js, fjs = d.getElementsByTagName(s)[0]; window.rdcndbg = dbg; js = d.createElement(s); js.async = true; js.src = u; fjs.parentNode.insertBefore(js, fjs); })(window, document, "script", "${m}", false);`),f&&a("rd-station-footer-pixel","rd-station",`(function (w, d, s, u, dbg) { var js, fjs = d.getElementsByTagName(s)[0]; window.rdcndbg = dbg; js = d.createElement(s); js.async = true; js.src = u; fjs.parentNode.insertBefore(js, fjs); })(window, document, "script", "${f}", false);`)};if(window.__landingConsentAccepted)return void t();let g=()=>{t()};return window.addEventListener(n,g,{once:!0}),()=>{window.removeEventListener(n,g)}},[l,c,u,d,e,f,m,r,o,i,s]),null}e.s(["default",()=>r])},88143,(e,t,n)=>{"use strict";function a({widthInt:e,heightInt:t,blurWidth:n,blurHeight:a,blurDataURL:r,objectFit:i}){let o=n?40*n:e,l=a?40*a:t,s=o&&l?`viewBox='0 0 ${o} ${l}'`:"";return`%3Csvg xmlns='http://www.w3.org/2000/svg' ${s}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${s?"none":"contain"===i?"xMidYMid":"cover"===i?"xMidYMid slice":"none"}' style='filter: url(%23b);' href='${r}'/%3E%3C/svg%3E`}Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"getImageBlurSvg",{enumerable:!0,get:function(){return a}})},87690,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a={VALID_LOADERS:function(){return i},imageConfigDefault:function(){return o}};for(var r in a)Object.defineProperty(n,r,{enumerable:!0,get:a[r]});let i=["default","imgix","cloudinary","akamai","custom"],o={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:14400,formats:["image/webp"],maximumRedirects:3,maximumResponseBody:5e7,dangerouslyAllowLocalIP:!1,dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],qualities:[75],unoptimized:!1}},8927,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"getImgProps",{enumerable:!0,get:function(){return d}}),e.r(33525);let a=e.r(43369),r=e.r(88143),i=e.r(87690),o=["-moz-initial","fill","none","scale-down",void 0];function l(e){return void 0!==e.default}function s(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function d({src:e,sizes:t,unoptimized:n=!1,priority:d=!1,preload:c=!1,loading:u,className:m,quality:f,width:g,height:p,fill:_=!1,style:h,overrideSrc:w,onLoad:y,onLoadingComplete:b,placeholder:x="empty",blurDataURL:v,fetchPriority:j,decoding:k="async",layout:C,objectFit:P,objectPosition:S,lazyBoundary:I,lazyRoot:E,...q},N){var A;let T,L,M,{imgConf:R,showAltText:O,blurComplete:B,defaultLoader:F}=N,$=R||i.imageConfigDefault;if("allSizes"in $)T=$;else{let e=[...$.deviceSizes,...$.imageSizes].sort((e,t)=>e-t),t=$.deviceSizes.sort((e,t)=>e-t),n=$.qualities?.sort((e,t)=>e-t);T={...$,allSizes:e,deviceSizes:t,qualities:n}}if(void 0===F)throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"),"__NEXT_ERROR_CODE",{value:"E163",enumerable:!1,configurable:!0});let G=q.loader||F;delete q.loader,delete q.srcSet;let H="__next_img_default"in G;if(H){if("custom"===T.loader)throw Object.defineProperty(Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`),"__NEXT_ERROR_CODE",{value:"E252",enumerable:!1,configurable:!0})}else{let e=G;G=t=>{let{config:n,...a}=t;return e(a)}}if(C){"fill"===C&&(_=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[C];e&&(h={...h,...e});let n={responsive:"100vw",fill:"100vw"}[C];n&&!t&&(t=n)}let D="",U=s(g),W=s(p);if((A=e)&&"object"==typeof A&&(l(A)||void 0!==A.src)){let t=l(e)?e.default:e;if(!t.src)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(t)}`),"__NEXT_ERROR_CODE",{value:"E460",enumerable:!1,configurable:!0});if(!t.height||!t.width)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(t)}`),"__NEXT_ERROR_CODE",{value:"E48",enumerable:!1,configurable:!0});if(L=t.blurWidth,M=t.blurHeight,v=v||t.blurDataURL,D=t.src,!_)if(U||W){if(U&&!W){let e=U/t.width;W=Math.round(t.height*e)}else if(!U&&W){let e=W/t.height;U=Math.round(t.width*e)}}else U=t.width,W=t.height}let z=!d&&!c&&("lazy"===u||void 0===u);(!(e="string"==typeof e?e:D)||e.startsWith("data:")||e.startsWith("blob:"))&&(n=!0,z=!1),T.unoptimized&&(n=!0),H&&!T.dangerouslyAllowSVG&&e.split("?",1)[0].endsWith(".svg")&&(n=!0);let Q=s(f),K=Object.assign(_?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:P,objectPosition:S}:{},O?{}:{color:"transparent"},h),V=B||"empty"===x?null:"blur"===x?`url("data:image/svg+xml;charset=utf-8,${(0,r.getImageBlurSvg)({widthInt:U,heightInt:W,blurWidth:L,blurHeight:M,blurDataURL:v||"",objectFit:K.objectFit})}")`:`url("${x}")`,X=o.includes(K.objectFit)?"fill"===K.objectFit?"100% 100%":"cover":K.objectFit,Z=V?{backgroundSize:X,backgroundPosition:K.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:V}:{},J=function({config:e,src:t,unoptimized:n,width:r,quality:i,sizes:o,loader:l}){if(n){let e=(0,a.getDeploymentId)();if(t.startsWith("/")&&!t.startsWith("//")&&e){let n=t.includes("?")?"&":"?";t=`${t}${n}dpl=${e}`}return{src:t,srcSet:void 0,sizes:void 0}}let{widths:s,kind:d}=function({deviceSizes:e,allSizes:t},n,a){if(a){let n=/(^|\s)(1?\d?\d)vw/g,r=[];for(let e;e=n.exec(a);)r.push(parseInt(e[2]));if(r.length){let n=.01*Math.min(...r);return{widths:t.filter(t=>t>=e[0]*n),kind:"w"}}return{widths:t,kind:"w"}}return"number"!=typeof n?{widths:e,kind:"w"}:{widths:[...new Set([n,2*n].map(e=>t.find(t=>t>=e)||t[t.length-1]))],kind:"x"}}(e,r,o),c=s.length-1;return{sizes:o||"w"!==d?o:"100vw",srcSet:s.map((n,a)=>`${l({config:e,src:t,quality:i,width:n})} ${"w"===d?n:a+1}${d}`).join(", "),src:l({config:e,src:t,quality:i,width:s[c]})}}({config:T,src:e,unoptimized:n,width:U,quality:Q,sizes:t,loader:G}),Y=z?"lazy":u;return{props:{...q,loading:Y,fetchPriority:j,width:U,height:W,decoding:k,className:m,style:{...K,...Z},sizes:J.sizes,srcSet:J.srcSet,src:w||J.src},meta:{unoptimized:n,preload:c||d,placeholder:x,fill:_}}}},98879,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return l}});let a=e.r(71645),r="u"<typeof window,i=r?()=>{}:a.useLayoutEffect,o=r?()=>{}:a.useEffect;function l(e){let{headManager:t,reduceComponentsToState:n}=e;function l(){if(t&&t.mountedInstances){let e=a.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(n(e))}}return r&&(t?.mountedInstances?.add(e.children),l()),i(()=>(t?.mountedInstances?.add(e.children),()=>{t?.mountedInstances?.delete(e.children)})),i(()=>(t&&(t._pendingUpdate=l),()=>{t&&(t._pendingUpdate=l)})),o(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},25633,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a={default:function(){return p},defaultHead:function(){return u}};for(var r in a)Object.defineProperty(n,r,{enumerable:!0,get:a[r]});let i=e.r(55682),o=e.r(90809),l=e.r(43476),s=o._(e.r(71645)),d=i._(e.r(98879)),c=e.r(42732);function u(){return[(0,l.jsx)("meta",{charSet:"utf-8"},"charset"),(0,l.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")]}function m(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===s.default.Fragment?e.concat(s.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}e.r(33525);let f=["name","httpEquiv","charSet","itemProp"];function g(e){let t,n,a,r;return e.reduce(m,[]).reverse().concat(u().reverse()).filter((t=new Set,n=new Set,a=new Set,r={},e=>{let i=!0,o=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){o=!0;let n=e.key.slice(e.key.indexOf("$")+1);t.has(n)?i=!1:t.add(n)}switch(e.type){case"title":case"base":n.has(e.type)?i=!1:n.add(e.type);break;case"meta":for(let t=0,n=f.length;t<n;t++){let n=f[t];if(e.props.hasOwnProperty(n))if("charSet"===n)a.has(n)?i=!1:a.add(n);else{let t=e.props[n],a=r[n]||new Set;("name"!==n||!o)&&a.has(t)?i=!1:(a.add(t),r[n]=a)}}}return i})).reverse().map((e,t)=>{let n=e.key||t;return s.default.cloneElement(e,{key:n})})}let p=function({children:e}){let t=(0,s.useContext)(c.HeadManagerContext);return(0,l.jsx)(d.default,{reduceComponentsToState:g,headManager:t,children:e})};("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},18556,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"ImageConfigContext",{enumerable:!0,get:function(){return i}});let a=e.r(55682)._(e.r(71645)),r=e.r(87690),i=a.default.createContext(r.imageConfigDefault)},65856,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"RouterContext",{enumerable:!0,get:function(){return a}});let a=e.r(55682)._(e.r(71645)).default.createContext(null)},70965,(e,t,n)=>{"use strict";function a(e,t){let n=e||75;return t?.qualities?.length?t.qualities.reduce((e,t)=>Math.abs(t-n)<Math.abs(e-n)?t:e,0):n}Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"findClosestQuality",{enumerable:!0,get:function(){return a}})},1948,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return o}});let a=e.r(70965),r=e.r(43369);function i({config:e,src:t,width:n,quality:i}){if(t.startsWith("/")&&t.includes("?")&&e.localPatterns?.length===1&&"**"===e.localPatterns[0].pathname&&""===e.localPatterns[0].search)throw Object.defineProperty(Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`),"__NEXT_ERROR_CODE",{value:"E871",enumerable:!1,configurable:!0});let o=(0,a.findClosestQuality)(i,e),l=(0,r.getDeploymentId)();return`${e.path}?url=${encodeURIComponent(t)}&w=${n}&q=${o}${t.startsWith("/")&&l?`&dpl=${l}`:""}`}i.__next_img_default=!0;let o=i},18581,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"useMergedRef",{enumerable:!0,get:function(){return r}});let a=e.r(71645);function r(e,t){let n=(0,a.useRef)(null),r=(0,a.useRef)(null);return(0,a.useCallback)(a=>{if(null===a){let e=n.current;e&&(n.current=null,e());let t=r.current;t&&(r.current=null,t())}else e&&(n.current=i(e,a)),t&&(r.current=i(t,a))},[e,t])}function i(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let n=e(t);return"function"==typeof n?n:()=>e(null)}}("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},5500,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"Image",{enumerable:!0,get:function(){return b}});let a=e.r(55682),r=e.r(90809),i=e.r(43476),o=r._(e.r(71645)),l=a._(e.r(74080)),s=a._(e.r(25633)),d=e.r(8927),c=e.r(87690),u=e.r(18556);e.r(33525);let m=e.r(65856),f=a._(e.r(1948)),g=e.r(18581),p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function _(e,t,n,a,r,i,o){let l=e?.src;e&&e["data-loaded-src"]!==l&&(e["data-loaded-src"]=l,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&r(!0),n?.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let a=!1,r=!1;n.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>a,isPropagationStopped:()=>r,persist:()=>{},preventDefault:()=>{a=!0,t.preventDefault()},stopPropagation:()=>{r=!0,t.stopPropagation()}})}a?.current&&a.current(e)}}))}function h(e){return o.use?{fetchPriority:e}:{fetchpriority:e}}"u"<typeof window&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);let w=(0,o.forwardRef)(({src:e,srcSet:t,sizes:n,height:a,width:r,decoding:l,className:s,style:d,fetchPriority:c,placeholder:u,loading:m,unoptimized:f,fill:p,onLoadRef:w,onLoadingCompleteRef:y,setBlurComplete:b,setShowAltText:x,sizesInput:v,onLoad:j,onError:k,...C},P)=>{let S=(0,o.useCallback)(e=>{e&&(k&&(e.src=e.src),e.complete&&_(e,u,w,y,b,f,v))},[e,u,w,y,b,k,f,v]),I=(0,g.useMergedRef)(P,S);return(0,i.jsx)("img",{...C,...h(c),loading:m,width:r,height:a,decoding:l,"data-nimg":p?"fill":"1",className:s,style:d,sizes:n,srcSet:t,src:e,ref:I,onLoad:e=>{_(e.currentTarget,u,w,y,b,f,v)},onError:e=>{x(!0),"empty"!==u&&b(!0),k&&k(e)}})});function y({isAppRouter:e,imgAttributes:t}){let n={as:"image",imageSrcSet:t.srcSet,imageSizes:t.sizes,crossOrigin:t.crossOrigin,referrerPolicy:t.referrerPolicy,...h(t.fetchPriority)};return e&&l.default.preload?(l.default.preload(t.src,n),null):(0,i.jsx)(s.default,{children:(0,i.jsx)("link",{rel:"preload",href:t.srcSet?void 0:t.src,...n},"__nimg-"+t.src+t.srcSet+t.sizes)})}let b=(0,o.forwardRef)((e,t)=>{let n=(0,o.useContext)(m.RouterContext),a=(0,o.useContext)(u.ImageConfigContext),r=(0,o.useMemo)(()=>{let e=p||a||c.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),n=e.deviceSizes.sort((e,t)=>e-t),r=e.qualities?.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:n,qualities:r,localPatterns:"u"<typeof window?a?.localPatterns:e.localPatterns}},[a]),{onLoad:l,onLoadingComplete:s}=e,g=(0,o.useRef)(l);(0,o.useEffect)(()=>{g.current=l},[l]);let _=(0,o.useRef)(s);(0,o.useEffect)(()=>{_.current=s},[s]);let[h,b]=(0,o.useState)(!1),[x,v]=(0,o.useState)(!1),{props:j,meta:k}=(0,d.getImgProps)(e,{defaultLoader:f.default,imgConf:r,blurComplete:h,showAltText:x});return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(w,{...j,unoptimized:k.unoptimized,placeholder:k.placeholder,fill:k.fill,onLoadRef:g,onLoadingCompleteRef:_,setBlurComplete:b,setShowAltText:v,sizesInput:e.sizes,ref:t}),k.preload?(0,i.jsx)(y,{isAppRouter:!n,imgAttributes:j}):null]})});("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},94909,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a={default:function(){return c},getImageProps:function(){return d}};for(var r in a)Object.defineProperty(n,r,{enumerable:!0,get:a[r]});let i=e.r(55682),o=e.r(8927),l=e.r(5500),s=i._(e.r(1948));function d(e){let{props:t}=(0,o.getImgProps)(e,{defaultLoader:s.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}}let c=l.Image},57688,(e,t,n)=>{t.exports=e.r(94909)},90697,e=>{e.v({card:"CardBoxList-module__E-wRXq__card",cardNoBottomMargin:"CardBoxList-module__E-wRXq__cardNoBottomMargin",icon:"CardBoxList-module__E-wRXq__icon",item:"CardBoxList-module__E-wRXq__item",list:"CardBoxList-module__E-wRXq__list",title:"CardBoxList-module__E-wRXq__title",trailingCopy:"CardBoxList-module__E-wRXq__trailingCopy",trailingLine:"CardBoxList-module__E-wRXq__trailingLine",trailingLineStrong:"CardBoxList-module__E-wRXq__trailingLineStrong"})},31639,e=>{e.v({backdrop:"ConsentGateModal-module__Qgkwhq__backdrop",checkbox:"ConsentGateModal-module__Qgkwhq__checkbox",checkboxRow:"ConsentGateModal-module__Qgkwhq__checkboxRow",checkboxText:"ConsentGateModal-module__Qgkwhq__checkboxText",copy:"ConsentGateModal-module__Qgkwhq__copy",root:"ConsentGateModal-module__Qgkwhq__root",scrollWrapper:"ConsentGateModal-module__Qgkwhq__scrollWrapper",title:"ConsentGateModal-module__Qgkwhq__title"})},25589,e=>{e.v({section:"ContentSection-module__f-JXaW__section"})},20468,e=>{e.v({backdrop:"DrawerForm-module__6dmgVW__backdrop",closeButton:"DrawerForm-module__6dmgVW__closeButton",inlineIframe:"DrawerForm-module__6dmgVW__inlineIframe",inlineRoot:"DrawerForm-module__6dmgVW__inlineRoot",modalIframe:"DrawerForm-module__6dmgVW__modalIframe",root:"DrawerForm-module__6dmgVW__root",scrollWrapper:"DrawerForm-module__6dmgVW__scrollWrapper"})},43410,e=>{e.v({answerInner:"FAQ-module__8ZM7Ka__answerInner",answerText:"FAQ-module__8ZM7Ka__answerText",answerWrap:"FAQ-module__8ZM7Ka__answerWrap",answerWrapOpen:"FAQ-module__8ZM7Ka__answerWrapOpen",container:"FAQ-module__8ZM7Ka__container",contentRow:"FAQ-module__8ZM7Ka__contentRow",faqColumn:"FAQ-module__8ZM7Ka__faqColumn",faqItem:"FAQ-module__8ZM7Ka__faqItem",heading:"FAQ-module__8ZM7Ka__heading",icon:"FAQ-module__8ZM7Ka__icon",questionButton:"FAQ-module__8ZM7Ka__questionButton",questionText:"FAQ-module__8ZM7Ka__questionText",section:"FAQ-module__8ZM7Ka__section",topRow:"FAQ-module__8ZM7Ka__topRow",topicActive:"FAQ-module__8ZM7Ka__topicActive",topicColumn:"FAQ-module__8ZM7Ka__topicColumn",topicLabel:"FAQ-module__8ZM7Ka__topicLabel",topicList:"FAQ-module__8ZM7Ka__topicList",topicListItem:"FAQ-module__8ZM7Ka__topicListItem"})},32684,e=>{e.v({container:"FooterLegal-module__jDtFnq__container",copy:"FooterLegal-module__jDtFnq__copy",footer:"FooterLegal-module__jDtFnq__footer",legalBar:"FooterLegal-module__jDtFnq__legalBar",linkRow:"FooterLegal-module__jDtFnq__linkRow"})},51001,e=>{e.v({backgroundImage:"Hero-module__PgAKtG__backgroundImage",bodyCopy:"Hero-module__PgAKtG__bodyCopy",button:"Hero-module__PgAKtG__button",content:"Hero-module__PgAKtG__content",headerList:"Hero-module__PgAKtG__headerList",hero:"Hero-module__PgAKtG__hero",imagePanel:"Hero-module__PgAKtG__imagePanel",overlay:"Hero-module__PgAKtG__overlay",title:"Hero-module__PgAKtG__title"})},99236,e=>{e.v({button:"LandingHeader-module__PljEaa__button",header:"LandingHeader-module__PljEaa__header",inner:"LandingHeader-module__PljEaa__inner",logo:"LandingHeader-module__PljEaa__logo",logoText:"LandingHeader-module__PljEaa__logoText"})},48004,e=>{e.v({button:"RememberPartCTA-module__FMVI5a__button",containerXlg:"RememberPartCTA-module__FMVI5a__containerXlg",content:"RememberPartCTA-module__FMVI5a__content",panel:"RememberPartCTA-module__FMVI5a__panel",section:"RememberPartCTA-module__FMVI5a__section"})},24009,e=>{e.v({button:"StickySidebar-module__3Jv3DW__button",card:"StickySidebar-module__3Jv3DW__card",copy:"StickySidebar-module__3Jv3DW__copy",heading:"StickySidebar-module__3Jv3DW__heading",sidebar:"StickySidebar-module__3Jv3DW__sidebar"})},55374,e=>{e.v({centeredCore:"page-module__W0d5yG__centeredCore",containerXlg:"page-module__W0d5yG__containerXlg",formRail:"page-module__W0d5yG__formRail",imageAsset:"page-module__W0d5yG__imageAsset",imagePlaceholder:"page-module__W0d5yG__imagePlaceholder",layoutShell:"page-module__W0d5yG__layoutShell",main:"page-module__W0d5yG__main",mainColumn:"page-module__W0d5yG__mainColumn",noBottomSection:"page-module__W0d5yG__noBottomSection",page:"page-module__W0d5yG__page",postHeroContent:"page-module__W0d5yG__postHeroContent",secondHeaderHeading:"page-module__W0d5yG__secondHeaderHeading",secondSubheaderLastStrong:"page-module__W0d5yG__secondSubheaderLastStrong",sidebarDock:"page-module__W0d5yG__sidebarDock",singleImageEndSection:"page-module__W0d5yG__singleImageEndSection"})},61143,e=>{"use strict";var t=e.i(43476),n=e.i(71645),a=e.i(57688),r=e.i(90697);function i({title:e,items:n,trailingText:a=[],removeBottomMargin:i=!1}){let o=`${r.default.card} ${i?r.default.cardNoBottomMargin:""}`.trim();return(0,t.jsxs)("div",{className:o,children:[(0,t.jsx)("p",{className:r.default.title,children:e}),(0,t.jsx)("ul",{className:r.default.list,children:n.map((e,n)=>(0,t.jsxs)("li",{className:r.default.item,children:[(0,t.jsx)("span",{className:r.default.icon,"aria-hidden":"true",children:"✓"}),(0,t.jsx)("span",{children:e})]},`${e}-${n}`))}),a.length>0?(0,t.jsx)("div",{className:r.default.trailingCopy,children:a.map((e,n)=>(0,t.jsx)("p",{className:`${r.default.trailingLine} ${n===a.length-1?r.default.trailingLineStrong:""}`.trim(),children:e},`${e}-${n}`))}):null]})}var o=e.i(31639);function l(e,t,n){let a=e.find(e=>e.label.trim().toLowerCase()===t.toLowerCase()),r=a?.href?.trim();if(r)return r;let i=e.find(e=>e.href.trim().includes("bursor.com/privacy-terms"));if(i?.href)return i.href.trim();let o=e.find(e=>{let t=e.label.trim().toLowerCase();return t.includes("privacy policy")&&t.includes("terms")&&e.href.trim().length>0});return o?.href?o.href.trim():n}function s({links:e,modalId:n="claim-consent-gate-modal",title:a="Terms Acknowledgement",copy:r="By checking this box, you agree to our TERMS AND CONDITIONS and PRIVACY POLICY and DISCLOSURE. Your access and continued use of the website thereafter is subject to these same terms, privacy policy, and disclosure."}){let i,s,d,c,u,m,f,g,p=l(e,"Terms and Conditions","https://www.classactionagency.co/terms-and-conditions"),_=l(e,"Privacy Policy","https://www.classactionagency.co/privacy");return(0,t.jsx)("div",{id:n,className:o.default.backdrop,"data-consent-gate-modal":!0,hidden:!0,children:(0,t.jsx)("div",{className:o.default.scrollWrapper,children:(0,t.jsxs)("section",{className:o.default.root,role:"dialog","aria-modal":"true","aria-labelledby":`${n}-title`,children:[(0,t.jsx)("h2",{id:`${n}-title`,className:o.default.title,children:(i="Terms of Use",s="Privacy Policy",d=a.indexOf(i),c=a.indexOf(s),-1===d||-1===c||c<d?a:(0,t.jsxs)(t.Fragment,{children:[a.slice(0,d),(0,t.jsx)("a",{href:p,target:"_blank",rel:"nofollow noopener noreferrer",children:i}),a.slice(d+i.length,c),(0,t.jsx)("a",{href:_,target:"_blank",rel:"nofollow noopener noreferrer",children:s}),a.slice(c+s.length)]}))}),(0,t.jsx)("p",{className:o.default.copy,children:(u="TERMS AND CONDITIONS",m="PRIVACY POLICY",f=r.indexOf(u),g=r.indexOf(m),-1===f||-1===g||g<f?r:(0,t.jsxs)(t.Fragment,{children:[r.slice(0,f),(0,t.jsx)("a",{href:p,target:"_blank",rel:"nofollow noopener noreferrer",children:u}),r.slice(f+u.length,g),(0,t.jsx)("a",{href:_,target:"_blank",rel:"nofollow noopener noreferrer",children:m}),r.slice(g+m.length)]}))}),(0,t.jsxs)("label",{className:o.default.checkboxRow,htmlFor:`${n}-accept`,children:[(0,t.jsx)("input",{id:`${n}-accept`,type:"checkbox",className:o.default.checkbox,"data-consent-gate-checkbox":!0}),(0,t.jsx)("span",{className:o.default.checkboxText,children:"Accept"})]})]})})})}var d=e.i(25589);function c({children:e,className:n}){return(0,t.jsx)("section",{className:`${d.default.section} ${n??""}`.trim(),children:e})}var u=e.i(20468);function m({formUrl:e,inline:a,className:r,modalId:i="claim-form-modal"}){let o=(0,n.useMemo)(()=>{try{let t=new URL(e);if(!/(^|\.)jotform\.com$/i.test(t.hostname)||!t.pathname.includes("/jsform/"))return e;return t.pathname=t.pathname.replace("/jsform/","/"),t.searchParams.set("jsForm","true"),t.toString()}catch{return e}},[e]);return a?(0,t.jsx)("section",{id:"claim-form",className:`${u.default.inlineRoot} ${r??""}`.trim(),"aria-label":"Claim form",children:(0,t.jsx)("iframe",{src:o,title:"Claim form",className:u.default.inlineIframe,"data-inline-form-frame":!0})}):(0,t.jsx)("div",{id:i,className:u.default.backdrop,"data-form-modal":!0,hidden:!0,children:(0,t.jsx)("div",{className:u.default.scrollWrapper,"data-form-modal-overlay":!0,children:(0,t.jsxs)("section",{className:u.default.root,role:"dialog","aria-modal":"true","aria-label":"Claim form",children:[(0,t.jsx)("button",{type:"button",className:u.default.closeButton,"data-form-modal-close":!0,"aria-label":"Close",children:"×"}),(0,t.jsx)("iframe",{src:o,title:"Claim form",className:u.default.modalIframe,"data-form-modal-frame":!0})]})})})}var f=e.i(43410);function g({items:e}){let[a,r]=(0,n.useState)([]);return(0,t.jsx)("section",{className:f.default.section,id:"faq-section",children:(0,t.jsxs)("div",{className:f.default.container,children:[(0,t.jsx)("div",{className:f.default.topRow,children:(0,t.jsx)("h3",{className:f.default.heading,children:"Frequently asked questions"})}),(0,t.jsxs)("div",{className:f.default.contentRow,children:[(0,t.jsxs)("div",{className:f.default.topicColumn,children:[(0,t.jsx)("span",{className:f.default.topicLabel,children:"TOPICS"}),(0,t.jsx)("ul",{className:f.default.topicList,children:(0,t.jsx)("li",{className:f.default.topicListItem,children:(0,t.jsx)("span",{className:f.default.topicActive,children:"General FAQ"})})})]}),(0,t.jsx)("div",{className:f.default.faqColumn,children:e.map((e,n)=>{let i=a.includes(n),o=`faq-trigger-${n}`,l=`faq-panel-${n}`;return(0,t.jsxs)("article",{className:f.default.faqItem,children:[(0,t.jsxs)("button",{type:"button",id:o,className:f.default.questionButton,"aria-expanded":i,"aria-controls":l,onClick:()=>{r(e=>e.includes(n)?e.filter(e=>e!==n):[...e,n])},children:[(0,t.jsx)("span",{className:f.default.questionText,children:e.question}),(0,t.jsx)("span",{className:f.default.icon,"aria-hidden":"true",children:i?(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",width:"16",height:"16",strokeWidth:"2",stroke:"currentColor",focusable:"false",children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 12h-15"})}):(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",width:"16",height:"16",strokeWidth:"2",stroke:"currentColor",focusable:"false",children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 4.5v15m7.5-7.5h-15"})})})]}),(0,t.jsx)("div",{id:l,role:"region","aria-labelledby":o,className:`${f.default.answerWrap} ${i?f.default.answerWrapOpen:""}`.trim(),children:(0,t.jsx)("div",{className:f.default.answerInner,children:(0,t.jsx)("p",{className:f.default.answerText,children:e.answer})})})]},o)})})]})]})})}var p=e.i(32684);function _({copy:e,links:n}){return(0,t.jsx)("footer",{className:p.default.footer,children:(0,t.jsx)("div",{className:p.default.legalBar,children:(0,t.jsxs)("div",{className:p.default.container,children:[(0,t.jsx)("nav",{className:p.default.linkRow,"aria-label":"Legal links",children:n.map(e=>(0,t.jsx)("a",{href:e.href,target:"_blank",rel:"nofollow noopener noreferrer",children:e.label},`${e.label}-${e.href}`))}),e.map(e=>(0,t.jsx)("p",{className:p.default.copy,children:e},e))]})})})}var h=e.i(51001);function w({title:e,listItems:n=[],bodyCopy:r,imageSrc:i,ctaLabel:o,modalId:l="claim-form-modal",onCtaClick:s}){return(0,t.jsx)("section",{className:h.default.hero,children:(0,t.jsxs)("div",{className:h.default.imagePanel,children:[(0,t.jsx)(a.default,{src:i,alt:e,fill:!0,priority:!0,sizes:"(max-width: 991px) 100vw, 520px",className:h.default.backgroundImage}),(0,t.jsx)("div",{className:h.default.overlay,"aria-hidden":"true"}),(0,t.jsxs)("div",{className:h.default.content,children:[(0,t.jsx)("h1",{className:h.default.title,children:e}),n.length>0?(0,t.jsx)("ul",{className:h.default.headerList,children:n.map(e=>(0,t.jsx)("li",{children:e},e))}):null,(0,t.jsx)("p",{className:h.default.bodyCopy,children:r}),(0,t.jsx)("button",{type:"button",className:h.default.button,"data-form-modal-open":!0,"aria-controls":l,onClick:e=>s?.(e.currentTarget),children:o})]})]})})}var y=e.i(99236);function b({titleTag:e,ctaLabel:n,modalId:a="claim-form-modal",onCtaClick:r}){return(0,t.jsx)("header",{className:y.default.header,children:(0,t.jsxs)("div",{className:y.default.inner,children:[(0,t.jsx)("div",{className:y.default.logo,"aria-label":e,children:(0,t.jsx)("p",{className:y.default.logoText,children:e})}),(0,t.jsx)("button",{type:"button",className:y.default.button,"data-form-modal-open":!0,"aria-controls":a,onClick:e=>r?.(e.currentTarget),children:n})]})})}var x=e.i(48004);function v({heading:e,bodyCopy:n,ctaLabel:a,modalId:r="claim-form-modal",onCtaClick:i}){return(0,t.jsx)("section",{className:x.default.section,children:(0,t.jsx)("div",{className:x.default.containerXlg,children:(0,t.jsx)("div",{className:x.default.panel,children:(0,t.jsxs)("div",{className:x.default.content,children:[(0,t.jsx)("h3",{children:e}),(0,t.jsx)("p",{children:n}),(0,t.jsx)("button",{type:"button",className:x.default.button,"data-form-modal-open":!0,"aria-controls":r,onClick:e=>i?.(e.currentTarget),children:a})]})})})})}var j=e.i(24009);function k({className:e,heading:n,copyText:a,ctaLabel:r,modalId:i="claim-form-modal",onCtaClick:o}){return(0,t.jsx)("aside",{className:`${j.default.sidebar} ${e??""}`.trim(),"aria-label":"Case call to action",children:(0,t.jsxs)("div",{className:j.default.card,children:[n?(0,t.jsx)("h3",{className:j.default.heading,children:n}):null,(0,t.jsx)("p",{className:j.default.copy,children:a}),(0,t.jsx)("button",{type:"button",className:j.default.button,"data-form-modal-open":!0,"aria-controls":i,onClick:e=>o?.(e.currentTarget),children:r})]})})}var C=e.i(55374);function P({content:e}){let r="claim-form-modal",o="claim-consent-gate-modal",l=e.formUrl.includes("link.mediatasks.co.uk/widget/form/"),d=(0,n.useMemo)(()=>e.secondSubheader.split("\n").map(e=>e.trim()).filter(Boolean),[e.secondSubheader]),u=e.listItems.length>0,f=e.secondHeader.trim().length>0||d.length>0,p=f||u||!!e.secondImage,h=d[0]??e.secondSubheader,y=JSON.stringify({metaPixelId:e.metaPixelId,tiktokPixelId:e.tiktokPixelId,twitterPixelId:e.twitterPixelId,redditPixelId:e.redditPixelId,googleAdsId:e.googleAdsId,zeetoPixelUrl:e.zeetoPixelUrl,linkedinPartnerId:e.linkedinPartnerId,adrollAdvId:e.adrollAdvId,adrollPixelId:e.adrollPixelId,rdStationHeadUrl:e.rdStationHeadUrl,rdStationFooterUrl:e.rdStationFooterUrl}),x=JSON.stringify(e.formQueryAliases),j=e.consentGateRememberAcceptance?"true":"false",P=JSON.stringify(e.consentGateOpenDelayMs),S=`(() => {
    const modal = document.getElementById(${JSON.stringify(r)});
    const consentGate = ${e.consentGateEnabled?`document.getElementById(${JSON.stringify(o)})`:"null"};
    const trackingConfig = ${y};
    const formQueryAliases = ${x};
    const rememberConsentAcceptance = ${j};
    const consentGateOpenDelayMs = ${P};
    const utmStorageKey = "landing-utm-query";
    const utmParamPattern = /^utm_/i;
    if (!modal || modal.dataset.controllerAttached === "true") {
      return;
    }

    modal.dataset.controllerAttached = "true";

    const appendInlineScript = (id, trackingType, code) => {
      if (document.getElementById(id)) {
        return;
      }

      const script = document.createElement("script");
      script.id = id;
      script.dataset.trackingPixel = trackingType;
      script.text = code;
      document.head.appendChild(script);
    };

    const appendExternalScript = (id, trackingType, src) => {
      if (document.getElementById(id)) {
        return;
      }

      const script = document.createElement("script");
      script.id = id;
      script.dataset.trackingPixel = trackingType;
      script.async = true;
      script.src = src;
      document.head.appendChild(script);
    };

    const appendHiddenIframe = (id, trackingType, src) => {
      if (document.getElementById(id)) {
        return;
      }

      const iframe = document.createElement("iframe");
      iframe.id = id;
      iframe.dataset.trackingPixel = trackingType;
      iframe.src = src;
      iframe.style.display = "none";
      document.body.appendChild(iframe);
    };

    const injectTrackingPixels = () => {
      if (trackingConfig.metaPixelId) {
        appendInlineScript(
          "meta-pixel-" + trackingConfig.metaPixelId,
          "meta",
          "!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?" +
            "n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;" +
            "n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;" +
            "t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window," +
            "document,'script','https://connect.facebook.net/en_US/fbevents.js');" +
            "fbq('init', '" + trackingConfig.metaPixelId + "');" +
            "fbq('track', 'PageView');",
        );
      }

      if (trackingConfig.twitterPixelId) {
        appendInlineScript(
          "twitter-pixel-" + trackingConfig.twitterPixelId,
          "twitter",
          "!function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);},s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='https://static.ads-twitter.com/uwt.js',a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');twq('config','" +
            trackingConfig.twitterPixelId +
            "');",
        );
      }

      if (trackingConfig.tiktokPixelId) {
        appendInlineScript(
          "tiktok-pixel-" + trackingConfig.tiktokPixelId,
          "tiktok",
          "!function (w, d, t) {w.TiktokAnalyticsObject = t;var ttq = (w[t] = w[t] || []);(ttq.methods = ['page','track','identify','instances','debug','on','off','once','ready','alias','group','enableCookie','disableCookie']),(ttq.setAndDefer = function (t, e) {t[e] = function () {t.push([e].concat(Array.prototype.slice.call(arguments, 0)));};});for (var i = 0; i < ttq.methods.length; i++) ttq.setAndDefer(ttq, ttq.methods[i]);(ttq.instance = function (t) {for (var e = ttq._i[t] || [], n = 0; n < ttq.methods.length; n++) ttq.setAndDefer(e, ttq.methods[n]);return e;}),(ttq.load = function (e, n) {var i = 'https://analytics.tiktok.com/i18n/pixel/events.js';(ttq._i = ttq._i || {}),(ttq._i[e] = []),(ttq._i[e]._u = i),(ttq._t = ttq._t || {}),(ttq._t[e] = +new Date()),(ttq._o = ttq._o || {}),(ttq._o[e] = n || {});var o = document.createElement('script');(o.type = 'text/javascript'),(o.async = !0),(o.src = i + '?sdkid=' + e + '&lib=' + t);var a = document.getElementsByTagName('script')[0];a.parentNode.insertBefore(o, a);});ttq.load('" +
            trackingConfig.tiktokPixelId +
            "');ttq.page();}(window, document, 'ttq');",
        );
      }

      if (trackingConfig.redditPixelId) {
        appendInlineScript(
          "reddit-pixel-" + trackingConfig.redditPixelId,
          "reddit",
          "!function(w,d){if(!w.rdt){var p=w.rdt=function(){p.sendEvent?p.sendEvent.apply(p,arguments):p.callQueue.push(arguments)};p.callQueue=[];var t=d.createElement('script');t.src='https://www.redditstatic.com/ads/pixel.js?pixel_id=" +
            trackingConfig.redditPixelId +
            "';t.async=!0;var s=d.getElementsByTagName('script')[0];s.parentNode.insertBefore(t,s)}}(window,document);rdt('init','" +
            trackingConfig.redditPixelId +
            "');rdt('track','PageVisit');",
        );
      }

      if (trackingConfig.googleAdsId) {
        appendExternalScript(
          "google-ads-loader-" + trackingConfig.googleAdsId,
          "google-ads",
          "https://www.googletagmanager.com/gtag/js?id=" + trackingConfig.googleAdsId,
        );
        appendInlineScript(
          "google-ads-config-" + trackingConfig.googleAdsId,
          "google-ads",
          "window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '" +
            trackingConfig.googleAdsId +
            "');",
        );
      }

      if (trackingConfig.zeetoPixelUrl) {
        appendHiddenIframe(
          "zeeto-pixel-" + btoa(trackingConfig.zeetoPixelUrl).replace(/[=+/]/g, ""),
          "zeeto",
          trackingConfig.zeetoPixelUrl,
        );
      }

      if (trackingConfig.linkedinPartnerId) {
        appendInlineScript(
          "linkedin-pixel-partner-" + trackingConfig.linkedinPartnerId,
          "linkedin",
          "_linkedin_partner_id = '" + trackingConfig.linkedinPartnerId + "'; window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || []; window._linkedin_data_partner_ids.push(_linkedin_partner_id);",
        );
        appendInlineScript(
          "linkedin-pixel-loader-" + trackingConfig.linkedinPartnerId,
          "linkedin",
          "(function(l) { if (!l) { window.lintrk = function(a,b) { window.lintrk.q.push([a,b]); }; window.lintrk.q = []; } var s = document.getElementsByTagName('script')[0]; var b = document.createElement('script'); b.type = 'text/javascript'; b.async = true; b.src = 'https://snap.licdn.com/li.lms-analytics/insight.min.js'; s.parentNode.insertBefore(b, s); })(window.lintrk);",
        );
      }

      if (trackingConfig.adrollAdvId && trackingConfig.adrollPixelId) {
        appendInlineScript(
          "adroll-pixel-" + trackingConfig.adrollPixelId,
          "adroll",
          "adroll_adv_id = '" + trackingConfig.adrollAdvId + "'; adroll_pix_id = '" + trackingConfig.adrollPixelId + "'; adroll_version = '2.0'; (function (w, d, e, o, a) { w.__adroll_loaded = true; w.adroll = w.adroll || []; w.adroll.f = ['setProperties', 'identify', 'track', 'identify_email']; var roundtripUrl = 'https://s.adroll.com/j/' + adroll_adv_id + '/roundtrip.js'; for (a = 0; a < w.adroll.f.length; a++) { w.adroll[w.adroll.f[a]] = w.adroll[w.adroll.f[a]] || (function (n) { return function () { w.adroll.push([n, arguments]); }; })(w.adroll.f[a]); } e = d.createElement('script'); o = d.getElementsByTagName('script')[0]; e.async = 1; e.src = roundtripUrl; o.parentNode.insertBefore(e, o); })(window, document); adroll.track('pageView');",
        );
      }

      if (trackingConfig.rdStationHeadUrl) {
        appendInlineScript(
          "rd-station-head-pixel",
          "rd-station",
          "(function (w, d, s, u, dbg) { var js, fjs = d.getElementsByTagName(s)[0]; window.rdcndbg = dbg; js = d.createElement(s); js.async = true; js.src = u; fjs.parentNode.insertBefore(js, fjs); })(window, document, 'script', '" + trackingConfig.rdStationHeadUrl + "', false);",
        );
      }

      if (trackingConfig.rdStationFooterUrl) {
        appendInlineScript(
          "rd-station-footer-pixel",
          "rd-station",
          "(function (w, d, s, u, dbg) { var js, fjs = d.getElementsByTagName(s)[0]; window.rdcndbg = dbg; js = d.createElement(s); js.async = true; js.src = u; fjs.parentNode.insertBefore(js, fjs); })(window, document, 'script', '" + trackingConfig.rdStationFooterUrl + "', false);",
        );
      }
    };

    const wireFaqFallback = () => {
      const faqButtons = document.querySelectorAll('button[id^="faq-trigger-"]');

      faqButtons.forEach((button) => {
        if (!(button instanceof HTMLButtonElement)) {
          return;
        }

        if (button.dataset.faqFallbackAttached === "true") {
          return;
        }

        const panelId = button.getAttribute("aria-controls");
        const panel = panelId ? document.getElementById(panelId) : null;

        if (!(panel instanceof HTMLElement)) {
          return;
        }

        button.dataset.faqFallbackAttached = "true";

        const setState = (open) => {
          button.setAttribute("aria-expanded", open ? "true" : "false");
          panel.style.gridTemplateRows = open ? "1fr" : "0fr";
        };

        setState(button.getAttribute("aria-expanded") === "true");

        button.addEventListener("click", (event) => {
          if (event.defaultPrevented) {
            return;
          }

          const isOpen = button.getAttribute("aria-expanded") === "true";
          setState(!isOpen);
        });
      });
    };

    wireFaqFallback();

    const consentStorageKey = "landing-consent-accepted";
    const overlay = modal.querySelector("[data-form-modal-overlay]");
    const closeButton = modal.querySelector("[data-form-modal-close]");
    const modalFrame = modal.querySelector("[data-form-modal-frame]");
    const inlineFrame = document.querySelector("[data-inline-form-frame]");
    const consentCheckbox = consentGate
      ? consentGate.querySelector("[data-consent-gate-checkbox]")
      : null;
    let lastTrigger = null;
    let previousOverflow = "";
    let previousPaddingRight = "";
    let bodyLockOwner = null;
    let consentAccepted = !consentGate;

    const collectUtmParams = (search) => {
      const sourceParams = new URLSearchParams(search);
      const utmParams = new URLSearchParams();

      sourceParams.forEach((value, key) => {
        if (!utmParamPattern.test(key) || !value) {
          return;
        }

        utmParams.set(key, value);
      });

      return utmParams;
    };

    const persistCurrentUtmParams = () => {
      const utmParams = collectUtmParams(window.location.search);

      if (!utmParams.toString()) {
        return utmParams;
      }

      try {
        window.sessionStorage.setItem(utmStorageKey, utmParams.toString());
      } catch {}

      return utmParams;
    };

    const applyUtmParamsToFrame = (frame, utmParams) => {
      if (!(frame instanceof HTMLIFrameElement) || !utmParams.toString()) {
        return;
      }

      const frameSrc = frame.getAttribute("src");

      if (!frame.dataset.baseSrc && frameSrc) {
        frame.dataset.baseSrc = frameSrc;
      }

      const baseSrc = frame.dataset.baseSrc || frameSrc;

      if (!baseSrc) {
        return;
      }

      try {
        const nextUrl = new URL(baseSrc, window.location.href);

        utmParams.forEach((value, key) => {
          if (!value) {
            return;
          }

          nextUrl.searchParams.set(key, value);

          const aliases = Array.isArray(formQueryAliases[key]) ? formQueryAliases[key] : [];
          aliases.forEach((alias) => {
            if (alias) {
              nextUrl.searchParams.set(alias, value);
            }
          });
        });

        const nextSrc = nextUrl.toString();

        if (frame.src !== nextSrc) {
          frame.src = nextSrc;
        }
      } catch {}
    };

    if (rememberConsentAcceptance) {
      try {
        if (!consentAccepted && window.localStorage.getItem(consentStorageKey) === "true") {
          consentAccepted = true;
        }
      } catch {}
    }

    window.__landingConsentAccepted = consentAccepted;

    const currentUtmParams = persistCurrentUtmParams();
    applyUtmParamsToFrame(modalFrame, currentUtmParams);
    applyUtmParamsToFrame(inlineFrame, currentUtmParams);

    if (consentAccepted) {
      injectTrackingPixels();
    }

    let inlineShrinkTimer = null;

    const updateFrameHeight = (height) => {
      if (!height || height <= 100) {
        return;
      }

      if (modalFrame instanceof HTMLIFrameElement) {
        modalFrame.style.height = height + "px";
      }

      if (inlineFrame instanceof HTMLIFrameElement) {
        // Jotform can under-report or report again after late layout shifts.
        // Grow immediately, then trim excess space after height messages settle.
        const currentHeight = Math.max(
          inlineFrame.getBoundingClientRect().height,
          Number.parseFloat(inlineFrame.style.height || "0"),
        );
        const nextHeight = height + 24;

        inlineFrame.style.height = Math.max(currentHeight, nextHeight) + "px";

        if (inlineShrinkTimer) {
          window.clearTimeout(inlineShrinkTimer);
        }

        inlineShrinkTimer = window.setTimeout(() => {
          const appliedHeight = Number.parseFloat(inlineFrame.style.height || "0");

          if (appliedHeight > nextHeight + 24) {
            inlineFrame.style.height = nextHeight + "px";
          }
        }, 900);
      }
    };

    const lockBody = (owner) => {
      if (bodyLockOwner === owner) {
        return;
      }

      if (!bodyLockOwner) {
        previousOverflow = document.body.style.overflow;
        previousPaddingRight = document.body.style.paddingRight;
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        document.body.style.overflow = "hidden";
        document.body.style.paddingRight =
          scrollbarWidth > 0 ? scrollbarWidth + "px" : previousPaddingRight;
      }

      bodyLockOwner = owner;
    };

    const unlockBody = (owner) => {
      if (bodyLockOwner !== owner) {
        return;
      }

      bodyLockOwner = null;
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPaddingRight;
    };

    const openConsentGate = () => {
      if (!consentGate || consentAccepted) {
        return;
      }

      consentGate.hidden = false;
      lockBody("consent");

      window.requestAnimationFrame(() => {
        if (consentCheckbox instanceof HTMLElement) {
          consentCheckbox.focus();
        }
      });
    };

    const closeConsentGate = () => {
      if (!consentGate || consentGate.hidden) {
        return;
      }

      consentGate.hidden = true;
      unlockBody("consent");
    };

    const openModal = (trigger) => {
      if (!consentAccepted) {
        openConsentGate();
        return;
      }

      lastTrigger = trigger instanceof HTMLElement ? trigger : null;
      modal.hidden = false;
      lockBody("form");

      window.requestAnimationFrame(() => {
        if (closeButton instanceof HTMLElement) {
          closeButton.focus();
        }
      });
    };

    const closeModal = () => {
      if (modal.hidden) {
        return;
      }

      modal.hidden = true;
      unlockBody("form");

      if (lastTrigger instanceof HTMLElement) {
        window.requestAnimationFrame(() => {
          lastTrigger.focus();
        });
      }
    };

    document.addEventListener("click", (event) => {
      const target = event.target;
      if (!(target instanceof Element)) {
        return;
      }

      const openTrigger = target.closest("[data-form-modal-open]");
      if (openTrigger) {
        event.preventDefault();
        openModal(openTrigger);
        return;
      }

      const closeTrigger = target.closest("[data-form-modal-close]");
      if (closeTrigger) {
        event.preventDefault();
        closeModal();
        return;
      }

      if (overlay instanceof HTMLElement && target === overlay) {
        closeModal();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    });

    if (consentCheckbox instanceof HTMLInputElement) {
      consentCheckbox.addEventListener("change", () => {
        if (!consentCheckbox.checked) {
          return;
        }

        consentAccepted = true;
        window.__landingConsentAccepted = true;
        if (rememberConsentAcceptance) {
          try {
            window.localStorage.setItem(consentStorageKey, "true");
          } catch {}
        }
        injectTrackingPixels();
        window.dispatchEvent(new CustomEvent("landing-consent-accepted"));
        closeConsentGate();
      });
    }

    if (!consentAccepted) {
      window.addEventListener(
        "load",
        () => {
          window.setTimeout(() => {
            openConsentGate();
          }, consentGateOpenDelayMs);
        },
        { once: true },
      );
    }

    window.addEventListener("message", (event) => {
      let height = null;

      try {
        if (typeof event.data === "string") {
          if (event.data.startsWith("setHeight:")) {
            height = Number.parseInt(event.data.split(":")[1], 10);
          } else {
            const parsed = JSON.parse(event.data);
            if (parsed && typeof parsed === "object") {
              if (parsed.action === "setHeight") {
                height = Number(parsed.height);
              } else if ("height" in parsed) {
                height = Number(parsed.height);
              }
            }
          }
        } else if (event.data && typeof event.data === "object" && event.data.action === "setHeight") {
          height = Number(event.data.height);
        }
      } catch {
        return;
      }

      updateFrameHeight(height);
    });
  })();`;return(0,t.jsxs)("div",{className:C.default.page,children:[(0,t.jsx)(b,{titleTag:e.title,ctaLabel:e.cta,modalId:r}),(0,t.jsxs)("main",{className:C.default.main,children:[(0,t.jsx)("div",{className:C.default.containerXlg,children:(0,t.jsx)("div",{className:C.default.layoutShell,children:(0,t.jsxs)("div",{className:C.default.centeredCore,children:[(0,t.jsxs)("div",{className:C.default.mainColumn,children:[(0,t.jsx)(w,{title:e.mainHeader,listItems:e.heroListItems,bodyCopy:e.description,imageSrc:e.image,ctaLabel:e.cta,modalId:r}),p?(0,t.jsxs)("div",{className:C.default.postHeroContent,children:[f?(0,t.jsxs)(c,{className:u||e.secondImage?void 0:C.default.noBottomSection,children:[e.secondHeader.trim().length>0?(0,t.jsx)("h3",{className:C.default.secondHeaderHeading,children:e.secondHeader}):null,u?null:d.map((e,n)=>(0,t.jsx)("p",{className:n===d.length-1?C.default.secondSubheaderLastStrong:void 0,children:e},`${e}-${n}`))]}):null,u?(0,t.jsx)(i,{title:h,items:e.listItems,trailingText:e.listTrailingText,removeBottomMargin:!e.secondImage}):null,e.secondImage?(0,t.jsx)(c,{className:C.default.singleImageEndSection,children:(0,t.jsx)("div",{className:C.default.imagePlaceholder,children:(0,t.jsx)(a.default,{src:e.secondImage,alt:`${e.mainHeader} secondary visual`,fill:!0,sizes:"(max-width: 991px) 100vw, 671px",className:C.default.imageAsset})})}):null]}):null,(0,t.jsx)(k,{className:C.default.sidebarDock,copyText:"Speak with the legal team at no cost today.",ctaLabel:e.cta,modalId:r})]}),(0,t.jsx)(m,{inline:!0,formUrl:e.formUrl,className:C.default.formRail})]})})}),(0,t.jsx)(v,{heading:"Free Case Review",bodyCopy:"Submit your information for a free case review, and an attorney will contact you shortly to discuss your options.",ctaLabel:e.cta,modalId:r}),e.faqs.length>0?(0,t.jsx)(g,{items:e.faqs}):null,(0,t.jsx)(_,{copy:e.footerCopy,links:e.footerLinks})]}),e.consentGateEnabled?(0,t.jsx)(s,{links:e.footerLinks,modalId:o,title:e.consentGateTitle,copy:e.consentGateCopy}):null,(0,t.jsx)(m,{formUrl:e.formUrl,modalId:r}),l?(0,t.jsx)("script",{async:!0,src:"https://link.mediatasks.co.uk/js/form_embed.js"}):null,(0,t.jsx)("script",{dangerouslySetInnerHTML:{__html:S}})]})}e.s(["default",()=>P],61143)}]);