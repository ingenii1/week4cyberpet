import inquirer from "inquirer"
import { initQuestions, gameQuestions } from "./questions.js"
import { tRex, unicorn, bigfoot } from "./classes.js"

let myPet
let ui = new inquirer.ui.BottomBar()

const init = async()=>{

    let response=await inquirer.prompt(initQuestions)

    if (response.type=== "T-Rex"){
        myPet= new tRex(response.name)
        gameLoop()
    } else if (response.type==="Unicorn"){
        myPet=new unicorn (response.name)
        gameLoop()
    } else{
        myPet= new bigfoot(response.name)
        bigfootGameLoop()
         gameLoop()
    }

    ui.log.write(
        `${myPet.name}| Hunger:${myPet.hunger} | Thirst:${myPet.thirst}| Energy:${myPet.energy}`
    )
    gameLoop()
}
const gameLoop=async()=>{
    try{
        if (myPet.health>= 150){
            console.log("Game Over")
            return
        }
        myPet.time()
        let response= await inquirer.prompt(gameQuestions)
        if (response.action==="drink"){
            myPet.drink()
        } else if(response.action==="feed"){
            myPet.feed()
        } else if(response.action==="sleep"){
            myPet.sleep()
        }

        ui.log.write(
            `${myPet.name}| Hunger:${myPet.hunger} | Thirst: ${myPet.thirst} | Energy: ${myPet.energy}`
        )
        gameLoop()
    } catch(error){
        console.log(error)
    }
}


init()


