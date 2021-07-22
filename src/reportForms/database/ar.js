import ar1_inTransitMortgage01 from './arAi/ar1/inTransitMortgage01.json'
import ar1_inTransitMortgage02 from './arAi/ar1/inTransitMortgage02.json'
import ar1_overdueActualTime01 from './arAi/ar1/overdueActualTime01.json'
import ar1_overdueActualTime02 from './arAi/ar1/overdueActualTime02.json'
import ar1_overdueMortgageTotal01 from './arAi/ar1/overdueMortgageTotal01.json'
import ar1_overdueMortgageTotal02 from './arAi/ar1/overdueMortgageTotal02.json'
import ar1_overdueProcessingTotal from './arAi/ar1/overdueProcessingTotal.json'
import ar1_selectBylist01 from './arAi/ar1/selectBylist01.json'
import ar1_selectBylist02 from './arAi/ar1/selectBylist02.json'
import ar1_structuralAnalysisList from './arAi/ar1/structuralAnalysisList.json'
import ar1_structuralMortgage from './arAi/ar1/structuralMortgage.json'

import ar2_inTransitMortgage01 from './arAi/ar2/inTransitMortgage01.json'
import ar2_inTransitMortgage02 from './arAi/ar2/inTransitMortgage02.json'
import ar2_overdueActualTime01 from './arAi/ar2/overdueActualTime01.json'
import ar2_overdueActualTime02 from './arAi/ar2/overdueActualTime02.json'
import ar2_overdueMortgageTotal01 from './arAi/ar2/overdueMortgageTotal01.json'
import ar2_overdueMortgageTotal02 from './arAi/ar2/overdueMortgageTotal02.json'
import ar2_overdueProcessingTotal from './arAi/ar2/overdueProcessingTotal.json'
import ar2_selectBylist01 from './arAi/ar2/selectBylist01.json'
import ar2_selectBylist02 from './arAi/ar2/selectBylist02.json'
import ar2_structuralAnalysisList from './arAi/ar2/structuralAnalysisList.json'
import ar2_structuralMortgage from './arAi/ar2/structuralMortgage.json'

import ar3_inTransitMortgage01 from './arAi/ar3/inTransitMortgage01.json'
import ar3_inTransitMortgage02 from './arAi/ar3/inTransitMortgage02.json'
import ar3_overdueActualTime01 from './arAi/ar3/overdueActualTime01.json'
import ar3_overdueActualTime02 from './arAi/ar3/overdueActualTime02.json'
import ar3_overdueMortgageTotal01 from './arAi/ar3/overdueMortgageTotal01.json'
import ar3_overdueMortgageTotal02 from './arAi/ar3/overdueMortgageTotal02.json'
import ar3_overdueProcessingTotal from './arAi/ar3/overdueProcessingTotal.json'
import ar3_selectBylist01 from './arAi/ar3/selectBylist01.json'
import ar3_selectBylist02 from './arAi/ar3/selectBylist02.json'
import ar3_structuralAnalysisList from './arAi/ar3/structuralAnalysisList.json'
import ar3_structuralMortgage from './arAi/ar3/structuralMortgage.json'



let inTransitMortgage = function (options) {
    let json = JSON.parse(options.body)
    if (Number(json.type) === 1 && json.orgId === '' && json.cityId === '') {
        return ar1_inTransitMortgage01
    } else if (Number(json.type) === 2 && json.orgId === '' && json.cityId === '') {
        return ar1_inTransitMortgage02
    }
    
    if (Number(json.type) === 2 && json.orgId !== '' && json.cityId === '') {
        return ar2_inTransitMortgage01
    } else if (Number(json.type) === 3 && json.orgId !== '' && json.cityId === '') {
        return ar2_inTransitMortgage02
    }
    
    if (Number(json.type) === 3 && json.orgId !== '' && json.cityId !== '') {
        return ar3_inTransitMortgage01
    } else if (Number(json.type) === 4 && json.orgId !== '' && json.cityId !== '') {
        return ar3_inTransitMortgage02
    }
}

