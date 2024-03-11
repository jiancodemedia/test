// function orderSupplies(supplies, numGuests) {
//   let totalCost = 0;
//   for (let x in supplies) {
//       totalCost += supplies[x] * numGuests;
//   }
//   return totalCost;
// }

// console.log(orderSupplies({ cake: 2, iceCream: 7 }, 2));

// console.log(orderSupplies({ plates: 2, cups: 1, forks: 1, partyHats: 4 }, 20));


/*function orderSupplies(supplies, numGuests) {
  const values = Object.values(supplies);
  let total =0;
  values.forEach((i) => {
    total += i
  })

  return total * cost;
}

console.log(orderSupplies({ cake: 2, iceCream: 7 }, 2));

console.log(orderSupplies({ plates: 2, cups: 1, forks: 1, partyHats: 4 }, 20));*/


/*function checkForEnoughBeds(beds, numOfPeople) {
  if(beds.doubles * 2 + beds.singles >= numOfPeople) {
      return true
  }
  else {
    return false}
  }

  console.log(checkForEnoughBeds({ doubles: 0, singles: 6 }, 7))*/

// const artist = ['Picassi', 'Kahlo', 'Matisse', 'Utamaro']

// artist.forEach( a => {
//   console.log( a + ' is one of my favorite artists.' )
// })

// const a = []
//   for(let i = 0; i < 5; i++) {
//  a.push(i)
//     console.log(a)
// }





// const alphabets = ["a", "b", "b", "d", "d", "d"];
// const result = alphabets.filter(a => a == "d" || a == "a")

// console.log(result)


// const character = {
//   name: "cat",
//   level: 4,
//   canWalk: true,

// }
// character.head = "big"

// console.log(character)

// function odd(numbers) {
//   const oddNumber = [];
//   numbers.forEach(x => {
//       if (x % 2 !== 0) {
//           oddNumber.push(x);
//       }
//   });
//   return oddNumber;
// }
// console.log(odd([1, 2, 3, 4, 5, 6, 7, 9]));


// function findFirstOdd(numbers) {
//   for (let i = 0; i < numbers.length; i++) {
//       if (numbers[i] % 2 !== 0) {
//           return numbers[i];
//       }
//   }
//   return undefined; 
// }

// console.log(findFirstOdd([2, 4, 6, 8, 9, 10])); 

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