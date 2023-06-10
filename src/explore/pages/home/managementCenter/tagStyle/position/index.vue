<template>
    <section class="tableUnit">
        <main>
            <div class="mercury">
                <div class="header">
                    <img src="@/explore/assets/position/img_title_02.png" />
                </div>

                <div class="honey">
                    <table>
                        <tr>
                            <td colSpan="1" rowSpan="1">排名</td>
                            <td colSpan="1" rowSpan="1">会员账号</td>
                            <td colSpan="1" rowSpan="1">全场馆有效投注</td>
                            <td colSpan="1" rowSpan="1">排名彩金</td>
                        </tr>
                        <tr>
                            <td colSpan="1" rowSpan="1">1</td>
                            <td colSpan="1" rowSpan="1"></td>
                            <td colSpan="1" rowSpan="1"></td>
                            <td colSpan="1" rowSpan="1">18888元</td>
                        </tr>
                        <tr>
                            <td colSpan="1" rowSpan="1">2</td>
                            <td colSpan="1" rowSpan="1"></td>
                            <td colSpan="1" rowSpan="1"></td>
                            <td colSpan="1" rowSpan="1">8888元</td>
                        </tr>
                        <tr>
                            <td colSpan="1" rowSpan="1">3</td>
                            <td colSpan="1" rowSpan="1"></td>
                            <td colSpan="1" rowSpan="1"></td>
                            <td colSpan="1" rowSpan="1">5888元</td>
                        </tr>
                        <tr>
                            <td colSpan="1" rowSpan="1">4-5</td>
                            <td colSpan="1" rowSpan="1"></td>
                            <td colSpan="1" rowSpan="1"></td>
                            <td colSpan="1" rowSpan="1">2888元</td>
                        </tr>
                        <tr>
                            <td colSpan="1" rowSpan="1">6-10</td>
                            <td colSpan="1" rowSpan="1"></td>
                            <td colSpan="1" rowSpan="1"></td>
                            <td colSpan="1" rowSpan="1">1888元</td>
                        </tr>
                        <tr>
                            <td colSpan="1" rowSpan="1">11-20</td>
                            <td colSpan="1" rowSpan="1"></td>
                            <td colSpan="1" rowSpan="1"></td>
                            <td colSpan="1" rowSpan="1">988元</td>
                        </tr>
                        <tr>
                            <td colSpan="1" rowSpan="1">21-30</td>
                            <td colSpan="1" rowSpan="1"></td>
                            <td colSpan="1" rowSpan="1"></td>
                            <td colSpan="1" rowSpan="1">588元</td>
                        </tr>
                        <tr>
                            <td colSpan="1" rowSpan="1">31-50</td>
                            <td colSpan="1" rowSpan="1"></td>
                            <td colSpan="1" rowSpan="1"></td>
                            <td colSpan="1" rowSpan="1">288元</td>
                        </tr>
                        <tr>
                            <td colSpan="1" rowSpan="1">51-100</td>
                            <td colSpan="1" rowSpan="1"></td>
                            <td colSpan="1" rowSpan="1"></td>
                            <td colSpan="1" rowSpan="1">188元</td>
                        </tr>
                    </table>
                </div>

                <div class="footer"></div>
            </div>
            <div class="lotus"></div>
            <div class="regular"></div>
        </main>
    </section>
</template>

<style lang="less">
.tableUnit {
    width: 100%;
    margin: 30px 0 30px 0;
    display: flex;
    justify-content: center;
    align-items: center;

    main {
        width: 1485px;
        position: relative;

        .mercury {
            width: 100%;
            padding: 419px 0 230px 0;// 上下用padding，然后上下用绝对定位
            box-sizing: border-box;
            position: relative;
            left: 0px;
            top: 0px;
            z-index: 2;

            .header {
                width: 100%;
                height: 545px;
                background: url('~@/explore/assets/position/box_top.png');
                background-size: 100% 490px;
                background-repeat: no-repeat;
                background-position: center bottom;
                display: flex;
                justify-content: center;
                position: absolute;// 绝对定位  以父元素为参考，脱离文档（不能撑开父盒子高度）  默认以左上角为起点
                left: 0px;
                top: 0px;
                z-index: 1;// 层次关系

                img {
                    width: 862px;
                    height: 234px;
                }
            }

            .honey {
                width: 100%;
                background-image: url('~@/explore/assets/position/box_body.png');
                background-repeat: repeat-y;
                background-position: center top;
                background-size: 100% 65px;
                padding: 0px 260px 0px 260px;
                box-sizing: border-box;
                color: #933D3D;
                position: relative;
                left: 0px;
                top: 0px;
                z-index: 2;
            }

            .footer {
                width: 100%;
                height: 250px;
                background-image: url('~@/explore/assets/position/box_bom.png');
                background-repeat: no-repeat;
                background-size: 100% 100%;
                position: absolute;
                left: 0px;
                bottom: 0px;
                z-index: 3;
            }
        }

        .lotus {
            width: 1743px;
            height: 760px;
            background-image: url('~@/explore/assets/position/img_mod_btm01.png');
            background-size: 100% 100%;
            background-repeat: no-repeat;
            position: absolute;
            left: -129px;
            bottom: 20px;
            z-index: 1;
        }
    }
/*
    position: relative;
    相对定位  以自身为参考，不脱脱离文档（能撑开父盒子高度）
    因此table高度等于honey高度
    相对定位、绝对定位、固定定位都能用关键字：top、bottom、left、right、z-index
    注意：父元素设置相对定位、绝对定位、固定定位，子元素设置绝对定位，都是以父元素为参考

    float半脱离: 脱离了文档流，不脱离文本流
    绝对定位、固定定位全脱离

    position: static;静态定位/常规定位/自然定位  作用：使元素定位于常规流/自然流中   忽视top、bottom、left、right、z-index，是这些关键字作用失效
    position: fixed;固定定位  以浏览器窗口为参考，脱离文档
*/
    table {
        width: 100%;
        overflow: hidden;
        text-align: center;
        border-collapse: collapse;
        border-radius: 8px;
        position: relative;
        left: 0px;
        top: -40px;

        tr {
            td {
                font-size: 20px;
                font-weight: 500;
                height: 58px;
                padding: 5px;
                box-sizing: border-box;
                line-height: 28px;
                color: #933d3d;
                vertical-align: middle;
                background: linear-gradient(180deg, #fceff0 0%, #ffcecf 53.12%, #fff3f4 100%);
                box-shadow: inset -1px -1px 0 #fff;



                b {
                    font-weight: 400;
                }
            }

            &:nth-of-type(1) {
                td {
                    color: #fff;
                    background: linear-gradient(180deg,
                            #ff9b79 14.47%,
                            #f0433f 42.71%,
                            #e21f1b 66.57%,
                            #ff8e67 98.06%);
                    box-shadow: inset -1px -1px 0 #fff;
                }
            }
        }
    }
    // 宽高覆盖整个浏览器
    .regular {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: rgba(121, 132, 158, 0.3);
    }

}
</style>
