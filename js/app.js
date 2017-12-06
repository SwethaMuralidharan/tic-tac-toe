// wait for the DOM to finish loading
$(document).ready(function() {

 let turn="X";
var $allboxes=$('.box');


 function check_all_3_allboxes($boxA,$boxB,$boxC)
 {
     var firstBoxOwner = $boxA.text(),
          secondBoxOwner = $boxB.text(),
          thirdBoxOwner = $boxC.text();

      if ((firstBoxOwner === secondBoxOwner) && (secondBoxOwner === thirdBoxOwner))
      {
        if (firstBoxOwner === "X")
        {
          return "X";
        }
        else if (firstBoxOwner === "O")
        {
          return "O";
        }
      }

  }

  function diagonalWinner()
  {
    var leftDownDiag = check_all_3_allboxes($allboxes.eq(0), $allboxes.eq(4), $allboxes.eq(8));
    var rightUpDiag = check_all_3_allboxes($allboxes.eq(2), $allboxes.eq(4), $allboxes.eq(6));
    return leftDownDiag || rightUpDiag;

  }

  function columnWinner()
  {
     var leftCol = check_all_3_allboxes($allboxes.eq(0), $allboxes.eq(3), $allboxes.eq(6));
     var middleCol = check_all_3_allboxes($allboxes.eq(1), $allboxes.eq(4), $allboxes.eq(7));
     var rightCol = check_all_3_allboxes($allboxes.eq(2), $allboxes.eq(5), $allboxes.eq(8));
     return leftCol || (middleCol || rightCol);

   }

   function rowWinner()
   {
    var topRow = check_all_3_allboxes($allboxes.eq(0), $allboxes.eq(1), $allboxes.eq(2));
    var middleRow = check_all_3_allboxes($allboxes.eq(3), $allboxes.eq(4), $allboxes.eq(5));
    var bottomRow = check_all_3_allboxes($allboxes.eq(6), $allboxes.eq(7), $allboxes.eq(8));
    return topRow || (middleRow || bottomRow);

  }

  function find_winner()
  {
      return diagonalWinner() || (rowWinner() || columnWinner());

  }

 $('.box').on("click",function(event){

  if($(this).text()==="")
  {
    if(turn=="X")
    {
      $(this).text(turn);
      $(this).addClass("addX");
      turn="O";
    }
    else
    {
      $(this).text(turn);
      $(this).addClass("addO");
      turn="X";
    }
  }
  //check for winning condition
  var winner = find_winner();
  if(winner){
    alert(`Player ${winner} won the game ! `)
  }
});

$('.btn-primary').on("click",function(){
  $allboxes.text("");
});



});
