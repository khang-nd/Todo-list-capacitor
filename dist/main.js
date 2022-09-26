/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@capacitor/core/dist/index.js":
/*!****************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Capacitor\": () => (/* binding */ Capacitor),\n/* harmony export */   \"CapacitorCookies\": () => (/* binding */ CapacitorCookies),\n/* harmony export */   \"CapacitorException\": () => (/* binding */ CapacitorException),\n/* harmony export */   \"CapacitorHttp\": () => (/* binding */ CapacitorHttp),\n/* harmony export */   \"CapacitorPlatforms\": () => (/* binding */ CapacitorPlatforms),\n/* harmony export */   \"ExceptionCode\": () => (/* binding */ ExceptionCode),\n/* harmony export */   \"Plugins\": () => (/* binding */ Plugins),\n/* harmony export */   \"WebPlugin\": () => (/* binding */ WebPlugin),\n/* harmony export */   \"WebView\": () => (/* binding */ WebView),\n/* harmony export */   \"addPlatform\": () => (/* binding */ addPlatform),\n/* harmony export */   \"registerPlugin\": () => (/* binding */ registerPlugin),\n/* harmony export */   \"registerWebPlugin\": () => (/* binding */ registerWebPlugin),\n/* harmony export */   \"setPlatform\": () => (/* binding */ setPlatform)\n/* harmony export */ });\n/*! Capacitor: https://capacitorjs.com/ - MIT License */\nconst createCapacitorPlatforms = (win) => {\n    const defaultPlatformMap = new Map();\n    defaultPlatformMap.set('web', { name: 'web' });\n    const capPlatforms = win.CapacitorPlatforms || {\n        currentPlatform: { name: 'web' },\n        platforms: defaultPlatformMap,\n    };\n    const addPlatform = (name, platform) => {\n        capPlatforms.platforms.set(name, platform);\n    };\n    const setPlatform = (name) => {\n        if (capPlatforms.platforms.has(name)) {\n            capPlatforms.currentPlatform = capPlatforms.platforms.get(name);\n        }\n    };\n    capPlatforms.addPlatform = addPlatform;\n    capPlatforms.setPlatform = setPlatform;\n    return capPlatforms;\n};\nconst initPlatforms = (win) => (win.CapacitorPlatforms = createCapacitorPlatforms(win));\n/**\n * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead\n */\nconst CapacitorPlatforms = /*#__PURE__*/ initPlatforms((typeof globalThis !== 'undefined'\n    ? globalThis\n    : typeof self !== 'undefined'\n        ? self\n        : typeof window !== 'undefined'\n            ? window\n            : typeof __webpack_require__.g !== 'undefined'\n                ? __webpack_require__.g\n                : {}));\n/**\n * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead\n */\nconst addPlatform = CapacitorPlatforms.addPlatform;\n/**\n * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead\n */\nconst setPlatform = CapacitorPlatforms.setPlatform;\n\nconst legacyRegisterWebPlugin = (cap, webPlugin) => {\n    var _a;\n    const config = webPlugin.config;\n    const Plugins = cap.Plugins;\n    if (!config || !config.name) {\n        // TODO: add link to upgrade guide\n        throw new Error(`Capacitor WebPlugin is using the deprecated \"registerWebPlugin()\" function, but without the config. Please use \"registerPlugin()\" instead to register this web plugin.\"`);\n    }\n    // TODO: add link to upgrade guide\n    console.warn(`Capacitor plugin \"${config.name}\" is using the deprecated \"registerWebPlugin()\" function`);\n    if (!Plugins[config.name] || ((_a = config === null || config === void 0 ? void 0 : config.platforms) === null || _a === void 0 ? void 0 : _a.includes(cap.getPlatform()))) {\n        // Add the web plugin into the plugins registry if there already isn't\n        // an existing one. If it doesn't already exist, that means\n        // there's no existing native implementation for it.\n        // - OR -\n        // If we already have a plugin registered (meaning it was defined in the native layer),\n        // then we should only overwrite it if the corresponding web plugin activates on\n        // a certain platform. For example: Geolocation uses the WebPlugin on Android but not iOS\n        Plugins[config.name] = webPlugin;\n    }\n};\n\nvar ExceptionCode;\n(function (ExceptionCode) {\n    /**\n     * API is not implemented.\n     *\n     * This usually means the API can't be used because it is not implemented for\n     * the current platform.\n     */\n    ExceptionCode[\"Unimplemented\"] = \"UNIMPLEMENTED\";\n    /**\n     * API is not available.\n     *\n     * This means the API can't be used right now because:\n     *   - it is currently missing a prerequisite, such as network connectivity\n     *   - it requires a particular platform or browser version\n     */\n    ExceptionCode[\"Unavailable\"] = \"UNAVAILABLE\";\n})(ExceptionCode || (ExceptionCode = {}));\nclass CapacitorException extends Error {\n    constructor(message, code, data) {\n        super(message);\n        this.message = message;\n        this.code = code;\n        this.data = data;\n    }\n}\nconst getPlatformId = (win) => {\n    var _a, _b;\n    if (win === null || win === void 0 ? void 0 : win.androidBridge) {\n        return 'android';\n    }\n    else if ((_b = (_a = win === null || win === void 0 ? void 0 : win.webkit) === null || _a === void 0 ? void 0 : _a.messageHandlers) === null || _b === void 0 ? void 0 : _b.bridge) {\n        return 'ios';\n    }\n    else {\n        return 'web';\n    }\n};\n\nconst createCapacitor = (win) => {\n    var _a, _b, _c, _d, _e;\n    const capCustomPlatform = win.CapacitorCustomPlatform || null;\n    const cap = win.Capacitor || {};\n    const Plugins = (cap.Plugins = cap.Plugins || {});\n    /**\n     * @deprecated Use `capCustomPlatform` instead, default functions like registerPlugin will function with the new object.\n     */\n    const capPlatforms = win.CapacitorPlatforms;\n    const defaultGetPlatform = () => {\n        return capCustomPlatform !== null\n            ? capCustomPlatform.name\n            : getPlatformId(win);\n    };\n    const getPlatform = ((_a = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _a === void 0 ? void 0 : _a.getPlatform) || defaultGetPlatform;\n    const defaultIsNativePlatform = () => getPlatform() !== 'web';\n    const isNativePlatform = ((_b = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _b === void 0 ? void 0 : _b.isNativePlatform) || defaultIsNativePlatform;\n    const defaultIsPluginAvailable = (pluginName) => {\n        const plugin = registeredPlugins.get(pluginName);\n        if (plugin === null || plugin === void 0 ? void 0 : plugin.platforms.has(getPlatform())) {\n            // JS implementation available for the current platform.\n            return true;\n        }\n        if (getPluginHeader(pluginName)) {\n            // Native implementation available.\n            return true;\n        }\n        return false;\n    };\n    const isPluginAvailable = ((_c = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _c === void 0 ? void 0 : _c.isPluginAvailable) ||\n        defaultIsPluginAvailable;\n    const defaultGetPluginHeader = (pluginName) => { var _a; return (_a = cap.PluginHeaders) === null || _a === void 0 ? void 0 : _a.find(h => h.name === pluginName); };\n    const getPluginHeader = ((_d = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _d === void 0 ? void 0 : _d.getPluginHeader) || defaultGetPluginHeader;\n    const handleError = (err) => win.console.error(err);\n    const pluginMethodNoop = (_target, prop, pluginName) => {\n        return Promise.reject(`${pluginName} does not have an implementation of \"${prop}\".`);\n    };\n    const registeredPlugins = new Map();\n    const defaultRegisterPlugin = (pluginName, jsImplementations = {}) => {\n        const registeredPlugin = registeredPlugins.get(pluginName);\n        if (registeredPlugin) {\n            console.warn(`Capacitor plugin \"${pluginName}\" already registered. Cannot register plugins twice.`);\n            return registeredPlugin.proxy;\n        }\n        const platform = getPlatform();\n        const pluginHeader = getPluginHeader(pluginName);\n        let jsImplementation;\n        const loadPluginImplementation = async () => {\n            if (!jsImplementation && platform in jsImplementations) {\n                jsImplementation =\n                    typeof jsImplementations[platform] === 'function'\n                        ? (jsImplementation = await jsImplementations[platform]())\n                        : (jsImplementation = jsImplementations[platform]);\n            }\n            else if (capCustomPlatform !== null &&\n                !jsImplementation &&\n                'web' in jsImplementations) {\n                jsImplementation =\n                    typeof jsImplementations['web'] === 'function'\n                        ? (jsImplementation = await jsImplementations['web']())\n                        : (jsImplementation = jsImplementations['web']);\n            }\n            return jsImplementation;\n        };\n        const createPluginMethod = (impl, prop) => {\n            var _a, _b;\n            if (pluginHeader) {\n                const methodHeader = pluginHeader === null || pluginHeader === void 0 ? void 0 : pluginHeader.methods.find(m => prop === m.name);\n                if (methodHeader) {\n                    if (methodHeader.rtype === 'promise') {\n                        return (options) => cap.nativePromise(pluginName, prop.toString(), options);\n                    }\n                    else {\n                        return (options, callback) => cap.nativeCallback(pluginName, prop.toString(), options, callback);\n                    }\n                }\n                else if (impl) {\n                    return (_a = impl[prop]) === null || _a === void 0 ? void 0 : _a.bind(impl);\n                }\n            }\n            else if (impl) {\n                return (_b = impl[prop]) === null || _b === void 0 ? void 0 : _b.bind(impl);\n            }\n            else {\n                throw new CapacitorException(`\"${pluginName}\" plugin is not implemented on ${platform}`, ExceptionCode.Unimplemented);\n            }\n        };\n        const createPluginMethodWrapper = (prop) => {\n            let remove;\n            const wrapper = (...args) => {\n                const p = loadPluginImplementation().then(impl => {\n                    const fn = createPluginMethod(impl, prop);\n                    if (fn) {\n                        const p = fn(...args);\n                        remove = p === null || p === void 0 ? void 0 : p.remove;\n                        return p;\n                    }\n                    else {\n                        throw new CapacitorException(`\"${pluginName}.${prop}()\" is not implemented on ${platform}`, ExceptionCode.Unimplemented);\n                    }\n                });\n                if (prop === 'addListener') {\n                    p.remove = async () => remove();\n                }\n                return p;\n            };\n            // Some flair ✨\n            wrapper.toString = () => `${prop.toString()}() { [capacitor code] }`;\n            Object.defineProperty(wrapper, 'name', {\n                value: prop,\n                writable: false,\n                configurable: false,\n            });\n            return wrapper;\n        };\n        const addListener = createPluginMethodWrapper('addListener');\n        const removeListener = createPluginMethodWrapper('removeListener');\n        const addListenerNative = (eventName, callback) => {\n            const call = addListener({ eventName }, callback);\n            const remove = async () => {\n                const callbackId = await call;\n                removeListener({\n                    eventName,\n                    callbackId,\n                }, callback);\n            };\n            const p = new Promise(resolve => call.then(() => resolve({ remove })));\n            p.remove = async () => {\n                console.warn(`Using addListener() without 'await' is deprecated.`);\n                await remove();\n            };\n            return p;\n        };\n        const proxy = new Proxy({}, {\n            get(_, prop) {\n                switch (prop) {\n                    // https://github.com/facebook/react/issues/20030\n                    case '$$typeof':\n                        return undefined;\n                    case 'toJSON':\n                        return () => ({});\n                    case 'addListener':\n                        return pluginHeader ? addListenerNative : addListener;\n                    case 'removeListener':\n                        return removeListener;\n                    default:\n                        return createPluginMethodWrapper(prop);\n                }\n            },\n        });\n        Plugins[pluginName] = proxy;\n        registeredPlugins.set(pluginName, {\n            name: pluginName,\n            proxy,\n            platforms: new Set([\n                ...Object.keys(jsImplementations),\n                ...(pluginHeader ? [platform] : []),\n            ]),\n        });\n        return proxy;\n    };\n    const registerPlugin = ((_e = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _e === void 0 ? void 0 : _e.registerPlugin) || defaultRegisterPlugin;\n    // Add in convertFileSrc for web, it will already be available in native context\n    if (!cap.convertFileSrc) {\n        cap.convertFileSrc = filePath => filePath;\n    }\n    cap.getPlatform = getPlatform;\n    cap.handleError = handleError;\n    cap.isNativePlatform = isNativePlatform;\n    cap.isPluginAvailable = isPluginAvailable;\n    cap.pluginMethodNoop = pluginMethodNoop;\n    cap.registerPlugin = registerPlugin;\n    cap.Exception = CapacitorException;\n    cap.DEBUG = !!cap.DEBUG;\n    cap.isLoggingEnabled = !!cap.isLoggingEnabled;\n    // Deprecated props\n    cap.platform = cap.getPlatform();\n    cap.isNative = cap.isNativePlatform();\n    return cap;\n};\nconst initCapacitorGlobal = (win) => (win.Capacitor = createCapacitor(win));\n\nconst Capacitor = /*#__PURE__*/ initCapacitorGlobal(typeof globalThis !== 'undefined'\n    ? globalThis\n    : typeof self !== 'undefined'\n        ? self\n        : typeof window !== 'undefined'\n            ? window\n            : typeof __webpack_require__.g !== 'undefined'\n                ? __webpack_require__.g\n                : {});\nconst registerPlugin = Capacitor.registerPlugin;\n/**\n * @deprecated Provided for backwards compatibility for Capacitor v2 plugins.\n * Capacitor v3 plugins should import the plugin directly. This \"Plugins\"\n * export is deprecated in v3, and will be removed in v4.\n */\nconst Plugins = Capacitor.Plugins;\n/**\n * Provided for backwards compatibility. Use the registerPlugin() API\n * instead, and provide the web plugin as the \"web\" implmenetation.\n * For example\n *\n * export const Example = registerPlugin('Example', {\n *   web: () => import('./web').then(m => new m.Example())\n * })\n *\n * @deprecated Deprecated in v3, will be removed from v4.\n */\nconst registerWebPlugin = (plugin) => legacyRegisterWebPlugin(Capacitor, plugin);\n\n/**\n * Base class web plugins should extend.\n */\nclass WebPlugin {\n    constructor(config) {\n        this.listeners = {};\n        this.windowListeners = {};\n        if (config) {\n            // TODO: add link to upgrade guide\n            console.warn(`Capacitor WebPlugin \"${config.name}\" config object was deprecated in v3 and will be removed in v4.`);\n            this.config = config;\n        }\n    }\n    addListener(eventName, listenerFunc) {\n        const listeners = this.listeners[eventName];\n        if (!listeners) {\n            this.listeners[eventName] = [];\n        }\n        this.listeners[eventName].push(listenerFunc);\n        // If we haven't added a window listener for this event and it requires one,\n        // go ahead and add it\n        const windowListener = this.windowListeners[eventName];\n        if (windowListener && !windowListener.registered) {\n            this.addWindowListener(windowListener);\n        }\n        const remove = async () => this.removeListener(eventName, listenerFunc);\n        const p = Promise.resolve({ remove });\n        Object.defineProperty(p, 'remove', {\n            value: async () => {\n                console.warn(`Using addListener() without 'await' is deprecated.`);\n                await remove();\n            },\n        });\n        return p;\n    }\n    async removeAllListeners() {\n        this.listeners = {};\n        for (const listener in this.windowListeners) {\n            this.removeWindowListener(this.windowListeners[listener]);\n        }\n        this.windowListeners = {};\n    }\n    notifyListeners(eventName, data) {\n        const listeners = this.listeners[eventName];\n        if (listeners) {\n            listeners.forEach(listener => listener(data));\n        }\n    }\n    hasListeners(eventName) {\n        return !!this.listeners[eventName].length;\n    }\n    registerWindowListener(windowEventName, pluginEventName) {\n        this.windowListeners[pluginEventName] = {\n            registered: false,\n            windowEventName,\n            pluginEventName,\n            handler: event => {\n                this.notifyListeners(pluginEventName, event);\n            },\n        };\n    }\n    unimplemented(msg = 'not implemented') {\n        return new Capacitor.Exception(msg, ExceptionCode.Unimplemented);\n    }\n    unavailable(msg = 'not available') {\n        return new Capacitor.Exception(msg, ExceptionCode.Unavailable);\n    }\n    async removeListener(eventName, listenerFunc) {\n        const listeners = this.listeners[eventName];\n        if (!listeners) {\n            return;\n        }\n        const index = listeners.indexOf(listenerFunc);\n        this.listeners[eventName].splice(index, 1);\n        // If there are no more listeners for this type of event,\n        // remove the window listener\n        if (!this.listeners[eventName].length) {\n            this.removeWindowListener(this.windowListeners[eventName]);\n        }\n    }\n    addWindowListener(handle) {\n        window.addEventListener(handle.windowEventName, handle.handler);\n        handle.registered = true;\n    }\n    removeWindowListener(handle) {\n        if (!handle) {\n            return;\n        }\n        window.removeEventListener(handle.windowEventName, handle.handler);\n        handle.registered = false;\n    }\n}\n\nconst WebView = /*#__PURE__*/ registerPlugin('WebView');\n/******** END WEB VIEW PLUGIN ********/\n/******** COOKIES PLUGIN ********/\n/**\n * Safely web encode a string value (inspired by js-cookie)\n * @param str The string value to encode\n */\nconst encode = (str) => encodeURIComponent(str)\n    .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)\n    .replace(/[()]/g, escape);\nclass CapacitorCookiesPluginWeb extends WebPlugin {\n    async setCookie(options) {\n        try {\n            // Safely Encoded Key/Value\n            const encodedKey = encode(options.key);\n            const encodedValue = encode(options.value);\n            // Clean & sanitize options\n            const expires = `; expires=${(options.expires || '').replace('expires=', '')}`; // Default is \"; expires=\"\n            const path = (options.path || '/').replace('path=', ''); // Default is \"path=/\"\n            document.cookie = `${encodedKey}=${encodedValue || ''}${expires}; path=${path}`;\n        }\n        catch (error) {\n            return Promise.reject(error);\n        }\n    }\n    async deleteCookie(options) {\n        try {\n            document.cookie = `${options.key}=; Max-Age=0`;\n        }\n        catch (error) {\n            return Promise.reject(error);\n        }\n    }\n    async clearCookies() {\n        try {\n            const cookies = document.cookie.split(';') || [];\n            for (const cookie of cookies) {\n                document.cookie = cookie\n                    .replace(/^ +/, '')\n                    .replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`);\n            }\n        }\n        catch (error) {\n            return Promise.reject(error);\n        }\n    }\n    async clearAllCookies() {\n        try {\n            await this.clearCookies();\n        }\n        catch (error) {\n            return Promise.reject(error);\n        }\n    }\n}\nconst CapacitorCookies = registerPlugin('CapacitorCookies', {\n    web: () => new CapacitorCookiesPluginWeb(),\n});\n// UTILITY FUNCTIONS\n/**\n * Read in a Blob value and return it as a base64 string\n * @param blob The blob value to convert to a base64 string\n */\nconst readBlobAsBase64 = async (blob) => new Promise((resolve, reject) => {\n    const reader = new FileReader();\n    reader.onload = () => {\n        const base64String = reader.result;\n        // remove prefix \"data:application/pdf;base64,\"\n        resolve(base64String.indexOf(',') >= 0\n            ? base64String.split(',')[1]\n            : base64String);\n    };\n    reader.onerror = (error) => reject(error);\n    reader.readAsDataURL(blob);\n});\n/**\n * Normalize an HttpHeaders map by lowercasing all of the values\n * @param headers The HttpHeaders object to normalize\n */\nconst normalizeHttpHeaders = (headers = {}) => {\n    const originalKeys = Object.keys(headers);\n    const loweredKeys = Object.keys(headers).map(k => k.toLocaleLowerCase());\n    const normalized = loweredKeys.reduce((acc, key, index) => {\n        acc[key] = headers[originalKeys[index]];\n        return acc;\n    }, {});\n    return normalized;\n};\n/**\n * Builds a string of url parameters that\n * @param params A map of url parameters\n * @param shouldEncode true if you should encodeURIComponent() the values (true by default)\n */\nconst buildUrlParams = (params, shouldEncode = true) => {\n    if (!params)\n        return null;\n    const output = Object.entries(params).reduce((accumulator, entry) => {\n        const [key, value] = entry;\n        let encodedValue;\n        let item;\n        if (Array.isArray(value)) {\n            item = '';\n            value.forEach(str => {\n                encodedValue = shouldEncode ? encodeURIComponent(str) : str;\n                item += `${key}=${encodedValue}&`;\n            });\n            // last character will always be \"&\" so slice it off\n            item.slice(0, -1);\n        }\n        else {\n            encodedValue = shouldEncode ? encodeURIComponent(value) : value;\n            item = `${key}=${encodedValue}`;\n        }\n        return `${accumulator}&${item}`;\n    }, '');\n    // Remove initial \"&\" from the reduce\n    return output.substr(1);\n};\n/**\n * Build the RequestInit object based on the options passed into the initial request\n * @param options The Http plugin options\n * @param extra Any extra RequestInit values\n */\nconst buildRequestInit = (options, extra = {}) => {\n    const output = Object.assign({ method: options.method || 'GET', headers: options.headers }, extra);\n    // Get the content-type\n    const headers = normalizeHttpHeaders(options.headers);\n    const type = headers['content-type'] || '';\n    // If body is already a string, then pass it through as-is.\n    if (typeof options.data === 'string') {\n        output.body = options.data;\n    }\n    // Build request initializers based off of content-type\n    else if (type.includes('application/x-www-form-urlencoded')) {\n        const params = new URLSearchParams();\n        for (const [key, value] of Object.entries(options.data || {})) {\n            params.set(key, value);\n        }\n        output.body = params.toString();\n    }\n    else if (type.includes('multipart/form-data')) {\n        const form = new FormData();\n        if (options.data instanceof FormData) {\n            options.data.forEach((value, key) => {\n                form.append(key, value);\n            });\n        }\n        else {\n            for (const key of Object.keys(options.data)) {\n                form.append(key, options.data[key]);\n            }\n        }\n        output.body = form;\n        const headers = new Headers(output.headers);\n        headers.delete('content-type'); // content-type will be set by `window.fetch` to includy boundary\n        output.headers = headers;\n    }\n    else if (type.includes('application/json') ||\n        typeof options.data === 'object') {\n        output.body = JSON.stringify(options.data);\n    }\n    return output;\n};\n// WEB IMPLEMENTATION\nclass CapacitorHttpPluginWeb extends WebPlugin {\n    /**\n     * Perform an Http request given a set of options\n     * @param options Options to build the HTTP request\n     */\n    async request(options) {\n        const requestInit = buildRequestInit(options, options.webFetchExtra);\n        const urlParams = buildUrlParams(options.params, options.shouldEncodeUrlParams);\n        const url = urlParams ? `${options.url}?${urlParams}` : options.url;\n        const response = await fetch(url, requestInit);\n        const contentType = response.headers.get('content-type') || '';\n        // Default to 'text' responseType so no parsing happens\n        let { responseType = 'text' } = response.ok ? options : {};\n        // If the response content-type is json, force the response to be json\n        if (contentType.includes('application/json')) {\n            responseType = 'json';\n        }\n        let data;\n        let blob;\n        switch (responseType) {\n            case 'arraybuffer':\n            case 'blob':\n                blob = await response.blob();\n                data = await readBlobAsBase64(blob);\n                break;\n            case 'json':\n                data = await response.json();\n                break;\n            case 'document':\n            case 'text':\n            default:\n                data = await response.text();\n        }\n        // Convert fetch headers to Capacitor HttpHeaders\n        const headers = {};\n        response.headers.forEach((value, key) => {\n            headers[key] = value;\n        });\n        return {\n            data,\n            headers,\n            status: response.status,\n            url: response.url,\n        };\n    }\n    /**\n     * Perform an Http GET request given a set of options\n     * @param options Options to build the HTTP request\n     */\n    async get(options) {\n        return this.request(Object.assign(Object.assign({}, options), { method: 'GET' }));\n    }\n    /**\n     * Perform an Http POST request given a set of options\n     * @param options Options to build the HTTP request\n     */\n    async post(options) {\n        return this.request(Object.assign(Object.assign({}, options), { method: 'POST' }));\n    }\n    /**\n     * Perform an Http PUT request given a set of options\n     * @param options Options to build the HTTP request\n     */\n    async put(options) {\n        return this.request(Object.assign(Object.assign({}, options), { method: 'PUT' }));\n    }\n    /**\n     * Perform an Http PATCH request given a set of options\n     * @param options Options to build the HTTP request\n     */\n    async patch(options) {\n        return this.request(Object.assign(Object.assign({}, options), { method: 'PATCH' }));\n    }\n    /**\n     * Perform an Http DELETE request given a set of options\n     * @param options Options to build the HTTP request\n     */\n    async delete(options) {\n        return this.request(Object.assign(Object.assign({}, options), { method: 'DELETE' }));\n    }\n}\nconst CapacitorHttp = registerPlugin('CapacitorHttp', {\n    web: () => new CapacitorHttpPluginWeb(),\n});\n/******** END HTTP PLUGIN ********/\n\n\n//# sourceMappingURL=index.js.map\n\n\n//# sourceURL=webpack://webpack-setup/./node_modules/@capacitor/core/dist/index.js?");

