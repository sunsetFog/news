<template>
    <section id="selector">
        <LineTextLine>通配符选择器</LineTextLine>
            * { }   选择所有标签
        <LineTextLine>标签选择器</LineTextLine>
        div { }
        <LineTextLine>class选择器</LineTextLine>
        .ming { }
        <LineTextLine>id选择器</LineTextLine>
        #erha { }
        <LineTextLine>属性选择器</LineTextLine>
        div[data-key] 有data-key属性的标签
        <br/>
        div[class="sky"] 属性等于
        <br/>
        div[class~="sky"] 属性含有
        <br/>
        div[class^="sky"] 属性以sky开头
        <br/>
        div[class$="sky"] 属性以sky结尾
        <br/>
        div[class*="sky"] 属性含有
        <br/>
        <input type="password" name="password"  value="6666" placeholder="请输入密码" maxlength="10" data-key="sky" />
        <LineTextLine>伪类选择器</LineTextLine>
        谷歌浏览器》Elements》Styles》点:hov》打勾:hover
        <br>
        <button class="pseudo">
            <em>鼠标悬停</em><span>哈喽</span>
        </button>
        <div class="water">
            <p class="hage">111</p>
            <p class="nana">222</p>
            <p>333</p>
        </div>
        <LineTextLine>伪元素选择器</LineTextLine>
        <p class="cartoon">苏里科夫的；是快疯了；发宽松大翻领宽松的；发了开始；发克里斯蒂；联发科</p>
        <LineTextLine>子代选择器，不包括孙子</LineTextLine>
        <div class="mars">
            <span>大儿子<span>孙子</span></span>
            <span>小儿子</span>
        </div>
        <LineTextLine>后代选择器，包括孙子</LineTextLine>
        <div class="jupiter">
            <span>大儿子<span>孙子</span></span>
            <span>小儿子</span>
        </div>
        <LineTextLine>下一个兄弟选择器</LineTextLine>
        <div class="saturn">
            <p>111</p>
            <p>222</p>
            <p class="nana">333</p>
            <p>444</p>
            <p>555</p>
        </div>
        <LineTextLine>后面兄弟选择器</LineTextLine>
        <div class="venus">
            <p>111</p>
            <p class="nana">222</p>
            <p>333</p>
            <div>444</div>
            <p>555</p>
        </div>
    </section>
</template>

<style lang="less">
#selector {
    // ------------------------------属性选择器------------------------------
    input[type="password"] {
        color: yellowgreen;
    }
    [data-key="sky"] {// 前面可以没有标签名
        background: teal;
    }
    // ------------------------------伪类选择器------------------------------
    // 鼠标悬停时
    .pseudo:hover {
        color: red;
    }
    .pseudo {
        // & 嵌套样式回上一层
        &:hover {// 等价于 .pseudo:hover { }
            color: yellowgreen;
        }
        & span {// 等价于 .pseudo span { }
            color: tomato;
        }
    }
    // 获得焦点时   点目标就获取焦点，点不是目标就失去焦点
    // .pseudo:focus {
    //     color: blue;
    // }
    // 点击按住时
    // .pseudo:active {
    //     color: blueviolet;
    // }
    // 已访问 ？？？
    .pseudo:visitied {
        color: red;
    }
    // 未访问 ？？？
    .pseudo:link {
        color: aquamarine;
    }
    // 元素之后插入内容
    .pseudo:after {
        content: '后来';
    }
    .water {
        // 第一个子元素 ???
        p:first-child {
            color: royalblue;
        }
        // 最后子元素 ???
        p:last-child {
            color: red;
        }
    }
    .water p:nth-of-type(2) {
        color: khaki;
    }
    // 没有那个类名的样式
    .water p:not(.nana) {
        color: yellowgreen;
    }
    // ------------------------------伪元素选择器------------------------------
    .cartoon {
        width: 100px;
        // 内容首行添加样式
        &::first-line {
            font-size: 18px;
        }
        // div内容之前插入内容，或图片
        &::before {
            content: 'url(smiley.gif)';
        }
    }
    // ------------------------------子代选择器，不包括孙子------------------------------
    .mars > span {
        padding: 0 20px;
        box-sizing: border-box;
    }
    // ------------------------------后代选择器，包括孙子------------------------------
    .jupiter span {
        padding: 0 20px;
        box-sizing: border-box;
    }
    // ------------------------------下一个兄弟选择器------------------------------
    .saturn {
        // 下一个不是p标签就无效
        .nana + p {
            color: red;
        }
    }
    // ------------------------------后面兄弟选择器------------------------------
    .venus {
        .nana ~ p {
            color: indigo;
        }
    }
}
</style>
