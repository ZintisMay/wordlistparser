// var bob = "bob";
// var num = 1;

// console.log(typeof bob);
// console.log(typeof num);

var fs = require('fs');
var prompt = require('prompt');
prompt.start();



// var bigstring = "b b a b x \n k";
// console.log(2);
// console.log(bigstring.search("b b"));

// console.log(1);
// console.log(bigstring.search("b x \n k"));

var hugeString;

fs.readFile('./trie-js/dict/string.txt', "utf-8", (err, data) => {

  if (err) throw err;
		console.time("dbsave");
	

  hugeString = data;

console.log(hugeString.search('zymotic'));

// console.timeEnd("dbsave");
		console.timeEnd("dbsave");
lookForWord();
	
});

function lookForWord(){

	prompt.get(['word'],function(err, result){

		var tempTime = timeEnd('dbsave');

		console.log(result.word);

		var foundIt = hugeString.search(result.word).done;

		if(foundIt>=0){console.log("found it")}else{console.log('not there')}
	
		var counterTime = timeEnd('dbsave') - tempTime;

		console.log(counterTime);

		lookForWord();
	});
}
