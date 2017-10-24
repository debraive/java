/*exercice1_PNJ
var obj = {};
obj["nom"] = "jean";
obj["age"] = 25;
obj["items_to_give"] = ["couteau","lance","arc","flèche"];

for (var prop in obj) {
  console.log(`obj.${prop} = ${obj[prop]}`);
}

var index=Math.floor(Math.random()*3)

console.log(obj.items_to_give[index]);*/


var obj1={};
obj1["title"]= "couteau"
obj1["physic"]= 8
obj1["magic"]= 5
obj1["minLevel"]= 2
obj1["available"]= true

var obj2={};
obj2["title"]= "épée"
obj2["physic"]= 5
obj2["magic"]= 10
obj2["minLevel"]= 4
obj2["available"]= true

var obj3={};
obj3["title"]= "injection"
obj3["physic"]= 4
obj3["magic"]= 10
obj3["minLevel"]= 6
obj3["available"]= false

var obj4={};
obj4["title"]= "sceptre"
obj4["physic"]= 3
obj4["magic"]= 2
obj4["minLevel"]= 1
obj4["available"]= false;

var prop = false

var tableau=[obj1,obj2,obj3,obj4];
console.log(tableau.title);

var tableau=[obj1,obj2,obj3,obj4];
  for (var prop in tableau) {
  console.log(`tableau.${prop} = ${tableau[prop]}`);
}
