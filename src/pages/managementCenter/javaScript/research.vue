<template>
  <section>
      <img style="width: 100px;height: 45px;" src="@static/picture/breezy/1.jpg"/>
  </section>
</template>

<script>
import lodash from 'lodash'
export default {
    name: 'research',
    data(){
        return{

        }
    },
    created () {
        this.demo5();
        /**
         *                  主题: 新数据和原数据的变化
         * 
         *    ---     是否指向同一数据      第一层》是否一同改变        第二层以下》是否一同改变
         *    赋值          是                  是                         是
         *    浅拷贝        否                  否                         是
         *    深拷贝        否                  否                         否
         */
    },
    methods: {
        demo1 () {
            /* 赋值 */
            let old =[0,1,2,[3]];
            let sunNew = old;
            old[0] = 'yi';
            console.log('赋值-第一层改变：新数据=', sunNew , '原数据=',old);
            sunNew[3][0] = 'er';
            console.log('赋值-第一层改变：新数据=', sunNew , '原数据=',old);
        },
        demo2 () {
            /* 
                浅拷贝 --- 方法一
                es6:将源对象的所有可枚举属性复制到目标对象中
                Object.assign(参数一(目标对象), 参数二(源对象)，参数三(源对象));     ---还可以逗号加参数
                同属性覆盖
                参数是null 和 undefined 会被忽略
                参数不是对象，就转为对象来用    3  转 {3}
             */
            let sunNew = { a: 1 , b: 2};
            let old = { b: 6, k: { y : 64 } };
            Object.assign(sunNew, old);
            old.b = 'yi';
            console.log('浅拷贝-第一层改变：新数据=', sunNew , '原数据=', old);
            sunNew.k.y = 'er';
            console.log('浅拷贝-第二层改变：新数据=', sunNew , '原数据=', old);
        },
        demo3 () {
            /* 
                浅拷贝 --- 方法二
                lodash.js
             */
            let sunNew = { a: 1 , b: 2};
            let old = { b: 6, k: { y : 64 } };
            sunNew =  lodash.clone(old);
            old.b = 'yi';
            console.log('浅拷贝-第一层改变：新数据=', sunNew , '原数据=', old);
            sunNew.k.y = 'er';
            console.log('浅拷贝-第二层改变：新数据=', sunNew , '原数据=', old);
        },
        demo4 () {
            /* 
                深拷贝---方法一：   推荐
                JSON转换
            */
           let old = { b: 6, k: { y : 64 } };
           let sunNew = JSON.parse(JSON.stringify(old));
           old.b = 'yi';
           sunNew.k.y = 'er';
           console.log('深拷贝: 第一和第二层改变：新数据=', sunNew , '原数据=', old);
        },
        demo5 () {
            /* 
                深拷贝---方法二：   推荐
                lodash.js
            */
           let old = { b: 6, k: { y : 64 } };
           let sunNew =  lodash.cloneDeep(old);
        //    let sunNew =  this.deepCopy(old);
        //    let sunNew =  this.cloneLoop(old);
           old.b = 'yi';
           sunNew.k.y = 'er';
           console.log('深拷贝: 第一和第二层改变：新数据=', sunNew , '原数据=', old);
        },

        /* ---以下可以忽略--- */

        deepCopy( source ) {
            /* 
                深拷贝---方法三：   不推荐
                递归函数
                缺点：
                    （1）无法保持引用
                    （2）当数据的层次很深，会栈溢出
            */
            let ly = typeof source === 'object' && source !== null
            if (!ly) return source; //如果不是对象的话直接返回
            let target = Array.isArray( source ) ? [] : {} //数组兼容
            for ( var k in source ) {
                if (source.hasOwnProperty(k)) {
                    if ( typeof source[ k ] === 'object' ) {
                        target[ k ] = this.deepCopy( source[ k ] )
                    } else {
                        target[ k ] = source[ k ]
                    }
                }
            }
            return target
        },
        cloneLoop(x) {
            /* 
                深拷贝---方法四：   推荐
                防栈（zhan）溢出函数
                优点：
                    （1）不会栈溢出
                    （2）支持很多层级的数据
            */
            let root = {};

            // 栈
            let loopList = [
                {
                    parent: root,
                    key: undefined,
                    data: x,
                }
            ];

            while(loopList.length) {
                // 深度优先
                let node = loopList.pop();
                let parent = node.parent;
                let key = node.key;
                let data = node.data;

                // 初始化赋值目标，key为undefined则拷贝到父元素，否则拷贝到子元素
                let res = parent;
                if (typeof key !== 'undefined') {
                    res = parent[key] = {};
                }

                for(let k in data) {
                    if (data.hasOwnProperty(k)) {
                        if (typeof data[k] === 'object') {
                            // 下一次循环
                            loopList.push({
                                parent: res,
                                key: k,
                                data: data[k],
                            });
                        } else {
                            res[k] = data[k];
                        }
                    }
                }
            }

            return root;
        }
    }
}
</script>

<style lang="less" scoped>
</style>