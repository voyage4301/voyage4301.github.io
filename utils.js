
var Utils = {};
var ShareSDK = {};

var appId = "";


Utils.init = function (_appId) {
    appId = _appId;
}

/**
 * Get Constatns info
 *
 * @param {Function} successCallback The function to call when the heading data is available
 * @param {Function} errorCallback The function to call when there is an error getting the heading data. (OPTIONAL)
 */
Utils.getConstants = function (successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, 'CDVEMPBridge', 'getConstants', []);
};

setTimeout(function () {
    Utils.getConstants(function (params) {
        Utils.userRootPath = params.userRootPath;
    })
}, 300);

/**
 * 拨打电话
 * @param {string} phoneNumber 电话号码
 */
Utils.tel = function (phoneNumber) {
    cordova.exec(null, null, "CDVEMPBridge", "tel", [phoneNumber]);
}
/**
 * 发送短信
 * @param {string} phoneNumber 电话号码
 *  @param {string} content 短信内容
 */
Utils.sendMessage = function (phoneNumber, content) {
    cordova.exec(null, null, "CDVEMPBridge", "sendMessage", [phoneNumber, content]);
}


/**
 * 生成二维码图片
 * @param {*} params 
 * @param {function} callback 
 */
Utils.getQRCodeImage = function (params, callback) {

}
/**
 * 用系统浏览器打开网站
 * @param {function}url   网页url
 */
Utils.browser = function (url) {
    cordova.exec(null, null, "CDVEMPBridge", "browser", [url]);
}
/**
 * 复制内容到剪切板
 * @param {string} content 
 */
Utils.copyToClipboard = function (content, callback) {
    cordova.exec(callback, null, "CDVEMPBridge", "copyToClipboard", [content]);
}

/**
 * 从剪切板读取内容
 * @param {function} callback
 */
Utils.getClipboardContent = function (callback) {
    cordova.exec(callback, null, "CDVEMPBridge", "getClipboardContent", [""]);
}
/**
 * 获取客户端配置
 * @param {function} callback
 */
Utils.getClientConfig = function (callback) {
    cordova.exec(callback, null, "CDVEMPBridge", "getClientConfig", []);
}
/**
 * 调用系统程序打开文件,只支持Android
 * @param {string} file 文件全路径
 * @param {function} callback
 */
Utils.openFile = function (file, callback) {
    cordova.exec(callback, null, "CDVEMPBridge", "openFile", [file]);
}
/**
 * 文件压缩
 * @param {string} destFile 
 * @param {array} pathArray 
 * @param {function} callback 
 */
Utils.zipFile = function (destFile, pathArray, callback) {
    //pathArray = JSON.parse(pathArray);
    cordova.exec(callback, null, "CDVEMPBridge", "zipFile", [destFile, pathArray]);
}

/**
 * 文件解压
 * @param {string} sourceFile  源文件
 * @param {string} destFile 目标路径
 * @param {function} callback 
 */
Utils.unzipFile = function (sourceFile, destFile, callback) {
    cordova.exec(callback, null, "CDVEMPBridge", "unzipFile", [sourceFile, destFile]);
}
/**
 * 打开android应用
 * @param {string} pakage 包名 
 * @param {string} className 类名 
 * @param {object} params  参数
 */
Utils.openInstalledNativeApp = function (pakage, className, params) {
    cordova.exec(callback, null, "CDVEMPBridge", "openInstalledNativeApp", [package, className, params]);
}
/**
 * 通过scheme方式打开第三方原生应用
 * @param {*} url   scheme
 * @param {*} params  参数
 * @param {*} callback  失败回调
 */
Utils.openInstalledNativeAppByScheme = function (url, params, callback) {
    cordova.exec(callback, null, "CDVEMPBridge", "openInstalledNativeAppByScheme", [url, params]);
}
/**
 * 压缩图片
 * @param {String} path  要压缩的图片的路径
 * @param {String} width  压缩后图片的宽度
 * @param {String} toPath  压缩后图片的存储路径
 * @param {function} callback 压缩回调
 */
Utils.zipImage = function (path, width, toPath, callback) {
    cordova.exec(callback, null, "CDVEMPBridge", "zipImage", [path, width, toPath]);
}

/**
 * 获取手机是否越狱或root
 * @param {function} callback  
 */
Utils.isRooted = function (callback) {
    cordova.exec(callback, null, "CDVEMPBridge", "isRooted", []);
}

