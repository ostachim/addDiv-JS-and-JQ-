const btnJs = document.querySelector(".buttonJs");

function buttonJsClick(){
    let divJs = document.createElement("div");
    divJs.classList.add("block")
    
    document.body.appendChild(divJs);

}

btnJs.addEventListener("click",buttonJsClick);

$(".buttonJq").click(function(){
    $("body").append("<div class='block'></div>")
})