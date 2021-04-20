var student = {name: "Tanver", age : 21, hometown: "Joypurhat"}
console.log(student)

console.log(student["name"])
console.log(student["age"])
console.log(student["hometown"])

console.log(student.name)
console.log(student.age)
console.log(student.hometown)

student["occupation"] = "Software Engineer";
console.log(student)

student.vallage = "Kaitahar";
console.log(student)

console.log(delete student.vallage)
console.log(student)

student = {};
console.log(student)


student.name = "Aminul"
student.age = 22
student.hometown = "Tangail"
console.log(student)
