let textbox = document.getElementById("textarea");

textbox.addEventListener("input", function(){
    let text = this.value;
    let chracters = text.length;
    document.getElementById("chracters").innerHTML = chracters;

    text = text.trim();
    let words = text.split(" ");
    let cleanList = words.filter(function(elements){
       return elements != "";
    })
    console.log(cleanList)
    document.getElementById("word").innerHTML = cleanList.length;
})