let form1 = document.getElementById("form1");
let form2 = document.getElementById("form2");
let next = document.getElementById("next");
let Previous = document.getElementById("Previous");
let con =document.getElementById("Continue");
let pre =document.getElementById("pre");
let done = document.getElementById("done")
next.onclick =function(){
    form1.style.display ="none";
    form2.style.display = "block";
    pre.style.width="240px"
}
Previous.onclick = function(){
    form1.style.display="block";
    form2.style.display="none";
    pre.style.width="120px"
}
con.onclick = function(){
    form2.style.display="none";
    form1.style.display ="none";
    done.style.display="block";
    pre.style.width="360px";
    pre.style.overflow="hidden";
}