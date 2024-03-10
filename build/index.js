"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var readline_1 = __importDefault(require("readline"));
var blah_js_1 = require("./blah.js");
var reader = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout,
});
var askQuestion = function (question, callback) {
    reader.question(question, callback);
};
var pokedex = {
    chamander: {
        name: "chamander",
        level: 5,
    },
    chamaleon: {
        name: "chamaleon",
        level: 10,
    },
    chalizard: {
        name: "chalizard",
        level: 10,
    },
    pichu: {
        name: "pichu",
        level: 3,
    },
    pikachu: {
        name: "pikachu",
        level: 13,
    },
    raychu: {
        name: "raychu",
        level: 18,
    },
};
var options = "\nSelect an option:\n  0. Show pokedex\n  1. Find Pokemon with key.\n  2. Find all Pokemon with name.\n  3. Find Pokemon with level\n  4. Delete a pokemon\n  5. Add a pokemon\n";
function main() {
    askQuestion(options, function (option) {
        switch (option) {
            case '0':
                console.log(pokedex);
                main();
                break;
            case "1":
                askQuestion("Please enter Pokemon key: ", function (key) {
                    var pokemon = findPokemon(key);
                    if (!pokemon) {
                        console.log("".concat(key, " doesnt exist in this pokedex"));
                    }
                    else {
                        console.log(pokemon);
                    }
                    main();
                });
                break;
            case "2":
                askQuestion("Please enter Pokemon name: ", function (name) {
                    console.log(findName(name));
                    main();
                });
                break;
            case "3":
                askQuestion("Please enter Pokemon level: ", function (level) {
                    console.log(findAllLevel(Number(level)));
                    main();
                });
                break;
            case "4":
                askQuestion("Delete which Pokemon: ", function (key) {
                    deletePokemon(key);
                    console.log(pokedex);
                    main();
                });
                break;
            case "5":
                askQuestion("Add Pokemon key: ", function (key) {
                    askQuestion("Add Pokemon name: ", function (name) {
                        askQuestion("Add Pokemon level: ", function (level) {
                            addPokemon(key, name, level);
                            console.log(pokedex);
                            main();
                        });
                    });
                });
                // askQuestion("Add Pokemon: ", (pokemon) => {
                //   const [key, name, level] = pokemon.split(" ");
                //   addPokemon(key, name, Number(level));
                //   console.log(pokedex);
                //   main();
                // });
                break;
            default:
                main();
                break;
        }
    });
}
main();
function addPokemon(key, name, level) {
    var newpokemon = {
        name: name,
        level: level,
    };
    pokedex[key] = newpokemon;
}
// addPokemon("eve", "eve", 11);
// addPokemon("pigeon", "pigeon", 13);
function deletePokemon(key) {
    delete pokedex[key];
}
// deletePokemon('pikachu')
// console.log(pokedex)
function findPokemon(key) {
    var pokemon = pokedex[key];
    return pokemon;
}
function findName(name) {
    var pokemons = Object.values(pokedex);
    return pokemons.filter(function (pokemon) {
        return pokemon.name === name;
    });
}
// function findLevel(level) {
//   const pokemons = Object.values(pokedex);
//   let foundLevel;
//   pokemons.forEach((pokeLevel) => {
//     if (pokeLevel.level === level) {
//       foundLevel = pokeLevel;
//     }
//   });
//   return foundLevel;
// }
function findAllLevel(level) {
    var pokemons = Object.values(pokedex);
    var foundLevel = [];
    pokemons.forEach(function (pokeLevel) {
        if (pokeLevel.level === level) {
            foundLevel.push(pokeLevel);
        }
    });
    return foundLevel;
}
// function findName(name) {
//   const pokemons = Object.values(pokedex);
//   let foundPokemon = [];
//   pokemons.forEach((pokemon) => {
//     if (pokemon.name === name) {
//       foundPokemon = pokemon;
//     }
//   });
//   return foundPokemon;
// }
// console.log(findName("chamander"));
// function findName(name) {
//   const pokemons = Object.values(pokedex);
//   let foundPokemon = [];
//   pokemons.forEach((pokemon) => {
//     if (pokemon.name === name) {
//       foundPokemon.push(pokemon);
//     }
//   });
//   return foundPokemon;
// }
// console.log(findName("chamander"));
//   console.log(findLevel(13))
// console.log(findLevel(10));
// function renamePokemon(key, name) {
//  pokedex[key][name] = name;
//  pokedex.pikachu.pika = 'pika'
//   pokedex[key].name= name;
//   pokedex.pikachu.name = name;
// }
// renamePokemon('pikachu', 'pika')
// console.log(pokedex)
// function addColour(key, colour) {
//   pokedex[key].colour = colour;
// }
// addColour("pikachu", "yellow");
// console.log(pokedex);
// function changeLevel(key, level) {
//   pokedex[key].level = level
// }
//  changeLevel('raychu', 30)
function findBiggestAndSmallest(numbers) {
    if (numbers.length === 0) {
        return {};
    }
    var biggest = numbers[0];
    var smallest = numbers[0];
    numbers.forEach(function (x) {
        if (numbers[x] > biggest) {
            biggest = numbers[x];
        }
        if (numbers[x] < smallest) {
            smallest = numbers[x];
        }
    });
    return { biggest: biggest, smallest: smallest };
}
console.log(findBiggestAndSmallest(2, 3, 4, 5, 6));
