use database1;

db.createCollection("hr");
db.table1.insertMany([
    { name: "Alicja", age: 55, city: "Malbork" },
    { name: "Janina", age: 21, city: "GDANSK" },
    { name: "Krzychu", age: 32, city: "KATOWICE" }
]);

db.createCollection("pm");
db.table2.insertMany([
    { name: "Justyna", age:69, city: "Warszawa" },
    { name: "Andrzej", age: 21, city: "Krakow" },
    { name: "KUBA", age: 23, city: "KATOWICE" }
]);

db.createCollection("podroze");
db.table3.insertMany([
    { name: "lece", value: 1 },
    { name: "bo", value: 2 },
    { name: "chce", value: 3 }
]);

use database2;

db.createCollection("ktos");
db.table1.insertMany([
    { name: "jak", value: 1 },
    { name: "to", value: 1 },
    { name: "tak", value: 1 }
]);

db.createCollection("rowery");
db.table2.insertMany([
    { name: "bmx", value: 11 },
    { name: "goral", value: 42 },
    { name: "gorski", value: 2 }
]);

db.createCollection("banany");
db.table3.insertMany([
    { name: "banana", country: "columbia" },
    { name: "bananas", country: "Poland" },
    { name: "premium", country: "England" }
]);
