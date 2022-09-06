// Push Front

array = [5,7,2,3]

function pushFront(arr, num) {
    newArr = [num]
    for(i = 0; i <= arr.length-1; i++){
            newArr.push(arr[i])
    }
    return newArr
    
}
console.log(pushFront(array,7))

// Pop Front 
array = [5,7,2,3]

function popFront(arr){
    var temp = arr[0]
    for (i = 0; i < arr.length ; i++){
        arr[i] = arr[i+1]
        
    }
    arr.pop([arr.length - 1])
    console.log(arr)
    console.log(temp)
    return temp
}
popFront(array)

// Insert At

function insertAt(arr, index, num){
    for(let i = 0 ; i <= index; i++){
        arr[i] = arr[i-1]
        
}

        arr[index] = num
        return arr
}
console.log(insertAt([5,4,8,6], 2, 10))