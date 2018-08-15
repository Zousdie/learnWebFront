var o1 = {
    value: 'o1',
    printValue: function f() {
        console.log('o1 print value');
        console.log(this.value);
    }
};

var o2 = {
    value: 'o2',
    printValue: function f() {
        console.log('o2 print value');
        console.log(this.value);
    },
    oo: {
        value: 'oo',
        printValue1: o1.printValue
    }
};

// o2.printValue();

var fact = (function f(num) {
    if(num <= 1) {
        return 1;
    } else {
        return num * f(num - 1);
    }
});

function F() {
    var r = new Array();
    for(var i = 0; i < 10; i++) {
        r[i] = function(x) {
            return function() {
                return x;
            };
        }(i);
    }
    return r;
}

// console.log(F()[0]()); //0

var f = function(x) {
    return function() {
        return x;
    }
}(1);

console.log(f());

var o = {
    value: 'o',
    getValue: function() {
        return this.value;
    },
    getValue2: function() {
        function F() {
            return this.value;
        }
        return F();
    }
}

console.log(o.getValue());  //'o'
console.log(o.getValue2()); //undefined
var temp;
console.log((temp = o.getValue)()); //undefined
