console.log("Hello world");



const first_divv = document.getElementById("first_divv");
const search_bar = document.getElementById("search_bar");


const displayer = document.getElementById("displayer");
const actual_data_displayer = document.getElementById("actual_data_displayer");
const Absolute_div = document.getElementById("Absolute_div");







const get_Character_Data = async (text) =>{

    actual_data_displayer.innerHTML = "";
    var id_array =[];

    // displayer.innerHTML = `<img src="./Assets/Black panther Loader gif.gif"/>`;
    console.log("Getting id Data....");
    try
    {
        displayer.style.display = "block";
        displayer.innerHTML = `<img class="loader" src="./Assets/Black panther Loader gif.gif"/>`;
        const URL = `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${text}&orderBy=name%2Cmodified%2C-name&apikey=dedd0192a9362d10475ce65ec4f50954&ts=1&hash=cb69a9bb60af03a04e9bfae5b18caffd`;
        let response = await fetch(URL);
        let data = await response.json();
        console.log("search bar value:" + text);

        console.log(`"${text}" text has this many characters related to it:`);
        for(var i = 0; i<data.data.results.length;i++)
            {
                var element = data.data.results[i];

                // character id extractor
                const charcter_id = element.id;
                //variable to check if that charcter had any comics or not
                const comics_checker = element.comics.returned;
                if( comics_checker!= 0)
                    {
                        id_array.push(charcter_id);
                        console.log(element.name +"'s "+"id=" +charcter_id );
                    }

            }
            console.log("hopefully ids are stored here"+id_array);
            
    }
    catch(err){
        console.log("we are sorry There was an error!! try checking your internet connection" + err)
        // make a html tag using back tick to tell there was an error later
    }

// const extract_comic_data = async () =>{
    actual_data_displayer.innerHTML = "";
    console.log("Getting comics Data....");
    try{
        var k= 0;
        while(id_array[k] != undefined){




            const URL = `https://gateway.marvel.com/v1/public/characters/${id_array[k]}/comics?apikey=dedd0192a9362d10475ce65ec4f50954&ts=1&hash=cb69a9bb60af03a04e9bfae5b18caffd`;
            let response_2nd = await fetch(URL);
            let data_2nd = await response_2nd.json();
            
            const comics_2nd_checker = data_2nd.data.count;
            for(var j =0;j<comics_2nd_checker;j++){
                var element_2nd = data_2nd.data.results[j];

                console.log("hopefully titles:" + element_2nd.title);
                const img_url = element_2nd.thumbnail.path;
                const img_extension = element_2nd.thumbnail.extension;
                actual_data_displayer.innerHTML += 
                `<div class="grid_element">
                    <div>Title of Comic: ${element_2nd.title}</div>
                    <div><img src ="${img_url}/portrait_uncanny.${img_extension}"></div>
                </div>`
                $("#displayer").fadeOut();


            }
            console.log("this many times while loop is looped" + k)
            k++;
        }



    }
    catch(err){
        console.log("we are sorry There was an error!! try checking your internet connection" + err)
        // make a html tag using back tick to tell there was an error later
    }
        // setTimeout (function(){
            // $("#displayer").fadeOut();
            // },1000);
        };





Absolute_div.addEventListener("submit", function(e){

    e.preventDefault();
    console.log("Is this working");
    const search_Bar_Value = document.getElementById("search_bar");
    let text = search_Bar_Value.value;
    displayer.innerText = text;

    get_Character_Data(text);

});