/***/ }),

/***/ "./node_modules/@capacitor/haptics/dist/esm/definitions.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@capacitor/haptics/dist/esm/definitions.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"HapticsImpactStyle\": () => (/* binding */ HapticsImpactStyle),\n/* harmony export */   \"HapticsNotificationType\": () => (/* binding */ HapticsNotificationType),\n/* harmony export */   \"ImpactStyle\": () => (/* binding */ ImpactStyle),\n/* harmony export */   \"NotificationType\": () => (/* binding */ NotificationType)\n/* harmony export */ });\nvar ImpactStyle;\n(function (ImpactStyle) {\n    /**\n     * A collision between large, heavy user interface elements\n     *\n     * @since 1.0.0\n     */\n    ImpactStyle[\"Heavy\"] = \"HEAVY\";\n    /**\n     * A collision between moderately sized user interface elements\n     *\n     * @since 1.0.0\n     */\n    ImpactStyle[\"Medium\"] = \"MEDIUM\";\n    /**\n     * A collision between small, light user interface elements\n     *\n     * @since 1.0.0\n     */\n    ImpactStyle[\"Light\"] = \"LIGHT\";\n})(ImpactStyle || (ImpactStyle = {}));\nvar NotificationType;\n(function (NotificationType) {\n    /**\n     * A notification feedback type indicating that a task has completed successfully\n     *\n     * @since 1.0.0\n     */\n    NotificationType[\"Success\"] = \"SUCCESS\";\n    /**\n     * A notification feedback type indicating that a task has produced a warning\n     *\n     * @since 1.0.0\n     */\n    NotificationType[\"Warning\"] = \"WARNING\";\n    /**\n     * A notification feedback type indicating that a task has failed\n     *\n     * @since 1.0.0\n     */\n    NotificationType[\"Error\"] = \"ERROR\";\n})(NotificationType || (NotificationType = {}));\n/**\n * @deprecated Use `NotificationType`.\n * @since 1.0.0\n */\nconst HapticsNotificationType = NotificationType;\n/**\n * @deprecated Use `ImpactStyle`.\n * @since 1.0.0\n */\nconst HapticsImpactStyle = ImpactStyle;\n//# sourceMappingURL=definitions.js.map\n\n//# sourceURL=webpack://webpack-setup/./node_modules/@capacitor/haptics/dist/esm/definitions.js?");

