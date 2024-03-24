// function findFirstOdd(numbers) {
//   let num;
//   numbers.forEach((x) => {
//     if (x % 2 !== 0 && typeof num === "undefined") {
//       num = x;
//     }
//   });
//   return num;
// }

// function findFirstOdd(numbers) {
//   for (let i = 0; i < numbers.length; i++) {
//       if (numbers[i] % 2 !== 0) {
//           return numbers[i];
//       }
//   }
//   return undefined;
// }

// function lastOdd(numbers) {
//   let num;
//   numbers.forEach((x) => {
//     if (x % 2 !== 0) {
//       num = x;
//     }
//   });
//   return num;
// }
// console.log(Odd([2, 4, 6, 7, 9, 11]));

///////////////////////////////////////////////////////////////////

// function retrievePassword(user) {
//   if('password' in user) {
//       return user.password
//   }
//   else undefined
//   }
//   console.log(retrievePassword({ name: 'Lucy', password: 'n0rthc0derzzz' }))

///////////////////////////////////////////////////////////////////

// function retrieveKey(object, key) {
//     if (key in object) {
//       return object[key];
//   } else {
//       return undefined;
//   }
//   }
// console.log(retrieveKey({ name: 'Sam' }, 'name'))

///////////////////////////////////////////////////////////////////

// function findEvenLengthStrings(items) {
//     const here = []
//     items.forEach(x =>{
//         if (typeof x === 'string' && x.length % 2 === 0 ){
// here.push(x)
//         }
//     })
//     return here
//     }
//     console.log(findEvenLengthStrings(['hi', 'bye']))

///////////////////////////////////////////////////////////////////

// function isThisAPalindrome(str) {
//   const array = str.split("");
//   const reverse = array.reverse();
//   const reverseString = reverse.join("");
//   if (str === reverseString) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(isThisAPalindrome('yay'))

///////////////////////////////////////////////////////////////////

// function findBiggestAndSmallest(numbers) {
//   if (numbers.length === 0) {
//     return {};
//   }
//   let biggest = numbers[0];
//   let smallest = numbers[0];
//   numbers.forEach(x => {
//     if (x > biggest) {
//       biggest = x;
//     }
//     if (x < smallest) {
//       smallest = x;
//     }
//   });
//   return { biggest, smallest };
// }
// console.log(findBiggestAndSmallest([1, 2, 99, 100]))

///////////////////////////////////////////////////////////////////

// function checkIsPrime(num) {
//   if (num <= 1) {
//     return false;
//   }
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(checkIsPrime(2))

///////////////////////////////////////////////////////////////////

// function greetGuest(name) {
//   const a = name.charAt(0).toUpperCase() + name.slice(1);
//   return `Hello ${a}!`;
// }

// function greetGuest(name) {
//   const a = name.split('')
//   a[0] =  'f'.toUpperCase()
//   const b = a.join('')
//   return `Hello ${b}!`;
// }
// console.log(greetGuest("douglas"));

///////////////////////////////////////////////////////////////////

// function findTicketPrices(emailString) {
//     let hasNumber = false
//     emailString.split(' ').forEach(x => {
//        if(!isNaN(Number(x))) {
//        hasNumber = true
//        }
//     })
//        return hasNumber
//     }
// console.log(findTicketPrices("Hello, I think I can pay 11 pounds, is that alright?"))

///////////////////////////////////////////////////////////////////

// function makeGuestList(person) {
//     const newName = person.name.split(' ')
//     delete person.name;
//     person.firstName = newName[0];
//     person.lastName = newName[1];
//     return  person
//   }
// console.log(makeGuestList({ name: "Hannah Fry", age: 46 }))

///////////////////////////////////////////////////////////////////

// function trackAttendees(person, ticketCost) {
//     person.paidForTicket = Number(ticketCost)
//     return person
//     }
// console.log(trackAttendees({ firstName: "Veronica", lastName: "Green", age: 46 }, '25'))

///////////////////////////////////////////////////////////////////

