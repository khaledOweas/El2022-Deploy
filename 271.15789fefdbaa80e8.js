"use strict";(self.webpackChunkEKOWebUI=self.webpackChunkEKOWebUI||[]).push([[271],{8271:(j,b,i)=>{i.r(b),i.d(b,{AccountantModule:()=>q});var p=i(6895),D=i(7799),f=i(9345),w=i(805),m=i(4325),u=i(8968),C=i(1462),c=i(5153),d=i(2327),l=i(3147),_=i(5226),g=i.n(_),t=i(4650),A=i(9320),v=i(5543),B=i(4380),h=i(4006),y=i(2453),T=i(2210);function S(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"button",21),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.PaymentAction())}),t._uU(1," \u062d\u0641\u0638 "),t._UZ(2,"i",22),t.qZA()}}function Z(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"button",23),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.PaymentAction())}),t._uU(1," \u062a\u062d\u062f\u064a\u062b "),t._UZ(2,"i",22),t.qZA()}}function M(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"button",25),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.RecivedAction())}),t._uU(1," \u062d\u0641\u0638 "),t._UZ(2,"i",26),t.qZA()}}function U(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"button",27),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.RecivedAction())}),t._uU(1," \u062a\u062d\u062f\u064a\u062b "),t._UZ(2,"i",26),t.qZA()}}function P(o,r){if(1&o&&(t.TgZ(0,"div",15)(1,"span"),t._UZ(2,"i",16),t._uU(3," \u0625\u062c\u0645\u0627\u0644\u064a \u0627\u0644\u0632\u064a\u0627\u0631\u0627\u062a "),t.qZA(),t.TgZ(4,"span",17),t._uU(5),t.qZA()()),2&o){const e=t.oxw().$implicit;t.xp6(5),t.hij(" ",e.total," ")}}function I(o,r){if(1&o&&(t.TgZ(0,"div",18)(1,"span"),t._UZ(2,"i",16),t._uU(3," \u0625\u062c\u0645\u0627\u0644\u064a \u0627\u0644\u0645\u062f\u064a\u0648\u0646\u064a\u0627\u062a "),t.qZA(),t.TgZ(4,"span",17),t._uU(5),t.qZA()()),2&o){const e=t.oxw().$implicit;t.xp6(5),t.hij(" ",e.total," ")}}function N(o,r){if(1&o&&(t.TgZ(0,"div"),t.YNc(1,P,6,1,"div",13),t.YNc(2,I,6,1,"div",14),t.qZA()),2&o){const e=r.$implicit;t.xp6(1),t.Q6J("ngIf",1==e.typeId),t.xp6(1),t.Q6J("ngIf",2==e.typeId)}}function R(o,r){if(1&o&&(t.TgZ(0,"div")(1,"div",19)(2,"span"),t._UZ(3,"i",16),t._uU(4),t.qZA(),t.TgZ(5,"span",17),t._uU(6),t.qZA()()()),2&o){const e=r.$implicit;t.xp6(4),t.hij(" ",e.typeName," "),t.xp6(2),t.hij(" ",e.total," ")}}const E=[{path:"",redirectTo:"AccountantPayments",pathMatch:"full"},{path:"AccountantPayments",canActivate:[f.o],component:(()=>{class o{constructor(e,n,a,s,G){this.service=e,this.cdRef=n,this.dialogService=a,this.messageService=s,this.cts=G,this.SaveMode="save",this.contentFirstBtnForFirstButton='<i class="pi pi-trash text-white"></i>',this.classForFirstButtonForFirstButton=" bg-danger text-white",this.contentSecondBtnForFirstButton='<i class="pi pi-file-edit text-white"></i>',this.classForSecondButtonForSecondButton=" bg-primary text-white",this.PaymentCategories=[],this.Cols=C.i0}ngOnInit(){this.LoadAllPaymentToday(),this.LoadAllPaymentCategory(),this.CurrentBranch=u.hl.find(e=>e.id==(new l.lX).GetUserAppSettings().CurrentBranchId)?.name,this.CurrnetDrawer=u.oZ.find(e=>e.id==(new l.lX).GetUserAppSettings().CurrentDrawerId)?.name}LoadAllPaymentToday(){let e=new c.eU;e.branchId=(new l.lX).GetUserAppSettings().CurrentBranchId,e.dateFrom=d.s.DateFrom(new Date),e.dateTo=d.s.DateTo(new Date),this.service.getPaymentsDetails(e).subscribe({next:n=>{this.Data=n,this.Clear(),this.cdRef.detectChanges()},error:n=>{}})}Search(e){let n=new c.eU;n.branchId=e.SelectedBranch.id,n.dateFrom=e.DateFrom,n.dateTo=e.DateTo,this.service.getPaymentsDetails(n).subscribe({next:a=>{this.Data=a,this.cdRef.detectChanges()},error:a=>{}})}LoadAllPaymentCategory(){this.service.getAllPaymentCategory().subscribe({next:e=>{this.PaymentCategories=e,this.cdRef.detectChanges()},error:()=>{}})}editPayment(e){this.Amount=e.tHEVALUE,this.AmountDetails=e.cOMMENT,this.SelectedPaymentCategory=this.PaymentCategories.find(n=>n.paymentCategoryName==e.paymentCategoryName),this.selectedPaymentToEdit=e,this.SaveMode="update"}deletePayment(e){g().fire({title:" \u0647\u0644 \u0627\u0646\u062a \u0645\u062a\u0623\u0643\u062f \u0645\u0646 \u062d\u0630\u0641 \u0627\u0644\u0642\u064a\u0645\u0629 \u061f ",html:`\u0645\u0635\u0631\u0648\u0641 \u0628\u064a\u0642\u064a\u0645\u0629 ${e.tHEVALUE} \u062c\u0646\u064a\u0629 \u0628\u062a\u0639\u0644\u064a\u0642 / ${e.cOMMENT}`,showDenyButton:!0,confirmButtonText:"\u0646\u0639\u0645",denyButtonText:"\u0644\u0627"}).then(n=>{if(n.isConfirmed){let a=new c.Pr;a.paymentId=e.dOCID,this.service.deletePayment(a).subscribe({next:s=>{1==s&&(this.cts.sendToster("success","\u062d\u0630\u0641 \u0642\u064a\u0645\u0629 \u0645\u0646 \u0627\u0644\u0645\u0635\u0631\u0648\u0641\u0627\u062a","\u062a\u0645 \u062d\u0630\u0641 \u0627\u0644\u0642\u064a\u0645\u0629 \u0628\u0646\u062c\u0627\u062d",`\u0645\u0635\u0631\u0648\u0641 \u0628\u064a\u0642\u064a\u0645\u0629 ${e.tHEVALUE} \u062c\u0646\u064a\u0629 \u0628\u062a\u0639\u0644\u064a\u0642 / ${e.cOMMENT}`),this.LoadAllPaymentToday(),this.cdRef.detectChanges())},error:()=>{this.cts.sendToster("error","\u062d\u0630\u0641 \u0642\u064a\u0645\u0629 \u0645\u0646 \u0627\u0644\u0645\u0635\u0631\u0648\u0641\u0627\u062a","\u062d\u062f\u062b \u062e\u0637\u0623 \u0623\u062b\u0646\u0627\u0621 \u062d\u0630\u0641 \u0627\u0644\u0642\u064a\u0645\u0629",`\u0645\u0635\u0631\u0648\u0641 \u0628\u064a\u0642\u064a\u0645\u0629 ${e.tHEVALUE} \u062c\u0646\u064a\u0629 \u0628\u062a\u0639\u0644\u064a\u0642 / ${e.cOMMENT}`)}})}else n.isDenied&&g().fire("\u062a\u0645 \u0627\u0644\u063a\u0627\u0621 \u0627\u0644\u0639\u0645\u0644\u064a\u0629","","info")})}PaymentAction(){null!=this.SelectedPaymentCategory?0!=this.Amount?0!=this.AmountDetails.length?"save"==this.SaveMode?this.AddPayment():"update"==this.SaveMode&&this.UpdatePayment():this.cts.sendTosterWithoutLog("error","\u062d\u062f\u062b \u062e\u0637\u0623","\u064a\u062c\u0628 \u0627\u062f\u062e\u0627\u0644 \u062a\u0641\u0627\u0635\u064a\u0644 \u0627\u0644\u0642\u064a\u0645\u0629 \u0628\u0634\u0643\u0644 \u0635\u062d\u064a\u062d"):this.cts.sendTosterWithoutLog("error","\u062d\u062f\u062b \u062e\u0637\u0623","\u064a\u062c\u0628 \u0627\u062f\u062e\u0627\u0644 \u0627\u0644\u0642\u064a\u0645\u0629 \u0628\u0634\u0643\u0644 \u0635\u062d\u064a\u062d"):this.cts.sendTosterWithoutLog("error","\u062d\u062f\u062b \u062e\u0637\u0623","\u064a\u062c\u0628 \u0627\u062e\u062a\u064a\u0627\u0631 \u0627\u0644\u0642\u0633\u0645")}AddPayment(){let e=new c.Tn;e.clientDateTime=d.s.ExactlyDateTime(d.s.Now()),e.drawerId=(new l.lX).GetUserAppSettings().CurrentDrawerId,e.branchId=(new l.lX).GetUserAppSettings().CurrentBranchId,e.paymentCategoryID=this.SelectedPaymentCategory.iD,e.value=this.Amount,e.paymentComment=this.AmountDetails,this.service.addNewPayment(e).subscribe({next:n=>{1==n&&(this.cts.sendToster("success","\u0625\u0636\u0627\u0641\u0629 \u0645\u0635\u0631\u0648\u0641","\u062a\u0645 \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0642\u064a\u0645\u0629 \u0628\u0646\u062c\u0627\u062d",` \u0627\u0636\u0627\u0641\u0629 \u0645\u0635\u0631\u0648\u0641\u0627\u062a \u0628\u0642\u064a\u0645\u0629 ${e.value} \u0641\u064a \u0642\u0633\u0645 ${this.SelectedPaymentCategory?.paymentCategoryName} \u0628\u062a\u0639\u0644\u064a\u0642 ${e.paymentComment}`),this.LoadAllPaymentToday(),this.cdRef.detectChanges())},error:()=>{this.cts.sendTosterWithoutLog("error","\u062d\u062f\u062b \u062e\u0637\u0623","\u062d\u062f\u062b \u062e\u0637\u0623 \u0623\u062b\u0646\u0627\u0621 \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0642\u064a\u0645\u0629")}})}UpdatePayment(){let e=new c.lG;e.clientDateTime=new Date,e.drawerId=0,e.branchId=0,e.paymentCategoryID=this.SelectedPaymentCategory.iD,e.value=this.Amount,e.paymentComment=this.AmountDetails,e.paymentId=this.selectedPaymentToEdit.dOCID,this.service.updatePayment(e).subscribe({next:n=>{1==n&&(this.messageService.add({severity:"success",summary:"\u0639\u0645\u0644\u064a\u0629 \u0646\u0627\u062c\u062d\u0629",detail:"\u062a\u0645 \u062a\u0639\u062f\u064a\u0644 \u0627\u0644\u0642\u064a\u0645\u0629 \u0628\u0646\u062c\u0627\u062d"}),this.cts.sendToster("success","\u062a\u0639\u062f\u064a\u0644 \u0645\u0635\u0631\u0648\u0641","\u062a\u0645 \u062a\u0639\u062f\u064a\u0644 \u0627\u0644\u0642\u064a\u0645\u0629 \u0628\u0646\u062c\u0627\u062d",` \u062a\u0639\u062f\u064a\u0644 \u0645\u0635\u0631\u0648\u0641\u0627\u062a \u0628\u0642\u064a\u0645\u0629 ${e.value} \u0641\u064a \u0642\u0633\u0645 ${this.SelectedPaymentCategory?.paymentCategoryName} \u0628\u062a\u0639\u0644\u064a\u0642 ${e.paymentComment}`),this.LoadAllPaymentToday(),this.cdRef.detectChanges())},error:()=>{this.cts.sendTosterWithoutLog("error","\u062d\u062f\u062b \u062e\u0637\u0623","\u062d\u062f\u062b \u062e\u0637\u0623 \u0623\u062b\u0646\u0627\u0621 \u062a\u0639\u062f\u064a\u0644 \u0627\u0644\u0642\u064a\u0645\u0629")}})}Clear(){this.Amount=0,this.AmountDetails="",this.SelectedPaymentCategory=null,this.SaveMode="save"}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(c.KU),t.Y36(t.sBO),t.Y36(m.xA),t.Y36(w.ez),t.Y36(A.m))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-accountant-payments"]],features:[t._Bn([w.ez,m.xA])],decls:48,vars:24,consts:[["position","top-left",3,"showTransformOptions"],[1,"card","card-flush","shadow-sm"],[1,"card-header"],["translate","MENU.ExpensesAmount",1,"card-title"],[1,"card-toolbar"],[1,"card-body","py-5"],[3,"rangeDates","WithSinglBranch","onSearchSubmit"],[1,"row"],[1,"col-md-4"],[1,"d-flex","flex-column","mb-8","fv-row"],[1,"d-flex","align-items-center","fs-6","fw-bold","mb-2"],[1,""],["type","text","disabled","",1,"form-control",3,"ngModel","ngModelChange"],["styleClass"," taj-font fc-primng","placeholder","\u0627\u062e\u062a\u0631 \u0627\u0644\u0642\u0633\u0645","filterBy","paymentCategoryName","optionLabel","paymentCategoryName",3,"options","filter","ngModel","ngModelChange"],["type","text","placeholder","\u0627\u062f\u062e\u0644 \u0627\u0644\u0645\u0628\u0644\u063a",1,"form-control",3,"ngModel","ngModelChange"],["type","text","placeholder","\u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0640\u0644",1,"form-control",3,"ngModel","ngModelChange"],[1,"row",2,"display","flex","justify-content","center"],[1,"col-md-5",2,"display","flex","justify-content","center"],["class","btn btn-light-success","style","margin-top: 30px;direction: ltr;width: 35%;",3,"click",4,"ngIf"],["class","btn btn-light-primary","style","margin-top: 30px;direction: ltr;width: 35%;",3,"click",4,"ngIf"],[3,"cols","rowsPageNumbers","SecondBtn","contentSecondBtn","classSecondBtn","FirstBtn","contentFirstBtn","classFirstBtn","data","chooseColomns","pagination","scrollable","secondButtonEvent","firstButtonEvent"],[1,"btn","btn-light-success",2,"margin-top","30px","direction","ltr","width","35%",3,"click"],[1,"fa-solid","fa-floppy-disk"],[1,"btn","btn-light-primary",2,"margin-top","30px","direction","ltr","width","35%",3,"click"]],template:function(e,n){1&e&&(t._UZ(0,"p-toast",0),t.TgZ(1,"div",1)(2,"div",2),t._UZ(3,"h3",3)(4,"div",4),t.qZA(),t.TgZ(5,"div",5)(6,"app-searchcriteria",6),t.NdJ("onSearchSubmit",function(s){return n.Search(s)}),t.qZA(),t._UZ(7,"br"),t.TgZ(8,"div",7)(9,"div",8)(10,"div",9)(11,"label",10)(12,"span",11),t._uU(13," \u0627\u0644\u0641\u0631\u0639 "),t.qZA()(),t.TgZ(14,"input",12),t.NdJ("ngModelChange",function(s){return n.CurrentBranch=s}),t.qZA()()(),t.TgZ(15,"div",8)(16,"div",9)(17,"label",10)(18,"span",11),t._uU(19,"\u0627\u0644\u062f\u0631\u062c "),t.qZA()(),t.TgZ(20,"input",12),t.NdJ("ngModelChange",function(s){return n.CurrnetDrawer=s}),t.qZA()()()(),t._UZ(21,"br"),t.TgZ(22,"div",7)(23,"div",8)(24,"div",9)(25,"label",10)(26,"span",11),t._uU(27,"\u0627\u0644\u0642\u0633\u0645"),t.qZA()(),t.TgZ(28,"p-dropdown",13),t.NdJ("ngModelChange",function(s){return n.SelectedPaymentCategory=s}),t.qZA()()(),t.TgZ(29,"div",8)(30,"div",9)(31,"label",10)(32,"span",11),t._uU(33,"\u0627\u0644\u0645\u0628\u0644\u063a"),t.qZA()(),t.TgZ(34,"input",14),t.NdJ("ngModelChange",function(s){return n.Amount=s}),t.qZA()()(),t.TgZ(35,"div",8)(36,"div",9)(37,"label",10)(38,"span",11),t._uU(39,"\u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644"),t.qZA()(),t.TgZ(40,"input",15),t.NdJ("ngModelChange",function(s){return n.AmountDetails=s}),t.qZA()()()(),t.TgZ(41,"div",16)(42,"div",17),t.YNc(43,S,3,0,"button",18),t.YNc(44,Z,3,0,"button",19),t.qZA()(),t.TgZ(45,"div",7)(46,"div")(47,"app-shared-datatable",20),t.NdJ("secondButtonEvent",function(s){return n.editPayment(s)})("firstButtonEvent",function(s){return n.deletePayment(s)}),t.qZA()()()()()),2&e&&(t.Q6J("showTransformOptions","translateX(100%)"),t.xp6(6),t.Q6J("rangeDates",n.rangeDates)("WithSinglBranch",!0),t.xp6(8),t.Q6J("ngModel",n.CurrentBranch),t.xp6(6),t.Q6J("ngModel",n.CurrnetDrawer),t.xp6(8),t.Q6J("options",n.PaymentCategories)("filter",!0)("ngModel",n.SelectedPaymentCategory),t.xp6(6),t.Q6J("ngModel",n.Amount),t.xp6(6),t.Q6J("ngModel",n.AmountDetails),t.xp6(3),t.Q6J("ngIf","save"==n.SaveMode),t.xp6(1),t.Q6J("ngIf","update"==n.SaveMode),t.xp6(3),t.Q6J("cols",n.Cols)("rowsPageNumbers",25)("SecondBtn",!0)("contentSecondBtn",n.contentSecondBtnForFirstButton)("classSecondBtn",n.classForSecondButtonForSecondButton)("FirstBtn",!0)("contentFirstBtn",n.contentFirstBtnForFirstButton)("classFirstBtn",n.classForFirstButtonForFirstButton)("data",n.Data)("chooseColomns",!0)("pagination",!0)("scrollable",!1))},dependencies:[p.O5,v.G,B.d,h.Fj,h.JJ,h.On,y.FN,T.Lt],encapsulation:2}),o})()},{path:"AccountantRecived",canActivate:[f.o],component:(()=>{class o{constructor(e,n,a,s){this.service=e,this.cdRef=n,this.dialogService=a,this.cts=s,this.SaveMode="save",this.branchs=[],this.SelectedBranchId={},this.drawers=[],this.SelectedDrawerId=0,this.contentFirstBtnForFirstButton='<i class="pi pi-trash text-white"></i>',this.classForFirstButtonForFirstButton=" bg-danger text-white",this.contentSecondBtnForFirstButton='<i class="pi pi-file-edit text-white"></i>',this.classForSecondButtonForSecondButton=" bg-primary text-white",this.Cols=C.F$,this.branchs=u.hl}ngOnInit(){this.LoadAllRecivedToday(),this.service.getAllForDropDownDeel().subscribe({next:e=>{this.deels=e,this.SelectedDeel=new c.A1,this.cdRef.detectChanges()}}),this.SelectedBranchId=u.hl.find(e=>e.id==(new l.lX).GetUserAppSettings().CurrentBranchId)?.id??u.hl[0].id,this.SelectedDrawerId=u.oZ.find(e=>e.id==(new l.lX).GetUserAppSettings().CurrentDrawerId)?.id??u.oZ[0].id,this.onChangeBranch()}LoadAllRecivedToday(){let e=new c.eU;e.branchId=(new l.lX).GetUserAppSettings().CurrentBranchId,e.dateFrom=d.s.DateFrom(new Date),e.dateTo=d.s.DateTo(new Date),this.service.getRecivedDetails(e).subscribe({next:n=>{this.Data=n,this.Clear(),this.cdRef.detectChanges()},error:n=>{}})}Search(e){let n=new c.eU;n.branchId=e.SelectedBranchId,n.dateFrom=e.DateFrom,n.dateTo=e.DateTo,this.service.getRecivedDetails(n).subscribe({next:a=>{this.Data=a,this.cdRef.detectChanges()},error:a=>{}})}deleteRecived(e){g().fire({title:" \u0647\u0644 \u0627\u0646\u062a \u0645\u062a\u0623\u0643\u062f \u0645\u0646 \u062d\u0630\u0641 \u0627\u0644\u0642\u064a\u0645\u0629 \u061f ",html:`\u062a\u062d\u0635\u064a\u0644 \u0628\u064a\u0642\u064a\u0645\u0629 ${e.tHEVALUE} \u062c\u0646\u064a\u0629 \u0628\u062a\u0639\u0644\u064a\u0642 / ${e.cOMMENT}`,showDenyButton:!0,confirmButtonText:"\u0646\u0639\u0645",denyButtonText:"\u0644\u0627"}).then(n=>{n.isConfirmed?this.service.deleteRecived(e.dOCID).subscribe({next:a=>{1==a&&(this.cts.sendToster("success","\u062d\u0630\u0641 \u0642\u064a\u0645\u0629 \u0645\u0646 \u0627\u0644\u062a\u062d\u0635\u064a\u0644\u0627\u062a","\u062a\u0645 \u062d\u0630\u0641 \u0627\u0644\u0642\u064a\u0645\u0629 \u0628\u0646\u062c\u0627\u062d",`\u062a\u062d\u0635\u064a\u0644 \u0628\u064a\u0642\u064a\u0645\u0629 ${e.tHEVALUE} \u062c\u0646\u064a\u0629 \u0628\u062a\u0639\u0644\u064a\u0642 / ${e.cOMMENT}`),this.LoadAllRecivedToday(),this.cdRef.detectChanges())},error:()=>{this.cts.sendToster("error","\u062d\u0630\u0641 \u0642\u064a\u0645\u0629 \u0645\u0646 \u0627\u0644\u062a\u062d\u0635\u064a\u0644\u0627\u062a","\u062d\u062f\u062b \u062e\u0637\u0623 \u0623\u062b\u0646\u0627\u0621 \u062d\u0630\u0641 \u0627\u0644\u0642\u064a\u0645\u0629",`\u062a\u062d\u0635\u064a\u0644 \u0628\u064a\u0642\u064a\u0645\u0629 ${e.tHEVALUE} \u062c\u0646\u064a\u0629 \u0628\u062a\u0639\u0644\u064a\u0642 / ${e.cOMMENT}`)}}):n.isDenied&&g().fire("\u062a\u0645 \u0627\u0644\u063a\u0627\u0621 \u0627\u0644\u0639\u0645\u0644\u064a\u0629","","info")})}RecivedAction(){0!=this.Amount?0!=this.SelectedDrawerId?0!=this.AmountDetails.length?"save"==this.SaveMode&&this.AddRecived():this.cts.sendTosterWithoutLog("error","\u062d\u062f\u062b \u062e\u0637\u0623","\u064a\u062c\u0628 \u0627\u062f\u062e\u0627\u0644 \u062a\u0641\u0627\u0635\u064a\u0644 \u0627\u0644\u0642\u064a\u0645\u0629 \u0628\u0634\u0643\u0644 \u0635\u062d\u064a\u062d"):this.cts.sendTosterWithoutLog("error","\u062d\u062f\u062b \u062e\u0637\u0623","\u064a\u062c\u0628 \u0627\u062e\u062a\u064a\u0627\u0631 \u0627\u0644\u062f\u0631\u062c \u0628\u0634\u0643\u0644 \u0635\u062d\u064a\u062d"):this.cts.sendTosterWithoutLog("error","\u062d\u062f\u062b \u062e\u0637\u0623","\u064a\u062c\u0628 \u0627\u062f\u062e\u0627\u0644 \u0627\u0644\u0642\u064a\u0645\u0629 \u0628\u0634\u0643\u0644 \u0635\u062d\u064a\u062d")}AddRecived(){let e=new c.ZJ;e.clientDateTime=d.s.ExactlyDateTime(d.s.Now()),e.drawerId=this.SelectedDrawerId,e.branchId=this.SelectedBranchId,e.value=this.Amount,e.recivedComment=this.AmountDetails,e.dealId=this.SelectedDeel.id,this.service.addNewRecived(e).subscribe({next:n=>{1==n&&(this.cts.sendToster("success","\u0625\u0636\u0627\u0641\u0629 \u062a\u062d\u0635\u064a\u0644","\u062a\u0645 \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0642\u064a\u0645\u0629 \u0628\u0646\u062c\u0627\u062d",` \u0627\u0636\u0627\u0641\u0629 \u062a\u062d\u0635\u064a\u0644\u0627\u062a \u0628\u0642\u064a\u0645\u0629 ${e.value} \u0628\u062a\u0639\u0644\u064a\u0642 ${e.recivedComment}`),this.LoadAllRecivedToday(),this.cdRef.detectChanges())},error:()=>{this.cts.sendTosterWithoutLog("error","\u062d\u062f\u062b \u062e\u0637\u0623","\u062d\u062f\u062b \u062e\u0637\u0623 \u0623\u062b\u0646\u0627\u0621 \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0642\u064a\u0645\u0629")}})}Clear(){this.Amount=0,this.AmountDetails="",this.SaveMode="save"}onChangeBranch(){this.SelectedDrawerId=0,this.drawers=u.oZ.filter(e=>e.branchId==this.SelectedBranchId),this.cdRef.detectChanges()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(c.KU),t.Y36(t.sBO),t.Y36(m.xA),t.Y36(A.m))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-accountant-recived"]],features:[t._Bn([m.xA])],decls:43,vars:22,consts:[[1,"card","card-flush","shadow-sm"],[1,"card-header"],["translate","MENU.ExpensesAmount",1,"card-title"],[1,"card-toolbar"],[1,"card-body","py-5"],[3,"rangeDates","WithSinglBranch","onSearchSubmit"],[1,"row"],[1,"card-body","p-9"],[1,"row","mb-7"],[1,"col-md-4"],["for","range",1,"d-flex","align-items-center","fs-6","fw-bold","mb-2"],["styleClass"," taj-font fc-primng","placeholder","\u0627\u062e\u062a\u0631 \u0627\u0644\u0641\u0631\u0639","optionValue","id","optionLabel","name",3,"options","ngModel","onChange","ngModelChange"],["styleClass"," taj-font fc-primng","placeholder","\u0627\u062e\u062a\u0631 \u0627\u0644\u062f\u0631\u062c","optionValue","id","optionLabel","name",3,"options","ngModel","ngModelChange"],["for","range",1,"h3"],["styleClass"," taj-font fc-primng","filterBy","name","placeholder","\u0627\u062e\u062a\u0631 \u0627\u0644\u062a\u0639\u0627\u0642\u062f","optionLabel","name",3,"options","filter","ngModel","ngModelChange"],[1,"d-flex","flex-column","mb-8","fv-row"],[1,"d-flex","align-items-center","fs-6","fw-bold","mb-2"],[1,""],["type","text","placeholder","\u0627\u062f\u062e\u0644 \u0627\u0644\u0645\u0628\u0644\u063a",1,"form-control",3,"ngModel","ngModelChange"],["type","text","placeholder","\u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0640\u0644",1,"form-control",3,"ngModel","ngModelChange"],[1,"row",2,"display","flex","justify-content","center"],[1,"col-md-5",2,"display","flex","justify-content","center"],["class","btn btn-light-success","style","margin-top: 30px;direction: ltr;width: 35%;",3,"click",4,"ngIf"],["class","btn btn-light-primary","style","margin-top: 30px;direction: ltr;width: 35%;",3,"click",4,"ngIf"],[3,"cols","rowsPageNumbers","FirstBtn","contentFirstBtn","classFirstBtn","data","chooseColomns","pagination","scrollable","firstButtonEvent"],[1,"btn","btn-light-success",2,"margin-top","30px","direction","ltr","width","35%",3,"click"],[1,"fa-solid","fa-floppy-disk"],[1,"btn","btn-light-primary",2,"margin-top","30px","direction","ltr","width","35%",3,"click"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"h3",2)(3,"div",3),t.qZA(),t.TgZ(4,"div",4)(5,"app-searchcriteria",5),t.NdJ("onSearchSubmit",function(s){return n.Search(s)}),t.qZA(),t._UZ(6,"br"),t.TgZ(7,"div",6)(8,"div",7)(9,"div",8)(10,"div",9)(11,"label",10),t._uU(12," \u0627\u0644\u0641\u0631\u0639"),t.qZA(),t.TgZ(13,"p-dropdown",11),t.NdJ("onChange",function(){return n.onChangeBranch()})("ngModelChange",function(s){return n.SelectedBranchId=s}),t.qZA()(),t.TgZ(14,"div",9)(15,"label",10),t._uU(16," \u0627\u0644\u062f\u0631\u062c"),t.qZA(),t.TgZ(17,"p-dropdown",12),t.NdJ("ngModelChange",function(s){return n.SelectedDrawerId=s}),t.qZA()()()()(),t._UZ(18,"br"),t.TgZ(19,"div",6)(20,"div",9)(21,"label",13),t._uU(22," \u0627\u0644\u062a\u0639\u0627\u0642\u062f "),t.qZA(),t.TgZ(23,"p-dropdown",14),t.NdJ("ngModelChange",function(s){return n.SelectedDeel=s}),t.qZA()(),t.TgZ(24,"div",9)(25,"div",15)(26,"label",16)(27,"span",17),t._uU(28,"\u0627\u0644\u0645\u0628\u0644\u063a"),t.qZA()(),t.TgZ(29,"input",18),t.NdJ("ngModelChange",function(s){return n.Amount=s}),t.qZA()()(),t.TgZ(30,"div",9)(31,"div",15)(32,"label",16)(33,"span",17),t._uU(34,"\u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644"),t.qZA()(),t.TgZ(35,"input",19),t.NdJ("ngModelChange",function(s){return n.AmountDetails=s}),t.qZA()()()(),t.TgZ(36,"div",20)(37,"div",21),t.YNc(38,M,3,0,"button",22),t.YNc(39,U,3,0,"button",23),t.qZA()(),t.TgZ(40,"div",6)(41,"div")(42,"app-shared-datatable",24),t.NdJ("firstButtonEvent",function(s){return n.deleteRecived(s)}),t.qZA()()()()()),2&e&&(t.xp6(5),t.Q6J("rangeDates",n.rangeDates)("WithSinglBranch",!0),t.xp6(8),t.Q6J("options",n.branchs)("ngModel",n.SelectedBranchId),t.xp6(4),t.Q6J("options",n.drawers)("ngModel",n.SelectedDrawerId),t.xp6(6),t.Q6J("options",n.deels)("filter",!0)("ngModel",n.SelectedDeel),t.xp6(6),t.Q6J("ngModel",n.Amount),t.xp6(6),t.Q6J("ngModel",n.AmountDetails),t.xp6(3),t.Q6J("ngIf","save"==n.SaveMode),t.xp6(1),t.Q6J("ngIf","update"==n.SaveMode),t.xp6(3),t.Q6J("cols",n.Cols)("rowsPageNumbers",25)("FirstBtn",!0)("contentFirstBtn",n.contentFirstBtnForFirstButton)("classFirstBtn",n.classForFirstButtonForFirstButton)("data",n.Data)("chooseColomns",!0)("pagination",!0)("scrollable",!1))},dependencies:[p.O5,v.G,B.d,h.Fj,h.JJ,h.On,T.Lt],encapsulation:2}),o})()},{path:"Casher",canActivate:[f.o],component:(()=>{class o{constructor(e,n,a){this.service=e,this.cdRef=n,this.cts=a,this.DrawerDetailsResultList=[],this.contentFirstBtnForFirstButton='<i class="pi pi-trash text-white"></i>',this.classForFirstButtonForFirstButton=" bg-danger text-white",this.contentSecondBtnForFirstButton='<i class="pi pi-file-edit text-white"></i>',this.classForSecondButtonForSecondButton=" bg-primary text-white",this.Cols=C.N$}ngOnInit(){this.loadDrawerData(),this.CurrentBranch=u.hl.find(e=>e.id==(new l.lX).GetUserAppSettings().CurrentBranchId)?.name,this.CurrnetDrawer=u.oZ.find(e=>e.id==(new l.lX).GetUserAppSettings().CurrentDrawerId)?.name}loadBranchData(){let e=new c.eU;e.branchId=(new l.lX).GetUserAppSettings().CurrentBranchId,e.dateFrom=d.s.DateFrom(new Date),e.dateTo=d.s.DateTo(new Date),this.service.getTotalByBranch(e).subscribe({next:n=>{this.BranchDetailsResult=n,this.cts.sendToster("success","\u0627\u0633\u062a\u0639\u0644\u0627\u0645 \u0639\u0646 \u0627\u0644\u062f\u0631\u062c","\u062a\u0645 \u0627\u0644\u0627\u0633\u062a\u0639\u0644\u0627\u0645 \u0628\u0646\u062c\u0627\u062d ",`\u0627\u0633\u062a\u0639\u0644\u0627\u0645 \u0639\u0646 \u0627\u0644\u062f\u0631\u062c ${this.CurrnetDrawer} \u0644\u0644\u0641\u0631\u0639 ${this.CurrentBranch}`),this.cdRef.detectChanges()}})}loadDrawerData(){let e=new c.oe;e.drawerId=(new l.lX).GetUserAppSettings().CurrentDrawerId,e.dateFrom=d.s.DateFrom(new Date),e.dateTo=d.s.DateTo(new Date),this.service.getCasherById(e).subscribe({next:n=>{this.DrawerDetailsResult=n,this.DrawerDetailsResultList.push(c.QV.fromJS({Total:n.getCounts?.allCashNewVisit,TypeName:"\u0625\u062c\u0645\u0640\u0627\u0644\u064a \u0627\u0644\u0632\u064a\u0627\u0631\u0627\u062a"})),this.DrawerDetailsResultList.push(c.QV.fromJS({Total:n.getCounts?.allCashOldVisit,TypeName:"\u0625\u062c\u0645\u0640\u0640\u0627\u0644\u064a \u0627\u0644\u0645\u062f\u064a\u0648\u0646\u064a\u0627\u062a"})),this.DrawerDetailsResultList.push(c.QV.fromJS({Total:n.getCounts?.allInDrawer,TypeName:"\u0627\u0644\u0635\u0640\u0640\u0627\u0641\u0649"})),n.getCounts?.allPaiedOther&&this.DrawerDetailsResultList.push(c.QV.fromJS({Total:n.getCounts?.allPaiedOther,TypeName:"\u0627\u0644\u0645\u0635\u0631\u0648\u0641\u0627\u062a"})),n.getCounts?.allout&&this.DrawerDetailsResultList.push(c.QV.fromJS({Total:n.getCounts?.allout,TypeName:"\u0627\u0644\u0625\u0633\u062a\u0631\u062f\u0627\u062f\u0627\u062a"})),this.Data=n.data,this.loadBranchData()}})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(c.KU),t.Y36(t.sBO),t.Y36(A.m))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-accountant-casher"]],features:[t._Bn([m.xA])],decls:22,vars:10,consts:[["position","top-left",3,"showTransformOptions"],[1,"card","card-flush","shadow-sm"],[1,"card-header"],["translate","MENU.CasherData",1,"card-title"],[1,"card-toolbar"],[1,"card-body","py-5"],[1,"row"],[1,"row",2,"margin","0 auto"],[1,"col-md-3"],[2,"border","1px solid #fbe6e6","padding","9px","border-radius","10px","background-image","linear-gradient(rgb(255 211 182), rgba(255, 255, 0, 0))"],[2,"display","flex","justify-content","center"],[4,"ngFor","ngForOf"],[3,"cols","rowsPageNumbers","data","pagination","scrollable"],["style","cursor: pointer;","class","StatisticsNumbersDetailsClass bg-light-success ",4,"ngIf"],["style","cursor: pointer;","class","StatisticsNumbersDetailsClass bg-light-primary ",4,"ngIf"],[1,"StatisticsNumbersDetailsClass","bg-light-success",2,"cursor","pointer"],[1,"text-dark","bi","bi-patch-plus",2,"padding","0 4px"],[2,"padding","5px","font-weight","700"],[1,"StatisticsNumbersDetailsClass","bg-light-primary",2,"cursor","pointer"],[1,"StatisticsNumbersDetailsClass","bg-light",2,"cursor","pointer"]],template:function(e,n){1&e&&(t._UZ(0,"p-toast",0),t.TgZ(1,"div",1)(2,"div",2),t._UZ(3,"h3",3)(4,"div",4),t.qZA(),t.TgZ(5,"div",5)(6,"div",6)(7,"div")(8,"div",7)(9,"div",8)(10,"div",9)(11,"span",10),t._uU(12),t.qZA(),t.YNc(13,N,3,2,"div",11),t.qZA()(),t.TgZ(14,"div",8)(15,"div",9)(16,"span",10),t._uU(17),t.qZA(),t.YNc(18,R,7,2,"div",11),t.qZA()()()()(),t.TgZ(19,"div",6)(20,"div"),t._UZ(21,"app-shared-datatable",12),t.qZA()()()()),2&e&&(t.Q6J("showTransformOptions","translateX(100%)"),t.xp6(12),t.hij(" \u062a\u0641\u0627\u0635\u064a\u0644 \u0641\u0631\u0639 ",n.CurrentBranch," "),t.xp6(1),t.Q6J("ngForOf",n.BranchDetailsResult),t.xp6(4),t.hij(" \u062a\u0641\u0627\u0635\u064a\u0644 ",n.CurrnetDrawer," "),t.xp6(1),t.Q6J("ngForOf",n.DrawerDetailsResultList),t.xp6(3),t.Q6J("cols",n.Cols)("rowsPageNumbers",20)("data",n.Data)("pagination",!0)("scrollable",!1))},dependencies:[p.sg,p.O5,v.G,y.FN],styles:[".StatisticsNumbersDetailsClass[_ngcontent-%COMP%]{display:flex;justify-content:space-between;line-height:2px;border-radius:8px;padding:10px;margin:3px;transition:transform .2s}.StatisticsNumbersDetailsClass[_ngcontent-%COMP%]:hover{transform:scale(1.2);font-weight:900;border:1px solid #120349}.StatisticsTabTextClass[_ngcontent-%COMP%]{transition:transform .2s;cursor:pointer}.StatisticsTabTextClass[_ngcontent-%COMP%]:hover{transform:scale(1.1);font-weight:900}"]}),o})()}];let L=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[D.Bz.forChild(E),D.Bz]}),o})();var O=i(7772),Q=i(2665),$=i(7816);let q=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[p.ez,$.m,h.u5,L,y.EV,T.kW,O.$,Q.O]}),o})()}}]);