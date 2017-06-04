window.onload = initAll;

function initAll() {
document.getElementById("reload").onClick = anotherCard;
newCard();
}

function newCard() {
var num;
var colBasis; 
var usedNum = new Array(76);  
  for(var i=0; i < 24 ;i++){
  	
  colBasis = getCol(i)*15;  	
  	
  	
  	do{
 	num  =   colBasis + Math.floor( Math.random()*15)+1 ;
  }while(usedNum[num])	
  
   usedNum[num] = true;  	
  	document.getElementById("square"+i).innerHTML = num;
  
    
    
   document.getElementById("square"+i).className="";  
   document.getElementById("square"+i).onmousedown = toggleColor ;
  

}


}

function getCol(squareNum) {
 
   if(squareNum !== 0 ){
    
		return (Math.floor(squareNum/5.0)) ;
   }

   else return 0;
  

}

function anotherCard() {

	for(var i =0;i<usedNum.length;i++){	
       usedNum[num] = false;
	}

   newCard();
}

function toggleColor(evt){
if (evt)
	var thisSquare = evt.target;
else
   var thisSquare = window.event.srcElement; 	
	
		
		if (thisSquare.className == "")
			thisSquare.className = "pickedBG";
   	
   	else
   		thisSquare.className = "";
   		
   		checkWin();

}



function checkWin() {

var winningOption = -1;
var setSquare = 0;

/*
Winning keys rep the winning patterns add the numbers of the (bingo)square^2 for all (bingo)squares in the winning line 
ex 0^2 + 1^2 + 2^2 + 3^2 + 4^2 = 31  represntin a winning line   
*/


var winners = new Array(31,992,15360,507904,541729,557328,1083458,2162820,4329736,8519745,8659472,16252928); 




		for (var i = 0;i<24;i++) {
				var currSquare = "square"+i;
		
				if (document.getElementById(currSquare).className != "") {
	               document.getElementById(currSquare).className ="pickedBG";
						setSquare = setSquare | Math.pow(2,i);		   	
		   	}


  		}
  


      for (var i = 0; i < winners.length ;i++) {
      
			if( (winners[i] & setSquare) == winners[i] )      
				winningOption = i;
      
      }
      
      
      
    
      
     if (winningOption > -1 ) {
      
          for (var i = 0;i<24 ;i++){
          	if(winners[winningOption] & Math.pow(2,i) ){
             	currSquare ="square"+i;
             	document.getElementById(currSquare).className="winningBG";          	
          	}
					         
          }  
      
      }
      




 } 
 
 
 