////////////////////////////////
// Easy Going
////////////////////////////////
// for ( i = 0; i <= 20; i++) {

// console.log(i);
// }

////////////////////////////////
// Get Even
////////////////////////////////
// for(let i = 0; i<= 200; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

////////////////////////////////
// Fizz Buzz
////////////////////////////////
            // the instructor answer
// for(i = 0; i <= 100; i++ ) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("Fizz Buzz");
//     } else if (i % 3 === 0) {
//         console.log("Fizz");
//     } else if ( i % 5 === 0 ) {
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
    
// }
////////////////////////////////
// Wild Wild Life
////////////////////////////////
// const plantee = ["Plantee", "plant",  5000 , "Mordor"]
//     plantee.pop(5000)
//     plantee.push(5001)
//     console.log(Plantee)


                // instructor answer
    //             const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
    //             const sharky = ["Sharky", "shark", 20, "Left Coast"]
    //             const plantee = ["Plantee", "plant",  5000 , "Mordor"]
    //             const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
    //             const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]
                

    // plantee[2] += 1 
    // console.log(plantee[2]);
    
//  
    // don't get this part

    // const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
    // wolfy.pop("Yukon Territory")
    // wolfy.push("Gotham City")
    // console.log(wolfy);

            // instuctor answer
    // console.log(wolfy[3]);
    // wolfy[3] = "Gotham City"
    // console.log(wolfy[3]);
                // Jasons Answer
    // wolfy.splice(3, 1, "Gotham CIty")
    // console.log(wolfy);
    // const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]
    // dart.push("Hawkins")
    // console.log(dart);

    // const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
    // wolfy.sort("Wolfy")
    // wolfy.push("Gameboy")
    // console.log(wolfy);
    // not sure about this one


////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////

// for (const Donatello, Leonardo, Raphael, Michaelangeloiterator of object) {
//     toUpperCase([0])
//     console.log();
    
// }


            // Instructor Answer
// const turtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo" ]
// for (ninjaTurtle of turtles) {
//     console.log(ninjaTurtle.toUpperCase());
// }

////////////////////////////////
// Methods, Revisited
////////////////////////////////
// const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
// for (let i = 0; i < 9; i++) {
//     console.log("Titanic");
// }

// const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
// favMovies.sort()
//     console.log(favMovies); 
    // yes the list of movies was altered
    // const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
    // favMovies.pop()
    // favMovies.push('Guardians of the Galaxy')
    // console.log(favMovies);

    // const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
    //         // favMovies.shift()
    //         favMovies.unshift()
    //         console.log(favMovies);
            // jaws was shifted out from the beginning


    // const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
    // favMovies.splice(4, 1)
    // console.log(favMovies);
        // not sure

        // const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
        // favMovies.slice(3,9)
        // console.log(favMovies.slice(3, 9));
        // yes permenantly changed the array

        //  since we did pop and push for Fast and the Furious to add Guardians of the Galaxy,
        // we'll see that it replaced Fast and the Furious

        // If the array changes then we don't need to use let

////////////////////////////////
// Where is Waldo
////////////////////////////////

                // instructor
 const whereIsWaldo = [["Timmy", "Frank"],
                      "Eggbert",
                      ["Lucinda", "Jacc", "Neff", Snoop"],
                      ["Petnia", ["Baked Goods","Waldo"]]
] 

                console.log(whereIsWaldo[3]);
        
                



////////////////////////////////
//  Excited Kitten
////////////////////////////////


        // instructor 

// const catQuotes = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."]

// for (let i = 0; i < 20; i++) {
//     console.log("Love me,  pet me! HSSSSS");
//     if ( i % 2 === 0 )
//         console.log(catQuotes[Math.floor(Math.random()*3)]);
// }



////////////////////////////////
//  Find the Median
////////////////////////////////