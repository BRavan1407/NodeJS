// export variable
module.exports.portno = 5000;

// export function
function greeting(name){
    console.log('hello, this is a function export ' + name);
};

module.exports.greet = greeting;

// export Object
let car = {
    colour : 'Red',
    year : 2024,
    name : 'BMW',

    service : function(){
        console.log('Service Completed');
    }
};
module.exports.car = car;

// anonymous object

// module.exports = {
//     course : 'MERN Stack',
//     Tutor : 'PruthviRaj',

//     today : function(){
//         const date = new Date();
//         console.log(`The course started on ${date.getDate} / ${date.getMonth} / ${date.getFullYear}`);
//     }
// };

