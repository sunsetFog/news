export default {
    data() {
        return {
            dialog_title: '添加用户',
            dialogVisible: false,
            guide_active: 0,
            addAndEditForm: {
                productCategoryId: [],
                name: '',
                subtitle: '',
                brandId: '',
                introduce: '',
                productSn: '',
                price: 0,
                market_value: 0,
                stock: 0,
                company: '',
                weight: '',
                sort: 0
            },
            rulesCheck: {},
            editSaveRow: {}
        }
    },
    methods: {
        addWay() {
            this.dialog_title = "添加用户";
            this.dialogVisible = true;
            this.initForm();
        },
        editWay(row) {
            this.editSaveRow = row
            this.dialog_title = "编辑用户";
            this.dialogVisible = true;
            this.initForm(row);
        },
        initForm(row = {}) {
            let that = this;
            // that.addAndEditForm.username = row.username || '';
            // that.addAndEditForm.icon = row.icon || '';
            // that.addAndEditForm.nickName = row.nickName || '';
            // that.addAndEditForm.email = row.email || '';
            // that.addAndEditForm.password = row.password || '';
            // that.addAndEditForm.note = row.note || '';
            // that.addAndEditForm.status = row.status || true;
        },
        cancelWay() {
            this.dialogVisible = false;
        },
        sureWay() {
            if (this.dialog_title == '添加用户') {
                this.addSure();
            } else if (this.dialog_title == '编辑用户') {
                this.editSure();
            }
        },
        addSure() {
            let that = this;
            let params = {
                username: that.addAndEditForm.username,
                icon: that.$refs.refUpload.download_url,
                nickName: that.addAndEditForm.nickName,
                email: that.addAndEditForm.email,
                password: that.addAndEditForm.password,
                note: that.addAndEditForm.note,
                status: that.addAndEditForm.status ? 1 : 0
            }
            that.$apihttp({
                url: process.env.core_url + '/sky/admin/register',
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
                username: that.addAndEditForm.username,
                icon: that.$refs.refUpload.download_url,
                nickName: that.addAndEditForm.nickName,
                email: that.addAndEditForm.email,
                password: that.addAndEditForm.password,
                note: that.addAndEditForm.note,
                status: that.addAndEditForm.status ? 1 : 0
            }
            that.$apihttp({
                url: process.env.core_url + '/sky/admin/update',
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