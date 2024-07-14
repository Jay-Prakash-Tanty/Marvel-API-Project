console.log("Hello world");
var apple = {
    render: function() {
        var url = "https://gateway.marvel.com/v1/public/characters?&ts=1&apikey=dedd0192a9362d10475ce65ec4f50954&hash=cb69a9bb60af03a04e9bfae5b18caffd";
        var loader_animation = document.getElementById("loader");
        var orange = document.getElementById("footer");
        var div = document.getElementById("div")
        var elements = document.getElementById("elements");
        $.ajax({
            url:url,
            type:"GET",
            beforeSend: function(){
                console.log("ALlpe");
                div.innerHTML = `<img src="loader_animation.gif">`;
            },
            complete: function(){
                div.innerHTML = "Successfully done!!!!";
            },
            success: function(data){
                orange.innerHTML = data.attributionHTML;
                for(var i=16; i<data.data.results.length; i++){
                    var element = data.data.results[i];
                    console.log(element.name);
                }

            },
            error: function(){
                loader_animation.innerHTML = "we are sorry!!!!";
            }
        });
    }
};
                                 //un comment this to call the above lines of code!!!!
// apple.render();


const first_divv = document.getElementById("first_divv");
const search_bar = document.getElementById("search_bar");


const displayer = document.getElementById("displayer");
const actual_data_displayer = document.getElementById("actual_data_displayer");
const Absolute_div = document.getElementById("Absolute_div");







const get_Character_Data = async (text) =>{

    actual_data_displayer.innerHTML = "";

    // displayer.innerHTML = `<img src="./Assets/loader_black.gif"/>`;
    console.log("Getting Data....");
    try
    {
        displayer.style.display = "block";
        displayer.innerHTML = `<img class="loader" src="./Assets/loader_black.gif"/>`;
        const URL = `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${text}&orderBy=name%2Cmodified%2C-name&apikey=dedd0192a9362d10475ce65ec4f50954&ts=1&hash=cb69a9bb60af03a04e9bfae5b18caffd`;
        let response = await fetch(URL);
        let data = await response.json();
        console.log("search bar value:" + text);

        console.log(`"${text}" text has this many characters related to it:`);
        for(var i = 0; i<data.data.results.length;i++)
            {
                var element = data.data.results[i];


                
                // name displayer

                const img_url = element.thumbnail.path;
                const img_extension = element.thumbnail.extension;


                // setTimeout (function(){
                actual_data_displayer.innerHTML += 
                `<div class="grid_element">
                    <div>Name: ${element.name}</div>
                    <div><img src ="${img_url}/portrait_uncanny.${img_extension}"></div>
                </div>`
                // },1000);

            }



        // console.log(data.data.results);


    }
    catch(err){
        console.log("we are sorry There was an error!! try checking your internet connection" + err)
        // make a html tag using back tick to tell there was an error later
    }
    // setTimeout (function(){
        $("#displayer").fadeOut();
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

// loader gif

var loader;
function loadNow(opacity){
    if(opacity <=0){
        displayContent();
    }
    else {
        loader.style.opacity = opacity;
        window.setTimeout(function(){
            loadNow(opacity - 0.05)
        },100);
    }
}
function displayContent(){
    loader.style.display = 'none';
    document.getElementById("Absolute_div").style.display = 'block';
}
document.addEventListener("aedadad", function(){
    loader = document.getElementById("displayer");
});
