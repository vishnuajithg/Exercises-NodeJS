const { random } = require("lodash")


// let input = 'rocks'
// const options = ['rocks','papers','scissors']
// console.log(input)
// console.log(o = options[random(0,2)])
// if (input == 'rocks'&& o == 'scissors'){
//     console.log('User wins')
// }
// else if (input == 'rocks'&& o == 'papers'){
//     console.log('Computer wins')
// }
// else if (input == 'rocks'&& o == 'rocks'){
//     console.log('Draw')
// }
// else if (input == 'papers'&& o == 'papers'){
//     console.log('Draw')
// }
// else if (input == 'papers'&& o == 'rocks'){
//     console.log('User wins')
// }
// else if (input == 'papers'&& o == 'scissors'){
//     console.log('Computer wins')
// }
// else if (input == 'scissors'&& o == 'papers'){
//     console.log('User wins')
// }
// else if (input == 'scissors'&& o == 'rocks'){
//     console.log('Computer wins')
// }
// else if (input == 'scissors'&& o == 'papers'){
//     console.log('User wins')
// }
// else{
//     console.log('Invalid')
// }

let input = 'rocks'
const options = ['rocks','papers','scissors','snake','water']
console.log(input)
console.log(o = options[random(0,2)])
if (input == 'rocks'&& o == 'scissors'){
    console.log('User wins')
}
else if (input == 'rocks'&& o == 'papers'){
    console.log('Computer wins')
}
else if (input == 'rocks'&& o == 'rocks'){
    console.log('Draw')
}
else if (input == 'rocks'&& o == 'water'){
    console.log('Computer Wins')
}
else if (input == 'rocks'&& o == 'snake'){
    console.log('User Wins')
}
else if (input == 'papers'&& o == 'papers'){
    console.log('Draw')
}
else if (input == 'papers'&& o == 'rocks'){
    console.log('User wins')
}
else if (input == 'papers'&& o == 'scissors'){
    console.log('Computer wins')
}
else if (input == 'papers'&& o == 'water'){
    console.log('Computer wins')
}
else if (input == 'papers'&& o == 'snake'){
    console.log('Computer wins') 
}
else if (input == 'scissors'&& o == 'papers'){
    console.log('User wins')
}
else if (input == 'scissors'&& o == 'rocks'){
    console.log('Computer wins')
}
else if (input == 'scissors'&& o == 'papers'){
    console.log('User wins')
}
else if (input == 'scissors'&& o == 'water'){
    console.log('Computer wins') //validate
}
else if (input == 'scissors'&& o == 'snake'){
    console.log('User wins') //validate
}
else{
    console.log('Invalid')
}