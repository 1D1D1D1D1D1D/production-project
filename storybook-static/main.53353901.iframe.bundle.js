(self.webpackChunktypescript=self.webpackChunktypescript||[]).push([[792],{"./node_modules/@storybook/instrumenter/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/instrumenter/dist sync recursive",module.exports=webpackEmptyContext},"./storybook-config-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";var external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("storybook/internal/preview-api"),external_STORYBOOK_MODULE_CHANNELS_=__webpack_require__("storybook/internal/channels");const importers=[async path=>{if(!/^\.[\\/](?:src(?:[\\/](?!\.)(?:(?:(?!(?:^|[\\/])\.).)*?)[\\/]|[\\/]|$)(?!\.)(?=.)[^\\/]*?\.stories\.(ts|tsx))$/.exec(path))return;const pathRemainder=path.substring(6);return __webpack_require__("./src lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:[\\\\/]src(?:[\\\\/](?%21\\.)(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/]%7C[\\\\/]%7C$)(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(ts%7Ctsx))$")("./"+pathRemainder)}];const channel=(0,external_STORYBOOK_MODULE_CHANNELS_.createBrowserChannel)({page:"preview"});external_STORYBOOK_MODULE_PREVIEW_API_.addons.setChannel(channel),"DEVELOPMENT"===external_STORYBOOK_MODULE_GLOBAL_.global.CONFIG_TYPE&&(window.__STORYBOOK_SERVER_CHANNEL__=channel);const preview=new external_STORYBOOK_MODULE_PREVIEW_API_.PreviewWeb((async function importFn(path){for(let i=0;i<importers.length;i++){const moduleExports=await(x=()=>importers[i](path),x());if(moduleExports)return moduleExports}var x}),(()=>(0,external_STORYBOOK_MODULE_PREVIEW_API_.composeConfigs)([__webpack_require__("./node_modules/@storybook/react/dist/entry-preview.mjs"),__webpack_require__("./node_modules/@storybook/react/dist/entry-preview-docs.mjs"),__webpack_require__("./node_modules/@storybook/addon-links/dist/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/docs/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/actions/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/backgrounds/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/viewport/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/measure/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/outline/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/highlight/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-interactions/dist/preview.mjs"),__webpack_require__("./config/storybook/preview.tsx")])));window.__STORYBOOK_PREVIEW__=preview,window.__STORYBOOK_STORY_STORE__=preview.storyStore,window.__STORYBOOK_ADDONS_CHANNEL__=channel},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/app/styles/index.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'*{margin:0;padding:0;box-sizing:border-box}input,button,textarea,select{margin:0;font:inherit}:root{--font-family-main: consolas, "Times New Roman", serif;--font-size-m: 16px;--font-line-m: 24px;--font-m: var(--font-size-m) / var(--font-line-m) var(--font-family-main);--font-size-l: 24px;--font-line-l: 32px;--font-l: var(--font-size-l) / var(--font-line-l) var(--font-family-main);--font-size-xl: 32px;--font-line-xl: 40px;--font-xl: var(--font-size-xl) / var(--font-line-xl) var(--font-family-main);--navbar-height: 50px;--sidebar-width: 300px;--sidebar-width-collapsed: 80px;--modal-z-index: 10;--overlay-color: rgba(0 0 0 / 60%);--red-light: #ff0000;--red-dark: #ce0505}:root{--bg-color: #e8e8ea;--inverted-bg-color: #090949;--primary-color: #0232c2;--secondary-color: #0449e0;--inverted-primary-color: #04ff04;--inverted-secondary-color: #049604}.app_dark_theme{--bg-color: #090949;--inverted-bg-color: #e8e8ea;--primary-color: #04ff04;--secondary-color: #049604;--inverted-primary-color: #0232c2;--inverted-secondary-color: #0452ff}body{font:var(--font-m);color:var(--primary-color)}.app{background:var(--bg-color);min-height:100vh}.content-page{display:flex}.page-wrapper{flex-grow:1;padding:20px;color:var(--primary-color)}',"",{version:3,sources:["webpack://./src/app/styles/reset.scss","webpack://./src/app/styles/variables/global.scss","webpack://./src/app/styles/themes/normal.scss","webpack://./src/app/styles/themes/dark.scss","webpack://./src/app/styles/index.scss"],names:[],mappings:"AAAA,EACI,QAAA,CACA,SAAA,CACA,qBAAA,CAGJ,6BAII,QAAA,CACA,YAAA,CCXJ,MACI,sDAAA,CACA,mBAAA,CACA,mBAAA,CACA,yEAAA,CACA,mBAAA,CACA,mBAAA,CACA,yEAAA,CACA,oBAAA,CACA,oBAAA,CACA,4EAAA,CAGA,qBAAA,CACA,sBAAA,CACA,+BAAA,CAEA,mBAAA,CAGA,kCAAA,CACA,oBAAA,CACA,mBAAA,CCtBJ,MACI,mBAAA,CACA,4BAAA,CACA,wBAAA,CACA,0BAAA,CACA,iCAAA,CACA,mCAAA,CCNJ,gBACI,mBAAA,CACA,4BAAA,CACA,wBAAA,CACA,0BAAA,CACA,iCAAA,CACA,mCAAA,CCDJ,KACI,kBAAA,CACA,0BAAA,CAEJ,KACI,0BAAA,CACA,gBAAA,CAGJ,cACI,YAAA,CAGJ,cACI,WAAA,CACA,YAAA,CACA,0BAAA",sourcesContent:["* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\ninput,\r\nbutton,\r\ntextarea,\r\nselect {\r\n    margin: 0;\r\n    font: inherit;\r\n}\r\n",':root {\r\n    --font-family-main: consolas, "Times New Roman", serif;\r\n    --font-size-m: 16px;\r\n    --font-line-m: 24px;\r\n    --font-m: var(--font-size-m) / var(--font-line-m) var(--font-family-main);\r\n    --font-size-l: 24px;\r\n    --font-line-l: 32px;\r\n    --font-l: var(--font-size-l) / var(--font-line-l) var(--font-family-main);\r\n    --font-size-xl: 32px;\r\n    --font-line-xl: 40px;\r\n    --font-xl: var(--font-size-xl) / var(--font-line-xl) var(--font-family-main);\r\n\r\n\r\n    --navbar-height: 50px;\r\n    --sidebar-width: 300px;\r\n    --sidebar-width-collapsed: 80px;\r\n\r\n    --modal-z-index: 10;\r\n\r\n\r\n    --overlay-color: rgba(0 0 0 / 60%);\r\n    --red-light: #ff0000;\r\n    --red-dark: #ce0505;\r\n}',":root {\r\n    --bg-color: #e8e8ea;\r\n    --inverted-bg-color: #090949;\r\n    --primary-color: #0232c2;\r\n    --secondary-color: #0449e0;\r\n    --inverted-primary-color: #04ff04;\r\n    --inverted-secondary-color: #049604;\r\n}\r\n",".app_dark_theme {\r\n    --bg-color: #090949;\r\n    --inverted-bg-color: #e8e8ea;\r\n    --primary-color: #04ff04;\r\n    --secondary-color: #049604;\r\n    --inverted-primary-color: #0232c2;\r\n    --inverted-secondary-color: #0452ff;\r\n}\r\n",'@import "reset";\r\n@import "variables/global";\r\n@import "themes/normal";\r\n@import "themes/dark";\r\n\r\nbody {\r\n    font: var(--font-m);\r\n    color: var(--primary-color);\r\n}\r\n.app {\r\n    background: var(--bg-color);\r\n    min-height: 100vh;\r\n}\r\n\r\n.content-page {\r\n    display: flex;\r\n}\r\n\r\n.page-wrapper {\r\n    flex-grow: 1;\r\n    padding: 20px;\r\n    color: var(--primary-color);\r\n}\r\n'],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./config/storybook/preview.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>storybook_preview});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),styles=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/app/styles/index.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(styles.A,options);styles.A&&styles.A.locals&&styles.A.locals;const StyleDecorator=Story=>(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(Story,{})});StyleDecorator.__docgenInfo={description:"",methods:[],displayName:"StyleDecorator"};var ThemeProvider=__webpack_require__("./src/app/providers/ThemeProvider/index.ts"),dist=__webpack_require__("./node_modules/react-router-dom/dist/index.js");const RouteDecorator=Story=>(0,jsx_runtime.jsx)(dist.Kd,{children:(0,jsx_runtime.jsx)(Story,{})});RouteDecorator.__docgenInfo={description:"",methods:[],displayName:"RouteDecorator"};var ThemeDecorator=__webpack_require__("./src/shared/config/storybook/ThemeDecorator/ThemeDecorator.tsx");const storybook_preview={parameters:{controls:{matchers:{color:/(background|color)$/i,date:/Date$/i}}},decorators:[Story=>(0,jsx_runtime.jsx)("div",{children:Story(StyleDecorator)}),Story=>(0,jsx_runtime.jsx)("div",{children:(0,ThemeDecorator.n)(ThemeProvider.Sx.LIGHT)(Story)}),Story=>(0,jsx_runtime.jsx)("div",{children:RouteDecorator(Story)})]}},"./src/app/providers/ThemeProvider/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Sx:()=>Theme,NP:()=>ui_ThemeProvider,DP:()=>useTheme});var Theme,react=__webpack_require__("./node_modules/react/index.js");!function(Theme){Theme.LIGHT="app_light_theme",Theme.DARK="app_dark_theme"}(Theme||(Theme={}));const ThemeContext=(0,react.createContext)({}),LOCAL_STORAGE_THEME_KEY="theme";function useTheme(){const{theme,setTheme}=(0,react.useContext)(ThemeContext);return{theme:theme||Theme.LIGHT,toggleTheme:()=>{const newTheme=theme===Theme.DARK?Theme.LIGHT:Theme.DARK;setTheme?.(newTheme),localStorage.setItem(LOCAL_STORAGE_THEME_KEY,newTheme)}}}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const defaultTheme=localStorage.getItem(LOCAL_STORAGE_THEME_KEY)||Theme.LIGHT,ThemeProvider=props=>{const{children,initialTheme}=props,[theme,setTheme]=(0,react.useState)(initialTheme||defaultTheme),defaultProps=(0,react.useMemo)((()=>({theme,setTheme})),[theme]);return(0,jsx_runtime.jsx)(ThemeContext.Provider,{value:defaultProps,children})},ui_ThemeProvider=ThemeProvider;ThemeProvider.__docgenInfo={description:"",methods:[],displayName:"ThemeProvider",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},initialTheme:{required:!1,tsType:{name:"Theme"},description:""}}}},"./src/shared/config/storybook/ThemeDecorator/ThemeDecorator.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{n:()=>ThemeDecorator});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),app_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/app/providers/ThemeProvider/index.ts");const ThemeDecorator=theme=>Story=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_1__.NP,{initialTheme:theme,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:`app ${theme}`,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Story,{})})})},"./src lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:[\\\\/]src(?:[\\\\/](?%21\\.)(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/]%7C[\\\\/]%7C$)(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(ts%7Ctsx))$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./entities/Profile/ui/ProfileCard/ProfileCard.stories":["./src/entities/Profile/ui/ProfileCard/ProfileCard.stories.tsx",365,408,985],"./entities/Profile/ui/ProfileCard/ProfileCard.stories.tsx":["./src/entities/Profile/ui/ProfileCard/ProfileCard.stories.tsx",365,408,985],"./features/AuthByUsername/ui/LoginForm/LoginForm.stories":["./src/features/AuthByUsername/ui/LoginForm/LoginForm.stories.tsx",365,153,950,408,502,573],"./features/AuthByUsername/ui/LoginForm/LoginForm.stories.tsx":["./src/features/AuthByUsername/ui/LoginForm/LoginForm.stories.tsx",365,153,950,408,502,573],"./pages/AboutPage/ui/AboutPage.stories":["./src/pages/AboutPage/ui/AboutPage.stories.tsx",365,14],"./pages/AboutPage/ui/AboutPage.stories.tsx":["./src/pages/AboutPage/ui/AboutPage.stories.tsx",365,14],"./pages/MainPage/ui/MainPage.stories":["./src/pages/MainPage/ui/MainPage.stories.tsx",365,38],"./pages/MainPage/ui/MainPage.stories.tsx":["./src/pages/MainPage/ui/MainPage.stories.tsx",365,38],"./pages/NotFoundPage/ui/NotFoundPage.stories":["./src/pages/NotFoundPage/ui/NotFoundPage.stories.tsx",365,466],"./pages/NotFoundPage/ui/NotFoundPage.stories.tsx":["./src/pages/NotFoundPage/ui/NotFoundPage.stories.tsx",365,466],"./pages/ProfilePage/ui/ProfilePage.stories":["./src/pages/ProfilePage/ui/ProfilePage.stories.tsx",365,153,950,408,502,914],"./pages/ProfilePage/ui/ProfilePage.stories.tsx":["./src/pages/ProfilePage/ui/ProfilePage.stories.tsx",365,153,950,408,502,914],"./pages/ProfilePage/ui/ProfilePageHeader/ProfilePageHeader.stories":["./src/pages/ProfilePage/ui/ProfilePageHeader/ProfilePageHeader.stories.tsx",365,153,950,408,502,491],"./pages/ProfilePage/ui/ProfilePageHeader/ProfilePageHeader.stories.tsx":["./src/pages/ProfilePage/ui/ProfilePageHeader/ProfilePageHeader.stories.tsx",365,153,950,408,502,491],"./shared/ui/AppLink/AppLink.stories":["./src/shared/ui/AppLink/AppLink.stories.tsx",739],"./shared/ui/AppLink/AppLink.stories.tsx":["./src/shared/ui/AppLink/AppLink.stories.tsx",739],"./shared/ui/Avatar/Avatar.stories":["./src/shared/ui/Avatar/Avatar.stories.tsx",279],"./shared/ui/Avatar/Avatar.stories.tsx":["./src/shared/ui/Avatar/Avatar.stories.tsx",279],"./shared/ui/Button/Button.stories":["./src/shared/ui/Button/Button.stories.tsx",425],"./shared/ui/Button/Button.stories.tsx":["./src/shared/ui/Button/Button.stories.tsx",425],"./shared/ui/Input/Input.stories":["./src/shared/ui/Input/Input.stories.tsx",467],"./shared/ui/Input/Input.stories.tsx":["./src/shared/ui/Input/Input.stories.tsx",467],"./shared/ui/Loader/Loader.stories":["./src/shared/ui/Loader/Loader.stories.tsx",495],"./shared/ui/Loader/Loader.stories.tsx":["./src/shared/ui/Loader/Loader.stories.tsx",495],"./shared/ui/Modal/Modal.stories":["./src/shared/ui/Modal/Modal.stories.tsx",7],"./shared/ui/Modal/Modal.stories.tsx":["./src/shared/ui/Modal/Modal.stories.tsx",7],"./shared/ui/Select/Select.stories":["./src/shared/ui/Select/Select.stories.tsx",125],"./shared/ui/Select/Select.stories.tsx":["./src/shared/ui/Select/Select.stories.tsx",125],"./shared/ui/Text/Text.stories":["./src/shared/ui/Text/Text.stories.tsx",223],"./shared/ui/Text/Text.stories.tsx":["./src/shared/ui/Text/Text.stories.tsx",223],"./widgets/LanguageSwitcher/LanguageSwitcher.stories":["./src/widgets/LanguageSwitcher/LanguageSwitcher.stories.tsx",365,250],"./widgets/LanguageSwitcher/LanguageSwitcher.stories.tsx":["./src/widgets/LanguageSwitcher/LanguageSwitcher.stories.tsx",365,250],"./widgets/PageError/ui/PageError.stories":["./src/widgets/PageError/ui/PageError.stories.tsx",365,445],"./widgets/PageError/ui/PageError.stories.tsx":["./src/widgets/PageError/ui/PageError.stories.tsx",365,445],"./widgets/PageLoader/ui/PageLoader.stories":["./src/widgets/PageLoader/ui/PageLoader.stories.tsx",195],"./widgets/PageLoader/ui/PageLoader.stories.tsx":["./src/widgets/PageLoader/ui/PageLoader.stories.tsx",195],"./widgets/Sidebar/ui/Sidebar/Sidebar.stories":["./src/widgets/Sidebar/ui/Sidebar/Sidebar.stories.tsx",365,153,248],"./widgets/Sidebar/ui/Sidebar/Sidebar.stories.tsx":["./src/widgets/Sidebar/ui/Sidebar/Sidebar.stories.tsx",365,153,248],"./widgets/ThemeSwitcher/ui/ThemeSwitcher.stories":["./src/widgets/ThemeSwitcher/ui/ThemeSwitcher.stories.tsx",411],"./widgets/ThemeSwitcher/ui/ThemeSwitcher.stories.tsx":["./src/widgets/ThemeSwitcher/ui/ThemeSwitcher.stories.tsx",411],"./widgets/navbar/ui/Navbar.stories":["./src/widgets/navbar/ui/Navbar.stories.tsx",365,153,950,408,502,631],"./widgets/navbar/ui/Navbar.stories.tsx":["./src/widgets/navbar/ui/Navbar.stories.tsx",365,153,950,408,502,631]};function webpackAsyncContext(req){if(!__webpack_require__.o(map,req))return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}));var ids=map[req],id=ids[0];return Promise.all(ids.slice(1).map(__webpack_require__.e)).then((()=>__webpack_require__(id)))}webpackAsyncContext.keys=()=>Object.keys(map),webpackAsyncContext.id="./src lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:[\\\\/]src(?:[\\\\/](?%21\\.)(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/]%7C[\\\\/]%7C$)(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(ts%7Ctsx))$",module.exports=webpackAsyncContext},"storybook/internal/channels":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CHANNELS__},"storybook/internal/client-logger":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CLIENT_LOGGER__},"storybook/internal/preview-errors":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__},"storybook/internal/core-events":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CORE_EVENTS__},"@storybook/global":module=>{"use strict";module.exports=__STORYBOOK_MODULE_GLOBAL__},"storybook/internal/preview-api":module=>{"use strict";module.exports=__STORYBOOK_MODULE_PREVIEW_API__}},__webpack_require__=>{__webpack_require__.O(0,[447],(()=>{return moduleId="./storybook-config-entry.js",__webpack_require__(__webpack_require__.s=moduleId);var moduleId}));__webpack_require__.O()}]);