"use strict";(self.webpackChunkEKOWebUI=self.webpackChunkEKOWebUI||[]).push([[140],{7140:(Kt,k,i)=>{i.r(k),i.d(k,{AuthModule:()=>Dt});var l=i(6895),r=i(4006),x=i(529),m=i(7799),t=i(4650);const M=function(e){return{"background-image":e}};let N=(()=>{class e{constructor(o){this.cdRef=o,this.today=new Date,this.backgroundImage="assets/media/bgs/1.png"}ngOnInit(){document.body.classList.add("bg-white"),setInterval(()=>{let o=Math.floor(11*Math.random())+1;this.backgroundImage="assets/media/bgs/"+o.toString()+".png",this.cdRef.detectChanges()},9e3)}ngOnDestroy(){document.body.classList.remove("bg-white")}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(t.sBO))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-auth"]],decls:12,vars:3,consts:[["id","loginBackGround",1,"d-flex","flex-column","flex-column-fluid","bgi-position-y-bottom","position-x-center","bgi-no-repeat","bgi-size-contain","bgi-attachment-fixed",2,"background-size","cover","height","100% !important","position","absolute","width","100%",3,"ngStyle"],[1,"d-flex","flex-center","flex-column","flex-column-fluid","p-10","pb-lg-20"],[1,"w-lg-500px","bg-white","rounded","shadow-sm","p-10","p-lg-15","mx-auto","MobCard"],[1,"d-flex","flex-center","flex-column-auto","p-10"],[1,"d-flex","align-items-center","fw-bold","fs-6"],[1,"text-muted","text-hover-primary","px-2","cursor-pointer"]],template:function(o,n){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t._UZ(3,"router-outlet"),t.qZA()(),t.TgZ(4,"div",3)(5,"div",4)(6,"a",5),t._uU(7,"\u0639\u0646 \u0627\u0644\u0645\u0639\u0645\u0644"),t.qZA(),t.TgZ(8,"a",5),t._uU(9,"\u062a\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627 "),t.qZA(),t.TgZ(10,"a",5),t._uU(11,"\u0627\u0644\u0645\u0648\u0642\u0639 \u0627\u0644\u0627\u0644\u0643\u062a\u0631\u0648\u0646\u064a"),t.qZA()()()()),2&o&&t.Q6J("ngStyle",t.VKq(1,M,"url("+n.backgroundImage+")"))},dependencies:[l.PC,m.lC],styles:["[_nghost-%COMP%]{height:100%}"]}),e})();var T=i(590),Q=i(5226),B=i.n(Q),g=i(2340),p=i(3147),F=i(5439),Z=i(2327),h=i(8968),y=i(1135),f=i(9646),v=i(4004),E=i(3900),U=i(262),w=i(8746);class O{setAuth(u){this.authToken=u.authToken,this.refreshToken=u.refreshToken,this.expiresIn=u.expiresIn}}const L=`${g.N.apiUrl}/users`;let D=(()=>{class e{constructor(o){this.http=o}login(o,n){const s=new Error("Not Found");return o&&n?this.getAllUsers().pipe((0,v.U)(a=>{if(a.length<=0)return s;const b=a.find(C=>C.email.toLowerCase()===o.toLowerCase()&&C.password===n);if(!b)return s;const d=new O;return d.authToken=b.authToken,d.refreshToken=b.refreshToken,d.expiresIn=new Date(Date.now()+864e7),d})):(0,f.of)(s)}createUser(o){return o.roles=[2],o.authToken="auth-token-"+Math.random(),o.refreshToken="auth-token-"+Math.random(),o.expiresIn=new Date(Date.now()+864e7),o.pic="./assets/media/avatars/150-2.jpg",this.http.post(L,o)}forgotPassword(o){return this.getAllUsers().pipe((0,v.U)(n=>void 0!==n.find(a=>a.email.toLowerCase()===o.toLowerCase())))}getUserByToken(o){return(0,f.of)(void 0)}getAllUsers(){return this.http.get(L)}}return e.\u0275fac=function(o){return new(o||e)(t.LFG(x.eN))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var I=i(5153);let _=(()=>{class e{constructor(o,n,s){this.authHttpService=o,this.service=n,this.router=s,this.unsubscribe=[],this.authLocalStorageToken=`${g.N.chatHubUrl}-${g.N.apiUrl}`,this.isLoadingSubject=new y.X(!1),this.currentUserSubject=new y.X(void 0),this.currentUser$=this.currentUserSubject.asObservable(),this.isLoading$=this.isLoadingSubject.asObservable();const a=this.getUserByToken().subscribe();this.unsubscribe.push(a)}get currentUserValue(){return this.currentUserSubject.value}set currentUserValue(o){this.currentUserSubject.next(o)}login(o){return this.service.authenticate(o).pipe((0,v.U)(n=>{if("Error_Domain"!=n.token)return this.setAuthFromLocalStorage(n);document.getElementById("kt_sign_in_submit")?.removeAttribute("data-kt-indicator")}),(0,E.w)(()=>this.getUserByToken()),(0,U.K)(n=>(console.error("err",n),(0,f.of)(void 0))),(0,w.x)(()=>this.isLoadingSubject.next(!1)))}logout(){localStorage.removeItem(this.authLocalStorageToken),this.router.navigate(["/auth/login"],{queryParams:{}})}getUserByToken(){const o=this.getAuthFromLocalStorage();return o&&o.authToken?(this.isLoadingSubject.next(!0),this.authHttpService.getUserByToken(o.authToken).pipe((0,v.U)(n=>(n?this.currentUserSubject.next(n):this.logout(),n)),(0,w.x)(()=>this.isLoadingSubject.next(!1)))):(0,f.of)(void 0)}registration(o){return this.isLoadingSubject.next(!0),this.authHttpService.createUser(o).pipe((0,v.U)(()=>{this.isLoadingSubject.next(!1)}),(0,U.K)(n=>(console.error("err",n),(0,f.of)(void 0))),(0,w.x)(()=>this.isLoadingSubject.next(!1)))}forgotPassword(o){return this.isLoadingSubject.next(!0),this.authHttpService.forgotPassword(o).pipe((0,w.x)(()=>this.isLoadingSubject.next(!1)))}setAuthFromLocalStorage(o){return!(!o||!o.token||(localStorage.setItem(this.authLocalStorageToken,JSON.stringify(o)),0))}getAuthFromLocalStorage(){try{const o=localStorage.getItem(this.authLocalStorageToken);return o?JSON.parse(o):void 0}catch(o){return void console.error(o)}}ngOnDestroy(){this.unsubscribe.forEach(o=>o.unsubscribe())}}return e.\u0275fac=function(o){return new(o||e)(t.LFG(D),t.LFG(I.KU),t.LFG(m.F0))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var Y=i(5674),V=i(1582),j=i(7234),K=i(9320),P=i(2210);function R(e,u){1&e&&(t.ynx(0),t.TgZ(1,"div",22)(2,"div",23),t._uU(3," \u062e\u0637\u0623 \u0641\u064a \u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u062f\u062e\u0648\u0644 "),t.qZA()(),t.BQk())}function H(e,u){if(1&e&&(t.ynx(0),t.TgZ(1,"div",24)(2,"span",25),t._uU(3),t.qZA()(),t.BQk()),2&e){const o=t.oxw().message;t.xp6(3),t.hij(" ",o," ")}}function G(e,u){if(1&e&&t.YNc(0,H,4,1,"ng-container",4),2&e){const o=u.control;t.Q6J("ngIf",o.hasError(u.validation)&&(o.dirty||o.touched))}}const q=function(e,u){return{"is-invalid":e,"is-valid":u}},W=function(e){return{validation:"required",message:"\u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645 \u0645\u0637\u0644\u0648\u0628",control:e}},$=function(e){return{validation:"username",message:"\u062e\u0637\u0623 \u0641\u064a \u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645",control:e}},z=function(e){return{validation:"minLength",message:"\u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645 \u0644\u0627 \u064a\u0645\u0643\u0646 \u0627\u0646 \u064a\u0643\u0648\u0646 \u0627\u0642\u0644 \u0645\u0646 3 \u062d\u0631\u0648\u0641 ",control:e}},X=function(e){return{validation:"maxLength",message:"\u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645 \u0644\u0627 \u064a\u0645\u0643\u0646 \u0627\u0646 \u064a\u0643\u0648\u0646 \u0627\u0643\u062b\u0631 \u0645\u0646 300 \u062d\u0631\u0641 ",control:e}},tt=function(e){return{validation:"required",message:"\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0645\u0637\u0644\u0648\u0628\u0629 ",control:e}},et=function(e){return{validation:"minlength",message:"\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u064a\u062c\u0628 \u0627\u0646\u062a \u062a\u0643\u0648\u0646 \u0639\u0644\u064a \u0627\u0644\u0627\u0642\u0644 3 \u062d\u0631\u0648\u0641 ",control:e}},ot=function(e){return{validation:"maxLength",message:"\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0644\u0627 \u064a\u0645\u0643\u0646 \u0627\u0646 \u062a\u0643\u0648\u0646 \u0627\u0643\u062b\u0631 \u0645\u0646 200 \u062d\u0631\u0641",control:e}},J=function(){return{standalone:!0}};let nt=(()=>{class e{constructor(o,n,s,a,b,d,C,Yt,Vt,jt){this.fb=o,this.authService=n,this.service=s,this.tokenService=a,this.localStorageService=b,this.route=d,this.router=C,this.signalRService=Yt,this.cdRef=Vt,this.cts=jt,this.defaultAuth={email:"Superadmin",password:"P@ssw0rd"},this.unsubscribe=[],this.isLoading$=this.authService.isLoading$,this.authService.currentUserValue&&this.router.navigate(["/Monitors/Home"]),this.branchs=h.hl,this.drawers=h.oZ,this.SelectedBranch=this.branchs.find(S=>S.id==Number(localStorage.getItem("deviceBranchId")))??h.hl[0],this.SelectedDrawer=this.drawers.find(S=>S.id==Number(localStorage.getItem("deviceDrawerId")))??h.oZ[0],this.onChangeBranch()}ngOnInit(){this.initForm(),this.returnUrl=this.route.snapshot.queryParams["returnUrl".toString()]||"/Monitors/Home"}get f(){return this.loginForm.controls}initForm(){this.loginForm=this.fb.group({username:[g.N.production?"":this.defaultAuth.email,r.kI.compose([r.kI.required,r.kI.minLength(3),r.kI.maxLength(320)])],password:[g.N.production?"":this.defaultAuth.password,r.kI.compose([r.kI.required,r.kI.minLength(2),r.kI.maxLength(50)])],labid:new r.NI(g.N.labSecretId),lang:new r.NI("ar"),isDesktop:new r.NI(!1),clientDateTime:Z.s.ExactlyDateTime(Z.s.Now())})}submit(){document.getElementById("kt_sign_in_submit")?.setAttribute("data-kt-indicator","on"),this.router.navigate([this.returnUrl]),this.hasError=!1,this.service.authenticate(this.loginForm.value).pipe((0,T.P)()).subscribe({next:n=>{if(n)if(n.isSuccess){this.tokenService.setToken(n.token),this.localStorageService.set("jwtToken",n.token),this.localStorageService.set("userId",this.tokenService.getUserId()),this.localStorageService.set("userName",this.tokenService.getUserName()),this.localStorageService.set("userNameAR",this.tokenService.getUserArabicName()),this.localStorageService.set("userRoles",this.tokenService.getUserRoles()),this.localStorageService.set("loginTime",F(F(new Date).toDate()).format("YYYY-MM-DD HH:mm:ss")),this.localStorageService.set("secretLabId",this.tokenService.getSecretLabId()),this.localStorageService.set("DesktopConnectionId",this.tokenService.getDescktopConnection()),this.localStorageService.set("firstTimeAfterlogin","yes"),this.cts.sendToster("success","\u062a\u0633\u062c\u064a\u0644 \u062f\u062e\u0648\u0644","\u062a\u0645 \u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062f\u062e\u0648\u0644 \u0628\u0646\u062c\u0627\u062d","");let s=new p.Jm;s.SetUserAppSettings(null!=n.loginAddons?.userAppSettings?p.BM.fromJS(JSON.parse(n.loginAddons?.userAppSettings)):new p.BM);let a=s.GetUserAppSettings();a.CurrentBranchId=this.SelectedBranch.id,a.CurrentDrawerId=this.SelectedDrawer.id,s.SetUserAppSettings(a),this.localStorageService.set("deviceBranchId",this.SelectedBranch.id),this.localStorageService.set("deviceDrawerId",this.SelectedDrawer.id),s.SetWhatsAppTemplates(null!=n.loginAddons?.whatsAppTemplates?p.bO.fromJS(JSON.parse(n.loginAddons?.whatsAppTemplates)):new p.bO),null!=n.loginAddons?.totalDailyVisitCounts?localStorage.setItem("dailyvisitCount",String(n.loginAddons?.totalDailyVisitCounts)):localStorage.setItem("dailyvisitCount","0"),document.getElementById("kt_sign_in_submit")?.removeAttribute("data-kt-indicator"),this.signalRService.checkConnection(),this.router.navigate(["/Monitors/Home"]),this.cdRef.detectChanges()}else"Please Login from Desktop First"==n.token?(this.cts.sendToster("success","\u0645\u062d\u0627\u0648\u0644\u0629 \u062a\u0633\u062c\u064a\u0644 \u062f\u062e\u0648\u0644","\u064a\u062c\u0628 \u0641\u062a\u062d \u0628\u0631\u0646\u0627\u0645\u062c \u0627\u0644\u0645\u0639\u0645\u0644",""),B().fire({title:"\u0644\u0627 \u064a\u0645\u0643\u0646 \u0627\u0644\u062f\u062e\u0648\u0644 \u0644\u0644\u0646\u0638\u0627\u0645 \u0628\u062f\u0648\u0646 \u0627\u0644\u0625\u062a\u0635\u0627\u0644 \u0628\u062c\u0647\u0627\u0632 \u0643\u0645\u0628\u064a\u0648\u062a\u0631",text:"\u064a\u062c\u0628 \u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062f\u062e\u0648\u0644 \u0645\u0646 \u0628\u0631\u0646\u0627\u0645\u062c \u0627\u0644\u0645\u0639\u0645\u0644 \u0623\u0648\u0644\u0627  .. \u0627\u0630\u0627 \u0644\u0645 \u064a\u0643\u0646 \u0644\u062f\u064a\u0643 \u0628\u0631\u0646\u0627\u0645\u062c \u0642\u0645 \u0628\u0627\u0644\u0636\u063a\u0638 \u0639\u0644\u064a \u0627\u0644\u062a\u062d\u0645\u064a\u0644 ",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"\u0627\u0644\u062a\u0640\u062d\u0640\u0645\u0640\u064a\u0640\u0644 ",cancelButtonText:"\u0625\u063a\u0640\u0640\u0644\u0627\u0642",showClass:{popup:"animate__animated animate__fadeInDown"},hideClass:{popup:"animate__animated animate__fadeOutUp"}}).then(s=>{s.isConfirmed&&window.open(g.N.updatedDesktopVersion,"_blank")})):(this.hasError=!0,this.cdRef.detectChanges()),document.getElementById("kt_sign_in_submit")?.removeAttribute("data-kt-indicator"),this.cdRef.detectChanges();else this.hasError=!0,this.cts.sendToster("error","\u062a\u0633\u062c\u064a\u0644 \u062f\u062e\u0648\u0644","\u062d\u062f\u062b \u062e\u0637\u0623 \u0623\u062b\u0646\u0627\u0621 \u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062f\u062e\u0648\u0644",""),document.getElementById("kt_sign_in_submit")?.setAttribute("data-kt-indicator","off"),this.cdRef.detectChanges()},error:n=>{this.cts.sendToster("error","\u062a\u0633\u062c\u064a\u0644 \u062f\u062e\u0648\u0644","\u062d\u062f\u062b \u062e\u0637\u0623 \u0623\u062b\u0646\u0627\u0621 \u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062f\u062e\u0648\u0644",""),document.getElementById("kt_sign_in_submit")?.setAttribute("data-kt-indicator","off")}}),this.cdRef.detectChanges()}ngOnDestroy(){this.unsubscribe.forEach(o=>o.unsubscribe())}onChangeBranch(){this.drawers=h.oZ.filter(o=>o.branchId==this.SelectedBranch.id),this.drawers.length>=1&&(this.SelectedDrawer=this.drawers.find(o=>o.id==Number(localStorage.getItem("deviceDrawerId")))??this.drawers[0])}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(r.qu),t.Y36(_),t.Y36(I.KU),t.Y36(Y.W),t.Y36(V.n),t.Y36(m.gz),t.Y36(m.F0),t.Y36(j.Y),t.Y36(t.sBO),t.Y36(K.m))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-login"]],decls:42,vars:49,consts:[["novalidate","novalidate","id","kt_login_signin_form",1,"form","w-100",3,"formGroup","ngSubmit"],[1,"text-center","mb-10"],[1,"text-dark","mb-3"],[1,"text-gray-400","fw-bold","fs-4"],[4,"ngIf"],[1,"fv-row","mb-10"],[1,"form-label","fs-6","fw-bolder","text-dark"],["type","text","name","username","formControlName","username","autocomplete","off",1,"form-control","form-control-lg","form-control-solid",3,"ngClass"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"d-flex","justify-content-between","mt-n5"],[1,"d-flex","flex-stack","mb-2"],[1,"form-label","fw-bolder","text-dark","fs-6","mb-0"],["routerLink","/auth/forgot-password","id","kt_login_forgot",1,"link-primary","fs-6","fw-bolder"],["type","password","name","password","autocomplete","off","formControlName","password",1,"form-control","form-control-lg","form-control-solid",3,"ngClass"],["styleClass","taj-font fc-primng","placeholder","\u0627\u062e\u062a\u0631 \u0627\u0644\u0641\u0631\u0639","optionLabel","name",3,"options","ngModelOptions","ngModel","onChange","ngModelChange"],["styleClass","taj-font fc-primng","placeholder","\u0627\u062e\u062a\u0631 \u0627\u0644\u062f\u0631\u062c","optionLabel","name",3,"options","ngModelOptions","ngModel","ngModelChange"],[1,"text-center"],["type","submit","id","kt_sign_in_submit",1,"btn","btn-lg","btn-primary","w-100","mb-5",3,"disabled"],[1,"indicator-label"],[1,"indicator-progress"],[1,"spinner-border","spinner-border-sm","align-middle","ms-2"],["formError",""],[1,"mb-lg-15","alert","alert-danger"],[1,"alert-text","font-weight-bold"],[1,"fv-plugins-message-container"],["role","alert"]],template:function(o,n){if(1&o&&(t.TgZ(0,"form",0),t.NdJ("ngSubmit",function(){return n.submit()}),t.TgZ(1,"div",1)(2,"h1",2),t._uU(3," \u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062f\u062e\u0648\u0644 \u0641\u064a \u0627\u0644\u0646\u0638\u0627\u0645 "),t.qZA(),t._UZ(4,"div",3),t.qZA(),t.YNc(5,R,4,0,"ng-container",4),t.TgZ(6,"div",5)(7,"label",6),t._uU(8,"\u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645"),t.qZA(),t._UZ(9,"input",7),t.GkF(10,8)(11,8)(12,8)(13,8),t.qZA(),t.TgZ(14,"div",5)(15,"div",9)(16,"div",10)(17,"label",11),t._uU(18," \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 "),t.qZA(),t.TgZ(19,"a",12),t._uU(20," \u0646\u0633\u064a\u062a \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 "),t.qZA()()(),t._UZ(21,"input",13),t.GkF(22,8)(23,8)(24,8),t.qZA(),t.TgZ(25,"div",5)(26,"label",6),t._uU(27,"\u0627\u062e\u062a\u0631 \u0627\u0644\u0641\u0631\u0639"),t.qZA(),t.TgZ(28,"p-dropdown",14),t.NdJ("onChange",function(){return n.onChangeBranch()})("ngModelChange",function(a){return n.SelectedBranch=a}),t.qZA()(),t.TgZ(29,"div",5)(30,"label",6),t._uU(31,"\u0627\u062e\u062a\u0631 \u0627\u0644\u062f\u0631\u062c"),t.qZA(),t.TgZ(32,"p-dropdown",15),t.NdJ("ngModelChange",function(a){return n.SelectedDrawer=a}),t.qZA()(),t.TgZ(33,"div",16)(34,"button",17)(35,"span",18),t._uU(36," \u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062f\u062e\u0648\u0644 "),t.qZA(),t.TgZ(37,"span",19),t._uU(38," \u0627\u0646\u062a\u0638\u0631 \u0645\u0646 \u0641\u0636\u0644\u0643 .... "),t._UZ(39,"span",20),t.qZA()()()(),t.YNc(40,G,1,1,"ng-template",null,21,t.W1O)),2&o){const s=t.MAs(41);t.Q6J("formGroup",n.loginForm),t.xp6(5),t.Q6J("ngIf",n.hasError),t.xp6(4),t.Q6J("ngClass",t.WLB(27,q,n.loginForm.controls.username.invalid,n.loginForm.controls.username.valid)),t.xp6(1),t.Q6J("ngTemplateOutlet",s)("ngTemplateOutletContext",t.VKq(30,W,n.loginForm.controls.username)),t.xp6(1),t.Q6J("ngTemplateOutlet",s)("ngTemplateOutletContext",t.VKq(32,$,n.loginForm.controls.username)),t.xp6(1),t.Q6J("ngTemplateOutlet",s)("ngTemplateOutletContext",t.VKq(34,z,n.loginForm.controls.username)),t.xp6(1),t.Q6J("ngTemplateOutlet",s)("ngTemplateOutletContext",t.VKq(36,X,n.loginForm.controls.username)),t.xp6(6),t.Udp("margin-left","5px"),t.xp6(2),t.Q6J("ngClass",t.WLB(38,q,n.loginForm.controls.password.invalid,n.loginForm.controls.password.valid)),t.xp6(1),t.Q6J("ngTemplateOutlet",s)("ngTemplateOutletContext",t.VKq(41,tt,n.loginForm.controls.password)),t.xp6(1),t.Q6J("ngTemplateOutlet",s)("ngTemplateOutletContext",t.VKq(43,et,n.loginForm.controls.password)),t.xp6(1),t.Q6J("ngTemplateOutlet",s)("ngTemplateOutletContext",t.VKq(45,ot,n.loginForm.controls.password)),t.xp6(4),t.Q6J("options",n.branchs)("ngModelOptions",t.DdM(47,J))("ngModel",n.SelectedBranch),t.xp6(4),t.Q6J("options",n.drawers)("ngModelOptions",t.DdM(48,J))("ngModel",n.SelectedDrawer),t.xp6(2),t.Q6J("disabled",n.loginForm.invalid)}},dependencies:[l.mk,l.O5,l.tP,P.Lt,m.rH,r._Y,r.Fj,r.JJ,r.JL,r.On,r.sg,r.u],styles:["[_nghost-%COMP%]{width:100%}@media (min-width: 992px){[_nghost-%COMP%]   .login-form[_ngcontent-%COMP%]{width:100%;max-width:450px}[_nghost-%COMP%]   .login-form[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]{width:100%}}"]}),e})();class rt{static MatchPassword(u){const o=u.get("password")?.value,n=u.get("cPassword")?.value;o!==n&&u.get("cPassword")?.setErrors({ConfirmPassword:!0})}}class ut extends O{constructor(){super(...arguments),this.roles=[]}setUser(u){const o=u;this.id=o.id,this.username=o.username||"",this.password=o.password||"",this.fullname=o.fullname||"",this.email=o.email||"",this.pic=o.pic||"./assets/media/users/default.jpg",this.roles=o.roles||[],this.occupation=o.occupation||"",this.companyName=o.companyName||"",this.phone=o.phone||"",this.address=o.address,this.socialNetworks=o.socialNetworks}}function st(e,u){1&e&&(t.ynx(0),t.TgZ(1,"div",30)(2,"div",31),t._uU(3," The registration details are incorrect "),t.qZA()(),t.BQk())}function it(e,u){1&e&&(t.ynx(0),t.TgZ(1,"div",32)(2,"div",33),t._uU(3," 'Passsword' and 'Confirm Password' didn't match. "),t.qZA()(),t.BQk())}function at(e,u){1&e&&(t.ynx(0),t.TgZ(1,"span",34),t._uU(2,"Submit"),t.qZA(),t.BQk())}function lt(e,u){1&e&&(t.ynx(0),t.TgZ(1,"span",35),t._uU(2," Please wait... "),t._UZ(3,"span",36),t.qZA(),t.BQk()),2&e&&(t.xp6(1),t.Udp("display","block"))}function mt(e,u){if(1&e&&(t.ynx(0),t.TgZ(1,"div",32)(2,"div",33)(3,"span",37),t._uU(4),t.qZA()()(),t.BQk()),2&e){const o=t.oxw().message;t.xp6(4),t.hij(" ",o," ")}}function ct(e,u){if(1&e&&t.YNc(0,mt,5,1,"ng-container",10),2&e){const o=u.control;t.Q6J("ngIf",o.hasError(u.validation)&&(o.dirty||o.touched))}}const A=function(e,u){return{"is-invalid":e,"is-valid":u}},gt=function(e){return{validation:"required",message:"Fullname is required",control:e}},dt=function(e){return{validation:"minlength",message:"Fullname should have at least 3 symbols",control:e}},pt=function(e){return{validation:"maxLength",message:"Fullname should have maximum 100 symbols",control:e}},ht=function(e){return{validation:"required",message:"Email is required",control:e}},ft=function(e){return{validation:"email",message:"Email is invalid",control:e}},vt=function(e){return{validation:"minlength",message:"Email should have at least 3 symbols",control:e}},bt=function(e){return{validation:"maxLength",message:"Email should have maximum 360 symbols",control:e}},wt=function(e){return{validation:"required",message:"Password is required",control:e}},_t=function(e){return{validation:"minlength",message:"Password should have at least 3 symbols",control:e}},At=function(e){return{validation:"maxLength",message:"Password should have maximum 100 symbols",control:e}},Ct=function(e){return{validation:"required",message:"Confirm Password is required",control:e}},Tt=function(e){return{validation:"minlength",message:"Confirm Password should have at least 3 symbols",control:e}},St=function(e){return{validation:"maxLength",message:"Confirm Password should have maximum 100 symbols",control:e}};let kt=(()=>{class e{constructor(o,n,s){this.fb=o,this.authService=n,this.router=s,this.unsubscribe=[],this.isLoading$=this.authService.isLoading$,this.authService.currentUserValue&&this.router.navigate(["/"])}ngOnInit(){this.initForm()}get f(){return this.registrationForm.controls}initForm(){this.registrationForm=this.fb.group({fullname:["",r.kI.compose([r.kI.required,r.kI.minLength(3),r.kI.maxLength(100)])],email:["qwe@qwe.qwe",r.kI.compose([r.kI.required,r.kI.email,r.kI.minLength(3),r.kI.maxLength(320)])],password:["",r.kI.compose([r.kI.required,r.kI.minLength(3),r.kI.maxLength(100)])],cPassword:["",r.kI.compose([r.kI.required,r.kI.minLength(3),r.kI.maxLength(100)])],agree:[!1,r.kI.compose([r.kI.required])]},{validator:rt.MatchPassword})}submit(){this.hasError=!1;const o={};Object.keys(this.f).forEach(a=>{o[a]=this.f[a].value});const n=new ut;n.setUser(o);const s=this.authService.registration(n).pipe((0,T.P)()).subscribe(a=>{a?this.router.navigate(["/"]):this.hasError=!0});this.unsubscribe.push(s)}ngOnDestroy(){this.unsubscribe.forEach(o=>o.unsubscribe())}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(r.qu),t.Y36(_),t.Y36(m.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-registration"]],decls:65,vars:80,consts:[["novalidate","novalidate","id","kt_login_signup_form",1,"form","w-100","fv-plugins-bootstrap5","fv-plugins-framework",3,"formGroup","ngSubmit"],[1,"mb-10","text-center"],[1,"text-dark","mb-3"],[1,"text-gray-400","fw-bold","fs-4"],["routerLink","/auth/login",1,"link-primary","fw-bolder"],["type","button",1,"btn","btn-light-primary","fw-bolder","w-100","mb-10"],["alt","Logo","src","./assets/media/svg/brand-logos/google-icon.svg",1,"h-20px","me-3"],[1,"d-flex","align-items-center","mb-10"],[1,"border-bottom","border-gray-300","mw-50","w-100"],[1,"fw-bold","text-gray-400","fs-7","mx-2"],[4,"ngIf"],[1,"row","fv-row","mb-7"],[1,"form-label","fw-bolder","text-dark","fs-6"],["type","text","name","fullname","formControlName","fullname","placeholder","Fullname","autocomplete","off",1,"form-control","form-control-lg","form-control-solid",3,"ngClass"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"fv-row","mb-7"],["type","email","placeholder","Email","name","email","formControlName","email","autocomplete","off",1,"form-control","form-control-lg","form-control-solid",3,"ngClass"],[1,"mb-10","fv-row"],["type","password","placeholder","Password","name","password","formControlName","password","autocomplete","off",1,"form-control","form-control-lg","form-control-solid",3,"ngClass"],[1,"fv-row","mb-5"],["type","password","placeholder","Confirm password","name","cPassword","autocomplete","off","formControlName","cPassword",1,"form-control","form-control-lg","form-control-solid",3,"ngClass"],[1,"fv-row","mb-10"],[1,"form-check","form-check-custom","form-check-solid"],["id","kt_login_toc_agree","type","checkbox","formControlName","agree","name","agree",1,"form-check-input"],["for","kt_login_toc_agree",1,"form-check-label","fw-bold","text-gray-700","fs-6"],["href","https://keenthemes.com/metronic/?page=faq","target","_blank",1,"ms-1","link-primary"],[1,"text-center"],["type","submit","id","kt_sign_up_submit",1,"btn","btn-lg","btn-primary","w-100","mb-5",3,"disabled"],["routerLink","/auth/login","type","button","id","kt_login_signup_form_cancel_button",1,"btn","btn-lg","btn-light-primary","w-100","mb-5"],["formError",""],[1,"mb-lg-15","alert","alert-danger"],[1,"alert-text","font-weight-bold"],[1,"fv-plugins-message-container"],[1,"fv-help-block"],[1,"indicator-label"],[1,"indicator-progress"],[1,"spinner-border","spinner-border-sm","align-middle","ms-2"],["role","alert"]],template:function(o,n){if(1&o&&(t.TgZ(0,"form",0),t.NdJ("ngSubmit",function(){return n.submit()}),t.TgZ(1,"div",1)(2,"h1",2),t._uU(3,"Create an Account"),t.qZA(),t.TgZ(4,"div",3),t._uU(5," Already have an account? "),t.TgZ(6,"a",4),t._uU(7,"Sign in?"),t.qZA()()(),t.TgZ(8,"button",5),t._UZ(9,"img",6),t._uU(10,"Sign in with Google "),t.qZA(),t.TgZ(11,"div",7),t._UZ(12,"div",8),t.TgZ(13,"span",9),t._uU(14,"OR"),t.qZA(),t._UZ(15,"div",8),t.qZA(),t.YNc(16,st,4,0,"ng-container",10),t.TgZ(17,"div",11)(18,"label",12),t._uU(19,"Fullname"),t.qZA(),t._UZ(20,"input",13),t.GkF(21,14)(22,14)(23,14),t.qZA(),t.TgZ(24,"div",15)(25,"label",12),t._uU(26,"Email"),t.qZA(),t._UZ(27,"input",16),t.GkF(28,14)(29,14)(30,14)(31,14),t.qZA(),t.TgZ(32,"div",17)(33,"label",12),t._uU(34,"Password"),t.qZA(),t._UZ(35,"input",18),t.GkF(36,14)(37,14)(38,14),t.qZA(),t.TgZ(39,"div",19)(40,"label",12),t._uU(41,"Confirm Password"),t.qZA(),t._UZ(42,"input",20),t.GkF(43,14)(44,14)(45,14),t.YNc(46,it,4,0,"ng-container",10),t.qZA(),t.TgZ(47,"div",21)(48,"div",22),t._UZ(49,"input",23),t.TgZ(50,"label",24),t._uU(51," I Agree the\xa0"),t.TgZ(52,"a",25),t._uU(53,"terms and conditions"),t.qZA(),t._uU(54,". "),t.qZA()()(),t.TgZ(55,"div",26)(56,"button",27),t.YNc(57,at,3,0,"ng-container",10),t.ALo(58,"async"),t.YNc(59,lt,4,2,"ng-container",10),t.ALo(60,"async"),t.qZA(),t.TgZ(61,"a",28),t._uU(62," Cancel "),t.qZA()()(),t.YNc(63,ct,1,1,"ng-template",null,29,t.W1O)),2&o){const s=t.MAs(64);t.Q6J("formGroup",n.registrationForm),t.xp6(6),t.Udp("margin-left","5px"),t.xp6(10),t.Q6J("ngIf",n.hasError),t.xp6(4),t.Q6J("ngClass",t.WLB(42,A,n.registrationForm.controls.fullname.invalid,n.registrationForm.controls.fullname.valid)),t.xp6(1),t.Q6J("ngTemplateOutlet",s)("ngTemplateOutletContext",t.VKq(45,gt,n.registrationForm.controls.fullname)),t.xp6(1),t.Q6J("ngTemplateOutlet",s)("ngTemplateOutletContext",t.VKq(47,dt,n.registrationForm.controls.fullname)),t.xp6(1),t.Q6J("ngTemplateOutlet",s)("ngTemplateOutletContext",t.VKq(49,pt,n.registrationForm.controls.fullname)),t.xp6(4),t.Q6J("ngClass",t.WLB(51,A,n.registrationForm.controls.email.invalid,n.registrationForm.controls.email.valid)),t.xp6(1),t.Q6J("ngTemplateOutlet",s)("ngTemplateOutletContext",t.VKq(54,ht,n.registrationForm.controls.email)),t.xp6(1),t.Q6J("ngTemplateOutlet",s)("ngTemplateOutletContext",t.VKq(56,ft,n.registrationForm.controls.email)),t.xp6(1),t.Q6J("ngTemplateOutlet",s)("ngTemplateOutletContext",t.VKq(58,vt,n.registrationForm.controls.email)),t.xp6(1),t.Q6J("ngTemplateOutlet",s)("ngTemplateOutletContext",t.VKq(60,bt,n.registrationForm.controls.email)),t.xp6(4),t.Q6J("ngClass",t.WLB(62,A,n.registrationForm.controls.password.invalid,n.registrationForm.controls.password.valid)),t.xp6(1),t.Q6J("ngTemplateOutlet",s)("ngTemplateOutletContext",t.VKq(65,wt,n.registrationForm.controls.password)),t.xp6(1),t.Q6J("ngTemplateOutlet",s)("ngTemplateOutletContext",t.VKq(67,_t,n.registrationForm.controls.password)),t.xp6(1),t.Q6J("ngTemplateOutlet",s)("ngTemplateOutletContext",t.VKq(69,At,n.registrationForm.controls.password)),t.xp6(4),t.Q6J("ngClass",t.WLB(71,A,n.registrationForm.controls.cPassword.invalid,n.registrationForm.controls.cPassword.valid)),t.xp6(1),t.Q6J("ngTemplateOutlet",s)("ngTemplateOutletContext",t.VKq(74,Ct,n.registrationForm.controls.cPassword)),t.xp6(1),t.Q6J("ngTemplateOutlet",s)("ngTemplateOutletContext",t.VKq(76,Tt,n.registrationForm.controls.cPassword)),t.xp6(1),t.Q6J("ngTemplateOutlet",s)("ngTemplateOutletContext",t.VKq(78,St,n.registrationForm.controls.cPassword)),t.xp6(1),t.Q6J("ngIf",n.registrationForm.controls.cPassword.errors&&n.registrationForm.controls.cPassword.errors.ConfirmPassword),t.xp6(10),t.Q6J("disabled",n.registrationForm.invalid||!n.registrationForm.controls.agree.value),t.xp6(1),t.Q6J("ngIf",!1===t.lcZ(58,38,n.isLoading$)),t.xp6(2),t.Q6J("ngIf",t.lcZ(60,40,n.isLoading$))}},dependencies:[l.mk,l.O5,l.tP,m.rH,r._Y,r.Fj,r.Wl,r.JJ,r.JL,r.sg,r.u,l.Ov],styles:["[_nghost-%COMP%]{width:100%}@media (min-width: 992px){[_nghost-%COMP%]   .login-form[_ngcontent-%COMP%]{width:100%;max-width:450px}[_nghost-%COMP%]   .login-form[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]{width:100%}}"]}),e})();function xt(e,u){1&e&&(t.ynx(0),t.TgZ(1,"div",14)(2,"div",15),t._uU(3," \u0646\u0623\u0633\u0641 , \u062d\u062f\u062b\u062a \u0646\u0641\u0633 \u0627\u0644\u0645\u0634\u0643\u0644\u0629 , \u0628\u0631\u062c\u0627\u0621 \u0625\u0639\u0627\u062f\u0629 \u0627\u0644\u0645\u062d\u0627\u0648\u0644\u0629 "),t.qZA()(),t.BQk())}function Ft(e,u){1&e&&(t.ynx(0),t.TgZ(1,"div",16)(2,"div",17),t._uU(3," \u0644\u0642\u062f \u062a\u0645 \u0627\u0631\u0633\u0627\u0644 \u0643\u0645\u0644\u0629 \u0645\u0631\u0648\u0631 \u062c\u062f\u064a\u062f\u0629 , \u0628\u0631\u062c\u0627\u0621 \u062a\u0641\u0642\u062f \u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0627\u0644\u0643\u062a\u0631\u0648\u0646\u064a \u0627\u0644\u062e\u0627\u0635 \u0628\u0643 "),t.qZA()(),t.BQk())}function Zt(e,u){1&e&&(t.ynx(0),t.TgZ(1,"span",18),t._uU(2," \u0627\u0646\u062a\u0638\u0631 \u0645\u0646 \u0641\u0636\u0644\u0643 .... "),t._UZ(3,"span",19),t.qZA(),t.BQk())}function yt(e,u){if(1&e&&(t.ynx(0),t.TgZ(1,"div",20)(2,"div",21)(3,"span",22),t._uU(4),t.qZA()()(),t.BQk()),2&e){const o=t.oxw().message;t.xp6(4),t.Oqu(o)}}function Ut(e,u){if(1&e&&t.YNc(0,yt,5,1,"ng-container",4),2&e){const o=u.control;t.Q6J("ngIf",o.hasError(u.validation)&&(o.dirty||o.touched))}}const Ot=function(e,u){return{"is-invalid":e,"is-valid":u}},Lt=function(e){return{validation:"required",message:"\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0627\u0644\u0643\u062a\u0631\u0648\u0646\u064a \u0645\u0637\u0644\u0648\u0628 ",control:e}},It=function(e){return{validation:"email",message:"\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0627\u0644\u0643\u062a\u0631\u0648\u0646\u064a \u062e\u0637\u0640\u0623",control:e}},Pt=function(e){return{validation:"minLength",message:"\u064a\u062c\u0628 \u0627\u0646 \u064a\u062d\u062a\u0648\u064a \u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0627\u0644\u0643\u062a\u0631\u0648\u0646\u064a \u0639\u0644\u064a \u0631\u0645\u0648\u0632 \u0645\u062d\u062f\u062f\u0629",control:e}},Jt=function(e){return{validation:"maxLength",message:"\u064a\u062c\u0628 \u0627\u0646 \u064a\u0643\u0648\u0646 \u0637\u0648\u0644 \u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0627\u0644\u0643\u062a\u0631\u0648\u0646\u064a \u0644\u0627 \u064a\u062a\u0639\u062f\u064a 300 \u062d\u0631\u0641 ",control:e}};var c=(()=>{return(e=c||(c={}))[e.NotSubmitted=0]="NotSubmitted",e[e.HasError=1]="HasError",e[e.NoError=2]="NoError",c;var e})();const Qt=[{path:"",component:N,children:[{path:"",redirectTo:"login",pathMatch:"full"},{path:"login",component:nt,data:{returnUrl:window.location.pathname}},{path:"registration",component:kt},{path:"forgot-password",component:(()=>{class e{constructor(o,n){this.fb=o,this.authService=n,this.errorState=c.NotSubmitted,this.errorStates=c,this.unsubscribe=[],this.isLoading$=this.authService.isLoading$}ngOnInit(){this.initForm()}get f(){return this.forgotPasswordForm.controls}initForm(){this.forgotPasswordForm=this.fb.group({email:["",r.kI.compose([r.kI.required,r.kI.email,r.kI.minLength(3),r.kI.maxLength(320)])]})}submit(){this.errorState=c.NotSubmitted;const o=this.authService.forgotPassword(this.f.email.value).pipe((0,T.P)()).subscribe(n=>{this.errorState=n?c.NoError:c.HasError});this.unsubscribe.push(o)}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(r.qu),t.Y36(_))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-forgot-password"]],decls:26,vars:26,consts:[["novalidate","novalidate","id","kt_login_password_reset_form",1,"form","w-100","fv-plugins-bootstrap5","fv-plugins-framework",3,"formGroup","ngSubmit"],[1,"text-center","mb-10"],[1,"text-dark","mb-3"],[1,"text-gray-400","fw-bold","fs-4"],[4,"ngIf"],[1,"fv-row","mb-10"],[1,"form-label","fw-bolder","text-gray-900","fs-6"],["type","email","formControlName","email","placeholder","\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0627\u0644\u0643\u062a\u0631\u0648\u0646\u064a","name","email","autocomplete","off",1,"form-control","form-control-lg","form-control-solid",2,"direction","rtl",3,"ngClass"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"d-flex","flex-wrap","justify-content-center","pb-lg-0"],["type","submit","id","kt_password_reset_submit",1,"btn","btn-lg","btn-primary","fw-bolder","me-4"],[1,"indicator-label"],["routerLink","/auth/login","id","kt_login_password_reset_form_cancel_button",1,"btn","btn-lg","btn-light-primary","fw-bolder"],["formError",""],[1,"mb-lg-15","alert","alert-danger"],[1,"alert-text","font-weight-bold"],[1,"mb-10","bg-light-info","p-8","rounded"],[1,"text-info"],[1,"indicator-progress"],[1,"spinner-border","spinner-border-sm","align-middle","ms-2"],[1,"fv-plugins-message-container"],[1,"fv-help-block"],["role","alert"]],template:function(o,n){if(1&o&&(t.TgZ(0,"form",0),t.NdJ("ngSubmit",function(){return n.submit()}),t.TgZ(1,"div",1)(2,"h1",2),t._uU(3," \u0646\u0633\u064a\u062a \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u061f "),t.qZA(),t.TgZ(4,"div",3),t._uU(5," \u0627\u0643\u062a\u0628 \u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0627\u0644\u0643\u062a\u0631\u0648\u0646\u064a \u0627\u0644\u062e\u0627\u0635 \u0628\u0643 , \u0627\u0644\u0645\u0633\u062c\u0644 \u0628\u0627\u0644\u0646\u0638\u0627\u0645 "),t.qZA()(),t.YNc(6,xt,4,0,"ng-container",4),t.YNc(7,Ft,4,0,"ng-container",4),t.TgZ(8,"div",5)(9,"label",6),t._uU(10,"\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0627\u0644\u0643\u062a\u0631\u0648\u0646\u064a"),t.qZA(),t._UZ(11,"input",7),t.GkF(12,8)(13,8)(14,8)(15,8),t.qZA(),t.TgZ(16,"div",9)(17,"button",10)(18,"span",11),t._uU(19,"\u0625\u0631\u0633\u0627\u0644 "),t.qZA(),t.YNc(20,Zt,4,0,"ng-container",4),t.ALo(21,"async"),t.qZA(),t.TgZ(22,"a",12),t._uU(23," \u0631\u062c\u0640\u0640\u0648\u0639 "),t.qZA()()(),t.YNc(24,Ut,1,1,"ng-template",null,13,t.W1O)),2&o){const s=t.MAs(25);t.Q6J("formGroup",n.forgotPasswordForm),t.xp6(6),t.Q6J("ngIf",n.errorState===n.errorStates.HasError),t.xp6(1),t.Q6J("ngIf",n.errorState===n.errorStates.NoError),t.xp6(4),t.Q6J("ngClass",t.WLB(15,Ot,n.forgotPasswordForm.controls.email.invalid,n.forgotPasswordForm.controls.email.valid)),t.xp6(1),t.Q6J("ngTemplateOutlet",s)("ngTemplateOutletContext",t.VKq(18,Lt,n.forgotPasswordForm.controls.email)),t.xp6(1),t.Q6J("ngTemplateOutlet",s)("ngTemplateOutletContext",t.VKq(20,It,n.forgotPasswordForm.controls.email)),t.xp6(1),t.Q6J("ngTemplateOutlet",s)("ngTemplateOutletContext",t.VKq(22,Pt,n.forgotPasswordForm.controls.email)),t.xp6(1),t.Q6J("ngTemplateOutlet",s)("ngTemplateOutletContext",t.VKq(24,Jt,n.forgotPasswordForm.controls.email)),t.xp6(5),t.Q6J("ngIf",t.lcZ(21,13,n.isLoading$))}},dependencies:[l.mk,l.O5,l.tP,m.rH,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u,l.Ov],styles:["[_nghost-%COMP%]{width:100%}@media (min-width: 992px){[_nghost-%COMP%]   .login-form[_ngcontent-%COMP%]{width:100%;max-width:450px}[_nghost-%COMP%]   .login-form[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]{width:100%}}"]}),e})()},{path:"logout",component:(()=>{class e{constructor(o){this.authService=o,this.authService.logout()}ngOnInit(){}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(_))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-logout"]],decls:2,vars:0,template:function(o,n){1&o&&(t.TgZ(0,"p"),t._uU(1,"logout works!"),t.qZA())}}),e})()},{path:"",redirectTo:"login",pathMatch:"full"},{path:"**",redirectTo:"login",pathMatch:"full"}]}];let Bt=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[m.Bz.forChild(Qt),m.Bz]}),e})();var Et=i(7292);let Dt=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[l.ez,Et.q,P.kW,Bt,r.u5,r.UX,x.JF]}),e})()}}]);