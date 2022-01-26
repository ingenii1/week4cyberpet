export let initQuestions=[

{
    type: "list",
    name:"type",
    message:"What type of pet would you like?",
    choices:["T-Rex", "Unicorn", "Bigfoot"],
},
{
    type:"input",
    name:"name",
    message:"Whats your pets name?",
}
]

export let gameQuestions=[
    {
    type: "list",
    name:"action",
    message:"What do you want to do?",
    choices:["feed", "drink", "sleep"],
    }
]

