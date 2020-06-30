# Angular

#### RXJS
``` js
import { filter, map, takeWhile, tap, switchMap } from 'rxjs/operators';
import { Observable, interval } from 'rxjs';

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
* interval：类似定时器，并返回一个累加数字，例如：1 -> 2 -> 3...
* pipe：管道
* filter：过滤，为false不执行下面的操作流
* map：可以对value值的变更
* delay：延时
* takeWhile：表达式为true继续订阅，false取消订阅
* tap：可在流中间做一些操作，例如打印上一个操作流的返回值
* switchMap：映射成 observable，完成前一个内部 observable，发出值。可以拿到最外层的observable值并开始下一个observable
