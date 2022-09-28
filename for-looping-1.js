const apartments = [
    {
        apartmentName: "Knollwood towers",
        address:"320 blake rd N",
        city:"hopkins",
        state:"MN"
    },
    {
        apartmentName: "Waterstone PL",
        address:9650,
        city:"Minnetonka",
        state:"MN"
    },
    {
        apartmentName: "Alaqua at frisco",
        address:9250,
        city:"Frisco",
        state:"TX"
    }
]
for (let i=0; i<apartments.length; i++){
    const alladdress=`${apartments[i].apartmentName},${apartments[i].address},${apartments[i].city},${apartments[i].state}`
    console.log(alladdress)
}
