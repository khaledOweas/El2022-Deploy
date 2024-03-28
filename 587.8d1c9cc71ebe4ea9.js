"use strict";(self.webpackChunkEKOWebUI=self.webpackChunkEKOWebUI||[]).push([[587],{1587:(j,d,s)=>{s.r(d),s.d(d,{ReportsModule:()=>$});var D=s(177),h=s(8742),F=s(7306),m=s(5779),p=s(660),f=s(9501),l=s(5487),i=s(9949),t=s(4438),g=s(1626);let u=(()=>{class r{constructor(o){this._httpClient=o}downloadFile(o){return this._httpClient.post((localStorage.getItem("apiUrl")||"")+"/Reports/ExportDeelReportToExcelSheet",o,{observe:"response",responseType:"blob"})}saveFile(o){this.downloadFile(o).subscribe(e=>{let a=document.createElement("a");a.href=window.URL.createObjectURL(e.body),a.setAttribute("download","DeelReport"),document.body.appendChild(a),a.click(),a.remove()})}static#t=this.\u0275fac=function(e){return new(e||r)(t.KVO(g.Qq))};static#e=this.\u0275prov=t.jDH({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();var S=s(2450),R=s(3612),C=s(7427),v=s(9998);const T=[{path:"",redirectTo:"DeelReport",pathMatch:"full"},{path:"DeelReport",canActivate:[F._],component:(()=>{class r{constructor(o,e,a,c,n,G){this.service=o,this.cdRef=e,this.dialogService=a,this.messageService=c,this.reportService=n,this.cts=G,this.contentFirstBtnForFirstButton='<i class="pi pi-book text-white"></i>',this.classForFirstButtonForFirstButton=" bg-info text-white",this.contentSecondBtnForFirstButton='<i class="pi pi-print text-white"></i>',this.classForSecondButtonForSecondButton=" bg-success text-white",this.Cols=f.S8}Search(o){let e=new l.y9G;e.deelId=o.SelectedDeel.id,e.dateFrom=o.DateFrom,e.dateTo=o.DateTo,this.service.getDeelReport(e).subscribe({next:a=>{this.Data=a,this.cts.sendToster("success","\u0627\u0633\u062a\u0639\u0644\u0627\u0645 \u0639\u0646 \u062a\u0639\u0627\u0642\u062f\u0627\u062a","\u062a\u0645 \u0627\u0644\u0627\u0633\u062a\u0639\u0644\u0627\u0645 \u0628\u0646\u062c\u0627\u062d",` \u0627\u0633\u062a\u0639\u0644\u0627\u0645 \u0639\u0646 \u062a\u0642\u0631\u064a\u0631 \u0627\u0644\u062a\u0639\u0627\u0642\u062f\u0627\u062a \u0645\u0646 \u0641\u062a\u0631\u0629 ${i._.Formate(e.dateFrom)} \u0625\u0644\u064a \u0641\u062a\u0631\u0629 ${i._.Formate(e.dateTo)} \u0644\u0644\u062a\u0639\u0627\u0642\u062f / ${o.SelectedDeel.name}  `),this.cdRef.detectChanges()},error:a=>{}})}DownloadFile(o){let e=new l.y9G;e.deelId=o.SelectedDeel.id,e.dateFrom=o.DateFrom,e.dateTo=o.DateTo,this.cts.sendToster("success","\u062a\u062d\u0645\u064a\u0644 \u0645\u0644\u0641 \u0625\u0643\u0633\u0644 \u0644\u0644\u062a\u0642\u0631\u064a\u0631 \u0627\u0644\u062a\u0639\u0627\u0642\u062f\u0627\u062a","\u062a\u0645 \u062a\u062d\u0645\u064a\u0644 \u0645\u0644\u0641 \u0625\u0643\u0633\u0644 \u0628\u0646\u062c\u0627\u062d",` \u062a\u062d\u0645\u064a\u0644 \u0645\u0644\u0641 \u0625\u0643\u0633\u0644 \u0644\u0644\u062a\u0642\u0631\u064a\u0631 \u0627\u0644\u062a\u0639\u0627\u0642\u062f\u0627\u062a ${i._.Formate(e.dateFrom)} \u0625\u0644\u064a \u0641\u062a\u0631\u0629 ${i._.Formate(e.dateTo)} \u0644\u0644\u062a\u0639\u0627\u0642\u062f / ${o.SelectedDeel.name}  `),this.reportService.saveFile(e)}static#t=this.\u0275fac=function(e){return new(e||r)(t.rXU(l.Kje),t.rXU(t.gRc),t.rXU(p.o3),t.rXU(m.bg),t.rXU(u),t.rXU(S.o))};static#e=this.\u0275cmp=t.VBU({type:r,selectors:[["app-deel-report"]],features:[t.Jv_([m.bg,p.o3])],decls:10,vars:11,consts:[["position","top-left",3,"showTransformOptions"],[1,"card","card-flush","shadow-sm"],[1,"card-header"],["translate","MENU.Revision",1,"card-title"],[1,"card-toolbar"],[1,"card-body","py-5"],[3,"onDownloadExcelFile","onSearchSubmit","rangeDates","WithBranch","WithSinglDeel","WithDownloadExcel"],[1,"row"],[3,"cols","rowsPageNumbers","data","chooseColomns","pagination","scrollable"]],template:function(e,a){1&e&&(t.nrm(0,"p-toast",0),t.j41(1,"div",1)(2,"div",2),t.nrm(3,"h3",3)(4,"div",4),t.k0s(),t.j41(5,"div",5)(6,"app-searchcriteria",6),t.bIt("onDownloadExcelFile",function(n){return a.DownloadFile(n)})("onSearchSubmit",function(n){return a.Search(n)}),t.k0s(),t.nrm(7,"br"),t.j41(8,"div",7),t.nrm(9,"app-shared-datatable",8),t.k0s()()()),2&e&&(t.Y8G("showTransformOptions","translateX(100%)"),t.R7$(6),t.Y8G("rangeDates",a.rangeDates)("WithBranch",!1)("WithSinglDeel",!0)("WithDownloadExcel",!0),t.R7$(3),t.Y8G("cols",a.Cols)("rowsPageNumbers",25)("data",a.Data)("chooseColomns",!0)("pagination",!0)("scrollable",!1))},dependencies:[R.N,C.h,v.y8]})}return r})(),data:{animation:"DeelReport"}}];let b=(()=>{class r{static#t=this.\u0275fac=function(e){return new(e||r)};static#e=this.\u0275mod=t.$C({type:r});static#o=this.\u0275inj=t.G2t({imports:[h.iI.forChild(T),h.iI]})}return r})();var U=s(9921),w=s(9417),B=s(5769),E=s(2609),I=s(5114);let $=(()=>{class r{static#t=this.\u0275fac=function(e){return new(e||r)};static#e=this.\u0275mod=t.$C({type:r});static#o=this.\u0275inj=t.G2t({providers:[u],imports:[D.MD,U.G,b,w.YN,v.MB,B.kr,E.h,I.u]})}return r})()}}]);