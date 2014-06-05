function buzz(value){
	if(!Number.isNaN(value)){
		if(value % 5 == 0){
		var result = 'buzz'	;
		return result;
		}else{
			return value;
		}
	}
}