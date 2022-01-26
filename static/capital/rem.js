
(function (doc, win) {
    var docEl = doc.documentElement,
        // 监听类型
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        // 定义一个方法
        recalc = function () {
            let clientWidth = docEl.clientWidth; // 屏幕宽度，变动值
            /*
              移动端以750宽，居中PC端
              判断pc端还是移动端，pc端则屏幕宽度750，固定值
              let flag_client = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
              if (!flag_client) {
                clientWidth = 750;
              }
            */
            sessionStorage.setItem('clientWidth', clientWidth); // 缓存下来

            if (!clientWidth) return;
            let pixelSize = 16 * (clientWidth / 375); // 根据屏幕宽，计算html的font-size值
            sessionStorage.setItem('pixelSize', pixelSize); // 缓存下来
            docEl.style.fontSize = pixelSize + 'px'; // DOM设置属性
        };

    if (!doc.addEventListener) return;
    // 添加监听
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);// 匿名方法，已调用