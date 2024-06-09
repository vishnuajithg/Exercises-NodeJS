//Word Count
const arg = process.argv

// message = 'noun. , Surveying. a trial survey line run from a station toward a predetermined point that cannot be seen from the station.'
message = arg
messageLength = message.length
nMsg = ''
// g = message.split(',','.',' ')
// console.log(messageLength)
// console.log(g)
const myMap = new Map() 

for(let i=0;i<messageLength;i++){
    // myMap.set(,0)
    if (message[i]== '.' || message[i] == ',' || message[i] == "'" || message[i] == ''){
        // let j = ','
        // console.log(message[i] = ',')
        
    }else{
        // console.log(message[i])
        nMsg+=message[i]
    }
}
// console.log(nMsg)
let words = nMsg.split(' ')
// console.log(words)
for(let i=0;i<words.length;i++){
    // console.log(i)
    let uWord = words[i]
    // console.log(uWord)
    if(words[i]){
        var count = 1
        for(let i=0;i<words.length;i++){
            if(words[i] == uWord){
                count +=1
            }
    }
    
    }
    myMap.set(words[i],count-1)
}
console.log(myMap)