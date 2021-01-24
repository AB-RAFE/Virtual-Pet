var dog,dogImg,happyDog,foods,foodStock;
var feedFood,addFood;
var fedTime,lastFed;
var foodObj;
var database;

function preload() {
    dogImg = loadImage("Images/Dog.png");
    happyDog = loadImage("Images/happy dog.png");
}

function setup() {
    createCanvas(1100,700)

    database = firebase.database();

    foodObj = new Food();

    dog = createSprite(800,200,10,10);
    dog.addImage(dogImg);
    dog.scale = 0.15;

    feedFood = createButton("Feed The Dog");
    feedFood.position(400,650);
    feedFood.mousePressed(feedDog);

    addFood = createButton("Add food");
    addFood.position(1050,650);
    addFood.mousePressed(addFoods);
}
function draw() {
    background(0)

    fedTime = database.ref("fedTime");
    fedTime.on("value",function(data){
        lastFed = data.val();
    });

    fill(255);
    textSize(20);

    text("Tommy",dog.x-30,dog.y-60);

    if(lastFed >= 12) {
        text("Last Feed : "+lastFed % 12+"PM",350,30);
    }
    else if(lastFed === 0) {
        text("Last Feed : 12 AM",350,30);
    }
    else {
        text("Last Feed : "+lastFed+"AM",350,30)
    }

    foodObj.display();
    drawSprites();
}

function readStock() {
    foods = data.val();
    foodObj.updateFoodStock(foods);
}

function feedDog() {
    dog.addImage(happyDog);
    foodObj.updateFoodStock(foodObj.getFoodStock() - 1);
    database.ref('/').update({
        Food: foodObj.getFoodStock(),
        fedTime: hour()
    })
}

function addFoods() {
    foods++;
    database.ref('/').update({
        Food: foods
    })
}