// function isPartyViable(guests) {
//     if (guests.length < 5) {
//       return false;
//     }
//       let totalPrice = 0
//     guests.forEach(x => {
//       totalPrice += x.paidForTicket
//     })
//     if (totalPrice < 100 && guests.length > 5) {
//         return false;
//    }
//     return true
//   }
//   const guests = [
//     { name: "diya", paidForTicket: 15 },
//     { name: "amul", paidForTicket: 2 },
//     { name: "saleh", paidForTicket: 2 },
//     { name: "philippa", paidForTicket: 30 },
//     { name: "kev", paidForTicket: 60 },
//     { name: "sarah", paidForTicket: 11 },
//   ]
//   console.log(isPartyViable(guests))

///////////////////////////////////////////////////////////////////

// function orderSupplies(supplies, guests) {
//     const food = Object.values(supplies)
// let total = 0
// food.forEach( i => {
//     total += i
// })
// return total * guests
//     }
//     console.log(orderSupplies({ cake: 2, iceCream: 7 }, 2))

// function orderSupplies(supplies, guests) {
//   let totalCost = 0;
//   for (let x in supplies) {
//       totalCost += supplies[x] * guests;
//   }
//   return totalCost;
// }
// console.log(orderSupplies({ cake: 2, iceCream: 7 }, 2))

///////////////////////////////////////////////////////////////////

// function calculateTables(guests, seats) {
//     const tables = Math.floor(guests / seats);
//     const remainingGuests = guests % seats;
//     return {
//         tables: tables,
//         remainingGuests: remainingGuests
//     };
//     }
//     console.log(calculateTables(14, 6))
// should return { tables: 2 , remainingGuests: 2 }

// function calculateTables(guests, seats) {
//   let tables = 0;
//   let remainingGuests = 0;
//   let maxGuest = 0;
//   for (let i = 1; maxGuest <= guests; i++) {
//     maxGuest = seats * i;
//     tables = i;
//   }
//   if (maxGuest > guests) {
//     tables = tables - 1;
//     remainingGuests = guests - tables * seats;
//   }
//   return { tables: tables, remainingGuests: remainingGuests };
// }
// console.log(calculateTables(100, 6));

///////////////////////////////////////////////////////////////////

// function calculateTaxiFare(seconds) {
//     const minutes = Math.ceil(seconds / 60);
//    const baseRate = 500;
//    const CostPerMinute = 70;
//    const totalCost = baseRate + Math.max(0, minutes - 3) * CostPerMinute;
//    return totalCost;
// }
// console.log(calculateTaxiFare(150))
// should return 500
// console.log(calculateTaxiFare(360))
// should return 710

// function calculateTaxiFare(seconds) {
//   const minutes = Math.ceil(seconds / 60);
//   const baseRate = 500;
//   const CostPerMinute = 70;
//   let costMoreThan3Mins = 0; // Math.max(0, minutes - 3) * CostPerMinute;
//   const moreThan3Mins = minutes - 3;
//   if (moreThan3Mins > 0) {
//     costMoreThan3Mins = moreThan3Mins * CostPerMinute;
//   }
//   const totalCost = baseRate + costMoreThan3Mins;
//   return totalCost;
// }
// console.log(calculateTaxiFare(140));

///////////////////////////////////////////////////////////////////

// function pickWinners(numbers) {
//   const result = [];
//   numbers.forEach((value, index) => {
//     if (value % 2 === 1 && index % 2 === 1) {
//       const seat = { seat: index, ticketCost: value };
//       result.push(seat);
//     }
//   });
//   return result;
// }
// console.log(pickWinners([6, 7, 12, 49]))
// should return [{seat: 1, ticketCost: 7}, {seat: 3, ticketCost: 49}]

// function pickWinners(numbers) {
//     const winners = []
//     for (let index = 1; index < numbers.length; index+=2) {
//     if (numbers[index] % 2 === 1 ) {
//         const seat = { seat: index, ticketCost: numbers[index] };
//         winners.push(seat)
//     }
//     }
//     return winners
// }
//  console.log(pickWinners([6, 7, 12, 49]));
///////////////////////////////////////////////////////////////////

