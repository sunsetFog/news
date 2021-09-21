//设计会给750px尺寸图片
//px转rem计算：ps图像-图像大小，调375px的设计图进行测量的值，用px就好，因为装了自动换算
//   自动转换px为rem
//   https://www.cnblogs.com/wangqiao170/p/8652505.html
//略略(装了自动换算)：vscodepx转rem：选好 alt+z
(function (doc, win) {
    var docEl = doc.documentElement,
      resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
      recalc = function () {
        let clientWidth = docEl.clientWidth; // 屏幕宽度
        /**
         * 功能：移动端项目，电脑浏览器还没切换移动端，希望以宽750居中 (这只是为了好看)
         * 判断是pc端就固定屏幕宽度，使pixelSize值也固定
         */
        // let flag_client = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
        // if (!flag_client) {
        //   clientWidth = 750;
        // }
        sessionStorage.setItem('clientWidth', clientWidth);

        if (!clientWidth) return;
        let pixelSize = 16 * (clientWidth / 375)
        sessionStorage.setItem('pixelSize', pixelSize)
        docEl.style.fontSize = pixelSize + 'px'; // 关键：设置的html的font-size计算值
      };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);