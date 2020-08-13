<template>
    <section>

    </section>
</template>

<script>
export default {
    name: 'research',
    data(){
        return{

        }
    },
    mounted(){
        this.demo2();
    },
    methods: {
        demo1(value){
            //浅拷贝
            //直接用=赋值
            let a=[0,1,2,3,4];
            let b=a;
            a[0]=999;
            console.log('1浅拷贝',a,b);

            // Object.assign(参数)   复制到目标对象
            var obj = {
                t: 1,
                u: 2
            }
            var obj2 = Object.assign(obj);
            obj2.t = 3;
            console.log('2浅拷贝',obj2,obj);
            //for···in只循环第一层
            let obj6 = {};
            let obj5 = {
                a: 1,
                b: 2,
                c: {
                    d: 3
                    }
                }
            for (let key in obj5) {
                obj6[key] = obj5[key];
            }
            obj6.a = 3;
            obj6.c.d = 888;
            console.log('3浅拷贝',obj5,obj6);//obj5第一层没变，第二层拷贝变了
        },
        demo2(){
            // 深拷贝
        }
    }
}
</script>

<style lang="less" scoped>

</style>