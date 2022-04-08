<template>
    <section id="upAndDown">
        <div class="winning-list">
          <p>【中奖名单】</p>
          <div>
            <ul>
              <li v-for="(item,index) in winning_list" :key="index">
                <span>{{item.telephone}}</span>
                <span>{{item.prize}}</span>
              </li>
            </ul>
          </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "upAndDown",
    data() {
        return {
            winning_list: [
                { telephone: '134****2362', prize: '200积分' },
                { telephone: '157****4877', prize: '18元平台体验金' },
                { telephone: '186****9774', prize: '50积分' },
                { telephone: '136****3701', prize: '300积分' },
                { telephone: '115****5513', prize: '50积分' },
                { telephone: '163****5141', prize: '18元平台体验金' },
                { telephone: '193****9322', prize: '200积分' },
                
                { telephone: '134****2362', prize: '200积分' },
                { telephone: '157****4877', prize: '18元平台体验金' },
                { telephone: '186****9774', prize: '50积分' },
                { telephone: '136****3701', prize: '300积分' },
                { telephone: '115****5513', prize: '50积分' },
                { telephone: '163****5141', prize: '18元平台体验金' },
                { telephone: '193****9322', prize: '200积分' }
            ]
        }
    }
}
</script>

<style lang="less" scoped>
/*
向上滚动动画
数组：两份一样的内容
let ul_height = li_height * arr.length
起点：top: -(ul_height / 2 - div_height); 两格的中间
终点：top: 起点 + -ul_height / 2
移动距离：ul_height / 2
*/
#upAndDown {
    width: 100%;
    .winning-list {
        width: 17.5rem;
        height: 9.375rem;
        background-image: image-set(url("~@static/reportForms/luckDraw/lottery_name_list.png") 1x, url("~@static/reportForms/luckDraw/lottery_name_list@2x.png") 2x);
        background-repeat: no-repeat;
        background-size: 100% 100%;
        padding: 0.8rem 1.25rem 0 1.25rem;
        box-sizing: border-box;
        position: absolute;
        left: 2.96rem;
        top: 43.8rem;
        p {
          width: 100%;
          height: 2rem;
          line-height: 2rem;
          text-align: center;
          color: #CA281D;
          font-weight: 700;
          border-bottom: 1px solid #E8C6A2;
          margin-bottom: 0.3rem;
        }
        div {
          width: 100%;
          height: 4.2rem;
          overflow: hidden;
          position: relative;
          @keyframes slideInUp {
              from {
                  transform: translate3d(0, 0, 0);
                  visibility: visible;
              }

              to {
                  transform: translate3d(0, -9.59rem, 0);
              }
          }
          ul {
            width: 100%;
            padding: 0;
            position: absolute;
            left: 0rem;
            top: -5.39rem;
            animation: slideInUp 6s linear 0.1s infinite;
            li {
              width: 100%;
              height: 1.37rem;
              line-height: 1.37rem;
              list-style: none;
              text-align: left;
              color: #B1622A;
              font-size: 0.9rem;
              span:nth-of-type(1){
                float: left;
                margin-left: 0.3rem;
              }
              span:nth-of-type(2){
                float: right;
                margin-right: 0.3rem;
              }
            }
          }
        }
          
    }
}
</style>

