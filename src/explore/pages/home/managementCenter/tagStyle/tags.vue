<template>
    <section id="tags">
		<!-- 可以使用element-ui和iview-ui的 Layout 布局 -->

        <!-- 1.标题h1~h6 -->
        <h1>一级标题</h1>

        <hr><!-- 2.正文p、span -->
        <p>正文1</p>
        <span>正文span1</span>

        <hr>
        <!-- 3.图片img
            title 鼠标悬浮显示文字
            alt="哎呀，图片加载失败" 图像无法显示时的替代文本
            @error="imgDefault" 图片加载错误时显示默认图片
         -->
        <img :src="imgUrl ? imgUrl : '111'" title="这是图片" alt="哎呀，图片加载失败" @error="imgDefault"/>

        <hr><!-- 4.链接a -->
        <a href="http://www.jd.com" target="_blank">跳转京东商城</a>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="#box1">锚点跳box1位置,只能用id</a>

        <hr><!-- 5.输入框input -->
        <input type="text" name="username" id="a" value="这是用户名" placeholder="请输入用户名" maxlength="10"/>
		<input type="password" name="pass" id="b" value="" placeholder="请输入密码" maxlength="10"/>
        <input type="checkbox" name="a" id="c" value="" checked="true"/>
        <input type="radio" name="sex" id="d" value=""/>
		<input type="file" name="file" id="file"/>
		<input type="date" name="date" id="date" value=""/>
		<input type="button" name="button" id="" value="提交" />

        <hr><!-- 6.按钮button -->

        <button class="picture-center-text">
            <img src="@static/picture/breezy/icon_web.png" srcset="@static/picture/breezy/icon_web@2x.png 2x" alt="">
            <span>登&nbsp;&nbsp;录</span>
        </button>

        <br>br换行

        <hr><!-- 7.无序列表ul、有序列表ol、dl标题+内容 -->
        <ul>
            <li>
                <img src="@static/picture/breezy/icon_tiyu.png" srcset="@static/picture/breezy/icon_tiyu@2x.png 2x" alt="">
                <span>体育</span>
            </li>
            <li>
                <img src="@static/picture/breezy/icon_dianjing.png" srcset="@static/picture/breezy/icon_dianjing@2x.png 2x" alt="">
                <span>电竞</span>
            </li>
            <li>
                <img src="@static/picture/breezy/icon_qipai.png" srcset="@static/picture/breezy/icon_qipai@2x.png 2x" alt="">
                <span>棋牌</span>
            </li>
        </ul>
            
        <ol>
            <li>有序列表1</li>
            <li>有序列表2</li>
        </ol>
            <!-- 
                左图片右文字
             -->
        <dl>
            <dt>标题1</dt>
            <dd>内容-长城旅游</dd>
            <dd>内容-风景优美</dd>

            <dt>标题2</dt>
            <dd>内容-长城旅游</dd>
        </dl>
        <!-- 分割线:水平线中间添加文字 -->
        <div class="line-text-line">
            <hr/>  水平线中间添加文字  <hr/>
        </div>

        <div class="picture-text">
            <dl>
                <dt>
                    <img src="@static/reportForms/image/AR.png"/>
                </dt>
                <dd>长城旅游</dd>
                <dd>风景优美</dd>
            </dl>
        </div>

        <hr><!-- 8.表单form -->
        <form>
			<label>昵称:</label>
            <input type="button" name="button" id="" value="提交" />
        </form>

        <hr><!-- 9.下拉框select -->
		<select name="">
			<option>--请选择省份--</option>
			<option value="">广东省</option>
			<option>河南省</option>
			<option>湖南省</option>
		</select>

        <hr>
        <!-- 10文本域 -->
        <textarea name="area" rows="3" cols="50">加不了图片、背景图片可以。反正不能写标签</textarea>
		<!-- 11.粗体文本 -->
		<hr>
		<b>这是粗体文本</b>
		<!-- 12.换行 -->
		<hr>
		<span>span</span>
		

        <div>div</div>
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
#tags{
    width: 100%;
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

    .line-text-line {
        width:100%;
        height: 50px;
        display: flex;
        align-items: center;
        hr {
            margin: 0;
            float: left;
            flex: 1;
            height: 1px;
            border-right: 0;
            border-left: 0;
        }
        hr:nth-of-type(1) {
            margin-right: 15px;
        }
        hr:nth-of-type(2) {
            margin-left: 15px;
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
            dd:nth-of-type(1){
                color: yellowgreen;
                font-size: 0.8rem;
                font-weight: 600;
            }
        }
    }
        
}
</style>