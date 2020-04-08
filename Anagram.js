/* Given an array of strings, group anagrams together.

Example:

Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
Note:

All inputs will be in lowercase.
The order of your output does not matter. */


var groupAnagrams = function(strs) {
    let map = new Map();
    strs.forEach(function(item, index){
        let sortedStr = item.split('').sort().join();
        if(map.has(sortedStr)) {
            var values = map.get(sortedStr);
            values.push(item);
        } else {
            let res = [];
            res.push(item)
            map.set(sortedStr, res);
        }
    });
    let result = [];
    map.forEach(function(val, key) {
       result.push(val); 
    });
    return result;
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));