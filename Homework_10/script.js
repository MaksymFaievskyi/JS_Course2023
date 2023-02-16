//1 task
let arr = ["Tom", "Sam", "Ray", "Bob"];
let [x,y,,...z] = arr;
console.log(x); // "Tom"
console.log(y); // "Sam"
console.log(z); // [Bob]

//2 task
let data = {
    names: ["Sam", "Tom", "Ray", "Bob"],
    ages: [20, 24, 22, 26],
 };
 let {names: [,name2,,name4], ages: [,age2,,age4]} = data;
 console.log(name2); // "Tom"
 console.log(age2); // 24
 console.log(name4); // "Bob"
 console.log(age4); // 26

//3 task
function mul(...rest) {
    let result = 1;
    let isNum = false;
    for (const iter of rest) {
        if (typeof iter === "number" && !isNaN(iter)) {
            result *= iter;
            isNum = true
        }
    }
    if (isNum) {
        return result;
    } else {
        return 0;
    }
}
console.log(mul(1, "str", 2, 3, true)); // 6
console.log(mul(null, "str", false, true)); // 0

//4 task 
let server = {
    data: 0,
    convertToString: function (callback) {
       callback(() => {
          return this.data + "";
       });
    }
 };
 let client = {
    server: server,
    result: "",
    calc: function (data) {
       this.server.data = data;
       this.server.convertToString(this.notification());
    },
    notification: function () {
       return callback => {
          this.result = callback();
       };
    }
 };
 client.calc(123);
 console.log(client.result); // "123"
 console.log(typeof client.result); // "string"
 
//5 task 
function mapBuilder(keys, values){
    if (keys.length === values.length) {
        const map = new Map();
        for (let i = 0; i < keys.length; i++) {
            map.set(keys[i], values[i])
        }
        return map;
    } else {
        console.log("Incorrect data!")
    }
}

let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];
let map = mapBuilder(keys, values);
console.log(map.size); // 4
console.log(map.get(2)); // "span"
