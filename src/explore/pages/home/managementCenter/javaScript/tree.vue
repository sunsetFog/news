<template>
    <section>
        树形数据结构
    </section>
</template>

<script>
export default {
    name: 'tree01',
    created() {
        this.demo2()
    },
    methods: {
        demo1(){
            // 遍历树(理解不了，死记就行)      js 遍历树的层级关系的实现  https://www.cnblogs.com/xuqp/p/10954849.html
            const list = [
                { id: "01", parentId: "0", name: "第一层", children: [] },
                { id: "01-22", parentId: "01", name: "第二层", children: [] },
                { id: "03", parentId: "0", name: "第一层", children: [] },
                { id: "01-22-12", parentId: "01-22", name: "第三层", children: [] }
            ];
            let mapList = {};
            let tree = [];
            list.forEach(item => {
                mapList[item.id] = item;// id
            });
            console.log("---mapList---", JSON.parse(JSON.stringify(mapList)));
            list.forEach(item => {
                const termObj = mapList[item.parentId];// parentId
                if (!termObj) {// 是undefined，确认第一级
            　　　　if (!item.children) {// item加属性
            　　　　　　item.children = []
            　　　　}
                    tree.push(item);
                    console.log("--tree--item--", JSON.parse(JSON.stringify(item)));
                } else {// 不是undefined, termObj的第二级
            　　　　　if (!termObj.children) {// termObj加属性
            　　　　　　　termObj.children = []
            　　      }
                    termObj.children.push(item);// termObj怎么进tree的？？？
                    console.log("--termObj--", JSON.parse(JSON.stringify(termObj)));
                }
            });
            console.log("遍历树", tree);
        },
        demo2(arr) {
            /*
                转树形结构，用递归
                已封装好，删arr，调用this.demo6(arr)就行
                其实两个map循环就可以了的，加入filter能减少遍历，优化性能

                方法：有规律的，可以先得出初始值，再往后推算

                最简单做法：
                    分第一级数组，第二级数组，第三级数组
                    3和2循环得出2含chidren，2和1循环得出1含children
             */
            arr = [
                { id: 1, parentId: 0, title: '商品' },
                { id: 2, parentId: 1, title: '商品列表' },
                { id: 3, parentId: 1, title: '添加商品' },
                { id: 4, parentId: 1, title: '商品分类' },
                { id: 5, parentId: 1, title: '商品类型' },
                { id: 6, parentId: 1, title: '品牌管理' },
                { id: 7, parentId: 0, title: '订单' },
                { id: 8, parentId: 7, title: '订单列表' },
                { id: 9, parentId: 7, title: '订单设置' },
                { id: 10, parentId: 7, title: '退货申请处理' },
                { id: 11, parentId: 7, title: '退货原因设置' },
                { id: 12, parentId: 0, title: '营销' },
                { id: 13, parentId: 12, title: '秒杀活动列表' },
                { id: 14, parentId: 12, title: '优惠券列表' },
                { id: 16, parentId: 12, title: '品牌推荐' },
                { id: 17, parentId: 12, title: '新品推荐' },
                { id: 18, parentId: 12, title: '人气推荐' },
                { id: 19, parentId: 12, title: '专题推荐' },
                { id: 20, parentId: 12, title: '广告列表' },
                { id: 21, parentId: 0, title: '权限' },
                { id: 22, parentId: 21, title: '用户列表' },
                { id: 23, parentId: 21, title: '角色列表' },
                { id: 24, parentId: 21, title: '菜单列表' },
                { id: 25, parentId: 21, title: '资源列表' },
            ];
            function cucumber(item) {
                let children = [];
                arr = arr.filter(function(val, index) {
                    let flag = val.parentId == item.id;
                    if (flag) {
                        children.push(val);
                    }
                    return !flag;
                });
                /*
                    children空数组就退出递归
                    找children的下一级
                    只是遍历调用方法，得出新的数组
                */
                children = children.map(function(val, index) {
                    return cucumber(val);
                });

                item.children = children;
                return item; // 返回对象给map的return值
            }

            // 先得出第一级
            let result = [];
            arr = arr.filter(function(item, index) {
                let flag = item.parentId == 0;
                if (flag) {
                    result.push(item);
                }
                return !flag;
            });
            // 后面级递归
            result = result.map(function(item, index) {
                return cucumber(item);
            });
            console.log('--result--', result);
            console.log('--arr--', arr);
            return result;
        },
        demo3() {
            /*
                问题：children级数相同，可以for循环嵌套循环，要是children级数不相同呢？
                高级遍历：递归，调用自身方法
                树形结构数据，用递归遍历
             */
            let list = [
                {
                    id: 1,
                    parentId: 0,
                    title: '商品',
                    children: [
                        { id: 2, parentId: 1, title: '商品列表', children: [] },
                        { id: 3, parentId: 1, title: '添加商品', children: [] },
                        { id: 4, parentId: 1, title: '商品分类', children: [] },
                        { id: 5, parentId: 1, title: '商品类型', children: [] },
                        { id: 6, parentId: 1, title: '品牌管理', children: [] },
                    ],
                },
                {
                    id: 7,
                    parentId: 0,
                    title: '订单',
                    children: [
                        { id: 8, parentId: 7, title: '订单列表', children: [] },
                        { id: 9, parentId: 7, title: '订单设置', children: [] },
                        { id: 10, parentId: 7, title: '退货申请处理', children: [] },
                        { id: 11, parentId: 7, title: '退货原因设置', children: [] },
                    ],
                },
                {
                    id: 12,
                    parentId: 0,
                    title: '营销',
                    children: [
                        { id: 13, parentId: 12, title: '秒杀活动列表', children: [] },
                        { id: 14, parentId: 12, title: '优惠券列表', children: [] },
                        { id: 16, parentId: 12, title: '品牌推荐', children: [] },
                        { id: 17, parentId: 12, title: '新品推荐', children: [] },
                        { id: 18, parentId: 12, title: '人气推荐', children: [] },
                        { id: 19, parentId: 12, title: '专题推荐', children: [] },
                        { id: 20, parentId: 12, title: '广告列表', children: [] },
                    ],
                },
                {
                    id: 21,
                    parentId: 0,
                    title: '权限',
                    children: [
                        { id: 22, parentId: 21, title: '用户列表', children: [] },
                        { id: 23, parentId: 21, title: '角色列表', children: [] },
                        { id: 24, parentId: 21, title: '菜单列表', children: [] },
                        { id: 25, parentId: 21, title: '资源列表', children: [] },
                    ],
                },
            ];
            function recursion(arr) {
                arr = arr || []; //退出递归1. 空数组不会遍历，就不会调用自己了
                for (let i = 0; i < arr.length; i++) {
                    let item = arr[i];
                    //   item.hidden = false; // 添加属性，实现改造自身数组
                    //   delete item["title"]; // 删除属性
                    if (!item.children) {
                        //退出递归2. 结束一次循环，没有children字段，就不会调用自己了
                        continue;
                    }
                    recursion(item.children); // 传children数组
                }
            }
            recursion(list);
        },
    }
}
</script>

<style>
</style>
