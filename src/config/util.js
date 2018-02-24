const util = {
	random(min = 0, max){
		return min + (max - min) * Math.random();
	},
	extend(origin, ...arg){
		arg.forEach(item => {
			for(let key in item){
				origin[key] = item[key];
			}
		});
		return origin;
	},

	//ms => 帧
	transTime(time, defult){
		return +time / 1000 * 60 | 0 || defult;
	},
    GetDateDiff() {
    	var date1= '2015/03/08 00:00:00';  //开始时间
    	var date2 = new Date();    //结束时间
    	var date3 = date2.getTime() - new Date(date1).getTime();   //时间差的毫秒数
    	//计算出相差天数
    	var days=Math.floor(date3/(24*3600*1000))
        return days;
    }
}

export default util