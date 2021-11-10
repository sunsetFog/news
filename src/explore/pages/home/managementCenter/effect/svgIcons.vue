<template>
    <section>
        


        <!-- 

            官网：https://www.nhooo.com/svg

            vue项目中使用svg
            https://blog.csdn.net/weixin_42204698/article/details/93751906
            npm install --save-dev svg-sprite-loader
            build\webpack.base.conf.js
            {
                test: /\.svg$/,
                loader: 'svg-sprite-loader',
                include: [resolve('src/assets/svgIcons')],
                options: {
                symbolId: 'icon-[name]'
                }
            },
         -->
        <div style="background: #fff;">
            <svg xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink">
                <circle cx="64" cy="64" r="64" style="fill: #00ccff;"></circle>
            </svg>

            <svg
                class="icon"
                aria-hidden="true"
                font-size="40px"
            >
                <use xlink:href="#iconwechat" />
                <!-- xlink:href是文件路径 -->
            </svg>
        </div>
    </section>
</template>
