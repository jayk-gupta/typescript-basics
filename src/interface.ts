// const User = {
//   firstName: "jay",
//   lastName: "gupta",
//   email: "jay.gupta@gmail.com",
//   age: 22,
// };

// Interface: group of properties
interface User {
  firstName: string;
    lastName: string;
    //  ? is for optinal agrument
  email?: string;
  age: number;
}

function greetMsg(user: User) {
  console.log(`Hey there, ${user.firstName}`);
}

isLegal({
  firstName: "jay",
    lastName: "gupta",
  age:23
});

function isLegal(user: User) {
  if (user.age > 18) return true;
  else return false;
}

greetMsg({
  firstName: "jay",
  lastName: "gupta",
  age: 22,
});
