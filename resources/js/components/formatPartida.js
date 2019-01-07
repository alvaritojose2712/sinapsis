export default function formatPartida(val){
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
