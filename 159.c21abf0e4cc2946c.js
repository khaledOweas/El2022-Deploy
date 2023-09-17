"use strict";(self.webpackChunkEKOWebUI=self.webpackChunkEKOWebUI||[]).push([[159],{5159:(y,m,u)=>{u.r(m),u.d(m,{MedicalTestsModule:()=>U});var g=u(6895),p=u(7799),_=u(9345),d=u(4325),A=u(1462),a=u(5153),e=u(4650),b=u(9320),c=u(4006),h=u(1989);function P(n,r){if(1&n&&(e.TgZ(0,"caption"),e._uU(1),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.hij(" \u0628\u064a\u0627\u0646\u0627\u062a \u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0623\u0633\u0639\u0627\u0631 | ",t.model.priceListName,"")}}function T(n,r){if(1&n){const t=e.EpF();e.TgZ(0,"tr")(1,"td",4),e._uU(2,"\u0645\u0641\u0639\u0644 \u061f "),e.qZA(),e.TgZ(3,"td",4),e._uU(4),e.qZA(),e.TgZ(5,"td",4)(6,"p-checkbox",13),e.NdJ("ngModelChange",function(o){e.CHM(t);const s=e.oxw();return e.KtG(s.model.isActive=o)}),e.qZA()()()}if(2&n){const t=e.oxw();e.xp6(4),e.Oqu(t.model.isActive?"\u0645\u0641\u0639\u0644":"\u063a\u064a\u0631 \u0645\u063a\u0639\u0644"),e.xp6(2),e.Q6J("ngModel",t.model.isActive)("disabled","delete"==t.mode)("binary",!0)}}function C(n,r){if(1&n){const t=e.EpF();e.TgZ(0,"tr")(1,"td",4),e._uU(2," \u0627\u0644\u062a\u062d\u0627\u0644\u064a\u0644 \u0627\u0644\u0645\u062a\u0628\u0642\u0629 \u0645\u0646 \u0627\u0644\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0631\u0626\u064a\u0633\u0629 "),e.qZA(),e.TgZ(3,"td",4),e._uU(4),e.qZA(),e.TgZ(5,"td",4)(6,"input",5),e.NdJ("ngModelChange",function(o){e.CHM(t);const s=e.oxw();return e.KtG(s.model.remainingTests=o)}),e.qZA()()()}if(2&n){const t=e.oxw();e.xp6(4),e.Oqu(t.model.remainingTests),e.xp6(2),e.Q6J("ngModel",t.model.remainingTests)("disabled",!0)}}function v(n,r){if(1&n){const t=e.EpF();e.TgZ(0,"a",14),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.updatePriceList())}),e._uU(1," \u062a\u0639\u062f\u064a\u0644 \u0627\u0644\u0642\u0627\u0626\u0645\u0629"),e.qZA()}}function L(n,r){if(1&n){const t=e.EpF();e.TgZ(0,"a",15),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.saveNewPriceList())}),e._uU(1," \u062d\u0641\u0638 \u0627\u0644\u0642\u0627\u0626\u0645\u0629"),e.qZA()}}function Z(n,r){if(1&n){const t=e.EpF();e.TgZ(0,"a",16),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.deletePriceList())}),e._uU(1," \u062d\u0630\u0641 \u0627\u0644\u0642\u0627\u0626\u0645\u0629 \u0646\u0647\u0627\u0626\u064a\u0627"),e.qZA()}}function M(n,r){if(1&n){const t=e.EpF();e.TgZ(0,"a",15),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.addRemainingTests())}),e._uU(1," \u0627\u0636\u0627\u0641\u0629 \u0627\u0644\u062a\u062d\u0627\u0644\u064a\u0644 \u0627\u0644\u0645\u062a\u0628\u0642\u064a\u0629 "),e.qZA()}}function B(n,r){if(1&n){const t=e.EpF();e.TgZ(0,"a",17),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.rePriceTestsFromMainPriceList())}),e._uU(1," \u0627\u0639\u0627\u062f\u0629 \u0627\u0644\u062a\u0633\u0639\u064a\u0631 \u0645\u0646 \u0627\u0644\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629 "),e.qZA()}}let l=(()=>{class n{constructor(t,i,o,s){this.service=t,this.config=i,this.cdRef=o,this.cts=s,this.mode="add"}ngOnInit(){"add"==this.config.data.mode?(this.mode="add",this.model=new a.Z0):"edit"==this.config.data.mode?(this.model=this.config.data.event,this.mode="edit"):"delete"==this.config.data.mode&&(this.model=this.config.data.event,this.mode="delete")}deletePriceList(){this.service.deletePriceList(this.model.priceListId).subscribe({next:t=>{1==t&&(this.cts.sendToster("success","\u062d\u0630\u0641 \u0642\u0627\u0626\u0645\u0629 \u0623\u0633\u0639\u0627\u0631","\u062a\u0645 \u062d\u0630\u0641 \u0627\u0644\u0642\u0627\u0626\u0645\u0629 \u0628\u0646\u062c\u0627\u062d",`\u062d\u0630\u0641 \u0642\u0627\u0626\u0645\u0629 \u0627\u0633\u0639\u0627\u0631 \u0628\u0625\u0633\u0645 ${this.model.priceListName}  `),this.close())},error:t=>{}})}saveNewPriceList(){let t=new a.lA;t.isActive=this.model.isActive,t.mainPricePrecentage=this.model.mainPricePrecentage,t.priceListName=this.model.priceListName,this.service.createPriceList(t).subscribe({next:i=>{1==i&&(this.cts.sendToster("success","\u0625\u0636\u0627\u0641\u0629 \u0642\u0627\u0626\u0645\u0629 \u0623\u0633\u0639\u0627\u0631","\u062a\u0645 \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0642\u0627\u0626\u0645\u0629 \u0628\u0646\u062c\u0627\u062d",`\u0625\u0636\u0627\u0641\u0629 \u0642\u0627\u0626\u0645\u0629 \u0627\u0633\u0639\u0627\u0631 \u0628\u0625\u0633\u0645 ${this.model.priceListName} \u0648 \u0628\u0646\u0633\u0628\u0647 \u062e\u0635\u0645 ${this.model.mainPricePrecentage}   `),this.close())},error:i=>{}})}updatePriceList(){let t=new a.iT;t.isActive=this.model.isActive,t.mainPricePrecentage=this.model.mainPricePrecentage,t.priceListName=this.model.priceListName,t.priceListId=this.model.priceListId,this.service.updatePriceList(t).subscribe({next:i=>{1==i&&(this.cts.sendToster("success","\u062a\u0639\u062f\u064a\u0644 \u0642\u0627\u0626\u0645\u0629 \u0623\u0633\u0639\u0627\u0631","\u062a\u0645 \u062a\u0639\u062f\u064a\u0644 \u0627\u0644\u0642\u0627\u0626\u0645\u0629 \u0628\u0646\u062c\u0627\u062d",`\u062a\u0639\u062f\u064a\u0644 \u0642\u0627\u0626\u0645\u0629 \u0627\u0633\u0639\u0627\u0631 \u0628\u0625\u0633\u0645 ${this.model.priceListName} \u0648 \u0628\u0646\u0633\u0628\u0647 \u062e\u0635\u0645 ${this.model.mainPricePrecentage}   `),this.close())},error:i=>{}})}addRemainingTests(){this.service.updatePriceListByMainPriceList(this.model.priceListId).subscribe({next:t=>{this.cts.sendToster("success","\u062a\u0643\u0645\u0644\u0629 \u0627\u0644\u062a\u062d\u0627\u064a\u0644","\u062a\u0645 \u062a\u0643\u0645\u0644\u0629 \u0627\u0644\u062a\u062d\u0627\u0644\u064a\u0644 \u0644\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0623\u0633\u0639\u0627\u0631",`\u062a\u0643\u0645\u0644\u0629 \u0627\u0644\u062a\u062d\u0627\u0644\u064a\u0644 \u062d\u0633\u0628 \u0627\u0644\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0631\u0626\u0633\u064a\u0647 \u0644\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0623\u0633\u0639\u0627\u0631 ${this.model.priceListName}`),this.model.remainingTests=0,this.close()},error:t=>{}})}rePriceTestsFromMainPriceList(){0!=this.model.mainPricePrecentage&&this.model.mainPricePrecentage>0&&this.service.updatePriceListPrecentageFromMainPriceID(this.model.priceListId,this.model.mainPricePrecentage).subscribe({next:t=>{this.cts.sendToster("success","\u0625\u0639\u0627\u062f\u0629 \u062a\u0633\u0639\u064a\u0631","\u062a\u0645 \u0625\u0639\u0627\u062f\u0629 \u062a\u0633\u0639\u064a\u0631 \u0627\u0644\u062a\u062d\u0627\u0644\u064a\u0644 \u0644\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0623\u0633\u0639\u0627\u0631",`\u0625\u0639\u0627\u062f\u0629 \u062a\u0633\u0639\u064a\u0631  \u062d\u0633\u0628 \u0627\u0644\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0631\u0626\u0633\u064a\u0647 \u0644\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0623\u0633\u0639\u0627\u0631 ${this.model.priceListName}`),this.close()},error:t=>{}})}close(){this.cdRef.detectChanges(),document.getElementsByClassName("pi-times")[0].click()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(a.KU),e.Y36(d.S),e.Y36(e.sBO),e.Y36(b.m))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-edit-price-list"]],decls:36,vars:14,consts:[[1,"table","table-sm"],[4,"ngIf"],[1,"table-active"],["scope","col"],["scope","row"],[1,"form-control",3,"ngModel","disabled","ngModelChange"],[1,"row"],[2,"direction","ltr"],["href","#",1,"btn","btn-light","btn-shadow","font-weight-bold","mx-2",3,"click"],["href","#","class","btn btn-primary btn-shadow font-weight-bold mx-2",3,"click",4,"ngIf"],["href","#","class","btn btn-success btn-shadow font-weight-bold mx-2",3,"click",4,"ngIf"],["href","#","class","btn btn-danger btn-shadow font-weight-bold mx-2",3,"click",4,"ngIf"],["href","#","class","btn btn-warning btn-shadow font-weight-bold mx-2",3,"click",4,"ngIf"],["inputId","binary3",3,"ngModel","disabled","binary","ngModelChange"],["href","#",1,"btn","btn-primary","btn-shadow","font-weight-bold","mx-2",3,"click"],["href","#",1,"btn","btn-success","btn-shadow","font-weight-bold","mx-2",3,"click"],["href","#",1,"btn","btn-danger","btn-shadow","font-weight-bold","mx-2",3,"click"],["href","#",1,"btn","btn-warning","btn-shadow","font-weight-bold","mx-2",3,"click"]],template:function(t,i){1&t&&(e.TgZ(0,"table",0),e.YNc(1,P,2,1,"caption",1),e.TgZ(2,"thead")(3,"tr",2)(4,"th",3),e._uU(5,"\u0627\u0644\u0628\u064a\u0627\u0646"),e.qZA(),e.TgZ(6,"th",3),e._uU(7,"\u0627\u0644\u0642\u0640\u064a\u0645\u0629"),e.qZA(),e.TgZ(8,"th",3),e._uU(9," \u0627\u0644\u062a\u0639\u062f\u064a\u0644 "),e.qZA()()(),e.TgZ(10,"tbody")(11,"tr")(12,"td",4),e._uU(13,"\u0627\u0644\u0623\u0633\u0640\u0640\u0645"),e.qZA(),e.TgZ(14,"td",4),e._uU(15),e.qZA(),e.TgZ(16,"td",4)(17,"input",5),e.NdJ("ngModelChange",function(s){return i.model.priceListName=s}),e.qZA()()(),e.YNc(18,T,7,4,"tr",1),e.TgZ(19,"tr")(20,"td",4),e._uU(21," \u0627\u0644\u0646\u0633\u0628\u0647 \u0645\u0646 \u0627\u0644\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629 "),e.qZA(),e.TgZ(22,"td",4),e._uU(23),e.qZA(),e.TgZ(24,"td",4)(25,"input",5),e.NdJ("ngModelChange",function(s){return i.model.mainPricePrecentage=s}),e.qZA()()(),e.YNc(26,C,7,3,"tr",1),e.qZA()(),e.TgZ(27,"div",6)(28,"p",7)(29,"a",8),e.NdJ("click",function(){return i.close()}),e._uU(30," \u0625\u063a\u0644\u0627\u0642"),e.qZA(),e.YNc(31,v,2,0,"a",9),e.YNc(32,L,2,0,"a",10),e.YNc(33,Z,2,0,"a",11),e.YNc(34,M,2,0,"a",10),e.YNc(35,B,2,0,"a",12),e.qZA()()),2&t&&(e.xp6(1),e.Q6J("ngIf","edit"==i.mode),e.xp6(14),e.hij(" ",i.model.priceListName," "),e.xp6(2),e.Q6J("ngModel",i.model.priceListName)("disabled","delete"==i.mode),e.xp6(1),e.Q6J("ngIf","edit"==i.mode||"delete"==i.mode),e.xp6(5),e.Oqu(i.model.mainPricePrecentage),e.xp6(2),e.Q6J("ngModel",i.model.mainPricePrecentage)("disabled","delete"==i.mode),e.xp6(1),e.Q6J("ngIf","edit"==i.mode||"delete"==i.mode),e.xp6(5),e.Q6J("ngIf","edit"==i.mode),e.xp6(1),e.Q6J("ngIf","add"==i.mode),e.xp6(1),e.Q6J("ngIf","delete"==i.mode),e.xp6(1),e.Q6J("ngIf","edit"==i.mode&&i.model.remainingTests),e.xp6(1),e.Q6J("ngIf","edit"==i.mode))},dependencies:[g.O5,c.Fj,c.JJ,c.On,h.XZ]}),n})();var F=u(805),N=u(5543),f=u(613);const w=[{path:"",redirectTo:"PriceLists",pathMatch:"full"},{path:"PriceLists",canActivate:[_.o],component:(()=>{class n{constructor(t,i,o,s){this.service=t,this.messageService=i,this.cdRef=o,this.dialogService=s,this.contentSecondBtnForFirstButton='<i class="pi pi-file-edit text-white"></i>',this.classForSecondButtonForSecondButton=" bg-info text-white",this.contentFirstBtnForFirstButton='<i class="pi pi-trash text-white"></i>',this.classForFirstButtonForFirstButton=" bg-danger text-white",this.isActive=!1,this.Cols=A.aK}ngOnInit(){this.radioButtonValue="ActiveOnly",this.Search()}UpdateIsActive(){switch(this.radioButtonValue){case"All":this.isActive=void 0;break;case"ActiveOnly":this.isActive=!0;break;case"InActiveOnly":this.isActive=!1}}Search(){this.UpdateIsActive(),this.service.getListOfPriceLists(this.isActive).subscribe({next:t=>{this.Data=t,this.cdRef.detectChanges()},error:t=>{console.error(t)}})}edit(t){this.dialogService.open(l,{data:{mode:"edit",event:t},header:`\u062a\u0639\u062f\u064a\u0644  ( ${t.priceListName} ) `,width:"66%",maximizable:!0,resizable:!0,draggable:!0})}delete(t){this.dialogService.open(l,{data:{mode:"delete",event:t},header:`\u062d\u0630\u0641  ( ${t.priceListName} ) `,width:"66%",maximizable:!0,resizable:!0,draggable:!0})}CreateNewPriceList(){this.dialogService.open(l,{data:{mode:"add"},header:"\u0625\u0636\u0640\u0627\u0641\u0629 \u0642\u0627\u0626\u0645\u0629 \u0623\u0633\u0639\u0627\u0631 \u062c\u062f\u064a\u062f\u0629",width:"66%",maximizable:!0,resizable:!0,draggable:!0})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(a.KU),e.Y36(F.ez),e.Y36(e.sBO),e.Y36(d.xA))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-price-list"]],features:[e._Bn([d.xA])],decls:24,vars:15,consts:[[1,"card","card-flush","shadow-sm"],[1,"card-header"],[1,"card-title"],[1,"card-toolbar"],[1,"btn","btn-primary",3,"click"],[1,"card-body","py-5"],[1,"card","flex","justify-content-center"],[1,"flex","flex-wrap","gap-3"],[1,"flex","align-items-center"],["name","pizza","value","All","inputId","ingredient1",3,"ngModel","ngModelChange"],["for","ingredient1",1,"ml-2"],["name","pizza","value","ActiveOnly","inputId","ingredient2",3,"ngModel","ngModelChange"],["for","ingredient2",1,"ml-2"],["name","pizza","value","InActiveOnly","inputId","ingredient3",3,"ngModel","ngModelChange"],["for","ingredient3",1,"ml-2"],[3,"cols","rowsPageNumbers","pagination","scrollable","SecondBtn","contentSecondBtn","classSecondBtn","FirstBtn","contentFirstBtn","classFirstBtn","data","chooseColomns","secondButtonEvent","firstButtonEvent"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h3",2),e._uU(3," \u0642\u0648\u0627\u0626\u0645 \u0627\u0644\u0623\u0633\u0639\u0627\u0631 "),e.qZA(),e.TgZ(4,"div",3)(5,"a",4),e.NdJ("click",function(){return i.CreateNewPriceList()}),e._uU(6," \u0642\u0627\u0626\u0645\u0629 \u0623\u0633\u0639\u0627\u0631 \u062c\u062f\u064a\u062f\u0629 "),e.qZA()()(),e.TgZ(7,"div",5)(8,"div",6)(9,"div",7)(10,"div",8)(11,"p-radioButton",9),e.NdJ("ngModelChange",function(s){return i.radioButtonValue=s})("ngModelChange",function(){return i.Search()}),e.qZA(),e.TgZ(12,"label",10),e._uU(13,"\u0627\u0644\u0643\u0644"),e.qZA()(),e.TgZ(14,"div",8)(15,"p-radioButton",11),e.NdJ("ngModelChange",function(s){return i.radioButtonValue=s})("ngModelChange",function(){return i.Search()}),e.qZA(),e.TgZ(16,"label",12),e._uU(17,"\u0627\u0644\u0645\u063a\u0639\u0644 \u0641\u0642\u0637"),e.qZA()(),e.TgZ(18,"div",8)(19,"p-radioButton",13),e.NdJ("ngModelChange",function(s){return i.radioButtonValue=s})("ngModelChange",function(){return i.Search()}),e.qZA(),e.TgZ(20,"label",14),e._uU(21,"\u0627\u0644\u063a\u064a\u0631 \u0645\u0641\u0639\u0644 \u0641\u0642\u0637"),e.qZA()()()(),e._UZ(22,"br"),e.TgZ(23,"app-shared-datatable",15),e.NdJ("secondButtonEvent",function(s){return i.edit(s)})("firstButtonEvent",function(s){return i.delete(s)}),e.qZA()()()),2&t&&(e.xp6(11),e.Q6J("ngModel",i.radioButtonValue),e.xp6(4),e.Q6J("ngModel",i.radioButtonValue),e.xp6(4),e.Q6J("ngModel",i.radioButtonValue),e.xp6(4),e.Q6J("cols",i.Cols)("rowsPageNumbers",25)("pagination",!0)("scrollable",!1)("SecondBtn",!0)("contentSecondBtn",i.contentSecondBtnForFirstButton)("classSecondBtn",i.classForSecondButtonForSecondButton)("FirstBtn",!0)("contentFirstBtn",i.contentFirstBtnForFirstButton)("classFirstBtn",i.classForFirstButtonForFirstButton)("data",i.Data)("chooseColomns",!0))},dependencies:[N.G,c.JJ,c.On,f.EU]}),n})()}];let E=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[p.Bz.forChild(w),p.Bz]}),n})();var J=u(2643),I=u(7913);let U=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[g.ez,J.m,c.u5,I.Iu,h.nD,f.cc,E]}),n})()}}]);