/**
 * 获取图片base64编码
 * @param {String} path  要编码的图片路径
 * @param {function} callback  成功回调
 * @param {function} failureCallback 失败回调 
 */
Utils.imageToBase64 = function (path, callback, failureCallback) {
    cordova.exec(callback, failureCallback, "CDVEMPBridge", "imageToBase64", [path]);
}
/**
 * 打开安全认证登录页面
 * @param {function} callback 登录成功回调 (成功回调token2)
 * @param {function} failureCallback 失败或用户取消认证回调
 */
Utils.securityLogin = function(callback,failureCallback){
    cordova.exec(callback, failureCallback, "CDVEMPBridge", "securityLogin", []);
}
/**
 * 校验安全token是否有效
 * @param {function} callback  true token有效  false token无效
 */
Utils.verifySecurityToken = function(callback){
    cordova.exec(callback, null, "CDVEMPBridge", "verifySecurityToken", []);
}


/**
 * 获取安全认证token
 * @param {function} callback 若本地没有安全认证token 返回空
 */
Utils.getSecurityToken = function(callback){
    cordova.exec(callback, null, "CDVEMPBridge", "getSecurityToken", []);
}
/**
 * 设置Nav隐藏
 */
Utils.hideNav = function () {
    cordova.exec(null, null, 'CDVEMPBridge', 'hideNav', [])
}

/**
 * 设置Nav显示
 */
Utils.showNav = function () {
    cordova.exec(null, null, 'CDVEMPBridge', 'showNav', [])
}

/**
 * 设置menu展开
 */
Utils.showMenu = function () {
    cordova.exec(null, null, 'CDVEMPBridge', 'showMenu', [])
}

/**
 * 设置menu收起
 */
Utils.hideMenu = function () {
    cordova.exec(null, null, 'CDVEMPBridge', 'hideMenu', [])
}

/**
 * 设置menu显示页
 */
Utils.setNavPageNum = function (pageNum) {
    cordova.exec(null, null, 'CDVEMPBridge', 'setNavPageNum', [pageNum])
}
/**
 *  shareSDK微信分享
 */
ShareSDK.shareToWechat = function (params, callback) {
    params.appId = appId;
    params.appType = "cordova";
    cordova.exec(callback, null, 'CDVEMPBridge', 'shareToWechat', [JSON.stringify(params)])
}
ShareSDK.oneKeyShare = function (params, callback) {
    params.appId = appId;
    params.appType = "cordova";
    cordova.exec(callback, null, "CDVEMPBridge", "oneKeyShare", [JSON.stringify(params)]);
}


Utils.getUserInfo = function (callback) {
    cordova.exec(function (res) {
        callback(res);
    }, null, "CDVEMPBridge", "getUserInfo", []);
}

Utils.getSSOToken = function (callback) {
    cordova.exec(function (res) {
        var json = JSON.parse(res);
        var token = json.token;
        callback(token);
    }, null, "CDVEMPBridge", "getUserInfo", []);
}

Utils.isLogin = function (callback) {
    cordova.exec(function (res) {
        var json = JSON.parse(res);
        var token = json.token;
        if (token == "") {
            callback(false);
        } else {
            callback(true);
        }
    }, null, "CDVEMPBridge", "getUserInfo", []);
}

Utils.logout = function () {
    // cordova.exec(function (res) {
    //     callback(res);
    // }, null, "CDVEMPBridge", "clearUserInfo", []);
    cordova.exec(null, null, "CDVEMPBridge", "logout", []);
}

Utils.login = function () {
    cordova.exec(null, null, "CDVEMPBridge", "login", []);
}

Utils.regist = function (params) {
    cordova.exec(null, null, "CDVEMPBridge", "regist", [params]);
}

Utils.zxRegist = function(params){
    Utils.regist(
        {
            "source":"zx",
            "url":params.url
        }
    );
}

Utils.goToMainApp = function (isClearUserInfo) {
    cordova.exec(null, null, "CDVEMPBridge", "goToMainApp", [isClearUserInfo+""]);
}


Utils.setCurrentEnv = function (env) {
    cordova.exec(null, null, "CDVEMPBridge", "setCurrentEnv", [env]);
}

Utils.getCurrentEnv = function (callback) {
    cordova.exec(function (res) {
        callback(res);
    }, null, "CDVEMPBridge", "getCurrentEnv", []);
}


