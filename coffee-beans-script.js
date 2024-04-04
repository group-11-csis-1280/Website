class CoffeeBean{
    constructor(rank, price, taste){
        this.rank = rank;
        this.price = price;
        this.taste = taste;
    }
}

//these are the coffees
/*    <ul>Arabica</ul>
     <ul>Robusta</ul>
        <ul>Bourbon</ul>
        <ul>Catimor</ul>
        <ul>Caturra</ul>
        <ul>Geisha</ul>
        <ul>Harar Artisan</ul>
        <ul>Icatu</ul>
        <ul>Jackson</ul>
        <ul>Jamaican Blue</ul>
//these are the tastes
/* sweet
   strong
   robust
   smooth
   acidic
   */

let arabica = new CoffeeBean(1, 10.99, ["sweet", "robust", "strong"])
let robusta = new CoffeeBean(2, 12.99, ["robust", "strong"])
let bourbon = new CoffeeBean(3, 8.99, ["sour", "strong"])
let catimor = new CoffeeBean(4, 15.99, ["acidic", "sweet", "smooth"])
let caturra = new CoffeeBean(5, 16.99, ["smooth", "strong"])
let geisha = new CoffeeBean(6, 17.99, ["smooth", "sweet"])
let harar = new CoffeeBean(7, 14.99, ["robust", "smooth", "acidic"])
let icatu = new CoffeeBean(8, 13.99, ["sweet"])
let jackson = new CoffeeBean(9, 11.99, ["robust", "sweet"])
let jamaican = new CoffeeBean(10, 19.99, ["sweet", "smooth", "robust", "strong"])

//function to sort by taste
function tasteSort(){
    var tasteProfile = []
    var taste = document.getElementById("taste-list").options;
    for (var i = 0; i < taste.length; i++){
        if(taste[i].selected){
            tasteProfile.push(taste[i].value);
        }
    }

    //matching taste with coffee beans
    for (var i = 0; i<tasteProfile.length; i++){
        var selectedTaste = tasteProfile[i];

        if(!arabica.taste.includes(selectedTaste)){
            document.getElementById("arabica").style.display = "none"
        }
        else{
            document.getElementById("arabica").style.display = "flex"
        }

        if(!robusta.taste.includes(selectedTaste)){
            document.getElementById("robusta").style.display = "none"
        }
        else{
            document.getElementById("robusta").style.display = "flex"
        }

        if(!bourbon.taste.includes(selectedTaste)){
            document.getElementById("bourbon").style.display = "none"
        }
        else{
            document.getElementById("bourbon").style.display = "flex"
        }

        if (!catimor.taste.includes(selectedTaste)) {
            document.getElementById("catimor").style.display = "none";
        }
        else{
            document.getElementById("catimor").style.display = "flex"
        }
        
        if (!caturra.taste.includes(selectedTaste)) {
            document.getElementById("caturra").style.display = "none";
        }
        else{
            document.getElementById("caturra").style.display = "flex"
        }
        
        if (!geisha.taste.includes(selectedTaste)) {
            document.getElementById("geisha").style.display = "none";
        }
        else{
            document.getElementById("geisha").style.display = "flex"
        }
        
        if (!harar.taste.includes(selectedTaste)) {
            document.getElementById("harar-artisan").style.display = "none";
        }
        else{
            document.getElementById("harar-artisan").style.display = "flex";
        }
        
        if (!icatu.taste.includes(selectedTaste)) {
            document.getElementById("icatu").style.display = "none";
        }
        else{
            document.getElementById("icatu").style.display = "flex";
        }
        
        if (!jackson.taste.includes(selectedTaste)) {
            document.getElementById("jackson").style.display = "none";
        }
        else{
            document.getElementById("jackson").style.display = "flex";
        }
        
        if (!jamaican.taste.includes(selectedTaste)) {
            document.getElementById("jamaican-blue").style.display = "none";
        }
        else{
            document.getElementById("jamaican-blue").style.display = "flex";
        }
        
        
    }
}



//function to sort by price and best selling
function filterSort(){
    var filterProfile = []
    var filter = document.getElementById("sort-list").options;
    for(var i = 0; i<filter.length; i++){
        if(filter[i].selected){
            filterProfile.push(filter[i].value);
        }
    }

    alert("selected: " + filterProfile.join(", "))
}
