function formatMoneda(value, decimals=2, separators=['.',".",',']) {
    decimals = decimals >= 0 ? parseInt(decimals, 0) : 2;
    separators = separators || ['.', "'", ','];
    var number = (parseFloat(value) || 0).toFixed(decimals);
    if (number.length <= (4 + decimals))
        return number.replace('.', separators[separators.length - 1]);
    var parts = number.split(/[-.]/);
    value = parts[parts.length > 1 ? parts.length - 2 : 0];
    var result = value.substr(value.length - 3, 3) + (parts.length > 1 ?
        separators[separators.length - 1] + parts[parts.length - 1] : '');
    var start = value.length - 6;
    var idx = 0;
    while (start > -3) {
        result = (start > 0 ? value.substr(start, 3) : value.substr(0, 3 + start))
            + separators[idx] + result;
        idx = (++idx) % 2;
        start -= 3;
    }
    return (parts.length == 3 ? '-' : '') + result;
}
function formatCedula(val) {
    val = val.toString()
    let count = 1
    let format = ""
    for (let i = val.length-1; i >= 0; i--) {
        format = val[i]+format
        if (count%3==0) {
            format = "."+format
        }
        count++
    }
    return format
}
function formatPartida(val){
    val = val.toString()
	let v = ""; 
	let num = 1
	for(let i = val.length-1; i>=0; i--){
	  v = val[i]+v
	  if (num%2==0) {
	    v = "."+v
	  }
	  num++;
	}
	v = (v[0]==".")?v.substr(1):v
	return v
}
function diffFecha(fecha) {
    let f = Date.parse(fecha);
    let f2 = Date.now();
    let t = new Date(f-f2);
    
    return Math.round((((f2-f)/(3600*24*1000))/365));
}
function getDataForm(target){
    let form = new FormData(target)
    let data = {}
    for(let key of form.entries()){
     data[key[0]] = key[1]
    }
    return data;
}
export {formatCedula,formatMoneda,formatPartida,diffFecha,getDataForm}