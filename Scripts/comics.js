//haha
const searchBox = document.querySelector(".search-box");
const searchBtn = document.querySelector(".search-icon");
const cancelBtn = document.querySelector(".cancel-icon");
const searchInput = document.querySelector("input");
const sklaerch = document.querySelector(".tingting");

sklaerch.classList.add("unclicked");

searchBtn.onclick =()=>{

    //
    sklaerch.classList.add("fixer");
    sklaerch.classList.remove("unclicked");
    //
    searchBox.classList.add("active");
    searchBtn.classList.add("active");
    searchInput.classList.add("active");
    cancelBtn.classList.add("active");
    searchInput.focus();


        jatra();

    }

cancelBtn.onclick =()=>{
    //
    sklaerch.classList.remove("fixer");
    searchInput.value = "";
    sklaerch.classList.add("unclicked");
    //
    searchBox.classList.remove("active");
    searchBtn.classList.remove("active");
    searchInput.classList.remove("active");
    cancelBtn.classList.remove("active");
    // searchInput.value = "";
    }
// haha



const first_divv = document.getElementById("first_divv");
const search_bar = document.getElementById("search_bar");


const displayer = document.getElementById("displayer");
const actual_data_displayer = document.getElementById("actual_data_displayer");
const Absolute_div = document.getElementById("Absolute_div");




var limiter_modifier = 14;
localStorage.setItem("limiter_modifier_stored",limiter_modifier)

var no_of_comics_data_retunred_counter_modifier = 0;
localStorage.setItem("no_of_comics_data_retunred_counter_modifier_stored",no_of_comics_data_retunred_counter_modifier)

var array_key=0;
localStorage.setItem("array_key_storrer",array_key);

var nulll= "reset";
localStorage.setItem("modelore",nulll)

console.log("moadlore "+localStorage.getItem("modelore"));


var id_array =[];

var foo =0;

const get_Character_Data = async (text) =>{


    actual_data_displayer.innerHTML = "";
    fudge.innerHTML = "";
    var id_array =[];
    // var no_of_comics_data_retunred_counter = 0;

    // displayer.innerHTML = `<img src="./Assets/Black panther Loader gif.gif"/>`;
    
    try
    {
        displayer.style.display = "block";
        displayer.innerHTML = `<img class="loader" src="./Assets/Black panther Loader gif.gif"/>
        <p>Loading...</p>`;
        const URL = `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${text}&orderBy=name%2Cmodified%2C-name&apikey=dedd0192a9362d10475ce65ec4f50954&ts=1&hash=cb69a9bb60af03a04e9bfae5b18caffd`;
        let response = await fetch(URL);
        let data = await response.json();
        

        
        for(var i = 0; i<data.data.results.length;i++)
            {
                var element = data.data.results[i];

                // character id extractor
                const charcter_id = element.id;
                //variable to check if that charcter had any comics or not
                const comics_checker = element.comics.returned;
                if( comics_checker!= 0)
                    {
                        id_array.push({"dattaa": charcter_id});
                        
                    }

            }
            
            
    }
    catch(err){
        
        // make a html tag using back tick to tell there was an error later
    }
    
    localStorage.setItem("char_array_id",JSON.stringify(id_array));

    extract_comic_data();

};

