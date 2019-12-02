const pool = {
    state: {
    	player_info: {//玩家信息
				avatar: 6,//头像 ID
				avatar_box: 2,//头像框ID
				honor: "",//称号
				isOpenEffect: true,//是否打开特效
				isPwdSeted: true,//是否设置资金密码
				isRegistBytel: false,//是否邮箱电话注册
				loginame: "test78",//登陆账号
				mAgentId: 7,//代理id
				mIsAgent: true,//代理
				mShowUid: 464506321,//我的id
				money: 947824808,//当前金币数
				nickname: "testN78",//玩家昵称
				safe_money: 31000000,//当前保险箱金币数
				sex: 1,//性别(0:未知,1:男,2:女)
				token: "TOKEN_e323d630c0cce7e74c7a9093a88002fe",//token
				uid: 78,//用户 ID
				vip: 5//vip等级
			},
			email_list: [//邮件
				{created_at: "1569996291",id: 93479,is_readed: false,title: "埋雷返还"},
				{created_at: "1569996291",id: 71030,is_readed: false,title: "未抢完红包返还"},
				{created_at: "1569996280",id: 71035,is_readed: true,title: "未抢完红包返还"}
			],
			email_single: {content: "您发放的扫雷红包返还金额<24.72>,请尽快前往领取!",created_at: "1566463944",id: 2046740,title: "未抢完红包返还",unread_msg_count: 2},
			notice_list: [//公告
				{created_at: "7/15/2019, 11:38:20 AM",id: 450,is_readed: false,title: "卡罗拉"},
				{created_at: "7/15/2019, 11:35:17 AM",id: 449,is_readed: true,title: "所罗门"}
			],
			notice_single: {content: "量达到看到大家",created_at: "1563161900",id: 450,title: "卡罗拉",unread_msg_count: 0},
			pay_types: [//充值方式
				{id: 14,name: "银行卡转账",pay_code: "banktrans",pay_money: "",channel: [
					{channel_id: 19,max_limit: 10000,min_limit: 0,name: "银行卡转账1",pay_code: "im"},
					{channel_id: 21,max_limit: 9000,min_limit: 0,name: "银行卡转账2",pay_code: "ALIPAY2"}
				]},
				{id: 2,name: "支付宝充值",pay_code: "alipay",pay_money: "",channel: [
					{channel_id: 20,max_limit: 10000,min_limit: 1,name: "支付宝充值1",pay_code: "ALIPAY1"},
					{channel_id: 19,max_limit: 10000,min_limit: 1,name: "支付宝充值2",pay_code: "Zhifubao"}
				]},
				{id: 1,name: "银联充值",pay_code: "online",pay_money: "",channel: [
					{channel_id: 20,max_limit: 11000,min_limit: 0,name: "银联充值1",pay_code: "CHOOSE_BANK"},
					{channel_id: 19,max_limit: 10000,min_limit: 0,name: "银联充值2",pay_code: "unionpayScan"}
				]}
			],
			payurl: "http://52.195.13.92:9999/extern/pay/payurl/21/PAY_DATA35f4a8d465e6e1edc05f3d8ab658c551",//充值链接
			record_list: [//充值记录
				{created_at: "7/29/2019, 9:56:50 AM",money: 1000000,order_no: "AB72909565070738410078",pay_code: "banktrans",pay_type: "银行卡转账",status: "支付中"},
				{created_at: "7/26/2019, 5:22:48 PM",money: 1000000,order_no: "AB72617224858770530078",pay_code: "banktrans",pay_type: "银行卡转账",status: "支付中"},
				{created_at: "8/16/2019, 2:02:57 PM",money: 2000000,order_no: "AB72617224858770530078",pay_code: "banktrans",pay_type: "支付宝充值",status: "充值成功"},
				{created_at: "8/16/2019, 2:02:50 PM",money: 5000000,order_no: "AB72617224858770530078",pay_code: "banktrans",pay_type: "支付宝充值",status: "充值失败"}
			],
			bank_card: [//提款-银行卡
				{bank_id: "123",bank_name: "贷记卡",cardholder: "奖金",cardno: "25689"},
				{bank_id: "124",bank_name: "第一票",cardholder: "解解渴",cardno: "9546"},
				{bank_id: "147",bank_name: "付款品牌",cardholder: "伽利略",cardno: "888888"}
			],
			alipay_list: [//提款-支付宝
				{bank_id: "130",bank_name: "支付宝",cardholder: "据介绍",cardno: "6333"},
				{bank_id: "131",bank_name: "支付宝",cardholder: "樱桃园",cardno: "166877"},
				{bank_id: "132",bank_name: "支付宝",cardholder: "哩哩啦啦",cardno: "777777"}
			],
			agent_url: "http://10.1.101.120:501/#/?token=SESS_400d4d607c5dc003ba2b71042818bc38&loginname=test23",//代理
			safe_take: {balance: 380018129, deposit: 546000000},//保险箱-存入金额-取出金额
    },
    mutations: {
			playerInfo(state,params){//玩家信息
				if(params.title=='head'){
					state.player_info.avatar = params.params;
				}else if(params.title=='frame'){
					state.player_info.avatar_box = params.params;
				}else if(params.title=='sex'){
					state.player_info.sex = params.params;
				}else if(params.title=='nickname'){
					state.player_info.nickname = params.params;
				}else if(params.title=='money'){
					state.player_info.money = params.params;
				}else if(params.title=='safe_money'){
					state.player_info.safe_money = params.params;
				}
			},
			emailReaded(state,id){//获取单条邮件信息
				for(let i=0;i<state.email_list.length;i++){
					if(state.email_list[i].id==id){
						state.email_list[i].is_readed = true;
					}
				}
			},
			emailAdd(state,obj){//暂无-添加邮件
				state.email_list = state.email_list.concat(obj);
			},
			emailDelete(state,id){//删除邮件
				state.email_list = state.email_list.filter(function(val) {
					return val.id != id;  // 过滤掉前台传过来的id对应的相应数据，并重新返回
				});
			},
			emailModify(state,obj){//暂无-修改邮件
				state.email_list = state.email_list.map(val => {  // 将需要替换的数据替换掉
					return Number(val.id) === Number(obj.id) ? obj : val ;
				});
			},
			noticeDelete(state,id){//删除公告
				state.notice_list = state.notice_list.filter(function(val) {
					return val.id != id;  // 过滤掉前台传过来的id对应的相应数据，并重新返回
				});
			},
			noticeReaded(state,id){//获取单条公告信息
				for(let i=0;i<state.notice_list.length;i++){
					if(state.notice_list[i].id==id){
						state.notice_list[i].is_readed = true;
					}
				}
			},
			bankAdd(state,obj){//添加银行卡
				state.bank_card = state.bank_card.concat(obj);
			},
			alipayAdd(state,obj){//添加支付宝
				state.alipay_list = state.alipay_list.concat(obj);
			},
			bankDelete(state,id){//解绑银行卡
				state.bank_card = state.bank_card.filter(function(val) {
					return val.bank_id != id;  // 过滤掉前台传过来的id对应的相应数据，并重新返回
				});
			},
			alipayDelete(state,id){//解绑支付宝
				state.alipay_list = state.alipay_list.filter(function(val) {
					return val.bank_id != id;  // 过滤掉前台传过来的id对应的相应数据，并重新返回
				});
			},
    },
    getters: {
			player: state => state.player_info,
			email_list: state => state.email_list,
			notice_list: state => state.notice_list,
			pay_types: state => state.pay_types,
			payurl: state => state.payurl,
			record_list: state => state.record_list,
			bank_card: state => state.bank_card,
			alipay_list: state => state.alipay_list,
			agent_url: state => state.agent_url,
			email_single: state => state.email_single,
			notice_single: state => state.notice_single,
			safe_take: state => state.safe_take
    },
    actions: {
        
    }
}

export default pool;