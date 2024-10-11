(()=>{var e={883:(e,t,a)=>{"use strict";var d=a(962),r=a(554),o=a(736),l=a(196);const s=window.wp.element,n=window.wp.data,c=window.wc.wcBlocksData,_=(window.wc.wcSettings,({checkoutData:e,shippingMethod:t,updateSession:a,setLoading:d})=>{const[i,_]=(0,s.useState)(""),[v,m]=(0,s.useState)(!0),[u,p]=(0,s.useState)((0,o.__)("Delivery Date","order-delivery-date")),{setExtensionData:h}=e,{setValidationErrors:y,clearValidationError:g}=(0,n.useDispatch)(c.VALIDATION_STORE_KEY),[w,b]=(0,s.useState)(!0),[f,E]=(0,s.useState)((0,o.__)("Choose a Date","order-delivery-date"));(0,s.useEffect)((()=>{b(orddd_lite_params.is_enable_delivery_date),p(orddd_lite_params.orddd_lite_delivery_date_field_label),_(localStorage.getItem("orddd_deliverydate_lite_session")),h("order-delivery-date","e_deliverydate",i),h("order-delivery-date","h_deliverydate",localStorage.getItem("h_deliverydate_lite_session")),m("checked"===orddd_lite_params.orddd_lite_date_field_mandatory),E(orddd_lite_params.orddd_lite_delivery_date_field_placeholder),w&&(jQuery(document).on("change","#orddd_lite_datepicker",(function(e){_(e.target.value),h("order-delivery-date","e_deliverydate",e.target.value),h("order-delivery-date","h_deliverydate",localStorage.getItem("h_deliverydate_lite_session")),d(!0),(0,r.extensionCartUpdate)({namespace:"order-delivery-date",data:{e_deliverydate:e.target.value,h_deliverydate:localStorage.getItem("h_deliverydate_lite_session")}}).then((()=>{d(!1)}))})),jQuery(document).on("orddd_lite_on_select_date",(function(e,t){_(t)})),jQuery(document).on("orddd_on_clear_text",(function(){d(!0),(0,r.extensionCartUpdate)({namespace:"order-delivery-date",data:{e_deliverydate:"",h_deliverydate:""}}).then((()=>{localStorage.setItem("h_deliverydate_lite_session",""),localStorage.setItem("orddd_deliverydate_lite_session",""),_(""),d(!1)}))})),v&&""===i?y({e_deliverydate:{message:(0,o.__)("Please select a delivery date","order-delivery-date"),hidden:!1}}):g("e_deliverydate"))}),[h,i,v,w,_,t,a,y,g]);const{validationError:k}=(0,n.useSelect)((e=>({validationError:e("wc/store/validation").getValidationError("e_deliverydate")}))),S=(0,s.useCallback)((e=>{_(e),h("order-delivery-date","e_deliverydate",e),h("order-delivery-date","h_deliverydate",localStorage.getItem("h_deliverydate_lite_session"))}),[_.setExtensionData]);return(0,l.createElement)("div",{style:{display:w?"block":"none"}},(0,l.createElement)(r.ValidatedTextInput,{id:"e_deliverydate",errorId:"e_deliverydate",type:"text",required:v,className:"orddd-datepicker",label:u,placeholder:f,value:i,onBlur:e=>_(e),onChange:S}),(0,l.createElement)("small",{class:"orddd_lite_field_note"},orddd_lite_params.orddd_lite_field_note))});var v=a(609),m=a(184),u=a.n(m);const p=({checkoutData:e,updateSession:t,setLoading:a})=>{const[d,_]=(0,s.useState)(!0),[m,p]=(0,s.useState)([]),[h,y]=(0,s.useState)(""),[g,w]=(0,s.useState)((0,o.__)("Time Slot","order-delivery-date")),{setExtensionData:b}=e,[f,E]=(0,s.useState)(!1),[k,S]=(0,s.useState)(!0),{setValidationErrors:x,clearValidationError:V}=(0,n.useDispatch)(c.VALIDATION_STORE_KEY),D="orddd_lite_time_slot",C=(0,o.__)("Please select a time slot","order-delivery-date");(0,s.useEffect)((()=>{if("on"!==orddd_lite_params.orddd_lite_enable_time_slot&&S(!1),!k)return;let e="undefined"!==localStorage.getItem("orddd_lite_time_slot")?localStorage.getItem("orddd_lite_time_slot"):"select";y(e),_("checked"===orddd_lite_params.orddd_lite_time_slot_mandatory),w(orddd_lite_params.orddd_lite_delivery_timeslot_field_label),b("order-delivery-date","orddd_lite_time_slot",h),b("order-delivery-date","time_slot_mandatory",d),b("order-delivery-date","time_field_label",g),jQuery(document).on("orddd_lite_on_load_time_slots",(function(e,t){let a=[],d=(localStorage.getItem("orddd_lite_time_slot"),orddd_lite_params.orddd_lite_auto_populate_first_available_time_slot),r=t.split("/");for(i=0;i<r.length;i++){let e=r[i].split("_");"select"==e[0].replace(/\s/g,"")?a.push({label:jsL10n.selectText,value:"select"}):"asap"==e[0]?a.push({label:jsL10n.asapText,value:e[0]}):a.push({label:e[1],value:e[0]}),1===i&&"on"===d&&(y(e[1]),I(e[0]))}p(a)})),!d||h?V(D):x({[D]:{message:C,hidden:!0}}),V(D)}),[b,k,p,y,t,E,x,V]);const I=(0,s.useCallback)((e=>{y(e),localStorage.setItem("orddd_lite_time_slot",e),b("order-delivery-date","orddd_lite_time_slot",e),a(!0),(0,r.extensionCartUpdate)({namespace:"order-delivery-date",data:{orddd_lite_time_slot:e,h_deliverydate:localStorage.getItem("h_deliverydate_lite_session")}}).then((()=>{a(!1)}))}),[y,b]),j=(0,n.useSelect)((e=>e(c.VALIDATION_STORE_KEY).getValidationError(D)));return k?(0,l.createElement)("div",{id:"orddd_lite_time_slot",className:u()("wc-block-components-combobox",{"is-active":h,"has-error":j?.message&&!j?.hidden})},(0,l.createElement)(v.ComboboxControl,{className:"wc-block-components-combobox-control",label:g,onChange:I,onFilterValueChange:()=>null,options:m,value:h||"",allowReset:!1,"aria-invalid":j?.message&&!j?.hidden}),(0,l.createElement)(r.ValidationInputError,{propertyName:D})):null},h=()=>(0,l.createElement)("span",{className:"wc-block-components-spinner","aria-hidden":"true"}),y=({children:e,className:t,screenReaderLabel:a,showSpinner:d=!1,isLoading:r=!0})=>(0,l.createElement)("div",{className:u()(t,{"wc-block-components-loading-mask":r})},r&&d&&(0,l.createElement)(h,null),(0,l.createElement)("div",{className:u()({"wc-block-components-loading-mask__children":r}),"aria-hidden":r},e),r&&(0,l.createElement)("span",{className:"screen-reader-text"},a||__("Loading…","woo-gutenberg-products-block"))),{registerCheckoutBlock:g}=wc.blocksCheckout;wcSettings.shippingEnabled&&!wcSettings.forcedBillingAddress?d.parent=["woocommerce/checkout-shipping-address-block"]:d.parent=["woocommerce/checkout-billing-address-block"],g({metadata:d,component:({children:e,checkoutExtensionData:t})=>{const[a,d]=(0,s.useState)(!0),{setExtensionData:r}=t,[i,n]=(0,s.useState)(""),[c,v]=(0,s.useState)(!1);(0,s.useEffect)((()=>{jQuery(document).ready((function(){jQuery("#e_deliverydate").val("").datepicker({dateFormat:orddd_lite_params.orddd_lite_delivery_date_format,firstDay:parseInt(orddd_lite_params.orddd_first_day_of_week),beforeShow:avd,beforeShowDay:chd,showButtonPanel:!0,closeText:jsL10n.clearText,onSelect:orddd_on_select_date,onClose:function(e,t){if(""!=e){t.selectedMonth;t.selectedDay,t.selectedYear}jQuery("#e_deliverydate").blur()}}).focus((function(e){jQuery(this).trigger("blur"),jQuery.datepicker.afterShow(e)})),window.onload=load_lite_functions()}))}),[]);const m=e=>{v(e)};return(0,l.createElement)(y,{isLoading:c,screenReaderLabel:(0,o.__)("Loading delivery date�","order-delivery-date"),showSpinner:!0},(0,l.createElement)("div",{className:"orddd-lite-checkout-fields"},(0,l.createElement)(_,{checkoutData:t,updateSession:i,setLoading:m}),(0,l.createElement)(p,{checkoutData:t,updateSession:i,setLoading:m}),(0,l.createElement)("input",{type:"hidden",id:"h_deliverydate",name:"h_deliverydate",value:""})))}})},823:(e,t,a)=>{"use strict";var d=a(196);const r=window.wp.blocks;var o=a(609);a(736);const l=window.wp.blockEditor;var i=a(554),s=a(962);wcSettings.shippingEnabled?s.parent=["woocommerce/checkout-shipping-address-block"]:s.parent=["woocommerce/checkout-billing-address-block"],(0,r.registerBlockType)(s,{icon:{src:(0,d.createElement)(o.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 16"},(0,d.createElement)("g",null,(0,d.createElement)("g",null,(0,d.createElement)("path",{fill:"#010002",d:"M7.685,24.819H8.28v-2.131h3.688v2.131h0.596v-2.131h3.862v2.131h0.597v-2.131h4.109v2.131h0.595 v-2.131h3.417v-0.594h-3.417v-3.861h3.417v-0.596h-3.417v-3.519h3.417v-0.594h-3.417v-2.377h-0.595v2.377h-4.109v-2.377h-0.597 v2.377h-3.862v-2.377h-0.596v2.377H8.279v-2.377H7.685v2.377H3.747v0.594h3.938v3.519H3.747v0.596h3.938v3.861H3.747v0.594h3.938 V24.819z M12.563,22.094v-3.861h3.862v3.861H12.563z M21.132,22.094h-4.109v-3.861h4.109V22.094z M21.132,14.118v3.519h-4.109 v-3.519C17.023,14.119,21.132,14.119,21.132,14.118z M16.426,14.118v3.519h-3.862v-3.519 C12.564,14.119,16.426,14.119,16.426,14.118z M8.279,14.118h3.688v3.519H8.279V14.118z M8.279,18.233h3.688v3.861H8.279V18.233z"}),(0,d.createElement)("path",{fill:"#010002",d:"M29.207,2.504l-4.129,0.004L24.475,2.51v2.448c0,0.653-0.534,1.187-1.188,1.187h-1.388 c-0.656,0-1.188-0.533-1.188-1.187V2.514l-1.583,0.002v2.442c0,0.653-0.535,1.187-1.191,1.187h-1.388 c-0.655,0-1.188-0.533-1.188-1.187V2.517l-1.682,0.004v2.438c0,0.653-0.534,1.187-1.189,1.187h-1.389 c-0.653,0-1.188-0.533-1.188-1.187V2.525H8.181v2.434c0,0.653-0.533,1.187-1.188,1.187H5.605c-0.656,0-1.189-0.533-1.189-1.187 V2.53L0,2.534v26.153h2.09h25.06l2.087-0.006L29.207,2.504z M27.15,26.606H2.09V9.897h25.06V26.606z"}),(0,d.createElement)("path",{fill:"#010002",d:"M5.605,5.303h1.388c0.163,0,0.296-0.133,0.296-0.297v-4.16c0-0.165-0.133-0.297-0.296-0.297H5.605 c-0.165,0-0.298,0.132-0.298,0.297v4.16C5.307,5.17,5.44,5.303,5.605,5.303z"}),(0,d.createElement)("path",{fill:"#010002",d:"M11.101,5.303h1.389c0.164,0,0.297-0.133,0.297-0.297v-4.16c-0.001-0.165-0.134-0.297-0.298-0.297 H11.1c-0.163,0-0.296,0.132-0.296,0.297v4.16C10.805,5.17,10.938,5.303,11.101,5.303z"}),(0,d.createElement)("path",{fill:"#010002",d:"M16.549,5.303h1.388c0.166,0,0.299-0.133,0.299-0.297v-4.16c-0.001-0.165-0.133-0.297-0.299-0.297 h-1.388c-0.164,0-0.297,0.132-0.297,0.297v4.16C16.252,5.17,16.385,5.303,16.549,5.303z"}),(0,d.createElement)("path",{fill:"#010002",d:"M21.899,5.303h1.388c0.164,0,0.296-0.133,0.296-0.297v-4.16c0-0.165-0.132-0.297-0.296-0.297 h-1.388c-0.164,0-0.297,0.132-0.297,0.297v4.16C21.603,5.17,21.735,5.303,21.899,5.303z"})))),foreground:"#874FB9"},edit:({attributes:e,setAttributes:t})=>{const a=(0,l.useBlockProps)();return(0,d.createElement)("div",{...a},(0,d.createElement)("div",{className:"orddd-datepicker-fields"},(0,d.createElement)(i.ValidatedTextInput,{id:"e_deliverydate",type:"text",required:!1,className:"orddd-datepicker",label:"Delivery Date",value:""}),(0,d.createElement)("div",{id:"orddd_lite_time_slot",className:"wc-block-components-combobox"},(0,d.createElement)(o.ComboboxControl,{className:"wc-block-components-combobox-control",label:"Time Slot",onFilterValueChange:()=>null,options:[],value:"",allowReset:!1}))))}})},184:(e,t)=>{var a;!function(){"use strict";var d={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)&&a.length){var l=r.apply(null,a);l&&e.push(l)}else if("object"===o)for(var i in a)d.call(a,i)&&a[i]&&e.push(i)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},196:e=>{"use strict";e.exports=window.React},554:e=>{"use strict";e.exports=window.wc.blocksCheckout},609:e=>{"use strict";e.exports=window.wp.components},736:e=>{"use strict";e.exports=window.wp.i18n},962:e=>{"use strict";e.exports=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"order-delivery-date/delivery-date","version":"1.0.1","title":"Order Delivery Date","category":"woocommerce","parent":["woocommerce/checkout-shipping-address-block"],"attributes":{"lock":{"type":"object","default":{"remove":true,"move":true}}},"textdomain":"order-delivery-date","editorScript":"file:./build/index.js"}')}},t={};function a(d){var r=t[d];if(void 0!==r)return r.exports;var o=t[d]={exports:{}};return e[d](o,o.exports,a),o.exports}a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var d in t)a.o(t,d)&&!a.o(e,d)&&Object.defineProperty(e,d,{enumerable:!0,get:t[d]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";a(823),a(883)})()})();