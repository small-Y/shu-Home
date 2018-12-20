// 手机号验证
export function isvalidPhone(str) {
    const reg = /^1[3|4|5|7|8][0-9]\d{8}$/
    return reg.test(str)
}

// 格式化时间
export function formatTime(time) {
    time = new Date(time);
	var y = time.getFullYear();
	var M = time.getMonth() + 1;
	var d = time.getDate();
	var h = time.getHours();
	var m = time.getMinutes();
	var s = time.getSeconds();
	
	M = M < 10 ? "0" + M : M;
	d = d < 10 ? "0" + d : d;
	h = h < 10 ? "0" + h : h;
	m = m < 10 ? "0" + m : m;
	s = s < 10 ? "0" + s : s;
	
	return y+"-"+M+"-"+d+" "+h+":"+m+":"+s;
}

/* 该方法处理分页时的请求数据 */
export function split_array(arr,start,end) {
	const result = [];
	for (let i = start; i < arr.length&&i<end; i++) {
		result.push(arr[i]);
	}
	return result;
}