// function gatherFeedback(feedbackArray) {
//   const result = { positive: 0, negative: 0, neutral: 0 };
//   feedbackArray.forEach((value) => {
//     if (value[1] >= 7 && value[1] <= 10) {
//       result.positive++;
//     } else if (value[1] >= 4 && value[1] <= 6) {
//       result.neutral++;
//     } else if (value[1] >= 0 && value[1] <= 3) {
//       result.negative++;
//     }
//   });
//   return result;
// }
// console.log(
//   gatherFeedback([
//     ["maddie", 10],
//     ["jatinder", 3],
//     ["rose", 6],
//   ])
// );
// returns {positive: 1, negative: 1, neutral:1}

// function gatherFeedback(feedbackArray) {
//     let feedBack = { positive: 0, negative: 0, neutral: 0 };
//     feedbackArray.forEach(([name, value]) => {
//         if (value <= 10 && value >= 7) {
//           feedBack.positive++;
//         } else if (value <= 6 && value >= 4) {
//           feedBack.neutral++;
//         } else if (value <= 3 && value >= 0) {
//           feedBack.negative++;
//         }
//     });
//     return feedBack
// }
// console.log(
//   gatherFeedback([
//     ["maddie", 9],
//     ["jatinder", 6],
//     ["rose", 6],
//   ])
// )

///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////

// function checkForEnoughBeds(beds, numOfPeople) {
//   if(beds.doubles * 2 + beds.singles >= numOfPeople) {
//       return true
//   }
//   else {
//     return false}
//   }
//   console.log(checkForEnoughBeds({ doubles: 0, singles: 6 }, 7))

///////////////////////////////////////////////////////////////////

// function makeAltArray(array) {
//     if (array.length <= 1) {
//         return array;
//     }
//     const result = [];
//     array.forEach((element, index) => {
//         if (index % 2 === 0) {
//             result.push(element);
//         }
//     });
//     return result;
// }

// // function makeAltArray (array) {
// //     if (array.length <= 1) {
// //         return array
// //     }
// //     const result = []
// //     for (let i = 0; i < array.length; i += 2) {
// //         result.push(array[i])
// //     }
// //     return result
// // }
// console.log(makeAltArray(['a', 'b', 'c', 'd', 1]))

///////////////////////////////////////////////////////////////////

// function addSoundToPets(pets) {
//     pets.forEach(pet => {
//       if (pet.type === 'dog') {
//         pet.sound = 'woof!'
//       }
//       if(pet.type === 'cat') {
//         pet.sound = 'meow!'
//       }
//     })
//       return pets
//     }

// function addSoundToPets(pets) {
//     for (let i = 0; i < pets.length; i++) {
//      const pet = pets[i];
//             if (pet.type === 'dog') {
//           pet.sound = 'woof!';
//             }
//             if (pet.type === 'cat') {
//           pet.sound = 'meow!';
//             }
//         }

//         return pets;
//     }
// console.log(addSoundToPets([
//   { name: 'Bolin', type: 'cat' },
//   { name: 'Lily', type: 'dog' },
// ]))

///////////////////////////////////////////////////////////////////

// function countCapitals(str) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//       if (str[i] >= 'A' && str[i] <= 'Z') {
//         count++
//       }
//     }
//     return count;
//   }
// console.log(countCapitals("Hello World! How Are You?"));

// function countCapitals(str) {
//   let count = 0;
//   str.split("").forEach((x) => {
//     if (x >= "A" && x <= "Z") {
//       count++;
//     }
//   });
//   return count;
// }

///////////////////////////////////////////////////////////////////

// function findKnifeAndFork (utensils) {
//   const found = {knife: 0, fork: 0}
//   utensils.forEach(item => {
//     if (item.toLowerCase() === 'knife') {
//       found.knife++
//     }
//     if (item.toLowerCase() === 'fork') {
//       found.fork++
//     }
//   });
//   return found
// }

