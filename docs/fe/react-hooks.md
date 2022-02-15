# React Hooks 实践指南

Hook 是 React 16.8 的新增特性。它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性。

### 1.每次 Render 都有自己独立的 Props 与 State

每一帧拥有独立的变量，可以认为每次 Render 的内容都会形成一个快照并保留下来，因此当状态变更而 Rerender 时，就形成了 N 个 Render 状态，而每个 Render 状态都拥有自己固定不变的 Props 与 State。
```js
const App = () => {
  const [count, setCount] = useState(5)

  const log = () => {
    setTimeout(() => {
      console.log("3 秒前 count = 5，现在 count =", count);
    }, 3000);
  };

  return (
    <div onClick={() => {
      log();
      setCount(3);
    }}>
      {count}
    </div>
  );
};
```