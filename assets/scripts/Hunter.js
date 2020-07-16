class Hunter extends Traveler{
    constructor(name, isHealthy){
        super(name, isHealthy)
        this.food = 2
    }

    hunt(){this.food += 5}

    eat(){
        this.food -= 2
        if (this.food <= 0) { 
            this.healthy = false
            this.food = 0
        }
    }

    giveFood(traveler, numOfFoodUnits){
        if(this.food >= numOfFoodUnits){
            this.food -= numOfFoodUnits
            traveler.food += numOfFoodUnits
        }
    }
}