"use strict";(self.webpackChunkEKOWebUI=self.webpackChunkEKOWebUI||[]).push([[587],{1587:(G,l,r)=>{r.r(l),r.d(l,{ReportsModule:()=>x});var m=r(177),c=r(8742),p=r(7306),u=r(5779),v=r(660),D=r(9501),i=r(5487),n=r(9949),F=r(9611),e=r(4438),f=r(1626);let d=(()=>{class s{constructor(o){this._httpClient=o}downloadFile(o){return this._httpClient.post((localStorage.getItem("apiUrl")||"")+"/Reports/ExportDeelReportToExcelSheet",o,{observe:"response",responseType:"blob"})}saveFile(o){this.downloadFile(o).subscribe(t=>{let a=document.createElement("a");a.href=window.URL.createObjectURL(t.body),a.setAttribute("download","DeelReport"),document.body.appendChild(a),a.click(),a.remove()})}static#t=this.\u0275fac=function(t){return new(t||s)(e.KVO(f.Qq))};static#e=this.\u0275prov=e.jDH({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})();var g=r(3612),S=r(7427),h=r(9998);const C=[{path:"",redirectTo:"DeelReport",pathMatch:"full"},{path:"DeelReport",canActivate:[p._],component:(()=>{class s extends F.${constructor(o,t){super(o),this.injector=o,this.reportserviceService=t,this.contentFirstBtnForFirstButton='<i class="pi pi-book text-white"></i>',this.classForFirstButtonForFirstButton=" bg-info text-white",this.contentSecondBtnForFirstButton='<i class="pi pi-print text-white"></i>',this.classForSecondButtonForSecondButton=" bg-success text-white",this.currentParameterSearch=new i.y9G,this.Cols=D.S8}Search(o){let t=new i.y9G;t.deelId=o.SelectedDeel.id,t.dateFrom=o.DateFrom,t.dateTo=o.DateTo,this.currentParameterSearch=t,this.service.getDeelReport(t).subscribe({next:a=>{this.Data=a,this.cts.sendToster("success","\u0627\u0633\u062a\u0639\u0644\u0627\u0645 \u0639\u0646 \u062a\u0639\u0627\u0642\u062f\u0627\u062a","\u062a\u0645 \u0627\u0644\u0627\u0633\u062a\u0639\u0644\u0627\u0645 \u0628\u0646\u062c\u0627\u062d",` \u0627\u0633\u062a\u0639\u0644\u0627\u0645 \u0639\u0646 \u062a\u0642\u0631\u064a\u0631 \u0627\u0644\u062a\u0639\u0627\u0642\u062f\u0627\u062a \u0645\u0646 \u0641\u062a\u0631\u0629 ${n._.Formate(t.dateFrom)} \u0625\u0644\u064a \u0641\u062a\u0631\u0629 ${n._.Formate(t.dateTo)} \u0644\u0644\u062a\u0639\u0627\u0642\u062f / ${o.SelectedDeel.name}  `),this.cdRef.detectChanges()},error:a=>{}})}DownloadFile(o){let t=new i.y9G;t.deelId=o.SelectedDeel.id,t.dateFrom=o.DateFrom,t.dateTo=o.DateTo,this.cts.sendToster("success","\u062a\u062d\u0645\u064a\u0644 \u0645\u0644\u0641 \u0625\u0643\u0633\u0644 \u0644\u0644\u062a\u0642\u0631\u064a\u0631 \u0627\u0644\u062a\u0639\u0627\u0642\u062f\u0627\u062a","\u062a\u0645 \u062a\u062d\u0645\u064a\u0644 \u0645\u0644\u0641 \u0625\u0643\u0633\u0644 \u0628\u0646\u062c\u0627\u062d",` \u062a\u062d\u0645\u064a\u0644 \u0645\u0644\u0641 \u0625\u0643\u0633\u0644 \u0644\u0644\u062a\u0642\u0631\u064a\u0631 \u0627\u0644\u062a\u0639\u0627\u0642\u062f\u0627\u062a ${n._.Formate(t.dateFrom)} \u0625\u0644\u064a \u0641\u062a\u0631\u0629 ${n._.Formate(t.dateTo)} \u0644\u0644\u062a\u0639\u0627\u0642\u062f / ${o.SelectedDeel.name}  `),this.reportserviceService.saveFile(t)}DownloadExcel(){this.service.exportDeelReportTask(this.currentParameterSearch).subscribe({next:o=>{this.downloadFromFileDto(o)}})}static#t=this.\u0275fac=function(t){return new(t||s)(e.rXU(e.zZn),e.rXU(d))};static#e=this.\u0275cmp=e.VBU({type:s,selectors:[["app-deel-report"]],features:[e.Jv_([u.bg,v.o3]),e.Vt3],decls:10,vars:11,consts:[["position","top-left",3,"showTransformOptions"],[1,"card","card-flush","shadow-sm"],[1,"card-header"],["translate","MENU.Revision",1,"card-title"],[1,"card-toolbar"],[1,"card-body","py-5"],[3,"onSearchSubmit","rangeDates","WithBranch","WithSinglDeel"],[1,"row"],[3,"downloadExcelEvent","cols","rowsPageNumbers","data","chooseColomns","pagination","scrollable","downloadExcel"]],template:function(t,a){1&t&&(e.nrm(0,"p-toast",0),e.j41(1,"div",1)(2,"div",2),e.nrm(3,"h3",3)(4,"div",4),e.k0s(),e.j41(5,"div",5)(6,"app-searchcriteria",6),e.bIt("onSearchSubmit",function($){return a.Search($)}),e.k0s(),e.nrm(7,"br"),e.j41(8,"div",7)(9,"app-shared-datatable",8),e.bIt("downloadExcelEvent",function(){return a.DownloadExcel()}),e.k0s()()()()),2&t&&(e.Y8G("showTransformOptions","translateX(100%)"),e.R7$(6),e.Y8G("rangeDates",a.rangeDates)("WithBranch",!1)("WithSinglDeel",!0),e.R7$(3),e.Y8G("cols",a.Cols)("rowsPageNumbers",25)("data",a.Data)("chooseColomns",!0)("pagination",!0)("scrollable",!1)("downloadExcel",!0))},dependencies:[g.N,S.h,h.y8]})}return s})(),data:{animation:"DeelReport"}}];let y=(()=>{class s{static#t=this.\u0275fac=function(t){return new(t||s)};static#e=this.\u0275mod=e.$C({type:s});static#o=this.\u0275inj=e.G2t({imports:[c.iI.forChild(C),c.iI]})}return s})();var T=r(9921),b=r(9417),E=r(5769),w=r(2609),B=r(5114);let x=(()=>{class s{static#t=this.\u0275fac=function(t){return new(t||s)};static#e=this.\u0275mod=e.$C({type:s});static#o=this.\u0275inj=e.G2t({providers:[d],imports:[m.MD,T.G,y,b.YN,h.MB,E.kr,w.h,B.u]})}return s})()}}]);