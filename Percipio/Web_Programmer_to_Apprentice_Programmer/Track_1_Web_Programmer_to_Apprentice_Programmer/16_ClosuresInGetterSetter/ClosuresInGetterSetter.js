function getterSetterData() {

    //variables declared with var inside a closure are private

    var myVar = 1;

    return {
        getVar: function() {
            return myVar;
        },

        setVar: function(v) {
            myVar = v;
        }
    }
}

let objVar = getterSetterData();

console.log(objVar.getVar());

objVar.setVar(2);

console.log(objVar.getVar());