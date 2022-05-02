<template>
    <section>
        <img class="fish" style="width: 120px;height: 120px;zoom: 100%" src="@static/picture/login/fish.png" title="这是图片" alt="哎呀，图片加载失败"/>
        <div id="box" style="width: 100%;height: 50px;background: blue;">
			<p id="pp" style="width: 100px;height: 50px;background: yellow;margin: 0 auto;">子元素范围</p>
		</div>
    </section>
</template>

<script>
/*
    事件
        1.onload:用户打开页面执行该事件，放在body内部
        2.onchange：当表单内容发生改变时触发该事件,div,p等非表单元素没有改属性
        3.onfocus：表单获取焦点事件
        4.onblur：表单失去焦点事件
        5.onmouseover：鼠标悬浮事件
        6.onmouseout: 鼠标离开事件
        7.onmousedown：鼠标按下时触发该事件
        8.onmouseup：鼠标抬起事件
        9.onclick：鼠标点击完毕事件
        10.ondblclick：双击事件
        移动端事件
        ontouchstart
        ontouchmove
        ontouchend

        在某情况会去掉on，或用@代替on
*/
export default {
    name: "incident",
    data() {
        return {

        }
    },
    created() {

    },
    methods: {
        demo2(){
            /* 键盘事件
            onkeydown  按下键盘触发事件
            keyCode  键盘码，键盘上每个按键对应一个码,通过event参数来调用
            onkeyup  键盘抬起事件

            event{
                ctrlKey: Ctrl键按下true，抬起false
                shiftKey: shift键按下true，抬起false
                altKey: alt键按下true，抬起false
            }	 */
            document.onkeydown = function(event){
                // 用||或，前面值没有，就取后面的值
                var ev = event || window.event;//event  谷歌、火狐等，浏览器内置参数      window.event  IE浏览器内置参数    这是兼容性写法
                if(ev.ctrlKey){
                    console.log('你按下了Ctrl键');
                }
            }
            // 鼠标事件
            // onmousemove 鼠标移动事件
            // onmousewheel  鼠标滚轮事件
            // document.onmousemove = function(event){
            //     var ev = event||window.event;
            //     console.log('纵横坐标',ev.clientX+" "+ev.clientY);//ev.clientX 横坐标   ev.clientY:纵坐标    默认从左上角开始
            // }
            let fishImg = document.getElementsByClassName("fish")[0];
            fishImg.onmousewheel = function(event){//滚轮放大缩小图片
                var ev = event||window.event;//兼容性处理
                ev.preventDefault();//阻止浏览器默认动作,滚动条就不会下滑了，对应vue的@click.prevent
                //event.wheelDelta:该属性返回-120或者120
                if(ev.wheelDelta==120){//滚轮向上滚动

                }else if(ev.wheelDelta==-120){//滚轮向下滚轮

                }
                //样式   zoom: 100%;  等于100%是原图、大于100%是放大、小于100%是缩小
                var zoom = parseInt(this.style.zoom);//获取zoom样式值
                var delta = event.wheelDelta/12;//不是10就是-10
                zoom += delta;
                if(zoom>0){
                    this.style.zoom = zoom + "%";
                }
            }
        },
        demo6(){
            //事件冒泡：事件从子元素传递到父元素(从内向外传递),浏览器默认的事件传递方式（前提父子元素都绑定了事件）
            let box = document.getElementById("box");
            let pp = document.getElementById("pp");
            box.onclick = function(event){
                console.log('父元素事件', event)
            }
            pp.onclick = function(event){
                var ev = event || window.event;
                // ev.stopPropagation();//阻止冒泡（不加这个，父元素事件也会触发），对应vue的@click.stop
                console.log('子元素事件', event);
            }
            //事件捕获：事件从父元素传递到子元素(从外向内传递)（前提父子元素都绑定了事件）
            // 事件监听
            //1.不兼容IE浏览器
            box.addEventListener('click',function(event){//参数1：事件类型(去掉on)  参数2：回调函数  参数3：用来指定该事件为事件冒泡还是事件捕获,默认false事件冒泡，true事件捕获
                var ev = event||window.event;
                console.log('添加监听');
            },false);

            // 2.兼容IE浏览器
            // attachEvent();//添加监听
            // detachEvent(参数1,参数2)//移除事件监听

            //事件委托：利用事件冒泡的原理，将子元素的事件委托给父元素或者祖先元素来执行
            // 事件源：触发事件的当前对象，需要通过父元素查找该事件源
            box.addEventListener('click',function(event){
                var ev = event||window.event;
                var target = ev.target || ev.srcElement;//事件源对象(兼容IE)
                let is_label = target.nodeName.toLowerCase();
                console.log('父元素事件，点子元素啊',is_label);
                if(is_label == "p"){//点击就指定了该p标签上颜色，li标签的事件委托给了父元素
                    target.style.background = "red";
                }
            },false);
        },
    }
}
</script>