/***/ }),

/***/ "./node_modules/@capacitor/haptics/dist/esm/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@capacitor/haptics/dist/esm/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Haptics\": () => (/* binding */ Haptics),\n/* harmony export */   \"HapticsImpactStyle\": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.HapticsImpactStyle),\n/* harmony export */   \"HapticsNotificationType\": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.HapticsNotificationType),\n/* harmony export */   \"ImpactStyle\": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.ImpactStyle),\n/* harmony export */   \"NotificationType\": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.NotificationType)\n/* harmony export */ });\n/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ \"./node_modules/@capacitor/core/dist/index.js\");\n/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ \"./node_modules/@capacitor/haptics/dist/esm/definitions.js\");\n\nconst Haptics = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Haptics', {\n    web: () => __webpack_require__.e(/*! import() */ \"node_modules_capacitor_haptics_dist_esm_web_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ \"./node_modules/@capacitor/haptics/dist/esm/web.js\")).then(m => new m.HapticsWeb()),\n});\n\n\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack://webpack-setup/./node_modules/@capacitor/haptics/dist/esm/index.js?");

/***/ }),

/***/ "./node_modules/@capacitor/toast/dist/esm/definitions.js":
/*!***************************************************************!*\
  !*** ./node_modules/@capacitor/toast/dist/esm/definitions.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\n//# sourceMappingURL=definitions.js.map\n\n//# sourceURL=webpack://webpack-setup/./node_modules/@capacitor/toast/dist/esm/definitions.js?");

/***/ }),

