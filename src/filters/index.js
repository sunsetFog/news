export default {
    // 数字添加百分号
    numPercent(value) {
        return isNaN(value)?'不是数字':value+'%'
    }
};