let overdueActualTime = function (options) {
    let json = JSON.parse(options.body)
    if (Number(json.type) === 1 && json.orgId === '' && json.cityId === '') {
        return ar1_overdueActualTime01
    } else if (Number(json.type) === 2 && json.orgId === '' && json.cityId === '') {
        return ar1_overdueActualTime02
    }
    
    if (Number(json.type) === 2 && json.orgId !== '' && json.cityId === '') {
        return ar2_overdueActualTime01
    } else if (Number(json.type) === 3 && json.orgId !== '' && json.cityId === '') {
        return ar2_overdueActualTime02
    }
    
    if (Number(json.type) === 3 && json.orgId !== '' && json.cityId !== '') {
        return ar3_overdueActualTime01
    } else if (Number(json.type) === 4 && json.orgId !== '' && json.cityId !== '') {
        return ar3_overdueActualTime02
    }
}

let overdueMortgageTotal = function (options) {
    let json = JSON.parse(options.body)
    if (Number(json.type) === 1 && json.orgId === '' && json.cityId === '') {
        return ar1_overdueMortgageTotal01
    } else if (Number(json.type) === 2 && json.orgId === '' && json.cityId === '') {
        return ar1_overdueMortgageTotal02
    }
    
    if (Number(json.type) === 2 && json.orgId !== '' && json.cityId === '') {
        return ar2_overdueMortgageTotal01
    } else if (Number(json.type) === 3 && json.orgId !== '' && json.cityId === '') {
        return ar2_overdueMortgageTotal02
    }
    
    if (Number(json.type) === 3 && json.orgId !== '' && json.cityId !== '') {
        return ar3_overdueMortgageTotal01
    } else if (Number(json.type) === 4 && json.orgId !== '' && json.cityId !== '') {
        return ar3_overdueMortgageTotal02
    }
}

let overdueProcessingTotal = function (options) {
    let json = JSON.parse(options.body)
    if (Number(json.type) === 1) {
        return ar1_overdueProcessingTotal
    }
    
    if (Number(json.type) === 2) {
        return ar2_overdueProcessingTotal
    }
    
    if (Number(json.type) === 3) {
        return ar3_overdueProcessingTotal
    }
}

let selectBylist = function (options) {
    let json = JSON.parse(options.body)
    if (Number(json.type) === 1 && json.orgId === '' && json.cityId === '') {
        return ar1_selectBylist01
    } else if (Number(json.type) === 2 && json.orgId === '' && json.cityId === '') {
        return ar1_selectBylist02
    }
    
    if (Number(json.type) === 2 && json.orgId !== '' && json.cityId === '') {
        return ar2_selectBylist01
    } else if (Number(json.type) === 3 && json.orgId !== '' && json.cityId === '') {
        return ar2_selectBylist02
    }
    
    if (Number(json.type) === 3 && json.orgId !== '' && json.cityId !== '') {
        return ar3_selectBylist01
    } else if (Number(json.type) === 4 && json.orgId !== '' && json.cityId !== '') {
        return ar3_selectBylist02
    }
}

let structuralAnalysisList = function (options) {
    let json = JSON.parse(options.body)
    if (Number(json.type) === 1) {
        return ar1_structuralAnalysisList
    }
    
    if (Number(json.type) === 2) {
        return ar2_structuralAnalysisList
    }
    
    if (Number(json.type) === 3) {
        return ar3_structuralAnalysisList
    }
}

let structuralMortgage = function (options) {
    let json = JSON.parse(options.body)
    if (Number(json.type) === 1) {
        return ar1_structuralMortgage
    }
    
    if (Number(json.type) === 2) {
        return ar2_structuralMortgage
    }
    
    if (Number(json.type) === 3) {
        return ar3_structuralMortgage
    }
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
