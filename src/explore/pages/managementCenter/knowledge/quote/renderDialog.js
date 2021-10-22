import Vue from 'vue';

export default function({
    VueComponent = null,
    injectionOptions = {},
    dialogProps = {},
    dialogListeners = {},
    componentProps = {},
    componentListeners = {}
} = {}) {
    console.log('-----触发-----')
    if (!VueComponent) {
        throw new Error('必须的参数：vueComponent');
    }

    const genDefaultDialogProps = {
        title: '弹窗标题',
        closeOnClickModal: false,// 是否可以通过点击 遮罩层 关闭 Dialog
        width: '800px'
    };
    /*
        Vue.extend创建构造器 --- js动态渲染组件
        类似 Vue.component --- 不是动态

        https://cn.vuejs.org/v2/guide/render-function.html#%E6%B7%B1%E5%85%A5%E6%95%B0%E6%8D%AE%E5%AF%B9%E8%B1%A1
    */
    const DialogComponentConstructor = Vue.extend({
        name: 'DialogComponentConstructor',
        // template: '<p>{{firstName}} {{lastName}} aka {{alias}}</p>',
        // el: '#app',
        components: {
            VueComponent
        },
        data() {
            return {
                componentListeners,
                curDialogListeners: {// 对话框事件
                    ...dialogListeners,
                    closed: (...args) => {
                        // 传入的方法先执行
                        if (dialogListeners.closed) {
                            dialogListeners.closed.apply(null, args);
                        }

                        
                        this.handleClosed();
                    }
                },
                visible: false
            };
        },
        computed: {
            componentProps() {// 组件Props
                return componentProps;
            },
            curDialogProps() {// 对话框Props
                return Object.assign(genDefaultDialogProps, dialogProps);
            },
        },
        created() {
            this.hashChangeFn = () => {
                this.handleClosed();
            };

            // hashChange ，组件单独注入需要手动销毁
            window.addEventListener('hashchange', this.hashChangeFn, false);
        },
        beforeDestroy() {
            console.log('DialogComponent beforeDestroy');
        },
        methods: {
            show() {// 打开对话框
                this.visible = true;
            },
            close() {// 关闭对话框
                this.visible = false;
            },
            handleClosed() {// 销毁dialog的dom
                window.removeEventListener('hashchange', this.hashChangeFn);
                this.$destroy();
                this.$el.parentElement.removeChild(this.$el);
            }
        },
        render(createElement) {
            /*
                createElement(参数1, 参数2, 参数3)
                参数1：标签 (div, 已注册组件)
                参数2：{} 属性和事件
                参数3：'标签内容' 或  [子节点] 或 插槽that.$slots.default
            */

            const self = this;
            return createElement('el-dialog', {
                on: {
                    ...this.curDialogListeners,
                    'update:visible': function update(val) {
                        self.visible = val;
                    }
                },
                props: {
                    visible: this.visible,// 对话框开启控制器
                    ...this.curDialogProps,
                },
            }, [
                createElement(VueComponent, {
                    on: this.componentListeners,
                    props: this.componentProps,
                })
            ]);
        },
    });

    const componentDialog = (new DialogComponentConstructor({
        ...injectionOptions,
    })).$mount();// 实例和挂载
    console.log('-componentDialog', componentDialog);
    document.body.appendChild(componentDialog.$el);

    componentDialog.$nextTick(() => {
        componentDialog.show();
    });// 下次Dom更新执行

    return componentDialog;
};
