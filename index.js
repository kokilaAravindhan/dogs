var h1=document.createElement("h1");
h1 .innerHTML="Dogs Pictures";
h1.style.textAlign="center";
h1.style.marginTop="30px";
h1.style.color="blue"

var div=document.createElement("div");
div.style.margin="20px";
div.style.textAlign="center";

var arr=['chow','african','airedale','akita','basenji','great dane','pug','chihuahua'];

var input=document.createElement("select");
input.setAttribute("class","dogs-selector");
input.id="inputselect"
for(var j=0;j<=arr.length-1;j++){
        var option=document.createElement("option");
        option.value=arr[j];
        option.innerHTML=arr[j];
        input.append(option);
}

var linebr=document.createElement("br");

var button=document.createElement("button");
button.setAttribute("type","button");
button.classList.add("btn","btn-primary");
button.innerHTML="Fetch";
button.style.marginTop="10px";
button.style.marginLeft="10px"
button.addEventListener("click",bar);

div.append(input,button);
document.body.append(h1,div);

async function bar(){
    let input=document.getElementById("inputselect").value;
    console.log(input)
    let res=await fetch(`https://dog.ceo/api/breed/${input}/images/random`);
    let res1= await res.json();
    var img=document.createElement("img");
   
        console.log(res1.message);
        var div1=document.createElement("div");
        div1.style.marginTop="40px";
        div1.style.textAlign="center";
        div1.setAttribute("class","image-content");
        
        
        img.setAttribute("src",res1.message);
        img.style.width="200px";
        img.style.height="200px";
         //img.style.display="none";
        
        div1.append(img);
        document.body.append(div1);
}
