//http://www.w3school.com.cn/js/pro_js_inheritance_implementing.asp
//https://www.jianshu.com/p/652991a67186
function ClassA(sColor) {
    this.color = sColor;
    this.sayColor = function () {
        alert(this.color);
    };
}

function ClassB(sColor, sName) {
    this.newMethod = ClassA;
    //特别声明 this.ClassA();
    //即将当前的this 出入了classA 中，使得classA 使用的this 对象为classB触底过去的
    this.newMethod(sColor);//对象冒充
    delete this.newMethod;
    //类似于
    // ClassA.call(this, sColor);
    this.name = sName;
    this.sayName = function () {
        alert(this.name);
    };
}

function ClassA(sColor) {
    this.color = sColor;
}

ClassA.prototype.sayColor = function () {
    alert(this.color);
};

function ClassB(sColor, sName) {
    ClassA.call(this, sColor);//冒充对象
    this.name = sName;
}

ClassB.prototype = new ClassA();

ClassB.prototype.sayName = function () {
    alert(this.name);
};

(function ($) {
    var objA = new ClassA("blue");
    var objB = new ClassB("red", "John");
    objA.sayColor();	//输出 "blue"
    objB.sayColor();	//输出 "red"
    objB.sayName();		//输出 "John"
})(jQuery);

function ClassA() {
}

ClassA.prototype.color = "blue";
ClassA.prototype.sayColor = function () {
    alert(this.color);
};

function ClassB() {
}

ClassB.prototype = new ClassA();
//定义防止覆盖， 不容易传递
//调用 ClassA 的构造函数，没有给它传递参数。这在原型链中是标准做法。要确保构造函数没有任何参数


function ClassA() {
}

ClassA.prototype.color = "blue";
ClassA.prototype.sayColor = function () {
    alert(this.color);
};

function ClassB() {
}

ClassB.prototype = new ClassA();


function ClassB() {
}

ClassB.prototype = new ClassA();

ClassB.prototype.name = "";
ClassB.prototype.sayName = function () {
    alert(this.name);
};
