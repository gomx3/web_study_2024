# React.Component

https://ko.legacy.reactjs.org/docs/react-component.html#the-component-lifecycle

 React를 사용할 때는 컴포넌트를 ‘클래스’ 또는 ‘함수’로 정의할 수 있다. 그 중 클래스로 정의된 컴포넌트가 제공하는 기능에 대해 먼저 알아 본다.

 React에서 컴포넌트를 클래스형으로 정의하려면 **`React.Component`를 상속 받아야** 한다.

```jsx
class Welcome **extends React.Component** {
  **render()** {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

 `render()`는 React.Component의 하위 클래스에서 **반드시** 정의해야 하는 메소드이다.

---

## 컴포넌트 생명 주기

 모든 컴포넌트는 여러 종류의 **‘생명 주기 메소드(Life-Cycle Method)’**를 가지며, 이 메소드를 **오버라이딩**하여 특정 시점에 코드가 실행되도록 설정할 수 있다.

![컴포넌트의 생명 주기](image.png)

컴포넌트의 생명 주기

### Mount

 다음 메소드들은 컴포넌트의 인스턴스가 **생성**되어 DOM 상에 **삽입**될 때 순서대로 호출된다.

- `contructor()`
- `render()`
- `componentDidMount()`

### Update

 다음 메소드들은 props 또는 state가 변경됐을 때 등 컴포넌트가 **리렌더링**될 때 순서대로 호출된다.

- `render()`
- `componentDidUpdate()`

### Unmount

 다음 메소드는 컴포넌트가 DOM 상에서 **제거**될 때 호출된다.

- `componentWillUnmount()`