// Binary Search in Array

let createRandomList = function createRandomList(length, holdValue) {
    let arr = [];
    while(length--) {
        let value = Math.ceil(Math.random() * (new Date()) % holdValue);
        let arrLength = arr.length;
        let hasValue = false;
        while(arrLength--) {
            if(arr[arrLength - 1] == value) {
                hasValue = true;
                break;
            }
        }
        if(hasValue) {
            length++;
            continue;
        }
        arr.push(value);
    }
    return arr.map((v)=>Number(v)).sort((a , b) => { return a >= b ? 1 : -1});
}
let list = createRandomList(10000, 20000);

let findOut = function findOut(list, value) {
   let pivot = 0;
   let bottom = 0;
   let top = list.length -1;   
   
   while(bottom <= top) {
        pivot = Math.floor((top + bottom) / 2);
        if (list[pivot] == value) {
            console.log(pivot, list[pivot], 'found it');
            break;            
        }
        else {
            if (list[pivot] > value) {
                top = pivot + 1;
            } else {            
                bottom = pivot - 1;                
                if(top - bottom <= 3){
                    console.log('there is no item in list.');
                    console.log(list.slice(bottom, top));
                    break;
                } 
            }         
        }
   }    
}
   
findOut(list, 1345);