// function findKnifeAndFork(utensils) {
//   const found = { knife: 0, fork: 0 };
//   for (let i = 0; i < utensils.length; i++) {
//     const item = utensils[i].toLowerCase();
//     if (item === "knife") {
//       found.knife++;
//     }
//     if (item === "fork") {
//       found.fork++;
//     }
//   }
//   return found;
// }
// console.log(findKnifeAndFork(["Knife", "fork", "spoon", "fOrk", "knife"]));

///////////////////////////////////////////////////////////////////

// function truncateString(str, value) {
//     if (str.length > value) {
//       return str.slice(0, value) + '...';
//     }
//     return str;
//   }
//   console.log(truncateString("Hello World", 4))

///////////////////////////////////////////////////////////////////

// function oldestPerson(people) {
//   let oldestPerson = people[0];
//   for (let i = 0; i < people.length; i++) {
//     if (people[i].age > oldestPerson.age) {
//       oldestPerson = people[i];
//     }
//   }
//   return oldestPerson;
// }

// function oldestPerson(people) {
//     let oldestPerson = people[0];
//     people.forEach(person => {
//       if (person.age > oldestPerson.age) {
//         oldestPerson = person;
//       }
//     });
//     return oldestPerson;
//   }
// console.log(
//   oldestPerson([
//     { name: "Alice", age: 30 },
//     { name: "Bob", age: 45 },
//     { name: "Charlie", age: 55 },
//   ])
// )

// function oldestPerson(people) {
//   let oldestAge = people[0].age;
//   let oldestName = people[0].name;
//   for (let i = 1; i < people.length; i++) {
//     if (people[i].age > oldestAge) {
//       oldestAge = people[i].age;
//       oldestName = people[i].name;
//     }
//   }
//   return oldestName;
// }

// function oldestPerson(people) {
//   let person = people[0];
//   people.forEach((p) => {
//     if (p.age > person.age) {
//       person = p;
//     }
//   });
//   return person.name;
// }
// console.log(
//   oldestPerson([
//     { name: "Alice", age: 30 },
//     { name: "Bob", age: 45 },
//     { name: "Charlie", age: 5 },
//   ])
// );

// function oldestPerson(people) {
//   const is = Math.max(...people.map((x) => x.age));
//   return is;
// }
// console.log(
//   oldestPerson([
//     { name: "Alice", age: 30 },
//     { name: "Bob", age: 45 },
//     { name: "Charlie", age: 5 },
//   ])
// );

///////////////////////////////////////////////////////////////////

// function orderSupplies(supplies, numGuests) {
//   const values = Object.values(supplies);
//   let total =0;
//   values.forEach(i => {
//     total += i
//   })
//   return total * numGuests;
// }
// console.log(orderSupplies({ plates: 2, cups: 1, forks: 1, partyHats: 4 }, 20));

///////////////////////////////////////////////////////////////////

// export function find(items) {
//   const here = []
//   items.forEach(x => {
//     if (x.length % 2 === 0 && typeof x === 'string') {
//       here.push(x)
//     }
//     if (x % 2 === 0) {
//       here.push(x)
//     }
//   })
//   return here
// }
// console.log(find(['keepOnlyMe', 'notMe', 4, 5, 6, 'hell']))

///////////////////////////////////////////////////////////////////

// function isThisAPalindrome(str) {
//   const step1 = str.toLowerCase()
//   const step2 = step1.split('');
//     const step3 = step2.reverse();
// const final = step3.join('');
//     if(step1 === final) {
//         return true;
//     }
//     else {
//         return false;
//     }
//     }
// console.log(isThisAPalindrome('aca aCa'))

///////////////////////////////////////////////////////////////////

// function bigNsmall(numbers) {
//   if (numbers.length === 0) {
//     return {}
//   }
//   let big = numbers[0];
//   let small = numbers[0];
//   numbers.forEach(x => {
//     if (numbers[x] > big) {
//       big = numbers[x]
//     }
//     if (numbers[x] < small) {
//       small = numbers[x]
//     }
//   })
//   return { big, small };
// }
// console.log(bigNsmall([2, 3, 4, 5, 6]))

