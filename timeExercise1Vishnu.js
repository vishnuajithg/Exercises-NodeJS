let time = 1440
if (0<=time && time<=600){
    console.log("Early Morning")
}
else if (601<=time && time<=780){
    console.log("Morning")
}
else if (781<=time && time<=960){
    console.log("Noon")
}
else if (961<=time && time<=1140){
    console.log("Afternoon")
}
else if (1141<=time && time<=1320){
    console.log("Evening")
}
else if (1321<=time && time<=1439){
    console.log("Night")
}
else{
    console.log("Invalid")
}