/***/ "./node_modules/@capacitor/toast/dist/esm/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/@capacitor/toast/dist/esm/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Toast\": () => (/* binding */ Toast)\n/* harmony export */ });\n/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ \"./node_modules/@capacitor/core/dist/index.js\");\n/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ \"./node_modules/@capacitor/toast/dist/esm/definitions.js\");\n\nconst Toast = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Toast', {\n    web: () => __webpack_require__.e(/*! import() */ \"node_modules_capacitor_toast_dist_esm_web_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ \"./node_modules/@capacitor/toast/dist/esm/web.js\")).then(m => new m.ToastWeb()),\n});\n\n\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack://webpack-setup/./node_modules/@capacitor/toast/dist/esm/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _tasks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks.js */ \"./src/tasks.js\");\n/* harmony import */ var _status_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./status.js */ \"./src/status.js\");\n\n\n\nvar tasks = new _tasks_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\nvar status = new _status_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](); // populate the todo list from storage\n\ntasks.populateList(); // add new task\n\nvar newInput = document.querySelector('#new-task');\nnewInput.addEventListener('keypress', function (e) {\n  if (e.key === 'Enter' && newInput.value) {\n    tasks.add(newInput.value);\n    newInput.value = '';\n  }\n}); // refresh the list\n\nvar refreshBtn = document.querySelector('#refresh-list');\nrefreshBtn.addEventListener('click', function () {\n  document.location.reload();\n}); // clear complated\n\nstatus.clearCompleted(tasks);\n\n//# sourceURL=webpack://webpack-setup/./src/index.js?");

