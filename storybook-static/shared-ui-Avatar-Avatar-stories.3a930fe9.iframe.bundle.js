"use strict";(self.webpackChunktypescript=self.webpackChunktypescript||[]).push([[279],{"./src/shared/ui/Avatar/Avatar.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,Rounded:()=>Rounded,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"shared/Avatar",component:__webpack_require__("./src/shared/ui/Avatar/Avatar.tsx").e},Primary={args:{height:350,width:300,src:"https://static29.tgcnt.ru/posts/_0/43/435320ad49357bcf742cdd6cc18fd28c.jpg"}},Rounded={args:{height:300,width:300,round:!0,src:"https://static29.tgcnt.ru/posts/_0/43/435320ad49357bcf742cdd6cc18fd28c.jpg"}},__namedExportsOrder=["Primary","Rounded"];Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{}",...Primary.parameters?.docs?.source}}},Rounded.parameters={...Rounded.parameters,docs:{...Rounded.parameters?.docs,source:{originalSource:"{}",...Rounded.parameters?.docs?.source}}}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Avatar/Avatar.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".src-shared-ui-Avatar-Avatar-module__round--Rq6zv{border-radius:50%}","",{version:3,sources:["webpack://./src/shared/ui/Avatar/Avatar.module.scss"],names:[],mappings:"AAAA,kDACI,iBAAA",sourcesContent:[".round {\r\n    border-radius: 50%;\r\n}"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={round:"src-shared-ui-Avatar-Avatar-module__round--Rq6zv"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/shared/lib/classNames/classNames.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function classNames(cls,mods={},aditional=[]){return[cls,...aditional.filter(Boolean),...Object.entries(mods).filter((([className,value])=>Boolean(value))).map((([className])=>className))].join(" ")}__webpack_require__.d(__webpack_exports__,{x:()=>classNames})},"./src/shared/ui/Avatar/Avatar.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>Avatar});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),classNames=__webpack_require__("./src/shared/lib/classNames/classNames.ts"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Avatar_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Avatar/Avatar.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Avatar_module.A,options);const Avatar_Avatar_module=Avatar_module.A&&Avatar_module.A.locals?Avatar_module.A.locals:void 0;var react=__webpack_require__("./node_modules/react/index.js");const Avatar=props=>{const{className,src,width,height,alt,round=!1}=props,styles=(0,react.useMemo)((()=>({width,height})),[width,height]),mods={[Avatar_Avatar_module.round]:round};return(0,jsx_runtime.jsx)("img",{src,alt,style:styles,className:(0,classNames.x)(Avatar_Avatar_module.Avatar,mods,[className])})};Avatar.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{className:{required:!1,tsType:{name:"string"},description:""},src:{required:!1,tsType:{name:"string"},description:""},width:{required:!1,tsType:{name:"number"},description:""},height:{required:!1,tsType:{name:"number"},description:""},round:{required:!1,tsType:{name:"boolean"},description:""},alt:{required:!1,tsType:{name:"string"},description:""}}}}}]);