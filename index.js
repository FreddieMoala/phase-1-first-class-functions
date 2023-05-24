// function Tuesday() {
//     console.log('Go for a five-mile run');
//     console.log('Swim 40 laps');
// }

// function Wednesday() {
//     console.log("Go for a a five-mile run");
//     console.log('Go for a five-mile run');
// }

// function Thursday() {
//     console.log('Go for a five-mile run');
//     console.log('Pump some iron');
// }

// function Friday() {
//     console.log('Go for a five-mile.run');
//     console.log('Swim 40 laps');
// }

function runFiveMiles() {
    console.log('Go for a five-mile run');
}

function liftWeights() {
    console.log('Pump some iron');
}

function swimFortyLaps() {
    console.log('Swim forty-laps');

}

function monday() {
    runFiveMiles();
    liftWeights();

}


function Monday() {
    exerciseRoutine(swimFortyLaps);
}

function exerciseRoutine(postRunActivity) {
    runFiveMiles();
    postRunActivity();
}

Monday();

// exerciseRoutine(() => console.log('Stretch! Work that core!'));

// exerciseRoutine()

// function morningRoutine(exercise) {
//     let breakfast;

//     if (exercise === liftWeights) {
//         breakfast = "protein bar";
//     } else if (exercise === swimFortyLaps) {
//         breakfast = "Kale smoothie";
//     } else {
//         breakfast = "granola";
//     }

//     exerciseRoutine(exercise);

//     return function() {
//         console.log(`Nom nom nom, this ${breakfast} is delicious!`);
//     }
// }

// const afterExercise = morningRoutine(liftWeights);

// afterExercise();

function callOnMe() {
    console.log('This is me called back');
}

function receivesAFunction(hiCallBack) {
    hiCallBack();
}

function test() {
    receivesAFunction(callOnMe);
}

test();

function returnsANamedFunction() {
    return function namedFunction() {
        console.log("This is a named function");
    };

}

const myNamedFunction = returnsANamedFunction();
myNamedFunction();

function returnsAnAnonymousFunction() {
    return function() {

    };
}