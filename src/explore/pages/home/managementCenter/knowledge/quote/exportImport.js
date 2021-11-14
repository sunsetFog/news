

const obj = {
    fraction: 145,
    mathematics: function() {

        return '-mathematics-'
    }
}

let { fraction, mathematics } = obj;
// let { fraction as maths } = obj; 这里不能用as
console.log('实用---花括号取对象属性', fraction, mathematics())

export default { name: '默认导出' }

export var haha = 988;// 注意export的写法

export function gogo() {
    console.log('--gogo--')
}

