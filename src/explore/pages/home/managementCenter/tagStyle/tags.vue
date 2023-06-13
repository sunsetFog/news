<template>
    <section id="tags">
        <!-- 可以使用element-ui和iview-ui的 Layout 布局 -->

        <!-- 标题h1~h6 -->
        <h1>h1一级标题</h1>
        <h2>h2二级标题</h2>
        <h3>h3三级标题</h3>
        <h4>h4四级标题</h4>
        <h5>h5五级标题</h5>
        <h6>h6六级标题</h6>

        <hr>
        <p>p正文</p>
        <span>span正文</span>

        <hr>
        <!-- 3.图片img
            title 鼠标悬浮显示文字
            alt="哎呀，图片加载失败" 图像无法显示时的替代文本
            @error="imgDefault" 图片加载错误时显示默认图片
         -->
         img标签<br/><br/>
        <img :src="imgUrl ? imgUrl : '111'" title="这是图片" alt="哎呀，图片加载失败" @error="imgDefault" />

        <hr>
        a标签<br/><br/>
        <a href="http://www.jd.com" target="_blank">跳转京东商城</a>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="#box1">锚点跳box1位置,只能用id</a>

        <hr>
        input标签<br/><br/>
        <input type="text" name="username" id="a" value="这是用户名" placeholder="请输入用户名" maxlength="10" />
        <input type="password" name="pass" id="b" value="" placeholder="请输入密码" maxlength="10" />
        <input type="checkbox" name="a" id="c" value="" checked="true" />
        <input type="radio" name="sex" id="d" value="" />
        <input type="file" name="file" id="file" />
        <input type="date" name="date" id="date" value="" />
        <input type="button" name="button" id="" value="提交" />

        <hr>
        button标签<br/><br/>
        <button class="picture-center-text">
            <img src="@static/picture/breezy/icon_web.png" srcset="@static/picture/breezy/icon_web@2x.png 2x" alt="">
            <span>登&nbsp;&nbsp;录</span>
        </button>

        <hr>
        br换行标签<br/><br/>

        <hr>
        空格标签<br/><br/>
        +&nbsp;&nbsp;&nbsp;+

        <hr><!-- 7.无序列表ul、有序列表ol、dl标题+内容 -->
        无序列表ul>li标签<br/><br/>
        <ul>
            <li>
                <img src="@static/picture/breezy/icon_tiyu.png" srcset="@static/picture/breezy/icon_tiyu@2x.png 2x" alt="">
                <span>体育</span>
            </li>
            <li>
                <img src="@static/picture/breezy/icon_dianjing.png" srcset="@static/picture/breezy/icon_dianjing@2x.png 2x"
                    alt="">
                <span>电竞</span>
            </li>
            <li>
                <img src="@static/picture/breezy/icon_qipai.png" srcset="@static/picture/breezy/icon_qipai@2x.png 2x"
                    alt="">
                <span>棋牌</span>
            </li>
        </ul>

        <hr>
        有序列表ol>li标签<br/><br/>

        <ol>
            <li>有序列表1</li>
            <li>有序列表2</li>
        </ol>

        <hr>
        有序列表dl>dt/dd标签    标题+内容    左图片右文字<br/><br/>

        <dl>
            <dt>标题1</dt>
            <dd>内容-长城旅游</dd>
            <dd>内容-风景优美</dd>

            <dt>标题2</dt>
            <dd>内容-长城旅游</dd>
        </dl>


        <div class="picture-text">
            <dl>
                <dt>
                    <img src="@static/reportForms/image/AR.png" />
                </dt>
                <dd>长城旅游</dd>
                <dd>风景优美</dd>
            </dl>
        </div>

        <hr>
        表单form标签<br/><br/>
        <form>
            <label>昵称:</label>
            <input type="button" name="button" id="" value="提交" />
        </form>

        <hr>
        下拉框select标签<br/><br/>
        <select name="">
            <option>--请选择省份--</option>
            <option value="">广东省</option>
            <option>河南省</option>
            <option>湖南省</option>
        </select>

        <hr>
        文本域textarea标签<br/><br/>
        <textarea name="area" rows="3" cols="50">加不了图片、背景图片可以。反正不能写标签</textarea>

        <hr>
        粗体文本b标签<br/><br/>
        <b>这是粗体文本</b>


        <hr>
        div标签<br/><br/>
        <div>div</div>


        <hr>
        布局容器<br/><br/>
        <section class="cartoon-unit">
            <header>
                header顶栏容器
            </header>
            <section>
                <aside>
                    aside侧边栏容器
                </aside>
                <main>
                    main主要区域容器
                </main>
            </section>
            <footer>
                footer底栏容器
            </footer>
        </section>
    </section>
</template>

<script>
export default {
    name: "tags",
    data() {
        return {
            imgUrl: null
        }
    },
    methods: {
        imgDefault(e) {
            e.target.src = require('@static/reportForms/image/AR.png')
        }
    }
}
</script>

<style lang="less" scoped>
#tags {
    width: 100%;
    color: black;
    background: #fff;

    ul {
        width: 9rem;
        height: 3rem;

        li {
            width: 2.5rem;
            height: 100%;
            float: left;
            margin-right: 0.5rem;

            img {
                width: 1.5rem;
                height: 1.5rem;
                margin: 0 0.5rem 0 0.5rem;
            }

            span {
                width: 100%;
                display: inline-block;
                font-size: 0.8rem;
                text-align: center;
            }
        }
    }

    .picture-center-text {
        color: #1D1D1D;
        height: 2rem;
        display: flex;
        align-items: center;

        img {
            width: 1rem;
            height: 1rem;
        }

        span {
            margin-left: 0.3rem;
        }
    }


    .picture-text {
        dl {
            width: 9rem;
            height: 3rem;

            dt {
                width: 3rem;
                height: 100%;
                float: left;

                img {
                    width: 100%;
                    height: 100%;
                }
            }

            dd {
                height: 1.5rem;
                line-height: 1.5rem;
                float: left;
                font-size: 0.7rem;
                margin-left: 10px;
            }

            dd:nth-of-type(1) {
                color: yellowgreen;
                font-size: 0.8rem;
                font-weight: 600;
            }
        }
    }

    .cartoon-unit {
        width: 100%;
        height: 500px;
        color: black;
        header {
            width: 100%;
            height: 50px;
            background: #b3c0d1;
            text-align: center;
            line-height: 50px;
        }
        section {
            width: 100%;
            height: 200px;
            aside {
                width: 15%;
                height: 100%;
                float: left;
                background: #d3dce6;
                text-align: center;
                line-height: 200px;
            }
            main {
                width: 85%;
                height: 100%;
                float: right;
                background: #e9eef3;
                text-align: center;
                line-height: 200px;
            }
        }
        footer {
            width: 100%;
            height: 50px;
            background: #b3c0d1;
            text-align: center;
            line-height: 50px;
        }
    }

}</style>
