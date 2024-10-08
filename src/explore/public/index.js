import frog from './modular/frog'
import echart from './modular/echart'
import accumulation01 from './modular/accumulation01'
import regs from './modular/regular'
import callback from './modular/callback'
import indexDb from './modular/indexDb'
import themeSkin from './modular/themeSkin'
import cookies from './modular/cookies'
/*
    全局方法
 */
const comic = { // es6合并对象
    ...frog,
    ...echart,
    ...accumulation01,
    ...regs,
    ...callback,
    ...indexDb,
    ...themeSkin,
    ...cookies
}
export default comic