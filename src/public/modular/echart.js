import echarts from 'echarts'
export default {
    colorGradient (color1, color2) {
        return new echarts.graphic.LinearGradient( // 颜色渐变函数
        0, 0, 0, 1, // 右下左上
        [
            { offset: 0, color: color1 },
            { offset: 1, color: color2 }
        ]
        )
    },
    typefaceSize (num) {
        return num
    },
    verticalShape (value, deal = '') {
        if (deal) {
            value = value.split(deal)
            value[1] = deal
        } else {
            value = value.split('')
        }
        return value.join('\n')
    },
    conversion (value, type = '', unit = '', spot = 1) {
        if (type === '亿') {
            value = value / 100000000
            value = Number(value.toFixed(spot))
        } else if (type === '万') {
            value = value / 10000
            value = Number(value.toFixed(spot))
        } else if (type === '千') {
            value = value / 1000
            value = Number(value.toFixed(spot))
        }
        return value + unit
    },
    tipFormatter (value, engineering, seriesColor, gradients, count = '') {
        let marker = '<span style="display:inline-block;margin-right:2.5px;border-radius:10px;width:10px;height:10px;background-image:linear-gradient('
        if (value.seriesName) {
            let res = value.seriesName + '</br>' + marker + seriesColor[value.seriesIndex] + ';"></span>' + value.name + ':&nbsp;' + value.percent + '%</br>'
            return res
        }
        let res = value[0].axisValue + '</br>'
        for (let i = 0; i < engineering.length; i++) {
            for (let k = 0; k < value.length; k++) {
                if (engineering[i].name === value[k].seriesName) {
                engineering[i].value = value[k].value
                }
            }
        }
        value = engineering
        for (let i = 0; i < value.length; i++) {
            if (value[i].value === '暂无数据') {
                res += marker + seriesColor[i] + ',' + gradients[i] + ');"></span>' + value[i].name + ':&nbsp;' + value[i].value + '</br>'
            } else if (count !== '' && value[i].unit !== '%') {
                res += marker + seriesColor[i] + ',' + gradients[i] + ');"></span>' + value[i].name + ':&nbsp;' + this.conversion(value[i].value, count, count, 2) + '</br>'
            } else {
                res += marker + seriesColor[i] + ',' + gradients[i] + ');"></span>' + value[i].name + ':&nbsp;' + Number(value[i].value).toLocaleString() + value[i].unit + '</br>'
            }
        }
        return res
    },
    xContent (params, index) {
        if (index % 2 !== 0) {
            return '\n\n' + params
        } else {
            return params
        }
    }
}
