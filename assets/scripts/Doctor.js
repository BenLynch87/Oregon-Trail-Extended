class Doctor extends Traveler {
    constructor(name, food, isHealthy, hunt, eat){
        super(name, food, isHealthy, hunt, eat)
    }

    heal(traveler){
        traveler.isHealthy = true
    }
}