

/**
 * https://cn.vuejs.org/v2/guide/custom-directive.html
 * @el   指令所绑定的元素，可以用来直接操作 DOM
 * @binding 一个对象   value：指令的绑定值
 * @vnode 虚拟节点
 */

const operationAuth = {}

const install = function (Vue) {
    Vue.directive('operation-auth', {// v-operation-auth
        // 只调用一次，指令与元素绑定时调用
        bind: function (el, binding, vnode) {
            console.log('---bind---', el, binding, vnode);
            const key = binding.value
            if (!key) {// 不带值，结束方法
                return
            }

            let buttonPermissions = JSON.parse(sessionStorage.getItem('buttonPermissions')) || [];
            for(let i=0;i<buttonPermissions.length;i++){
                if(buttonPermissions[i].code == key){
                    if(buttonPermissions[i].disabled == 'Y'){
                        el.style.visibility = 'visible';
                        el.style.cursor = 'not-allowed';
                        el.style.color = '#c0c4cc';
                        el.setAttribute('disabled', true);
                        break
                    }else if(buttonPermissions[i].disabled == 'N'){
                        el.style.visibility = 'visible';
                        el.setAttribute('disabled', false);
                        break
                    }else if(buttonPermissions[i].displayed == 'Y'){
                        el.style.visibility = 'visible';
                        break
                    }else if(buttonPermissions[i].displayed == 'N'){
                        el.style.visibility = 'hidden';
                        break
                    }else{
                        el.parentNode.removeChild(el)
                    }
                }
            }

        },
        // 被绑定元素插入父节点时调用
        inserted(el, binding, vnode) {
            console.log('---inserted---', el, binding, vnode);
        },
        // 更新时调用
        update(el, binding, vnode) {
            console.log('---update---', el, binding, vnode);
        },
        // 更新后调用
        componentUpdated(el, binding, vnode) {
            console.log('---componentUpdated---', el, binding, vnode);
        },
        // 只调用一次，指令与元素解绑时调用
        unbind(el, binding, vnode) {
            console.log('---unbind---', el, binding, vnode);
        }
    })
}

operationAuth.install = install
export default operationAuth