/***/ }),

/***/ "./src/status.js":
/*!***********************!*\
  !*** ./src/status.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Status)\n/* harmony export */ });\n/* harmony import */ var _capacitor_haptics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/haptics */ \"./node_modules/@capacitor/haptics/dist/esm/index.js\");\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar Status = /*#__PURE__*/_createClass(function Status() {\n  _classCallCheck(this, Status);\n\n  _defineProperty(this, \"completeTask\", function (array) {\n    var todoTask = document.querySelectorAll('.todo-task');\n    var checkboxes = document.querySelectorAll('.check-task');\n    checkboxes.forEach(function (checkbox, index) {\n      checkbox.addEventListener('click', function () {\n        todoTask[index].classList.toggle('active');\n        array[index].isCompleted = !array[index].isCompleted;\n        localStorage.setItem('tasks', JSON.stringify(array));\n        var todoInput = document.querySelectorAll('.todo-input');\n\n        if (todoTask[index].classList.contains('active')) {\n          todoInput[index].setAttribute('readOnly', true);\n          _capacitor_haptics__WEBPACK_IMPORTED_MODULE_0__.Haptics.vibrate();\n        } else {\n          todoInput[index].removeAttribute('readOnly');\n        }\n      });\n    });\n  });\n\n  _defineProperty(this, \"clearCompleted\", function (tasks) {\n    var clearBtn = document.querySelector('#clear-completed');\n    clearBtn.addEventListener('click', function () {\n      tasks.tasksArray = tasks.tasksArray.filter(function (item) {\n        return item.isCompleted === false;\n      });\n      tasks.saveAndRender();\n    });\n  });\n});\n\n\n\n//# sourceURL=webpack://webpack-setup/./src/status.js?");