///////////////////////////////////////////////////////////////////

// function has(array) {
//   let found = false;
//   array.forEach(number => {
//       if (number < 10) {
//           found = true;
//       }
//   });
//   return found;
// }
// console.log(has([1, 12, 14, 15]))

///////////////////////////////////////////////////////////////////

// function makeArray(arr) {
//   const numb = []
//   arr.forEach(x => {
//     x.forEach((y) => {
//       if (typeof y === "number") {
//         numb.push(y);
//       }
//     });
//   })
//   return numb
// }
// console.log(makeArray([[1, 'a', 2 ,'u'], [5, 't', 9]]))

// function makeArray(arr) {
//   let numb = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let a = 0; a < arr[i].length; a++) {
//       if (typeof arr[i][a] === "number") {
//         numb.push(arr[i][a]);
//       }
//     }
//   }
//   return numb;
// }
// console.log(
//   makeArray([[9, 4, "g"],["y", 8],["y", 8]]));

///////////////////////////////////////////////////////////////////

// function findItems(array1, array2) {
//   const result = []; //

//   array1.forEach((value) => { // f, 1
//     // check if array2 has value from array1
//     const array2HasTheValue = array2.includes(value);
//     // if array 2 dont have value from array 1 stops.
//     if (!array2HasTheValue) return;
//     // check if result has the same value from array1
//     const valueExistInResult = result.includes(value);
//     //if result has same value from array1, then stop
//     if (valueExistInResult) return;
//     result.push(value);
//   });
//   return result;
// }
// console.log(findItems(['f', 1, "g", "g", 'g', "p", 9, "t"], [1, 2, "g", 'g', 2, 6, 9]));

// function findItems(array1, array2) {
//   // Items found on array2
//   const itemsFound = [];
//   // For each item in array1
//   array1.forEach((item) => {
//     // check if array2 has item
//     const hasItem = array2.includes(item);
//     // check if item has already found before. This is to make sure itemsFound dont have duplicates.
//     const alreadyFound = itemsFound.includes(item);
//     // if hasItem is true and alreadyFound is false then add the item into itemsFound.
//     if (hasItem && !alreadyFound)
//     itemsFound.push(item);
//   });
//   // return all items that found.
//   return itemsFound;
// }
// console.log(findItems(['f', 1, "g", "g", 'g', "p", 9, "t"], [1, 2, "g", 'g', 2, 6, 9]));

// function findItems(array1, array2) {
//   const uniqueItems = {};
//   array1.forEach((item) => {
//     uniqueItems[item] = true;
//   });
//   const sameItems = [];
//   array2.forEach((item2) => {
//     if (uniqueItems[item2]) {
//       sameItems.push(item2);
//       uniqueItems[item2] = false;
//     }
//   });
//   return sameItems;
// }
// console.log(findItems(["a", "b"], ['c', 'a', "a"]));

///////////////////////////////////////////////////////////////////

// function roundUp(n, x) {
//   if (x === 0) {
//     return -1
//   }
//   if (x > n) {
//     return x
//   }
//   for (let index = 0; index < n; index++) {
//     if (x * index >= n) {
//       return x * index
//     }
//   }
// }
// console.log(roundUp(21, 5))

///////////////////////////////////////////////////////////////////

// function countShouts(string) {
//   let count = 0;
//   string.forEach((x) => {
//     if (x.includes("!")) {
//       count++;
//     }
//   });
//   return count;
// }
// console.log(countShouts(["hello!", "apple!", "salt"]));

// const potato = {
//   fresh: true,
//   countShouts: (string) => {
//     let count = 0;
//     string.forEach((x) => {
//       if (x.includes("!")) {
//         count++;
//       }
//     });
//     return count;
//   }
// };

// console.log(potato.countShouts(["hello!", "apple!", "salt"]));

const potato = {
  fresh: true,
  countShouts: (string) => {
    let count = 0;
    string.forEach((x) => {
      if (x.includes("!")) {
        count++;
      }
    });

    console.log(count);
  },
};

potato.countShouts(["hello!", "apple!", "salt"]);
