export default {
    data() {
        return {
            dialog_title: '添加菜单',
            dialogVisible: false,
            addAndEditForm: {
                title: '',
                parentId: [],
                name: '',
                icon: '',
                path: '',// +
                hidden: 0,
                cache: 0,// +
                sort: 0
            },
            rulesCheck: {},
            editSaveRow: {},
            level_list: [],
            defaultProps: {// 替换结构字段，不用处理数据
                children: 'children',
                value: 'id',
                label: 'title'
            }
        }
    },
    methods: {
        addWay() {
            this.dialog_title = "添加菜单";
            this.dialogVisible = true;
            this.initForm();
        },
        editWay(row) {
            this.editSaveRow = row
            this.dialog_title = "编辑菜单";
            this.dialogVisible = true;
            this.initForm(row);
        },
        initForm(row = {}) {
            let that = this;
            that.addAndEditForm = {
                title: row.title || '',
                parentId: [row.parentId],
                name: row.name || '',
                icon: row.icon || '',
                path: row.path || '',
                hidden: row.hidden || 0,
                cache: row.cache || 0,
                sort: row.sort || 0
            }
            console.log("11--", that.addAndEditForm)
        },
        cancelWay() {
            this.dialogVisible = false;
        },
        sureWay() {
            if (this.dialog_title == '添加菜单') {
                this.addSure();
            } else if (this.dialog_title == '编辑菜单') {
                this.editSure();
            }
        },
        paramsWay() {
            let that = this;
            console.log("--22", that.addAndEditForm.parentId)
            return {
                title: that.addAndEditForm.title,
                parentId: that.addAndEditForm.parentId[0],
                name: that.addAndEditForm.name,
                icon: that.addAndEditForm.icon,
                path: that.addAndEditForm.path,
                hidden: that.addAndEditForm.hidden,
                cache: that.addAndEditForm.cache,
                sort: that.addAndEditForm.sort
            };
        },
        addSure() {
            let that = this;
            let params = that.paramsWay();
            that.$apihttp({
                url: process.env.core_url + '/sky/menu/add',
                method: 'post',
                data: params
            })
                .then(res => {
                    if (res.code == '200') {
                        that.menuWay();
                        that.dialogVisible = false;
                        that.$message({
                            type: 'success',
                            message: '添加成功!'
                        });
                    }
                })
                .catch(err => {
                    console.log('error', err);
                });
        },
        editSure() {
            let that = this;
            let params = that.paramsWay();
            params.id = that.editSaveRow.id;
            that.$apihttp({
                url: process.env.core_url + '/sky/menu/update',
                method: 'post',
                data: params
            })
                .then(res => {
                    if (res.code == '200') {
                        that.menuWay();
                        that.dialogVisible = false;
                        that.$message({
                            type: 'success',
                            message: '修改成功!'
                        });
                    }
                })
                .catch(err => {
                    console.log('error', err);
                });
        }
    }
}