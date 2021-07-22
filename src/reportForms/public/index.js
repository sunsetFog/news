import frog from './modular/frog'
import echart from './modular/echart'
import accumulation01 from './modular/accumulation01'

const comic = { // es6合并对象
    ...frog,
    ...echart,
    ...accumulation01
}
export default comic