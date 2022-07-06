

// let users = [
//     {id:1,name:"Ritik",address:'agra'},
//     {id:2,name:"Ankur",address:'agra'},
//     {id:3,name:"AnC",address:'agra'},
// ]

// let user = users.filter(function(name){
//     if(users.at(index).name === name){
//         return (users.at(index))
//     }
// })

// function find(userId) {
// for(i=0; i<users.length; i++){
//     if(users[i].id == userId){
//         return (users[i])
//     }
// }
// }


// app.get('/users', (req,res) =>{
//     //queryparam
//     let name = req.query.name;
//     console.log(name)
//     res.send({ status: "true", data: user })
// })

// app.get('/users/:id', (req, res) => {
//     //routepram
//     let userId =req.params.id
//     res.send({ status: "true", data: find(userId) })
// })


// a.filter(even)

// function even(){
//     if(a[i]%2==0){
//         return a[i]
//     }
// }

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let res = []
let res2 = []
for (let i = 0; i < a.length; i++) {
    if (a[i] % 2 === 0) { res.push(a[i]) }

}

a.forEach(function (val) {
    if (val % 2 === 0) {
        res2.push(val)
    }
})

let res3 = a.filter(function (val) {
    if (val % 2 === 0) {
        return val
    }
})
console.log(res3);