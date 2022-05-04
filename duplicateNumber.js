
var duplicateNumber = function(numbers) {
    var freq = {};
    for (var i = 0; i < numbers.length; i++) {
        if (!freq[numbers[i]] || freq[numbers[i]] == 0) {
            freq[numbers[i]] = 1;
            continue;
        }
        freq[numbers[i]]++;
    }
    result = []
    for (const obj in freq){
        if (freq[obj] > 1) {
            result.push(obj);
        }
    }

    console.log(result)
}

duplicateNumber([1,1,2])