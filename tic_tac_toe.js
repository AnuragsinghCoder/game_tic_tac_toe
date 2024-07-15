// code for responsivness
let aa =  window.matchMedia("(max-width: 395px)")
let bb= window.matchMedia("(max-width: 455px)")
let cc= window.matchMedia("(max-width:700px")

//for random turn
let k =0;
k =Math.round(Math.random())


function start(){

if(bb.matches){
    scrollBy(0,700)
}
else if (cc.matches){
    scrollBy(0,700)
}
else{
    scrollBy(0,1200)
}

 //console.log("this is k"+k);

 //if(k==0){
//    goBgBlue();
// }
// else{
//     goBgRed();
// }
       
}
// code for scroll function-->

function scroll(l,m){
    window.scrollBy(l,m);
}

//code for parent tag


let a=0;
let b=0;
let c=0;
let d=0;
let e=0;
let f=0;
let g=0;
let h=0;
let i=0;
let resi=1;

 
//condition for win

function Owin(){
if(a+b+c==15){console.log("O win's");OwonSt();}
else if(d+e+f==15){console.log("O win's");OwonSt();}
else if(g+h+i==15){console.log("O win's");OwonSt();}
else if(a+d+g==15){console.log("O win's");OwonSt();}
else if(b+e+h==15){console.log("O win's");OwonSt();}
else if(c+f+i==15){console.log("O win's");OwonSt();}
else if(a+e+i==15){console.log("O win's");OwonSt();}
else if(c+e+g==15){console.log("O win's");OwonSt();}
else{
    resi=0;
  }
}

function Xwin(){
  if(a+b+c==3){console.log("X win's");XwonSt();}
  else if(d+e+f==3){console.log("X win's");}
  else if(g+h+i==3){console.log("X win's");XwonSt();}
  else if(a+d+g==3){console.log("X win's");XwonSt();}
  else if(b+e+h==3){console.log("X win's");XwonSt();}
  else if(c+f+i==3){console.log("X win's");XwonSt();}
  else if(a+e+i==3){console.log("X win's");XwonSt();}
  else if(c+e+g==3){console.log("X win's");XwonSt();}
  else{
    resi=0;
  }
}

// code for draw 

function Gdraw(){

if(resi<1 && k>=9){
 GdrawSt();
}

}

//code for draw statement

function GdrawSt(){
    document.getElementById("res").innerHTML = "Draw !!!"; 
    scroll(0,1230);
    console.log("draw")

}


// code for won statements
function OwonSt(){
    resi=1;
    document.getElementById("res").innerHTML = "O Won !!!"; 
    scroll(0,1230);
    if(resi==0){
        console.log("end")
    }
}

function XwonSt(){
    resi=1;
document.getElementById("res").innerHTML = "X Won !!!"; 
scroll(0,1230);
if(resi==0){
    console.log("ended")
}
}


//function for change color 
function goColor(id,color){
    document.getElementById(id).style.color=color;
}

//function for change background color 
function goBgRed(){
    document.getElementById("bb1").style.backgroundColor="rgb(2,42,75)";
    document.getElementById("bb2").style.backgroundColor="rgb(252, 246, 252)";
}

function goBgBlue(){
    document.getElementById("bb2").style.backgroundColor="rgb(81,2,4)";
    document.getElementById("bb1").style.backgroundColor="rgb(252, 246, 252)";
}

//code for onclics
let cli1=0;
function b1(){

        if(cli1==0){
            k++;
             goColor("ff1","#E0115F");
             if(k%2==0){
                goBgRed();
             document.getElementById("ff1").innerHTML ="O";
             a= 5;
             }
             else{
                goBgBlue();
            document.getElementById("ff1").innerHTML ="X";
            a= 1;
             
            }
            console.log(k)
            console.log(a)
                Owin();
                Xwin();
                Gdraw();
            
            cli1++
}
console.log("cli1"+
    cli1)
}
    let cli2=0;
function b2(){
    
    if(cli2==0){
    k++;  
            goBgRed();
    document.getElementById("ff2").style.color="#E0115F";
    if(k%2==0){
    document.getElementById("ff2").innerHTML ="O";
    b= 5;
    }
    else{
            goBgBlue();
    document.getElementById("ff2").innerHTML ="X";
    b= 1;
    }
    console.log(k)
    console.log(b)
    Owin();
    Xwin();
    Gdraw(); 
    
    cli2++
}
}

  let cli3=0;
