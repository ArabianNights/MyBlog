//配置信息
function Config(){
	//数据库配置
	this.dbConfig =  {
		db : 'node_war_blog',
		host : 'localhost'
	}
	//cookie配置
	this.cookieConfig = {
		secret :  '123456789',
		key : this.dbConfig.db,//cookie的名字
		cookie : {maxAge : 1000 * 60 * 60 * 24 * 30}//过期时间 30天
	}
}
module.exports = new Config();