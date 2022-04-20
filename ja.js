const check=()=>{
  if(document.querySelector("#uname").value == "login" && document.querySelector("#pwd").value == "login" ){
    alert("Correct Password and username");
  }
  else{
    alert("Incorrect Username or password please check again");
  }
}
const hint=()=>{
  alert("Username- Log** Password ***in");
}
