"use strict";(self.webpackChunkEKOWebUI=self.webpackChunkEKOWebUI||[]).push([[787],{5787:(st,y,r)=>{r.r(y),r.d(y,{StatisticsModule:()=>at});var p=r(6895),A=r(7799),_=r(9345),m=r(805),d=r(5153),t=r(4650),x=r(4380),f=r(2453),C=r(8794);let F=(()=>{class s{constructor(e,a,i){this.service=e,this.cdRef=a,this.messageService=i}onSelect(e){}Search(e){let a=new d.SO;a.dateFrom=e.DateFrom,a.dateTo=e.DateTo,a.doctorId=e.SelectedDoctor.doctorID,this.service.getAllDoctorStatisticsData(a).subscribe({next:i=>{this.handleChartData(i),this.cdRef.detectChanges()},error:i=>{}})}handleChartData(e){this.multiAxisData={labels:[],datasets:[]},this.multiAxisData.labels=[],this.multiAxisData.datasets=[],this.multiAxisData.labels=e.labels,e.dataSets?.forEach(a=>{this.multiAxisData.datasets.push({label:a.docTypeName,backgroundColor:this.ChangeBackGroundColorForBrnachesDetails(),yAxisID:"y",data:a.total,display:!1})})}ChangeBackGroundColorForBrnachesDetails(){let e="#";for(let a=0;a<3;a++)e+=("0"+Math.floor((1+Math.random())*Math.pow(16,2)/2).toString(16)).slice(-2);return e}}return s.\u0275fac=function(e){return new(e||s)(t.Y36(d.KU),t.Y36(t.sBO),t.Y36(m.ez))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-doctor-statistics"]],features:[t._Bn([m.ez])],decls:11,vars:5,consts:[["position","top-left",3,"showTransformOptions"],[1,"card","card-flush","shadow-sm"],[1,"card-header"],[1,"card-title"],[1,"card-toolbar"],[1,"card-body","py-5"],[3,"rangeDates","WithDoctorAutoComplete","onSearchSubmit"],[1,"row"],["type","bar",3,"data","options"]],template:function(e,a){1&e&&(t._UZ(0,"p-toast",0),t.TgZ(1,"div",1)(2,"div",2)(3,"h3",3),t._uU(4," \u0632\u064a\u0627\u0631\u0627\u062a \u0637\u0628\u064a\u0628 "),t.qZA(),t._UZ(5,"div",4),t.qZA(),t.TgZ(6,"div",5)(7,"app-searchcriteria",6),t.NdJ("onSearchSubmit",function(o){return a.Search(o)}),t.qZA(),t._UZ(8,"br"),t.TgZ(9,"div",7),t._UZ(10,"p-chart",8),t.qZA()()()),2&e&&(t.Q6J("showTransformOptions","translateX(100%)"),t.xp6(7),t.Q6J("rangeDates",a.rangeDates)("WithDoctorAutoComplete",!0),t.xp6(3),t.Q6J("data",a.multiAxisData)("options",a.multiAxisOptions))},dependencies:[x.d,f.FN,C.C]}),s})();var D=r(8968),l=r(2327),h=r(4006),b=r(4463),v=r(585),O=r(2210);function J(s,n){if(1&s){const e=t.EpF();t.TgZ(0,"tr")(1,"td")(2,"span",29),t._uU(3),t.qZA()(),t.TgZ(4,"td",30),t._uU(5),t.ALo(6,"date"),t.qZA(),t.TgZ(7,"td",31),t._uU(8),t.ALo(9,"date"),t.qZA(),t.TgZ(10,"td",32),t.NdJ("click",function(){const o=t.CHM(e).$implicit,u=t.oxw();return t.KtG(u.RemoveItemFromListOfParams(o))}),t.TgZ(11,"span",33),t._uU(12," \u062d\u0630\u0641 "),t.qZA()()()}if(2&s){const e=n.$implicit;t.xp6(3),t.hij("",e.Text," "),t.xp6(2),t.Oqu(t.xi3(6,3,e.DateFrom,"dd-MM-yyyy")),t.xp6(3),t.Oqu(t.xi3(9,6,e.DateTo,"dd-MM-yyyy"))}}let U=(()=>{class s{constructor(e,a,i){this.service=e,this.cdRef=a,this.messageService=i,this.listOfParams=[],this.paramObject={Text:"",BranchID:0,DateTo:l.s.Now(),DateFrom:l.s.Now()},this.comparisonParam=[],this.branchs=D.hl}ngOnInit(){}search(){if(this.selectedBranch<1)return void this.messageService.add({severity:"error",summary:"\u062d\u062f\u062b \u062e\u0637\u0623",detail:"\u062a\u0623\u0643\u062f \u0645\u0646 \u0625\u062e\u062a\u064a\u0627\u0631 \u0627\u0644\u0641\u0631\u0639."});let e=new d.iY;e.data=[],this.listOfParams.forEach(a=>{let i=new d.JY;i.dateFrom=l.s.DateFrom(a.DateFrom),i.dateTo=l.s.DateTo(a.DateTo),i.textLabel=a.Text,i.branchID=this.selectedBranch,e.data?.push(i)}),this.service.getAllCompareStatisticsByBranchCharts(e).subscribe({next:a=>{this.handleChartData(a),this.cdRef.detectChanges()},error:a=>{}})}handleChartData(e){this.multiAxisData={labels:[],datasets:[]},this.multiAxisData.labels=[],this.multiAxisData.datasets=[],this.multiAxisData.labels=e.labels,e.dataSets?.forEach(a=>{this.multiAxisData.datasets.push({label:a.docTypeName,backgroundColor:this.ChangeBackGroundColorForBrnachesDetails(),yAxisID:"y",data:a.total,display:!1})})}ChangeBackGroundColorForBrnachesDetails(){let e="#";for(let a=0;a<3;a++)e+=("0"+Math.floor((1+Math.random())*Math.pow(16,2)/2).toString(16)).slice(-2);return e}changeBranch(){}RemoveItemFromListOfParams(e){const a=this.listOfParams.indexOf(e);this.listOfParams.splice(a,1)}AddRange(){this.listOfParams.find(e=>e.Text==this.paramObject.Text)?this.messageService.add({severity:"error",summary:"\u062d\u062f\u062b \u062e\u0637\u0623",detail:"\u0644\u0627 \u064a\u0645\u0643\u0646 \u0625\u0636\u0627\u0641\u0629 \u0645\u0633\u0645\u064a \u0628\u0646\u0641\u0633 \u0627\u0644\u0625\u0633\u0645"}):this.paramObject.Text.length<1?this.messageService.add({severity:"error",summary:"\u062d\u062f\u062b \u062e\u0637\u0623",detail:"\u064a\u062c\u0628 \u0625\u0636\u0627\u0641\u0629 \u0645\u0633\u0645\u064a \u0644\u0644\u0641\u062a\u0631\u0629 "}):this.listOfParams.push(JSON.parse(JSON.stringify(this.paramObject)))}}return s.\u0275fac=function(e){return new(e||s)(t.Y36(d.KU),t.Y36(t.sBO),t.Y36(m.ez))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-one-branch-compare-statistics"]],features:[t._Bn([m.ez])],decls:47,vars:9,consts:[["position","top-left",3,"showTransformOptions"],[1,"card","taj-font"],[1,"row","m-12"],[1,"field","col-md-4"],["translate","Shared.Branch",1,"h3"],["optionValue","id","styleClass","taj-font fc-primng","optionLabel","name",3,"options","ngModel","onChange","ngModelChange"],[1,"d-flex","flex-column","mb-8","fv-row"],[1,"d-flex","align-items-center","fs-6","fw-bold","mb-2"],[1,""],["type","text","placeholder","\u0627\u062f\u062e\u0644 \u0627\u0644\u0645\u0633\u0645\u064a \u0644\u0644\u0641\u062a\u0631\u0629",1,"form-control",3,"ngModel","ngModelChange"],[1,"field","col-md-2"],[1,"h3"],["inputId","basic","dateFormat","yy-mm-dd","styleClass"," taj-font fc-primng",3,"ngModel","ngModelChange"],[1,"field","col-md-3"],[1,"btn","btn-info","m-8",3,"click"],[1,"fa-solid","fa-add"],[1,"btn","btn-success","m-8",3,"click"],[1,"fa-solid","fa-magnifying-glass"],[1,"row"],[1,"col-md-12","m-12"],["id","kt_customer_details_invoices_1","role","tabpanel",1,"tab-pane","fade","active","show"],[1,"table-responsive"],["id","kt_customer_details_invoices_table_1",1,"table","align-middle","table-row-dashed","fs-6","fw-bolder","gs-0","gy-4","p-0","m-0"],[1,"border-bottom","border-gray-200","fs-7","text-uppercase","fw-bolder"],[1,"text-start","text-gray-400"],[1,"min-w-100px"],[1,"fs-6","fw-bold","text-gray-600"],[4,"ngFor","ngForOf"],["type","bar",3,"data","options"],[1,"badge","badge-light-success"],[1,"text-info"],[1,"text-success"],[3,"click"],[1,"badge","badge-light-danger",2,"cursor","pointer"]],template:function(e,a){1&e&&(t._UZ(0,"p-toast",0),t.TgZ(1,"div",1)(2,"div",2)(3,"div",3),t._UZ(4,"label",4),t.TgZ(5,"p-dropdown",5),t.NdJ("onChange",function(){return a.changeBranch()})("ngModelChange",function(o){return a.selectedBranch=o}),t.qZA()()(),t.TgZ(6,"div",2)(7,"div",3)(8,"div",6)(9,"label",7)(10,"span",8),t._uU(11,"\u0627\u0644\u0645\u0633\u0645\u064a"),t.qZA()(),t.TgZ(12,"input",9),t.NdJ("ngModelChange",function(o){return a.paramObject.Text=o}),t.qZA()()(),t.TgZ(13,"div",10)(14,"label",11),t._uU(15," \u0641\u062a\u0631\u0629 \u0645\u0646 "),t.qZA(),t.TgZ(16,"p-calendar",12),t.NdJ("ngModelChange",function(o){return a.paramObject.DateFrom=o}),t.qZA()(),t.TgZ(17,"div",10)(18,"label",11),t._uU(19," \u0641\u062a\u0631\u0629 \u0625\u0644\u064a "),t.qZA(),t.TgZ(20,"p-calendar",12),t.NdJ("ngModelChange",function(o){return a.paramObject.DateTo=o}),t.qZA()(),t.TgZ(21,"div",13)(22,"button",14),t.NdJ("click",function(){return a.AddRange()}),t._UZ(23,"i",15),t._uU(24," \u0625\u0636\u0627\u0641\u0629 \u0641\u062a\u0631\u0629 "),t.qZA(),t.TgZ(25,"button",16),t.NdJ("click",function(){return a.search()}),t._UZ(26,"i",17),t._uU(27," \u0628\u062d\u0640\u062b "),t.qZA()()(),t.TgZ(28,"div",18)(29,"div",19)(30,"div",20)(31,"div",21)(32,"table",22)(33,"thead",23)(34,"tr",24)(35,"th",25),t._uU(36," \u0627\u0644\u0645\u0633\u0645\u064a"),t.qZA(),t.TgZ(37,"th",25),t._uU(38," \u0645\u0646 "),t.qZA(),t.TgZ(39,"th",25),t._uU(40,"\u0625\u0644\u064a "),t.qZA(),t.TgZ(41,"th",25),t._uU(42,"\u0625\u062f\u0648\u0627\u062a "),t.qZA()()(),t.TgZ(43,"tbody",26),t.YNc(44,J,13,9,"tr",27),t.qZA()()()()()(),t.TgZ(45,"div",18),t._UZ(46,"p-chart",28),t.qZA()()),2&e&&(t.Q6J("showTransformOptions","translateX(100%)"),t.xp6(5),t.Q6J("options",a.branchs)("ngModel",a.selectedBranch),t.xp6(7),t.Q6J("ngModel",a.paramObject.Text),t.xp6(4),t.Q6J("ngModel",a.paramObject.DateFrom),t.xp6(4),t.Q6J("ngModel",a.paramObject.DateTo),t.xp6(24),t.Q6J("ngForOf",a.listOfParams),t.xp6(2),t.Q6J("data",a.multiAxisData)("options",a.multiAxisOptions))},dependencies:[p.sg,h.Fj,h.JJ,h.On,b.Pi,f.FN,C.C,v.f,O.Lt,p.uU]}),s})();var B=r(5722);let w=(()=>{class s{constructor(e,a,i){this.service=e,this.cdRef=a,this.messageService=i,this.selectedBranchs=[],this.paramObject={Text:"",BranchID:0,DateTo:l.s.Now(),DateFrom:l.s.Now()},this.comparisonParam=[],this.branchs=D.hl}ngOnInit(){}search(){if(this.selectedBranchs.length<1)return void this.messageService.add({severity:"error",summary:"\u062d\u062f\u062b \u062e\u0637\u0623",detail:"\u062a\u0623\u0643\u062f \u0645\u0646 \u0625\u062e\u062a\u064a\u0627\u0631 \u0641\u0631\u0639 \u0648\u0627\u062d\u062f \u0639\u0644\u064a \u0627\u0644\u0623\u0642\u0644."});let e=new d.iY;e.data=[],this.selectedBranchs.forEach(a=>{let i=new d.JY;i.dateFrom=l.s.DateFrom(this.paramObject.DateFrom),i.dateTo=l.s.DateTo(this.paramObject.DateTo),i.textLabel=this.branchs.find(o=>o.id==a).name,i.branchID=a,e.data?.push(i)}),this.service.getAllCompareStatisticsByBranchCharts(e).subscribe({next:a=>{this.handleChartData(a),this.cdRef.detectChanges()},error:a=>{}})}handleChartData(e){this.multiAxisData={labels:[],datasets:[]},this.multiAxisData.labels=[],this.multiAxisData.datasets=[],this.multiAxisData.labels=e.labels,e.dataSets?.forEach(a=>{this.multiAxisData.datasets.push({label:a.docTypeName,backgroundColor:this.ChangeBackGroundColorForBrnachesDetails(),yAxisID:"y",data:a.total,display:!1})})}ChangeBackGroundColorForBrnachesDetails(){let e="#";for(let a=0;a<3;a++)e+=("0"+Math.floor((1+Math.random())*Math.pow(16,2)/2).toString(16)).slice(-2);return e}changeBranch(){}getClass(e){return"Branchs"===e&&this.selectedBranchs&&this.selectedBranchs.length>0?"":"ng-invalid ng-dirty"}}return s.\u0275fac=function(e){return new(e||s)(t.Y36(d.KU),t.Y36(t.sBO),t.Y36(m.ez))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-branch-compare-Statistics"]],features:[t._Bn([m.ez])],decls:20,vars:10,consts:[["position","top-left",3,"showTransformOptions"],[1,"card","taj-font"],[1,"row","m-12"],[1,"field","col-md-4"],["translate","Shared.Branch",1,"h3"],["styleClass","taj-font fc-primng","optionLabel","name","optionValue","id",3,"options","ngModel","ngModelChange","onChange"],[1,"field","col-md-2"],[1,"h3"],["inputId","basic","dateFormat","yy-mm-dd","styleClass"," taj-font fc-primng",3,"ngModel","ngModelChange"],[1,"field","col-md-3"],[1,"btn","btn-success","m-8",3,"click"],[1,"fa-solid","fa-magnifying-glass"],[1,"row"],["type","bar",3,"data","options"]],template:function(e,a){1&e&&(t._UZ(0,"p-toast",0),t.TgZ(1,"div",1)(2,"div",2)(3,"div",3),t._UZ(4,"label",4),t.TgZ(5,"p-multiSelect",5),t.NdJ("ngModelChange",function(o){return a.selectedBranchs=o})("onChange",function(){return a.changeBranch()}),t.qZA()(),t.TgZ(6,"div",6)(7,"label",7),t._uU(8," \u0641\u062a\u0631\u0629 \u0645\u0646 "),t.qZA(),t.TgZ(9,"p-calendar",8),t.NdJ("ngModelChange",function(o){return a.paramObject.DateFrom=o}),t.qZA()(),t.TgZ(10,"div",6)(11,"label",7),t._uU(12," \u0641\u062a\u0631\u0629 \u0625\u0644\u064a "),t.qZA(),t.TgZ(13,"p-calendar",8),t.NdJ("ngModelChange",function(o){return a.paramObject.DateTo=o}),t.qZA()(),t.TgZ(14,"div",9)(15,"button",10),t.NdJ("click",function(){return a.search()}),t._UZ(16,"i",11),t._uU(17," \u0628\u062d\u0640\u062b "),t.qZA()()(),t.TgZ(18,"div",12),t._UZ(19,"p-chart",13),t.qZA()()),2&e&&(t.Q6J("showTransformOptions","translateX(100%)"),t.xp6(5),t.Tol(a.getClass("Branchs")),t.Q6J("options",a.branchs)("ngModel",a.selectedBranchs),t.xp6(4),t.Q6J("ngModel",a.paramObject.DateFrom),t.xp6(4),t.Q6J("ngModel",a.paramObject.DateTo),t.xp6(6),t.Q6J("data",a.multiAxisData)("options",a.multiAxisOptions))},dependencies:[h.JJ,h.On,b.Pi,f.FN,C.C,v.f,B.NU]}),s})();function M(s,n){if(1&s){const e=t.EpF();t.TgZ(0,"tr")(1,"td")(2,"span",26),t._uU(3),t.qZA()(),t.TgZ(4,"td",27),t._uU(5),t.ALo(6,"date"),t.qZA(),t.TgZ(7,"td",28),t._uU(8),t.ALo(9,"date"),t.qZA(),t.TgZ(10,"td",29),t.NdJ("click",function(){const o=t.CHM(e).$implicit,u=t.oxw();return t.KtG(u.RemoveItemFromListOfParams(o))}),t.TgZ(11,"span",30),t._uU(12," \u062d\u0630\u0641 "),t.qZA()()()}if(2&s){const e=n.$implicit;t.xp6(3),t.hij("",e.Text," "),t.xp6(2),t.Oqu(t.xi3(6,3,e.DateFrom,"dd-MM-yyyy")),t.xp6(3),t.Oqu(t.xi3(9,6,e.DateTo,"dd-MM-yyyy"))}}let k=(()=>{class s{constructor(e,a,i){this.service=e,this.cdRef=a,this.messageService=i,this.paramObject={Text:"",DateTo:l.s.Now(),DateFrom:l.s.Now()},this.listOfParams=[],this.comparisonParam=[]}ngOnInit(){}search(){if(this.listOfParams.length<1)return void this.messageService.add({severity:"error",summary:"\u062d\u062f\u062b \u062e\u0637\u0623",detail:"\u062a\u0623\u0643\u062f \u0645\u0646 \u0625\u062e\u062a\u064a\u0627\u0631 \u0641\u062a\u0631\u0629 \u0639\u0644\u064a \u0627\u0644\u0623\u0642\u0644."});let e=new d.ZI;e.data=[],this.listOfParams.forEach(a=>{let i=new d.bJ;i.dateFrom=l.s.DateFrom(a.DateFrom),i.dateTo=l.s.DateTo(a.DateTo),i.textLabel=a.Text,e.data?.push(i)}),this.service.getAllCompareStatisticsData(e).subscribe({next:a=>{this.handleChartData(a),this.cdRef.detectChanges()},error:a=>{}})}handleChartData(e){this.multiAxisData={labels:[],datasets:[]},this.multiAxisData.labels=[],this.multiAxisData.datasets=[],this.multiAxisData.labels=e.labels,e.dataSets?.forEach(a=>{this.multiAxisData.datasets.push({label:a.docTypeName,backgroundColor:this.ChangeBackGroundColorForBrnachesDetails(),yAxisID:"y",data:a.total,display:!1})})}ChangeBackGroundColorForBrnachesDetails(){let e="#";for(let a=0;a<3;a++)e+=("0"+Math.floor((1+Math.random())*Math.pow(16,2)/2).toString(16)).slice(-2);return e}AddRange(){this.listOfParams.find(e=>e.Text==this.paramObject.Text)?this.messageService.add({severity:"error",summary:"\u062d\u062f\u062b \u062e\u0637\u0623",detail:"\u0644\u0627 \u064a\u0645\u0643\u0646 \u0625\u0636\u0627\u0641\u0629 \u0645\u0633\u0645\u064a \u0628\u0646\u0641\u0633 \u0627\u0644\u0625\u0633\u0645"}):this.paramObject.Text.length<1?this.messageService.add({severity:"error",summary:"\u062d\u062f\u062b \u062e\u0637\u0623",detail:"\u064a\u062c\u0628 \u0625\u0636\u0627\u0641\u0629 \u0645\u0633\u0645\u064a \u0644\u0644\u0641\u062a\u0631\u0629 "}):this.listOfParams.push(JSON.parse(JSON.stringify(this.paramObject)))}RemoveItemFromListOfParams(e){const a=this.listOfParams.indexOf(e);this.listOfParams.splice(a,1)}}return s.\u0275fac=function(e){return new(e||s)(t.Y36(d.KU),t.Y36(t.sBO),t.Y36(m.ez))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-compare-Statistics"]],features:[t._Bn([m.ez])],decls:49,vars:7,consts:[["position","top-left",3,"showTransformOptions"],[1,"card","taj-font"],[1,"row","m-12"],[1,"col-md-9"],[1,"row"],[1,"col-md-4"],[1,"d-flex","flex-column","mb-8","fv-row"],[1,"d-flex","align-items-center","fs-6","fw-bold","mb-2"],[1,""],["type","text","placeholder","\u0627\u062f\u062e\u0644 \u0627\u0644\u0645\u0633\u0645\u064a \u0644\u0644\u0641\u062a\u0631\u0629",1,"form-control",3,"ngModel","ngModelChange"],["inputId","basic","dateFormat","yy-mm-dd","styleClass"," taj-font fc-primng",3,"ngModel","ngModelChange"],[1,"col-md-3"],[1,"btn","btn-info","m-8",3,"click"],[1,"fa-solid","fa-add"],[1,"btn","btn-success","m-8",3,"click"],[1,"fa-solid","fa-magnifying-glass"],[1,"col-md-12","m-12"],["id","kt_customer_details_invoices_1","role","tabpanel",1,"tab-pane","fade","active","show"],[1,"table-responsive"],["id","kt_customer_details_invoices_table_1",1,"table","align-middle","table-row-dashed","fs-6","fw-bolder","gs-0","gy-4","p-0","m-0"],[1,"border-bottom","border-gray-200","fs-7","text-uppercase","fw-bolder"],[1,"text-start","text-gray-400"],[1,"min-w-100px"],[1,"fs-6","fw-bold","text-gray-600"],[4,"ngFor","ngForOf"],["type","bar",3,"data","options"],[1,"badge","badge-light-success"],[1,"text-info"],[1,"text-success"],[3,"click"],[1,"badge","badge-light-danger",2,"cursor","pointer"]],template:function(e,a){1&e&&(t._UZ(0,"p-toast",0),t.TgZ(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"label",7)(8,"span",8),t._uU(9,"\u0627\u0644\u0645\u0633\u0645\u064a"),t.qZA()(),t.TgZ(10,"input",9),t.NdJ("ngModelChange",function(o){return a.paramObject.Text=o}),t.qZA()()(),t.TgZ(11,"div",5)(12,"div",6)(13,"label",7)(14,"span",8),t._uU(15,"\u0641\u062a\u0631\u0629 \u0645\u0646"),t.qZA()(),t.TgZ(16,"p-calendar",10),t.NdJ("ngModelChange",function(o){return a.paramObject.DateFrom=o}),t.qZA()()(),t.TgZ(17,"div",5)(18,"div",6)(19,"label",7)(20,"span",8),t._uU(21,"\u0641\u062a\u0631\u0629 \u0625\u0644\u064a"),t.qZA()(),t.TgZ(22,"p-calendar",10),t.NdJ("ngModelChange",function(o){return a.paramObject.DateTo=o}),t.qZA()()()()(),t.TgZ(23,"div",11)(24,"button",12),t.NdJ("click",function(){return a.AddRange()}),t._UZ(25,"i",13),t._uU(26," \u0625\u0636\u0627\u0641\u0629 \u0641\u062a\u0631\u0629 "),t.qZA(),t.TgZ(27,"button",14),t.NdJ("click",function(){return a.search()}),t._UZ(28,"i",15),t._uU(29," \u0628\u062d\u0640\u062b "),t.qZA()()(),t.TgZ(30,"div",4)(31,"div",16)(32,"div",17)(33,"div",18)(34,"table",19)(35,"thead",20)(36,"tr",21)(37,"th",22),t._uU(38," \u0627\u0644\u0645\u0633\u0645\u064a"),t.qZA(),t.TgZ(39,"th",22),t._uU(40," \u0645\u0646 "),t.qZA(),t.TgZ(41,"th",22),t._uU(42,"\u0625\u0644\u064a "),t.qZA(),t.TgZ(43,"th",22),t._uU(44,"\u0625\u062f\u0648\u0627\u062a "),t.qZA()()(),t.TgZ(45,"tbody",23),t.YNc(46,M,13,9,"tr",24),t.qZA()()()()()(),t.TgZ(47,"div",4),t._UZ(48,"p-chart",25),t.qZA()()),2&e&&(t.Q6J("showTransformOptions","translateX(100%)"),t.xp6(10),t.Q6J("ngModel",a.paramObject.Text),t.xp6(6),t.Q6J("ngModel",a.paramObject.DateFrom),t.xp6(6),t.Q6J("ngModel",a.paramObject.DateTo),t.xp6(24),t.Q6J("ngForOf",a.listOfParams),t.xp6(2),t.Q6J("data",a.multiAxisData)("options",a.multiAxisOptions))},dependencies:[p.sg,h.Fj,h.JJ,h.On,f.FN,C.C,v.f,p.uU]}),s})();var c=r(3939),Z=r(4819),N=r(5226),q=r.n(N),g=r(4325),S=r(1462),T=r(1843);let j=(()=>{class s{constructor(e,a,i){this.service=e,this.ref=a,this.config=i,this.model=new d.eU,this.Cols=S.jI}ngOnInit(){this.model=d.eU.fromJS(this.config.data),this.service.getCashLaterDetails(this.model).subscribe({next:e=>{this.data=e},error:e=>{}})}}return s.\u0275fac=function(e){return new(e||s)(t.Y36(d.KU),t.Y36(g.E7),t.Y36(g.S))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-cash-later"]],decls:1,vars:6,consts:[[3,"cols","rowsPageNumbers","data","chooseColomns","pagination","scrollable"]],template:function(e,a){1&e&&t._UZ(0,"app-shared-datatable",0),2&e&&t.Q6J("cols",a.Cols)("rowsPageNumbers",15)("data",a.data)("chooseColomns",!0)("pagination",!0)("scrollable",!1)},dependencies:[T.G]}),s})(),I=(()=>{class s{constructor(e,a,i){this.service=e,this.ref=a,this.config=i,this.Cols=S.i0}ngOnInit(){this.model=d.eU.fromJS(this.config.data),this.service.getPaymentsDetails(this.model).subscribe({next:e=>{this.data=e},error:e=>{}})}}return s.\u0275fac=function(e){return new(e||s)(t.Y36(d.KU),t.Y36(g.E7),t.Y36(g.S))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-total-payments"]],decls:1,vars:6,consts:[[3,"cols","rowsPageNumbers","data","chooseColomns","pagination","scrollable"]],template:function(e,a){1&e&&t._UZ(0,"app-shared-datatable",0),2&e&&t.Q6J("cols",a.Cols)("rowsPageNumbers",15)("data",a.data)("chooseColomns",!0)("pagination",!0)("scrollable",!1)},dependencies:[T.G]}),s})(),P=(()=>{class s{constructor(e,a,i){this.service=e,this.ref=a,this.config=i,this.Cols=S.F$}ngOnInit(){this.model=d.eU.fromJS(this.config.data),this.service.getRecivedDetails(this.model).subscribe({next:e=>{this.data=e},error:e=>{}})}}return s.\u0275fac=function(e){return new(e||s)(t.Y36(d.KU),t.Y36(g.E7),t.Y36(g.S))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-total-recived"]],decls:1,vars:6,consts:[[3,"cols","rowsPageNumbers","data","chooseColomns","pagination","scrollable"]],template:function(e,a){1&e&&t._UZ(0,"app-shared-datatable",0),2&e&&t.Q6J("cols",a.Cols)("rowsPageNumbers",15)("data",a.data)("chooseColomns",!0)("pagination",!0)("scrollable",!1)},dependencies:[T.G],encapsulation:2}),s})();function R(s,n){if(1&s){const e=t.EpF();t.TgZ(0,"div",48),t.NdJ("click",function(){t.CHM(e);const i=t.oxw(2).$implicit,o=t.oxw();return t.KtG(o.ShowTotalPaymentsComponent(i.branchId))}),t.TgZ(1,"span"),t._UZ(2,"i",49),t._uU(3),t.qZA(),t.TgZ(4,"span",50),t._uU(5),t.qZA()()}if(2&s){const e=t.oxw().$implicit;t.Gre("StatisticsNumbersDetailsClass bg-light-",e.backgroundClass," "),t.xp6(2),t.Gre("text-dark ",e.icon,""),t.xp6(1),t.hij(" ",e.text," "),t.xp6(2),t.hij(" ",e.total," ")}}function G(s,n){if(1&s){const e=t.EpF();t.TgZ(0,"div",48),t.NdJ("click",function(){t.CHM(e);const i=t.oxw(2).$implicit,o=t.oxw();return t.KtG(o.ShowCashLaterComponent(i.branchId))}),t.TgZ(1,"span"),t._UZ(2,"i",49),t._uU(3),t.qZA(),t.TgZ(4,"span",50),t._uU(5),t.qZA()()}if(2&s){const e=t.oxw().$implicit;t.Gre("StatisticsNumbersDetailsClass bg-light-",e.backgroundClass," "),t.xp6(2),t.Gre("text-dark ",e.icon,""),t.xp6(1),t.hij(" ",e.text," "),t.xp6(2),t.hij(" ",e.total," ")}}function Y(s,n){if(1&s){const e=t.EpF();t.TgZ(0,"div",48),t.NdJ("click",function(){t.CHM(e);const i=t.oxw(2).$implicit,o=t.oxw();return t.KtG(o.ShowTotalRecivedComponent(i.branchId))}),t.TgZ(1,"span"),t._UZ(2,"i",49),t._uU(3),t.qZA(),t.TgZ(4,"span",50),t._uU(5),t.qZA()()}if(2&s){const e=t.oxw().$implicit;t.Gre("StatisticsNumbersDetailsClass bg-light-",e.backgroundClass," "),t.xp6(2),t.Gre("text-dark ",e.icon,""),t.xp6(1),t.hij(" ",e.text," "),t.xp6(2),t.hij(" ",e.total," ")}}function Q(s,n){if(1&s&&(t.TgZ(0,"div")(1,"span"),t._UZ(2,"i",49),t._uU(3),t.qZA(),t.TgZ(4,"span",50),t._uU(5),t.qZA()()),2&s){const e=t.oxw().$implicit;t.Gre("StatisticsNumbersDetailsClass bg-light-",e.backgroundClass," "),t.xp6(2),t.Gre("text-dark ",e.icon,""),t.xp6(1),t.hij(" ",e.text," "),t.xp6(2),t.hij(" ",e.total," ")}}function E(s,n){if(1&s&&(t.TgZ(0,"div"),t.YNc(1,R,6,8,"div",46),t.YNc(2,G,6,8,"div",46),t.YNc(3,Y,6,8,"div",46),t.YNc(4,Q,6,8,"div",47),t.qZA()),2&s){const e=n.$implicit;t.xp6(1),t.Q6J("ngIf",8==e.type),t.xp6(1),t.Q6J("ngIf",99==e.type),t.xp6(1),t.Q6J("ngIf",19==e.type),t.xp6(1),t.Q6J("ngIf",8!=e.type&&99!=e.type&&19!=e.type)}}function L(s,n){if(1&s&&(t.TgZ(0,"div",42)(1,"div",43)(2,"span",44),t._uU(3),t.qZA(),t.YNc(4,E,5,4,"div",45),t.qZA()()),2&s){const e=n.$implicit;t.xp6(3),t.hij(" ",e.branchName," "),t.xp6(1),t.Q6J("ngForOf",e.details)}}function $(s,n){if(1&s){const e=t.EpF();t.TgZ(0,"div",33),t._UZ(1,"h4",51),t.TgZ(2,"button",52),t.NdJ("click",function(){const o=t.CHM(e).$implicit;return t.KtG(o.dismiss("Cross click"))}),t.qZA()(),t.TgZ(3,"div",37)(4,"app-searchcriteria",53),t.NdJ("onSearchSubmit",function(i){t.CHM(e);const o=t.oxw();return t.KtG(o.Search(i))}),t.qZA()(),t.TgZ(5,"div",38)(6,"button",54),t.NdJ("click",function(){const o=t.CHM(e).$implicit;return t.KtG(o.close("Save click"))}),t.qZA()()}2&s&&(t.xp6(4),t.Q6J("WithBranch",!1))}const K=[{path:"",redirectTo:"MainStatistics",pathMatch:"full"},{path:"MainStatistics",canActivate:[_.o],component:(()=>{class s{constructor(e,a,i,o,u){this.service=e,this.modalService=a,this.cdRef=i,this.messageService=o,this.dialogService=u,this.closeResult="",this.data=new d.tI,this.showCustomersGridButtons=!1,this.searchTextForCustomers="\u0628\u062d\u062b \u0639\u0646 \u0645\u0631\u064a\u0636",this.searchTextForTests="\u0628\u062d\u062b \u0639\u0646 \u062a\u062d\u0644\u064a\u0644",this.classForSecondButtonForCustomers="info",this.contentSecondtBtnForCustomers="\u062a\u0641\u0627\u0635\u064a\u0644",this.scrollHeightForCustomers="500px",this.randomLightColor="",this.line="",this.selectionModemultiple="multiple",this.readonlyInputDateRange=!0,this.currentTab="",this.customersCols=[c.v.fromJS({id:1,filtered:!0,hidden:!1,field:"name",header:"\u0625\u0633\u0645 \u0627\u0644\u0645\u0631\u064a\u0636",type:"text"}),c.v.fromJS({id:2,filtered:!0,hidden:!1,field:"counts",header:"\u0639\u062f\u062f \u0627\u0644\u0632\u064a\u0627\u0631\u0627\u062a",type:"text"})],this.testsCols=[c.v.fromJS({filtered:!0,hidden:!1,field:"testcap",header:"\u0625\u0633\u0645 \u0627\u0644\u062a\u062d\u0644\u064a\u0644",type:"text"}),c.v.fromJS({filtered:!0,hidden:!1,field:"counts",header:"\u0639\u062f\u062f \u0627\u0644\u0632\u064a\u0627\u0631\u0627\u062a",type:"text"})],this.doctorsCols=[c.v.fromJS({id:1,sorted:!0,hidden:!1,filtered:!0,field:"doctorName",header:"\u0625\u0633\u0645 \u0627\u0644\u0637\u0628\u064a\u0628",type:"text"}),c.v.fromJS({id:2,sorted:!1,hidden:!1,filtered:!0,field:"totalAfterDiscount",header:"\u0627\u0644\u0625\u062c\u0645\u0627\u0644\u064a \u0628\u0639\u062f \u0627\u0644\u062e\u0635\u0645",type:"text"}),c.v.fromJS({id:3,sorted:!1,hidden:!1,filtered:!0,field:"totalDiscount",header:"\u0623\u062c\u0645\u0627\u0644\u064a \u0627\u0644\u062e\u0635\u0645",type:"text"}),c.v.fromJS({id:4,sorted:!1,hidden:!1,filtered:!0,field:"totalLater",header:"\u0627\u062c\u0645\u0627\u0644\u064a \u0627\u0644\u0645\u062a\u0628\u0642\u064a",type:"text"}),c.v.fromJS({id:5,sorted:!1,hidden:!1,filtered:!0,field:"totalPaied",header:"\u0627\u062c\u0645\u0627\u0644\u064a \u0627\u0644\u0645\u062f\u0641\u0648\u0639",type:"text"}),c.v.fromJS({id:6,sorted:!1,hidden:!1,filtered:!0,field:"totalValue",header:"\u0627\u062c\u0645\u0627\u0644\u064a \u0627\u0644\u0632\u064a\u0627\u0631\u0627\u062a",type:"text"}),c.v.fromJS({id:7,sorted:!1,hidden:!1,filtered:!0,field:"counts",header:"\u0639\u062f\u062f \u0627\u0644\u0632\u064a\u0627\u0631\u0627\u062a",type:"text"})],this.deelsCols=[c.v.fromJS({filtered:!0,hidden:!1,field:"deelName",header:"\u0625\u0633\u0645 \u0627\u0644\u062a\u0639\u0627\u0642\u062f",type:"text"}),c.v.fromJS({filtered:!0,hidden:!1,field:"totalAfterDiscount",header:"\u0627\u0644\u0625\u062c\u0645\u0627\u0644\u064a \u0628\u0639\u062f \u0627\u0644\u062e\u0635\u0645",type:"text"}),c.v.fromJS({filtered:!0,hidden:!1,field:"totalDiscount",header:"\u0623\u062c\u0645\u0627\u0644\u064a \u0627\u0644\u062e\u0635\u0645",type:"text"}),c.v.fromJS({filtered:!0,hidden:!1,field:"totalLater",header:"\u0627\u062c\u0645\u0627\u0644\u064a \u0627\u0644\u0645\u062a\u0628\u0642\u064a",type:"text"}),c.v.fromJS({filtered:!0,hidden:!1,field:"totalPaied",header:"\u0627\u062c\u0645\u0627\u0644\u064a \u0627\u0644\u0645\u062f\u0641\u0648\u0639",type:"text"}),c.v.fromJS({filtered:!0,hidden:!1,field:"totalValue",header:"\u0627\u062c\u0645\u0627\u0644\u064a \u0627\u0644\u0632\u064a\u0627\u0631\u0627\u062a",type:"text"}),c.v.fromJS({filtered:!0,hidden:!1,field:"counts",header:"\u0639\u062f\u062f \u0627\u0644\u0632\u064a\u0627\u0631\u0627\u062a",type:"text"})]}ShowTotalPaymentsComponent(e){console.log(this.selectedDateRange),console.log(e),this.dialogService.open(I,{data:{DateFrom:this.selectedDateRange.dateFrom,DateTo:this.selectedDateRange.dateTo,BranchId:e},header:"\u062a\u0642\u0631\u064a\u0631 \u0627\u0644\u0645\u0635\u0631\u0648\u0641\u0627\u062a",width:"90%",maximizable:!0,resizable:!0,draggable:!0})}ShowTotalRecivedComponent(e){this.dialogService.open(P,{data:{DateFrom:this.selectedDateRange.dateFrom,DateTo:this.selectedDateRange.dateTo,BranchId:e},header:"\u062a\u0642\u0631\u064a\u0631 \u0627\u0644\u062a\u062d\u0635\u064a\u0644",width:"90%",maximizable:!0,resizable:!0,draggable:!0})}ShowCashLaterComponent(e){console.log(this.selectedDateRange),this.dialogService.open(j,{data:{DateFrom:this.selectedDateRange.dateFrom,DateTo:this.selectedDateRange.dateTo,BranchId:e},header:"\u062a\u0642\u0631\u064a\u0631 \u0627\u0644\u0645\u062f\u064a\u0648\u0646\u064a\u0627\u062a",width:"90%",maximizable:!0,resizable:!0,draggable:!0})}ngAfterViewInit(){this.ChangeBackGroundColorForBrnachesDetails()}getDismissReason(e){return e===Z.If.ESC?"by pressing ESC":e===Z.If.BACKDROP_CLICK?"by clicking on a backdrop":`with: ${e}`}ngOnInit(){this.GetData("Today")}ChangeBackGroundColorForBrnachesDetails(){this.cdRef.detectChanges();let e="#";for(let a=0;a<3;a++)e+=("0"+Math.floor((1+Math.random())*Math.pow(16,2)/2).toString(16)).slice(-2);this.line=`linear-gradient(${e}, #ffff0000)`}GetData(e,a={}){this.currentTab=e;let i=new d.C0;switch(e){case"Yesterday":i.dateFrom=l.s.DateFrom(l.s.AddDays(-1)),i.dateTo=l.s.DateTo(l.s.Now());break;case"Today":i.dateFrom=l.s.DateFrom(l.s.Now()),i.dateTo=l.s.DateTo(l.s.Now());break;case"Week":i.dateFrom=l.s.DateFrom(l.s.AddDays(-7)),i.dateTo=l.s.DateTo(l.s.Now());break;case"Month":i.dateFrom=l.s.DateFrom(l.s.AddDays(-30)),i.dateTo=l.s.DateTo(l.s.Now());break;case"Period":return void this.modalService.open(a,{ariaLabelledBy:"modal-basic-title",size:"xl"}).result.then(o=>{this.closeResult=`Closed with: ${o}`},o=>{this.closeResult=`Dismissed ${this.getDismissReason(o)}`})}this.GetAllData(i)}GetAllData(e){this.selectedDateRange=e,this.service.getAllData(e).subscribe({next:a=>{this.data=a,this.ChangeBackGroundColorForBrnachesDetails()},error:a=>{}})}addItem(e){q().fire(`Hello world! . ${e}`)}openCustomerDetails(e){}cloudItem(e){this.messageService.add({severity:"success",summary:"\u062a\u0645 \u0628\u062d\u0645\u062f \u0627\u0644\u0644\u0647 ",detail:"\u0627\u0644 \u062a\u0648\u0633\u062a\u0631 \u0627\u0644\u0639\u0645\u064a\u0642 \u062a\u0645 \u0628\u062d\u0645\u062f \u0627\u0644\u0644\u0647"})}generateLightColorHex(){return this.line}Search(e){let a=new d.C0;a.dateFrom=e.DateFrom,a.dateTo=e.DateTo,this.GetAllData(a),this.modalService.dismissAll()}}return s.\u0275fac=function(e){return new(e||s)(t.Y36(d.KU),t.Y36(Z.FF),t.Y36(t.sBO),t.Y36(m.ez),t.Y36(g.xA))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-Statistics"]],features:[t._Bn([m.ez,g.xA])],decls:88,vars:20,consts:[["position","top-left",3,"showTransformOptions"],[1,"container"],[1,"row"],[1,"col-xxl-12"],[1,"card","card-xxl-stretch","mb-5","mb-xl-10"],[1,"card-header","card-header-stretch"],[1,"card-title"],[1,"m-0","text-gray-900","d-none","d-sm-none","d-md-block"],[1,"card-toolbar"],["id","kt_security_summary_tabs",1,"nav","nav-tabs","nav-line-tabs","nav-stretch","border-transparent","fs-5","fw-bolder"],[1,"nav-item"],["data-kt-countup-tabs","true","data-bs-toggle","tab","id","kt_security_summary_tab_yesterday",1,"nav-link","text-active-primary","StatisticsTabTextClass",3,"ngClass","click"],["data-kt-countup-tabs","true","data-bs-toggle","tab","id","kt_security_summary_tab_today",1,"nav-link","text-active-primary","StatisticsTabTextClass",3,"ngClass","click"],["data-kt-countup-tabs","true","data-bs-toggle","tab","id","kt_security_summary_tab_pane_week",1,"nav-link","text-active-primary","StatisticsTabTextClass",3,"ngClass","click"],["data-kt-countup-tabs","true","data-bs-toggle","tab","id","kt_security_summary_pane_month",1,"nav-link","text-active-primary","StatisticsTabTextClass",3,"ngClass","click"],["data-kt-countup-tabs","true","data-bs-toggle","tab","id","kt_security_summary_tab_pane_period","data-bs-toggle","modal","data-bs-target","#kt_modal_2",1,"nav-link","text-active-primary","StatisticsTabTextClass",3,"click"],[1,"card-body","pt-7","pb-0","px-0"],[1,""],[1,"row",2,"margin","0 auto"],["class","col-md-3",4,"ngFor","ngForOf"],[1,"card","shadow-sm"],[1,"card-header"],["type","button","routerLink","/Statistics/DoctorStatistics",1,"btn","btn-sm","btn-light"],[1,"card-body"],[3,"cols","data","plusButtonEvent","cloudButtonEvent"],[1,"row","my-5"],["type","button","routerLink","/Reports/DeelReport",1,"btn","btn-sm","btn-light"],[1,"col-xxl-6"],[3,"cols","data"],[3,"cols","data","showPlustCloudeButtons","smallPagination","scrollable","searchText","selectionModeValue","scrollHeight"],["tabindex","-1","id","kt_modal_2","data-bs-backdrop","static","data-bs-keyboard","false",1,"modal","fade"],[1,"modal-dialog","modal-sm"],[1,"modal-content","shadow-none"],[1,"modal-header"],[1,"modal-title"],["data-bs-dismiss","modal","aria-label","Close",1,"btn","btn-icon","btn-sm","btn-active-light-primary","ms-2"],[1,"bi","bi-x-lg","text-dark"],[1,"modal-body"],[1,"modal-footer"],["type","button",1,"btn","btn-primary"],["type","button","data-bs-dismiss","modal",1,"btn","btn-light"],["content",""],[1,"col-md-3"],[2,"border","1px solid #fbe6e6","padding","9px","border-radius","10px","background-image","linear-gradient(rgb(255 211 182), rgba(255, 255, 0, 0))"],[2,"display","flex","justify-content","center"],[4,"ngFor","ngForOf"],["style","cursor: pointer;",3,"class","click",4,"ngIf"],[3,"class",4,"ngIf"],[2,"cursor","pointer",3,"click"],[2,"padding","0 4px"],[2,"padding","5px","font-weight","700"],["id","modal-basic-title","translate","Statistics.PleaseChooseDataRange",1,"modal-title"],["type","button","aria-label","Close",1,"btn-close",3,"click"],[3,"WithBranch","onSearchSubmit"],["type","button","translate","Shared.Close",1,"btn","btn-outline-dark",3,"click"]],template:function(e,a){if(1&e){const i=t.EpF();t._UZ(0,"p-toast",0),t.TgZ(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"h3",7),t._uU(8,"\u0627\u062d\u0635\u0627\u0626\u064a\u0627\u062a"),t.qZA()(),t.TgZ(9,"div",8)(10,"ul",9)(11,"li",10)(12,"a",11),t.NdJ("click",function(){return a.GetData("Yesterday")}),t._uU(13,"\u0623\u0645\u0633"),t.qZA()(),t.TgZ(14,"li",10)(15,"a",12),t.NdJ("click",function(){return a.GetData("Today")}),t._uU(16,"\u0627\u0644\u064a\u0648\u0645"),t.qZA()(),t.TgZ(17,"li",10)(18,"a",13),t.NdJ("click",function(){return a.GetData("Week")}),t._uU(19,"\u0627\u0633\u0628\u0648\u0639"),t.qZA()(),t.TgZ(20,"li",10)(21,"a",14),t.NdJ("click",function(){return a.GetData("Month")}),t._uU(22,"\u0634\u0647\u0631"),t.qZA()(),t.TgZ(23,"li",10)(24,"a",15),t.NdJ("click",function(){t.CHM(i);const u=t.MAs(87);return t.KtG(a.GetData("Period",u))}),t._uU(25,"\u0641\u062a\u0631\u0629"),t.qZA()()()()(),t.TgZ(26,"div",16)(27,"div",17)(28,"div",17)(29,"div",18),t.YNc(30,L,5,2,"div",19),t.qZA()()()()()()()(),t.TgZ(31,"div",1)(32,"div",2)(33,"div",3)(34,"div",20)(35,"div",21)(36,"h3",6),t._uU(37," \u0627\u0644\u0623\u0637\u0628\u0627\u0621 "),t.qZA(),t.TgZ(38,"div",8)(39,"button",22),t._uU(40," \u0627\u062d\u0635\u0627\u0626\u064a\u0627\u062a \u0627\u0644\u0623\u0637\u0628\u0627\u0621 "),t.qZA()()(),t.TgZ(41,"div",23)(42,"app-shared-datatable",24),t.NdJ("plusButtonEvent",function(u){return a.addItem(u)})("cloudButtonEvent",function(u){return a.cloudItem(u)}),t.qZA()()()()()(),t.TgZ(43,"div",1)(44,"div",25)(45,"div",3)(46,"div",20)(47,"div",21)(48,"h3",6),t._uU(49,"\u0627\u0644\u062a\u0639\u0627\u0642\u062f\u0627\u062a"),t.qZA(),t.TgZ(50,"div",8)(51,"button",26),t._uU(52," \u062a\u0642\u0631\u064a\u0631 \u0627\u0644\u062a\u0639\u0627\u0642\u062f\u0627\u062a "),t.qZA()()(),t.TgZ(53,"div",23)(54,"app-shared-datatable",24),t.NdJ("plusButtonEvent",function(u){return a.addItem(u)})("cloudButtonEvent",function(u){return a.cloudItem(u)}),t.qZA()()()()()(),t.TgZ(55,"div",1)(56,"div",25)(57,"div",27)(58,"div",20)(59,"div",21)(60,"h3",6),t._uU(61," \u0627\u0639\u0644\u064a \u0632\u064a\u0627\u0631\u0627\u062a \u0627\u0644\u0639\u0645\u0644\u0627\u0621 \u0641\u064a \u0627\u0644\u0641\u062a\u0631\u0629 "),t.qZA()(),t.TgZ(62,"div",23),t._UZ(63,"app-shared-datatable",28),t.qZA()()(),t.TgZ(64,"div",27)(65,"div",20)(66,"div",21)(67,"h3",6),t._uU(68,"\u0623\u0639\u0644\u064a \u0627\u0644\u062a\u062d\u0627\u0644\u064a\u0644 \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629 \u0641\u064a \u0627\u0644\u0641\u062a\u0631\u0629 "),t.qZA()(),t.TgZ(69,"div",23),t._UZ(70,"app-shared-datatable",29),t.qZA()()()()(),t.TgZ(71,"div",30)(72,"div",31)(73,"div",32)(74,"div",33)(75,"h5",34),t._uU(76,"\u0628\u062d\u062b \u0639\u0646 \u0641\u062a\u0631\u0629 "),t.qZA(),t.TgZ(77,"div",35),t._UZ(78,"span",36),t.qZA()(),t.TgZ(79,"div",37),t._UZ(80,"div",2),t.qZA(),t.TgZ(81,"div",38)(82,"button",39),t._uU(83,"\u062d\u0641\u0638 \u0627\u0644\u062a\u063a\u064a\u064a\u0631\u0627\u062a"),t.qZA(),t.TgZ(84,"button",40),t._uU(85,"\u0625\u063a\u0644\u0627\u0642"),t.qZA()()()()(),t.YNc(86,$,7,1,"ng-template",null,41,t.W1O)}2&e&&(t.Q6J("showTransformOptions","translateX(100%)"),t.xp6(12),t.Q6J("ngClass","Yesterday"==a.currentTab?"active":""),t.xp6(3),t.Q6J("ngClass","Today"==a.currentTab?"active":""),t.xp6(3),t.Q6J("ngClass","Week"==a.currentTab?"active":""),t.xp6(3),t.Q6J("ngClass","Month"==a.currentTab?"active":""),t.xp6(9),t.Q6J("ngForOf",a.data.dashboardNumbers),t.xp6(12),t.Q6J("cols",a.doctorsCols)("data",a.data.doctors),t.xp6(12),t.Q6J("cols",a.deelsCols)("data",a.data.deels),t.xp6(9),t.Q6J("cols",a.customersCols)("data",a.data.customers),t.xp6(7),t.Q6J("cols",a.testsCols)("data",a.data.tests)("showPlustCloudeButtons",a.showCustomersGridButtons)("smallPagination",a.showCustomersGridButtons)("scrollable",!0)("searchText",a.searchTextForTests)("selectionModeValue",a.selectionModemultiple)("scrollHeight",a.scrollHeightForCustomers))},dependencies:[p.mk,p.sg,p.O5,A.rH,T.G,x.d,b.Pi,f.FN],styles:[".StatisticsNumbersDetailsClass[_ngcontent-%COMP%]{display:flex;justify-content:space-between;line-height:2px;border-radius:8px;padding:10px;margin:3px;transition:transform .2s}.StatisticsNumbersDetailsClass[_ngcontent-%COMP%]:hover{transform:scale(1.2);font-weight:900;border:1px solid #120349}.StatisticsTabTextClass[_ngcontent-%COMP%]{transition:transform .2s;cursor:pointer}.StatisticsTabTextClass[_ngcontent-%COMP%]:hover{transform:scale(1.1);font-weight:900}"]}),s})(),data:{animation:"MainStatistics"}},{path:"CompareStatistics",canActivate:[_.o],component:k,data:{animation:"CompareStatistics"}},{path:"OneBranchCompareStatistics",canActivate:[_.o],component:U,data:{animation:"OneBranchCompareStatistics"}},{path:"BranchCompareStatistics",canActivate:[_.o],component:w,data:{animation:"BranchCompareStatistics"}},{path:"DoctorStatistics",canActivate:[_.o],component:F,data:{animation:"DoctorStatistics"}}];let H=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[A.Bz.forChild(K),A.Bz]}),s})();var X=r(5088),W=r(7772),V=r(2665),tt=r(99),et=r(3631);let at=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[p.ez,H,X.m,p.ez,h.u5,tt.U$,b.aw,f.EV,W.$,V.O,g.DL,C.S,v._8,B.q4,O.kW,et.WN]}),s})()}}]);