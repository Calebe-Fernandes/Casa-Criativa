document
    .querySelector("nav a.new")   
    .addEventListener("click", function(){
        document
            .querySelector("#modal")
            .classList
            .toggle("hide")

        document
            .querySelector("body")
            .classList
            .toggle("hideScroll")

        document
            .querySelector("#modal")
            .classList
            .toggle("addScroll")
            

})
document
    .querySelector("form a")
    .addEventListener("click", function(){
        document
            .querySelector("#modal")
            .classList
            .toggle("hide")
        document
            .querySelector("body")
            .classList
            .toggle("hideScroll")

        document
            .querySelector("#modal")
            .classList
            .toggle("addScroll")
            

    })
