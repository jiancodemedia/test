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