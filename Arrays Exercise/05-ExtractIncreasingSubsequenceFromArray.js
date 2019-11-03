function increasingSequence(arr) {
        if (arr.length === 0) {
            return '';
        }
    
        let result = [arr[0]];
    
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] >= Math.max.apply(null, arr.slice(0, i))) {
                result.push(arr[i]);
            }
        }
    
        return result.join('\n');
    }