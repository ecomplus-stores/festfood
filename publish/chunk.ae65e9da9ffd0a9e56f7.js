(window.webpackJsonp=window.webpackJsonp||[]).push([[10,8,9],{187:function(t,i,e){"use strict";var s=e(38),a=e(55),o=e(30),n=e(56),r=e(109),c=e(195);const u=(t,i)=>{const{type:e,value:s}=i;let a;if(s)return a="percentage"===e?t*(100-s)/100:t-s,a>0?a:0};var l={name:"APrices",props:{product:{type:Object,required:!0},isLiteral:Boolean,isBig:Boolean,isAmountTotal:Boolean,installmentsOption:Object,discountOption:Object,discountText:{type:[String,Boolean],default:""},canShowPriceOptions:{type:Boolean,default:!0}},data(){return{installmentsNumber:0,monthlyInterest:0,discount:{type:null,value:0},extraDiscount:{type:null,value:0,min_amount:0},discountLabel:this.discountText,pointsProgramName:null,pointsMinPrice:0,earnPointsFactor:0}},computed:{i19asOf:()=>Object(a.a)(s.r),i19from:()=>Object(a.a)(s.Gb),i19interestFree:()=>Object(a.a)(s.Ub),i19of:()=>Object(a.a)(s.Gc),i19to:()=>Object(a.a)(s.de),i19upTo:()=>Object(a.a)(s.oe),i19youEarn:()=>Object(a.a)(s.xe),price(){const t=Object(o.a)(this.product);return this.extraDiscount.value&&(!this.extraDiscount.min_amount||t>this.extraDiscount.min_amount)?u(t,this.extraDiscount):t},comparePrice(){return Object(n.a)(this.product)?this.product.base_price:this.extraDiscount.value?Object(o.a)(this.product):void 0},hasVariedPrices(){const{variations:t}=this.product;if(t){const i=Object(o.a)(this.product);for(let e=0;e<t.length;e++){if(Object(o.a)({...this.product,...t[e]})>i)return!0}}return!1},priceWithDiscount(){return this.canShowPriceOptions&&u(this.price,this.discount)},installmentValue(){if(this.canShowPriceOptions&&this.installmentsNumber>=2){if(this.monthlyInterest){const t=this.monthlyInterest/100;return this.price*t/(1-Math.pow(1+t,-this.installmentsNumber))}return this.price/this.installmentsNumber}return 0}},methods:{formatMoney:r.a,updateInstallments(t){if(t){this.monthlyInterest=t.monthly_interest;const i=t.min_installment||5,e=parseInt(this.price/i,10);this.installmentsNumber=Math.min(e,t.max_number)}},updateDiscount(t){!t||t.min_amount&&!(t.min_amount<=this.price)||this.isAmountTotal&&"total"!==t.apply_at||(this.discount=t,!this.discountText&&!1!==this.discountText&&t.label&&(this.discountLabel=`via ${t.label}`))}},watch:{price:{handler(t){this.$emit("fix-price",t)},immediate:!0}},created(){window.$setProductDomainPrice(this.product),this.canShowPriceOptions&&(this.discountOption?this.updateDiscount(this.discountOption):Object(c.a)("apply_discount").then((t=>{t.available_extra_discount&&(this.extraDiscount=t.available_extra_discount)})),this.installmentsOption?this.updateInstallments(this.installmentsOption):Object(c.a)("list_payments").then((t=>{this.updateInstallments(t.installments_option),this.updateDiscount(t.discount_option);const i=t.loyalty_points_programs;this.isLiteral&&i&&this.$nextTick((()=>{for(const t in i){const e=i[t];if(e&&e.earn_percentage>0){this.pointsMinPrice=e.min_subtotal_to_earn,this.pointsProgramName=e.name,this.earnPointsFactor=e.earn_percentage/100;break}}}))})))}};i.a=l},188:function(t,i,e){"use strict";e(2),e(17);var s=e(38),a=e(55),o=e(30),n=e(35),r=e(111),c=e(56),u=e(40),l=e(5),d=e(12),p=e(207),h=e(209),m=e(208),_=e(41),b=e(196);const f=(t,i)=>{if("object"==typeof window){t=`productCard${t}Html`;const e="function"==typeof window[t]?window[t](i):window[t];if("string"==typeof e)return e}};var y={name:"ProductCard",components:{ALink:p.a,APicture:h.a,APrices:m.a},props:{product:Object,productId:String,isSmall:Boolean,headingTag:{type:String,default:"h3"},buyText:String,transitionClass:{type:String,default:"animated fadeIn"},canAddToCart:{type:Boolean,default:!0},ecomPassport:{type:Object,default:()=>_.a},accountUrl:{type:String,default:"/app/#/account/"},isLoaded:Boolean,installmentsOption:Object,discountOption:Object},data:()=>({body:{},isLoading:!1,isWaitingBuy:!1,isHovered:!1,isFavorite:!1,error:""}),computed:{i19addToFavorites:()=>Object(a.a)(s.m),i19outOfStock:()=>Object(a.a)(s.Sc),i19unavailable:()=>Object(a.a)(s.je),i19uponRequest:()=>"Sob consulta",isWithoutPrice(){return!Object(o.a)(this.body)},ratingHtml(){return f("Rating",this.body)},buyHtml(){return f("Buy",this.body)},footerHtml(){return f("Footer",this.body)},name(){return Object(n.a)(this.body)},strBuy(){return this.buyText||"object"==typeof window&&window.productCardBuyText||Object(a.a)(s.z)},isInStock(){return Object(r.a)(this.body)},isActive(){return this.body.available&&this.body.visible&&this.isInStock},isLogged:()=>_.a.checkAuthorization(),discount(){const{body:t}=this;return Object(c.a)(t)?Math.round(100*(t.base_price-Object(o.a)(t))/t.base_price):0},shortShelfLife(){let t;if(this.body.specs){const i=this.body.specs.find((t=>{let{grid:i}=t;return"validade"===i}));i&&i.text&&(t=new Date(i.text))}if(!t){const{specifications:i}=this.body,e=i&&i.validade&&i.validade[0]&&i.validade[0].text;e&&(t=new Date(e))}if(t){const i=Date.now(),e=t.getTime();if(e>i-5184e6&&e<i+15552e6)return t.toLocaleDateString()}return null}},methods:{setBody(t){this.body=Object.assign({},t),delete this.body.body_html,delete this.body.body_text,delete this.body.inventory_records,delete this.body.price_change_records,this.isFavorite=Object(b.a)(this.body._id,this.ecomPassport)},fetchItem(){this.productId&&(this.isLoading=!0,Object(l.g)({url:`/products/${this.productId}.json`}).then((t=>{let{data:i}=t;this.$emit("update:product",i),this.setBody(i),this.$emit("update:is-loaded",!0)})).catch((t=>{console.error(t),this.body.name&&this.body.slug&&this.body.pictures||(this.error=Object(a.a)(s.W))})).finally((()=>{this.isLoading=!1})))},toggleFavorite(){this.isLogged&&(this.isFavorite=Object(b.b)(this.body._id,this.ecomPassport))},buy(){const t=this.body;this.$emit("buy",{product:t}),this.canAddToCart&&(this.isWaitingBuy=!0,Object(l.g)({url:`/products/${t._id}.json`}).then((i=>{let{data:s}=i;const a=["variations","customizations","kit_composition"];for(let t=0;t<a.length;t++){const i=s[a[t]];if(i&&i.length)return Promise.all([e.e(0),e.e(1),e.e(2),e.e(21),e.e(35)]).then(e.bind(null,486)).then((t=>{new u.a({render:i=>i(t.default,{props:{product:s}})}).$mount(this.$refs.quickview)}))}const{quantity:o,price:n}=s;d.a.addProduct({...t,quantity:o,price:n})})).catch((i=>{console.error(i),window.location=`/${t.slug}`})).finally((()=>{this.isWaitingBuy=!1})))}},created(){this.product&&(this.setBody(this.product),void 0===this.product.available&&(this.body.available=!0),void 0===this.product.visible&&(this.body.visible=!0)),this.isLoaded||this.fetchItem()}};i.a=y},197:function(t,i,e){"use strict";e.d(i,"a",(function(){return s})),e.d(i,"b",(function(){return a}));var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"prices",class:{"prices--literal":t.isLiteral,"prices--big":t.isBig}},[t.comparePrice?e("span",{staticClass:"prices__compare"},[t.isLiteral?[e("small",[t._v(" "+t._s(t.i19from)+" ")]),e("s",[t._v(t._s(t.formatMoney(t.comparePrice)))]),e("small",[t._v(" "+t._s(t.i19to)+" ")])]:e("s",[t._v(t._s(t.formatMoney(t.comparePrice)))])],2):t._e(),e("strong",{staticClass:"prices__value"},[t.hasVariedPrices?e("small",[t._v(" "+t._s(t.i19asOf)+" ")]):t._e(),t._v(" "+t._s(t.formatMoney(t.price))+" ")]),e("transition-group",{attrs:{"enter-active-class":"animated slideInDown"}},[t.earnPointsFactor>0&&!(t.pointsMinPrice>t.price)?e("div",{key:"points",staticClass:"prices__points"},[e("i",{staticClass:"i-check-circle"}),t._v(" "+t._s(t.i19youEarn)+" "),e("span",[t._v(" +"+t._s((t.earnPointsFactor*t.price).toFixed(1))+" ")]),e("em",[t._v(t._s(t.pointsProgramName))])]):t._e(),t.installmentsNumber>1&&t.installmentValue?e("div",{key:"installments",staticClass:"prices__installments"},[t.isLiteral?e("small",[t._v(" "+t._s(t.i19upTo)+" ")]):t._e(),e("strong",[t._v(t._s(t.installmentsNumber)+"x")]),e("small",[t._v(t._s(t.i19of))]),e("span",[t._v(" "+t._s(t.formatMoney(t.installmentValue))+" ")]),t.monthlyInterest?t._e():e("small",[t._v(" "+t._s(t.i19interestFree)+" ")])]):t._e(),"number"==typeof t.priceWithDiscount&&t.priceWithDiscount<t.price?e("div",{key:"discount",staticClass:"prices__discount"},["string"==typeof t.discountLabel&&t.discountLabel?[e("span",[t._v(" "+t._s(t.formatMoney(t.priceWithDiscount))+" ")]),e("small",{staticClass:"prices__discount-label"},[t._v(" "+t._s(t.discountLabel)+" ")])]:[e("small",[t._v(" "+t._s(t.i19asOf)+" ")]),e("span",[t._v(" "+t._s(t.formatMoney(t.priceWithDiscount))+" ")])]],2):t._e()])],1)},a=[]},198:function(t,i,e){"use strict";e.d(i,"a",(function(){return s})),e.d(i,"b",(function(){return a}));var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"product-card",class:{"product-card--inactive":t.body._id&&!t.isActive,"product-card--small":t.isSmall},attrs:{"data-product-id":t.body._id,"data-sku":t.body.sku},on:{mouseover:function(i){t.isHovered=!0}}},[e("transition",{attrs:{"enter-active-class":t.transitionClass}},[t.isLoading?t._e():e("section",[t._t("discount-tag",(function(){return[t.isActive&&t.discount>0?e("span",{staticClass:"product-card__offer-stamp"},[e("i",{staticClass:"i-arrow-down"}),t._v(" "),e("b",[t._v(t._s(t.discount))]),t._v("% ")]):t._e()]}),null,{discount:t.discount}),t._t("stamps"),t._t("body",(function(){return[e("a-link",{staticClass:"product-card__link",attrs:{href:"/"+t.body.slug,title:t.name}},[t._t("header"),t.shortShelfLife?e("span",{staticClass:"product-card__shelf-life alert alert-warning"},[t._v(" Vencimento em "),e("strong",[t._v(t._s(t.shortShelfLife))])]):t._e(),e("div",{staticClass:"product-card__pictures"},[t.body.pictures&&t.body.pictures.length?t._l(t.body.pictures.slice(0,2).reverse(),(function(i,s){return 1===t.body.pictures.length||1===s||t.isHovered?e("a-picture",{key:s,staticClass:"product-card__picture",attrs:{src:i,"can-calc-height":!1}}):t._e()})):e("a-picture",{staticClass:"product-card__picture"})],2),t._t("title",(function(){return[e(t.headingTag,{tag:"component",staticClass:"product-card__name"},[t._v(" "+t._s(t.name)+" ")])]}))],2)]})),t._t("rating",(function(){return[t._m(0)]})),t.body.available&&t.body.visible?t.isInStock?t.isWithoutPrice?t._t("without-price",(function(){return[e("p",{staticClass:"badge badge-info mt-auto"},[t._v(" "+t._s(t.i19uponRequest)+" ")])]})):[t._t("prices",(function(){return[e("a-prices",{staticClass:"product-card__prices",attrs:{product:t.body,"installments-option":t.installmentsOption,"discount-option":t.discountOption}})]})),e("div",{staticClass:"product-card__buy fade",on:{click:t.buy}},[t._t("buy",(function(){return[t.buyHtml?e("div",{domProps:{innerHTML:t._s(t.buyHtml)}}):t._e(),e("button",{staticClass:"btn btn-primary",class:t.isSmall?"btn-sm":"btn-block",attrs:{type:"button",disabled:t.isWaitingBuy}},[t.isWaitingBuy?e("span",{staticClass:"product-card__buy-loading spinner-grow spinner-grow-sm",attrs:{role:"status"}},[e("span",{staticClass:"sr-only"},[t._v("Loading...")])]):t._e(),t._t("buy-button-content",(function(){return[e("i",{staticClass:"i-shopping-bag mr-1"}),t._v(" "+t._s(t.strBuy)+" ")]}))],2)]}))],2)]:t._t("out-of-stock",(function(){return[e("p",{staticClass:"badge badge-dark mt-auto"},[t._v(" "+t._s(t.i19outOfStock)+" ")])]})):t._t("unavailable",(function(){return[e("p",{staticClass:"badge badge-warning mt-auto"},[t._v(" "+t._s(t.i19unavailable)+" ")])]})),t._t("favorite",(function(){return[e("a",{staticClass:"btn product-card__favorite fade",attrs:{href:t.isLogged?null:t.accountUrl,"aria-label":t.i19addToFavorites},on:{click:t.toggleFavorite}},[e("i",{staticClass:"i-heart mr-1",class:t.isFavorite?"active":null})])]})),t._t("footer",(function(){return[t.footerHtml?e("div",{domProps:{innerHTML:t._s(t.footerHtml)}}):t._e()]}))],2)]),t.isLoading?[t._t("default"),t.error?e("div",{staticClass:"alert alert-warning small",attrs:{role:"alert"}},[t._v(" "+t._s(t.error)+" ")]):t._e()]:t._e(),e("div",{ref:"quickview"})],2)},a=[function(){var t=this,i=t.$createElement;return(t._self._c||i)("div",{staticClass:"product-card__rating",attrs:{"data-sku":t.body.sku},domProps:{innerHTML:t._s(t.ratingHtml)}})}]},294:function(t,i,e){"use strict";e(124),e(2),e(17),e(11),e(238);var s=e(38),a=e(55),o=e(109),n=e(5),r=e(12),c=e(41),u=e(259);var l={name:"DiscountApplier",components:{AAlert:u.a},props:{amount:Object,couponCode:String,hasCouponInput:{type:Boolean,default:!0},isFormAlwaysVisible:Boolean,isCouponApplied:Boolean,isAttentionWanted:Boolean,canAddFreebieItems:{type:Boolean,default:!0},modulesPayload:Object,paymentGateway:Object,ecomCart:{type:Object,default:()=>r.a},customer:Object,canPassManyDiscountApps:Boolean,ecomPassport:{type:Object,default:()=>c.a}},data(){return{alertText:null,alertVariant:null,isFormVisible:this.isFormAlwaysVisible||this.couponCode,isLoading:!1,localCouponCode:this.couponCode,localAmountTotal:null,isUpdateSheduled:!1}},computed:{i19add$1ToGetDiscountMsg:()=>Object(a.a)({en_us:"Add more $1 to cart to get the discount.",pt_br:"Adicione mais $1 ao carrinho para ganhar o desconto."}),i19add:()=>Object(a.a)(s.i),i19addDiscountCoupon:()=>Object(a.a)(s.k),i19code:()=>Object(a.a)(s.R),i19couponAppliedMsg:()=>Object(a.a)(s.eb),i19discountCoupon:()=>Object(a.a)(s.jb),i19hasCouponOrVoucherQn:()=>Object(a.a)(s.Lb),i19invalidCouponMsg:()=>Object(a.a)(s.Xb),i19campaignAppliedMsg:()=>Object(a.a)(s.F),canAddCoupon(){return!this.couponCode||!this.isCouponApplied||this.couponCode!==this.localCouponCode},paymentGatewayDiscount(){if(!this.paymentGateway)return 0;const{discount:t}=this.paymentGateway;if(!t||!t.value)return 0;const i=t.apply_at||"total",e="total"===i?this.localAmountTotal:this.amount[i];if(e>0){const{type:i,value:s}=t;return"percentage"===i?e*s/100:s<=e?s:e}return 0}},methods:{fixAmount(){const t=this.amount||{subtotal:this.ecomCart.data.subtotal};this.localAmountTotal=Math.round(100*((t.subtotal||0)+(t.freight||0)-this.paymentGatewayDiscount))/100},parseDiscountOptions(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],i=0,e=!1;if(t.length){let s,a,r;t.forEach((t=>{const{validated:c,error:u,response:l}=t;if(c&&!u){const c=l.discount_rule;if(c)if(this.canPassManyDiscountApps)i?(c.extra_discount.value+=i,s=c):s={app_id:t.app_id,...c},i=c.extra_discount.value;else{const e=c.extra_discount.value;i>e||(i=e,s={app_id:t.app_id,...c})}else l.available_extra_discount&&l.available_extra_discount.min_amount&&(a=this.i19add$1ToGetDiscountMsg.replace("$1",Object(o.a)(l.available_extra_discount.min_amount-this.amount.subtotal)),r="info");if(l.invalid_coupon_message&&(a=l.invalid_coupon_message),this.canAddFreebieItems){const t=l.freebie_product_ids;Array.isArray(t)&&t.length&&(e=!0,d=this.ecomCart,p=t,Array.isArray(p)?(d.data.items.forEach((t=>{let{_id:i,product_id:e,flags:s}=t;s&&s.includes("freebie")&&!p.includes(e)&&d.removeItem(i)})),p.forEach((t=>{!d.data.items.find((i=>i.product_id===t&&i.flags&&i.flags.includes("freebie")))&&Object(n.g)({url:`/products/${t}.json`}).then((i=>{let{data:e}=i;!(e.quantity>0)||e.variations&&e.variations.length||d.addProduct({...e,flags:["freebie","__tmp"]},null,p.reduce(((i,e)=>e===t?i+1:i),0))})).catch(console.error)}))):d.data&&d.data.items&&d.data.items.length&&d.data.items.forEach((t=>{let{_id:i,flags:e}=t;e&&e.includes("freebie")&&d.removeItem(i)})),this.localCouponCode&&this.$emit("update:coupon-code",this.localCouponCode))}}var d,p})),i?(this.localCouponCode?a?(this.alertText=a,this.alertVariant=r||"warning"):(this.$emit("update:coupon-code",this.localCouponCode),this.alertText=this.i19couponAppliedMsg,this.alertVariant="info"):(this.alertText=this.i19campaignAppliedMsg,this.alertVariant="info"),this.$emit("set-discount-rule",s)):(this.localCouponCode&&!e?(this.alertText=a||this.i19invalidCouponMsg,this.alertVariant=r||"warning"):this.alertText=null,this.$emit("set-discount-rule",{}))}},fetchDiscountOptions(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.isLoading=!0;const i=this.customer||this.ecomPassport.getCustomer();i&&(i._id||i.doc_number)&&(t.customer={},i._id&&(t.customer._id=i._id),i.display_name&&(t.customer.display_name=i.display_name),i.doc_number&&(t.customer.doc_number=i.doc_number));const e={...this.modulesPayload,amount:{subtotal:this.localAmountTotal,...this.amount,total:this.localAmountTotal,discount:this.paymentGatewayDiscount},items:this.ecomCart.data.items,...t};e.domain&&(e.domain+=".skip-open"),Object(n.c)({url:"/apply_discount.json",method:"POST",data:e}).then((t=>{let{data:i}=t;return this.parseDiscountOptions(i.result)})).catch((t=>{console.error(t),this.alertVariant="danger",this.alertText=Object(a.a)(s.wb)})).finally((()=>{this.isLoading=!1}))},submitCoupon(t){if(t||this.canAddCoupon){const{localCouponCode:t}=this,i={discount_coupon:t};this.fetchDiscountOptions(i)}},updateDiscount(){let t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.couponCode?!t&&this.isCouponApplied||this.submitCoupon(t):(t||!this.isUpdateSheduled&&this.amount&&this.localAmountTotal)&&this.fetchDiscountOptions()},scheduleUpdateDiscount(){this.isUpdateSheduled||(this.isUpdateSheduled=!0,this.$nextTick((()=>{setTimeout((()=>{this.updateDiscount(),this.isUpdateSheduled=!1}),600)})))}},watch:{couponCode(t){t!==this.localCouponCode&&(this.localCouponCode=t,t&&!this.isFormVisible&&(this.isFormVisible=!0))},localCouponCode(){"info"===this.alertVariant&&(this.alertText=null)},isFormAlwaysVisible(t){t&&(this.isFormVisible=!0)},isFormVisible(t){t&&this.$nextTick((()=>{this.$refs.input.focus()}))},localAmountTotal(t,i){null!==i&&Math.abs(t-i)>.02&&this.scheduleUpdateDiscount()},amount:{handler(){this.fixAmount()},deep:!0},paymentGatewayDiscount(){this.scheduleUpdateDiscount()}},mounted(){this.fixAmount(),this.updateDiscount(!1)}};i.a=l}}]);