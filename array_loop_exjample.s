const names = [
    {
        firstname: "Naresh",
        lastname: "Cherukuri",
        age: 30
    },
    {
        firstname: "Rakesh",
        lastname: "Narvaneni",
        age: 29
    },
    {
        firstname: "Ashitha",
        lastname: "Narvanenni",
        age: 27
    },
    {
        firstname: "Niharika",
        lastname: "Manne",
        age: 25
    }
    ,
    {
        firstname: "Srinivasa Rao",
        lastname: "Narvanenni",
        age: 55
    }
]
for (let i = 0; i < names.length; i++) {
    if(names[i].age<30){
    const nameSpell = `${names[i].firstname} ${names[i].lastname} age is ${names[i].age}`
    console.log(nameSpell)
}
}


