<template>
    <section class="pen-table">
        <!--
            table表格-属性
                border="0" 边框
                align="center"
                width="500px" 宽度
                height="200px" 高度
                cellspacing="0" 单元格之间的距离  等于去掉边框间距
                cellpadding="10px" 单元格内容与其边框之间的距离
                bgcolor="aquamarine" 设置背景颜色
                valign="bottom" 内容的垂直对齐方式
                background="../img/2.jpg" 背景图片，背景图片的优先级高于背景颜色
            tr行-属性
                width="500px" 宽度
                height="200px" 高度
                bgcolor="aquamarine" 设置背景颜色
                align="right" 水平对齐
                valign="bottom" 内容的垂直对齐方式
            td列-属性
                width="500px" 宽度
                height="200px" 高度
                bgcolor="aquamarine" 设置背景颜色
                background="../img/2.jpg" 背景图片，背景图片的优先级高于背景颜色
                align="right" 水平对齐
                valign="bottom" 内容的垂直对齐方式
                colspan="5" 合并列
                rowspan="5" 合并行
            caption:表格标题
            thead 表头
                th:列标题
            tbody 表格的主体，表体
            tfoot 表格的尾部，表尾

         -->
        <main>
            <table width="520px" height="550px" cellspacing="0">
                <caption>个人应聘信息</caption>
                <thead>
                    <tr>
                        <th colspan="2">列标题</th>
                        <th colspan="3">列标题</th>
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
        </main>

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
    // table加overflow: hidden;边框消失，还有圆角问题？解决加一层,main加边框加圆角
    main {
        border-radius: 10px;
        border: 0.5px solid #ECECEC;
        overflow: hidden;
        table {
            width: 100%;
            border-collapse: collapse;// 去掉边框间距   设置间距：border-collapse:separate;border-spacing:10px 50px;
            border-style: hidden;// 消除外边框，边框线重叠用
            th, td { // 设单元格border、padding
                height: 40px;
                padding: 5px;
                font-size: 13px;
                color: #495060;
                border-left: 0.5px solid #ECECEC;
                border-top: 0.5px solid #ECECEC;
            }
            caption {
                height: 48px;
                line-height: 48px;
                color: chartreuse;
                background: #7b8b9d;
                font-weight: 400;
                font-size: 14px;
                border-bottom: 0.5px solid #ECECEC;
            }
            thead th {
                height: 48px;
                font-weight: 400;
                font-size: 14px;
                background: #909399;
                color: #fff;
            }
        }
    }

}
</style>

