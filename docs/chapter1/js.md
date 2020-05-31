# JS

#### 1. javascript数据类型 :fire:

基本类型：`boolean、null、undefined、number、string、symbol`   
引用类型：`object、array、function`

#### 2. this的指向

#### 3. 数组和对象都有哪些循环的方法

#### 4. 什么是闭包 :fire:

函数A内部有一个函数B,函数B可以访问到函数A的变量，那么函数B就是闭包。（闭包就是能够读取其他函数内部变量的函数）
``` js
function A() {
  let a = 1
  window.B = function () {
      console.log(a)
  }
}
A()
B() // 1
```

#### 5. 原型链
[JavaScript深入之从原型到原型链](https://github.com/mqyqingfeng/Blog/issues/2)  
原型链就是多个对象通过`__proto__`的方式连接了起来。为什么 obj 可以访问到 valueOf 函数，就是因为 obj 通过原型链找到了 valueOf 函数。  
* Object 是所有对象的爸爸，所有对象都可以通过`__proto__`找到它
* Function 是所有函数的爸爸，所有函数都可以通过`__proto__`找到它
* 函数的 prototype 是一个对象
* 对象的 __proto__ 属性指向原型， __proto__ 将对象和原型连接起来组成了原型链

#### 6. 生拷贝与浅拷贝

#### 7. 防抖与节流

#### 8. cookie、localstorage、sessionstorage 的区别

#### 20. js有哪些设计模式