<template>
    <section>
        isClass
    </section>
</template>

<script>
export default {
    name: 'isClass',
    data() {
        return {

        }
    },
    created() {
        this.demo1();
        this.demo2();
        this.demo3();
    },
    methods: {
        demo1 () {
            // class 的本质是 function
            // 匿名类
            let Example = class {
                constructor(a) {
                    this.a = a;
                    console.log('99ii')
                }
            }
            console.log('匿名类',Example);     
        },
        demo2 () {
            // 命名类
            class means{
                constructor(money,age) {// 构造器，类的实例化对象时执行
                    // super();
                    this.money = money;
                    this.age = age;
                    console.log('调用',this);
                }
                get money(){// getter函数，随this._money改变而触发
                    console.log('getter');
                    return this._money;
                }
                set money(value){
                    console.log('setter');
                    this._money = value;
                }
                sum(){// setter函数
                    return this.money;
                }
                static bloom(){// 静态方法
                    return 1000;
                }

            }
            console.log('默认name属性',means.name);
            let surprised = new means(12,15);// 类的实例化,先调用setting方法，再调用constructor方法     surprised.__proto__ === means.prototype并且means.prototype.constructor === surprised.constructor === means
            console.log('类的实例化',surprised);// 返回this对象
            console.log('调用隐式原型(__proto__)里的方法',surprised.sum());
        },
        demo3 () {
            // 类的继承
            class Father {
                test(){
                    return '01111';
                }
                static test1(){
                    return '02222';
                }
            }
            class Child extends Father {
                constructor(fan) {
                    super();// 必须有super,且要在this前
                    this.fan = fan;
                    console.log('调用父类方法',super.test());
                    console.log('类的继承',this);
                }
                static test3(){
                    return super.test1();
                }
            }
            console.log('调用静态方法',Child.test3());
            let intellect = new Child(98);
        }
    }
}
</script>

