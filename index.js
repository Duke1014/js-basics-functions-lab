// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
    var distance = blocks - 42;
    var distance = Math.abs(distance);
    return distance;
}

function distanceFromHqInFeet(feet) {
    var distance = feet - 42;
    var distance = distance * 264;       // unit change from blocks to feet
    var distance = Math.abs(distance);
    return distance;
}

function distanceTravelledInFeet(num1, num2) {
    var distance = num2 - num1;
    var distance = Math.abs(distance);
    var distance = distance * 264; // unit change
    return distance;
}

function calculatesFarePrice(start, destination,) {
    var distance = destination - start;
    var distance = Math.abs(distance);
    var distance = distance * 264; // unit change
    if (distance <= 400){
        let price = 0;
        return price;
    }
    else if (distance < 2000 && distance > 400) {
        var price = distance - 400
        var price = price / 50
        return price
    } 
    else if (distance > 2000 && distance < 2500){
        var price = 25
        return price
    }
    else if (distance > 2500) {
        return "cannot travel that far"
    }
}