function b3(){
  
    
    if(cli3==0){
     k++; 
            goBgRed();
    document.getElementById("ff3").style.color="#E0115F";
    if(k%2==0){
    document.getElementById("ff3").innerHTML ="O";
    c= 5;
    }
    else{
            goBgBlue();  
    document.getElementById("ff3").innerHTML ="X";
    c= 1;
    }
    console.log(k)
    console.log(c)
    Owin();
    Xwin();
    Gdraw();
    
    cli3++
}
}
    let cli4=0;
function b4(){
            

    if(cli4==0){
     k++; 
            goBgRed();
    document.getElementById("ff4").style.color="#E0115F";
    if(k%2==0){
    document.getElementById("ff4").innerHTML ="O";
    d= 5;
    }
    else{
            goBgBlue();
    document.getElementById("ff4").innerHTML ="X";
    d=1 ;
   }
    console.log(k)
    console.log(d)
    Owin();
    Xwin();
    Gdraw();
    
   cli4++
}
}

let cli5=0;
function b5(){
    
    if(cli5==0){
     k++; 
            goBgRed();
    document.getElementById("ff5").style.color="#E0115F";
    if(k%2==0){
    document.getElementById("ff5").innerHTML ="O";
    e= 5;
    }
    else{
            goBgBlue();
    document.getElementById("ff5").innerHTML ="X";
    e=1;
    }
    console.log(k)
    console.log(e)
    Owin();
    Xwin();
    Gdraw();
    
    cli5++
}
}
    let cli6=0;
function b6(){ 
    
    if(cli6==0){
    k++;
            goBgRed();
    document.getElementById("ff6").style.color="#E0115F";
    if(k%2==0){
    document.getElementById("ff6").innerHTML ="O";
    f= 5;
    }
    else{
            goBgBlue();
    document.getElementById("ff6").innerHTML ="X";
    f=1;
    }
    console.log(k)
    console.log(f)
    Owin();
    Xwin();
    Gdraw();
    
    cli6++
}
}

    let cli7=0;
function b7(){

    
    
    if(cli7==0){
     k++; 
            goBgRed();
    document.getElementById("ff7").style.color="#E0115F";
    if(k%2==0){
    document.getElementById("ff7").innerHTML ="O";
    g= 5;
    }
    else{
            goBgBlue();   
    document.getElementById("ff7").innerHTML ="X";
    g=1;
    }
    console.log(k)
    console.log(g)
    Owin();
    Xwin();
    Gdraw();
    cli7++
}
}
let cli8=0;
function b8(){
   
    
    if(cli8==0){
     k++; 
            goBgRed();
    document.getElementById("ff8").style.color="#E0115F";
    if(k%2==0){
    document.getElementById("ff8").innerHTML ="O";
    h= 5;
    }
    else{
            goBgBlue();
    document.getElementById("ff8").innerHTML ="X";
    h=1;
    }
    console.log(k)
    console.log(h)
    Owin();
    Xwin();
    Gdraw();
    
     cli8++
}
}
    let cli9=0;
function b9(){
    
   if(cli9==0){
    k++;
        goBgRed();
    document.getElementById("ff9").style.color="#E0115F";
    if(k%2==0){
    document.getElementById("ff9").innerHTML ="O";
    i= 5;
    }
    else{
            goBgBlue();
    document.getElementById("ff9").innerHTML ="X";
    i= 1
    }
    console.log(k)
    console.log(i)
    Owin();
    Xwin();
    Gdraw();
     cli9++
  }
}
function refresh(){


    location.reload();
    window.scrollTo(0,0);
 
}



//win statement is here
/*
let a = document.getElementById("ff1").value;
let b = document.getElementById("ff2").value;
let c = document.getElementById("ff3").value;
let d = document.getElementById("ff4").value;
let e = document.getElementById("ff5").value;
let f = document.getElementById("ff6").value;
let g = document.getElementById("ff7").value;
let h = document.getElementById("ff8").value;
let i = document.getElementById("ff9").value;
console.log(a)
*/
/*
if(a+b+c==6){console.log("O win's")}
else if(d+e+f==6){console.log("O win's")}
else if(g+h+i==6){console.log("O win's")}
else if(a+d+g==6){console.log("O win's")}
else if(b+e+h==6){console.log("O win's")}
else if(c+f+i==6){console.log("O win's")}
else if(a+e+i==6){console.log("O win's")}
else if(c+e+g==6){console.log("O win's")}
else{console.log("error")}
*/








  
