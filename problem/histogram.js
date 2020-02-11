arr = [1,30,31,71,21,40,23,45];
arr.sort();
size = 10;
histogram(arr,size);
function histogram(arr,size){
    var len = arr.length;
    var newArr = [];
    var compare = [1,10,11,20,21,30,31,40,41,50,51,60,61,70,71];
    var check = false;
    var temp2 = size;
    var temp1 = 1;
    var size1 = size;
    for(var i=2; i<size; i++){
        temp1 = (size*i)-size+1;
        temp2 = size*i;
        size = size+i*10;
        compare.push(temp1,temp2)
    }
    for(var i=0; i<compare.length; i=i+2){
        var cnt = 0;
        for(var j=arr[i]; j<=arr[i+1]; j++){
            for(var k=0; k<len; k++){
                if(j===arr[k]){
                    cnt++;
                }
            }
        }
        newArr.push(cnt)
    }
    console.log(newArr.join(" "))
    console.log(compare)
}
