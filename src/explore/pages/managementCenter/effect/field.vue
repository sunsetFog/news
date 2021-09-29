<template>
  <section id="field">
    <!-- :sign="item.sign"是给盒子加属性，可用于座位表标志，好知道位置点。相当于js的setAttribute('sign') -->
    <section v-for="(item,index) in article_list" :sign="item.sign">
      <div class="wonderful-article" :class="{'active_color': item.active_color}">
        <div class="wonderful-article-left">{{item.name}}</div>
        <div class="wonderful-article-right" @click="modify(index)">{{item.setting}}</div>
      </div>
      <div class="modify-content" v-if="item.setting != '设置'">
        修改内容-
        <div class="praise">
          <span>好评:</span>
          <button
            style="margin:5px 0px 0px 10px;"
            v-for="(term,status) in bright_list"
            :class="{'active-praise': term.active}"
            @click="praise(status)"
          >{{term.name}}</button>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  data() {
    return {
      article_list: [],
      bright_list: [
        { id: 1, name: "优美", active: false },
        { id: 2, name: "精彩", active: false },
        { id: 3, name: "脱俗", active: false }
      ]
    };
  },
  created() {
    this.getJson();
  },
  methods: {
    getJson() {
      //后台返回的数据
      var response = [
        { id: 1, sign: "1-1", name: "数据一", bright: [0, 2] },
        { id: 2, sign: "1-2", name: "数据二", bright: [0, 1] },
        { id: 3, sign: "1-3", name: "数据三", bright: [1, 2] }
      ];
      //前端往里添加字段
      for (var i = 0; i < response.length; i++) {
        response[i].active_color = true;
        response[i].setting = "设置";
        response[i].praise = false;
      }
      this.article_list = response;
      console.log("文章", this.article_list);
    },
    //设置修改内容
    modify(index) {
      //初始化
      for (var i = 0; i < this.article_list.length; i++) {
        this.article_list[i].setting = "设置";
        this.article_list[i].active_color = true;
      }
      this.article_list[index].setting = "保存";
      this.article_list[index].active_color = false;
      //初始化好评
      for (var h = 0; h < this.bright_list.length; h++) {
        this.bright_list[h].active = false;
      }
      // this.article_list[index].bright是后台记录高亮的下标，这字段得与后台整合
      for (var k = 0; k < this.article_list[index].bright.length; k++) {
        this.bright_list[this.article_list[index].bright[k]].active = true;
      }
    },
    //好评选择
    praise(index) {
      if (this.bright_list[index].active == true) {
        this.bright_list[index].active = false;
      } else {
        this.bright_list[index].active = true;
      }
      //保存是给这下标，后台保存
    }
  }
};
</script>

<style lang="less" scoped>
#field {
  border-top: 1px solid #ebeef5;
  color: white;
  .active_color {
    border-bottom: 1px solid #ebeef5;
  }
  .wonderful-article {
    width: 100%;
    height: 40px;
    line-height: 40px;
    .wonderful-article-left {
      width: 80%;
      height: 40px;
      float: left;
      text-indent: 20px;
    }
    .wonderful-article-right {
      width: 20%;
      height: 40px;
      float: right;
      text-align: right;
      padding-right: 20px;
      cursor: pointer;
    }
  }
  .modify-content {
    width: 100%;
    height: 80px;
    padding: 5px 20px 0px 20px;
    border-bottom: 1px solid #ebeef5;
    .praise {
      .active-praise {
        background: #2e163d;
        color: white;
      }
      button {
        width: 60px;
        height: 25px;
        border: none;
        outline: none;
        border: 1px solid #ebeef5;
        border-radius: 4px;
      }
    }
  }
}
</style>
