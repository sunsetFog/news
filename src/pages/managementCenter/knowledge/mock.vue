<template>
<section id="mock">
<!--mock本地模拟数据-->
    <el-input v-model="obj.id" placeholder="请输入id" style="width: 200px" />
    <el-input v-model="obj.name" placeholder="请输入name" style="width: 200px" />
    <el-input v-model="obj.content" placeholder="请输入content" style="width: 200px" />
    <el-button type="primary" @click="addList">添加</el-button>
    <el-button type="warning" @click="updateList">修改</el-button>
    <ul>
      <li v-for="item in list">
        id={{item.id}}
        //name=:{{item.name}}
        //content={{item.content}}
        <el-button @click="deleteList(item.id)">删除</el-button>
      </li>
    </ul>
</section>
</template>

<script>
//npm install mockjs --save
import mock from '../../../../static/study/mock.js';
	export default{
		data(){
			return{
				list: [],
				obj: {  //将添加的数据存到obj对象中
          id: '',
          name: '',
          content: ''
				}
			}
		},
		created(){
      //查询列表数据
      this.getData();
      this.getJson();
		},
		 methods:{
       getJson(){
          //开发环境模拟本地数据    请查看build/webpack.dev.conf.js
          this.$axios.get('http://localhost:8080/api/goods').then((response) => {
                console.log(response);
          })
          //mock模拟本地数据
          this.$axios.post('http://text.com').then(function(res){
              console.log('moon',res);
          });
       },
			// 查询列表数据
      getData(){
        this.$axios.get('/list').then(res => {
          this.list = res.data.data;
          console.log('查询数据',this.list);
        });
      },

      // 删除列表数据
      deleteList(id){
        this.$axios.post('/list',{
          params: {
           id: id
          }
        }).then(res => {
            this.list = res.data.data;
        });
      },

      // 增加列表数据
      addList(){
        this.$axios.post('/listAdd',{
          params: {
            obj: this.obj
          }
        }).then(res => {
             console.log("请求成功"+res.data.data);
            this.list = res.data.data;
        });
      },

      // 修改列表数据
      updateList(){
        console.log('修改',this.obj);
        var that = this;
        this.$axios.post('/listUpdate',{
          params: {
            obj: this.obj
          }
        }).then(function(res){
          that.list = res.data.data;
          console.log("请求的数据",that.list);
        });
      }

		 }
	}
</script>

<style lang="less" scoped>
#mock{
  ul{
    li{
      .mixin_li(100%,50px);
      color: @color_blueviolet;
    }
  }
}
</style>
