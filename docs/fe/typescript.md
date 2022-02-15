# TypeScript

### 前言

TypeScript是JavaScript类型的超集，是由微软开发的自由和开源的编程语言，它设计目标是开发大型应用，它可以编译成纯 JavaScript，编译出来的 JavaScript 可以运行在任何浏览器上

### 一、基础类型

#### 1.1 - Boolean（布尔值）
```ts
let isDone: boolean = false;
```

#### 1.2 - Number（数字）
```ts
let count: number = 6; // 支持二进制、八进制、十六进制字面量
```

#### 1.3 - String（字符串）
```ts
let name: string = "Jarvis";
```

#### 1.4 - Array（数组）
```ts
let list: number[] = [1, 2, 3];      // 方式1：元素类型后面接上 []

let list: Array<number> = [1, 2, 3]; // 方式2：使用数组泛型，Array<元素类型>
```

#### 1.5 - Tuple（元组）
数组中元素的数据类型一般都是相同的，如果存储的元素数据类型不同，则需要使用元组；元组类型允许表示一个已知元素数量和类型的数组，比如`Excel`，`CSV`的数据格式
```ts
let data: [string, number] = ['Jarvis', 18]; // 简单例子

let tableData: ([string, number, boolean])[] // 下面 Table body 的数据格式类型
```
| name    | age   | single  |
| :-----: |:-----:| :------:|
| Jarvis  | 18    | true    |
| Jack    | 25    | false   |

#### 1.6 - Enum（枚举）
使用枚举类型可以为一组数值赋予语义化的名字，例如：性别、职业、颜色等；默认情况下，从0开始为枚举成员的初始值
```ts
enum Color { Red, Green, Blue }
// 编译后打印的 Color => { 0: "Red", 1: "Green", 2: "Blue", Red: 0, Green: 1, Blue: 2 }

let c1: Color = Color.Green; // 1
```
我们也可以指定枚举成员的初始值
```ts
enum Color { Red = 1, Green, Blue }
// 编译后打印的 Color => { 2: "Red", 3: "Green", 4: "Blue", Red: 2, Green: 3, Blue: 4 }

let c1: Color = Color.Green; // 3
```
使用字符串枚举
```ts
enum Color { Red = 'red', Green = 'green', Blue = 'blue' }
// 编译后打印的 Color => { Red: "red", Green: "green", Blue: "blue" }

let c1: Color = Color.Green; // green
```

#### 1.7 - Any（任意类型）
可以指定任何类型的值
```ts
let notSure: any = 4;
notSure = "Jarvis";
notSure = false;

let list: any[] = [1, true, "free"];
list[1] = 100;
```

#### 1.8 - Void（没有任何类型）
表示没有任何类型，一般用于定义函数的时候函数没有返回值
```ts
function warnUser(): void {
  console.log("This is my warning message");
}
```
声明一个`void`类型的变量没有什么大用，因为你只能为它赋予`undefined`和`null`
```ts
let unusable: void = undefined;
```

#### 1.9 - Null 和 Undefined 类型
`undefined`和`null`两者各自有自己的类型分别叫做`undefined`和`null`。 和`void`相似，它们的本身的类型用处不是很大
```ts
let u: undefined = undefined;

let n: null = null;
```

#### 1.10 - Never 类型
`never`类型表示的是那些永不存在的值的类型。 例如，`never`类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型  
下面是一些返回never类型的函数：
```ts
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
  throw new Error(message);
}

// 推断的返回值类型为never
function fail() {
  return error("Something failed");
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
  while (true) {}
}
```

#### 1.11 - Object（对象）
`object`表示非原始类型，也就是除`number`，`string`，`boolean`，`symbol`，`null`或`undefined`之外的类型。
使用`object`类型，就可以更好的表示像`Object.create`这样的API。例如
```ts
declare function create(o: object | null): void;

create({ prop: 0 }); // OK
create(null); // OK

create(42); // Error
create("string"); // Error
create(false); // Error
create(undefined); // Error
```

#### 1.12 - 类型断言
有时候会遇到这种情况，你比`TypeScript`更清楚某个值的类型，通过类型断言这种方式可以告诉编译器，“相信我，我知道它是什么类型”。类型断言好比其它语言里的类型转换，但是不进行特殊的数据检查和解构  
类型断言有两种形式，其一种是“尖括号”语法：
```ts
let someValue: any = "this is a string";

let strLength: number = (<string>someValue).length;
```
另一个为as语法：
```ts
let someValue: any = "this is a string";

let strLength: number = (someValue as string).length;
```