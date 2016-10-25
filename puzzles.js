//find factorial
var factorial = function(num){
 var answer =1;
 for (var i =1; i<num; i++){
   answer *= ((i+1));
  }
}

console.log(factorial(5));

//find palindrome
var palindrome = function(text){

	var textArray = text.split("");
  var noSpaces = textArray.filter(function (value){
  	return value != " ";
  });

  //console.log(noSpaces);
  var flipArray = noSpaces.slice().reverse();
  //console.log(flipArray);

  for(var x = 0; x <= textArray.length - 1; x++){
  	if(noSpaces[x] !=flipArray[x]){
    	console.log("nope");
    	return false;
    }
  }
  console.log("palindrome");
}

palindrome('a but tuba');
