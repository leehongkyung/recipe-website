var randomImage=new Array();

randomImage[0]="images/butterpasta.jpg";
randomImage[1]="images/enchilada.jpg";
randomImage[2]="images/friedchickenrice.jpg";
randomImage[3]="images/mangochicken.jpg";
randomImage[4]="images/pot.jpg";
randomImage[5]="images/pasta.jpg";
randomImage[6]="images/salmon.jpg";
randomImage[7]="images/sloppyjoe.webp";
randomImage[8]="images/spinach.jpg";
randomImage[9]="images/pumpkin.jpg";


var imageText=["Butternut Squash Pasta", "Chicken Enchiladas","Fried Chicken and Rice", "Mango Chicken with Vegetables", 
"Pot Roast", "Pasta with Cherry Tomato Sauce", "Oven-Baked Salmon", "Carolina Style Sloppy Joe", "Spinach Artichoke Dip", "Pumpkin Pie"];

var used = {};
var counter = 0;

function displayImage(){

    var num = Math.floor(Math.random() * (randomImage.length));
    document.getElementById('ranImage').src=randomImage[num];
    document.getElementById('text').innerHTML=imageText[num];
    
    if (!used[num]){
        used[num] = true;
        counter++;
        if (used === randomImage.length){
            counter = 0;
            used = {};
        }
    } else {
        displayImage();
    }
}


