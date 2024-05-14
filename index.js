import inquirer from "inquirer";
let isFriend = await inquirer.prompt([
    {
        name: "Friendname",
        type: "string",
        message: "Enter your Friend name:",
    },
]);
if (isFriend.Friendname === "Ahmed" ||
    isFriend.Friendname === "Ali" ||
    isFriend.Friendname === "Saqib") {
    console.log(` ${isFriend.Friendname} is your Friend`);
}
else {
    console.log(` ${isFriend.Friendname} is not your Friend`);
}
