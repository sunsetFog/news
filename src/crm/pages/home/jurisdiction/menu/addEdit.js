export default {
    data() {
        return {
            dialog_title: '添加菜单',
            dialogVisible: false,
            addAndEditForm: {
                title: '',
                parentId: null,
                name: '',
                icon: '',
                status: true,
                sort: 0
            },
            rulesCheck: {},
            editSaveRow: {},
            level_list: [
                { id: 0, title: "无上级菜单" }
            ]
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
            that.addAndEditForm.title = row.title || '';
            that.addAndEditForm.parentId = row.parentId;
            that.addAndEditForm.name = row.name || '';
            that.addAndEditForm.icon = row.icon || '';
            that.addAndEditForm.status = row.status || true;
            that.addAndEditForm.sort = row.sort || 0;
            
            for (let index = 0; index < that.saveData.length; index++) {
                let item = that.saveData[index];
                that.level_list.push({
                    id: item.id,
                    title: item.title
                })
            }
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
        addSure() {
            let that = this;
            let params = {
                title: that.addAndEditForm.title,
                parentId: that.addAndEditForm.parentId,
                name: that.addAndEditForm.name,
                icon: that.addAndEditForm.icon,
                hidden: that.addAndEditForm.status ? 0 : 1,
                sort: that.addAndEditForm.sort
            }
            that.$apihttp({
                url: process.env.core_url + '/sky/menu/add',
                method: 'post',
                data: params
            })
                .then(res => {
                    if (res.code == '200') {
                        that.queryWay();
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
            let params = {
                id: that.editSaveRow.id,
                title: that.addAndEditForm.title,
                parentId: that.addAndEditForm.parentId,
                name: that.addAndEditForm.name,
                icon: that.addAndEditForm.icon,
                hidden: that.addAndEditForm.status ? 0 : 1,
                sort: that.addAndEditForm.sort
            }
            that.$apihttp({
                url: process.env.core_url + '/sky/menu/update',
                method: 'post',
                data: params
            })
                .then(res => {
                    if (res.code == '200') {
                        that.queryWay();
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