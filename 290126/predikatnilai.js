let grade = 50;

if (grade >= 40){
    console.log(`${grade}, F`)
}else if (grade >= 60){
    console.log(`${grade}, C`)
}else if (grade >= 75){
    console.log(`${grade}, B`)
}else if (grade >= 85 && grade <= 100){
    console.log(`${grade}, A`)
}else{
    console.log("not defined")
}