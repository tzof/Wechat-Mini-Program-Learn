// 应用生命周期
App({

    /**
     * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
     * 冷启动 重新打开小程序或者小程序后台挂载30分钟后重新开启小程序
     */
    onLaunch: function () {
        console.log('onLaunch', '冷启动');
    },

    /**
     * 当小程序启动，或从后台进入前台显示，会触发 onShow
     * 热启动 后台切前台
     */
    onShow: function (options) {
        console.log('onShow', '热启动');
    },

    /**
     * 当小程序从前台进入后台，会触发 onHide
     * 进入后台5秒后会进入挂在状态，后台挂载30分钟后小程序会销毁
     */
    onHide: function () {
        console.log('onHide', '切后台');
    },

    /**
     * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
     */
    onError: function (msg) {

    }
})