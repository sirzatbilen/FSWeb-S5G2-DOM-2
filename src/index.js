import './less/index.less'

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
// document.querySelector("h1").addEventListener("click",function(e){
// alert("Bana tıkladın!")
// });


// Kodlar buraya gelecek!


//
//
//           MOUSEOVER - MOUSEOUT
//
//
const nav = document.querySelectorAll(".nav-link");
nav.forEach(item => {
    item.addEventListener("mouseover", (event) => {
    item.style.backgroundColor = "grey";
    item.style.border = "1px solid black";
    item.style.padding = "5px";
    item.style.color = "white"
    item.style.borderRadius = "5px"
    item.style.transitionDuration = "0.5s"
});
item.addEventListener("mouseout",(event) => {
    item.style.backgroundColor = "unset";
    item.style.border = "none";
    item.style.padding = "0";
    item.style.color = "black"
    item.style.borderRadius = "0"
})
});
//
//
//          KEYDOWN
//
//
const header = document.querySelector("header");
const bodyletter = document.querySelector("body");
bodyletter.addEventListener("keydown" , (event) => {
    if(event.key == 2){
    bodyletter.style.letterSpacing = "2px";
    const colors = ["#FF5733","#FFF333","#9CFF33","#33FFD4","#33C7FF","#3333FF","#CE33FF","#FF339C","#FF3333"]
    function generalRandomNumber (number) {
    return Math.floor(Math.random() * number);
    }
    bodyletter.style.backgroundColor = colors[generalRandomNumber(colors.length)];
    header.style.backgroundColor = colors[generalRandomNumber(colors.length)];
    }
});

//
//
//
//           wheel
    function tarihSaat() {
    let date = new Date().toLocaleDateString("tr-TR");
    document.getElementById("zaman").innerHTML = date;
  }
  setInterval(tarihSaat,1000)
  document.getElementById("zaman");
  zaman.addEventListener("wheel",(event)=>{
    zaman.style.fontSize= "2rem";
  })

  //
  //
  //         load

//
//
//          focus

    document.getElementById("focusButton").addEventListener("click", () => {
        document.getElementById("mail").focus();
         
      });
    document.getElementById("focusButton").addEventListener("click" , (event) => {
    event.target.style.backgroundColor = "red"
        });

//
//
//      resize
    window.addEventListener("resize",()=> document.querySelector("h1").textContent = "ekran boyutu değiştirildi");

//
// 
//      scroll
    window.addEventListener("scroll",()=> {
        const color1 = Math.floor(Math.random()*255+1)
        const color2 = Math.floor(Math.random()*255+1)
        const color3 = Math.floor(Math.random()*255+1)
        document.body.style.backgroundColor = `rgb(${color1},${color2},${color3})`;
    } )

//
//
//      select

//
//
//      dblclick
    const imgBuyut = document.querySelectorAll("img")
    imgBuyut.forEach(resim => {
        resim.addEventListener("dblclick", (event)=>{
            if(event.target.style.width === "100px"){
                event.target.style.width = ""
            }else{
                event.target.style.width = "100px";
            }
        })
    })

//
//
//      drag-drop
const images = document.querySelectorAll(".drags img");
images.forEach( (img) => {
    img.addEventListener("dragstart", (ev) =>{
        ev.dataTransfer.setData("text", ev.target.id);
    })
})
const mainImg = document.querySelector("header img");

mainImg.addEventListener("drop",(ev)=>{
    ev.preventDefault();
    const targetImg= document.getElementById(ev.target.id);
    const targetImgSrc = targetImg.src;

    const sourceImg = document.getElementById(ev.dataTransfer.getData("text"));
    const sourceImgSrc = sourceImg.src;

    targetImg.src = sourceImgSrc;
    sourceImg.src = targetImgSrc;
})
mainImg.addEventListener("dragover",(ev)=>{
    ev.preventDefault();
})