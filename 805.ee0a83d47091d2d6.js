"use strict";(self.webpackChunkEKOWebUI=self.webpackChunkEKOWebUI||[]).push([[805],{3805:(z,c,i)=>{i.r(c),i.d(c,{MainSettingsModule:()=>N});var p=i(6895),m=i(7799),h=i(9345),v=i(5153),b=i(2122),_=i(2340),e=i(4650),A=i(2324),l=i(4006);function x(u,o){if(1&u&&(e.TgZ(0,"span",30),e._uU(1),e.qZA()),2&u){const s=e.oxw();e.xp6(1),e.hij(" \u0639\u062f\u062f \u0627\u0644\u0623\u062d\u0631\u0641 : ",s.UrgentSaved.length," ")}}const M=function(u){return{color:u}};let S=(()=>{class u extends b.H{constructor(s,t){super(s),this.injector=s,this.SWA=t,this.CurrentText="\u0627\u0647\u0644\u0627 \u0648 \u0645\u0631\u062d\u0628\u0627 \u0628\u0643\u0645 \u0641\u064a \u0645\u0639\u0627\u0645\u0644 \u0627\u0644\u0647\u0627\u0645\u064a \u0644\u0627\u0628 \u0644\u0644\u062a\u062d\u0627\u0644\u064a\u0644 \u0627\u0644\u0637\u0628\u064a\u0629 ",this.Deliverd="",this.Printed="",this.ReceptionSaved="",this.UrgentSaved="",this.Revision="",this.Reviwed="",this.SamplingDone="",this.PhoneNumber="",this.MessageType="",this.SMSToUrgentNumber=_.N.SMSToUrgentNumber}ngOnInit(){this.WhatsAppTemplates=this.userHelper.GetWhatsAppTemplates(),this.Deliverd=this.WhatsAppTemplates.Deliverd,this.Printed=this.WhatsAppTemplates.Printed,this.ReceptionSaved=this.WhatsAppTemplates.ReceptionSaved,this.UrgentSaved=this.WhatsAppTemplates.UrgentSaved,this.Revision=this.WhatsAppTemplates.Revision,this.Reviwed=this.WhatsAppTemplates.Reviwed,this.SamplingDone=this.WhatsAppTemplates.SamplingDone,this.CurrentTextFunc({},this.ReceptionSaved,"ReceptionSaved");var s=parseInt("1");s>1&&s<=3?document.querySelector(".segmentInfo").className="segmentInfo warn":s>3&&(document.querySelector(".segmentInfo").className="segmentInfo danger"),document.querySelectorAll(".image").forEach(function(r){r.remove()});var a=document.querySelector("#lock .bubble"),n=document.querySelector("#messages");a.addEventListener("click",function(r){a.classList.add("swipe"),n.classList.add("show"),setTimeout(function(){a.classList.remove("swipe")},1e3)}),document.querySelector("#messages .back-button").addEventListener("click",function(r){n.classList.remove("show")});var g=["January","February","March","April","May","June","July","August","September","October","November","December"],q=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],J=document.querySelector(".time"),E=document.querySelector(".date"),j=document.querySelector(".received"),I=(new Date).getTime();function C(){var r=new Date;J.textContent=(r.getHours()%12||12)+":"+("0"+r.getMinutes()).substr(-2),E.textContent=q[r.getDay()]+", "+g[r.getMonth()]+" "+r.getDate();var d=Math.floor((r.getTime()-I)/1e3/60),T=Math.floor(d/60);j.textContent=0==d?"now":0===T?d+"m ago":T+"h ago"}C(),setInterval(C,1e3)}SendTestMessage(){this.SWA.sendWhatsAppMessage(this.MessageType,this.PhoneNumber,"\u062e\u0640\u0627\u0644\u062f ")}SendSMSMessage(){this.SWA.sendSMSMessage(this.MessageType,this.PhoneNumber,"\u062e\u0640\u0627\u0644\u062f ")}SaveAllTemplates(){this.WhatsAppTemplates.Deliverd=this.Deliverd,this.WhatsAppTemplates.Printed=this.Printed,this.WhatsAppTemplates.ReceptionSaved=this.ReceptionSaved,this.WhatsAppTemplates.UrgentSaved=this.UrgentSaved,this.WhatsAppTemplates.Revision=this.Revision,this.WhatsAppTemplates.Reviwed=this.Reviwed,this.WhatsAppTemplates.SamplingDone=this.SamplingDone,this.userHelper.SetWhatsAppTemplates(this.WhatsAppTemplates);let s=new v.VzE;s.whatsAppTemplates=this.userHelper.GetWhatsAppTemplatesString(),this.service.updateWhatsAppTemplates(s).subscribe({next:t=>{console.log(t)}})}CurrentTextFunc(s,t,a){this.CurrentText=t,this.cdRef.detectChanges(),this.MessageType=a}}return u.\u0275fac=function(s){return new(s||u)(e.Y36(e.zs3),e.Y36(A.n))},u.\u0275cmp=e.Xpm({type:u,selectors:[["app-whats-app-settings-templates"]],features:[e.qOj],decls:125,vars:25,consts:[[1,"page-settings"],[1,"mobile"],[1,"container"],["id","lock"],[1,"phone"],[1,"clock"],[1,"time"],[1,"date"],[1,"bubble"],[1,"messages-header"],[1,"received"],[1,"message-row"],[1,"message-wrapper"],[1,"message-from"],[1,"message-body"],["id","messages",1,""],[1,"phone-light"],[1,"back-button"],[1,"message-container"],[1,"image"],["src","https://http.cat/500"],[1,"msg-bubble"],[1,"message"],["width","17","height","20","viewBox","0 0 17 20","fill","none","xmlns","http://www.w3.org/2000/svg",1,"tail"],["d","M6 0C6 12.5 7 16.5 0.5 20C10 20 16.5 14 16.5 9.5C16.5 5 7 -3.38256e-06 6 0Z","fill","#E0E0E0"],[1,"segmentInfo"],[1,"comp","row"],[1,"mb-3"],[1,"d-flex","align-items-center","fs-6","fw-bold","mb-2"],["placeholder","\u0627\u0643\u062a\u0628 \u0646\u0635 \u0627\u0644\u0631\u0633\u0627\u0644\u0629","rows","3","cols","300",1,"form-control",3,"ngModel","ngModelChange","keyup","focus"],[1,"text-muted"],["class","text-muted",4,"ngIf"],[1,"row","m-4"],[1,"col-md-5"],["type","text",1,"form-control",3,"ngModel","ngModelChange"],[1,"text-muted","fw-bold","fs-7"],[1,"text-muted",3,"ngStyle"],[1,"col-md-2"],[1,"d-flex","align-items-center","fs-6","fw-bold","mb-9"],[1,"btn","btn-sm","btn-primary",3,"disabled","click"],[1,"btn","btn-sm","btn-success",3,"click"]],template:function(s,t){1&s&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),e._UZ(4,"div",4),e.TgZ(5,"div",5)(6,"div")(7,"div",6),e._uU(8," 12:45 "),e.qZA(),e.TgZ(9,"div",7),e._uU(10," Wednesday, January 1 "),e.qZA()()(),e.TgZ(11,"div",8)(12,"div",9)(13,"span"),e._uU(14,"\u0627\u0644\u0631\u0633\u0627\u0626\u0644"),e.qZA(),e.TgZ(15,"span",10),e._uU(16,"\u0627\u0644\u0627\u0646"),e.qZA()(),e.TgZ(17,"div",11)(18,"div",12)(19,"div",13),e._uU(20," \u0625\u0644\u0647\u0627\u0645\u064a \u0644\u0627\u0628 "),e.qZA(),e.TgZ(21,"div",14),e._uU(22),e.qZA()()()()(),e.TgZ(23,"div",15),e._UZ(24,"div",16)(25,"div",17),e.TgZ(26,"div",13),e._uU(27," \u0625\u0644\u0647\u0627\u0645\u064a \u0644\u0627\u0628 "),e.qZA(),e.TgZ(28,"div",18)(29,"div",12)(30,"div",19),e._UZ(31,"img",20),e.qZA(),e.TgZ(32,"div",21)(33,"div",22),e._uU(34),e.qZA()(),e.O4$(),e.TgZ(35,"svg",23),e._UZ(36,"path",24),e.qZA()()()()(),e.kcU(),e.TgZ(37,"div",25),e._uU(38),e._UZ(39,"br"),e._uU(40," \u0639\u062f\u062f \u0627\u0644\u0631\u0633\u0627\u0626\u0644 : "),e.TgZ(41,"strong"),e._uU(42," 1 "),e.qZA()()(),e.TgZ(43,"div",26)(44,"div",27)(45,"label",28)(46,"span"),e._uU(47," \u0628\u0639\u062f \u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u0632\u064a\u0627\u0631\u0629 \u0641\u064a \u0627\u0644\u0627\u0633\u062a\u0642\u0628\u0627\u0644 :"),e.qZA()(),e.TgZ(48,"textarea",29),e.NdJ("ngModelChange",function(n){return t.ReceptionSaved=n})("keyup",function(n){return t.CurrentTextFunc(n,t.ReceptionSaved,"ReceptionSaved")})("focus",function(n){return t.CurrentTextFunc(n,t.ReceptionSaved,"ReceptionSaved")}),e._uU(49,"            "),e.qZA(),e.TgZ(50,"span",30),e._uU(51),e.qZA()(),e.TgZ(52,"div",27)(53,"label",28)(54,"span"),e._uU(55),e.qZA()(),e.TgZ(56,"textarea",29),e.NdJ("ngModelChange",function(n){return t.UrgentSaved=n})("keyup",function(n){return t.CurrentTextFunc(n,t.UrgentSaved,"UrgentSaved")})("focus",function(n){return t.CurrentTextFunc(n,t.UrgentSaved,"UrgentSaved")}),e._uU(57,"            "),e.qZA(),e.YNc(58,x,2,1,"span",31),e.qZA(),e.TgZ(59,"div",27)(60,"label",28)(61,"span"),e._uU(62,"\u0628\u0639\u062f \u0633\u062d\u0628 \u0627\u0644\u0639\u064a\u0646\u0629 :"),e.qZA()(),e.TgZ(63,"textarea",29),e.NdJ("ngModelChange",function(n){return t.SamplingDone=n})("keyup",function(n){return t.CurrentTextFunc(n,t.SamplingDone,"SamplingDone")})("focus",function(n){return t.CurrentTextFunc(n,t.SamplingDone,"SamplingDone")}),e._uU(64,"            "),e.qZA(),e.TgZ(65,"span",30),e._uU(66),e.qZA()(),e.TgZ(67,"div",27)(68,"label",28)(69,"span"),e._uU(70,"\u0628\u0639\u062f \u0627\u0644\u0637\u0628\u0627\u0639\u0629 :"),e.qZA()(),e.TgZ(71,"textarea",29),e.NdJ("ngModelChange",function(n){return t.Printed=n})("keyup",function(n){return t.CurrentTextFunc(n,t.Printed,"Printed")})("focus",function(n){return t.CurrentTextFunc(n,t.Printed,"Printed")}),e._uU(72,"            "),e.qZA(),e.TgZ(73,"span",30),e._uU(74),e.qZA()(),e.TgZ(75,"div",27)(76,"label",28)(77,"span"),e._uU(78," \u0628\u0639\u062f \u062f\u062e\u0648\u0644 \u0627\u0644\u0645\u0631\u0627\u062c\u0639\u0629 :"),e.qZA()(),e.TgZ(79,"textarea",29),e.NdJ("ngModelChange",function(n){return t.Revision=n})("keyup",function(n){return t.CurrentTextFunc(n,t.Revision,"Revision")})("focus",function(n){return t.CurrentTextFunc(n,t.Revision,"Revision")}),e._uU(80,"            "),e.qZA(),e.TgZ(81,"span",30),e._uU(82),e.qZA()(),e.TgZ(83,"div",27)(84,"label",28)(85,"span"),e._uU(86," \u0628\u0639\u062f \u0627\u0644\u062a\u0638\u0631\u064a\u0641 :"),e.qZA()(),e.TgZ(87,"textarea",29),e.NdJ("ngModelChange",function(n){return t.Reviwed=n})("keyup",function(n){return t.CurrentTextFunc(n,t.Reviwed,"Reviwed")})("focus",function(n){return t.CurrentTextFunc(n,t.Reviwed,"Reviwed")}),e._uU(88,"            "),e.qZA(),e.TgZ(89,"span",30),e._uU(90),e.qZA()(),e.TgZ(91,"div",27)(92,"label",28)(93,"span"),e._uU(94," \u0628\u0639\u062f \u0627\u0644\u062a\u0633\u0644\u064a\u0645 :"),e.qZA()(),e.TgZ(95,"textarea",29),e.NdJ("ngModelChange",function(n){return t.Deliverd=n})("keyup",function(n){return t.CurrentTextFunc(n,t.Deliverd,"Deliverd")})("focus",function(n){return t.CurrentTextFunc(n,t.Deliverd,"Deliverd")}),e._uU(96,"            "),e.qZA(),e.TgZ(97,"span",30),e._uU(98),e.qZA()(),e.TgZ(99,"div",32)(100,"div",33)(101,"label",28)(102,"span"),e._uU(103," \u0631\u0642\u0645 \u0627\u0644\u0645\u0648\u0628\u0627\u064a\u0644 \u0644\u0644\u062a\u062c\u0631\u0628\u0629 :"),e.qZA()(),e.TgZ(104,"input",34),e.NdJ("ngModelChange",function(n){return t.PhoneNumber=n}),e.qZA(),e.TgZ(105,"span",35),e._uU(106," \u064a\u062c\u0628 \u0627\u0644\u062a\u0623\u0643\u062f \u0645\u0646 \u0627\u0644\u062d\u0641\u0638 \u0625\u0630\u0627 \u062a\u0645 \u062a\u063a\u064a\u0631 \u0627\u064a \u0642\u0627\u0644\u0628 \u0631\u0633\u0627\u0644\u0629. "),e.qZA(),e._UZ(107,"br"),e.TgZ(108,"span",36),e._uU(109),e.qZA()(),e.TgZ(110,"div",37)(111,"label",38),e._UZ(112,"span"),e.qZA(),e.TgZ(113,"button",39),e.NdJ("click",function(){return t.SendTestMessage()}),e._uU(114,"\u0625\u0631\u0633\u0627\u0644 \u0648\u0627\u062a\u0633 "),e.qZA()(),e.TgZ(115,"div",37)(116,"label",38),e._UZ(117,"span"),e.qZA(),e.TgZ(118,"button",39),e.NdJ("click",function(){return t.SendSMSMessage()}),e._uU(119,"\u0625\u0631\u0633\u0627\u0644 SMS "),e.qZA()(),e.TgZ(120,"div",37)(121,"label",38),e._UZ(122,"span"),e.qZA(),e.TgZ(123,"button",40),e.NdJ("click",function(){return t.SaveAllTemplates()}),e._uU(124,"\u062d\u0641\u0638 "),e.qZA()()()()()),2&s&&(e.xp6(22),e.hij(" ",t.CurrentText," "),e.xp6(12),e.hij(" ",t.CurrentText," "),e.xp6(4),e.hij(" \u0639\u062f\u062f \u0627\u0644\u0623\u062d\u0631\u0641 : ",t.CurrentText.length," "),e.xp6(10),e.Q6J("ngModel",t.ReceptionSaved),e.xp6(3),e.hij(" \u0639\u062f\u062f \u0627\u0644\u0623\u062d\u0631\u0641 : ",t.ReceptionSaved.length," "),e.xp6(4),e.hij(" \u0631\u0633\u0627\u0644\u0629 \u0641\u064a \u062d\u0627\u0644\u0629 \u0627\u0644\u0632\u064a\u0627\u0631\u0629 \u0639\u0627\u062c\u0644 : ",t.SMSToUrgentNumber," "),e.xp6(1),e.Q6J("ngModel",t.UrgentSaved),e.xp6(2),e.Q6J("ngIf",t.UrgentSaved),e.xp6(5),e.Q6J("ngModel",t.SamplingDone),e.xp6(3),e.hij(" \u0639\u062f\u062f \u0627\u0644\u0623\u062d\u0631\u0641 : ",t.SamplingDone.length," "),e.xp6(5),e.Q6J("ngModel",t.Printed),e.xp6(3),e.hij(" \u0639\u062f\u062f \u0627\u0644\u0623\u062d\u0631\u0641 : ",t.Printed.length," "),e.xp6(5),e.Q6J("ngModel",t.Revision),e.xp6(3),e.hij(" \u0639\u062f\u062f \u0627\u0644\u0623\u062d\u0631\u0641 : ",t.Revision.length," "),e.xp6(5),e.Q6J("ngModel",t.Reviwed),e.xp6(3),e.hij(" \u0639\u062f\u062f \u0627\u0644\u0623\u062d\u0631\u0641 : ",t.Reviwed.length," "),e.xp6(5),e.Q6J("ngModel",t.Deliverd),e.xp6(3),e.hij(" \u0639\u062f\u062f \u0627\u0644\u0623\u062d\u0631\u0641 : ",t.Deliverd.length," "),e.xp6(6),e.Q6J("ngModel",t.PhoneNumber),e.xp6(4),e.Q6J("ngStyle",e.VKq(23,M,11==t.PhoneNumber.length?"green":"red")),e.xp6(1),e.hij(" \u0639\u062f\u062f \u0627\u0644\u0623\u0631\u0642\u0627\u0645 : ",t.PhoneNumber.length," "),e.xp6(4),e.Q6J("disabled",11!=t.PhoneNumber.length),e.xp6(5),e.Q6J("disabled",11!=t.PhoneNumber.length))},dependencies:[p.O5,p.PC,l.Fj,l.JJ,l.On],styles:[".page-settings[_ngcontent-%COMP%]{display:flex}.container[_ngcontent-%COMP%]{position:relative;margin:auto;width:459px;overflow:scroll;min-height:370px;max-height:800px;z-index:10;overflow:hidden}.container[_ngcontent-%COMP%]:before{z-index:-1;position:absolute;margin:5px;top:0;width:calc(100% - 10px);height:786px;content:\"\";border-radius:57px}.phone[_ngcontent-%COMP%]{position:absolute;z-index:-1;width:400px;height:100%;background:url(iphone.0978fd45da473004.png);background-size:400px;background-repeat:no-repeat}.phone-light[_ngcontent-%COMP%]{position:absolute;z-index:-1;left:0;top:0;width:400px;height:100%;background:url(iphone-light.7e3566f8fba5b7b8.png);background-size:400px;background-repeat:no-repeat}#lock[_ngcontent-%COMP%]{height:0;overflow:visible;z-index:0}#lock[_ngcontent-%COMP%]   .clock[_ngcontent-%COMP%]{height:170px;display:flex;flex-wrap:wrap;align-items:flex-end;justify-content:center;color:#fff;font:100 48px sans-serif}#lock[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%]{width:100%;text-align:center}#lock[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]{font-size:18px}#lock[_ngcontent-%COMP%]   .bubble[_ngcontent-%COMP%]{margin:35px;min-height:30px;width:auto;padding:10px 15px 15px 10px;background:rgba(210,210,210,.7);border-radius:14px;min-height:50px;cursor:pointer}#lock[_ngcontent-%COMP%]   .bubble.swipe[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_swipe .5s forwards}@keyframes _ngcontent-%COMP%_swipe{0%{transform:translate(0);opacity:1}to{transform:translate(-100%);opacity:0}}#lock[_ngcontent-%COMP%]   .messages-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;height:22px;padding-left:2px;padding-right:26px;color:#00000080;background-size:22px 22px;background-repeat:no-repeat;background-position:right;background-image:url(\"data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' width='250.001' height='250.001' viewBox='0 0 66.146 66.146'%3E%3Cdefs%3E%3ClinearGradient id='A' x1='-25.885' y1='207.601' x2='-25.885' y2='154.055' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%230cbd2a'/%3E%3Cstop offset='1' stop-color='%235bf675'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg transform='translate(59.483 -145.846)'%3E%3Crect rx='14.568' y='145.846' x='-59.483' height='66.146' width='66.146' fill='url(%23A)' paint-order='markers stroke fill'/%3E%3Cpath d='M-26.4 157.296a24.278 20.222 0 0 0-24.278 20.222 24.278 20.222 0 0 0 11.795 17.316 27.365 20.222 0 0 1-4.245 5.942 23.857 20.222 0 0 0 9.86-3.874 24.278 20.222 0 0 0 6.868.838 24.278 20.222 0 0 0 24.278-20.222 24.278 20.222 0 0 0-24.278-20.222z' fill='%23fff' paint-order='markers stroke fill'/%3E%3C/g%3E%3C/svg%3E\")}#lock[_ngcontent-%COMP%]   .message-row[_ngcontent-%COMP%]{display:flex;align-items:flex-start}#lock[_ngcontent-%COMP%]   .message-wrapper[_ngcontent-%COMP%]{flex-grow:1}#lock[_ngcontent-%COMP%]   .message-from[_ngcontent-%COMP%]{font-weight:bolder;margin-top:5px;line-height:1.8em;color:#000000e6}#lock[_ngcontent-%COMP%]   .message-body[_ngcontent-%COMP%]{line-height:1.2em;color:#000000e6;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3}#lock[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:40px;height:40px;object-fit:cover;margin-bottom:-5px}#messages[_ngcontent-%COMP%]{min-height:330px;z-index:1;position:relative;overflow:visible;padding:0 27px 42px;opacity:0;pointer-events:none;transition:opacity .5s;transition-delay:0s}#messages.show[_ngcontent-%COMP%]{opacity:1;pointer-events:auto;transition-delay:.25s}#messages[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%]{position:absolute;left:25px;top:45px;width:75px;height:45px;cursor:pointer}#messages[_ngcontent-%COMP%]   .message-from[_ngcontent-%COMP%]{text-align:center;padding-top:50px;line-height:37px;color:#000000b3}#messages[_ngcontent-%COMP%]   .message-container[_ngcontent-%COMP%]{display:flex;max-height:651px;min-height:220px;align-items:flex-end;overflow:auto;padding:20px 10px 0;border-radius:0 0 33px 33px}#messages[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{max-width:80%;min-height:35px;background:rgba(210,210,210,.7);border-radius:14px;overflow:hidden;line-height:0;margin-top:2px}#messages[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;max-height:300px;object-fit:cover}#messages[_ngcontent-%COMP%]   .msg-bubble[_ngcontent-%COMP%]{position:relative;margin-top:2px;max-width:80%;background:#e0e0e0;border-radius:14px;overflow:hidden}#messages[_ngcontent-%COMP%]   .tail[_ngcontent-%COMP%]{position:relative;top:-14px;left:-6px}#messages[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]{padding:10px}.segmentInfo[_ngcontent-%COMP%]{position:relative;width:400px;margin:20px auto auto;text-align:center;padding:8px 0;background:rgba(20,172,228,.15);color:#14ace4;border-radius:5px}.segmentInfo[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{margin:0 0 -4px 12px;color:#14ace4}.segmentInfo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{position:absolute;line-height:35px;right:10px}.warn[_ngcontent-%COMP%]{background:rgba(249,151,45,.15);color:#f9972d}.warn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{color:#f9972d}.danger[_ngcontent-%COMP%]{background:rgba(255,49,102,.15);color:#f8564e}.danger[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{color:#f8564e}"]}),u})();var Z=i(9724),k=i(3939),P=i(5226),f=i.n(P),w=i(9320),U=i(1687),y=i(5974),O=i(1843);function D(u,o){if(1&u){const s=e.EpF();e.TgZ(0,"a",11),e.NdJ("click",function(){e.CHM(s);const a=e.oxw();return e.KtG(a.CreateBackup())}),e._uU(1," \u0627\u0636\u0627\u0641\u0629 \u0646\u0633\u062e\u0629 \u0627\u062d\u0637\u064a\u0627\u0637\u064a\u0629 \u062c\u062f\u064a\u062f\u0629 "),e.qZA()}}const W=[{path:"WhatsAppTemplates",canActivate:[h.o],component:S,data:{animation:"WhatsAppTemplates"}},{path:"DatabaseBackup",canActivate:[h.o],component:(()=>{class u{constructor(s,t,a,n,g){this.cdr=s,this.service=t,this.cts=a,this.permissionManager=n,this.envService=g,this.env={},this.contentSecondtBtnForCustomers='<i class="pi pi-trash text-white"></i>',this.classForSecondButtonForCustomers=" bg-danger text-white",this.DataBaseBackUps=[],this.Cols=[k.v.fromJS({id:1,sorted:!0,hidden:!1,filtered:!0,field:"fName",header:"\u0625\u0633\u0645 \u0645\u0644\u0641 \u0627\u0644\u0646\u0633\u062e\u0647 ",type:"text"})]}ngOnInit(){this.env=_.N,this.loadAllBackups()}loadAllBackups(){this.service.getLastBackUps().subscribe({next:s=>{this.DataBaseBackUps=s,this.cdr.detectChanges()}})}DeleteBackUp(s){if(this.permissionManager.isNotGranted(Z.v.CanRemoveVisit))return void this.cts.sendToster("warn","\u0644\u064a\u0633 \u0644\u062f\u064a\u0643 \u0635\u0644\u0627\u062d\u064a\u0629","\u0645\u062d\u0627\u0648\u0644\u0629 \u062d\u0630\u0641 \u0646\u0633\u062e\u0629 \u0627\u062d\u0637\u064a\u0627\u0637\u064a\u0629 ","\u0645\u062d\u0627\u0648\u0644\u0629 \u062d\u0630\u0641 \u0646\u0633\u062e\u0629 \u0627\u062d\u0637\u064a\u0627\u0637\u064a\u0629 ");let t=s.fName;this.service.deleteBackUpFile(s.fName).subscribe({next:a=>{1==a.length&&null==a[0].output&&this.cts.sendToster("success","\u062d\u0630\u0641 \u0646\u0633\u062e\u0629 \u0627\u062d\u0637\u064a\u0627\u0637\u064a\u0629","\u062a\u0645 \u062d\u0630\u0641 \u0627\u0644\u0646\u0633\u062e\u0629 \u0627\u0644\u0627\u062d\u0637\u064a\u0627\u0637\u064a\u0629 \u0628\u0646\u062c\u0627\u062d","\u062d\u0630\u0641 \u0646\u0633\u062e\u0629 \u0627\u062d\u0637\u064a\u0627\u0637\u064a\u0629 \u0628\u0625\u0633\u0645 - "+t+" - "),this.cdr.detectChanges()}})}CreateBackup(){this.service.createBackupTask(this.envService.getSecretLabId()).subscribe({next:s=>{s&&(f().fire({title:"\u062a\u0646\u0628\u064a\u0647",text:"\u0627\u0644\u0646\u0633\u062e\u0629 \u0627\u0644\u0627\u062d\u0637\u064a\u0627\u0637\u064a\u0629 \u062d\u062c\u0645\u0647\u0627 \u0643\u0628\u064a\u0631 \u062c\u062f\u0627 \u0648 \u0645\u0645\u0643\u0646 \u0627\u0646 \u062a\u0623\u062e\u062f \u0627\u0643\u062a\u0631 \u0645\u0646 10 \u062f\u0642\u0627\u0626\u0642 ",icon:"warning",confirmButtonText:"\u062a\u0645\u0627\u0645"}),this.cts.sendToster("success","\u0627\u0636\u0627\u0641\u0629  \u0646\u0633\u062e\u0629 \u0627\u062d\u0637\u064a\u0627\u0637\u064a\u0629","\u062a\u0645 \u0627\u0636\u0627\u0641\u0629 \u0627\u0644\u0646\u0633\u062e\u0629 \u0627\u0644\u0627\u062d\u0637\u064a\u0627\u0637\u064a\u0629 \u0628\u0646\u062c\u0627\u062d"))}})}UpdateBackup(){this.service.updateTestEnviromentDataBase().subscribe({next:s=>{s&&(f().fire({title:"\u062a\u0646\u0628\u064a\u0647",text:"\u062a\u062d\u062f\u064a\u062b \u0646\u0633\u062e\u0629 \u0627\u0644\u062a\u062c\u0631\u0628\u0629 \u0645\u0646 \u0627\u0644\u062f\u0627\u062a\u0627\u0628\u064a\u0632 \u0627\u0644\u062d\u0627\u0644\u064a\u0629 \u0647\u064a\u0623\u062e\u062f \u0648\u0642\u062a \u0643\u0628\u064a\u0631 \u0627\u0644\u064a \u062d\u062f \u0645\u0627 \u064a\u0635\u0644 \u0627\u0644\u064a 10 \u0627\u0648 15 \u062f\u0642\u064a\u0642\u0629   ",icon:"warning",confirmButtonText:"\u062a\u0645\u0627\u0645"}),this.cts.sendToster("success","\u062a\u062d\u062f\u064a\u062b \u0646\u0633\u062e\u0629 \u0627\u0644\u062a\u062c\u0631\u0628\u0629","\u062a\u0645 \u062a\u062d\u062f\u064a\u062b \u0646\u0633\u062e\u0629 \u0627\u0644\u062a\u062c\u0631\u0628\u0629 \u0628\u0646\u062c\u0627\u062d"))}})}}return u.\u0275fac=function(s){return new(s||u)(e.Y36(e.sBO),e.Y36(v.KUN),e.Y36(w.m),e.Y36(U.v),e.Y36(y.M))},u.\u0275cmp=e.Xpm({type:u,selectors:[["app-DatabaseBakup"]],decls:14,vars:7,consts:[[1,"container-xxl"],[1,"row"],[1,"col-md-12"],[1,"card"],[1,"card-header"],[1,"card-title"],[1,"card-toolbar"],["class","btn btn-sm btn-success btn-active-color-white mx-3",3,"click",4,"ngIf"],[1,"btn","btn-sm","btn-primary","btn-active-color-white",3,"click"],[1,"card-body"],[3,"cols","data","contentSecondBtn","classSecondBtn","rowsPageNumbers","SecondBtn","secondButtonEvent"],[1,"btn","btn-sm","btn-success","btn-active-color-white","mx-3",3,"click"]],template:function(s,t){1&s&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h3",5),e._uU(6," \u0627\u0644\u0646\u0633\u062e \u0627\u0644\u0627\u062d\u0637\u064a\u0627\u0637\u064a\u0629 "),e.qZA(),e.TgZ(7,"div",6)(8,"div",6),e.YNc(9,D,2,0,"a",7),e.TgZ(10,"a",8),e.NdJ("click",function(){return t.UpdateBackup()}),e._uU(11," \u062a\u062d\u062f\u064a\u062b \u0646\u0633\u062e\u0629 \u0627\u0644\u062a\u062c\u0631\u0628\u0629 "),e.qZA()()()(),e.TgZ(12,"div",9)(13,"app-shared-datatable",10),e.NdJ("secondButtonEvent",function(n){return t.DeleteBackUp(n)}),e.qZA()()()()()()),2&s&&(e.xp6(9),e.Q6J("ngIf",!t.env.testMode),e.xp6(4),e.Q6J("cols",t.Cols)("data",t.DataBaseBackUps)("contentSecondBtn",t.contentSecondtBtnForCustomers)("classSecondBtn",t.classForSecondButtonForCustomers)("rowsPageNumbers",10)("SecondBtn",!t.env.testMode))},dependencies:[p.O5,O.G]}),u})(),data:{animation:"DatabaseBackup"}}];let B=(()=>{class u{}return u.\u0275fac=function(s){return new(s||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[m.Bz.forChild(W),m.Bz]}),u})();var R=i(8624);let N=(()=>{class u{}return u.\u0275fac=function(s){return new(s||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[p.ez,l.u5,B,R.m]}),u})()}}]);