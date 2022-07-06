let users = [
    { id: 1, name: "Ritik", address: 'agra' },
    { id: 2, name: "Ankur", address: 'agra' },
    { id: 3, name: "AnC", address: 'agra' },
]

var str = "An"

// for(i=0;i<users.length;i++){
//     if(users[i].name.includes(str)){
//         console.log(users[i])
//     }
// }

// users.forEach(function (user) {
//     if (user.name.includes(str)) {
//         console.log(user)
//     }
// })

let a = users.find(function (user) {
    if (user.name.includes(str)) {
        return (user)
    }
})

console.log(a)