const password= prompt("enter something");
if(password.length >6 && password.indexOf(" ") === -1){
    console.log("truthy");
}
else{
    console.log("false");
}