(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d3ffb"],{"5ec8":function(t,a,e){"use strict";e.r(a);var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"account-pages my-5 pt-sm-5"},[e("div",{staticClass:"container"},[e("AppRow",{staticClass:"align-items-center justify-content-center"},[e("AppColumn",{attrs:{cols:"5"}},[e("AppCard",[e("div",{staticClass:"text-center mt-2"},[e("h5",{staticClass:"text-primary"},[t._v("Register Account")]),e("p",{staticClass:"text-muted"},[t._v(" Sign up to continue to "),e("b",[e("span",{staticClass:"text-primary"},[t._v("Supply")]),e("span",{staticClass:"text-dark"},[t._v("Me")])]),t._v(" . ")])]),e("div",{staticClass:"p-2 mt-4"},[e("AppForm",{attrs:{onSubmit:t.register}},[e("AppFormField",{attrs:{label:"Email",placeholder:"Enter email",field:"email",validation:t.validation.email},model:{value:t.form.email,callback:function(a){t.$set(t.form,"email",a)},expression:"form.email"}}),e("AppFormField",{attrs:{label:"Password",placeholder:"Enter password",field:"password",type:"password",validation:t.validation.password},model:{value:t.form.password,callback:function(a){t.$set(t.form,"password",a)},expression:"form.password"}}),e("div",{staticClass:"mt-3 text-end"},[e("b-button",{staticClass:"w-sm",attrs:{type:"submit",variant:"primary"}},[t._v("Register")])],1),e("div",{staticClass:"mt-4 text-center"},[e("p",{staticClass:"text-muted mb-0"},[t._v(" Already have an account ? "),e("router-link",{staticClass:"fw-medium text-primary",attrs:{to:"/login"}},[t._v("Login")])],1)])],1)],1)]),t.hasError?e("b-alert",{attrs:{variant:"danger",show:""}},[t._v(t._s(t.errorText))]):t._e()],1)],1)],1)])])},s=[],i=(e("96cf"),e("1da1")),n=e("97bf"),o=e("9a79"),l=e("b36c"),c=e("e342"),p=e("a38a"),m=e("5b34"),d=e("da9a"),u={components:{AppRow:o["a"],AppColumn:n["a"],AppCard:l["a"],AppForm:c["a"],AppFormField:p["a"]},data:function(){return{form:{email:"",password:""},validation:d["a"].register,hasError:!1,errorText:""}},methods:{register:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var e,r,s,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e=t.form,r=e.email,s=e.password,a.next=3,m["a"].register(r,s);case 3:if(i=a.sent,i.success){a.next=8;break}return t.errorText=i.error.message,t.hasError=!0,a.abrupt("return");case 8:t.$router.push("/verify-email?ref=".concat(i.data.guid));case 9:case"end":return a.stop()}}),a)})))()}}},v=u,f=e("2877"),w=Object(f["a"])(v,r,s,!1,null,null,null);a["default"]=w.exports}}]);
//# sourceMappingURL=chunk-2d0d3ffb.1c3269dc.js.map