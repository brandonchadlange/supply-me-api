(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3ac471de"],{"129f":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},"1a89":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Layout",[n("div",[n("AppRow",{staticClass:"mb-4"},[n("AppColumn",{attrs:{cols:"4"}},[n("AppFormField",{attrs:{label:"Quote reference",placeholder:"e.g. QT-0001",field:"email"},model:{value:e.reference,callback:function(t){e.reference=t},expression:"reference"}})],1),n("AppColumn",{attrs:{cols:"8"}},[n("button",{staticClass:"btn btn-outline-primary float-end",attrs:{tabindex:"1"},on:{click:e.submitQuoteRequest}},[n("i",{staticClass:"mdi mdi-plus me-1"}),e._v(" Submit Quote request ")])])],1),n("AppCard",[n("Combobox",{ref:"productCombobox",attrs:{id:"product-combobox",items:e.productsExcludingSelected,createNew:e.createNewProduct,label:"description",trackBy:"id",placeholder:"Type to select or create a product"},model:{value:e.product,callback:function(t){e.product=t},expression:"product"}}),n("b-table",{attrs:{"table-class":"table table-bordered table-sm mb-0 mt-4","thead-tr-class":"bg-transparent",items:e.selectedProducts,fields:e.fields},scopedSlots:e._u([{key:"cell(suppliers)",fn:function(t){return[e._l(t.item.suppliers,(function(t){return n("span",{key:t.uuid,staticClass:"badge bg-primary font-size-14 me-1",on:{click:function(n){return e.removeSupplier(t,e.product)}}},[n("span",[e._v(e._s(t.name))]),n("i",{staticClass:"uil uil-times ms-1 cursor-pointer"})])})),n("a",{staticClass:"ms-2",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.addSupplierToProduct(e.product)}}},[e._v("add")])]}},{key:"cell(remove)",fn:function(t){return[n("button",{staticClass:"btn btn-sm btn-outline-light",on:{click:function(n){return e.removeProduct(t.item)}}},[n("i",{staticClass:"uil uil-trash-alt"})])]}}])})],1),n("QuickAddSupplierDialog",{attrs:{suppliers:e.suppliers}}),n("ProductAddModal")],1)])},a=[],i=(n("4de4"),n("4160"),n("45fc"),n("d3b7"),n("159b"),n("5530")),o=(n("96cf"),n("1da1")),s=n("ebad"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"combobox"},[n("AppComboboxInput",{attrs:{id:e.id,placeholder:e.placeholder},model:{value:e.input,callback:function(t){e.input=t},expression:"input"}}),n("AppComboboxMenu",{attrs:{id:e.id,search:e.input,items:e.items,createNew:e.createNew,selected:e.selected,label:e.label,useLabel:e.useLabel,trackBy:e.trackBy}})],1)},u=[],l=n("3c46"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-form",{on:{submit:function(t){return t.preventDefault(),e.onInputSubmit(t)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.input,expression:"input"}],ref:"input",staticClass:"form-control",attrs:{type:"text",placeholder:e.placeholder},domProps:{value:e.input},on:{input:function(t){t.target.composing||(e.input=t.target.value)}}})])},p=[],m={props:{id:{type:String},props:{value:Object},placeholder:{type:String,default:""}},data:function(){return{input:""}},mounted:function(){l["a"].$on("combobox-".concat(this.id,":update-input"),this.updateInput.bind(this)),l["a"].$on("combobox-".concat(this.id,":focus-input"),this.focusInput.bind(this))},beforeDestroy:function(){l["a"].$off("combobox-".concat(this.id,":update-input"),this.updateInput.bind(this)),l["a"].$off("combobox-".concat(this.id,":focus-input"),this.focusInput.bind(this))},methods:{onInputSubmit:function(){l["a"].$emit("combobox-".concat(this.id,":created"))},updateInput:function(e){this.input=e},focusInput:function(){this.$refs.input.focus()}},watch:{input:function(e){this.$emit("input",e)}}},f=m,h=n("2877"),b=Object(h["a"])(f,d,p,!1,null,null,null),v=b.exports,C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"dropdown-menu combobox-menu",class:e.show?"show":"",attrs:{role:"menu",tabindex:"-1","aria-labelledby":"__BVID__195__BV_toggle_","x-placement":"bottom-start"}},[e.hasExactMatch?e._e():n("li",{attrs:{role:"presentation"},on:{click:e.onCreateNew}},[n("a",{staticClass:"dropdown-item text-primary",attrs:{role:"menuitem",href:"#",target:"_self"}},[e._v('Create new "'+e._s(e.search)+'"')])]),e.useLabel?e._e():n("div",e._l(e.filteredItems,(function(t){return n("li",{key:t,attrs:{role:"presentation"},on:{click:function(n){return n.preventDefault(),e.select(t)}}},[n("a",{staticClass:"dropdown-item",attrs:{role:"menuitem",href:"#",target:"_self"}},[e._v(e._s(t))])])})),0),e.useLabel?n("div",e._l(e.filteredItems,(function(t){return n("li",{key:t[e.trackBy],attrs:{role:"presentation"},on:{click:function(n){return n.preventDefault(),e.select(t)}}},[n("a",{staticClass:"dropdown-item",attrs:{role:"menuitem",href:"#",target:"_self"}},[e._v(e._s(t[e.label]))])])})),0):e._e()])},x=[],g=(n("caad"),n("ac1f"),n("2532"),n("841c"),{props:{id:{type:String},search:{type:String,default:""},selected:{type:Object},label:{type:String,required:!1},useLabel:{type:Boolean},trackBy:{type:String,required:!1},items:{type:Array}},computed:{hasSelected:function(){return!!this.selected},show:function(){return!this.hasSelected&&this.search.length>0},filteredItems:function(){var e=this,t=this.search.toLowerCase();return t.length?this.items.filter((function(n){var r=n[e.label].toLowerCase();return r.includes(t)||t.includes(r)})):[]},hasExactMatch:function(){var e=this,t=this.search.toLowerCase();return this.filteredItems.some((function(n){var r=e.useLabel?n[e.label]:n;return r.toLowerCase()===t}))}},methods:{select:function(e){l["a"].$emit("combobox-".concat(this.id,":selected"),e)},onCreateNew:function(){l["a"].$emit("combobox-".concat(this.id,":created"))}}}),S=g,y=Object(h["a"])(S,C,x,!1,null,null,null),w=y.exports,E={components:{AppComboboxInput:v,AppComboboxMenu:w},props:{id:{type:String},value:{type:Object},items:{type:Array},label:{type:String,required:!1},trackBy:{type:String,required:!1},createNew:{type:Function},placeholder:{type:String,default:""}},data:function(){return{input:"",selected:null,hasExactMatch:!1}},watch:{input:function(){this.selected&&(this.selected=null,this.$emit("input",this.selected))}},computed:{useLabel:function(){return!!this.label}},mounted:function(){l["a"].$on("combobox-".concat(this.id,":created"),this.onCreated.bind(this)),l["a"].$on("combobox-".concat(this.id,":selected"),this.onSelected.bind(this)),l["a"].$on("combobox-".concat(this.id,":has-exact-match"),this.onSelected.bind(this))},beforeDestroy:function(){l["a"].$off("combobox-".concat(this.id,":created"),this.onCreated.bind(this)),l["a"].$off("combobox-".concat(this.id,":selected"),this.onSelected.bind(this)),l["a"].$on("combobox-".concat(this.id,":has-exact-match"),this.onSelected.bind(this))},methods:{onCreated:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.createNew){t.next=3;break}return l["a"].$emit("combobox-".concat(e.id,":selected"),e.input),t.abrupt("return");case 3:return t.next=5,e.createNew(e.input);case 5:n=t.sent,l["a"].$emit("combobox-".concat(e.id,":selected"),n);case 7:case"end":return t.stop()}}),t)})))()},onSelected:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:l["a"].$emit("combobox-".concat(t.id,":update-input"),t.useLabel?e[t.label]:e),t.$nextTick((function(){t.selected=e,t.$emit("input",t.selected)}));case 2:case"end":return n.stop()}}),n)})))()},reset:function(){l["a"].$emit("combobox-".concat(this.id,":update-input"),""),l["a"].$emit("combobox-".concat(this.id,":focus-input"))}}},$=E,k=(n("2314"),Object(h["a"])($,c,u,!1,null,null,null)),A=k.exports,_=n("a38a"),M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-modal",{attrs:{centered:"",id:e.id,size:"md",title:"Create Supplier","title-class":"font-18","hide-footer":"","hide-header":""}},[n("b-tabs",{attrs:{justified:"","nav-class":"nav-tabs-custom","content-class":"text-muted"},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[n("b-tab",{attrs:{active:""},scopedSlots:e._u([{key:"title",fn:function(){return[n("span",{staticClass:"d-none d-sm-inline-block"},[e._v("Select")])]},proxy:!0}])},[n("SupplierSelect",{attrs:{suppliers:e.suppliers,product:e.product,useAllProducts:e.useAllProducts}})],1),n("b-tab",{scopedSlots:e._u([{key:"title",fn:function(){return[n("span",{staticClass:"d-none d-sm-inline-block"},[e._v("Add new")])]},proxy:!0}])},[n("CreateForm",{attrs:{product:e.product,useAllProducts:e.useAllProducts}})],1)],1)],1)},O=[],P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-form",{ref:"form",on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}}},[n("AppFormField",{attrs:{label:"Name",placeholder:"Enter supplier name",field:"name",validation:e.validation.name},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}}),n("AppFormField",{attrs:{label:"Contact name",placeholder:"Primary contact name",field:"contactName",type:"text",validation:e.validation.contactName},model:{value:e.form.contactName,callback:function(t){e.$set(e.form,"contactName",t)},expression:"form.contactName"}}),n("AppFormField",{attrs:{label:"Contact email",placeholder:"Primary contact email",field:"contactEmail",type:"email",validation:e.validation.contactEmail},model:{value:e.form.contactEmail,callback:function(t){e.$set(e.form,"contactEmail",t)},expression:"form.contactEmail"}}),n("hr"),n("div",{staticClass:"mt-3 text-end"},[n("b-button",{staticClass:"w-sm",attrs:{variant:"secondary"},on:{click:e.onCancel}},[e._v("Cancel")]),n("b-button",{staticClass:"w-sm ms-2",attrs:{type:"submit",variant:"primary"}},[e._v("Add")])],1)],1)},D=[],I=n("da9a"),R={productAddModal:{SHOW:"product-add-modal:show",HIDE:"product-add-modal:hide",CREATED:"product-add-modal:created",CLOSED:"product-add-modal:closed"},supplierManageModal:{SHOW:"supplier-manage-modal:show",HIDE:"supplier-manage-modal:hide",CREATE:"supplier-manage-modal:create",SELECT:"supplier-manage-modal:select",DESELECT:"supplier-manage-modal:de-select"}},F={components:{AppFormField:_["a"]},props:{useAllProducts:Boolean,product:Object},data:function(){return{form:{name:"",contactName:"",contactEmail:""},validation:I["a"].supplier,formInvalid:!1}},mounted:function(){l["a"].$on("form:invalid",this.setFormInvalid.bind(this))},beforeDestroy:function(){l["a"].$off("form:invalid",this.setFormInvalid.bind(this))},methods:{onSubmit:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.formInvalid=!1,l["a"].$emit("form:touch"),!e.formInvalid){t.next=4;break}return t.abrupt("return");case 4:return t.next=6,e.$store.dispatch("supplier/create",e.form);case 6:n=t.sent,l["a"].$emit(R.SELECT,{supplier:n,allProducts:e.useAllProducts,product:e.product}),l["a"].$emit(R.supplierManageModal.HIDE);case 9:case"end":return t.stop()}}),t)})))()},onCancel:function(){l["a"].$emit(R.supplierManageModal.HIDE)},setFormInvalid:function(){this.formInvalid=!0}}},j=F,T=Object(h["a"])(j,P,D,!1,null,null,null),L=T.exports,N=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",{staticClass:"mt-4 mb-1"},[e._v("Options")]),n("div",{staticClass:"table-responsive"},[n("table",{staticClass:"table table-sm mb-0"},[n("tbody",e._l(e.selectableSuppliers,(function(t){return n("tr",{key:t.id},[n("td",[e._v(e._s(t.name))]),n("td",{staticClass:"text-end"},[n("a",{attrs:{href:"#"},on:{click:function(n){return n.preventDefault(),e.selectSupplier(t)}}},[e._v("select")])])])})),0)])]),n("p",{staticClass:"mt-4 mb-1"},[e._v("Selected")]),n("div",{staticClass:"table-responsive"},[n("table",{staticClass:"table table-sm mb-0"},[n("tbody",e._l(e.selectedSuppliers,(function(t){return n("tr",{key:t.id},[n("td",[e._v(e._s(t.name))]),n("td",{staticClass:"text-end"},[n("a",{staticClass:"text-danger",attrs:{href:"#"},on:{click:function(n){return n.preventDefault(),e.removeSupplier(t)}}},[e._v("remove")])])])})),0)])]),n("hr"),n("div",{staticClass:"mt-3 text-end"},[n("b-button",{staticClass:"w-sm",attrs:{variant:"secondary"},on:{click:e.onCancel}},[e._v("Close")])],1)])},H=[],B=(n("7db0"),n("c975"),n("d81d"),n("a434"),{props:{suppliers:Array,useAllProducts:Boolean,product:Object},data:function(){return{selected:[]}},mounted:function(){this.selected=this.product.suppliers.map((function(e){return e.supplierId}))},computed:{selectedSuppliers:function(){var e=this;return this.suppliers.filter((function(t){return e.selected.includes(t.id)}))},selectableSuppliers:function(){var e=this;return this.suppliers.filter((function(t){return!e.selected.includes(t.id)}))}},methods:{selectSupplier:function(e){this.selected.push(e.id),l["a"].$emit(R.supplierManageModal.SELECT,{supplier:e,allProducts:this.useAllProducts,product:this.product})},removeSupplier:function(e){var t=this.product.suppliers.find((function(t){return t.supplierId===e.id}));this.selected.splice(this.selected.indexOf(e.id),1),l["a"].$emit(R.supplierManageModal.DESELECT,{supplier:t,allProducts:this.useAllProducts,product:this.product})},onCancel:function(){l["a"].$emit(R.supplierManageModal.HIDE)}}}),W=B,q=Object(h["a"])(W,N,H,!1,null,null,null),Q=q.exports,V="supplier-manage-modal",z={components:{SupplierSelect:Q,CreateForm:L},props:{suppliers:Array},mounted:function(){l["a"].$on(R.supplierManageModal.SHOW,this.showDialog.bind(this)),l["a"].$on(R.supplierManageModal.HIDE,this.hideDialog.bind(this))},beforeDestroy:function(){l["a"].$off(R.supplierManageModal.SHOW,this.showDialog.bind(this)),l["a"].$off(R.supplierManageModal.HIDE,this.hideDialog.bind(this))},data:function(){return{id:V,form:{name:"",contactName:"",contactEmail:""},useAllProducts:!1,product:null,keepFormOpen:!1,dismissCountDown:0,tab:0}},methods:{showDialog:function(e){this.useAllProducts=e.allProducts,this.product=e.product,this.$bvModal.show(V)},hideDialog:function(){this.$bvModal.hide(V)}}},J=z,G=Object(h["a"])(J,M,O,!1,null,null,null),K=G.exports,U=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-modal",{attrs:{title:"Add new product","title-class":"font-18",id:e.id,centered:"",size:"md","hide-footer":""}},[n("AppForm",{attrs:{onSubmit:e.onSubmit}},[n("AppFormField",{attrs:{label:"Description",placeholder:"",field:"description",validation:e.validation.description},model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}}),n("AppFormField",{ref:"manufacturerCodeField",staticClass:"mt-4",attrs:{label:"Manufacturer Code",placeholder:"",field:"manufacturerCode",validation:e.validation.manufacturerCode},model:{value:e.form.manufacturerCode,callback:function(t){e.$set(e.form,"manufacturerCode",t)},expression:"form.manufacturerCode"}}),n("label",{staticClass:"mt-4"},[e._v("Category")]),n("AppCombobox",{attrs:{id:"category-combobox",items:e.categories,createNew:e.createNewCategory,label:"name",trackBy:"id",placeholder:"Type to select or create a category"},model:{value:e.form.category,callback:function(t){e.$set(e.form,"category",t)},expression:"form.category"}}),n("div",{staticClass:"mt-3 text-end"},[n("b-button",{staticClass:"w-sm",attrs:{variant:"secondary"},on:{click:e.onCancel}},[e._v("Cancel")]),n("b-button",{staticClass:"w-sm ms-2",attrs:{type:"submit",variant:"primary"}},[e._v("Add")])],1)],1)],1)},X=[],Y=(n("a4d3"),n("e01a"),n("e342")),Z="product-add-modal",ee={components:{AppForm:Y["a"],AppFormField:_["a"],AppCombobox:A},data:function(){return{id:Z,validation:I["a"].product,form:{description:"",manufacturerCode:"",category:null},categories:[{id:1,name:"Routers"},{id:2,name:"Wifi Access Points"}]}},mounted:function(){l["a"].$on(R.productAddModal.SHOW,this.showDialog.bind(this))},methods:{showDialog:function(e){this.form.description=e.description,this.$bvModal.show(Z),setTimeout((function(){var e=document.getElementById("manufacturerCode");e.focus()}),60)},onCancel:function(){l["a"].$emit(R.productAddModal.CLOSED),this.$bvModal.hide(Z)},onSubmit:function(){l["a"].$emit(R.productAddModal.CREATED,this.form),this.$bvModal.hide(Z)},createNewCategory:function(e){var t={id:new Date,name:e};return this.categories.push(t),t}},watch:{}},te=ee,ne=Object(h["a"])(te,U,X,!1,null,null,null),re=ne.exports,ae=n("b36c"),ie=n("9a79"),oe=n("97bf"),se=n("2f62"),ce=(n("3ca3"),n("10d1"),n("ddb0"),n("ade3"));function ue(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function le(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function de(e,t,n){return t&&le(e.prototype,t),n&&le(e,n),e}function pe(e,t){var n=t.get(e);if(!n)throw new TypeError("attempted to get private field on non-instance");return n.get?n.get.call(e):n.value}var me=new WeakMap,fe=new WeakMap,he=function(){function e(){ue(this,e),me.set(this,{writable:!0,value:[]}),fe.set(this,{writable:!0,value:[]})}return de(e,[{key:"products",get:function(){return pe(this,fe)}},{key:"addProduct",value:function(e){var t=new be(e);return pe(this,fe).push(t),t}},{key:"removeProduct",value:function(e){var t=pe(this,fe).indexOf(e);pe(this,fe).splice(t,1)}},{key:"addSupplierToProduct",value:function(e,t){t.addSupplier(e)}},{key:"removeSupplierFromProduct",value:function(e,t){t.removeSupplier(e)}}]),e}(),be=function(){function e(t){ue(this,e),Object(ce["a"])(this,"id",null),Object(ce["a"])(this,"description",null),Object(ce["a"])(this,"suppliers",[]),this.id=t.id,this.description=t.description,this.suppliers=t.suppliers||[]}return de(e,[{key:"addSupplier",value:function(e){this.suppliers.push(e)}},{key:"removeSupplier",value:function(e){this.suppliers.splice(this.suppliers.indexOf(e),1)}}]),e}(),ve=he,Ce=n("1e35"),xe=n("c6df"),ge=new ve,Se={components:{Layout:s["a"],AppCard:ae["a"],AppRow:ie["a"],AppColumn:oe["a"],AppFormField:_["a"],Combobox:A,QuickAddSupplierDialog:K,ProductAddModal:re},data:function(){return{product:null,selectedProducts:ge.products,reference:"",fields:[{label:"Product",key:"description"},{label:"Suppliers",key:"suppliers"},{label:"",key:"remove"}]}},mounted:function(){l["a"].$on(R.supplierManageModal.SELECT,this.onSupplierSelected.bind(this)),l["a"].$on(R.supplierManageModal.DESELECT,this.onSupplierDeselected.bind(this)),l["a"].$on(R.supplierManageModal.CREATE,this.onSupplierCreated.bind(this)),this.$store.dispatch("product/fetch"),this.$store.dispatch("supplier/fetch")},beforeDestroy:function(){l["a"].$off(R.supplierManageModal.SELECT,this.onSupplierSelected.bind(this)),l["a"].$off(R.supplierManageModal.DESELECT,this.onSupplierDeselected.bind(this)),l["a"].$off(R.supplierManageModal.CREATE,this.onSupplierCreated.bind(this))},methods:{removeProduct:function(e){ge.removeProduct(e)},createNewProduct:function(e){return Object(o["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=new Promise((function(e){function t(){l["a"].$off(R.productAddModal.CREATED,n)}function n(n){l["a"].$off(R.productAddModal.CLOSED,t),e(n)}l["a"].$once(R.productAddModal.CREATED,n),l["a"].$once(R.productAddModal.CLOSED,t)})),l["a"].$emit(R.productAddModal.SHOW,{description:e}),t.abrupt("return",n);case 3:case"end":return t.stop()}}),t)})))()},addSupplierToProduct:function(e){l["a"].$emit(R.supplierManageModal.SHOW,{allProducts:!1,product:e})},onSupplierSelected:function(e){return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,r,a,i,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.supplier,r=e.product,a=e.allProducts,a){t.next=7;break}return t.next=4,Ce["a"].createProductVariantSupplier(r.id,n.id);case 4:i=t.sent,o=i.data,ge.addSupplierToProduct(o,r);case 7:case"end":return t.stop()}}),t)})))()},removeSupplier:function(e,t){return Object(o["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Ce["a"].deleteProductVariantSupplier(e.id);case 2:ge.removeSupplierFromProduct(e,t);case 3:case"end":return n.stop()}}),n)})))()},onSupplierDeselected:function(e){return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.supplier,r=e.product,a=e.allProducts,a){t.next=5;break}return t.next=4,Ce["a"].deleteProductVariantSupplier(n.id);case 4:ge.removeSupplierFromProduct(n,r);case 5:case"end":return t.stop()}}),t)})))()},onSupplierCreated:function(e){this.$store.dispatch("supplier/create",e)},submitQuoteRequest:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,xe["a"].createQuoteRequest(e.reference,e.selectedVariants);case 2:e.$router.push("/quotes");case 3:case"end":return t.stop()}}),t)})))()}},watch:{product:function(e){e&&(ge.addProduct(e),this.$refs.productCombobox.reset())}},computed:Object(i["a"])(Object(i["a"])({},Object(se["c"])({products:"product/list",suppliers:"supplier/list"})),{},{selectedVariants:function(){var e=[];return this.selectedProducts.forEach((function(t){t.suppliers.forEach((function(t){e.push(t.id)}))})),e},productsExcludingSelected:function(){var e=this;return this.products.filter((function(t){return!e.selectedProducts.some((function(e){return e.id===t.id}))}))}})},ye=Se,we=Object(h["a"])(ye,r,a,!1,null,null,null);t["default"]=we.exports},2314:function(e,t,n){"use strict";n("f7c8")},2532:function(e,t,n){"use strict";var r=n("23e7"),a=n("5a34"),i=n("1d80"),o=n("ab13");r({target:"String",proto:!0,forced:!o("includes")},{includes:function(e){return!!~String(i(this)).indexOf(a(e),arguments.length>1?arguments[1]:void 0)}})},"5a34":function(e,t,n){var r=n("44e7");e.exports=function(e){if(r(e))throw TypeError("The method doesn't accept regular expressions");return e}},"841c":function(e,t,n){"use strict";var r=n("d784"),a=n("825a"),i=n("1d80"),o=n("129f"),s=n("14c3");r("search",1,(function(e,t,n){return[function(t){var n=i(this),r=void 0==t?void 0:t[e];return void 0!==r?r.call(t,n):new RegExp(t)[e](String(n))},function(e){var r=n(t,e,this);if(r.done)return r.value;var i=a(e),c=String(this),u=i.lastIndex;o(u,0)||(i.lastIndex=0);var l=s(i,c);return o(i.lastIndex,u)||(i.lastIndex=u),null===l?-1:l.index}]}))},a434:function(e,t,n){"use strict";var r=n("23e7"),a=n("23cb"),i=n("a691"),o=n("50c4"),s=n("7b0b"),c=n("65f0"),u=n("8418"),l=n("1dde"),d=n("ae40"),p=l("splice"),m=d("splice",{ACCESSORS:!0,0:0,1:2}),f=Math.max,h=Math.min,b=9007199254740991,v="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!p||!m},{splice:function(e,t){var n,r,l,d,p,m,C=s(this),x=o(C.length),g=a(e,x),S=arguments.length;if(0===S?n=r=0:1===S?(n=0,r=x-g):(n=S-2,r=h(f(i(t),0),x-g)),x+n-r>b)throw TypeError(v);for(l=c(C,r),d=0;d<r;d++)p=g+d,p in C&&u(l,d,C[p]);if(l.length=r,n<r){for(d=g;d<x-r;d++)p=d+r,m=d+n,p in C?C[m]=C[p]:delete C[m];for(d=x;d>x-r+n;d--)delete C[d-1]}else if(n>r)for(d=x-r;d>g;d--)p=d+r-1,m=d+n-1,p in C?C[m]=C[p]:delete C[m];for(d=0;d<n;d++)C[d+g]=arguments[d+2];return C.length=x-r+n,l}})},ab13:function(e,t,n){var r=n("b622"),a=r("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[a]=!1,"/./"[e](t)}catch(r){}}return!1}},c975:function(e,t,n){"use strict";var r=n("23e7"),a=n("4d64").indexOf,i=n("a640"),o=n("ae40"),s=[].indexOf,c=!!s&&1/[1].indexOf(1,-0)<0,u=i("indexOf"),l=o("indexOf",{ACCESSORS:!0,1:0});r({target:"Array",proto:!0,forced:c||!u||!l},{indexOf:function(e){return c?s.apply(this,arguments)||0:a(this,e,arguments.length>1?arguments[1]:void 0)}})},caad:function(e,t,n){"use strict";var r=n("23e7"),a=n("4d64").includes,i=n("44d2"),o=n("ae40"),s=o("indexOf",{ACCESSORS:!0,1:0});r({target:"Array",proto:!0,forced:!s},{includes:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),i("includes")},f7c8:function(e,t,n){}}]);
//# sourceMappingURL=chunk-3ac471de.26cc35ba.js.map