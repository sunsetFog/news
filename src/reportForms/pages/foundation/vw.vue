<template>
    <section>
        vw适配，px转vw，自动转
        vw和vh 浏览器窗口的大小的单位

        react移动端
        https://blog.csdn.net/qq_43287934/article/details/127338934


        解压配置项 npm run eject   多了两个文件夹config和scripts文件夹
        npm install postcss-loader postcss-px-to-viewport --save-dev
        config 》webpack.config.js加入下面配置
        [
            'postcss-px-to-viewport',
            {
                viewportWidth: 750, // (Number) The width of the viewport.
                viewportHeight: 1334, // (Number) The height of the viewport. -- 一般不需要配置
                unitPrecision: 3, // (Number) The decimal numbers to allow the REM units to grow to.
                viewportUnit: "vw", // (String) Expected units.
                selectorBlackList: [], // (Array) The selectors to ignore and leave as px.
                minPixelValue: 1, // (Number) Set the minimum pixel value to replace.
                mediaQuery: false // (Boolean) Allow px to be converted in media queries.
            }
        ],
        重启服务适配成功
        750px = 100vw

    </section>
</template>
