<template>
    <section id="subject">
        <titleBox with_name="专题精选"></titleBox>
        <div class="saturn">
            <ul>
                <li v-for="(item,index) in venus_list">
                    <div class="shang-pin">
                        <img class="u88" src="@static/mall/homePage/u88.png"/>
                    </div>
                    <span class="summer">银色星芒刺绣网纱底裤</span>
                    <span class="honey">薄如蝉翼，丝滑如肌肤</span>
                    <span class="rainbow">￥99元起</span>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
import titleBox from "./titleBox"
export default {
    name: "subject",
    components: { titleBox },
    data() {
        return {
            venus_list: [
                { title: 'WNF制造商', price: 9.9, icon: '' }
            ]
        }
    }
}
</script>

<style lang="less" scoped>
#subject {
    width: 100%;
    height: 240px;
    border-top: 1px solid @color_edge;
    border-bottom: 1px solid @color_edge;
    margin-top: 15px;
    background: #fff;
    .saturn {
        width: 100%;
        height: 200px;
        ul {
            width: 100%;
            height: 200px;
            li {
                width: 100%;
                height: 100%;
                position: relative;
                float: left;
                li:last-child {
                    border-bottom: none;
                }
                .shang-pin {
                    width: 100%;
                    height: 120px;
                    background: @color_qianqing;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: absolute;
                    left: 0px;
                    top: 0px;
                    .u88 {
                        width: 74px;
                        height: 52px;
                    }
                }
                .summer {
                    font-size: 13px;
                    position: absolute;
                    left: 20px;
                    bottom: 48px;
                }
                .honey {
                    font-size: 12px;
                    color: @color_huise;
                    position: absolute;
                    left: 20px;
                    bottom: 18px;
                }
                .rainbow {
                    font-size: 13px;
                    color: #FB051B;
                    position: absolute;
                    right: 12px;
                    bottom: 48px;
                }
            }
        }
    }
}
</style>

