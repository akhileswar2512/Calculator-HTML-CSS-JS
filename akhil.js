function clearscreen(){
    document.getElementById("result").value="";

}
 function livescreen(value){
     document.getElementById("result").value+=value;
 
 }  
 function switchtheme(){
    let darkmode=document.getElementById("dark-mode");
    let theme=document.getElementById("theme");


    if(theme.getAttribute("href")=="light.css"){
        theme.href="dark.css";
        darkmode.innerHTML="lightmode"}
        else{
            theme.href="light.css";
            darkmode.innerHTML="darkmode"
        }
    }
