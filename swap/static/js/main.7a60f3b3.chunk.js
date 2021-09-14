(this["webpackJsonpdapp-swapper"]=this["webpackJsonpdapp-swapper"]||[]).push([[0],{166:function(e){e.exports=JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]')},272:function(e){e.exports=JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"numBNB","type":"uint256"}],"name":"OwnerWithdrawBNB","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"tokenWithdrawn","type":"address"},{"indexed":false,"internalType":"uint256","name":"numTokensWithdrawn","type":"uint256"}],"name":"OwnerWithdrawTokens","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransfered","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"newFurnaceContractAddrss","type":"address"}],"name":"UpdateFurnaceContractAddress","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newFee","type":"uint256"}],"name":"UpdatedFurnaceFee","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"newRouter","type":"address"}],"name":"UpdatedPancakeswapRouter","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"swappingEnabled","type":"bool"}],"name":"UpdatedSwappingEnabled","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"newUselessContractAddress","type":"address"}],"name":"UpdatedUselessContractAddress","type":"event"},{"inputs":[],"name":"_bypassFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_furnaceFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_router","outputs":[{"internalType":"contract IUniswapV2Router02","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_swappingEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_token","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_uselessFurnace","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"numUseless","type":"uint256"}],"name":"sellUselessForBNB","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newFurnace","type":"address"}],"name":"updateFurnaceContractAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newFee","type":"uint256"}],"name":"updateFurnaceFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newPCSRouter","type":"address"}],"name":"updatePancakeswapRouter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"swappingEnabled","type":"bool"}],"name":"updateSwappingEnabled","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newUselessAddress","type":"address"}],"name":"updateUselessContractAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"receiver","type":"address"},{"internalType":"uint256","name":"numTokens","type":"uint256"}],"name":"uselessBypass","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawBNB","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenToWithdraw","type":"address"}],"name":"withdrawTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]')},298:function(e,t,n){},301:function(e,t){},308:function(e,t){},310:function(e,t){},354:function(e,t){},356:function(e,t){},380:function(e,t){},382:function(e,t){},394:function(e,t){},395:function(e,t){},422:function(e,t){},424:function(e,t){},522:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),i=n(69),r=n.n(i),u=(n(298),n(22)),c=n(91),o=n(126),p=n(2),l=n.n(p),d=n(16),y=n(558),b=n(575),f=n(566),m=n(572),j=n(577),v=n(573),x=n(578),O=n(568),h=n(579),w=n(580),g=n(581),C=n(571),T=n(582),k=n(54),M=n(5),S=Object(a.createContext)({provider:null,contract:null,signer:null,address:""}),F=function(e){var t=e.contractAddress,n=e.abi,s=e.provider,i=e.children,r=function(e){var t=Object(a.useState)(null),n=Object(u.a)(t,2),s=n[0],i=n[1];return Object(a.useEffect)((function(){i(e?e.getSigner():null)}),[e]),s}(s),c=function(e,t,n){var s=Object(a.useState)(null),i=Object(u.a)(s,2),r=i[0],c=i[1];return Object(a.useEffect)((function(){e&&n&&c(new k.a.Contract(e,t,n))}),[e,t,n]),r}(t,n,r),o=function(e){var t=Object(a.useState)(""),n=Object(u.a)(t,2),s=n[0],i=n[1];return Object(a.useEffect)((function(){function t(){return(t=Object(d.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=i,t.next=3,e.getAddress();case 3:t.t1=t.sent,(0,t.t0)(t.t1);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}e?function(){t.apply(this,arguments)}():i("")}),[e]),s}(r);return Object(M.jsx)(S.Provider,{value:{provider:s,contract:c,signer:r,address:o},children:i})},B=n(262),E=n.n(B),U=n(275),A=n(272),_=n(166),I=n.p+"static/media/swapper_logo.4840bddf.png",P=n(50),W="0x2cd2664Ce5639e46c6a3125257361e01d0213657",N=new E.a({network:"binance",cacheProvider:!0,providerOptions:{walletconnect:{package:U.a,options:{appName:"Useless",network:"binance",rpc:{56:"https://bsc-dataseed1.binance.org:443"},chainId:56}}}});var R=function(e,t,n){var s=Object(a.useState)(0),i=Object(u.a)(s,2),r=i[0],c=i[1];return Object(a.useEffect)((function(){function a(){return(a=Object(d.a)(l.a.mark((function a(){var s,i;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(s=new k.a.Contract(W,_,t),"1"===n){a.next=8;break}return a.next=4,s.balanceOf(e);case 4:a.t0=a.sent,i=1e-9*a.t0,a.next=12;break;case 8:return a.next=10,t.getBalance();case 10:a.t1=a.sent,i=1e-18*a.t1;case 12:c(i);case 13:case"end":return a.stop()}}),a)})))).apply(this,arguments)}e&&t?function(){a.apply(this,arguments)}():c(0)}),[e,t,n]),r},z=function(e,t,n,a,s){return t.sendTransaction({from:t.address,to:a.address,value:k.a.utils.parseEther(s),gasLimit:k.a.utils.hexlify(15e5)}).then((function(e){return e.wait()}))},Q=function(e,t,n,a,s){return s=k.a.utils.parseUnits(s,"gwei"),n.functions.approve(a.address,s).then((function(e){return e.wait().then((function(e){return a.functions.sellUselessForBNB(s,{gasLimit:k.a.utils.hexlify(15e5)}).then((function(e){return e.wait()}))}))}))},q=function(e,t,n,a,s,i){return s=k.a.utils.parseUnits(s,"gwei"),n.functions.approve(a.address,s).then((function(t){return t.wait().then((function(t){return a.functions.uselessBypass(k.a.utils.getAddress(e),s).then((function(e){return e.wait()}))}))}))},L=function(e){var t=e.action,n=e.quantity,s=e.onQuantity,i=Object(o.a)(e,["action","quantity","onQuantity"]),r=Object(a.useContext)(S),u=(r.provider,r.contract,r.signer),p=r.address,l=R(p,u,t);return console.log(t),Object(M.jsxs)(y.a,Object(c.a)(Object(c.a)({},i),{},{children:[Object(M.jsx)(y.a,{direction:"row",alignItems:"center",justifyContent:"space-between",children:Object(M.jsxs)(b.a,{sx:{fontSize:".8em"},children:["Balance: ",l.toFixed(4)," ","2"===t?"USELESS":"BNB"]})}),Object(M.jsx)(f.a,{autoFocus:!0,margin:"dense",id:"name",label:"Quantity",value:n,onChange:s,fullWidth:!0}),Object(M.jsx)(y.a,{direction:"row",justifyContent:"flex-end"})]}))},J=function(e){e.action;var t=e.quantity,n=e.onQuantity,s=e.receiver,i=e.onReceiver,r=Object(o.a)(e,["action","quantity","onQuantity","receiver","onReceiver"]),u=Object(a.useContext)(S),p=(u.provider,u.contract,u.signer),l=u.address,d=R(l,p,1);return Object(M.jsxs)(y.a,Object(c.a)(Object(c.a)({},r),{},{children:[Object(M.jsx)(f.a,{autoFocus:!0,margin:"dense",label:"Receiver",value:s,onChange:i,fullWidth:!0}),Object(M.jsx)(y.a,{direction:"row",alignItems:"center",justifyContent:"space-between",children:Object(M.jsxs)(b.a,{sx:{fontSize:".8em"},children:["Balance: ",d.toFixed(4)," USELESS"]})}),Object(M.jsx)(f.a,{autoFocus:!0,margin:"dense",label:"Quantity",type:"email",value:t,onChange:n,fullWidth:!0}),Object(M.jsx)(y.a,{direction:"row",justifyContent:"flex-end"})]}))},D=function(e){Object(P.a)();var t=Object(a.useState)(!1),n=Object(u.a)(t,2),s=n[0],i=n[1],r=Object(a.useContext)(S),c=(r.provider,r.contract),o=r.signer,p=r.address,l=Object(a.useState)("1"),d=Object(u.a)(l,2),f=d[0],F=d[1],B=Object(a.useState)(""),E=Object(u.a)(B,2),U=E[0],A=E[1],N=Object(a.useState)(""),R=Object(u.a)(N,2),D=R[0],V=R[1],G=Object(a.useState)("ACCEPT"),H=Object(u.a)(G,2),K=H[0],X=(H[1],function(e){A(e.target.value)});return Object(M.jsxs)(m.a,{open:e.open,onClose:e.onClose,"aria-labelledby":"form-dialog-title",fullWidth:!0,children:[Object(M.jsx)(j.a,{id:"form-dialog-title",children:Object(M.jsxs)(y.a,{direction:"row",justifyContent:"space-between",alignItems:"center",p:".5vh",children:[Object(M.jsxs)(y.a,{direction:"row",alignItems:"center",spacing:".5vw",children:[Object(M.jsx)("img",{src:I,height:"30vh"}),Object(M.jsx)(b.a,{sx:{fontSize:".8em"},children:Object(M.jsx)("b",{children:"SWAP"})})]}),Object(M.jsx)(v.a,{variant:"outlined",size:"small",color:"success",label:"Account: ".concat(p.slice(0,4),"...").concat(p.slice(38))})]})}),Object(M.jsx)(x.a,{children:Object(M.jsxs)(y.a,{spacing:1,children:[Object(M.jsxs)(O.a,{onChange:function(e,t){F(t)},indicatorColor:"primary","aria-label":"secondary tabs example",value:f,children:[Object(M.jsx)(h.a,{label:"Buy",value:"1"}),Object(M.jsx)(h.a,{label:"Sell",value:"2"}),Object(M.jsx)(h.a,{label:"Send",value:"3"})]}),"3"!==f&&Object(M.jsx)(L,{action:f,qauntity:U,onQuantity:X}),"3"===f&&Object(M.jsx)(J,{hidden:"3"===f||"2"===f,receiver:D,onReceiver:function(e){V(e.target.value)},onQuantity:X})]})}),Object(M.jsx)(w.a,{children:Object(M.jsxs)(y.a,{direction:"row",spacing:2,sx:{pr:2,pb:2},children:[Object(M.jsx)(g.a,{size:"small",onClick:e.onClose,color:"primary",variant:"contained",children:"Cancel"}),Object(M.jsx)(g.a,{size:"small",onClick:function(e){var t,n=new k.a.Contract(W,_,o);t="1"===f?z:"2"===f?Q:q,i(!0),t(p,o,n,c,U,D).then((function(e){A(""),i(!1)})).catch((function(e){i(!1)}))},color:"primary",variant:"contained",children:K})]})}),Object(M.jsx)(C.a,{open:s,sx:{color:"#ffffff",zIndex:function(e){return e.zIndex.modal+1}},children:Object(M.jsx)(T.a,{color:"inherit"})})]})},V=function(e){var t=e.open,n=Object(o.a)(e,["open"]),s=function(e){var t=Object(a.useState)(null),n=Object(u.a)(t,2),s=n[0],i=n[1];return Object(a.useEffect)((function(){function t(){return(t=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.connect();case 3:t=e.sent,i(new k.a.providers.Web3Provider(t)),e.next=16;break;case 7:if(e.prev=7,e.t0=e.catch(0),void 0===e.t0&&alert("If you are having trouble connecting to MetaMask, please check if you still have a pending connection request"),console.error(e.t0,s),null===s){e.next=15;break}return i(null),e.next=15,s.disconnect();case 15:throw e.t0;case 16:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function n(){return(n=Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===s||!s.connected){e.next=11;break}return e.prev=1,e.next=4,s.disconnect();case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),alert("Failed to disconnect wallet");case 9:return e.next=11,s.disconnect();case 11:i(null);case 12:case"end":return e.stop()}}),e,null,[[1,6]])})))).apply(this,arguments)}e?function(){t.apply(this,arguments)}():function(){n.apply(this,arguments)}()}),[e]),s}(!0===t);return Object(M.jsx)(F,{provider:s,abi:A,contractAddress:"0x253B07ac48Aa0E9476cE80de61710478dF0d63a5",children:null!==s&&Object(M.jsx)(D,Object(c.a)({open:t&&null!==s},n))})},G=n(574),H=n(274),K=Object(H.a)({palette:{mode:"dark",primary:{main:"#EAB729",dark:"#EAB729",contrastText:"#000000"}}});function X(){var e=s.a.useState(!1),t=Object(u.a)(e,2),n=t[0],a=t[1];return Object(M.jsxs)(G.a,{theme:K,children:[Object(M.jsx)(y.a,{alignItems:"center",justifyContent:"center",sx:{height:"100vh",p:"1vw"},children:Object(M.jsx)(g.a,{variant:"contained",color:"primary",onClick:function(){a(!0)},children:"Click here to claim your free Useless IPad"})}),Object(M.jsx)(V,{open:n,onClose:function(){a(!1)}})]})}var Y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,583)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),s(e),i(e),r(e)}))};r.a.render(Object(M.jsx)(s.a.StrictMode,{children:Object(M.jsx)(X,{})}),document.getElementById("root")),Y()}},[[522,1,2]]]);
//# sourceMappingURL=main.7a60f3b3.chunk.js.map