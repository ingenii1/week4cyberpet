class pet{
    constructor(name){
        this.name=name
        this.hunger=100
        this.thirst=100
        this.happiness=100
        this.energy=100


    }

    sleep(){
        this.energy+=40
        this.thirst-=10
        this.hunger-=10
        this.happiness+=10
    }

    drink(){
        this.thirst+=20
        this.energy+=10
    }
    feed(){
        this.hunger+=20
        this.thirst-=5
        this.energy+=10
    }
    time(){
        this.thirst-=5
        this.hunger-=5
        this.energy-=5
        this.happiness-=5
        
    }
}

export class tRex extends pet{
    constructor(name){
        super(name)
        this.trexHunt=0
        this.trexStamina=0
    }
}
export class unicorn extends pet{
    constructor(name){
        super(name)
        this.unicornFlight=0
        this.unicornMagic=0
    }
}
export class bigfoot extends pet{
    constructor(name){
        super(name)
        this.bigfootFear=0
        this.bigfootDestroy=0
    }
}