"use strict";(self.webpackChunktypescript=self.webpackChunktypescript||[]).push([[7],{"./src/shared/ui/Modal/Modal.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Dark:()=>Dark,Light:()=>Light,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var shared_config_storybook_ThemeDecorator_ThemeDecorator__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/shared/config/storybook/ThemeDecorator/ThemeDecorator.tsx"),app_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/app/providers/ThemeProvider/index.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"shared/Modal",component:__webpack_require__("./src/shared/ui/Modal/Modal.tsx").a},Light={args:{isOpen:!0,children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat est reiciendis asperiores modi veniam quam voluptates itaque! Autem tempora ad accusamus reiciendis, iusto, consequatur, odio voluptatem consequuntur voluptas sit id."}},Dark={args:{isOpen:!0,children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat est reiciendis asperiores modi veniam quam voluptates itaque! Autem tempora ad accusamus reiciendis, iusto, consequatur, odio voluptatem consequuntur voluptas sit id."}};Dark.decorators=[(0,shared_config_storybook_ThemeDecorator_ThemeDecorator__WEBPACK_IMPORTED_MODULE_0__.n)(app_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_1__.Sx.DARK)];const __namedExportsOrder=["Light","Dark"];Light.parameters={...Light.parameters,docs:{...Light.parameters?.docs,source:{originalSource:"{}",...Light.parameters?.docs?.source}}},Dark.parameters={...Dark.parameters,docs:{...Dark.parameters?.docs,source:{originalSource:"{}",...Dark.parameters?.docs?.source}}}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Modal/Modal.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".src-shared-ui-Modal-Modal-module__Modal--ESw4g{position:fixed;top:0;right:0;left:0;bottom:0;opacity:0;pointer-events:none;z-index:-1;color:var(--primary-color)}.src-shared-ui-Modal-Modal-module__overlay--OTlZW{width:100%;height:100%;background:var(--overlay-color);display:flex;align-items:center;justify-content:center}.src-shared-ui-Modal-Modal-module__content--NxhSG{padding:20px;background:var(--bg-color);border-radius:12px;transition:.3s transform;transform:scale(0.5);max-width:60%}.src-shared-ui-Modal-Modal-module__opened--RuLiu{pointer-events:auto;opacity:1;z-index:var(--modal-z-index)}.src-shared-ui-Modal-Modal-module__opened--RuLiu .src-shared-ui-Modal-Modal-module__content--NxhSG{transform:scale(1)}.src-shared-ui-Modal-Modal-module__isClosing--xbkvH .src-shared-ui-Modal-Modal-module__content--NxhSG{transform:scale(0.2)}","",{version:3,sources:["webpack://./src/shared/ui/Modal/Modal.module.scss"],names:[],mappings:"AAAA,gDACA,cAAA,CACA,KAAA,CACA,OAAA,CACA,MAAA,CACA,QAAA,CACA,SAAA,CACA,mBAAA,CACA,UAAA,CACA,0BAAA,CAGA,kDACI,UAAA,CACA,WAAA,CACA,+BAAA,CACA,YAAA,CACA,kBAAA,CACA,sBAAA,CAGJ,kDACI,YAAA,CACA,0BAAA,CACA,kBAAA,CAEA,wBAAA,CACA,oBAAA,CACA,aAAA,CAGJ,iDACI,mBAAA,CACA,SAAA,CACA,4BAAA,CAEA,mGACI,kBAAA,CAOJ,sGACI,oBAAA",sourcesContent:[".Modal {\r\nposition: fixed;\r\ntop: 0;\r\nright: 0;\r\nleft: 0;\r\nbottom: 0;\r\nopacity: 0;\r\npointer-events: none;\r\nz-index: -1;\r\ncolor: var(--primary-color);\r\n}\r\n\r\n.overlay {\r\n    width: 100%;\r\n    height: 100%;\r\n    background: var(--overlay-color);\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.content {\r\n    padding: 20px;\r\n    background: var(--bg-color);\r\n    border-radius: 12px;\r\n\r\n    transition: 0.3s transform;\r\n    transform: scale(0.5);\r\n    max-width: 60%;\r\n} \r\n\r\n.opened {\r\n    pointer-events: auto;\r\n    opacity: 1;\r\n    z-index: var(--modal-z-index);\r\n\r\n    .content {\r\n        transform: scale(1);\r\n        }\r\n\r\n\r\n}\r\n\r\n.isClosing {\r\n    .content {\r\n        transform: scale(0.2 );\r\n    }\r\n}"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={Modal:"src-shared-ui-Modal-Modal-module__Modal--ESw4g",overlay:"src-shared-ui-Modal-Modal-module__overlay--OTlZW",content:"src-shared-ui-Modal-Modal-module__content--NxhSG",opened:"src-shared-ui-Modal-Modal-module__opened--RuLiu",isClosing:"src-shared-ui-Modal-Modal-module__isClosing--xbkvH"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/shared/lib/classNames/classNames.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function classNames(cls,mods={},aditional=[]){return[cls,...aditional.filter(Boolean),...Object.entries(mods).filter((([className,value])=>Boolean(value))).map((([className])=>className))].join(" ")}__webpack_require__.d(__webpack_exports__,{x:()=>classNames})},"./src/shared/ui/Modal/Modal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>Modal});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),classNames=__webpack_require__("./src/shared/lib/classNames/classNames.ts"),react=__webpack_require__("./node_modules/react/index.js"),ThemeProvider=__webpack_require__("./src/app/providers/ThemeProvider/index.ts"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Modal_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Modal/Modal.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Modal_module.A,options);const Modal_Modal_module=Modal_module.A&&Modal_module.A.locals?Modal_module.A.locals:void 0;var react_dom=__webpack_require__("./node_modules/react-dom/index.js");const Portal=props=>{const{children,element=document.body}=props;return(0,react_dom.createPortal)(children,element)},Modal=props=>{const{className,children,isOpen,onClose,lazy}=props,[isClosing,setIsClosing]=(0,react.useState)(!1),[isMounted,setIsMounted]=(0,react.useState)(!1),timerRef=(0,react.useRef)(),{theme}=(0,ThemeProvider.DP)(),closeHandler=(0,react.useCallback)((()=>{onClose&&(setIsClosing(!0),timerRef.current=setTimeout((()=>{onClose(),setIsClosing(!1)}),300))}),[onClose]);(0,react.useEffect)((()=>{isOpen&&setIsMounted(!0)}),[isOpen]);const onKeyDown=(0,react.useCallback)((e=>{"Escape"===e.key&&closeHandler()}),[closeHandler]);(0,react.useEffect)((()=>(isOpen&&window.addEventListener("keydown",onKeyDown),()=>{clearTimeout(timerRef.current),window.removeEventListener("keydown",onKeyDown)})),[isOpen,onKeyDown]);const mods={[Modal_Modal_module.opened]:isOpen,[Modal_Modal_module.isClosing]:isClosing};return lazy&&!isMounted?null:(0,jsx_runtime.jsx)(Portal,{children:(0,jsx_runtime.jsx)("div",{className:(0,classNames.x)(Modal_Modal_module.Modal,mods,[className,theme,"app_modal"]),children:(0,jsx_runtime.jsx)("div",{className:Modal_Modal_module.overlay,onClick:closeHandler,children:(0,jsx_runtime.jsx)("div",{className:(0,classNames.x)(Modal_Modal_module.content),onClick:e=>{e.stopPropagation()},children})})})})};Modal.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{className:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""},isOpen:{required:!1,tsType:{name:"boolean"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},lazy:{required:!1,tsType:{name:"boolean"},description:""}}}}}]);