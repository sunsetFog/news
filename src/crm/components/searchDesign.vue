<template>
    <section id="searchDesign">
        <el-card shadow="hover">
            <table>
                <thead>
                    <tr>
                        <th width="60%">筛选条件</th>
                        <th width="40%">操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <slot></slot>
                        </td>
                        <td style="text-align: center;">
                            <el-button type="primary" icon="el-icon-search" @click="queryWay" v-if="sousuo">搜索</el-button>
                            <el-button type="primary" v-if="tianjia" @click="addWay()">添加</el-button>
                            <el-button type="primary" v-if="piliangshanchu">批量删除</el-button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </el-card>
    </section>
</template>

<script>
export default {
    name: "searchDesign",
    props: {
        sousuo: {
            type: Boolean,
            default: true
        },
        tianjia: {
            type: Boolean,
            default: true
        },
        piliangshanchu: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {

        }
    },
    methods: {
        queryWay() {
            this.$emit("queryWay");
        },
        addWay() {
            this.$emit("addWay");
        }
    }
}
</script>

<style lang="less" scoped>
#searchDesign {
    width: 100%;
    height: 100px;
    /deep/.el-card__body {
        padding: 5px 5px 5px 5px;
        box-sizing: border-box;
    }
    /deep/.el-form-item {
        margin: 5px;
    }

    table {
        width: 100%;
        border-collapse: collapse;
        border-style: hidden;
        overflow: hidden;
        th, td {
            border: 0.5px solid #EBEEF5;
            padding: 5px;
        }
        thead th {
            height: 30px;
        }
        tbody td {
            height: 40px;
            font-size: 13px;
            color: #495060;
        }
    }
}
</style>


