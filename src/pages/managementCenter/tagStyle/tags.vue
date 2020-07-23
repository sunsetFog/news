<template>
    <section id="tags">
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

        <hr><!-- 11.表格table -->
		<table border="1" width="520px" height="550px">
			<tr>
				<td>姓名</td>
				<td></td>
				<td>性别</td>
				<td></td>
				<td rowspan="5">照片</td>
			</tr>
			<tr>
				<td>生日</td>
				<td></td>
				<td>身高</td>
				<td></td>
			</tr>
			<tr>
				<td>籍贯</td>
				<td></td>
				<td>民族</td>
				<td>汉</td>
			</tr>
			<tr>
				<td>政治面貌</td>
				<td>团员</td>
				<td>毕业院校</td>
				<td></td>
			</tr>
			<tr>
				<td>学历</td>
				<td>本科</td>
				<td>专业</td>
				<td></td>
			</tr>
			<tr>
				<td>联系电话</td>
				<td></td>
				<td>电子邮箱</td>
				<td colspan="2"></td>
			</tr>
			<tr>
				<td>邮编</td>
				<td></td>
				<td>地址</td>
				<td colspan="2"></td>
			</tr>
			<tr height="100px">
				<td>个人简历</td>
				<td colspan="4">简历</td>
			</tr>
			<tr height="100px">
				<td>爱好特长</td>
				<td colspan="4">特长</td>
			</tr>
			<tr height="100px">
				<td>相关证书</td>
				<td colspan="4">证书</td>
			</tr>
			<tr height="75px">
				<td>社会实践</td>
				<td colspan="4">实践</td>
			</tr>
		</table>

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
    table{
		border-collapse: collapse;/*合并表格边框*/
	}
}
</style>