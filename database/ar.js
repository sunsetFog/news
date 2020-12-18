import ar1_inTransitMortgage01 from './AR/inTransitMortgage01.json'
import ar1_inTransitMortgage02 from './AR/inTransitMortgage02.json'
import ar1_overdueActualTime01 from './AR/overdueActualTime01.json'
import ar1_overdueActualTime02 from './AR/overdueActualTime02.json'
import ar1_overdueMortgageTotal01 from './AR/overdueMortgageTotal01.json'
import ar1_overdueMortgageTotal02 from './AR/overdueMortgageTotal02.json'
import ar1_overdueProcessingTotal from './AR/overdueProcessingTotal.json'
import ar1_selectBylist01 from './AR/selectBylist01.json'
import ar1_selectBylist02 from './AR/selectBylist02.json'
import ar1_structuralAnalysisList from './AR/structuralAnalysisList.json'
import ar1_structuralMortgage from './AR/structuralMortgage.json'

import ar2_inTransitMortgage01 from './AR2/inTransitMortgage01.json'
import ar2_inTransitMortgage02 from './AR2/inTransitMortgage02.json'
import ar2_overdueActualTime01 from './AR2/overdueActualTime01.json'
import ar2_overdueActualTime02 from './AR2/overdueActualTime02.json'
import ar2_overdueMortgageTotal01 from './AR2/overdueMortgageTotal01.json'
import ar2_overdueMortgageTotal02 from './AR2/overdueMortgageTotal02.json'
import ar2_overdueProcessingTotal from './AR2/overdueProcessingTotal.json'
import ar2_selectBylist01 from './AR2/selectBylist01.json'
import ar2_selectBylist02 from './AR2/selectBylist02.json'
import ar2_structuralAnalysisList from './AR2/structuralAnalysisList.json'
import ar2_structuralMortgage from './AR2/structuralMortgage.json'

import ar3_inTransitMortgage01 from './AR3/inTransitMortgage01.json'
import ar3_inTransitMortgage02 from './AR3/inTransitMortgage02.json'
import ar3_overdueActualTime01 from './AR3/overdueActualTime01.json'
import ar3_overdueActualTime02 from './AR3/overdueActualTime02.json'
import ar3_overdueMortgageTotal01 from './AR3/overdueMortgageTotal01.json'
import ar3_overdueMortgageTotal02 from './AR3/overdueMortgageTotal02.json'
import ar3_overdueProcessingTotal from './AR3/overdueProcessingTotal.json'
import ar3_selectBylist01 from './AR3/selectBylist01.json'
import ar3_selectBylist02 from './AR3/selectBylist02.json'
import ar3_structuralAnalysisList from './AR3/structuralAnalysisList.json'
import ar3_structuralMortgage from './AR3/structuralMortgage.json'

function typeLevel(name, json) {
    if (Number(json.type) === 1 && json.orgId === '' && json.cityId === '') {
        return 'ar1_' + name + '01'
    } else if (Number(json.type) === 2 && json.orgId === '' && json.cityId === '') {
        return 'ar1_' + name + '02'
    } else if (Number(json.type) === 2 && json.orgId !== '' && json.cityId === '') {
        return 'ar2_' + name + '01'
    } else if (Number(json.type) === 3 && json.orgId !== '' && json.cityId === '') {
        return 'ar2_' + name + '02'
    } else if (Number(json.type) === 3 && json.orgId !== '' && json.cityId !== '') {
        return 'ar3_' + name + '01'
    } else if (Number(json.type) === 4 && json.orgId !== '' && json.cityId !== '') {
        return 'ar3_' + name + '02'
    }
}
function typeOnly(name, json) {
    if (Number(json.type) === 1) {
        return 'ar1' + name
    } else if (Number(json.type) === 2) {
        return 'ar2' + name
    } else if (Number(json.type) === 3) {
        return 'ar3' + name
    }
}
let inTransitMortgage = function (options) {
    let json = JSON.parse(options.body)
    let str = typeLevel('inTransitMortgage', json)
    return eval(str) // 把字符串当变量使用  window[str] 这个全局才能用
}

let overdueActualTime = function (options) {
    let json = JSON.parse(options.body)
    let str = typeLevel('overdueActualTime', json)
    return eval(str) // 把字符串当变量使用  window[str] 这个全局才能用
}

let overdueMortgageTotal = function (options) {
    let json = JSON.parse(options.body)
    let str = typeLevel('overdueMortgageTotal', json)
    return eval(str) // 把字符串当变量使用  window[str] 这个全局才能用
}

let overdueProcessingTotal = function (options) {
    let json = JSON.parse(options.body)
    let str = typeLevel('overdueProcessingTotal', json)
    return eval(str)
}

let selectBylist = function (options) {
    let json = JSON.parse(options.body)
    let str = typeLevel('selectBylist', json)
    return eval(str) // 把字符串当变量使用  window[str] 这个全局才能用
}

let structuralAnalysisList = function (options) {
    let json = JSON.parse(options.body)
    let str = typeLevel('structuralAnalysisList', json)
    return eval(str)
}

let structuralMortgage = function (options) {
    let json = JSON.parse(options.body)
    let str = typeLevel('structuralMortgage', json)
    return eval(str)
}

export default {
    inTransitMortgage,
    overdueActualTime,
    overdueMortgageTotal,
    overdueProcessingTotal,
    selectBylist,
    structuralAnalysisList,
    structuralMortgage
}
