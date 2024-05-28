"use strict";
// const User = {
//   firstName: "jay",
//   lastName: "gupta",
//   email: "jay.gupta@gmail.com",
//   age: 22,
// };
function greetMsg(user) {
    console.log(`Hey there, ${user.firstName}`);
}
isLegal({
    firstName: "jay",
    lastName: "gupta",
    age: 22,
});
function isLegal(user) {
    if (user.age > 18)
        return true;
    else
        return false;
}
greetMsg({
    firstName: "jay",
    lastName: "gupta",
    age: 22,
});
