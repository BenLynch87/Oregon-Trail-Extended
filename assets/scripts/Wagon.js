class Wagon{
    constructor(capacity){
        this.capacity = capacity
        this.passengers = []
    }

    getAvailableSeatCount(){
        return this.capacity - this.passengers.length
    }

    join(traveler){
        if (this.getAvailableSeatCount() > 0){this.passengers.push(traveler)}
    }

    shouldQuarantine(){
        for (const passenger of this.passengers){
            if (passenger.getHealth() === false){return true}
        }
        return false
    }

    totalFood(){
        return this.passengers.reduce(passenger => passenger.food)
    }
}