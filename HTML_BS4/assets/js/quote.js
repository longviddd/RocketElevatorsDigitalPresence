
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
    else if(selection == "residential" && document.getElementsByName("number-of-apartments")[0].length != 0 && document.getElementsByName("number-of-floors")[0].length != 0){
        var numberOfColumns = Math.ceil(parseInt(document.getElementsByName("number-of-floors")[0].value) / 20)
        console.log("number of columns " + numberOfColumns )
        var averageDoorsPerFloors = (parseInt(document.getElementsByName("number-of-apartments")[0].value) / parseInt(document.getElementsByName("number-of-floors")[0].value))
        console.log("average doors per floor " + averageDoorsPerFloors )
        var numberOfShaftsPerColumn = Math.ceil(averageDoorsPerFloors / 6)
        console.log("shafts per column  " + numberOfShaftsPerColumn )
        var totalShafts = numberOfShaftsPerColumn * numberOfColumns
        console.log("total shaftS" + totalShafts)
        document.getElementsByName("elevator-amount")[0].value = totalShafts
    }
    else if (selection == "corporate" || selection == "hybrid"){
        if(document.getElementsByName("number-of-floors")[0].length != 0 && document.getElementsByName("number-of-basements")[0].length != 0 && document.getElementsByName("maximum-occupancy")[0].length != 0 ) {
            var totalOccupants = (parseInt(document.getElementsByName("number-of-floors")[0].value) + parseInt(document.getElementsByName("number-of-basements")[0].value )) * document.getElementsByName("maximum-occupancy")[0].value // 32* 51 = 1632
            console.log("occupancy total " + totalOccupants )
            var totalElevators = totalOccupants / 1000 // 1632/1000 = 2
            console.log("Total elevators " + totalElevators)
            var numberOfColumn = Math.ceil((parseInt(document.getElementsByName("number-of-floors")[0].value) + parseInt(document.getElementsByName("number-of-basements")[0].value)) / 20) //2
            console.log("number of columns" + numberOfColumn)
            var elevatorsPerColumn = Math.ceil(totalElevators/numberOfColumn)//1
            console.log("elevator per column" + elevatorsPerColumn)
            var totalShaft = elevatorsPerColumn * numberOfColumn
            console.log("total Shaft" + totalShaft)
            document.getElementsByName("elevator-amount")[0].value = totalShaft
        }
    }
    
}