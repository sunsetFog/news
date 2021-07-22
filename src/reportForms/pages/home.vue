<template>
  <section id="home">
      <header-bar title="启明星经营看板"></header-bar>
      <div class="banner"><img src="@static/image/banner3@2x.png"></div>
      <div class="modularization" v-for="(value,sign) in menu_list" :key="sign">
        <label>{{value.type}}</label>
        <div class="modular">
          <div class="modular-cell" v-for="(item,index) in value.children" :key="index">
            <ul>
              <li><img :src="require('@static/image/'+item.icon)" @click="go(item)"></li>
              <li><span @click="go(item)">{{item.name}}</span></li>
            </ul>
          </div>
        </div>
      </div>
  </section>
</template>

<script>
import headerBar from '../components/headerBar.vue'
export default {
    name: "home",
    data() {
        return {
          menu_list: []
        };
    },
    created() {
        this.getMenu()
    },
    mounted() {

    },
    computed: {

    },
    watch: {

    },
    methods: {
        getMenu () {
            let self = this;
            let json = {}
            self.$apihttp({
                url: '/role/menu',
                method: 'post',
                data: json
            }).then((res) => {
                this.menu_list = res.data;
                console.log('城市数据：', res);
            }).catch((err)=>{
                console.log('error', err)
            })
        },
        go (item) {
            // console.log('item', item);
            let self = this;
            let json = {}
            self.$apihttp({
                url: '/role/power',
                method: 'post',
                data: json
            }).then((res) => {
                self.$router.push({ path: item.path,
                    query: {
                        code: res.data[0].code,
                        level: res.data[0].level,
                        name: res.data[0].name
                    }
                })
                console.log('所在区域', res);
            }).catch((err)=>{
                console.log('error', err)
            })
        }
    },
    beforeCreate() {

    },
    components: {
        headerBar
    }
};
</script>


<style lang="less" scoped>
#home {
  height: 100%;
    padding: 0px 0 5px 0px;
    .banner {
        width: 345px;
        height: 215px;
        margin: 0px 0 12px 15px;
        padding: 65px 0 0 0;
        overflow: hidden;
        img {
            width: 100%;
            height: 100%;
            border-radius: 10px;
        }
    }
    .modularization {
      width: 345px;
      color: #fff;
      background-color: #062E41;
      border-radius: 10px;
      margin: 0px 0px 12px 15px;
      font-size: 12px;
      label {
        width: 100%;
        height: 30px;
        text-indent: 10px;
        display: inline-block;
        line-height: 30px;
        text-align: left;
        font-size: 13px;
        font-weight: 700;
      }
      .modular {
        display: flex;
        flex-wrap: wrap;
        .modular-cell {
          flex: 0 0 33.3%;
          ul {
            width: 100%;
            li {
              width: 100%;
              text-align: center;
            }
            li:nth-of-type(1) {
              img {
                width: 60px;
                height: 60px;
              }
            }
            li:nth-of-type(2) {
              height: 30px;
              line-height: 30px;
            }
          }
        }
      }
    }
}
</style>
