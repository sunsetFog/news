//以750px为基准设计尺寸自动适配
//既是ps调375px的设计图进行测量的值除16就等rem
//   自动转换px为rem
//   https://www.cnblogs.com/wangqiao170/p/8652505.html
//vscode操作
//1. shift+alt+F格式化代码
//2. alt+z选好px转rem
(function (doc, win) {
    var docEl = doc.documentElement,
      resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
      recalc = function () {
        var clientWidth = docEl.clientWidth; 
        if (!clientWidth) return;
        docEl.style.fontSize = 16 * (clientWidth / 375) + 'px';//其中“16”根据你设置的html的font-size属性值做适当的变化
      };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);