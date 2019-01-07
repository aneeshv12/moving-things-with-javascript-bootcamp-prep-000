const dodger = document.getElementById('dodger');
document.addEventListener('keydown',function(e){
  if(e.which===39){
    moveDodgerRight();
  }
})
function moveDodgerRight(){
  var rightNumbers = dodger.style.right.replace('px','');
  var right = parseInt(rightNumbers,10);
  if(right<0){
    dodger.style.right = `${right-1}px`
  }
}
