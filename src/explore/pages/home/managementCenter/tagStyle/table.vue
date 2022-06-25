<template>
    <section class="pen-table">
        <!-- 
            table表格
            colspan 占用多少列
            rowspan 占用多少行
            thead 表头
            tbody 表体
            tfoot 表尾
         -->
        <table width="520px" height="550px">
            <thead>
                <tr>
                    <th colspan="5">个人应聘信息</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>姓名</td>
                    <td>---</td>
                    <td>性别</td>
                    <td>---</td>
                    <td rowspan="5">照片</td>
                </tr>
                <tr>
                    <td>生日</td>
                    <td>---</td>
                    <td>身高</td>
                    <td>---</td>
                </tr>
                <tr>
                    <td>籍贯</td>
                    <td>---</td>
                    <td>民族</td>
                    <td>---</td>
                </tr>
                <tr>
                    <td>政治面貌</td>
                    <td>---</td>
                    <td>毕业院校</td>
                    <td>---</td>
                </tr>
                <tr>
                    <td>学历</td>
                    <td>---</td>
                    <td>专业</td>
                    <td>---</td>
                </tr>
                <tr>
                    <td>联系电话</td>
                    <td>---</td>
                    <td>电子邮箱</td>
                    <td colspan="2">---</td>
                </tr>
                <tr>
                    <td>邮编</td>
                    <td>---</td>
                    <td>地址</td>
                    <td colspan="2">---</td>
                </tr>
                <tr height="100px">
                    <td>个人简历</td>
                    <td colspan="4">---</td>
                </tr>
                <tr height="100px">
                    <td>爱好特长</td>
                    <td colspan="4">---</td>
                </tr>
                <tr height="100px">
                    <td>相关证书</td>
                    <td colspan="4">---</td>
                </tr>
                <tr height="75px">
                    <td>社会实践</td>
                    <td colspan="4">---</td>
                </tr>
            </tbody>

            <tfoot style="text-align: left;">
                <tr height="100px">
                    <td colspan="5">
                        注意事项：<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;加分项：会唱歌，跳舞，打游戏
                    </td>
                </tr>
            </tfoot>

		</table>
    </section>
</template>

<script>
export default {
    name: 'pen-table'
}
</script>

<style lang="less" scoped>
.pen-table {
    width: 100%;
    height: 100%;
    background: white;
    padding: 10px;
    // table加边框，加圆角
    table {
        width: 100%;
        border-collapse: collapse;// 合并表格边框，使border不会为2px
        border-radius: 10px;
        border-style: hidden;// 消除外边框---为了圆角
        box-shadow: 0 0 0 1px #ECECEC;// 加阴影替代边框---为了圆角
        overflow: hidden;
        th, td { // 设单元格border、padding
            border: 0.5px solid #ECECEC;
            padding: 5px;
        }
        thead th {
            height: 48px;
            font-weight: 400;
            font-size: 14px;
            background: #909399;
            color: #fff;
        }
        tbody td {
            height: 40px;
            font-size: 13px;
            color: #495060;
        }
    }
}
</style>