Utils.securityLogin = function(callback,failureCallback){
    cordova.exec(callback, failureCallback, "CDVEMPBridge", "securityLogin", []);
}
/**
 * 校验安全token是否有效
 * @param {function} callback  true token有效  false token无效
 */
Utils.verifySecurityToken = function(callback){
    cordova.exec(callback, null, "CDVEMPBridge", "verifySecurityToken", []);
}


/**
 * 获取安全认证token
 * @param {function} callback 若本地没有安全认证token 返回空
 */
Utils.getSecurityToken = function(callback){
    cordova.exec(callback, null, "CDVEMPBridge", "getSecurityToken", []);
}

Utils.getIPAddress = function(callback){
    cordova.exec(callback, null, "CDVEMPBridge", "getIPAddress", []);
}

/**
 * 设置全局存储数据
 * @param {String} key 
 * @param {String} value 
 */
Utils.setGlobalValue = function(key,value){
    cordova.exec(null, null, "CDVEMPBridge", "setGlobalValue", [key,value]);    
}

/**
 * 获取全局存储数据 shouldDelete为是否清除该数据，默认为false不清除
 * @param {String} key 
 * @param {bool} shouldDelete 
 */
Utils.getGlobalValue = function(key,shouldDelete,callback){
    cordova.exec(callback, null, "CDVEMPBridge", "getGlobalValue", [key,shouldDelete]);    
}

/**
 * 发送事件供RN接收
 * @param {String} eventName 
 * @param {JSON} params 
 */
Utils.sendRnEvent = function(eventName,params,callback){
    if(typeof params == "object"){
        params = JSON.stringify(params)
    }
    cordova.exec(callback, null, "CDVEMPBridge", "sendRnEvent", [eventName,params]);        
}


/**
 * Cordova 应用跳转到 Rn 微应用
 * @param {String} appId 应用ID
 * @param {String} pageId 页面ID
 * @param {String} params 参数
 * @param {bool} isDestroySelf 是否销毁自己（若销毁，通过返回按键无法返回到当前页面）
 */
Utils.goToRnPage  =function(appId,pageId,params){
    cordova.exec(null, null, "CDVEMPBridge", "goToRnPage", [appId,pageId,JSON.stringify(params)]);            
}
/**
 * Cordova 监听RN发过来事件（用于返回时接收参数）
 * @param {String} eventName 事件名称(为防止冲突，需要使用各自的前缀 如com_cpic_app_bxx_EventName)
 * @param {function} fun 回调函数（param)
*/
Utils.receiveCordovaEvent = function(eventName,fun){
    broadcaster.addEventListener(eventName, fun);
}

/**
 * Cordova 关闭三方webview
 */
Utils.closeWebview = function(){
    cordova.exec(null, null, "CDVEMPBridge", "closeWebview", []);
}

/**
 * Cordova打开太e赔
 */
Utils.openTEP = function(params,success,failure){
    if(typeof params == "object"){
        if(params.showBack != undefined || params.showBack == true){
            params.showBack = "yes";
        }else{
            params.showBack = "no";
        }
        params = JSON.stringify(params)
    }
    cordova.exec(success, failure, "CDVEMPBridge", "openTEP", [params]);        
}

/**
 * 打开智享客服
 */
Utils.openHdCall = function(params,callback){
    cordova.exec(callback, null, "CDVEMPBridge", "openHdCall", [params]);
}

/**
 * 打开其他内部应用
 */
Utils.openOtherApp = function(params){
    cordova.exec(null, null, "CDVEMPBridge", "openOtherApp", [params.appName]);
}
/**
 * 设置手势密码
 */
Utils.setSecurityPwd = function(params,callback){
    cordova.exec(callback, null, "CDVEMPBridge", "setSecurityPwd", [params]);
}

/**
 * 修改手势密码
 */
Utils.updateSecurityPwd = function(params,callback){
    cordova.exec(callback, null, "CDVEMPBridge", "updateSecurityPwd", [params]);
}

/**
 * 判断用户是否设置手势、指纹、人脸等密码
 */
Utils.isSecurityPwdEnable = function(params,callback){
    cordova.exec(callback, null, "CDVEMPBridge", "isSecurityPwdEnable", [params]);
}
/**
 * 关闭安全密码
 */
Utils.closeSecurityPwd = function(params,callback){
    cordova.exec(callback, null, "CDVEMPBridge", "closeSecurityPwd", [params]);
}
