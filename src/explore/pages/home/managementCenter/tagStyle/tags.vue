<template>
    <section id="tags">
        <!-- 可以使用element-ui和iview-ui的 Layout 布局 -->
        <LineTextLine>标题h1~h6</LineTextLine>
        <h1>h1一级标题</h1>
        <h2>h2二级标题</h2>
        <h3>h3三级标题</h3>
        <h4>h4四级标题</h4>
        <h5>h5五级标题</h5>
        <h6>h6六级标题</h6>
        <!--
            i，b,font,在html5中已经废弃了
         -->
        <LineTextLine>正文</LineTextLine>
        <p>p正文</p>
        <span>span正文</span>
        <br/>
        <em>em斜体文本</em>
        <br/>
        <b>b加粗文本</b>
        <br/>
        <strong>strong加粗文本</strong>
        <br/>
        分割线
        <hr/>

        <LineTextLine>br换行标签</LineTextLine>
        <br/><br/>

        <LineTextLine>空格标签</LineTextLine>
        +&nbsp;&nbsp;&nbsp;+

        <LineTextLine>img标签</LineTextLine>
        <!-- 3.图片img
            title="标题" 鼠标悬浮显示文字
            alt="哎呀，图片加载失败"  当图片加载失败的时候，显示的文字
            align="top" 图片的对齐方式  vertical-align、top、center、bottom
            @error="imgDefault" 图片加载错误时显示默认图片
         -->
        <img :src="imgUrl ? imgUrl : '111'" title="这是图片" alt="哎呀，图片加载失败" @error="imgDefault" />
        <br/>
        <!--
            图片映射: 将一个图片划分成若干的区域，对每一个区域设置超链接
            Area：非闭合标签
                shape:区域的形状，rect/circle/polygon/default
                Coords：设置形状的坐标，包括x，y的位置，半径
                href:链接的地址
                alt:加载失败时显示的文字
                target:链接在什么地方加载
            能定位上去，不好用
         -->
        <img src="@static/reportForms/image/AR.png" usemap="#Map" style="width: 200px;height: 200px;"/>
        <map name="Map">
            <area shape="circle" coords="160,150,50" alt="文字" href="12-eye.html" target="_blank"/>
            <area shape="circle" coords="240,200,50"  alt="文字" href="12-nose.html" target="_blank"/>
        </map>

        <LineTextLine>a超链接,用于跳转</LineTextLine>
        <!--
            a属性
            target="_blank"  在新的窗口中打开
            target="_self"  在当前网页所在的框架内打开，默认的
            target="_parent"  在父框架内显示
            target="_top"  在最上层的框架显示
            title="当鼠标移入的时候显示"
         -->
        <a href="http://www.jd.com" target="_blank">跳转京东商城</a>

        <LineTextLine>form、label、input标签</LineTextLine>
        <!--
            form标签，表单元素的父容器
                action="接口url" 指定提交的路径
                method="post" 提交方式，常用get默认，post，delete，put
                    get和post的区别：
                        目的不同：get从服务端获取数据，post向服务端提交数据
                        提交方式:get放在请求头，post放在请求体中
                        安全性：get会将数据显示在地址栏，不安全，post不会显示在地址栏，相对安全
                        大小不同：get提交长度限制，255个字符，post长度理论上不受限制
                        数据缓存：get缓存，post不缓存
                enctype="multipart/form-data" 将数据提交到服务端之前进行编码
                    application/x-www-form-urlencoded 默认，发送前编码所以字符
                    multipart/form-data 不对字符编码，用于上传文件
                    application/json  常用，序列化后的字符串
                    text/plain 特殊字符不编码，空格转+
                target="_blank" 提交后跳转页面，打开方式，与a标签一样

            input标签
            type="text"   普通文本，默认
            type="password"   密码框，内容会隐藏
            type="checkbox"   复选框---name要相同
            type="radio"   单选按钮---name要相同
            type="file"   上传文件
            type="button"   普通按钮
            type="submit"   提交按钮
            type="reset"   取消按钮
            type="date"   日期
            checked="true" 是否被选中
            maxlength="10" 值的最大长度，多少字符
            size="30" 输入框的宽度
            readonly 只读，值不能修改，值可以提交
            disabled 不可以用，值不能修改，值不能提交

            name="***" 很重要,服务端通过name获取输入的值
         -->
         <form action="server.html" method="post" enctype="multipart/form-data" target="_blank">
            <label>用户名：</label>
            <input type="text" name="username" value="ivory" placeholder="请输入用户名" maxlength="10" />
            <br/><br/>
            密码：
            <input type="password" name="password"  value="" placeholder="请输入密码" maxlength="10" />
            <br/><br/>
            性别：
            <input type="radio" name="sex" value="male" checked />男
            <input type="radio" name="sex" value="female" />女
            <br/><br/>
            爱好：
            <input type="checkbox" name="hobby" value="basketball" checked="true" />打篮球
            <input type="checkbox" name="hobby" value="swimming" checked="true" />游泳
            <br/><br/>
            头像：
            <input type="file" name="photo" />
            <br/><br/>
            <input type="date" name="date" />
            <br/><br/>
            <input type="button" value="按钮" />
            <br/><br/>
            <input type="submit" value="提交" />
            <br/><br/>
            <input type="reset" value="取消" />
            <!--
                rows="3" 行
                cols="50" 列
                readonly 只读
            -->
            <br/><br/>
            文本域：
            <textarea name="area" rows="3" cols="50">加不了图片，背景图片可以，不能写标签</textarea>
            <br/><br/>
            <!--
                select属性：
                    multiple 多选
                    size="8" 大小
                option属性
                    selected 被选中
                optgroup 分组  label是组名
             -->
            下拉框：
            <select name="city">
                <option value="bj">北京</option>
                <option value="tj" selected>天津</option>
                <optgroup label="河北">
                    <option value="sjz">石家庄</option>
                    <option value="bd">保定</option>
                </optgroup>
            </select>
            <br/><br/>
            fieldset子集合
            <!--
                for="username"关联id="username"
             -->
            <fieldset>
                <legend>个人资料</legend>
                <div>
                    <label for="username">用户名：</label>
                    <input type="text" name="username" placeholder="请输入用户名" id="username" />
                </div>
            </fieldset>


        </form>

        <LineTextLine>button标签</LineTextLine>
        <button class="picture-center-text">
            <img src="@static/picture/breezy/icon_web.png" srcset="@static/picture/breezy/icon_web@2x.png 2x" alt="">
            <span>登&nbsp;&nbsp;录</span>
        </button>

        <LineTextLine>无序列表ul>li标签，用于网页导航或者菜单</LineTextLine>
        <!--
            ul属性：
                type:设置标识的样式，disc(默认)，circle，square    样式list-style: none;就失效
         -->
        <ul type="circle">
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
        <!--
            ol属性：
                type:前面标志的类型， A，a，i，I，1(默认)
                start:顺序从几开始，默认从1开始
         -->
        <LineTextLine>有序列表ol>li标签</LineTextLine>
        <ol type="a" start="1">
            <li>有序列表</li>
            <li>有序列表</li>
        </ol>

        <LineTextLine>有序列表dl>dt/dd标签    标题+内容    左图片右文字</LineTextLine>
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

        <LineTextLine>粗体文本b标签</LineTextLine>
        <b>这是粗体文本</b>


        <LineTextLine>div标签</LineTextLine>
        <div>div</div>


        <LineTextLine>布局容器</LineTextLine>
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
