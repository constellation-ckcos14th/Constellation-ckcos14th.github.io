import{o as e,b as o,e as t,f as r,g as p,T as W,j as Y,k as $,l as J,d as q,t as n,m as B,q as D,a as M,F as g,v as b,x as f,y as V,z as U,u as k,A as v,B as R}from"./@vue-d4b0535e.js";import{c as Z}from"./feather-icons-c95bfe13.js";import{c as X,a as K}from"./vue-router-06e53ca0.js";import"./postcss-c02881cb.js";import{s as H}from"./vue-feather-944e88b8.js";import"./picocolors-ce8d2921.js";import"./nanoid-d300f826.js";(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))d(i);new MutationObserver(i=>{for(const _ of i)if(_.type==="childList")for(const m of _.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&d(m)}).observe(document,{childList:!0,subtree:!0});function l(i){const _={};return i.integrity&&(_.integrity=i.integrity),i.referrerPolicy&&(_.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?_.credentials="include":i.crossOrigin==="anonymous"?_.credentials="omit":_.credentials="same-origin",_}function d(i){if(i.ep)return;i.ep=!0;const _=l(i);fetch(i.href,_)}})();const tt={class:"navbar"},et={methods:{change_background(){var a=ot(0,88.999),c="url(/background/",l=c.concat(a).concat(".png)");return console.log(a),this.$refs.appqq.style.setProperty("--after-background-image",l),-1}},mounted(){console.log(`meow
`);const a=this.$refs.appqq;console.log(a),this.change_background()}};function ot(a,c){return Math.floor(Math.random()*c)+a}const st=Object.assign(et,{__name:"App",setup(a){return Z.replace(),(c,l)=>{const d=$("navbar"),i=$("router-view");return e(),o("div",{ref:"appqq",class:"app",onAnimationiteration:l[0]||(l[0]=(..._)=>c.change_background&&c.change_background(..._))},[t("div",tt,[r(d),r(i,null,{default:p(({Component:_})=>[r(W,{name:"page-opacity",mode:"out-in"},{default:p(()=>[(e(),Y(J(_)))]),_:2},1024)]),_:1})])],544)}}}),w=a=>(B("data-v-45123576"),a=a(),D(),a),nt={class:"home-page tab-page"},it=w(()=>t("h1",{id:"title"},"台北市立建國高級中學",-1)),lt=w(()=>t("h1",null,"科學班第14屆成果發表",-1)),at=w(()=>t("h2",null,"舉辦時間",-1)),ct=w(()=>t("br",null,null,-1)),rt=w(()=>t("br",null,null,-1)),dt=w(()=>t("h2",null,"舉辦地點",-1)),_t=w(()=>t("br",null,null,-1)),ut=w(()=>t("h2",null,"線上參與",-1)),pt=w(()=>t("span",null,"除了線下舉辦，",-1)),ht=w(()=>t("br",null,null,-1)),mt=w(()=>t("span",null,"我們也會同步在YouTube直播",-1)),vt=w(()=>t("br",null,null,-1)),gt=w(()=>t("h2",null,"活動宗旨與簡介",-1)),bt=w(()=>t("h2",null,"大合照",-1)),ft=q({__name:"Home",setup(a){const c="groupPhoto.jpg",l="2024年5月20 (週一)",d="13:00 - 17:00",i="100台北市中正區南海路56號",_="本獨立研究成果發表會旨在提倡科學研究，藉由各組別的成果報告，認識不同科目的專業領域，提升大家對於科學的愛好以及熱忱。本校科學班的專題研究組別共分成數學、物理、化學、生物、資訊、地科六個科目，各組對該科的知識內容進行更深一層的探討，結合文獻的探究及自己的創意，完成一篇專題獨立研究。藉由辦理本活動鼓勵科學班學生積極投入實驗研究，並讓同學們能有機會於本活動發表兩年來努力得到的成果。除此之外也希望透過這個活動促進校際間的學術交流，且讓大家能一睹學生們在專題研究過程中的收穫與成長。",m="https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=Nm8zcm80dm5jYzVoOTg3am9oMXVhdWFpZHQgNTAzYjEzODczMGZmMzY3ZGE1MzE4MDgwMTk1YTNlZjUwNDQyZTJkZjBlOGVhYjJjMGE1MjAyMTdhZDE1OTY0NUBn&tmsrc=503b138730ff367da5318080195a3ef50442e2df0e8eab2c0a520217ad159645%40group.calendar.google.com",A="https://goo.gl/maps/kWBUJyyp6iXVHmib8",y="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.0972926964214!2d121.51011581643546!3d25.030772083973787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a9483fb05b03%3A0xe2d4710b90afdf1a!2z6Ie65YyX5biC56uL5bu65ZyL6auY57Sa5Lit5a24!5e0!3m2!1szh-TW!2stw!4v1680545181231!5m2!1szh-TW!2stw",C="https://www.youtube.com/@constellation-ckcos14th";return(u,S)=>(e(),o("div",nt,[it,lt,t("div",{class:"event-info div-page"},[t("div",{id:"qq",class:"time-location"},[t("div",{class:"event-time"},[at,t("div",{class:"event-time-details"},[t("span",null,n(l)),ct,t("span",null,n(d)),rt,t("a",{href:m,target:"_blank",rel:"noopener"},"加入Google Calendar")])]),t("div",{class:"event-location"},[dt,t("div",{class:"event-location-details"},[t("span",null,n(i)),_t,t("a",{href:A,target:"_blank",rel:"noopener"},"在Google地圖上查看")])]),t("div",{class:"event-youtube"},[ut,t("div",{class:"event-youtube-details"},[pt,ht,mt,vt,t("a",{href:C,target:"_blank",rel:"noopener"},"直播(與存檔)連結")])])]),t("iframe",{src:y,width:"100%",height:"360",style:{border:"0"},allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"})]),t("div",{class:"div-page"},[t("div",{class:"description"},[gt,t("p",null,n(_))])]),t("div",{class:"group-photo div-page"},[bt,t("img",{src:c,alt:"Group Photo"})])]))}});const T=(a,c)=>{const l=a.__vccOpts||a;for(const[d,i]of c)l[d]=i;return l},kt=T(ft,[["__scopeId","data-v-45123576"]]),I=a=>(B("data-v-a76b43f7"),a=a(),D(),a),yt={class:"tab-page"},$t=I(()=>t("h1",null,"About Us",-1)),wt=I(()=>t("h2",null,"主題含意",-1)),Ct=I(()=>t("br",null,null,-1)),xt={class:"music-mv div-page"},At=I(()=>t("h2",null,"成發主題MV",-1)),St=I(()=>t("div",{id:"wrapper"},[t("iframe",{src:"https://www.youtube-nocookie.com/embed/4L9CUCTfsyQ?rel=0",title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:""})],-1)),Nt={class:"expand-button"},Mt={key:0,class:"expanded-content font-sans"},Lt=I(()=>t("h2",null,"宣傳圖",-1)),jt=I(()=>t("h2",null,"邀請函",-1)),Tt=q({__name:"About",setup(a){const c="invitationLetter.png",l="promotionalImage.png",d=M(!1);function i(){d.value=!d.value}const _="「Constellation」中文翻譯成星座，相信大家對於這高中課內單字都相當熟悉，但如果我們回歸到這個字的本身，con-這個前綴詞源自於拉丁文，意味著一起、共同、聚集；而-stella-則有如stellar一詞般，代表著一顆一顆閃閃發亮的恆星。將兩個單元合併在一起，我們就得到了Constellation—綻放著光芒的群星。",m="科學班走過了十四年的歲月，各個學長們都已褪去成長的外殼，成為了社會上的明日之星。而我們當然也無一不例外，自入學以來，我們各個都是一顆顆閃閃發光的恆星，大家聚在一起，有歡笑、有悲傷、有吵架、有團結，但每位同學都以自己的知識、才智、專長為燃料，焚盡自己的身心靈，在各個方面發光發熱。其中最明顯的莫過於專題研究，我們充分發揮著科學班的本業，利用科學方法，步步謹慎為營，劈拓科學尖端的新知。雖然在這條路上，我們縱一葦之所如般，有時迷茫、有時絕望，但我們依然緊繫著於心中那宛如明燈的信念，秉持著追根究柢的精神，在無垠的蒼穹中，各自成為照亮終點的那顆熠熠生輝的新星。",A="歌詞",y=`(大合唱時，歡迎跟著唱)

`,C=`
(前奏)

`,u=`(間奏)

`,S=`迷霧中 的寒光
下一段路在何方
旅人征途的去向
漫無目的的蒼茫
`,N=`海平線上的夕陽
乘載孤獨和沮喪
逐漸朦朧了曾經的悵惘

`,G=`仰望著黑夜中
無邊無際的蒼穹
流星劃過了天空
漫漫長夜的間奏ㄣ
`,L=`或許厭倦隨波逐流
剩下風浪陪伴左右
還未遺忘曾許下的承諾

`,P=`當張開了雙手寒冷劃過指尖
留下熒然的微光點亮了這詩篇
默默地 在每個時節
依然綻放著 不論日夜

`,x=`獨自守著寂靜的晚場
等到黑夜才能欣賞
一點一點的微光
雖然不像是耀眼的太陽
卻還是隱約指引前方
譜著散落音符的樂章
也能歌頌夜色輝煌
沒有潔白的月亮
卻依然可以相映著星光
點亮了海面上 無數微小希望

`,s=[{text:C,class:"font-sans text-gray-400"},{text:S,class:"font-sans text-blue-400"},{text:N,class:"font-sans text-orange-300"},{text:G,class:"font-sans text-purple-400"},{text:L,class:"font-sans text-green-500"},{text:P,class:"font-sans text-gray-300"},{text:x,class:"font-sans text-gray-300"},{text:u,class:"font-sans text-gray-400"},{text:P,class:"font-sans text-gray-300"},{text:x,class:"font-sans text-gray-300"},{text:x,class:"font-sans text-gray-300"}];return(j,fn)=>(e(),o("div",yt,[$t,t("div",{class:"theme div-page"},[wt,t("p",null,n(_)),Ct,t("p",null,n(m))]),t("div",xt,[At,St,t("div",null,[t("div",{class:"infobar",onClick:i},[t("span",{class:"title"},n(A)),t("button",Nt,n(d.value?"▲":"▼"),1)]),d.value?(e(),o("div",Mt,[t("p",null,n(y)),(e(),o(g,null,b(s,(O,Q)=>t("pre",{key:Q,class:V(["font-sans",O.class])},n(O.text),3)),64))])):f("",!0)])]),t("div",{class:"promotionalImage div-page"},[Lt,t("img",{src:l,alt:"Promotional Image"})]),t("div",{class:"invitation div-page"},[jt,t("img",{src:c,alt:"Invitation Letter"})])]))}});const It=T(Tt,[["__scopeId","data-v-a76b43f7"]]),z=[{subject:"math",list:[{id:30,title:"內心、旁心，兩心一家親",author:"鍾承軒",description:"",photos:["30.png"]},{id:26,title:"低維度的cap set大小探討",author:"鮑立仁",description:"",photos:["26.png"]},{id:21,title:"Frieze Pattern 結構與性質之探討",author:"彭可翰",description:"",photos:["21.png"]},{id:2,title:"彩球神算",author:"王品硯",description:"",photos:["2.png"]},{id:23,title:"得知紙牌總和奇偶的最小抽牌次數",author:"黃羶宇",description:"",photos:["23.png"]}]},{subject:"physics",list:[{id:22,title:"米氏散射對奈米粒子的散射光譜之影響",author:`曾宥鈞
林柏安`,description:"",photos:["22.png"]},{id:27,title:"量子漫步演算法模擬股票走勢機率分布",author:"戴聖文",description:"",photos:["27.png"]},{id:14,title:"利用六軸加速度計與SLAM演算法回饋控制之車輛動態防側傾駕駛輔助系統",author:"邱威翔",description:"",photos:["14.png"]},{id:18,title:"關於同心管機器人的使用和研究",author:"陳芃聿",description:"",photos:["18.png"]},{id:29,title:"以數據驅動方式探究類星體於可見光與無線電光譜之性質關聯",author:"謝濟遠",description:"",photos:["29.png"]}]},{subject:"chemistry",list:[{id:3,title:"定向演化PsiK酶突變株與血清素之製藥潛在應用",author:"朱秝辰",description:"",photos:["3.png"]},{id:8,title:"透過超音波敏感性聚合物微胞達成藥物投遞減少根管治療癒後復發的應用",author:`林奕丞
祝楷棣`,description:"",photos:["8.png"]},{id:11,title:"甲氧基修飾吲哚五號碳之全合成與優化",author:"林峻亨",description:"",photos:["11.png"]}]},{subject:"biology",list:[{id:25,title:"PsiM 與各種受質的 hplc 反應",author:"蕭宇鴻",description:"",photos:["25.png"]},{id:19,title:"牙本質黏著劑於氧化鋯-複合材料界面之黏著性能探討",author:"陳宥潾",description:"",photos:["19.png"]},{id:5,title:"運用化學同位素標記開發一鍋化GHB檢測之定量方法",author:"宋秉倫",description:"",photos:["5.png"]},{id:24,title:"選擇性促進黏膜上皮再生的複合生物相容材料之研究",author:"楊爵禧",description:"",photos:["24.png"]},{id:6,title:"以自微乳化系統製作米諾地爾的新型傳遞方式",author:"李佳承",description:"",photos:["6.png"]},{id:9,title:"HrmJ酵素反應之研究",author:"林威樂",description:"",photos:["9.png"]},{id:12,title:"研究TXNDC5蛋白對新內膜增生的影響機制",author:"林庭宇",description:"",photos:["12.png"]},{id:13,title:"DNA甲基轉移酶3A調控第二型傳統樹突細胞功能",author:"林竣宇",description:"",photos:["13.png"]}]},{subject:"earth",list:[{id:20,title:"以Gaia DR3星點觀測數據進行疏散星團NGC 2420與NGC 2243的初步探討",author:"陳韋達",description:"",photos:["20.png"]},{id:28,title:"2006年至2019年大屯火山地區地溫與噴氣孔CO₂通量變動紀錄及其特性分析",author:"謝佾熙",description:"",photos:["28.png"]}]},{subject:"infor",list:[{id:7,title:"利用史書中地理空間資訊重建漢代西域國家地圖",author:"林昀翰",description:"",photos:["7.png"]},{id:4,title:"利用U-Net切割大腦皮質層並協助提早發現病人大腦的變化",author:"吳柏曜",description:"",photos:["4.png"]},{id:1,title:"自動化地理對位",author:"王以安",description:"",photos:["1.png"]},{id:15,title:"四色定理中規則集之優化",author:"施竣耀",description:"",photos:["15.png"]}]}];const h=a=>(B("data-v-2b11ce3b"),a=a(),D(),a),zt={class:"tab-page"},Bt=h(()=>t("h1",null,"Categories",-1)),Dt=h(()=>t("br",null,null,-1)),Et={class:"flex justify-center space-x-4 ml-[2%] tab"},Ft=["onClick"],Gt={class:"px-18 py-4"},Pt={key:0},Ht=h(()=>t("div",{class:"div-page"},[t("h2",null,"指導教師：陳佩如老師")],-1)),Ot={class:"div-page"},Yt=h(()=>t("h2",null,"作品列表",-1)),qt=h(()=>t("h3",null,"(點擊作品名稱可查看詳細資訊)",-1)),Vt=h(()=>t("thead",null,[t("tr",null,[t("th",null,"Title"),t("th",null,"Authors")])],-1)),Ut=["onClick"],Zt={key:0,class:"popup"},Qt={class:"popup__title"},Wt={class:"no-top-bottom-margin"},Jt={class:"popup__author"},Rt={class:"no-top-bottom-margin"},Xt={class:"popup__content"},Kt=["src","alt"],te={class:"popup__description"},ee={key:1},oe=h(()=>t("div",{class:"div-page"},[t("h2",null,"指導教師：賴奕帆老師")],-1)),se={class:"div-page"},ne=h(()=>t("h2",null,"作品列表",-1)),ie=h(()=>t("h3",null,"(點擊作品名稱可查看詳細資訊)",-1)),le=h(()=>t("thead",null,[t("tr",null,[t("th",null,"Title"),t("th",null,"Authors")])],-1)),ae=["onClick"],ce={key:0,class:"popup"},re={class:"popup__title"},de={class:"no-top-bottom-margin"},_e={class:"popup__author"},ue={class:"no-top-bottom-margin"},pe={class:"popup__content"},he=["src","alt"],me={class:"popup__description"},ve={key:2},ge=h(()=>t("div",{class:"div-page"},[t("h2",null,"指導教師：劉彥孝老師")],-1)),be={class:"div-page"},fe=h(()=>t("h2",null,"作品列表",-1)),ke=h(()=>t("h3",null,"(點擊作品名稱可查看詳細資訊)",-1)),ye=h(()=>t("thead",null,[t("tr",null,[t("th",null,"Title"),t("th",null,"Authors")])],-1)),$e=["onClick"],we={key:0,class:"popup"},Ce={class:"popup__title"},xe={class:"no-top-bottom-margin"},Ae={class:"popup__author"},Se={class:"no-top-bottom-margin"},Ne={class:"popup__content"},Me=["src","alt"],Le={class:"popup__description"},je={key:3},Te=h(()=>t("div",{class:"div-page"},[t("h2",null,"指導教師：魏宏仁老師")],-1)),Ie={class:"div-page"},ze=h(()=>t("h2",null,"作品列表",-1)),Be=h(()=>t("h3",null,"(點擊作品名稱可查看詳細資訊)",-1)),De=h(()=>t("thead",null,[t("tr",null,[t("th",null,"Title"),t("th",null,"Authors")])],-1)),Ee=["onClick"],Fe={key:0,class:"popup"},Ge={class:"popup__title"},Pe={class:"no-top-bottom-margin"},He={class:"popup__author"},Oe={class:"no-top-bottom-margin"},Ye={class:"popup__content"},qe=["src","alt"],Ve={class:"popup__description"},Ue={key:4},Ze=h(()=>t("div",{class:"div-page"},[t("h2",null,"指導教師：葉昭松老師")],-1)),Qe={class:"div-page"},We=h(()=>t("h2",null,"作品列表",-1)),Je=h(()=>t("h3",null,"(點擊作品名稱可查看詳細資訊)",-1)),Re=h(()=>t("thead",null,[t("tr",null,[t("th",null,"Title"),t("th",null,"Authors")])],-1)),Xe=["onClick"],Ke={key:0,class:"popup"},to={class:"popup__title"},eo={class:"no-top-bottom-margin"},oo={class:"popup__author"},so={class:"no-top-bottom-margin"},no={class:"popup__content"},io=["src","alt"],lo={key:0},ao=h(()=>t("a",{href:"/works2/28/專題研究札記.html"},"專題研究札記(點擊後即可訪問)",-1)),co=[ao],ro={class:"popup__description"},_o={key:5},uo=h(()=>t("div",{class:"div-page"},[t("h2",null,"指導教師：潘威歷老師")],-1)),po={class:"div-page"},ho=h(()=>t("h2",null,"作品列表",-1)),mo=h(()=>t("h3",null,"(點擊作品名稱可查看詳細資訊)",-1)),vo=h(()=>t("thead",null,[t("tr",null,[t("th",null,"Title"),t("th",null,"Authors")])],-1)),go=["onClick"],bo={key:0,class:"popup"},fo={class:"popup__title"},ko={class:"no-top-bottom-margin"},yo={class:"popup__author"},$o={class:"no-top-bottom-margin"},wo={class:"popup__content"},Co=["src","alt"],xo={class:"popup__description"},Ao={__name:"Categories",setup(a){const c=M(["數學","物理","化學","生物","地科","資訊"]);let l=M("數學");const d=z[0].list,i=z[1].list,_=z[2].list,m=z[3].list,A=z[4].list,y=z[5].list,C=M(!1),u=M(null);function S(L){document.body.classList.add("popup-show"),u.value=L,C.value=!0}function N(){document.body.classList.add("popup-show"),C.value=!1,u.value=null}function G(L){l.value=L}return U(()=>{window.addEventListener("keydown",function(L){L.key==="Escape"&&N()})}),(L,P)=>{const x=$("center");return e(),o("div",zt,[Bt,Dt,t("div",Et,[(e(!0),o(g,null,b(c.value,s=>(e(),o("div",{key:s,onClick:j=>G(s),class:V(["py-[1.5%] px-[2%] text-center font-bold rounded-xl hover:bg-cyan-700",k(l)===s?"bg-cyan-200 text-gray-700 hover:text-white font-bold":"text-white bg-cyan-950"])},n(s),11,Ft))),128))]),t("div",Gt,[k(l)==="數學"?(e(),o("div",Pt,[Ht,t("div",Ot,[Yt,qt,r(x,null,{default:p(()=>[t("table",null,[Vt,t("tbody",null,[(e(!0),o(g,null,b(k(d),s=>(e(),o("tr",{key:s.id},[t("td",{onClick:j=>S(s),class:"touch title",ref_for:!0,ref:"wrap"},n(s.title),9,Ut),t("td",null,n(s.author),1)]))),128))])])]),_:1}),C.value?(e(),o("div",Zt,[t("div",Qt,[t("h2",Wt,n(u.value.title),1),t("button",{class:"close-btn",onClick:N,title:"按Esc也可以關掉喔"},"🞫")]),t("div",Jt,[t("h4",Rt,n(u.value.author),1)]),t("div",Xt,[(e(!0),o(g,null,b(u.value.photos,s=>(e(),o("div",{key:s.id},[t("img",{src:"/works/"+s,class:"works-photo",alt:"/works/"+s},null,8,Kt)]))),128)),t("p",te,n(u.value.description),1)])])):f("",!0)])])):f("",!0),k(l)==="物理"?(e(),o("div",ee,[oe,t("div",se,[ne,ie,r(x,null,{default:p(()=>[t("table",null,[le,t("tbody",null,[(e(!0),o(g,null,b(k(i),s=>(e(),o("tr",{key:s.id},[t("td",{onClick:j=>S(s),class:"touch title"},n(s.title),9,ae),t("td",null,n(s.author),1)]))),128))])])]),_:1}),C.value?(e(),o("div",ce,[t("div",re,[t("h2",de,n(u.value.title),1),t("button",{class:"close-btn",onClick:N,title:"按Esc也可以關掉喔"},"🞫")]),t("div",_e,[t("h4",ue,n(u.value.author),1)]),t("div",pe,[(e(!0),o(g,null,b(u.value.photos,s=>(e(),o("div",{key:s.id},[t("img",{src:"/works/"+s,class:"works-photo",alt:"/works/"+s},null,8,he)]))),128)),t("p",me,n(u.value.description),1)])])):f("",!0)])])):f("",!0),k(l)==="化學"?(e(),o("div",ve,[ge,t("div",be,[fe,ke,r(x,null,{default:p(()=>[t("table",null,[ye,t("tbody",null,[(e(!0),o(g,null,b(k(_),s=>(e(),o("tr",{key:s.id},[t("td",{onClick:j=>S(s),class:"touch title"},n(s.title),9,$e),t("td",null,n(s.author),1)]))),128))])])]),_:1}),C.value?(e(),o("div",we,[t("div",Ce,[t("h2",xe,n(u.value.title),1),t("button",{class:"close-btn",onClick:N,title:"按Esc也可以關掉喔"},"🞫")]),t("div",Ae,[t("h4",Se,n(u.value.author),1)]),t("div",Ne,[(e(!0),o(g,null,b(u.value.photos,s=>(e(),o("div",{key:s.id},[t("img",{src:"/works/"+s,class:"works-photo",alt:"/works/"+s},null,8,Me)]))),128)),t("p",Le,n(u.value.description),1)])])):f("",!0)])])):f("",!0),k(l)==="生物"?(e(),o("div",je,[Te,t("div",Ie,[ze,Be,r(x,null,{default:p(()=>[t("table",null,[De,t("tbody",null,[(e(!0),o(g,null,b(k(m),s=>(e(),o("tr",{key:s.id},[t("td",{onClick:j=>S(s),class:"touch title"},n(s.title),9,Ee),t("td",null,n(s.author),1)]))),128))])])]),_:1}),C.value?(e(),o("div",Fe,[t("div",Ge,[t("h2",Pe,n(u.value.title),1),t("button",{class:"close-btn",onClick:N,title:"按Esc也可以關掉喔"},"🞫")]),t("div",He,[t("h4",Oe,n(u.value.author),1)]),t("div",Ye,[(e(!0),o(g,null,b(u.value.photos,s=>(e(),o("div",{key:s.id},[t("img",{src:"/works/"+s,class:"works-photo",alt:"/works/"+u.value.mark+".jpg"},null,8,qe)]))),128)),t("p",Ve,n(u.value.description),1)])])):f("",!0)])])):f("",!0),k(l)==="地科"?(e(),o("div",Ue,[Ze,t("div",Qe,[We,Je,r(x,null,{default:p(()=>[t("table",null,[Re,t("tbody",null,[(e(!0),o(g,null,b(k(A),s=>(e(),o("tr",{key:s.id},[t("td",{onClick:j=>S(s),class:"touch title"},n(s.title),9,Xe),t("td",null,n(s.author),1)]))),128))])])]),_:1}),C.value?(e(),o("div",Ke,[t("div",to,[t("h2",eo,n(u.value.title),1),t("button",{class:"close-btn",onClick:N,title:"按Esc也可以關掉喔"},"🞫")]),t("div",oo,[t("h4",so,n(u.value.author),1)]),t("div",no,[(e(!0),o(g,null,b(u.value.photos,s=>(e(),o("div",{key:s.id},[t("img",{src:"/works/"+s,class:"works-photo",alt:"/works/"+s},null,8,io)]))),128)),u.value.id==28?(e(),o("div",lo,co)):f("",!0),t("p",ro,n(u.value.description),1)])])):f("",!0)])])):f("",!0),k(l)==="資訊"?(e(),o("div",_o,[uo,t("div",po,[ho,mo,r(x,null,{default:p(()=>[t("table",null,[vo,t("tbody",null,[(e(!0),o(g,null,b(k(y),s=>(e(),o("tr",{key:s.id},[t("td",{onClick:j=>S(s),class:"touch title"},n(s.title),9,go),t("td",null,n(s.author),1)]))),128))])])]),_:1}),C.value?(e(),o("div",bo,[t("div",fo,[t("h2",ko,n(u.value.title),1),t("button",{class:"close-btn",onClick:N,title:"按Esc也可以關掉喔"},"🞫")]),t("div",yo,[t("h4",$o,n(u.value.author),1)]),t("div",wo,[(e(!0),o(g,null,b(u.value.photos,s=>(e(),o("div",{key:s.id},[t("img",{src:"/works/"+s,class:"works-photo",alt:"/works/"+s},null,8,Co)]))),128)),t("p",xo,n(u.value.description),1)])])):f("",!0)])])):f("",!0)])])}}},So=T(Ao,[["__scopeId","data-v-2b11ce3b"]]),No="/assets/schedule-c8e22f03.png";const Mo={data(){return{}}},E=a=>(B("data-v-ff8347f3"),a=a(),D(),a),Lo={class:"tab-page schedule-pg"},jo=E(()=>t("h1",null,"Schedule",-1)),To=E(()=>t("img",{src:No,alt:"學長對不起，我的網頁死了",style:{display:"block",margin:"auto"}},null,-1)),Io={class:"div-page"},zo=E(()=>t("h2",null,"夢紅樓 2F展演廳 (A組)",-1)),Bo={class:"div-page"},Do=E(()=>t("h2",null,"夢紅樓 4F國際會議廳 (B組)",-1));function Eo(a,c,l,d,i,_){const m=$("router-link");return e(),o("div",Lo,[jo,To,t("div",Io,[r(m,{to:{name:"Day1-2F"},class:"sublink"},{default:p(()=>[zo]),_:1})]),t("div",Bo,[r(m,{to:{name:"Day1-4F"},class:"sublink"},{default:p(()=>[Do]),_:1})])])}const Fo=T(Mo,[["render",Eo],["__scopeId","data-v-ff8347f3"]]);const F=a=>(B("data-v-ddd94d0c"),a=a(),D(),a),Go={class:"tab-page contact-pg"},Po=F(()=>t("h1",null,"Contact Us",-1)),Ho={class:"contact-methods",style:{height:"65vh"}},Oo={href:"https://www.instagram.com/constellation_ckcos14/",target:"_blank",rel:"noopener noreferrer"},Yo=F(()=>t("h2",null,"Instagram",-1)),qo={href:"https://github.com/constellation-ckcos14th/Constellation-ckcos14th.github.io",target:"_blank",rel:"noopener noreferrer"},Vo=F(()=>t("h2",null,"Github",-1)),Uo={href:"https://tellonym.me/cos14.ck",target:"_blank",rel:"noopener noreferrer"},Zo=F(()=>t("h2",null,"匿名Q&A",-1)),Qo={__name:"Contact",setup(a){return(c,l)=>{const d=$("dev"),i=$("router-link");return e(),o("div",Go,[Po,t("div",Ho,[t("a",Oo,[r(d,{class:"fa fa-instagram"}),v(),Yo]),t("a",qo,[r(d,{class:"fa fa-github",style:{color:"white"}}),v(),Vo]),t("a",Uo,[r(d,{class:"fa fa-question-circle"}),v(),Zo])]),t("div",null,[r(i,{to:{name:"Clear"}},{default:p(()=>[v("Clear")]),_:1})])])}}},Wo=T(Qo,[["__scopeId","data-v-ddd94d0c"]]),Jo=[{id:1,name:"王以安",position:"網站"},{id:2,name:"王品硯",position:"攝影"},{id:3,name:"朱秝辰",position:"文宣組長"},{id:4,name:"吳柏曜",position:"網管"},{id:5,name:"宋秉倫",position:"文案"},{id:6,name:"李佳承",position:"美術、成發曲人聲"},{id:7,name:"林昀翰",position:"編劇"},{id:8,name:"林亦丞",position:"影片組長、導演、編劇、攝影"},{id:9,name:"林威樂",position:"機動"},{id:10,name:"林柏安",position:"團服"},{id:11,name:"林峻亨",position:"手冊、成發曲剪輯"},{id:12,name:"林庭宇",position:"演員、成發曲人聲"},{id:13,name:"林竣宇",position:"編曲、成發曲人聲"},{id:14,name:"邱威翔",position:"總召、影片剪輯、成發曲人聲"},{id:15,name:"施竣耀",position:"希臘化時代埃及數學家"},{id:16,name:"祝楷棣",position:"海報"},{id:17,name:"陳芃聿",position:"機動"},{id:18,name:"陳宥潾",position:"主持人(二樓)、文案、導演、編劇、填詞"},{id:19,name:"陳韋達",position:"文宣總務"},{id:20,name:"彭可翰",position:"主持人(二樓)"},{id:21,name:"曾宥鈞",position:"公關長、演員"},{id:22,name:"黃羶宇",position:"場控、影片剪輯"},{id:23,name:"楊爵禧",position:"機動"},{id:24,name:"蕭宇鴻",position:"編曲"},{id:25,name:"鮑立仁",position:"機動"},{id:26,name:"戴聖文",position:"主持人(四樓)、演員"},{id:27,name:"謝佾熙",position:"副召、簡報、設備、場控"},{id:28,name:"謝濟遠",position:"主持人(四樓)、編曲、混音"},{id:29,name:"鍾承軒",position:"機動"}],Ro=[{id:1,name:"王以安",description:`哭哭哭哭哭哭
哭哭哭哭哭請告訴我哪裡要換行
哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭咪哭抱枕orzworzorzvorz哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭哭`},{id:2,name:"王品硯",description:"目前為空(之後會刪掉)"},{id:3,name:"朱秝辰",description:"目前為空(之後會刪掉)"},{id:4,name:"吳柏曜",description:"目前為空(之後會刪掉)"},{id:5,name:"宋秉倫",description:"目前為空(之後會刪掉)"},{id:6,name:"李佳承",description:"目前為空(之後會刪掉)"},{id:7,name:"林昀翰",description:"目前為空(之後會刪掉)"},{id:8,name:"林亦丞",description:"目前為空(之後會刪掉)"},{id:9,name:"林威樂",description:"目前為空(之後會刪掉)"},{id:10,name:"林柏安",description:"目前為空(之後會刪掉)"},{id:11,name:"林峻亨",description:"目前為空(之後會刪掉)"},{id:12,name:"林庭宇",description:"目前為空(之後會刪掉)"},{id:13,name:"林竣宇",description:"目前為空(之後會刪掉)"},{id:14,name:"邱威翔",description:"目前為空(之後會刪掉)"},{id:15,name:"施竣耀",description:`強強強強強
強強強強強
怪人
強強強強強
強強強強強
怪人
強強強強強
強強強強強
怪人
強強強強強
強強強強強
怪人
強強強強強
強強強強強
怪人
強強強強強
強強強強強
怪人
強強強強強
強強強強強
怪人
`},{id:16,name:"祝楷棣",description:"目前為空(之後會刪掉)"},{id:17,name:"陳芃聿",description:"目前為空(之後會刪掉)"},{id:18,name:"陳宥潾",description:"目前為空(之後會刪掉)"},{id:19,name:"陳韋達",description:"目前為空(之後會刪掉)"},{id:20,name:"彭可翰",description:"目前為空(之後會刪掉)"},{id:21,name:"曾宥鈞",description:"目前為空(之後會刪掉)"},{id:22,name:"黃羶宇",description:"目前為空(之後會刪掉)"},{id:23,name:"楊爵禧",description:"目前為空(之後會刪掉)"},{id:24,name:"蕭宇鴻",description:"目前為空(之後會刪掉)"},{id:25,name:"鮑立仁",description:"目前為空(之後會刪掉)"},{id:26,name:"戴聖文",description:"目前為空(之後會刪掉)"},{id:27,name:"謝佾熙",description:`哈嘍大家好，我是建中科學班第14屆第28席謝佾熙aka農夫樹Farmertree8✅
這次我的專題是有關大屯火山的數據分析，對不論我的專題或是地科有問題都可以來找我，但我可能比較笨一點QAQ
也可以私訊我IG/DC: Farmertree8`,photos:["28-1.jpg","28-2.jpg","28-3.jpg"]},{id:28,name:"謝濟遠",description:"目前為空(之後會刪掉)"},{id:29,name:"鍾承軒",description:"目前為空(之後會刪掉)"}];const Xo={class:"members-container"},Ko={class:"members-list"},ts=["onClick"],es={class:"member"},os={class:"member-name"},ss={class:"member-position"},ns={key:0,class:"popup"},is={class:"popup__title"},ls={class:"no-top-bottom-margin"},as={class:"popup__content"},cs={class:"popup__description"},rs=["src","alt"],ds={__name:"Members",setup(a){const c=M(!1),l=M(null);var d=Date.now()-300;function i(m){c.value!=!0&&Date.now()-d>250&&(l.value=m,c.value=!0)}function _(){c.value=!1,l.value=null,d=Date.now()}return U(()=>{window.addEventListener("keydown",function(m){m.key==="Escape"&&_()})}),(m,A)=>(e(),o("div",null,[t("div",Xo,[t("ul",Ko,[(e(!0),o(g,null,b(k(Jo),y=>(e(),o("li",{key:y.id},[t("div",{onClick:C=>i(k(Ro)[y.id-1])},[t("div",es,[t("div",os,n(y.name),1),t("div",ss,n(y.position),1)])],8,ts)]))),128))])]),c.value?(e(),o("div",ns,[t("div",is,[t("h2",ls,n(l.value.name),1),t("button",{class:"close-btn",onClick:_,title:"按Esc也可以關掉喔"},"🞫")]),t("div",as,[t("p",cs,n(l.value.description),1),(e(!0),o(g,null,b(l.value.photos,y=>(e(),o("div",{key:y.id},[t("img",{src:"/members/"+y,class:"members-photo",alt:"/members/"+y},null,8,rs)]))),128))])])):f("",!0)]))}},_s=[{mark:"A1",group:"生物",name:"蕭宇鴻",title:"PsiM蛋白定性分析"},{mark:"A1",group:"生物",name:"陳宥潾",title:"牙本質黏著劑於氧化鋯－複合材料界面之黏著性能探討"},{mark:"A1",group:"生物",name:"宋秉倫",title:"運用化學同位素標記開發一鍋化GHB檢測之定量方法"},{mark:"A1",group:"生物",name:"楊爵禧",title:"選擇性促進黏膜上皮再生的複合生物相容材料之研究"},{mark:"A2",group:"生物",name:"李佳承",title:"以自微乳化系統製作米諾地爾的新型傳遞方式"},{mark:"A2",group:"生物",name:"林威樂",title:"HrmJ酵素反應之研究"},{mark:"A2",group:"生物",name:"林庭宇",title:"酵母菌spo13突變體減數分裂時程與MOP之研究"},{mark:"A2",group:"生物",name:"林峻宇",title:"DNA甲基轉移酶3A調控第二型傳統樹突細胞功能"},{mark:"A3",group:"化學",name:"朱秝辰",title:"定向演化PsiK酶突變株與血清素之製藥潛在應用"},{mark:"A3",group:"化學",name:`林奕丞
祝楷棣`,title:"透過超音波敏感性聚合物微胞達成藥物投遞減少根管治療癒後復發的應用"},{mark:"A3",group:"化學",name:"林峻亨",title:"甲氧基修飾吲哚五號碳之全合成與優化高速旋轉物體的追蹤"},{mark:"A4",group:"數學",name:"鍾承軒",title:"內心，旁心，兩心一家親"},{mark:"A4",group:"數學",name:"鮑立仁",title:"低維度的cap set大小探討"},{mark:"A4",group:"數學",name:"彭可翰",title:"Frieze Pattern 結構與性質之探討"}];const us={class:"tab-page d1-2f nice-table"},ps=t("h1",null,"Schedule",-1),hs={class:"div-page"},ms=t("h2",null,"Day 1 | 夢紅樓 2F展演廳",-1),vs=t("tr",null,[t("th",null,"姓名"),t("th",null,"時間"),t("th",null,"組別"),t("th",null,"主題")],-1),gs={class:"title"},bs={class:"return-btn"},fs={data(){return{day1Floor2GroupList:_s}}},ks=Object.assign(fs,{__name:"ScheduleChild1",setup(a){return(c,l)=>{const d=$("router-link");return e(),o("div",us,[ps,t("div",hs,[ms,t("table",null,[vs,(e(!0),o(g,null,b(c.day1Floor2GroupList,i=>(e(),o("tr",{key:i.id},[t("td",null,n(i.name),1),t("td",null,n(i.mark),1),t("td",null,n(i.group),1),t("td",gs,n(i.title),1)]))),128))])]),t("div",bs,[r(d,{to:{name:"Schedule"},class:"link"},{default:p(()=>[v("返回")]),_:1})])])}}}),ys=[{mark:"B1",group:"物理",name:`曾宥鈞
林柏安`,title:"米氏散射對奈米粒子散射光譜之影響"},{mark:"B1",name:"戴聖文",group:"物理",title:"量子漫步演算法模擬股票走勢機率分布"},{mark:"B1",name:"邱威翔",group:"物理",title:`利用六軸加速計與SLAM演算法
回饋控制之車輛動態防傾斜駕駛輔助系統`},{mark:"B2",name:"陳芃聿",group:"物理",title:"關於同心管機器人的使用和研究"},{mark:"B2",name:"謝濟遠",group:"物理",title:`以數據驅動方式探究類星體於
可見光與無線電光譜之性質關聯`},{mark:"B2",name:"王品硯",group:"數學",title:"彩球神算"},{mark:"B2",name:"黃羶宇",group:"數學",title:"得知紙牌總和奇偶的最小抽排次數"},{mark:"B3",name:"林昀翰",group:"資訊",title:"利用史書中地理空間資訊重建漢代西域國家地圖"},{mark:"B3",name:"吳柏曜",group:"資訊",title:"利用U-Net切割大腦皮質層並協助提早發現病人大腦的變化"},{mark:"B3",group:"資訊",name:"王以安",title:"自動化地理對位"},{mark:"B3",group:"資訊",name:"施竣耀",title:"四色定理中規則集之優化"},{mark:"B4",group:"地科",name:"陳韋達",title:`以Gaia DR3星點觀測數據進行疏散星團NGC 2420與NGC 2243
的初步探討`},{mark:"B4",group:"地科",name:"謝佾熙",title:`2006年至2019年大屯火山地區地溫
與噴氣孔CO₂通量變動紀錄及其特性分析`}];const $s={class:"tab-page d1-4f"},ws=t("h1",null,"Schedule",-1),Cs={class:"div-page"},xs=t("h2",null,"Day 1 | 夢紅樓 4F國際會議廳",-1),As={class:"nice-table"},Ss=t("tr",null,[t("th",null,"姓名"),t("th",null,"時間"),t("th",null,"組別"),t("th",null,"主題")],-1),Ns={class:"title"},Ms={class:"return-btn"},Ls={data(){return{day1Floor4GroupList:ys}}},js=Object.assign(Ls,{__name:"ScheduleChild2",setup(a){return(c,l)=>{const d=$("router-link");return e(),o("div",$s,[ws,t("div",Cs,[xs,t("table",As,[Ss,(e(!0),o(g,null,b(c.day1Floor4GroupList,i=>(e(),o("tr",{key:i.id},[t("td",null,n(i.name),1),t("td",null,n(i.mark),1),t("td",null,n(i.group),1),t("td",Ns,n(i.title),1)]))),128))])]),t("div",Ms,[r(d,{to:{name:"Schedule"},class:"link"},{default:p(()=>[v("返回")]),_:1})])])}}}),Ts={},Is={style:{height:"105vh"}};function zs(a,c){return e(),o("div",Is)}const Bs=T(Ts,[["render",zs]]),Ds=[{path:"/",name:"Home",component:kt},{path:"/about",name:"About",component:It},{path:"/categories",name:"Categories",component:So},{path:"/schedule",name:"Schedule",component:Fo},{path:"/contact",name:"Contact",component:Wo},{path:"/members",name:"Members",component:ds},{path:"/day1-2F",name:"Day1-2F",component:ks},{path:"/day1-4F",name:"Day1-4F",component:js},{path:"/clear",name:"Clear",component:Bs},{path:"/:pathMatch(.*)*",redirect:{name:"Home"}}],Es=X({history:K("/"),routes:Ds});const Fs={class:"mobile"},Gs={class:"sidebar-overlay"},Ps={class:"sidebar"},Hs={class:"mobile-link"},Os=t("div",{class:"seperated_line"},null,-1),Ys={class:"mobile-link"},qs=t("div",{class:"seperated_line"},null,-1),Vs={class:"mobile-link"},Us=t("div",{class:"seperated_line"},null,-1),Zs={class:"mobile-link"},Qs=t("div",{class:"seperated_line"},null,-1),Ws=t("br",null,null,-1),Js={class:"flex justify-evenly"},Rs={class:"mobile-icon",href:"https://www.youtube.com/@constellation-ckcos14th",rel:"noopener noreferrer",target:"_blank"},Xs={class:"mobile-icon",href:"https://instagram.com/luminescence_ckmsc39th_",rel:"noopener noreferrer",target:"_blank"},Ks={__name:"Sidebar",setup(a){const c=M(!1);function l(){let i=document.getElementById("checkID");i.checked=!1,d()}function d(){const i=document.body;c.value=!c.value,c.value?i.style.overflowY="hidden":i.style.overflowY=""}return(i,_)=>{const m=$("router-link"),A=$("vue-feather");return e(),o("div",Fs,[t("label",{class:"hamburger-menu"},[t("input",{id:"checkID",type:"checkbox",onClick:d})]),t("aside",Gs,[t("div",Ps,[t("div",Hs,[r(m,{to:{name:"About"},class:"hover-mobile-link",onClick:l},{default:p(()=>[v(" About ")]),_:1})]),Os,t("div",Ys,[r(m,{to:{name:"Categories"},class:"hover-mobile-link",onClick:l},{default:p(()=>[v(" Categories ")]),_:1})]),qs,t("div",Vs,[r(m,{to:{name:"Schedule"},class:"hover-mobile-link",onClick:l},{default:p(()=>[v(" Schedule ")]),_:1})]),Us,t("div",Zs,[r(m,{to:{name:"Contact"},class:"hover-mobile-link",onClick:l},{default:p(()=>[v(" Contact ")]),_:1})]),Qs,Ws,t("div",Js,[t("a",Rs,[r(A,{size:"20",type:"youtube"})]),t("a",Xs,[r(A,{size:"20",type:"instagram"})])])])])])}}};const tn={},en={class:"no-has-selector-nav"},on={id:"no-has-links"},sn={href:"https://www.youtube.com/@constellation-ckcos14th",target:"_blank",rel:"noopener noreferrer"},nn={href:"https://instagram.com/luminescence_ckmsc39th_",target:"_blank",rel:"noopener noreferrer"};function ln(a,c){const l=$("router-link"),d=$("vue-feather");return e(),o("div",en,[t("div",on,[r(l,{to:{name:"About"}},{default:p(()=>[v("About")]),_:1}),r(l,{to:{name:"Categories"}},{default:p(()=>[v("Categories")]),_:1}),r(l,{to:{name:"Schedule"}},{default:p(()=>[v("Schedule")]),_:1}),r(l,{to:{name:"Contact"}},{default:p(()=>[v("Contact")]),_:1}),t("a",sn,[r(d,{type:"youtube",size:"20"}),v(" Youtube ")]),t("a",nn,[r(d,{type:"instagram",size:"20"}),v(" Instagram ")])])])}const an=T(tn,[["render",ln],["__scopeId","data-v-8dabaa2e"]]);const cn=t("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"},null,-1),rn={class:"navbar"},dn={class:"column-1"},_n={class:"column-2"},un={class:"column-3"},pn={class:"outer-links"},hn={href:"https://www.youtube.com/@constellation-ckcos14th",target:"_blank",rel:"noopener noreferrer",class:"icon"},mn={href:"https://www.instagram.com/constellation_ckcos14/",target:"_blank",rel:"noopener noreferrer",class:"icon"},vn=t("i",{class:"fa fa-bars"},null,-1),gn=[vn],bn={__name:"Navbar",setup(a){const c=M(!1);Z.replace();function l(){c.value=!c.value}return(d,i)=>{const _=$("router-link"),m=$("vue-feather");return e(),o(g,null,[cn,t("nav",rn,[t("div",dn,[r(_,{to:{name:"Home"},class:"homelink"},{default:p(()=>[v("Constellation")]),_:1})]),t("div",_n,[r(_,{to:{name:"About"},class:"link"},{default:p(()=>[v("About")]),_:1}),r(_,{to:{name:"Categories"},class:"link"},{default:p(()=>[v("Categories")]),_:1}),r(_,{to:{name:"Members"},class:"link"},{default:p(()=>[v("Members")]),_:1}),r(_,{to:{name:"Schedule"},class:"link"},{default:p(()=>[v("Schedule")]),_:1}),r(_,{to:{name:"Contact"},class:"link"},{default:p(()=>[v("Contact")]),_:1})]),t("div",un,[t("div",pn,[t("a",hn,[r(m,{type:"youtube",size:"20"})]),t("a",mn,[r(m,{type:"instagram",size:"20"})])]),r(Ks)]),t("a",{href:"javascript:void(0);",class:"icon no-has-selector-menu",onClick:l},gn)]),c.value?(e(),Y(an,{key:0})):f("",!0)],64)}}};R(st).use(Es,H).component("navbar",bn).component(H.name,H).mount("#app");
