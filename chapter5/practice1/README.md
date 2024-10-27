# 실습 1: 로그인 페이지 유효성 검사 구현
- `react-hook-form`과 `yup` 라이브러리 활용

![image](https://github.com/user-attachments/assets/05c98f18-81ba-4789-9893-81a98553b243)

![image](https://github.com/user-attachments/assets/6977ae4c-7a51-45f4-ab07-f5432bce4827)

![image](https://github.com/user-attachments/assets/411352fe-6f78-4080-9d50-1642249f4ea4)
    

## UI

1. 이메일 input
2. 비밀번호 input
3. 로그인 버튼

## 기능

1. 이메일
    - 올바른 이메일 형식이 아닐 경우 에러 메시지 (abc@xyz.com)
    - 에러 메시지는 실시간으로 조건이 충족했을 때 사라져야 한다. → `trigger`, `watch`
    - input 창에 포커스가 있을 때만 에러 메시지가 나온다. → `touchedFields`
2. 비밀번호
    - 올바른 비밀번호 형식이 아닐 경우 에러 메시지
        - 8자 이상 16자 이하
    - 에러 메시지는 실시간으로 조건이 충족했을 때 사라져야 한다. → `trigger`, `watch`
    - input 창에 포커스가 있을 때만 에러 메시지가 나온다. → `touchedFields`
3. 로그인 제출 버튼
    - 이메일과 비밀번호의 조건을 충족하지 않았을 때는 로그인 버튼을 비활성화 (색상 gray) → `inValid`
    - 조건이 충족되면 실시간으로 색상이 원래대로 돌아온다.

---

### 에러 메시지 실시간 변화 구현

 `useEffect`와 useForm의 `watch`, `trigger` 함수를 이용해 입력 값이 변경될 때마다 실시간으로 email과 password 필드의 유효성 검사를 진행한다.

```jsx
useEffect(() => {
    trigger("email");
    trigger("password");
  }, [watch("email"), watch("password"), trigger]);
```

### input 창 클릭 시에만 에러 메시지 출력 구현

 사용자가 상호 작용한 모든 입력을 포함하는 객체인 `touchedFields`를 이용해, email 혹은 password 필드가 사용자에 의해 포커스 되었는지에 대한 boolean 값을 확인하는 로직을 추가한다.

```jsx
<p>{touchedFields.email && errors.email?.message}</p>
```

### 로그인 버튼 비활성화 구현

 form 양식에 유효성 검증 오류가 있는지에 대한 boolean 값을 반환하는 `isValid`를 이용해 로그인 버튼의 disabled 속성을 조절한다.

```jsx
<button type="submit" disabled={!isValid}>로그인</button>
```