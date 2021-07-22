

/**
 * https://cn.vuejs.org/v2/guide/custom-directive.html
 * @el   指令所绑定的元素，可以用来直接操作 DOM
 * @binding 一个对象   value：指令的绑定值
 * @vnode 虚拟节点
 */
function getOperationAuth() {
    return 'show'
}

const operationAuth = {}

const install = function (Vue) {
    Vue.directive('operation-auth', {
        // 只调用一次，指令与元素绑定时调用
        bind: function (el, binding, vnode) {
            console.log('---bind---', el, binding, vnode);
            const key = binding.value
            if (!key) {
                return
            }
            el.style.visibility = 'hidden'
            const auth = getOperationAuth(key)
            // 可用
            if (auth === 'show') {
                el.style.visibility = 'visible'
            }
            // 禁用
            else if (auth === 'disabled') {
                el.style.visibility = 'visible'
                el.setAttribute('disabled', true)
                el.className = el.className + ' is-disabled'

                //el-select 禁用
                if (el.className.indexOf("el-select") !== -1) {
                    el.children[0].className = el.children[0].className + ' is-disabled'
                    el.style.pointerEvents = 'none'
                    el.children[0].children[1].children[0].style.pointerEvents = 'none'
                }

            } else {
                el.parentNode.removeChild(el)
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