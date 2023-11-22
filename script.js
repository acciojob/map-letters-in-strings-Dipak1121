//your JS code here. If required.
function mapChars(str){
	let obj = {};
	for( let i = 0; i < str.length;  i++ ){
		if(obj[str[i]] != undefined){
			obj[str[i]].push(i);
		}
		else{
			obj[str[i]] = [i];
		}
	}
	return obj;
}

const str = prompt("Enter the string");
alert(mapChars(str));