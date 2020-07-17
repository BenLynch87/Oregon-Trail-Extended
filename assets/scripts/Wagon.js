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
        return this.passengers.some(passenger => passenger.isHealthy !== true)
    }

    totalFood(){
         return this.passengers.reduce((acc, passenger) => acc + passenger.food, 0)
    }
}