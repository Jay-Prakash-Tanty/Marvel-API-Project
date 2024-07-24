    //uncomment this function to see hardcoded images 
function wisper(){


      //to remove the loader animation when this fucntion is called{   
        let all_disp_none = document.querySelector(".loader_setting");
        

        let loader_disp = document.querySelector(".loadder_container");


          loader_disp.classList.add("loadder_container_2");
          all_disp_none.classList.add("loader_setting_2");


        console.log("removed i guess");




  
       //}


    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 4,
      spaceBetween: 10,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }

    //uncomment this to see hardcoded images 
    // light box
    // document.querySelectorAll(".swiper-wrapper img").forEach(boxes => {
    //   boxes.onclick = ()=>{
    //     console.log("hehoooe");
    
    //     var blur_it = document.getElementById("blur");
    //     blur_it.classList.toggle("active");
    
    //     var light_it = document.getElementById("anyyting");
    //     light_it.classList.toggle("lliigghhtt");
    
    //   }
    
    // });
    // function close_off(){
    //   var blur_it = document.getElementById("blur");
    //   blur_it.classList.toggle("active");
    
    //   var light_it = document.getElementById("anyyting");
    //   light_it.classList.toggle("lliigghhtt");
    // }






    var sec= 0;
    var min= 0;
    function timerCycle(){
      var timer = document.getElementById("timer");

      
      sec = parseInt(sec);
      min = parseInt(min);
      
      sec = sec+1;
      
      if( sec == 60)
      {
        min=min+1;
        sec = 0;
      }

      if(sec<10){
        sec = "0" + sec;
      }
      if(min<10)
      {
        min = "0"+ min;
      }
      
      timer.innerHTML = min + ":" + sec;
      setTimeout("timerCycle()",1000);
    }



var comics_data_extract = async ()=>{


//stop watch code starts


timerCycle();

var array_of_sneak_peek = ["102290","105860","32926","38687","22822","93013","110317","104575"];

for(let i=0;i<8; i++){

  console.log("loop no:"+i);
  var swiper_wrapper = document.getElementById("swiperrer");

  var URRL = `https://gateway.marvel.com/v1/public/comics/${array_of_sneak_peek[i]}?apikey=dedd0192a9362d10475ce65ec4f50954&ts=1&hash=cb69a9bb60af03a04e9bfae5b18caffd`

  let daattaa = await fetch(URRL);
  let datta_store = await daattaa.json();

  console.log("conversion to object is done");

  swiper_wrapper.innerHTML += `<div id="image_${i}" class="boxes swiper-slide"><img class="puda" src=${datta_store.data.results[0].thumbnail.path}/portrait_incredible.${datta_store.data.results[0].thumbnail.extension}></div>`;


  var anyyting = document.getElementById("anyyting");
  anyyting.innerHTML += `<div class="image_activator"><img class="ind_lightbnoxes"src=${datta_store.data.results[0].thumbnail.path}/clean.${datta_store.data.results[0].thumbnail.extension}><button id = "bbuuttnn" class="boxes" onclick="close_off()">close</button><div>hello world</div></div>`
}

wisper();
    //comment this to see hardcoded images {
         document.querySelectorAll(".swiper-wrapper div").forEach(boxes => {
             boxes.onclick = ()=>{

             console.log("hehoooe");

             var blur_it = document.getElementById("blur");
             blur_it.classList.toggle("active");


             var gulla = boxes.getAttribute("id");
             console.log("gulla"+gulla);

             var count =0;
             for(let j =0;gulla!=`image_${j}`;j++){
              
              count++;
             }
             

            //  count+1 is the one we need

            var gamit = document.querySelectorAll(".image_activator");
            console.log("magit"+gamit[count]);

            gamit[count].classList.add("image_activator_2");

            localStorage.setItem("radiogaga",JSON.stringify(gamit[count]));

console.log("JSON.stringify(gamit[count]):"+JSON.stringify(gamit[count]));
             


            //  var light_it = document.querySelector(".image_activator");
            //  light_it.style.top="0px";
            //  light_it.style.opacity = "1";
            //  light_it.style.visibility = "visible";
            //  light_it.style.transition= "0.75s";

             var light_it_container = document.querySelector("#anyyting");
             light_it_container.style.top="50%";
             light_it_container.style.opacity = "1";
             light_it_container.style.visibility = "visible";
             light_it_container.style.transition= "0.75s";



             }

            });

           
    //}


}
function close_off(){
  var blur_it = document.getElementById("blur");
  blur_it.classList.toggle("active");


  var light_it_container = document.querySelector("#anyyting");


  var thhis = document.querySelector(".image_activator_2");
  thhis.classList.remove("image_activator_2");
  sessionStorage.clear();
  localStorage.clear();

  // var light_it = document.querySelector(".image_activator");
  // light_it.style.top="-15%";
  // light_it.style.opacity = "0";
  // light_it.style.visibility = "hidden";
  // light_it.style.transition= "0.75s";

  var light_it_container = document.querySelector("#anyyting");
  light_it_container.style.top="35%";
  light_it_container.style.opacity = "0";
  light_it_container.style.visibility = "hidden";
  light_it_container.style.transition= "0.75s";
}




// function blur_toggle(){
//   var blur_it = document.getElementById("blur");
//   blur_it.classList.toggle("active");
//   console.log("gulgulu");
// }
// // blur()
// function increment (){
//   console.log("you are g ay")
//   you += 1
//   countEl.innerText = you

// }