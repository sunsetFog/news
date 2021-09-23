<template>
    <section id="tags">
		<!-- 可以使用element-ui和iview-ui的 Layout 布局 -->

        <!-- 1.标题h1-h6 -->
        <h1>一级标题</h1>

        <hr><!-- 2.正文p、span -->
        <p>正文1</p>
        <span>正文span1</span>

        <hr><!-- 3.图片img -->
        <img src="img/20160923162150990653.jpg" title="这是图片" alt="哎呀，图片加载失败"/>

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
        <button>登&nbsp;&nbsp;录</button>

        <hr><!-- 7.列表ul、ol、dl -->
        <ul>
            <li>无序列表1</li>
            <li>无序列表1</li>
        </ul>
            
        <ol>
            <li>有序列表1</li>
            <li>有序列表1</li>
        </ol>
            
        <dl>
            <dt>咖啡</dt>
            <dd>咖啡是一种黑色饮料，味道偏枯</dd>
        </dl>

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
		<span>换<br>行</span>
		

        <div id="box1">这是box1</div>
    </section>
</template>

<script>
export default {
    name: "tags"
}
</script>

<style lang="less" scoped>
#tags{
    color: white;
    a{
        color: red;
    }
}
</style>