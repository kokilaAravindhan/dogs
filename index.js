var h1=document.createElement("h1");
h1 .innerHTML="Dogs Pictures";
h1.style.textAlign="center";
h1.style.marginTop="30px";

var div=document.createElement("div");
div.style.margin="20px";
div.style.textAlign="center";

/*var input=document.createElement("input");
input.setAttribute("type","text");
input.style.width="30%";
input.id="country";
input.setAttribute("placeholder","Enter the country name");*/

var linebr=document.createElement("br");
var button=document.createElement("button");
button.setAttribute("type","button");
button.classList.add("btn","btn-primary");
button.innerHTML="Fetch";
button.style.marginTop="10px";
button.addEventListener("click",bar);

div.append(linebr,button);
document.body.append(h1,div);

async function bar(){
            //void(0);
    let res=await fetch("https://dog.ceo/api/breeds/image/random");
    let res1= await res.json();
    var img=document.createElement("img");
    //img.style.display="none";
        console.log(res1.message);
        var div1=document.createElement("div");
        div1.style.marginTop="40px";
        div1.style.textAlign="center";
        div1.setAttribute("class","image-content");
        
        
        img.setAttribute("src",res1.message);
        img.style.width="200px";
        img.style.height="200px";
        
        
        div1.append(img);
        document.body.append(div1);
}
