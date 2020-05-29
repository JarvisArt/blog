# CSS

#### 1. 介绍一下标准的CSS的盒子模型？与低版本IE的盒子模型有什么不同的？

标准盒子模型：宽度=内容的宽度（content）+ border + padding + margin  
低版本IE盒子模型：宽度=内容宽度（content+border+padding）+ margin

#### 2. box-sizing属性 

context-box：W3C的标准盒子模型，设置元素的 height/width 属性指的是content部分的高/宽  
border-box：IE传统盒子模型。设置元素的height/width属性指的是border + padding + content部分的高/宽

#### 3. position的属性

static（默认）：按照正常文档流进行排列  
relative（相对定位）：不脱离文档流，根据自身的静态位置通过top,bottom,left,right定位  
absolute（绝对定位）：参考距其最近一个不为static的父级元素通过top,bottom,left,right定位  
fixed（固定定位）：所固定的参照物对象是可视窗口  
sticky（粘性定位）：它会固定在目标位置

#### 4.CSS3有哪些新特性？ :fire:

[菜鸟教程CSS3目录](https://www.runoob.com/css3/css3-tutorial.html)

#### 5. display:none 与 visibility:hidden 的区别

display：none 不显示对应的元素，在文档布局中不再分配空间（回流+重绘）  
visibility：hidden 隐藏对应元素，在文档布局中仍保留原来的空间（重绘）  

#### 6. 如何居中div(父元素宽高未知)？ :fire:

一个水平垂直居中的库 [水平垂直居中，这是一道面试必考题](https://github.com/yanhaijing/vertical-center)

``` html
<!-- 公共代码 -->
<style>
  .parent {
    width: 300px;
    height: 400px;
    border: 1px solid red;
  }
  .child {
    width: 100px;
    height: 100px;
    border: 1px solid green;
  }
</style>
<body>
  <div class="parent">
    <div class="child"></div>
  </div>
</body>
```

``` css
/* 方案一：（已知child宽高）absolute + -margin */
.parent {
  position: relative;
}
.child {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -50px;
  margin-left: -50px;
}
```

``` css
/* 方案二：（已知child宽高）absolute + calc */
.parent {
  position: relative;
}
.child {
  position: absolute;
  position: absolute;
  top: calc(50% - 50px);
  left: calc(50% - 50px);
}
```

``` css
/* 方案三：（未知child宽高）absolute + margin auto */
.parent {
  position: relative;
}
.child {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
```

``` css
/* 方案四：（未知child宽高）flex */
.parent {
  display: flex;
  align-items: center;
  justify-content: center;
}
```

``` css
/* 方案五：（未知child宽高）absolute + transform */
.parent {
  position: relative;
}
.child {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

``` css
/* 方案六：（未知child宽高）table-cell */
.parent {
  display: table-cell;
  text-align: center;
  vertical-align: middle;
}
.child {
  display: inline-block;
}
```

``` css
/* 方案七：（未知child宽高）grid */
.parent {
  display: grid;
}
.child {
  align-self: center;
  justify-self: center;
}
```

#### 7.BFC规范（块级格式化上下文：block formatting context） :fire:
[掘金BFC详解](https://juejin.im/post/5ea45801e51d4546d4399055)  

BFC规定了内部的Block Box如何布局：  
&emsp;1.内部的Box会在垂直方向上一个接一个放置  
&emsp;2.Box垂直方向的距离有margin决定，属于同一个BFC的两个相邻Box的margin会重叠  
&emsp;3.每个元素的margin box的左边，与包含块border box的左边相接触  
&emsp;4.BFC的区域不会与浮动元素重叠  
&emsp;5.BFC是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素  
&emsp;6.计算BFC的高度时，浮动元素也会参与计算  

BFC的触发条件：  
&emsp;1.根元素，即html  
&emsp;2.float的值不为node（默认）  
&emsp;3.overflow的值不为visible（默认）  
&emsp;4.display的值inline-block、table-cell、table-caption  
&emsp;5.position的值为absolute、fixed



