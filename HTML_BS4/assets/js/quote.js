
function isEmpty(str) {
    return !str.trim().length;
}
var selection
function selectChanged(){
    var inputClasses = document.getElementsByClassName('input')
    inputClasses.hidden = true
    document.getElementsByName("elevator-amount")[0].value = 0
    selection = document.getElementById('building-type').value
    for(var i = 0 ; i < inputClasses.length; i++){
        inputClasses[i].setAttribute("hidden", "true")
    }
    if(selection == "residential"){
        document.getElementById('number-of-floors').removeAttribute('hidden')
        document.getElementById('number-of-apartments').removeAttribute("hidden")
        document.getElementById('number-of-basements')  .removeAttribute("hidden")
        
    }
    else if (selection == "commercial"){
        document.getElementById('number-of-floors').removeAttribute('hidden')
        document.getElementById('number-of-basements').removeAttribute('hidden')
        document.getElementById('number-of-companies').removeAttribute('hidden')
        document.getElementById('number-of-parking-spots').removeAttribute('hidden')
        document.getElementById('number-of-elevators').removeAttribute('hidden')

    }
    else if (selection == "corporate"){
        document.getElementById('number-of-floors').removeAttribute('hidden')
        document.getElementById('number-of-basements').removeAttribute('hidden')
        document.getElementById('number-of-parking-spots').removeAttribute('hidden')
        document.getElementById('number-of-corporations').removeAttribute('hidden')
        document.getElementById('maximum-occupancy').removeAttribute('hidden')
    }
    else if (selection == "hybrid"){
        document.getElementById('number-of-floors').removeAttribute('hidden')
        document.getElementById('number-of-basements').removeAttribute('hidden')
        document.getElementById('number-of-companies').removeAttribute('hidden')
        document.getElementById('number-of-parking-spots').removeAttribute('hidden')
        document.getElementById('maximum-occupancy').removeAttribute('hidden')
        document.getElementById('business-hours').removeAttribute('hidden')
    }
}
function calculateElevators(){
    selection = document.getElementById('building-type').value
    if(selection == "commercial" && document.getElementsByName("number-of-elevators")[0].length != 0){
        document.getElementsByName("elevator-amount")[0].value = document.getElementsByName("number-of-elevators")[0].value
    }
    
}