function spy() {
    return "Hello, World";
}
function receivesAFunction (spy) {
    spy();     
}


let bob = function () {
    console.log("boo")
}
function returnsANamedFunction(){
    return bob
}

function returnsAnAnonymousFunction(){
    return function() {
        console.log("Yet more razzling");
    }}