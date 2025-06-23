
// =========  //     website loading section start here   //   =========  //

const counter = document.querySelector("#counter")
const loader = document.querySelector(".loader");
const main = document.querySelector(".landpage_hero");

 let count = 0;
 let interval = setInterval(()=>{

    if(count < 100){

        console.log(count);
        // counter.textContent = count +"%";
        counter.innerHTML = ` 
          <h1 id="counter"> ${count +"%" } </h1>
        `
        document.querySelector("#graf").style.width=count +"%";
        count++;
    }else{
        clearInterval(interval);
        // Animate loader up, then hide it
        let timeline = gsap.timeline();

        timeline.to(".loader", {
        y: "-100%",  // Slide fully up
        duration: 2,
        ease: "power3.inOut",
        onComplete: () => {
            loader.style.display = "none";
        }
        });
        timeline.from(".landpage_hero", {
        y: "100%",  // Slide fully up
        // duration: 2.5,
        delay:-4.5,
        ease: "power3.inOut",
        
        });

        timeline.set(".loader", {
            display: "none"
        });

     }
    },10)
    
    



 



// =========  //     website loading section end here   //   =========  //





const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
// console.log(scroll);





//==============         hovering effect on images
const elembox = document.querySelectorAll(".elem")

     let preRotation = 0;
     let diffrot = 0;

      elembox.forEach( (item)=>{
        // console.log(item);

        item.addEventListener("mousemove",function(dets){
            // console.log(item.querySelector("img"));
            // console.log(dets.clientY)
            // console.log(item.getBoundingClientRect().top);
            differY=dets.clientY-item.getBoundingClientRect().top;// image move in y direction
            // console.log("differ",differY);
            //===============       image rotate method      ===========
            diffrot = dets.clientX - preRotation;
            preRotation = dets.clientX;

            // console.log(diffrot);
           
            gsap.to(item.querySelector("img"),{
                // opacity:1,
                // display: "block",
                ease:Power2,
                top:differY,
                left:dets.clientX,
                rotate: gsap.utils.clamp(-20,20,diffrot)
            })
        })



          item.addEventListener("mouseleave",function(){
            // console.log("mouse leave");
            // item.querySelector("img").style.display= "none"
           
            gsap.to(item.querySelector("img"),{
                opacity:0,//best as compare to display special in gsap
                duration: 0.4,
                // display: "none",
                ease:Power3,
                // onComplete: () => {//second approch
                //     item.querySelector("img").style.display = "none";
                // }
                
            })
        })
          item.addEventListener("mouseenter",function(){
            console.log("mouse leave");
            gsap.to(item.querySelector("img"),{
                opacity:1,
                display: "block",
                duration: 0.4,
                ease:Power3,
                
            })
        })


      } )



// //========//     about section custom cusor start here    //===========//

const cusorfollew = (xscale,yscale)=>{
    window.addEventListener("mousemove",function(dets){
        // console.log(dets.clientX);
        document.querySelector('.circle').style.transform=`translate(${dets.clientX}px,${dets.clientY}px) scale(${xscale},${yscale})`


        
        
    })
}
cusorfollew()

let timeout;

 function funwithcursor(){
    let xscale = 1;
    let yscale = 1;

    let xpreval =0;
    let ypreval =0;

    window.addEventListener("mousemove",function(dets){
        clearTimeout(timeout)
        let differX = dets.clientX - xpreval;
        let differY = dets.clientY - ypreval;
        // console.log(differX,differY);
        
        
        
        xscale = gsap.utils.clamp(.8 , 1.2 , differX);
        yscale = gsap.utils.clamp(.8 , 1.2 , differY);
        
        xpreval = dets.clientX;
        ypreval = dets.clientY;


        cusorfollew(xscale,yscale)

        setTimeout(() => {
           timeout = document.querySelector('.circle').style.transform=`translate(${dets.clientX}px,${dets.clientY}px) scale(${1},${1})`

        }, 50);
    })
    
 }
 funwithcursor();

// //=======//      about section custom cusor end here       //===========//

//=========              nav animation function start       ============//

// | Aapka Code Style | Result                                   |
// | ---------------- | ---------------------------------------- |
// | `from()`         | Start from that state → current state    |
// | `to()`           | Start from current → move to given state |
// | `expo.inOut`     | Soft, elegant easing                     |
// | `power4.inOut`   | Fast, powerful easing                    |

 console.log(document.querySelector(".bounding_elem"));
 

  function  firstpageAni(){
    let timeine = gsap.timeline();
    timeine.from(".nav",{
        y:'-20',
        opacity:0,
        duration:2,
        delay:2.5,
        //ease: "power4.inOut"//power ki value Jitna zyada number utna zyada power (fast/forceful motion)
         ease: "expo.inOut" //another way
    })
      timeine.to(".bounding_elem",{
        y:'0',
        duration:2,
        delay:-1,
        ease:"expo.inOut",
         stagger: 0.2  //used for multiple elements 200ms gap between each box
    })
    timeine.from(".hero_footer",{
        y:"10",
        opacity:0,
        delay:-1,
        duration:2,
        ease:"expo.inOut"
    })
  }
  firstpageAni();




//=========              nav animation function end         ============//