/* This is what we make any object in Js
- This is the way we use inheritance, but for now, some kind of method below
-
-
-
-
-

/
var Person = {
    name:"Diego"
    yearofBirth()
}

*/
var diego ={
    name:'Jonh',
    yearofBirth: 1982,
    job:'Quality employe',

}

var Person = function(name, yearofBirth, job){
    this.name = name,
    this.yearofBirth = yearofBirth,
    this.job = job
    /*this.calculateAge = function(){
        console.log(2023 - yearofBirth)
    }*/
}

//prototype

Person.prototype.calculateAge = 
function(){
    console.log(2023 - this.yearofBirth)
};

Person.prototype.lastName = 'Silva'



var luffy = new Person('luffy', 1888, 'Quality employe')

var vampeta = new Person('vampeta',1972,'cargo-employe')
var gagarin = new Person('Gagarin', 1937,'No work')
var sergio = new Person('Sergio', 1978, 'Comissary')

diego.calculateAge()//this is the callback use to call inside the webpage
thiago.calculateAge()
sergio.calculateAge()

console.log(sergio.lastName)
console.log(luffy.lastName)
console.log(vampeta.lastName)
