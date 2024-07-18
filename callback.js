function k(a, callback){
	console.log('Hi' + ' ' + a);
	callback();
}

function hello(){
		console.log('YESS');
	}

k('kanishk' , hello);
setTimeout(hello, 1000);