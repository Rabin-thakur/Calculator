function getvalue(val){
document.getElementById("a").value +=val; 
}
function add(){
  let x =  document.getElementById("a").value;
  var y= eval(x);
  document.getElementById("a").value=y;
}
  function clearDisplay() {
    document.getElementById("a").value = '';
}
