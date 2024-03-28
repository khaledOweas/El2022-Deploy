"use strict";(self.webpackChunkEKOWebUI=self.webpackChunkEKOWebUI||[]).push([[512],{7512:(Y,A,i)=>{i.r(A),i.d(A,{AccountantModule:()=>V});var h=i(177),F=i(8742),g=i(7306),S=i(5779),m=i(660),d=i(7089),f=i(9501),C=i(9611),l=i(5487),B=i(9949),w=i(8130),T=i(8032),p=i.n(T),t=i(4438),y=i(3612),b=i(7427),u=i(9417),D=i(9998),v=i(5769);function R(a,c){if(1&a){const e=t.RV6();t.j41(0,"button",21),t.bIt("click",function(){t.eBV(e);const n=t.XpG();return t.Njj(n.PaymentAction())}),t.EFF(1," \u062d\u0641\u0638 "),t.nrm(2,"i",22),t.k0s()}}function I(a,c){if(1&a){const e=t.RV6();t.j41(0,"button",23),t.bIt("click",function(){t.eBV(e);const n=t.XpG();return t.Njj(n.PaymentAction())}),t.EFF(1," \u062a\u062d\u062f\u064a\u062b "),t.nrm(2,"i",22),t.k0s()}}function _(a,c){if(1&a){const e=t.RV6();t.j41(0,"button",25),t.bIt("click",function(){t.eBV(e);const n=t.XpG();return t.Njj(n.RecivedAction())}),t.EFF(1," \u062d\u0641\u0638 "),t.nrm(2,"i",26),t.k0s()}}function E(a,c){if(1&a){const e=t.RV6();t.j41(0,"button",27),t.bIt("click",function(){t.eBV(e);const n=t.XpG();return t.Njj(n.RecivedAction())}),t.EFF(1," \u062a\u062d\u062f\u064a\u062b "),t.nrm(2,"i",26),t.k0s()}}function P(a,c){if(1&a&&(t.j41(0,"div",17)(1,"span"),t.nrm(2,"i",18),t.EFF(3," \u0625\u062c\u0645\u0627\u0644\u064a \u0627\u0644\u0632\u064a\u0627\u0631\u0627\u062a "),t.k0s(),t.j41(4,"span",19),t.EFF(5),t.k0s()()),2&a){const e=t.XpG().$implicit;t.R7$(5),t.SpI(" ",e.total," ")}}function N(a,c){if(1&a&&(t.j41(0,"div",20)(1,"span"),t.nrm(2,"i",18),t.EFF(3," \u0625\u062c\u0645\u0627\u0644\u064a \u0627\u0644\u0645\u062f\u064a\u0648\u0646\u064a\u0627\u062a "),t.k0s(),t.j41(4,"span",19),t.EFF(5),t.k0s()()),2&a){const e=t.XpG().$implicit;t.R7$(5),t.SpI(" ",e.total," ")}}function k(a,c){if(1&a&&(t.j41(0,"div"),t.DNE(1,P,6,1,"div",15)(2,N,6,1,"div",16),t.k0s()),2&a){const e=c.$implicit;t.R7$(),t.Y8G("ngIf",1==e.typeId),t.R7$(),t.Y8G("ngIf",2==e.typeId)}}function $(a,c){if(1&a&&(t.j41(0,"div")(1,"div",21)(2,"span"),t.nrm(3,"i",18),t.EFF(4),t.k0s(),t.j41(5,"span",19),t.EFF(6),t.k0s()()()),2&a){const e=c.$implicit;t.R7$(4),t.SpI(" ",e.typeName," "),t.R7$(2),t.SpI(" ",e.total," ")}}const L=[{path:"",redirectTo:"AccountantPayments",pathMatch:"full"},{path:"AccountantPayments",canActivate:[g._],component:(()=>{class a extends C.${constructor(e,s,n){super(e),this.dialogService=s,this.messageService=n,this.SaveMode="save",this.contentFirstBtnForFirstButton='<i class="pi pi-trash text-white"></i>',this.classForFirstButtonForFirstButton=" bg-danger text-white",this.contentSecondBtnForFirstButton='<i class="pi pi-file-edit text-white"></i>',this.classForSecondButtonForSecondButton=" bg-primary text-white",this.PaymentCategories=[],this.Cols=f.m_}ngOnInit(){this.LoadAllPaymentToday(),this.LoadAllPaymentCategory(),this.CurrentBranch=d.hJ.find(e=>e.id==this.userHelper.GetUserAppSettings().CurrentBranchId)?.name,this.CurrnetDrawer=d.Kf.find(e=>e.id==this.userHelper.GetUserAppSettings().CurrentDrawerId)?.name}LoadAllPaymentToday(){let e=new l.Ojr;e.branchId=this.userHelper.GetUserAppSettings().CurrentBranchId,e.dateFrom=new Date,e.dateTo=new Date,this.service.getPaymentsDetails(e).subscribe({next:s=>{this.Data=s,this.Clear(),this.cdRef.detectChanges()},error:s=>{}})}Search(e){let s=new l.Ojr;s.branchId=e.SelectedBranch.id,s.dateFrom=e.DateFrom,s.dateTo=e.DateTo,this.service.getPaymentsDetails(s).subscribe({next:n=>{this.Data=n,this.cdRef.detectChanges()},error:n=>{}})}LoadAllPaymentCategory(){this.service.getAllPaymentCategory().subscribe({next:e=>{this.PaymentCategories=e,this.cdRef.detectChanges()},error:()=>{}})}editPayment(e){this.Amount=e.tHEVALUE,this.AmountDetails=e.cOMMENT,this.SelectedPaymentCategory=this.PaymentCategories.find(s=>s.paymentCategoryName==e.paymentCategoryName),this.selectedPaymentToEdit=e,this.SaveMode="update"}deletePayment(e){this.permissionManager.isNotGranted(w.e.CanRemoveVisit)?this.cts.sendToster("warn","\u0644\u064a\u0633 \u0644\u062f\u064a\u0643 \u0635\u0644\u0627\u062d\u064a\u0629","\u0645\u062d\u0627\u0648\u0644\u0629 \u062d\u0630\u0641 \u0644\u0645\u0635\u0631\u0648\u0641 ",`\u0645\u062d\u0627\u0648\u0644\u0629 \u062d\u0630\u0641 \u0645\u0635\u0631\u0648\u0641 \u0628\u0642\u064a\u0645\u0629 ${e.tHEVALUE} \u062c\u0646\u064a\u0629 \u0628\u062a\u0639\u0644\u064a\u0642 / ${e.cOMMENT}`):p().fire({title:" \u0647\u0644 \u0627\u0646\u062a \u0645\u062a\u0623\u0643\u062f \u0645\u0646 \u062d\u0630\u0641 \u0627\u0644\u0642\u064a\u0645\u0629 \u061f ",html:`\u0645\u0635\u0631\u0648\u0641 \u0628\u064a\u0642\u064a\u0645\u0629 ${e.tHEVALUE} \u062c\u0646\u064a\u0629 \u0628\u062a\u0639\u0644\u064a\u0642 / ${e.cOMMENT}`,showDenyButton:!0,confirmButtonText:"\u0646\u0639\u0645",denyButtonText:"\u0644\u0627"}).then(s=>{if(s.isConfirmed){let n=new l.dO1;n.paymentId=e.dOCID,this.service.deletePayment(n).subscribe({next:o=>{1==o&&(this.cts.sendToster("success","\u062d\u0630\u0641 \u0642\u064a\u0645\u0629 \u0645\u0646 \u0627\u0644\u0645\u0635\u0631\u0648\u0641\u0627\u062a","\u062a\u0645 \u062d\u0630\u0641 \u0627\u0644\u0642\u064a\u0645\u0629 \u0628\u0646\u062c\u0627\u062d",`\u0645\u0635\u0631\u0648\u0641 \u0628\u064a\u0642\u064a\u0645\u0629 ${e.tHEVALUE} \u062c\u0646\u064a\u0629 \u0628\u062a\u0639\u0644\u064a\u0642 / ${e.cOMMENT}`),this.LoadAllPaymentToday(),this.cdRef.detectChanges())},error:()=>{this.cts.sendToster("error","\u062d\u0630\u0641 \u0642\u064a\u0645\u0629 \u0645\u0646 \u0627\u0644\u0645\u0635\u0631\u0648\u0641\u0627\u062a","\u062d\u062f\u062b \u062e\u0637\u0623 \u0623\u062b\u0646\u0627\u0621 \u062d\u0630\u0641 \u0627\u0644\u0642\u064a\u0645\u0629",`\u0645\u0635\u0631\u0648\u0641 \u0628\u064a\u0642\u064a\u0645\u0629 ${e.tHEVALUE} \u062c\u0646\u064a\u0629 \u0628\u062a\u0639\u0644\u064a\u0642 / ${e.cOMMENT}`)}})}else s.isDenied&&p().fire("\u062a\u0645 \u0627\u0644\u063a\u0627\u0621 \u0627\u0644\u0639\u0645\u0644\u064a\u0629","","info")})}PaymentAction(){null!=this.SelectedPaymentCategory?0!=this.Amount?0!=this.AmountDetails.length?"save"==this.SaveMode?this.AddPayment():"update"==this.SaveMode&&this.UpdatePayment():this.cts.sendTosterWithoutLog("error","\u062d\u062f\u062b \u062e\u0637\u0623","\u064a\u062c\u0628 \u0627\u062f\u062e\u0627\u0644 \u062a\u0641\u0627\u0635\u064a\u0644 \u0627\u0644\u0642\u064a\u0645\u0629 \u0628\u0634\u0643\u0644 \u0635\u062d\u064a\u062d"):this.cts.sendTosterWithoutLog("error","\u062d\u062f\u062b \u062e\u0637\u0623","\u064a\u062c\u0628 \u0627\u062f\u062e\u0627\u0644 \u0627\u0644\u0642\u064a\u0645\u0629 \u0628\u0634\u0643\u0644 \u0635\u062d\u064a\u062d"):this.cts.sendTosterWithoutLog("error","\u062d\u062f\u062b \u062e\u0637\u0623","\u064a\u062c\u0628 \u0627\u062e\u062a\u064a\u0627\u0631 \u0627\u0644\u0642\u0633\u0645")}AddPayment(){let e=new l.jBm;e.clientDateTime=B._.Now(),e.drawerId=this.userHelper.GetUserAppSettings().CurrentDrawerId,e.branchId=this.userHelper.GetUserAppSettings().CurrentBranchId,e.paymentCategoryID=this.SelectedPaymentCategory.iD,e.value=this.Amount,e.paymentComment=this.AmountDetails,this.service.addNewPayment(e).subscribe({next:s=>{1==s&&(this.cts.sendToster("success","\u0625\u0636\u0627\u0641\u0629 \u0645\u0635\u0631\u0648\u0641","\u062a\u0645 \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0642\u064a\u0645\u0629 \u0628\u0646\u062c\u0627\u062d",` \u0627\u0636\u0627\u0641\u0629 \u0645\u0635\u0631\u0648\u0641\u0627\u062a \u0628\u0642\u064a\u0645\u0629 ${e.value} \u0641\u064a \u0642\u0633\u0645 ${this.SelectedPaymentCategory?.paymentCategoryName} \u0628\u062a\u0639\u0644\u064a\u0642 ${e.paymentComment}`),this.LoadAllPaymentToday(),this.cdRef.detectChanges())},error:()=>{this.cts.sendTosterWithoutLog("error","\u062d\u062f\u062b \u062e\u0637\u0623","\u062d\u062f\u062b \u062e\u0637\u0623 \u0623\u062b\u0646\u0627\u0621 \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0642\u064a\u0645\u0629")}})}UpdatePayment(){let e=new l.tRE;e.clientDateTime=new Date,e.drawerId=0,e.branchId=0,e.paymentCategoryID=this.SelectedPaymentCategory.iD,e.value=this.Amount,e.paymentComment=this.AmountDetails,e.paymentId=this.selectedPaymentToEdit.dOCID,this.service.updatePayment(e).subscribe({next:s=>{1==s&&(this.messageService.add({severity:"success",summary:"\u0639\u0645\u0644\u064a\u0629 \u0646\u0627\u062c\u062d\u0629",detail:"\u062a\u0645 \u062a\u0639\u062f\u064a\u0644 \u0627\u0644\u0642\u064a\u0645\u0629 \u0628\u0646\u062c\u0627\u062d"}),this.cts.sendToster("success","\u062a\u0639\u062f\u064a\u0644 \u0645\u0635\u0631\u0648\u0641","\u062a\u0645 \u062a\u0639\u062f\u064a\u0644 \u0627\u0644\u0642\u064a\u0645\u0629 \u0628\u0646\u062c\u0627\u062d",` \u062a\u0639\u062f\u064a\u0644 \u0645\u0635\u0631\u0648\u0641\u0627\u062a \u0628\u0642\u064a\u0645\u0629 ${e.value} \u0641\u064a \u0642\u0633\u0645 ${this.SelectedPaymentCategory?.paymentCategoryName} \u0628\u062a\u0639\u0644\u064a\u0642 ${e.paymentComment}`),this.LoadAllPaymentToday(),this.cdRef.detectChanges())},error:()=>{this.cts.sendTosterWithoutLog("error","\u062d\u062f\u062b \u062e\u0637\u0623","\u062d\u062f\u062b \u062e\u0637\u0623 \u0623\u062b\u0646\u0627\u0621 \u062a\u0639\u062f\u064a\u0644 \u0627\u0644\u0642\u064a\u0645\u0629")}})}Clear(){this.Amount=0,this.AmountDetails="",this.SelectedPaymentCategory=null,this.SaveMode="save"}static#t=this.\u0275fac=function(s){return new(s||a)(t.rXU(t.zZn),t.rXU(m.o3),t.rXU(S.bg))};static#e=this.\u0275cmp=t.VBU({type:a,selectors:[["app-accountant-payments"]],features:[t.Jv_([S.bg,m.o3]),t.Vt3],decls:48,vars:24,consts:[["position","top-left",3,"showTransformOptions"],[1,"card","card-flush","shadow-sm"],[1,"card-header"],["translate","MENU.ExpensesAmount",1,"card-title"],[1,"card-toolbar"],[1,"card-body","py-5"],[3,"onSearchSubmit","rangeDates","WithSinglBranch"],[1,"row"],[1,"col-md-4"],[1,"d-flex","flex-column","mb-8","fv-row"],[1,"d-flex","align-items-center","fs-6","fw-bold","mb-2"],[1,""],["type","text","disabled","",1,"form-control",3,"ngModelChange","ngModel"],["styleClass"," taj-font fc-primng","placeholder","\u0627\u062e\u062a\u0631 \u0627\u0644\u0642\u0633\u0645","filterBy","paymentCategoryName","optionLabel","paymentCategoryName",3,"ngModelChange","options","filter","ngModel"],["type","text","placeholder","\u0627\u062f\u062e\u0644 \u0627\u0644\u0645\u0628\u0644\u063a",1,"form-control",3,"ngModelChange","ngModel"],["type","text","placeholder","\u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0640\u0644",1,"form-control",3,"ngModelChange","ngModel"],[1,"row",2,"display","flex","justify-content","center"],[1,"col-md-5",2,"display","flex","justify-content","center"],["class","btn btn-light-success","style","margin-top: 30px;direction: ltr;width: 35%;",3,"click",4,"ngIf"],["class","btn btn-light-primary","style","margin-top: 30px;direction: ltr;width: 35%;",3,"click",4,"ngIf"],[3,"secondButtonEvent","firstButtonEvent","cols","rowsPageNumbers","SecondBtn","contentSecondBtn","classSecondBtn","FirstBtn","contentFirstBtn","classFirstBtn","data","chooseColomns","pagination","scrollable"],[1,"btn","btn-light-success",2,"margin-top","30px","direction","ltr","width","35%",3,"click"],[1,"fa-solid","fa-floppy-disk"],[1,"btn","btn-light-primary",2,"margin-top","30px","direction","ltr","width","35%",3,"click"]],template:function(s,n){1&s&&(t.nrm(0,"p-toast",0),t.j41(1,"div",1)(2,"div",2),t.nrm(3,"h3",3)(4,"div",4),t.k0s(),t.j41(5,"div",5)(6,"app-searchcriteria",6),t.bIt("onSearchSubmit",function(r){return n.Search(r)}),t.k0s(),t.nrm(7,"br"),t.j41(8,"div",7)(9,"div",8)(10,"div",9)(11,"label",10)(12,"span",11),t.EFF(13," \u0627\u0644\u0641\u0631\u0639 "),t.k0s()(),t.j41(14,"input",12),t.mxI("ngModelChange",function(r){return t.DH7(n.CurrentBranch,r)||(n.CurrentBranch=r),r}),t.k0s()()(),t.j41(15,"div",8)(16,"div",9)(17,"label",10)(18,"span",11),t.EFF(19,"\u0627\u0644\u062f\u0631\u062c "),t.k0s()(),t.j41(20,"input",12),t.mxI("ngModelChange",function(r){return t.DH7(n.CurrnetDrawer,r)||(n.CurrnetDrawer=r),r}),t.k0s()()()(),t.nrm(21,"br"),t.j41(22,"div",7)(23,"div",8)(24,"div",9)(25,"label",10)(26,"span",11),t.EFF(27,"\u0627\u0644\u0642\u0633\u0645"),t.k0s()(),t.j41(28,"p-dropdown",13),t.mxI("ngModelChange",function(r){return t.DH7(n.SelectedPaymentCategory,r)||(n.SelectedPaymentCategory=r),r}),t.k0s()()(),t.j41(29,"div",8)(30,"div",9)(31,"label",10)(32,"span",11),t.EFF(33,"\u0627\u0644\u0645\u0628\u0644\u063a"),t.k0s()(),t.j41(34,"input",14),t.mxI("ngModelChange",function(r){return t.DH7(n.Amount,r)||(n.Amount=r),r}),t.k0s()()(),t.j41(35,"div",8)(36,"div",9)(37,"label",10)(38,"span",11),t.EFF(39,"\u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644"),t.k0s()(),t.j41(40,"input",15),t.mxI("ngModelChange",function(r){return t.DH7(n.AmountDetails,r)||(n.AmountDetails=r),r}),t.k0s()()()(),t.j41(41,"div",16)(42,"div",17),t.DNE(43,R,3,0,"button",18)(44,I,3,0,"button",19),t.k0s()(),t.j41(45,"div",7)(46,"div")(47,"app-shared-datatable",20),t.bIt("secondButtonEvent",function(r){return n.editPayment(r)})("firstButtonEvent",function(r){return n.deletePayment(r)}),t.k0s()()()()()),2&s&&(t.Y8G("showTransformOptions","translateX(100%)"),t.R7$(6),t.Y8G("rangeDates",n.rangeDates)("WithSinglBranch",!0),t.R7$(8),t.R50("ngModel",n.CurrentBranch),t.R7$(6),t.R50("ngModel",n.CurrnetDrawer),t.R7$(8),t.Y8G("options",n.PaymentCategories)("filter",!0),t.R50("ngModel",n.SelectedPaymentCategory),t.R7$(6),t.R50("ngModel",n.Amount),t.R7$(6),t.R50("ngModel",n.AmountDetails),t.R7$(3),t.Y8G("ngIf","save"==n.SaveMode),t.R7$(),t.Y8G("ngIf","update"==n.SaveMode),t.R7$(3),t.Y8G("cols",n.Cols)("rowsPageNumbers",25)("SecondBtn",!0)("contentSecondBtn",n.contentSecondBtnForFirstButton)("classSecondBtn",n.classForSecondButtonForSecondButton)("FirstBtn",!0)("contentFirstBtn",n.contentFirstBtnForFirstButton)("classFirstBtn",n.classForFirstButtonForFirstButton)("data",n.Data)("chooseColomns",!0)("pagination",!0)("scrollable",!1))},dependencies:[h.bT,y.N,b.h,u.me,u.BC,u.vS,D.y8,v.ms],encapsulation:2})}return a})()},{path:"AccountantRecived",canActivate:[g._],component:(()=>{class a extends C.${constructor(e,s){super(e),this.dialogService=s,this.SaveMode="save",this.branchs=[],this.SelectedBranchId={},this.drawers=[],this.SelectedDrawerId=0,this.contentFirstBtnForFirstButton='<i class="pi pi-trash text-white"></i>',this.classForFirstButtonForFirstButton=" bg-danger text-white",this.contentSecondBtnForFirstButton='<i class="pi pi-file-edit text-white"></i>',this.classForSecondButtonForSecondButton=" bg-primary text-white",this.Cols=f.EE,this.branchs=d.hJ}ngOnInit(){this.LoadAllRecivedToday(),this.service.getAllForDropDownDeel().subscribe({next:e=>{this.deels=e,this.SelectedDeel=new l.Wrm,this.cdRef.detectChanges()}}),this.SelectedBranchId=d.hJ.find(e=>e.id==this.userHelper.GetUserAppSettings().CurrentBranchId)?.id??d.hJ[0].id,this.SelectedDrawerId=d.Kf.find(e=>e.id==this.userHelper.GetUserAppSettings().CurrentDrawerId)?.id??d.Kf[0].id,this.onChangeBranch()}LoadAllRecivedToday(){let e=new l.Ojr;e.branchId=this.userHelper.GetUserAppSettings().CurrentBranchId,e.dateFrom=new Date,e.dateTo=new Date,this.service.getRecivedDetails(e).subscribe({next:s=>{this.Data=s,this.Clear(),this.cdRef.detectChanges()},error:s=>{}})}Search(e){let s=new l.Ojr;s.branchId=e.SelectedBranchId,s.dateFrom=e.DateFrom,s.dateTo=e.DateTo,this.service.getRecivedDetails(s).subscribe({next:n=>{this.Data=n,this.cdRef.detectChanges()},error:n=>{}})}deleteRecived(e){this.permissionManager.isNotGranted(w.e.CanRemoveVisit)?this.cts.sendToster("warn","\u0644\u064a\u0633 \u0644\u062f\u064a\u0643 \u0635\u0644\u0627\u062d\u064a\u0629","\u0645\u062d\u0627\u0648\u0644\u0629 \u062d\u0630\u0641 \u062a\u062d\u0635\u064a\u0644 \u0648\u0627\u0631\u062f ",`\u0645\u062d\u0627\u0648\u0644\u0629 \u062d\u0630\u0641 \u062a\u062d\u0635\u064a\u0644 \u0648\u0627\u0631\u062f \u0628\u0642\u064a\u0645\u0629 ${e.tHEVALUE} \u062c\u0646\u064a\u0629 \u0628\u062a\u0639\u0644\u064a\u0642 / ${e.cOMMENT}`):p().fire({title:" \u0647\u0644 \u0627\u0646\u062a \u0645\u062a\u0623\u0643\u062f \u0645\u0646 \u062d\u0630\u0641 \u0627\u0644\u0642\u064a\u0645\u0629 \u061f ",html:`\u062a\u062d\u0635\u064a\u0644 \u0628\u064a\u0642\u064a\u0645\u0629 ${e.tHEVALUE} \u062c\u0646\u064a\u0629 \u0628\u062a\u0639\u0644\u064a\u0642 / ${e.cOMMENT}`,showDenyButton:!0,confirmButtonText:"\u0646\u0639\u0645",denyButtonText:"\u0644\u0627"}).then(s=>{s.isConfirmed?this.service.deleteRecived(e.dOCID).subscribe({next:n=>{1==n&&(this.cts.sendToster("success","\u062d\u0630\u0641 \u0642\u064a\u0645\u0629 \u0645\u0646 \u0627\u0644\u062a\u062d\u0635\u064a\u0644\u0627\u062a","\u062a\u0645 \u062d\u0630\u0641 \u0627\u0644\u0642\u064a\u0645\u0629 \u0628\u0646\u062c\u0627\u062d",`\u062a\u062d\u0635\u064a\u0644 \u0628\u064a\u0642\u064a\u0645\u0629 ${e.tHEVALUE} \u062c\u0646\u064a\u0629 \u0628\u062a\u0639\u0644\u064a\u0642 / ${e.cOMMENT}`),this.LoadAllRecivedToday(),this.cdRef.detectChanges())},error:()=>{this.cts.sendToster("error","\u062d\u0630\u0641 \u0642\u064a\u0645\u0629 \u0645\u0646 \u0627\u0644\u062a\u062d\u0635\u064a\u0644\u0627\u062a","\u062d\u062f\u062b \u062e\u0637\u0623 \u0623\u062b\u0646\u0627\u0621 \u062d\u0630\u0641 \u0627\u0644\u0642\u064a\u0645\u0629",`\u062a\u062d\u0635\u064a\u0644 \u0628\u064a\u0642\u064a\u0645\u0629 ${e.tHEVALUE} \u062c\u0646\u064a\u0629 \u0628\u062a\u0639\u0644\u064a\u0642 / ${e.cOMMENT}`)}}):s.isDenied&&p().fire("\u062a\u0645 \u0627\u0644\u063a\u0627\u0621 \u0627\u0644\u0639\u0645\u0644\u064a\u0629","","info")})}RecivedAction(){0!=this.Amount?0!=this.SelectedDrawerId?0!=this.AmountDetails.length?"save"==this.SaveMode&&this.AddRecived():this.cts.sendTosterWithoutLog("error","\u062d\u062f\u062b \u062e\u0637\u0623","\u064a\u062c\u0628 \u0627\u062f\u062e\u0627\u0644 \u062a\u0641\u0627\u0635\u064a\u0644 \u0627\u0644\u0642\u064a\u0645\u0629 \u0628\u0634\u0643\u0644 \u0635\u062d\u064a\u062d"):this.cts.sendTosterWithoutLog("error","\u062d\u062f\u062b \u062e\u0637\u0623","\u064a\u062c\u0628 \u0627\u062e\u062a\u064a\u0627\u0631 \u0627\u0644\u062f\u0631\u062c \u0628\u0634\u0643\u0644 \u0635\u062d\u064a\u062d"):this.cts.sendTosterWithoutLog("error","\u062d\u062f\u062b \u062e\u0637\u0623","\u064a\u062c\u0628 \u0627\u062f\u062e\u0627\u0644 \u0627\u0644\u0642\u064a\u0645\u0629 \u0628\u0634\u0643\u0644 \u0635\u062d\u064a\u062d")}AddRecived(){let e=new l.dFc;e.clientDateTime=B._.Now(),e.drawerId=this.SelectedDrawerId,e.branchId=this.SelectedBranchId,e.value=this.Amount,e.recivedComment=this.AmountDetails,e.dealId=this.SelectedDeel.id,this.service.addNewRecived(e).subscribe({next:s=>{1==s&&(this.cts.sendToster("success","\u0625\u0636\u0627\u0641\u0629 \u062a\u062d\u0635\u064a\u0644","\u062a\u0645 \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0642\u064a\u0645\u0629 \u0628\u0646\u062c\u0627\u062d",` \u0627\u0636\u0627\u0641\u0629 \u062a\u062d\u0635\u064a\u0644\u0627\u062a \u0628\u0642\u064a\u0645\u0629 ${e.value} \u0628\u062a\u0639\u0644\u064a\u0642 ${e.recivedComment}`),this.LoadAllRecivedToday(),this.cdRef.detectChanges())},error:()=>{this.cts.sendTosterWithoutLog("error","\u062d\u062f\u062b \u062e\u0637\u0623","\u062d\u062f\u062b \u062e\u0637\u0623 \u0623\u062b\u0646\u0627\u0621 \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0642\u064a\u0645\u0629")}})}Clear(){this.Amount=0,this.AmountDetails="",this.SaveMode="save"}onChangeBranch(){this.SelectedDrawerId=0,this.drawers=d.Kf.filter(e=>e.branchId==this.SelectedBranchId),this.cdRef.detectChanges()}static#t=this.\u0275fac=function(s){return new(s||a)(t.rXU(t.zZn),t.rXU(m.o3))};static#e=this.\u0275cmp=t.VBU({type:a,selectors:[["app-accountant-recived"]],features:[t.Jv_([m.o3]),t.Vt3],decls:43,vars:22,consts:[[1,"card","card-flush","shadow-sm"],[1,"card-header"],["translate","MENU.ExpensesAmount",1,"card-title"],[1,"card-toolbar"],[1,"card-body","py-5"],[3,"onSearchSubmit","rangeDates","WithSinglBranch"],[1,"row"],[1,"card-body","p-9"],[1,"row","mb-7"],[1,"col-md-4"],["for","range",1,"d-flex","align-items-center","fs-6","fw-bold","mb-2"],["styleClass"," taj-font fc-primng","placeholder","\u0627\u062e\u062a\u0631 \u0627\u0644\u0641\u0631\u0639","optionValue","id","optionLabel","name",3,"onChange","ngModelChange","options","ngModel"],["styleClass"," taj-font fc-primng","placeholder","\u0627\u062e\u062a\u0631 \u0627\u0644\u062f\u0631\u062c","optionValue","id","optionLabel","name",3,"ngModelChange","options","ngModel"],["for","range",1,"h3"],["styleClass"," taj-font fc-primng","filterBy","name","placeholder","\u0627\u062e\u062a\u0631 \u0627\u0644\u062a\u0639\u0627\u0642\u062f","optionLabel","name",3,"ngModelChange","options","filter","ngModel"],[1,"d-flex","flex-column","mb-8","fv-row"],[1,"d-flex","align-items-center","fs-6","fw-bold","mb-2"],[1,""],["type","text","placeholder","\u0627\u062f\u062e\u0644 \u0627\u0644\u0645\u0628\u0644\u063a",1,"form-control",3,"ngModelChange","ngModel"],["type","text","placeholder","\u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0640\u0644",1,"form-control",3,"ngModelChange","ngModel"],[1,"row",2,"display","flex","justify-content","center"],[1,"col-md-5",2,"display","flex","justify-content","center"],["class","btn btn-light-success","style","margin-top: 30px;direction: ltr;width: 35%;",3,"click",4,"ngIf"],["class","btn btn-light-primary","style","margin-top: 30px;direction: ltr;width: 35%;",3,"click",4,"ngIf"],[3,"firstButtonEvent","cols","rowsPageNumbers","FirstBtn","contentFirstBtn","classFirstBtn","data","chooseColomns","pagination","scrollable"],[1,"btn","btn-light-success",2,"margin-top","30px","direction","ltr","width","35%",3,"click"],[1,"fa-solid","fa-floppy-disk"],[1,"btn","btn-light-primary",2,"margin-top","30px","direction","ltr","width","35%",3,"click"]],template:function(s,n){1&s&&(t.j41(0,"div",0)(1,"div",1),t.nrm(2,"h3",2)(3,"div",3),t.k0s(),t.j41(4,"div",4)(5,"app-searchcriteria",5),t.bIt("onSearchSubmit",function(r){return n.Search(r)}),t.k0s(),t.nrm(6,"br"),t.j41(7,"div",6)(8,"div",7)(9,"div",8)(10,"div",9)(11,"label",10),t.EFF(12," \u0627\u0644\u0641\u0631\u0639"),t.k0s(),t.j41(13,"p-dropdown",11),t.bIt("onChange",function(){return n.onChangeBranch()}),t.mxI("ngModelChange",function(r){return t.DH7(n.SelectedBranchId,r)||(n.SelectedBranchId=r),r}),t.k0s()(),t.j41(14,"div",9)(15,"label",10),t.EFF(16," \u0627\u0644\u062f\u0631\u062c"),t.k0s(),t.j41(17,"p-dropdown",12),t.mxI("ngModelChange",function(r){return t.DH7(n.SelectedDrawerId,r)||(n.SelectedDrawerId=r),r}),t.k0s()()()()(),t.nrm(18,"br"),t.j41(19,"div",6)(20,"div",9)(21,"label",13),t.EFF(22," \u0627\u0644\u062a\u0639\u0627\u0642\u062f "),t.k0s(),t.j41(23,"p-dropdown",14),t.mxI("ngModelChange",function(r){return t.DH7(n.SelectedDeel,r)||(n.SelectedDeel=r),r}),t.k0s()(),t.j41(24,"div",9)(25,"div",15)(26,"label",16)(27,"span",17),t.EFF(28,"\u0627\u0644\u0645\u0628\u0644\u063a"),t.k0s()(),t.j41(29,"input",18),t.mxI("ngModelChange",function(r){return t.DH7(n.Amount,r)||(n.Amount=r),r}),t.k0s()()(),t.j41(30,"div",9)(31,"div",15)(32,"label",16)(33,"span",17),t.EFF(34,"\u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644"),t.k0s()(),t.j41(35,"input",19),t.mxI("ngModelChange",function(r){return t.DH7(n.AmountDetails,r)||(n.AmountDetails=r),r}),t.k0s()()()(),t.j41(36,"div",20)(37,"div",21),t.DNE(38,_,3,0,"button",22)(39,E,3,0,"button",23),t.k0s()(),t.j41(40,"div",6)(41,"div")(42,"app-shared-datatable",24),t.bIt("firstButtonEvent",function(r){return n.deleteRecived(r)}),t.k0s()()()()()),2&s&&(t.R7$(5),t.Y8G("rangeDates",n.rangeDates)("WithSinglBranch",!0),t.R7$(8),t.Y8G("options",n.branchs),t.R50("ngModel",n.SelectedBranchId),t.R7$(4),t.Y8G("options",n.drawers),t.R50("ngModel",n.SelectedDrawerId),t.R7$(6),t.Y8G("options",n.deels)("filter",!0),t.R50("ngModel",n.SelectedDeel),t.R7$(6),t.R50("ngModel",n.Amount),t.R7$(6),t.R50("ngModel",n.AmountDetails),t.R7$(3),t.Y8G("ngIf","save"==n.SaveMode),t.R7$(),t.Y8G("ngIf","update"==n.SaveMode),t.R7$(3),t.Y8G("cols",n.Cols)("rowsPageNumbers",25)("FirstBtn",!0)("contentFirstBtn",n.contentFirstBtnForFirstButton)("classFirstBtn",n.classForFirstButtonForFirstButton)("data",n.Data)("chooseColomns",!0)("pagination",!0)("scrollable",!1))},dependencies:[h.bT,y.N,b.h,u.me,u.BC,u.vS,v.ms],encapsulation:2})}return a})()},{path:"Casher",canActivate:[g._],component:(()=>{class a extends C.${constructor(e){super(e),this.DrawerDetailsResultList=[],this.contentFirstBtnForFirstButton='<i class="pi pi-trash text-white"></i>',this.classForFirstButtonForFirstButton=" bg-danger text-white",this.contentSecondBtnForFirstButton='<i class="pi pi-file-edit text-white"></i>',this.classForSecondButtonForSecondButton=" bg-primary text-white",this.Cols=f.CC}ngOnInit(){this.loadDrawerData(),this.CurrentBranch=d.hJ.find(e=>e.id==this.userHelper.GetUserAppSettings().CurrentBranchId)?.name,this.CurrnetDrawer=d.Kf.find(e=>e.id==this.userHelper.GetUserAppSettings().CurrentDrawerId)?.name}loadBranchData(){let e=new l.Ojr;e.branchId=this.userHelper.GetUserAppSettings().CurrentBranchId,e.dateFrom=new Date,e.dateTo=new Date,this.loadBranchDataOriginal(e)}loadBranchDataOriginal(e){this.service.getTotalByBranch(e).subscribe({next:s=>{this.BranchDetailsResult=s,this.cts.sendToster("success","\u0627\u0633\u062a\u0639\u0644\u0627\u0645 \u0639\u0646 \u0627\u0644\u062f\u0631\u062c","\u062a\u0645 \u0627\u0644\u0627\u0633\u062a\u0639\u0644\u0627\u0645 \u0628\u0646\u062c\u0627\u062d ",`\u0627\u0633\u062a\u0639\u0644\u0627\u0645 \u0639\u0646 \u0627\u0644\u062f\u0631\u062c ${this.CurrnetDrawer} \u0644\u0644\u0641\u0631\u0639 ${this.CurrentBranch}`),this.cdRef.detectChanges()}})}loadDrawerData(){let e=new l.ZnR;e.drawerId=this.userHelper.GetUserAppSettings().CurrentDrawerId,e.dateFrom=new Date,e.dateTo=new Date,this.getCasherData(e)}Search(e){let s=new l.ZnR;this.CurrentBranch=d.hJ.find(o=>o.id==e.SelectedBranch.id)?.name,this.CurrnetDrawer=d.Kf.find(o=>o.id==e.SelectedDrawer.id)?.name,s.drawerId=e.SelectedDrawer.id,s.dateFrom=e.DateFrom,s.dateTo=e.DateTo,this.getCasherData(s);let n=new l.Ojr;n.branchId=e.SelectedBranch.id,n.dateFrom=e.DateFrom,n.dateTo=e.DateTo,this.loadBranchDataOriginal(n)}getCasherData(e){this.DrawerDetailsResultList=[],this.service.getCasherById(e).subscribe({next:s=>{this.DrawerDetailsResult=s,this.DrawerDetailsResultList.push(l.TBs.fromJS({Total:s.getCounts?.allCashNewVisit,TypeName:"\u0625\u062c\u0645\u0640\u0627\u0644\u064a \u0627\u0644\u0632\u064a\u0627\u0631\u0627\u062a"})),this.DrawerDetailsResultList.push(l.TBs.fromJS({Total:s.getCounts?.allCashOldVisit,TypeName:"\u0625\u062c\u0645\u0640\u0640\u0627\u0644\u064a \u0627\u0644\u0645\u062f\u064a\u0648\u0646\u064a\u0627\u062a"})),this.DrawerDetailsResultList.push(l.TBs.fromJS({Total:s.getCounts?.allInDrawer,TypeName:"\u0627\u0644\u0635\u0640\u0640\u0627\u0641\u0649"})),s.getCounts?.allPaiedOther&&this.DrawerDetailsResultList.push(l.TBs.fromJS({Total:s.getCounts?.allPaiedOther,TypeName:"\u0627\u0644\u0645\u0635\u0631\u0648\u0641\u0627\u062a"})),s.getCounts?.allout&&this.DrawerDetailsResultList.push(l.TBs.fromJS({Total:s.getCounts?.allout,TypeName:"\u0627\u0644\u0625\u0633\u062a\u0631\u062f\u0627\u062f\u0627\u062a"})),this.Data=s.data}})}static#t=this.\u0275fac=function(s){return new(s||a)(t.rXU(t.zZn))};static#e=this.\u0275cmp=t.VBU({type:a,selectors:[["app-accountant-casher"]],features:[t.Jv_([m.o3]),t.Vt3],decls:24,vars:13,consts:[["position","top-left",3,"showTransformOptions"],[1,"card","card-flush","shadow-sm"],[1,"card-header"],["translate","MENU.CasherData",1,"card-title"],[1,"card-toolbar"],[1,"card-body","py-5"],[1,"row","mb-5"],[3,"onSearchSubmit","rangeDates","WithSinglDrawer","WithSinglBranch"],[1,"row"],[1,"row",2,"margin","0 auto"],[1,"col-md-3"],[2,"border","1px solid #fbe6e6","padding","9px","border-radius","10px","background-image","linear-gradient(rgb(255 211 182), rgba(255, 255, 0, 0))"],[2,"display","flex","justify-content","center"],[4,"ngFor","ngForOf"],[3,"cols","rowsPageNumbers","data","pagination","scrollable"],["style","cursor: pointer;","class","StatisticsNumbersDetailsClass bg-light-success ",4,"ngIf"],["style","cursor: pointer;","class","StatisticsNumbersDetailsClass bg-light-primary ",4,"ngIf"],[1,"StatisticsNumbersDetailsClass","bg-light-success",2,"cursor","pointer"],[1,"text-dark","bi","bi-patch-plus",2,"padding","0 4px"],[2,"padding","5px","font-weight","700"],[1,"StatisticsNumbersDetailsClass","bg-light-primary",2,"cursor","pointer"],[1,"StatisticsNumbersDetailsClass","bg-light",2,"cursor","pointer"]],template:function(s,n){1&s&&(t.nrm(0,"p-toast",0),t.j41(1,"div",1)(2,"div",2),t.nrm(3,"h3",3)(4,"div",4),t.k0s(),t.j41(5,"div",5)(6,"div",6)(7,"app-searchcriteria",7),t.bIt("onSearchSubmit",function(r){return n.Search(r)}),t.k0s()(),t.j41(8,"div",8)(9,"div")(10,"div",9)(11,"div",10)(12,"div",11)(13,"span",12),t.EFF(14),t.k0s(),t.DNE(15,k,3,2,"div",13),t.k0s()(),t.j41(16,"div",10)(17,"div",11)(18,"span",12),t.EFF(19),t.k0s(),t.DNE(20,$,7,2,"div",13),t.k0s()()()()(),t.j41(21,"div",8)(22,"div"),t.nrm(23,"app-shared-datatable",14),t.k0s()()()()),2&s&&(t.Y8G("showTransformOptions","translateX(100%)"),t.R7$(7),t.Y8G("rangeDates",n.rangeDates)("WithSinglDrawer",!0)("WithSinglBranch",!0),t.R7$(7),t.SpI(" \u062a\u0641\u0627\u0635\u064a\u0644 \u0641\u0631\u0639 ",n.CurrentBranch," "),t.R7$(),t.Y8G("ngForOf",n.BranchDetailsResult),t.R7$(4),t.SpI(" \u062a\u0641\u0627\u0635\u064a\u0644 ",n.CurrnetDrawer," "),t.R7$(),t.Y8G("ngForOf",n.DrawerDetailsResultList),t.R7$(3),t.Y8G("cols",n.Cols)("rowsPageNumbers",20)("data",n.Data)("pagination",!0)("scrollable",!1))},dependencies:[h.Sq,h.bT,y.N,b.h,D.y8],styles:[".StatisticsNumbersDetailsClass[_ngcontent-%COMP%]{display:flex;justify-content:space-between;line-height:2px;border-radius:8px;padding:10px;margin:3px;transition:transform .2s}.StatisticsNumbersDetailsClass[_ngcontent-%COMP%]:hover{transform:scale(1.2);font-weight:900;border:1px solid #120349}.StatisticsTabTextClass[_ngcontent-%COMP%]{transition:transform .2s;cursor:pointer}.StatisticsTabTextClass[_ngcontent-%COMP%]:hover{transform:scale(1.1);font-weight:900}"]})}return a})()}];let O=(()=>{class a{static#t=this.\u0275fac=function(s){return new(s||a)};static#e=this.\u0275mod=t.$C({type:a});static#n=this.\u0275inj=t.G2t({imports:[F.iI.forChild(L),F.iI]})}return a})();var U=i(2609),H=i(5114),x=i(9921);let V=(()=>{class a{static#t=this.\u0275fac=function(s){return new(s||a)};static#e=this.\u0275mod=t.$C({type:a});static#n=this.\u0275inj=t.G2t({imports:[h.MD,x.G,u.YN,O,D.MB,v.kr,U.h,H.u]})}return a})()}}]);