const extract_comic_data = async () =>{
    actual_data_displayer.innerHTML = "";
    var id_2nd_array = [];
    

    // var no_of_comics_data_retunred_counter = 0;
    // var no_of_comics_data_retunred_counter_modifier = no_of_comics_data_retunred_counter;

    var limiter = localStorage.getItem("limiter_modifier_stored");
    
    var no_of_comics_data_retunred_counter = localStorage.getItem("no_of_comics_data_retunred_counter_modifier_stored");
    
    let id_3rd_array = localStorage.getItem("char_array_id");
    
    id_2nd_array = JSON.parse(id_3rd_array);
    
    var k= localStorage.getItem("array_key_storrer");


    // let id_4th_array =[];
    // id_4th_array= JSON.stringify(id_2nd_array);
    // 
    // 

    try{
        // 
        // 
        
        
        
        // 
        
        
        outerLoop:
        while(JSON.parse(id_2nd_array[k].dattaa) != undefined){
            console.log("2)vvvvvvvvvvvvvvvvvvvvvvvvvvalue of k = "+k);
            var foo =0 ;
            let ju =k;
            ju=k+1
            // console.log("outerloop runned this many times: should be same as no of ids it extracted"+ju);
            console.log(" id extracted is:"+JSON.parse(id_2nd_array[k].dattaa));

            

            const URL = `https://gateway.marvel.com/v1/public/characters/${JSON.stringify(id_2nd_array[k].dattaa)}/comics?apikey=dedd0192a9362d10475ce65ec4f50954&ts=1&hash=cb69a9bb60af03a04e9bfae5b18caffd`;
            
            let response_2nd = await fetch(URL); //await
            
            let data_2nd = await response_2nd.json(); //await
            
            // var comics_4th_checker =  comics_2nd_checker
            const comics_2nd_checker = data_2nd.data.count;
            
            // if(comics_2nd_checker!=comics_4th_checker)
            //     {var foo =foo}
            // else {foo=0}
            console.log("is this running");
            if(localStorage.getItem("modelore")!="reset"){
                foo=localStorage.getItem("modelore");
                // console.log("should be 14"+ localStorage.getItem("modelore"));
                // console.log("outerloop runned this many times: should be same as no of ids it extracted"+ju);
                // debugger;

                
            }
            else{
                foo=0;
                // console.log("outerloop runned this many times: should be same as no of ids it extracted"+ju);
            }
            
            
            
            for(var o = foo; o<comics_2nd_checker; o++){
                console.log("2)is this running");
                var element_2nd = data_2nd.data.results[o];

                // console.log("no_of_comics_data_retunred_counter ka value if ke just pehele"+no_of_comics_data_retunred_counter)
                // console.log("limiter ka value if ke just pehele"+limiter);
                // console.log("value of o:"+o);
                // console.log("kkkkkkkkkkkkkkkkkkkkkkk="+k);
                
                                                                                            //    if(no_of_comics_data_retunred_counter>=limiter)
                                                                                                   
                                                                                            //        {
                                                                                            //            const fudge = document.getElementById("fudge");
                                                                                            //            fudge.innerHTML = `<button class="apple_sauce" onclick="load_morer()">LOAD MORE</button>`;
                                                                                            //            // var k_modiifer = localStorage.getItem("array_key_storrer")
                                                                               
                                                                                            //            localStorage.setItem("fourteen_pluser",no_of_comics_data_retunred_counter)
                                                                                            //            // var seesh = o+1;
                                                                                            //            localStorage.setItem("O_ppa",o);
                                                                               
                                                                                            //            localStorage.setItem("k_amplifier",k);
                                                                               
                                                                                            //            console.log("kkkkkkkkkkkkkkkkkkkkkkk="+k);
                                                                                                       
                                                                                                       
                                                                                            //            console.log("o ka value" + o);
                                                                               
                                                                                            //            break outerLoop;
                                                                                                       
                                                                                            //        }
                                                                               
                    const img_url = element_2nd.thumbnail.path;
                    const img_extension = element_2nd.thumbnail.extension;
                    const hahahuhu = element_2nd.urls[0].url;
                    console.log("should be infinite links"+hahahuhu)
                    console.log("3)is this running");
                    actual_data_displayer.innerHTML += 
                    `<div class="grid_element">

                        <div><a href="${hahahuhu}" target="_blank" rel="noopener noreferrer" ><img class="main_char_disp" src ="${img_url}/portrait_uncanny.${img_extension}"></div></a>

                    </div>`;
                    console.log("must have displayed");






                    $("#displayer").fadeOut();

                    
                    no_of_comics_data_retunred_counter++;
                    console.log("no_of_comics_data_retunred_counter"+no_of_comics_data_retunred_counter);



            }
            var bang= "reset";
            localStorage.setItem("modelore",bang);
            
            k++;
            console.log("nos of comics in one id"+k);

        }



    }
    catch(err){
        
        // make a html tag using back tick to tell there was an error later
    }
        // setTimeout (function(){
            // $("#displayer").fadeOut();
            // },1000);
   
};
            function load_morer(){
                


                var limiter_loader_morer = localStorage.getItem("limiter_modifier_stored");
                var no_of_comics_data_retunred_counter_loader_morer = localStorage.getItem("fourteen_pluser");
                var k_modifier= localStorage.getItem("array_key_storrer");
                let array_3rd_modifier = localStorage.getItem("char_array_id");
                var o_ppa_2 = localStorage.getItem("O_ppa");
                var k_amplifier_storer = localStorage.getItem("k_amplifier");
                sessionStorage.clear();
                localStorage.clear();


                // var limiter_loader_morer_stringer = JSON.stringify(limiter_loader_morer);
                // limiter_loader_morer_stringer = limiter_loader_morer_stringer + 14 ;
                // 
                var alphe = parseInt(limiter_loader_morer)
                alphe = alphe + 14; 
                
                localStorage.setItem("limiter_modifier_stored",alphe)

                // var bete = parseInt(no_of_comics_data_retunred_counter_loader_morer)
                // bete = bete + 14;
                localStorage.setItem("no_of_comics_data_retunred_counter_modifier_stored",no_of_comics_data_retunred_counter_loader_morer);

                localStorage.setItem("array_key_storrer",k_modifier)

                localStorage.setItem("char_array_id",array_3rd_modifier);

                localStorage.setItem("modelore",o_ppa_2);

                localStorage.setItem("array_key_storrer",k_amplifier_storer);

                console.log("ye wo value hai jo ki 14 hi hona chahiye"+localStorage.getItem("modelore"));

                console.log("1)vvvvvvvvvvvvvvvvvvvvvvvvvvalue of k = "+k_modifier);
                
                extract_comic_data ();



                // var limiter_loader_morer_objecter =JSON.parse(limiter_loader_morer_stringer);
                // localStorage.setItem("limiter_modifier_stored",limiter_loader_morer_objecter);
                

                // var no_of_comics_data_retunred_counter_loader_morer_stringer = JSON.stringify(no_of_comics_data_retunred_counter_loader_morer);
                // no_of_comics_data_retunred_counter_loader_morer_stringer = no_of_comics_data_retunred_counter_loader_morer_stringer +14 ;

                // var no_of_comics_data_retunred_counter_loader_morer_objector = JSON.parse(no_of_comics_data_retunred_counter_loader_morer_stringer);
                // localStorage.setItem("no_of_comics_data_retunred_counter_modifier_stored",no_of_comics_data_retunred_counter_loader_morer_objector);




                // 
                // 
                                
                // extract_comic_data ();

            }

        function jatra(){
            var fxCtrls = [].slice.call(document.querySelectorAll(".fixer"))

            console.log("fxCtrls"+fxCtrls);

            fxCtrls.forEach(function(ctrl) {

            ctrl.addEventListener("click", custom_applyFx);
            
        });

        }
    function custom_applyFx(e){

        console.log("apple is gub");
        e.preventDefault();
        
        const search_Bar_Value = document.getElementById("search_bar");
        let text = search_Bar_Value.value;
        displayer.innerText = text;
    
        get_Character_Data(text);
    }

// loader gif

// var loader;
// function loadNow(opacity){
//     if(opacity <=0){
//         displayContent();
//     }
//     else {
//         loader.style.opacity = opacity;
//         window.setTimeout(function(){
//             loadNow(opacity - 0.05)
//         },100);
//     }
// }
// function displayContent(){
//     loader.style.display = 'none';
//     document.getElementById("Absolute_div").style.display = 'block';
// }
// document.addEventListener("aedadad", function(){
//     loader = document.getElementById("displayer");
// });