/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Tasks)\n/* harmony export */ });\n/* harmony import */ var _capacitor_toast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/toast */ \"./node_modules/@capacitor/toast/dist/esm/index.js\");\n/* harmony import */ var _status_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./status.js */ \"./src/status.js\");\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar status = new _status_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n\nvar Tasks = /*#__PURE__*/_createClass(function Tasks() {\n  var _this = this;\n\n  _classCallCheck(this, Tasks);\n\n  _defineProperty(this, \"saveAndRender\", function () {\n    localStorage.setItem('tasks', JSON.stringify(_this.tasksArray));\n\n    _this.populateList();\n  });\n\n  _defineProperty(this, \"populateList\", function () {\n    // display items\n    var todoContainer = document.querySelector('#todo-list');\n    todoContainer.innerHTML = '';\n\n    _this.tasksArray.forEach(function (task) {\n      var li = document.createElement('li');\n      li.className = 'todo-task';\n      li.id = task.index;\n      li.innerHTML = \"<div><button class=\\\"check-task\\\"><i class=\\\"fa-regular fa-square\\\"></i> <i class=\\\"fa-solid fa-check\\\"></i></button> <input class=\\\"todo-input\\\" type=\\\"text\\\" value=\\\"\".concat(task.description, \"\\\"></div><button class=\\\"delete-task\\\"><i class=\\\"fa-solid fa-trash-can\\\"></i></button>\");\n      todoContainer.insertBefore(li, todoContainer.children[task.index]);\n\n      if (task.isCompleted) {\n        li.classList.add('active');\n      }\n    }); // delete item\n\n\n    var deleteBtn = document.querySelectorAll('.delete-task');\n    deleteBtn.forEach(function (button, index) {\n      button.addEventListener('click', function () {\n        _this.remove(index);\n      });\n    }); // focus item\n\n    var editInput = document.querySelectorAll('.todo-input');\n    var todoTask = document.querySelectorAll('.todo-task');\n    editInput.forEach(function (input, index) {\n      input.addEventListener('focus', function () {\n        if (!_this.tasksArray[index].isCompleted) {\n          todoTask[index].classList.add('focus');\n        }\n      });\n      input.addEventListener('focusout', function () {\n        todoTask[index].classList.remove('focus');\n      });\n    }); // edit item\n\n    editInput.forEach(function (input, index) {\n      input.addEventListener('keypress', function (e) {\n        if (e.key === 'Enter' && input.value) {\n          _this.update(input.value, index);\n        }\n      });\n      input.addEventListener('change', function () {\n        if (input.value) {\n          _this.update(input.value, index);\n        }\n      });\n    }); // complete task and update status\n\n    status.completeTask(_this.tasksArray);\n  });\n\n  _defineProperty(this, \"add\", function (value) {\n    _this.tasksArray.push({\n      description: value,\n      isCompleted: false,\n      index: _this.tasksArray.length\n    });\n\n    _this.saveAndRender();\n\n    _capacitor_toast__WEBPACK_IMPORTED_MODULE_0__.Toast.show({\n      text: \"Added \".concat(value)\n    });\n  });\n\n  _defineProperty(this, \"update\", function (value, index) {\n    _this.tasksArray[index].description = value;\n\n    _this.saveAndRender();\n\n    _capacitor_toast__WEBPACK_IMPORTED_MODULE_0__.Toast.show({\n      text: \"Updated \".concat(value)\n    });\n  });\n\n  _defineProperty(this, \"remove\", function (index) {\n    _this.tasksArray.splice(index, 1);\n\n    _this.tasksArray.forEach(function (task, index) {\n      task.index = index;\n    });\n\n    _this.saveAndRender();\n\n    _capacitor_toast__WEBPACK_IMPORTED_MODULE_0__.Toast.show({\n      text: \"Removed \".concat(value)\n    });\n  });\n\n  this.tasksArray = JSON.parse(localStorage.getItem('tasks')) || [];\n});\n\n\n\n//# sourceURL=webpack://webpack-setup/./src/tasks.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n  margin: 0;\\r\\n  height: 100vh;\\r\\n  background-color: #e9ecef;\\r\\n  font-family: 'Open Sans', sans-serif;\\r\\n  box-sizing: border-box;\\r\\n  padding: 130px 0;\\r\\n}\\r\\n\\r\\nmain {\\r\\n  width: 40%;\\r\\n  min-width: 450px;\\r\\n  font-size: 17px;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  background-color: #fff;\\r\\n  box-sizing: border-box;\\r\\n  border-radius: 8px;\\r\\n  box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;\\r\\n  margin: 0 auto;\\r\\n}\\r\\n\\r\\n#header {\\r\\n  width: 100%;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: baseline;\\r\\n  padding: 30px 30px 20px;\\r\\n  box-sizing: border-box;\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\n#new-task {\\r\\n  width: 100%;\\r\\n  font-size: 15px;\\r\\n  padding: 15px 30px;\\r\\n  border-radius: 4px;\\r\\n  border: 1px solid #e9ecef;\\r\\n  box-sizing: border-box;\\r\\n  outline: none;\\r\\n  color: #8b8c89;\\r\\n}\\r\\n\\r\\n#new-task::placeholder {\\r\\n  color: #a5a58d;\\r\\n  font-style: italic;\\r\\n}\\r\\n\\r\\n#todo-list {\\r\\n  width: 100%;\\r\\n  min-height: 67px;\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  list-style-type: none;\\r\\n  font-weight: 300;\\r\\n}\\r\\n\\r\\n#todo-list li {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  padding: 15px 25px;\\r\\n  box-sizing: border-box;\\r\\n  border-bottom: 1px solid #e9ecef;\\r\\n}\\r\\n\\r\\n#todo-list li div {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.todo-input {\\r\\n  border: none;\\r\\n  outline: none;\\r\\n  font-size: 15px;\\r\\n  font-family: inherit;\\r\\n  align-self: flex-start;\\r\\n}\\r\\n\\r\\n.fa-check {\\r\\n  display: none;\\r\\n  color: #38b000;\\r\\n}\\r\\n\\r\\n.todo-task.active .fa-check {\\r\\n  display: block;\\r\\n}\\r\\n\\r\\n.todo-task.active .fa-square {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.todo-task.active .todo-input {\\r\\n  text-decoration: line-through;\\r\\n}\\r\\n\\r\\n.todo-task.focus {\\r\\n  background-color: rgba(239, 211, 215, 0.2);\\r\\n}\\r\\n\\r\\n.todo-task.focus .todo-input {\\r\\n  background-color: rgba(239, 211, 215, 0.2);\\r\\n}\\r\\n\\r\\nbutton {\\r\\n  min-width: 30px;\\r\\n  cursor: pointer;\\r\\n  background-color: transparent;\\r\\n  border: none;\\r\\n  font-size: 1rem;\\r\\n  font-family: inherit;\\r\\n  display: flex;\\r\\n  align-items: baseline;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\ni {\\r\\n  font-size: 17px;\\r\\n  color: #a5a58d;\\r\\n}\\r\\n\\r\\n#clear-completed {\\r\\n  width: 100%;\\r\\n  text-align: center;\\r\\n  cursor: pointer;\\r\\n  color: #a5a58d;\\r\\n  margin: 0;\\r\\n  padding: 15px;\\r\\n  box-sizing: border-box;\\r\\n  background-color: #f5f3f4;\\r\\n  border-bottom-left-radius: 8px;\\r\\n  border-bottom-right-radius: 8px;\\r\\n}\\r\\n\\r\\n.move-task {\\r\\n  cursor: move;\\r\\n}\\r\\n\\r\\n.dragging {\\r\\n  border: 1px solid #a5a58d !important;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-setup/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack-setup/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-setup/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-setup/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-setup/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-setup/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-setup/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-setup/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-setup/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-setup/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".main.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "webpack-setup:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkwebpack_setup"] = self["webpackChunkwebpack_setup"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;