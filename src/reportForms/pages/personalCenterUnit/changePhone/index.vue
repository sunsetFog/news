<template>
    <section id="changePhone">
        <headDesign title="修改手机"></headDesign>
        <div class="summer">
            <div :class="{'scenery': true, 'jupiter': comic_active == 0}">
                1.验证原号码
            </div>
            <div :class="{'honey': true, 'saturn': comic_active == 1}">
                2.绑定新手机
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "changePhone",
    data() {
        return {
            comic_active: 0
        }
    }
}
</script>

<style lang="less" scoped>
#changePhone {
    width: 100%;
    height: 100%;
    background: @color_qianlan;
    padding: 45px 0 0 0;
    box-sizing: border-box;
    .summer {
        width: 100%;
        height: 48px;
        position: relative;
        border: 1px solid #DDDDDD;
        .scenery {
            width: 192px;
            height: 100%;
            text-align: left;
            font-size: 13px;
            padding: 13px 0 0 60px;
            box-sizing: border-box;
            background: url("~@static/mall/personalCenter/u3035.png");
            background-size: 100% 100%;
            background-repeat: no-repeat;
            position: absolute;
            left: 0px;
            top: 0px;
            z-index: 2;
        }
        .jupiter {
            color: @color_hong;
            background: url("~@static/mall/personalCenter/u3035_selected.png");
        }
        .honey {
            width: 200px;
            height: 100%;
            text-align: right;
            font-size: 13px;
            padding: 13px 60px 0 0;
            box-sizing: border-box;
            background: url("~@static/mall/personalCenter/u3034.png");
            background-size: 100% 100%;
            background-repeat: no-repeat;
            position: absolute;
            left: 175px;
            top: 0px;
        }
        .saturn {
            color: @color_hong;
            background: url("~@static/mall/personalCenter/u3034_selected.png");
        }
    }
}
</style>


