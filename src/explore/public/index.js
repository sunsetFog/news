import frog from './modular/frog'
import echart from './modular/echart'
import accumulation01 from './modular/accumulation01'
import regs from './modular/regular'
import callback from './modular/callback'

const comic = { // es6合并对象
    ...frog,
    ...echart,
    ...accumulation01,
    ...regs,
    ...callback
}
export default comic