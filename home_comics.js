    //uncomment this function to see hardcoded images 
function wisper(){


      //to remove the loader animation when this fucntion is called{   
        let all_disp_none = document.querySelector(".loader_setting");
        

        let loader_disp = document.querySelector(".loadder_container");


          loader_disp.classList.add("loadder_container_2");
          all_disp_none.classList.add("loader_setting_2");


        




  
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
    //     
    
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

  
  var swiper_wrapper = document.getElementById("swiperrer");

  var URRL = `https://gateway.marvel.com/v1/public/comics/${array_of_sneak_peek[i]}?apikey=dedd0192a9362d10475ce65ec4f50954&ts=1&hash=cb69a9bb60af03a04e9bfae5b18caffd`

  let daattaa = await fetch(URRL);
  let datta_store = await daattaa.json();

  

  swiper_wrapper.innerHTML += `<div id="image_${i}" class="boxes swiper-slide"><img class="puda" src=${datta_store.data.results[0].thumbnail.path}/portrait_incredible.${datta_store.data.results[0].thumbnail.extension}></div>`;



  // creators array storrer starts

          var creator_array = [];
          let w =0;
          for( ; datta_store.data.results[0].creators.items[w]!=null;w++){}
          
 
  // creators array storrer ends


  // characters array storrer starts

                                                                                                                      let g = 0;
                                                                                                                      for( ; datta_store.data.results[0].characters.items[g]!=null;g++){}
                                                                                                                      



  // characters array storrer ends

  var anyyting = document.getElementById("anyyting");
   
   var on_sale_date =datta_store.data.results[0].dates[0].date;

   let only_on_sale_date = on_sale_date.substr(0,10);

  anyyting.innerHTML += 
  `<div class="image_activator">

    <img class="ind_lightbnoxes"src=${datta_store.data.results[0].thumbnail.path}/clean.${datta_store.data.results[0].thumbnail.extension}>

    <button id = "bbuuttnn" class="boxes" onclick="close_off()">
      close
    </button>

    <div>
      title:${datta_store.data.results[0].title}
    </div>

    <div>
      description:${datta_store.data.results[0].description}
    </div>

    <div>
      On-Sale-Date:${only_on_sale_date}
    </div>

    <div>
      link:${datta_store.data.results[0].urls[0].url}
    </div>

    <div>
      Creators:
      <div id="creator_${i}">
      </div>
    </div>

    <div>
      Characters:
      <div id="characcetrs_${i}">
      </div>
    </div>

  </div>`

  // creators displayers starts

            var creator_var = document.getElementById(`creator_${i}`);
            for(let t =0; t<w;t++){
            creator_var.innerHTML += 
            `<div>${datta_store.data.results[0].creators.items[t].name}</div>
             <div>${datta_store.data.results[0].creators.items[t].role}</div>`}

  // creators displayers ends


  // characters displayers starts
                                                                                                           var characcetrs_var = document.getElementById(`characcetrs_${i}`);
                                                                                                           console.log("count 0");
                                                                                                           for(let k=0; k<g;k++){
                                                                                                            console.log("count 1");
                                                                                                             characcetrs_var.innerHTML +=
                                                                                                             
                                                                                                             `<div>
                                                                                                                 ${datta_store.data.results[0].characters.items[k].name}
                                                                                                              </div>
                                                                                                              <div class="gugu${i}"></div>`;
                                                                                                              console.log("count 2");
                                                                                                             
                                                                                                             
                                                                                                                             //characters tumbnail extractor starts 
                                                                                                                 
                                                                                                                            //  var comics_char_data_extract = async ()=>{
                                                                                                                              console.log("count 3");
                                                                                               
                                                                                                                     
                                                                                                                                 var comic_light_char_name = datta_store.data.results[0].characters.items[k].name;
                                                                                                                                 var URRL_2 = `https://gateway.marvel.com:443/v1/public/characters?name=${comic_light_char_name}&apikey=dedd0192a9362d10475ce65ec4f50954&ts=1&hash=cb69a9bb60af03a04e9bfae5b18caffd`
                                                                                                                     
                                                                                                                                 let daattaa_2 = await fetch(URRL_2);
                                                                                                                                 let datta_store_2 = await daattaa_2.json();
                                                                                                                                 
                                                                                                                                //  
                                                                                                                                 let thumbnail_2 = datta_store_2.data.results[0].thumbnail.path;
                                                                                                                                 let extension_2 = datta_store_2.data.results[0].thumbnail.extension;

                                                                                                                                 
                                                                                                                                 
                                                                                                                     
                                                                                               
                                                                                                                                 characcetrs_var.innerHTML += `<img id="char_image" src=${thumbnail_2}/standard_large.${extension_2}>`;
                                                                                                                                 
                                                                                                                                  
                                                                                                                                   
                                                                                                                               }
                                                                                                                              //  comics_char_data_extract();
                                                                                                                                //  }
                                                                                                                               //characters tumbnail extractor ends 


  // characters displayers ends


}

wisper();
    //comment this to see hardcoded images {
         document.querySelectorAll(".swiper-wrapper div").forEach(boxes => {
             boxes.onclick = ()=>{

             

             var blur_it = document.getElementById("blur");
             blur_it.classList.toggle("active");


             var gulla = boxes.getAttribute("id");
             

             var count =0;
             for(let j =0;gulla!=`image_${j}`;j++){
              
              count++;
             }

             
             

            //  count+1 is the one we need

            var gamit = document.querySelectorAll(".image_activator");
            



            

            gamit[count].classList.add("image_activator_2");

            localStorage.setItem("radiogaga",JSON.stringify(gamit[count]));


             


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
//   
// }
// // blur()
// function increment (){
//   
//   you += 1
//   countEl.innerText = you

// }