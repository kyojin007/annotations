const Ht=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))f(d);new MutationObserver(d=>{for(const i of d)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&f(c)}).observe(document,{childList:!0,subtree:!0});function n(d){const i={};return d.integrity&&(i.integrity=d.integrity),d.referrerpolicy&&(i.referrerPolicy=d.referrerpolicy),d.crossorigin==="use-credentials"?i.credentials="include":d.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function f(d){if(d.ep)return;d.ep=!0;const i=n(d);fetch(d.href,i)}};Ht();function it(){}function Ot(t,e){for(const n in e)t[n]=e[n];return t}function Dt(t){return t()}function wt(){return Object.create(null)}function Y(t){t.forEach(Dt)}function zt(t){return typeof t=="function"}function vt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let at;function tt(t,e){return at||(at=document.createElement("a")),at.href=e,t===at.href}function Gt(t){return Object.keys(t).length===0}function _(t,e){t.appendChild(e)}function ut(t,e,n){t.insertBefore(e,n||null)}function nt(t){t.parentNode.removeChild(t)}function mt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function C(t){return document.createElement(t)}function H(t){return document.createTextNode(t)}function P(){return H(" ")}function et(t,e,n,f){return t.addEventListener(e,n,f),()=>t.removeEventListener(e,n,f)}function v(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Kt(t){return Array.from(t.childNodes)}function Q(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function st(t,e){t.value=e==null?"":e}function dt(t,e,n,f){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,f?"important":"")}let pt;function x(t){pt=t}const $=[],qt=[],ot=[],Ct=[],Wt=Promise.resolve();let gt=!1;function Jt(){gt||(gt=!0,Wt.then(Nt))}function _t(t){ot.push(t)}const ht=new Set;let lt=0;function Nt(){const t=pt;do{for(;lt<$.length;){const e=$[lt];lt++,x(e),Qt(e.$$)}for(x(null),$.length=0,lt=0;qt.length;)qt.pop()();for(let e=0;e<ot.length;e+=1){const n=ot[e];ht.has(n)||(ht.add(n),n())}ot.length=0}while($.length);for(;Ct.length;)Ct.pop()();gt=!1,ht.clear(),x(t)}function Qt(t){if(t.fragment!==null){t.update(),Y(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(_t)}}const rt=new Set;let V;function Bt(){V={r:0,c:[],p:V}}function It(){V.r||Y(V.c),V=V.p}function W(t,e){t&&t.i&&(rt.delete(t),t.i(e))}function X(t,e,n,f){if(t&&t.o){if(rt.has(t))return;rt.add(t),V.c.push(()=>{rt.delete(t),f&&(n&&t.d(1),f())}),t.o(e)}}function Tt(t,e){const n={},f={},d={$$scope:1};let i=t.length;for(;i--;){const c=t[i],h=e[i];if(h){for(const g in c)g in h||(f[g]=1);for(const g in h)d[g]||(n[g]=h[g],d[g]=1);t[i]=h}else for(const g in c)d[g]=1}for(const c in f)c in n||(n[c]=void 0);return n}function Ut(t){return typeof t=="object"&&t!==null?t:{}}function yt(t){t&&t.c()}function ft(t,e,n,f){const{fragment:d,on_mount:i,on_destroy:c,after_update:h}=t.$$;d&&d.m(e,n),f||_t(()=>{const g=i.map(Dt).filter(zt);c?c.push(...g):Y(g),t.$$.on_mount=[]}),h.forEach(_t)}function ct(t,e){const n=t.$$;n.fragment!==null&&(Y(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Vt(t,e){t.$$.dirty[0]===-1&&($.push(t),Jt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function bt(t,e,n,f,d,i,c,h=[-1]){const g=pt;x(t);const p=t.$$={fragment:null,ctx:null,props:i,update:it,not_equal:d,bound:wt(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(g?g.$$.context:[])),callbacks:wt(),dirty:h,skip_bound:!1,root:e.target||g.$$.root};c&&c(p.root);let j=!1;if(p.ctx=n?n(t,e.props||{},(A,k,...D)=>{const L=D.length?D[0]:k;return p.ctx&&d(p.ctx[A],p.ctx[A]=L)&&(!p.skip_bound&&p.bound[A]&&p.bound[A](L),j&&Vt(t,A)),k}):[],p.update(),j=!0,Y(p.before_update),p.fragment=f?f(p.ctx):!1,e.target){if(e.hydrate){const A=Kt(e.target);p.fragment&&p.fragment.l(A),A.forEach(nt)}else p.fragment&&p.fragment.c();e.intro&&W(t.$$.fragment),ft(t,e.target,e.anchor,e.customElement),Nt()}x(g)}class kt{$destroy(){ct(this,1),this.$destroy=it}$on(e,n){const f=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return f.push(n),()=>{const d=f.indexOf(n);d!==-1&&f.splice(d,1)}}$set(e){this.$$set&&!Gt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}var Xt="/annotations/assets/svelte.d72399d3.png",Yt=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},Pt={exports:{}};(function(t){(function(e){function n(a,m){var o=(a&65535)+(m&65535),y=(a>>16)+(m>>16)+(o>>16);return y<<16|o&65535}function f(a,m){return a<<m|a>>>32-m}function d(a,m,o,y,q,E){return n(f(n(n(m,a),n(y,E)),q),o)}function i(a,m,o,y,q,E,N){return d(m&o|~m&y,a,m,q,E,N)}function c(a,m,o,y,q,E,N){return d(m&y|o&~y,a,m,q,E,N)}function h(a,m,o,y,q,E,N){return d(m^o^y,a,m,q,E,N)}function g(a,m,o,y,q,E,N){return d(o^(m|~y),a,m,q,E,N)}function p(a,m){a[m>>5]|=128<<m%32,a[(m+64>>>9<<4)+14]=m;var o,y,q,E,N,s=1732584193,r=-271733879,u=-1732584194,l=271733878;for(o=0;o<a.length;o+=16)y=s,q=r,E=u,N=l,s=i(s,r,u,l,a[o],7,-680876936),l=i(l,s,r,u,a[o+1],12,-389564586),u=i(u,l,s,r,a[o+2],17,606105819),r=i(r,u,l,s,a[o+3],22,-1044525330),s=i(s,r,u,l,a[o+4],7,-176418897),l=i(l,s,r,u,a[o+5],12,1200080426),u=i(u,l,s,r,a[o+6],17,-1473231341),r=i(r,u,l,s,a[o+7],22,-45705983),s=i(s,r,u,l,a[o+8],7,1770035416),l=i(l,s,r,u,a[o+9],12,-1958414417),u=i(u,l,s,r,a[o+10],17,-42063),r=i(r,u,l,s,a[o+11],22,-1990404162),s=i(s,r,u,l,a[o+12],7,1804603682),l=i(l,s,r,u,a[o+13],12,-40341101),u=i(u,l,s,r,a[o+14],17,-1502002290),r=i(r,u,l,s,a[o+15],22,1236535329),s=c(s,r,u,l,a[o+1],5,-165796510),l=c(l,s,r,u,a[o+6],9,-1069501632),u=c(u,l,s,r,a[o+11],14,643717713),r=c(r,u,l,s,a[o],20,-373897302),s=c(s,r,u,l,a[o+5],5,-701558691),l=c(l,s,r,u,a[o+10],9,38016083),u=c(u,l,s,r,a[o+15],14,-660478335),r=c(r,u,l,s,a[o+4],20,-405537848),s=c(s,r,u,l,a[o+9],5,568446438),l=c(l,s,r,u,a[o+14],9,-1019803690),u=c(u,l,s,r,a[o+3],14,-187363961),r=c(r,u,l,s,a[o+8],20,1163531501),s=c(s,r,u,l,a[o+13],5,-1444681467),l=c(l,s,r,u,a[o+2],9,-51403784),u=c(u,l,s,r,a[o+7],14,1735328473),r=c(r,u,l,s,a[o+12],20,-1926607734),s=h(s,r,u,l,a[o+5],4,-378558),l=h(l,s,r,u,a[o+8],11,-2022574463),u=h(u,l,s,r,a[o+11],16,1839030562),r=h(r,u,l,s,a[o+14],23,-35309556),s=h(s,r,u,l,a[o+1],4,-1530992060),l=h(l,s,r,u,a[o+4],11,1272893353),u=h(u,l,s,r,a[o+7],16,-155497632),r=h(r,u,l,s,a[o+10],23,-1094730640),s=h(s,r,u,l,a[o+13],4,681279174),l=h(l,s,r,u,a[o],11,-358537222),u=h(u,l,s,r,a[o+3],16,-722521979),r=h(r,u,l,s,a[o+6],23,76029189),s=h(s,r,u,l,a[o+9],4,-640364487),l=h(l,s,r,u,a[o+12],11,-421815835),u=h(u,l,s,r,a[o+15],16,530742520),r=h(r,u,l,s,a[o+2],23,-995338651),s=g(s,r,u,l,a[o],6,-198630844),l=g(l,s,r,u,a[o+7],10,1126891415),u=g(u,l,s,r,a[o+14],15,-1416354905),r=g(r,u,l,s,a[o+5],21,-57434055),s=g(s,r,u,l,a[o+12],6,1700485571),l=g(l,s,r,u,a[o+3],10,-1894986606),u=g(u,l,s,r,a[o+10],15,-1051523),r=g(r,u,l,s,a[o+1],21,-2054922799),s=g(s,r,u,l,a[o+8],6,1873313359),l=g(l,s,r,u,a[o+15],10,-30611744),u=g(u,l,s,r,a[o+6],15,-1560198380),r=g(r,u,l,s,a[o+13],21,1309151649),s=g(s,r,u,l,a[o+4],6,-145523070),l=g(l,s,r,u,a[o+11],10,-1120210379),u=g(u,l,s,r,a[o+2],15,718787259),r=g(r,u,l,s,a[o+9],21,-343485551),s=n(s,y),r=n(r,q),u=n(u,E),l=n(l,N);return[s,r,u,l]}function j(a){var m,o="",y=a.length*32;for(m=0;m<y;m+=8)o+=String.fromCharCode(a[m>>5]>>>m%32&255);return o}function A(a){var m,o=[];for(o[(a.length>>2)-1]=void 0,m=0;m<o.length;m+=1)o[m]=0;var y=a.length*8;for(m=0;m<y;m+=8)o[m>>5]|=(a.charCodeAt(m/8)&255)<<m%32;return o}function k(a){return j(p(A(a),a.length*8))}function D(a,m){var o,y=A(a),q=[],E=[],N;for(q[15]=E[15]=void 0,y.length>16&&(y=p(y,a.length*8)),o=0;o<16;o+=1)q[o]=y[o]^909522486,E[o]=y[o]^1549556828;return N=p(q.concat(A(m)),512+m.length*8),j(p(E.concat(N),512+128))}function L(a){var m="0123456789abcdef",o="",y,q;for(q=0;q<a.length;q+=1)y=a.charCodeAt(q),o+=m.charAt(y>>>4&15)+m.charAt(y&15);return o}function F(a){return unescape(encodeURIComponent(a))}function O(a){return k(F(a))}function I(a){return L(O(a))}function J(a,m){return D(F(a),F(m))}function z(a,m){return L(J(a,m))}function T(a,m,o){return m?o?J(m,a):z(m,a):o?O(a):I(a)}t.exports?t.exports=T:e.md5=T})(Yt)})(Pt);var Zt=Pt.exports;function $t(t){let e,n,f,d,i,c;return{c(){e=C("div"),n=C("img"),d=P(),i=C("h5"),c=H(t[0]),tt(n.src,f=t[2])||v(n,"src",f),v(n,"alt",t[1]),v(n,"height","32"),v(n,"width","32"),v(n,"class","svelte-iqu440"),v(i,"title",t[1]),v(i,"class","svelte-iqu440"),v(e,"class","user svelte-iqu440")},m(h,g){ut(h,e,g),_(e,n),_(e,d),_(e,i),_(i,c)},p(h,[g]){g&4&&!tt(n.src,f=h[2])&&v(n,"src",f),g&2&&v(n,"alt",h[1]),g&1&&Q(c,h[0]),g&2&&v(i,"title",h[1])},i:it,o:it,d(h){h&&nt(e)}}}function xt(t,e,n){let{author:f=""}=e,{email:d}=e,{avatar:i}=e;return t.$$set=c=>{"author"in c&&n(0,f=c.author),"email"in c&&n(1,d=c.email),"avatar"in c&&n(2,i=c.avatar)},[f,d,i]}class te extends kt{constructor(e){super(),bt(this,e,xt,$t,vt,{author:0,email:1,avatar:2})}}function At(t,e,n){const f=t.slice();return f[9]=e[n],f}function Mt(t){let e,n;const f=[t[9]];let d={};for(let i=0;i<f.length;i+=1)d=Ot(d,f[i]);return e=new Rt({props:d}),{c(){yt(e.$$.fragment)},m(i,c){ft(e,i,c),n=!0},p(i,c){const h=c&1?Tt(f,[Ut(i[9])]):{};e.$set(h)},i(i){n||(W(e.$$.fragment,i),n=!0)},o(i){X(e.$$.fragment,i),n=!1},d(i){ct(e,i)}}}function ee(t){let e,n,f,d,i,c,h,g,p,j=t[0].length+"",A,k,D=t[0].length===1?"reply":"replies",L,F,O,I,J,z,T,a,m,o,y,q,E,N;f=new te({props:{author:t[1],email:t[2],avatar:t[3]}});let s=t[0],r=[];for(let l=0;l<s.length;l+=1)r[l]=Mt(At(t,s,l));const u=l=>X(r[l],1,1,()=>{r[l]=null});return{c(){e=C("article"),n=C("div"),yt(f.$$.fragment),d=P(),i=C("div"),c=C("span"),h=H(t[4]),g=H(" | "),p=C("span"),A=H(j),k=P(),L=H(D),F=P(),O=C("div"),I=H(t[5]),J=P(),z=C("div"),T=C("textarea"),a=P(),m=C("button"),m.textContent="Reply",o=P(),y=C("div");for(let l=0;l<r.length;l+=1)r[l].c();v(i,"class","meta svelte-tt35g1"),v(n,"class","annotation-header mb-3 svelte-tt35g1"),v(O,"class","body svelte-tt35g1"),v(T,"class","form-control mb-1"),v(T,"placeholder","type your reply here ..."),v(T,"rows","1"),v(m,"class","btn btn-sm btn-primary"),v(z,"class","reply d-grid mb-3"),v(y,"class","annotations"),v(e,"class","annotation svelte-tt35g1")},m(l,S){ut(l,e,S),_(e,n),ft(f,n,null),_(n,d),_(n,i),_(i,c),_(c,h),_(i,g),_(i,p),_(p,A),_(p,k),_(p,L),_(e,F),_(e,O),_(O,I),_(e,J),_(e,z),_(z,T),st(T,t[6]),_(z,a),_(z,m),_(e,o),_(e,y);for(let R=0;R<r.length;R+=1)r[R].m(y,null);q=!0,E||(N=[et(T,"input",t[8]),et(m,"click",t[7])],E=!0)},p(l,[S]){const R={};if(S&2&&(R.author=l[1]),S&4&&(R.email=l[2]),S&8&&(R.avatar=l[3]),f.$set(R),(!q||S&16)&&Q(h,l[4]),(!q||S&1)&&j!==(j=l[0].length+"")&&Q(A,j),(!q||S&1)&&D!==(D=l[0].length===1?"reply":"replies")&&Q(L,D),(!q||S&32)&&Q(I,l[5]),S&64&&st(T,l[6]),S&1){s=l[0];let M;for(M=0;M<s.length;M+=1){const K=At(l,s,M);r[M]?(r[M].p(K,S),W(r[M],1)):(r[M]=Mt(K),r[M].c(),W(r[M],1),r[M].m(y,null))}for(Bt(),M=s.length;M<r.length;M+=1)u(M);It()}},i(l){if(!q){W(f.$$.fragment,l);for(let S=0;S<s.length;S+=1)W(r[S]);q=!0}},o(l){X(f.$$.fragment,l),r=r.filter(Boolean);for(let S=0;S<r.length;S+=1)X(r[S]);q=!1},d(l){l&&nt(e),ct(f),mt(r,l),E=!1,Y(N)}}}function ne(t,e,n){let{author:f}=e,{email:d}=e,{avatar:i}=e,{date:c}=e,{annotation:h}=e,{annotations:g}=e,p="";function j(){let D={author:f,email:d,avatar:i,date:"just now",annotation:p,annotations:[]};n(0,g=[...g,D]),console.log("addReply",g),n(6,p="")}function A(){p=this.value,n(6,p)}return t.$$set=k=>{"author"in k&&n(1,f=k.author),"email"in k&&n(2,d=k.email),"avatar"in k&&n(3,i=k.avatar),"date"in k&&n(4,c=k.date),"annotation"in k&&n(5,h=k.annotation),"annotations"in k&&n(0,g=k.annotations)},[g,f,d,i,c,h,p,j,A]}class Rt extends kt{constructor(e){super(),bt(this,e,ne,ee,vt,{author:1,email:2,avatar:3,date:4,annotation:5,annotations:0})}}function Et(t,e,n){const f=t.slice();return f[9]=e[n],f}function St(t,e,n){const f=t.slice();return f[12]=e[n],f}function jt(t){let e,n,f,d,i,c,h,g,p,j=t[12].author+"",A,k,D,L,F;return{c(){e=C("div"),n=C("input"),i=P(),c=C("label"),h=C("img"),A=H(j),D=P(),v(n,"class","form-check-input"),v(n,"type","radio"),v(n,"id",f="a-"+t[12].id),v(n,"name","annotators"),n.__value=d=t[12].id,n.value=n.__value,t[7][0].push(n),tt(h.src,g=t[12].avatar)||v(h,"src",g),v(h,"alt",p=t[12].author),v(h,"class","svelte-1qyxkkm"),v(c,"class","form-check-label"),v(c,"for",k="a-"+t[12].id),v(e,"class","annotators me-5 svelte-1qyxkkm")},m(O,I){ut(O,e,I),_(e,n),n.checked=n.__value===t[2],_(e,i),_(e,c),_(c,h),_(c,A),_(e,D),L||(F=et(n,"change",t[6]),L=!0)},p(O,I){I&2&&f!==(f="a-"+O[12].id)&&v(n,"id",f),I&2&&d!==(d=O[12].id)&&(n.__value=d,n.value=n.__value),I&4&&(n.checked=n.__value===O[2]),I&2&&!tt(h.src,g=O[12].avatar)&&v(h,"src",g),I&2&&p!==(p=O[12].author)&&v(h,"alt",p),I&2&&j!==(j=O[12].author+"")&&Q(A,j),I&2&&k!==(k="a-"+O[12].id)&&v(c,"for",k)},d(O){O&&nt(e),t[7][0].splice(t[7][0].indexOf(n),1),L=!1,F()}}}function Lt(t){let e,n;const f=[t[9]];let d={};for(let i=0;i<f.length;i+=1)d=Ot(d,f[i]);return e=new Rt({props:d}),{c(){yt(e.$$.fragment)},m(i,c){ft(e,i,c),n=!0},p(i,c){const h=c&1?Tt(f,[Ut(i[9])]):{};e.$set(h)},i(i){n||(W(e.$$.fragment,i),n=!0)},o(i){X(e.$$.fragment,i),n=!1},d(i){ct(e,i)}}}function ae(t){let e,n,f,d,i,c,h,g,p,j,A,k,D,L,F,O,I=t[0].length+"",J,z,T,a,m,o,y,q=t[4].email+"",E,N,s,r,u,l,S,R=t[1],M=[];for(let b=0;b<R.length;b+=1)M[b]=jt(St(t,R,b));let K=t[0],B=[];for(let b=0;b<K.length;b+=1)B[b]=Lt(Et(t,K,b));const Ft=b=>X(B[b],1,1,()=>{B[b]=null});return{c(){e=C("main"),n=C("img"),d=P(),i=C("h1"),i.textContent="Annotations Demo",c=P(),h=C("div"),g=C("div"),p=C("p"),p.textContent="Comment As:",j=P(),A=C("div");for(let b=0;b<M.length;b+=1)M[b].c();k=P(),D=C("div"),L=C("div"),F=C("h5"),O=H("Comments: "),J=H(I),z=P(),T=C("div"),a=C("textarea"),m=P(),o=C("button"),y=H("Add Comment as "),E=H(q),s=P(),r=C("div");for(let b=0;b<B.length;b+=1)B[b].c();tt(n.src,f=Xt)||v(n,"src",f),v(n,"alt","Svelte Logo"),dt(n,"float","right"),dt(n,"width","30px"),dt(n,"height","30px"),v(n,"class","svelte-1qyxkkm"),v(i,"class","svelte-1qyxkkm"),v(A,"class","d-flex justify-content-start my-3"),v(g,"class","col"),v(h,"class","row"),v(a,"class","form-control"),v(a,"rows","2"),v(o,"class","btn btn-primary my-2"),v(o,"data-annotatorid",N=t[4].id),v(T,"class","d-grid"),v(r,"class","annotations"),v(L,"class","col-4"),v(D,"class","row")},m(b,U){ut(b,e,U),_(e,n),_(e,d),_(e,i),_(e,c),_(e,h),_(h,g),_(g,p),_(g,j),_(g,A);for(let w=0;w<M.length;w+=1)M[w].m(A,null);_(e,k),_(e,D),_(D,L),_(L,F),_(F,O),_(F,J),_(L,z),_(L,T),_(T,a),st(a,t[3]),_(T,m),_(T,o),_(o,y),_(o,E),_(L,s),_(L,r);for(let w=0;w<B.length;w+=1)B[w].m(r,null);u=!0,l||(S=[et(a,"input",t[8]),et(o,"click",t[5])],l=!0)},p(b,[U]){if(U&6){R=b[1];let w;for(w=0;w<R.length;w+=1){const Z=St(b,R,w);M[w]?M[w].p(Z,U):(M[w]=jt(Z),M[w].c(),M[w].m(A,null))}for(;w<M.length;w+=1)M[w].d(1);M.length=R.length}if((!u||U&1)&&I!==(I=b[0].length+"")&&Q(J,I),U&8&&st(a,b[3]),(!u||U&16)&&q!==(q=b[4].email+"")&&Q(E,q),(!u||U&16&&N!==(N=b[4].id))&&v(o,"data-annotatorid",N),U&1){K=b[0];let w;for(w=0;w<K.length;w+=1){const Z=Et(b,K,w);B[w]?(B[w].p(Z,U),W(B[w],1)):(B[w]=Lt(Z),B[w].c(),W(B[w],1),B[w].m(r,null))}for(Bt(),w=K.length;w<B.length;w+=1)Ft(w);It()}},i(b){if(!u){for(let U=0;U<K.length;U+=1)W(B[U]);u=!0}},o(b){B=B.filter(Boolean);for(let U=0;U<B.length;U+=1)X(B[U]);u=!1},d(b){b&&nt(e),mt(M,b),mt(B,b),l=!1,Y(S)}}}function le(t,e,n){let f,{annotations:d}=e,{users:i}=e,c="",h=0;console.log(i),console.log(d);function g(){let k="just now",D={author:f.author,email:f.email,avatar:f.avatar,date:k,annotation:c,annotations:[]};n(0,d=[D,...d]),console.log("addComment %o",d),n(3,c="")}const p=[[]];function j(){h=this.__value,n(2,h)}function A(){c=this.value,n(3,c)}return t.$$set=k=>{"annotations"in k&&n(0,d=k.annotations),"users"in k&&n(1,i=k.users)},t.$$.update=()=>{t.$$.dirty&6&&n(4,f=i[h])},[d,i,h,c,f,g,j,p,A]}class oe extends kt{constructor(e){super(),bt(this,e,le,ae,vt,{annotations:0,users:1})}}const G=[{id:0,author:"Simon",email:"simon.gilhooly@atom14.co.uk"},{id:1,author:"Fred Bloggs",email:"fred@bloggs.com"},{id:2,author:"Contrary Mary",email:"mary@email.com"}];G.forEach(t=>{t.hash=Zt(t.email),t.avatar=`https://www.gravatar.com/avatar/${t.hash}?d=identicon`});const re=[{author:G[0].author,email:G[0].email,avatar:G[0].avatar,date:"2 days ago",annotation:"Look here!",annotations:[{author:G[1].author,email:G[1].email,avatar:G[1].avatar,date:"1 day ago",annotation:"Wow, I am doing Svelte stuff",annotations:[]}]},{author:G[2].author,email:G[2].email,avatar:G[2].avatar,date:"12 days ago",annotation:"My first comment!",annotations:[]}];new oe({target:document.getElementById("app"),props:{annotations:re,users:G}});