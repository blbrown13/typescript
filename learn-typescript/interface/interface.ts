interface Stark {
    name: string;
    age? : number;
}

function printName(stark : Stark) {
    console.log(stark.name);
}

printName({name:"Eddard"});

// printName({label:"Joe"});
// interface.ts(10,12): error TS2345: Argument of type '{ label: string; }' is not assignable to parameter of type 'Stark'.
// Object literal may only specify known properties, and 'label' does not exist in type 'Stark'.