const petsData = [
    {
        petName: "Stella",
        age: 7,
        weightInKilos: 24,
        breed: "Dalmation"
    },
    {
        petName: "Cody",
        age: 8,
        weightInKilos: 22,
        breed: "Corgi"
    },
    {
        petName: "Mango",
        age: 2,
        weightInKilos: 11,
        breed: "Persian"
    },
    {
        petName: "Lucy",
        age: 4,
        weightInKilos: 35,
        breed: "Ball Python"
    },
    {
        petName: "Buhmie",
        age: 1,
        weightInKilos: 28,
        breed: "Bull-dog"
    }
];

const showInfo = function(petNum, displayElement)
{
    let pet;
    if (isNaN(petNum))
    {
        alert("You did not use a valid number.");
        return (console.error("isNaN(petNum) - Value Retrieved: " + petNum));
    } else 
    {
        petNum = parseInt(petNum);
    }

    if (petNum > petsData.length)
    {
        alert("You entered a pet number out of range.");
        return (console.error(`petNum out of range. Range: ${petsData.length} petNum: ${petNum}`));
    }

    pet = petsData[petNum - 1]
    displayElement.textContent = `${pet["petName"]} the ${pet["breed"]} is ${pet["age"]} years old. ${pet["petName"]} weighs ${pet["weightInKilos"]} kilograms.`
};