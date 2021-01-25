import Mock from 'mockjs' // npm install mockjs --save
import domain from '../../src/api/domain'

/**
 * 接受所以暴露export default
 * import * as obj from './'
 */
import menu from './menu/menu.json'
import power from './menu/power.json'

import selectDefaultCity from './map/selectDefaultCity.json'
import orgCityListFull from './map/orgCityListFull.json'
import allCityPriceAnalysis from './map/allCityPriceAnalysis.json'
import selectProjectByProjectName from './map/selectProjectByProjectName.json'
import priceAnalysisList from './PriceAnalysis/priceAnalysisList.json'
import priceAnalysisTrendData from './PriceAnalysis/priceAnalysisTrendData.json'


import ar from './ar.js'


// 设置全局延时 没有延时的话有时候会检测不到数据变化 建议保留
Mock.setup({
    timeout: '300-600'
})
//    url:      /\/user\/login/    指的是  /user/login
//    请求方式:    /get|post/i    指的是get和post请求都可以


/**
 * 菜单1
 * @param
 */
Mock.mock(domain + "/role/menu", "post", menu);
/**
 * 所在区域和选择项目
 * @param
 */
Mock.mock(domain + "/role/power", "post", power);
/**
 * 定位失败后，默认城市
 * @param
 */
Mock.mock(domain + "/role/selectDefaultCity", "post", selectDefaultCity);
/**
 * 选择城市
 * @param
 */
Mock.mock(domain + "/mktinformationoperativemenu/orgCityListFull", "post", orgCityListFull);
/**
 * 项目列表
 * @param
 */
Mock.mock(domain + "/priceAnalysis/allCityPriceAnalysis", "post", allCityPriceAnalysis);
/**
 * 搜索项目
 * @param
 */
Mock.mock(domain + "/priceAnalysis/selectProjectByProjectName", "post", selectProjectByProjectName);
/**
 * 项目详情
 * @param
 */
Mock.mock(domain + "/priceAnalysis/priceAnalysisList", "post", priceAnalysisList);
/**
 * 项目详情图表
 * @param
 */
Mock.mock(domain + "/priceAnalysis/priceAnalysisTrendData", "post", priceAnalysisTrendData);



Mock.mock(domain + "/accountsReceivable/inTransitMortgage", "post", ar.inTransitMortgage);
Mock.mock(domain + "/accountsReceivable/overdueActualTime", "post", ar.overdueActualTime);
Mock.mock(domain + "/accountsReceivable/overdueMortgageTotal", "post", ar.overdueMortgageTotal);
Mock.mock(domain + "/accountsReceivable/overdueProcessingTotal", "post", ar.overdueProcessingTotal);
Mock.mock(domain + "/accountsReceivable/selectBylist", "post", ar.selectBylist);
Mock.mock(domain + "/accountsReceivable/structuralAnalysisList", "post", ar.structuralAnalysisList);
Mock.mock(domain + "/accountsReceivable/structuralMortgage", "post", ar.structuralMortgage);




/**
 * 无需暴露，main.js加载加载过mock就行
 * export default Mock;
 */
