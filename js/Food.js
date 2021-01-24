class Food{
    constructor() {
        this.foodStock = 15;
        this.lastFeed;
        this.image = loadImage("Images/Milk.png");
    }
    updateFoodStock(foodStock) {
        this.foodStock = foodStock;
    }
    getFedTime(lastFed) {
        this.lastFed = lastFed;
    }
    deductFood() {
        if(this.foodStock > 0){
            this.foodStock -= 1
        }
        return this.foodStock;
    }
    getFoodStock() {
        return this.foodStock;
    }
    display() {
        var x = 80,y = 100;

        imageMode(CENTER);
        image(this.image,80,200,100,100);

        if(this.foodStock != 0) {
            for(var i = 0; i<this.foodStock;i++){
                if(i%10 === 0) {
                    x = 80;
                    y=y+100;
                }
                image(this.image,x,y,100,100);
                x = x + 50;
            }
        }
    }
}