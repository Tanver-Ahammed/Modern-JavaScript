var arr = [10, 20, 30, 40]

console.log(arr)
arr = [10, 20, ["a", "b"], 30, 40]

console.log(arr)
console.log(arr[2])
console.log(arr[2][1])

arr = [1, 2, ["a", ["word1", "word2"], "b"], 7, 18]
console.log(arr)
console.log(arr[2][1][0])
console.log(arr[2][1][1])

arr = [1, 2, ["a", "b"], {name: "Tanver", age: 21, Institution: "MBSTU"}]
console.log(arr)
console.log(arr[3])
console.log(arr[3]["name"])
console.log(arr[3].Institution)

arr = ["item1", "item2", {dept: "ICT", identity: [19016, 19017 ,["Bonna", "Sheuly"]]}];
console.log(arr)
console.log(arr[2].identity[2][0])

var obj = {institution: "MBSTU", dept: "ICT", sName: ["Tanver", "Sheuly", "Tariq", "Bonna"]};
console.log(obj)
console.log(obj.sName[1])
