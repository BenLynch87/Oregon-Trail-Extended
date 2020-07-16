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
        let total = 0
        for (const passenger of this.passengers){
            total += passenger.food
        }
        return total
        //throws an uncaught type error - demand an explaination for this bullshit
        //return this.passengers.reduce(passenger => passenger.food)
    }
}