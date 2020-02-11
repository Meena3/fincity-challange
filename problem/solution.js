var string = "India is a great country and I will work towards making our country the better India"
var arr = string.split(" ");
var len = arr.length
var vowelArr = ['a','e','i','o','u','A','E','I','O','U'];
var ans = [];
var check = false;
var output = [];
var lastOccurance = 0;
lastOccurance = len-1;
for(var i=0; i<len; i++){
    var temp = arr[i].split("");
    var cnt = 0;
    for(var j=0; j<temp.length; j++){
        for(var k=0; k<vowelArr.length; k++){
            if(temp[j]===vowelArr[k]){
                check = true
                cnt++
            }
        }
    }
    if(check==true){
        ans.push(cnt)
    }
}
for(var i=0; i<len; i++){
    var temp = []
    temp.push(ans[i],arr[i])
    output.push(temp)
}
for(var i=0; i<output.length; i++){
    for(var j=i+1; j<output.length; j++){
        if(output[i][1]===output[j][1]){
            output.splice(j,1)
        }
    }
}
output = output.sort()
var final = []
for(var i=output.length-1; i>=0; i--){
    final.push(output[i][1])
}
console.log(final.join(" "))
console.log("Last Occurance word index is: " + lastOccurance);

// output is:
// India towards our making great country better work will the is and a I
// Last Occurance word index is: 15