function fizz(value){
	if(!Number.isNaN(value)){
		if(value % 3 == 0){
		var result = 'fizz';
		return result;
		}else{
			return value;
		}
	}
}