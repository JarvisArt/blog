# RXJS

#### (old)
``` js
import { filter, map, takeWhile, tap, switchMap } from 'rxjs/operators';
import { Observable, interval, of } from 'rxjs';

this.selectedTabLink$ = this.route.paramMap.pipe(
  filter(params => params.has('tabLink')),
  map(params => params.get('tabLink')),
)

let count = 10;
this.countDown$ = interval(1000).pipe(
  map(v1 => count - v1),
  takeWhile(v2 => v2 > 0),
  tap(v3 => console.log(v3)),
  map(v4 => `${v4}`),
)

this.xxx$ = interval(1000).pipe(
  switchMap(tab => this.route.paramMap.pipe(
    map(params => params.get('tabLink')),
    tap(val => console.log(val, tab))
  ))
)
```
* `interval`：类似定时器，并返回一个累加数字，例如：1 -> 2 -> 3...
* `pipe`：管道
* `filter`：过滤，为false不执行下面的操作流
* `map`：可以对value值的变更
* `delay`：延时
* `takeWhile`：表达式为true继续订阅，false取消订阅
* `tap`：可在流中间做一些操作，例如打印上一个操作流的返回值
* `switchMap`：映射成 observable，完成前一个内部 observable，发出值。可以拿到最外层的observable值并开始下一个observable

#### 核心概念(new)
``` js
import { Observable, Subscription, Subject, interval } from 'rxjs';

/* ---- Observable ---- */
const stream : Observable<any> = new Observable(observer => {
  observer.next("Start");
  observer.next("创建一个Observable对象");
  observer.next("End");
});
stream.subscribe(data => {
  console.log(data) // Start -> 创建一个Observable对象 -> End
})

/* ---- Subscription ---- */
const sub: Subscription = interval(1000).subscribe(data => {
  console.log(data) // 0 -> 1 -> 2 -> 3 -> 4
})
setTimeout(() => {
  sub.unsubscribe() // 5秒后取消sub的执行，不会再订阅
}, 5000)

/* ---- Subject ---- */
const subject: Subject<string> = new Subject()
subject.subscribe(data => {
  console.log(`observerA-${data}`)
})
subject.subscribe(data => {
  console.log(`observerB-${data}`)
})
subject.next('1') // observerA-1 -> observerB-1
subject.next('2') // observerA-2 -> observerB-2
```

* `Observable(可观察对象)`：一个可调用的未来值或事件的集合
* `Observer(观察者)`：一个回调函数的集合，它知道如何去监听由 Observable 提供的值
* `Subscription(订阅)`：表示Observable的执行，主要用于取消 Observable 的订阅
* `Operators(操作符)`：采用函数式编程风格的纯函数，例如 map、filter、concat、flatMap 等这样的操作符，用来处理集合
* `Subject(主体)`：相当于 EventEmitter，并且是将值或事件多路推送给多个 Observer 的唯一方式
* `Schedulers(调度器)`：用来控制并发并且是中央集权的调度员，允许我们在发生计算时进行协调，例如 setTimeout 或 requestAnimationFrame 或其他 --

#### 创建(new)
``` js
import { of, from, fromEvent, interval, range, timer } from 'rxjs';

/* ---- of ---- */
of([1, 2, 3]).subscribe(data => {
  console.log(data) // [1, 2, 3]
})

/* ---- from ---- */
from([1, 2, 3]).subscribe(data => {
  console.log(data) // 1 -> 2 -> 3
})

/* ---- fromEvent ---- */
const button = document.getElementById('button');
fromEvent(button, 'click').subscribe(data => {
  console.log(data) // MouseEvent {...}
})

/* ---- interval ---- */
interval(1000).subscribe(data => {
  console.log(data) // 1 -> 2 -> 3 -> ...
})

/* ---- range ---- */
range(0, 5).subscribe(data => {
  console.log(data) // 1 -> 2 -> 3 -> 4 -> 5
})

/* ---- timer ---- */
timer(5000, 1000).subscribe(data => {
  console.log(data) // 5秒后开始每隔1秒输出 (1 -> 2 -> 3 -> ...)
})
```
* `of`：将参数转换为可观察序列
* `from`：从数组，类数组对象，Promise，可迭代对象或类似 Observable 的对象创建 Observable
* `fromEvent`：创建一个 Observable，它发出来自给定事件目标的特定类型的事件
* `interval`：创建一个 Observable，指定每隔多长时间发出一个序列号
* `range`：创建一个 Observable，它发出指定范围内的一系列数字
* `timer`：创建一个 Observable，在 dueTime 此后的每个 period 时间之后开始并发出不断增加的数字