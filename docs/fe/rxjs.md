# RXJS

#### 核心概念(new)
``` js
import { Observable, Subscription, Subject, interval } from 'rxjs'

/* ---- Observable ---- */
const stream : Observable<any> = new Observable(observer => {
  observer.next("Start");
  observer.next("创建一个Observable对象");
  observer.next("End");
})
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
import { of, from, fromEvent, interval, range, timer } from 'rxjs'

/* ---- of ---- */
of([1, 2, 3]).subscribe(data => {
  console.log(data) // [1, 2, 3]
})

/* ---- from ---- */
from([1, 2, 3]).subscribe(data => {
  console.log(data) // 1 -> 2 -> 3
})

/* ---- fromEvent ---- */
const button = document.getElementById('button')
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
* `timer`：创建一个 Observable，在 dueTime(第一个参数) 此后的每个 period(第二个参数) 时间之后开始并发出不断增加的数字


#### 操作符(new)
``` js
import { of, interval } from 'rxjs'
import { mapTo, map, scan, mergeMap, switchMap, bufferTime, concatMap, pluck, delay, tap } from 'rxjs/operators'

/* ---- mapTo ---- */
interval(1000).pipe(
  mapTo('mapTo')
).subscribe(data => {
  console.log(data) // mapTo -> mapTo -> mapTo -> ...
})

/* ---- map ---- */
interval(1000).pipe(
  map(val => `map_${val}`)
).subscribe(data => {
  console.log(data) // map_1 -> map_2 -> map_3 -> ...
})

/* ---- scan ---- */
of(1, 2, 3).pipe(
  scan((acc, one) => acc + one, 0)
).subscribe(data => {
  console.log(data) // 1 -> 3 -> 6
})

/* ---- mergeMap ---- */
of('Hello').pipe(
  mergeMap(v1 => of('World!').pipe(
    map(v2 => `${v1} ${v2}`)
  ))
).subscribe(data => {
  console.log(data) // Hello World!
});

/* ---- switchMap ---- */
of('this is ').pipe(
  switchMap(str => of(str + 'switchMap'))
).subscribe(data => {
  console.log(data) // this is switchMap
})

/* ---- bufferTime ---- */
interval(1000).pipe(
  bufferTime(3000)
).subscribe(data => {
  console.log(data) // [0, 1] -> [2, 3, 4] -> [5, 6, 7] -> ...
})

/* ---- concatMap ---- */
of(1, 2, 3).pipe(
  concatMap(val => of(val))
).subscribe(data => {
  console.log(data) // 1 -> 2 -> 3
})

/* ---- pluck ---- */
const obj1 = { name: 'Joe', age: 30 }
const obj2 = { name: { surname: 'Art' }, age: 30 }
of(obj1, obj2).pipe(
  pluck('name', 'surname')
).subscribe(data => {
  console.log(data) // undefined => Art
})

/* ---- delay ---- */
of('delay').pipe(
  delay(2000)
).subscribe(data => {
  console.log(data) // 两秒后 -> delay
})

/* ---- tap ---- */
interval(1000).pipe(
  map(val => `_${val}`),
  tap(val => console.log(val)) // _1 -> _2 -> _3 -> ...
).subscribe(data => {})
```

* `mapTo`：对数据源每项都转换为指定的值/其他
* `map`：指定一个函数处理源可观测值所发出的每个值，并将结果值作为新的可观测值发出
* `scan`：对 Observable 值的进行累积操作
* `mergeMap`：数据遍历映射，并依次拼接。第二个参数表示同时订阅的最大输入 Observable 数。即并发数
* `switchMap`：映射成 observable，完成前一个内部 observable，发出值。可以拿到最外层的observable值并开始下一个
* `bufferTime`：建立一个缓冲区（Observable），将数据源收集到缓冲区中，然后根据时间参数n对数据源进行分组，在同一n毫秒下的数据为一组，然后把分组好的数据集合发射出来
* `concatMap`：将值映射成内部 observable，并按顺序订阅和发出
* `pluck`：根据 key 值提取 Observable 所产生的值的 value，匹配不上返回 undefined
* `delay`：根据给定时间延迟发出值
* `tap`：对源 Observable 上的每个发射执行副作用，但返回与源相同的 Observable。截取源上的每个发射并运行一个函数，但只要不发生错误，就返回一个与源相同的输出


#### 过滤(new)
``` js
import { of, fromEvent } from 'rxjs'
import { take, takeUntil, filter, debounceTime, distinctUntilChanged, takeWhile } from 'rxjs/operators'

/* ---- take ---- */
of('A', 'B', 'C', 'D').pipe(
  take(2)
).subscribe(data => {
  console.log(data) // A -> B
})

/* ---- takeUntil ---- */
interval(1000).pipe(
  takeUntil(fromEvent(document, 'click'))
).subscribe(data => {
  console.log(data) // 1 -> 2 -> (直到点击页面停止)
})

/* ---- filter ---- */
of(1, 2, 3, 4).pipe(
  filter(data => data > 2)
).subscribe(data => {
  console.log(data) // 3 -> 4
})

/* ---- debounceTime ---- */
fromEvent(document, 'click').pipe(
  debounceTime(3000)
).subscribe(data => {
  console.log(data) // 延迟三秒 -> MouseEvent {...}
})

/* ---- distinctUntilChanged ---- */
of(1, 1, 2, 2, 1, 3, 3, 3).pipe(
  distinctUntilChanged()
).subscribe(data => {
  console.log(data) // 1 -> 2 -> 1 -> 3
})

/* ---- takeWhile ---- */
of(1, 2, 3, 4, 5).pipe(
  takeWhile(val => val <= 3)
).subscribe(data => {
  console.log(data) // 1 -> 2 -> 3
})
```

* `take`：从源 observable 中取得前n个值
* `takeUntil`：发出源 Observable 发出的值，直到notifier Observable 发出值后停止
* `filter`：过滤源Observable发出的项目，只发出满足指定谓词的项目
* `debounceTime`：延迟源 Observable 发出的值,并舍弃掉在两次输出之间小于指定时间的发出值
* `distinctUntilChanged`：只有当当前值与之前最后一个值不同时才将其发出
* `takeWhile`：表达式为true继续订阅，false取消订阅