class Traveler{
    constructor (name){
        this.name = name
        this.food = 1
        this.isHealthy = true
    }

    hunt(){
        this.food += 2
    }

    eat(){
        if (this.food > 0){ this.food--} else {this.isHealthy = false}
    }

    getHealth(){
        return this.isHealthy
    }
}