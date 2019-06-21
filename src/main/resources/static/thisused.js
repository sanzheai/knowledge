function ClassA(sColor) {
    this.color = sColor;
    this.sayColor = function () {
        alert(this.color);
    };
}

function ClassB(sColor, sName) {
    this.newMethod = ClassA;
    this.newMethod(sColor);
    delete this.newMethod;

    this.name = sName;
    this.sayName = function () {
        alert(this.name);
    };
}
(function($){
    var objA = new ClassA("blue");
    var objB = new ClassB("red", "John");
    objA.sayColor();	//输出 "blue"
    objB.sayColor();	//输出 "red"
    objB.sayName();		//输出 "John"
})(jQuery);
