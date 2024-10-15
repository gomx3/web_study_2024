# Hooks

- `useEffect`
    
    
     **Hook**은 함수형 컴포넌트에서 **상태가 있는 로직을 JavaScript 함수로** 구현한 것을 말합니다. 클래스형 컴포넌트를 작성하지 않아도 state와 같은 상태를 사용할 수 있다는 것이 특징입니다.
    
     그 중 `useEffect`는 컴포넌트가 렌더링될 때마다 특정 작업(side effect)을 수행하는 Hook입니다. 
    
     컴포넌트가 mount/unmount/update 됐을 때 특정 작업을 처리할 수 있습니다. 클래스형 컴포넌트에서 사용하는 **생명 주기 메소드**를 함수형 컴포넌트에서 사용하는 것입니다.
    
    [\[React.Component\]](https://github.com/gomx3/web_study_2024/blob/main/chapter4/React-Component.md)
    
    ```jsx
    useEffect(func, deps)
    
    // func: 수행하고자 하는 작업/함수
    // deps: 배열 형태로, 검사하고자 하는 특정 값이나 빈 배열을 넣는다. (의존성)
    ```
    
    1. 의존성이 없는 useEffect
        
        ```jsx
        useEffect(() => {
        	console.log('컴포넌트가 마운트 될 때 호출된다.')
        	console.log('컴포넌트가 업데이트될 때 호출된다.')
        })
        ```
        
    2. 빈 의존성을 가지는 useEffect
        
        ```jsx
        useEffect(() => {
        	console.log('컴포넌트가 마운트 될 때 호출된다.')
        }, [])
        ```
        
    3. 의존성을 가지는 useEffect
        
        ```jsx
        useEffect(() => {
        	console.log('컴포넌트가 마운트 될 때 호출된다.')
        	console.log('의존하는 값(ex. count)이 변경될 때 호출된다.')
        }, [count])
        ```
        
- `try, catch, finally` 구문
    
    
     이 구문은 오류가 발생할 수 있는 코드를 안전하게 실행하기 위한 구문입니다.
    
     `try` 블록 내 코드가 먼저 실행되고, 만약 그 안에서 **예외**가 발생하면 `catch` 블록 내 코드가 실행됩니다. `finally` 블록 내 코드는 예외 발생 여부와 관계없이  항상 실행되며, 제어 흐름이 전체 **구문을 종료하기 전**에 실행됩니다.
    
     다음 예제에서 함수가 존재하지 않는 예외가 발생하므로 `catch` 블록 내 `console.error()`가 실행됩니다.
    
    ```jsx
    try {
      nonExistentFunction()
    } catch (error) {
      console.error(error)
      // Expected output: ReferenceError: nonExistentFunction is not defined
    }
    ```
    
     `catch(error)`에서 **`error`**는 `catch` 블록에서 잡힌 예외를 담는 선택적 식별자 혹은 패턴입니다. 블록 내에서 예외 값을 사용하지 않는 경우 `error` 값과 괄호를 생략할 수 있습니다.
    
     `try` 문은 항상 `try` 블록으로 시작해야 하며 `catch` 또는 `finally` 블록 중 **하나 이상** 반드시 존재해야 합니다. 그리고 반드시 단일 구문이 아닌 **중괄호**로 감싸진 블록이어야 합니다.
    
     하나 이상의 `try` 문을 **중첩**해서 사용할 수 있습니다. 내부 `try` 문에 `catch` 블록이 없는 경우, 외부 `try` 문의 `catch` 블록이 대신 사용됩니다. 즉, 중첩된 `try` 문 내에서 예외가 발생하면, 가장 가까운 상위 `catch` 블록이 해당 예외를 처리하게 됩니다.
    
- `axios`
    
    
     `axios`는 API와 상호 작용하기 위해 널리 사용되는 **HTTP 비동기 통신 라이브러리**입니다. `axios`는 브라우저와 Node.js 환경 모두에서 사용할 수 있으며, **Promise API** 기반으로 비동기 작업을 처리하는 데 강력한 기능을 제공합니다.
    
    <aside>
    💡
    
     데이터 통신을 요청했을 때, 어떠한 요청에 대한 ‘응답’을 받을 때까지 기다리다가 완료된 뒤 다음 코드가 수행되는 처리 방식을 의미하는 **동기 통신**과 다르게
    
     데이터 요청에 대한 **‘응답’을  기다리지 않고 다음 코드가 수행되는 처리 방식**을 **비동기 통신**이라 한다.
    
    </aside>
    
     XMLHttpRequest, Fetch API 등 다른 HTTP 클라이언트와 비교했을 때 다음의 장점이 존재합니다.
    
    - 간단해서 HTTP 요청을 보내고 응답하는 것이 쉬움
    - 서버에서 받은 응답을 자동으로 **JSON**으로 파싱함
    - 요청이나 응답을 가로채서 **중간에 로직을 추가**하거나 헤더를 수정할 수 있음
    - 다양한 에러 처리 기능을 제공함
    - 취소 요청 기능을 제공하여 불필요한 네트워크 요청을 방지함
    
    ---
    
    **요청 파라미터**
    
    | **method** | HTTP **요청 메소드**로, GET이 기본적으로 사용된다. |
    | --- | --- |
    | url | **요청을 보낼 URL 주소**를 지정한다. **엔드 포인트** |
    | params | URL의 **쿼리 매개변수**를 설정한다. |
    | headers | 요청 헤더로, 사용자 정의 헤더를 추가할 수 있다. |
    | data | `request body`에 **보낼 데이터**를 설정한다. |
    | baseURL | 공통적으로 사용하는 기본 URL 주소를 지정한다. |
    | responseType | 서버에서 받을 응답의 데이터 형식을 설정해준다. |
    | withCredentials | axios 요청에서 쿠키 및 HTTP 인증 정보를 포함하도록 설정한다. |
    | auth | 요청에 대한 HTTP 기본 인증을 설정한다. |
    - **`request body`**: 클라이언트가 서버로 **전송하고자 하는 데이터**가 포함됩니다. JSON 형식으로 데이터를 전송하거나 form/multipart 데이터를 포함할 수 있습니다.
    - 사용 예시
        
        ```jsx
        // GET 요청
        axios({
          method: 'get',
          url: url,
          params: {
            id: 1,
            category: 'review'
          },
          headers: {
            Authorization: 'Bearer YourAccessToken'
          }
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.error(err);
        });
        ```
        
        ```jsx
        // POST 요청
        axios({
          method: 'post',
          url: url,
          data: {
            name: 'Dev',
            title: 'good review'
          }
        });
        ```
        
    
    **요청 메소드**
    
    1. **GET**
        
         서버로 데이터를 요청해 웹 애플리케이션에서 **보여주거나 할 때** 사용하는 메소드입니다.
        
         API의 엔드 포인트를 설정하고, `axios.get()`을 사용하여 서버에 GET 요청을 합니다. 그리고 `then()`과 `catch()`를 사용하여 성공 및 실패 시 처리를 정의합니다.
        
        ```jsx
        // 사용자가 작성한 블로그 글의 목록을 웹 페이지에 표시
        const url = 'https://example.com/blog'
        
        const [blogList, setBlogList] = useState([])
        
        axios.get(url)
        	.then((res) => {
        		// 성공한 경우 응답 처리
        		setBlogList(res.data)
        		console.log('응답 완료: ', blogList)
        	})
        	.catch((error) => {
        		console.error('에러: ', error)
        	})
        ```
        
         응답은 **JSON 형태**로 옵니다.
        
    2. **POST**
        
         웹 애플리케이션에서 **서버로 데이터를 보낼 때** 사용하는 메소드입니다. 데이터를 서버로 제출하거나 업데이트할 때, 폼 데이터 전송, 파일 업로드 등에 사용됩니다.
        
         기존의 리소스를 업데이트하는 PUT과 달리 POST는 주로 **새로운 리소스를 생성**하는 데 사용합니다. 또한 매 요청마다 새로운 정보 객체를 추가합니다.
        
        ```jsx
        const params: {
        	id: 1,
        	filter: "travel",
        	createAt: "2024.10.15",
        }
        
        axios.post(url, params)
        	.then((res) => {
        		console.log('블로그 작성 완료')
        	})
        	.catch((error) => {
        		console.error('블로그 작성 실패: ', error)
        	})
        ```
        
    3. **DELETE**
        
         서버에 저장되어 있는 **데이터를 삭제할 때** 사용되는 메소드입니다. 일반적으로 body가 비어 있기 때문에 GET과 형태는 비슷하지만 서버에 들어가면 서버 내에서 삭제 프로세스를 진행합니다.
        
        ```jsx
        axios.delete(url)
        	.then((res) => {
        		console.log('삭제 완료')
        	})
        	.catch((error) => {
        		console.error('에러: ', error)
        	})
        ```
        
    4. **PUT**
        
         POST 요청과 사용 방법이 유사하나 새로운 데이터 생성이 아닌, **기존의 데이터를 수정할 때** 사용하는 메소드입니다.
        
        ```jsx
        const editData: {
        	name: "john doe",
        	title: "study records",
        	content: "it was good",
        }
        
        exios.put(editUrl, editData)
        	.then((res) => {
        		console.log('수정 성공')
        	})
        	.catch((error) => {
        		console.error('수정 실패: ', error)
        	})
        ```
        
    5. **PATCH**
        
         PUT과 마찬가지로 데이터를 수정하는 데 사용되는 메소드입니다. PUT과 비슷한 역할을 하지만, PATCH는 **리소스의 일부를 수정할 때** 사용됩니다.
        
        ```jsx
        const updateData: {
        	name: "gildong hong"
        }
        
        axios.patch(updateUrl, updateData)
        	.then((res) => {
        		console.log('수정 성공')
        	})
        	.catch((error) => {
        		console.error('수정 실패: ', error)
        	})
        ```
        
    
- `fetch`
    
     자바스크립트에 **내장**된 함수로, 비동기적으로 **HTTP 요청**을 보내기 위해 사용됩니다. 브라우저에 기본적으로 내장되어 있어 별도의 패키지를 설치할 필요가 없습니다. **Promise API** 기반이며, 일반적인 HTTP 요청을 쉽게 보낼 수 있습니다.
    
     `fetch`는 두 개의 인자를 갖습니다.
    
    - **`url`**: 통신에 사용할 url을 지정함. 이때 같은 포트의 localhost와 통신할 경우 포트 번호 다음 주소를 입력하면 됨 (ex. `/login`)
    - **`{option}`**
        - `method:` GET/POST/DELETE 등의 메소드 설정
        - `headers:` Request Header를 지정함. 보통 데이터가 JSON 형태임을 알려줄 때 사용함.
        - `body:` 전달할 데이터
    
    ```jsx
    const data = { id: "apple"};
    
    fetch('http://localhost:5173/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then((response) => response.json())
    .then((data) => {
      console.log('성공:', data);
    })
    .catch((error) => {
      console.error('실패:', error);
    });
    ```
    
- `axios` vs `fetch` (차이점)
    
    
    - `axios`는 **JSON 데이터**를 자동으로 변환해주지만, `fetch`는 응답을 JSON으로 변환하기 위해 **`response.json()`**을 호출해야 합니다.
    - `axios`는 HTTP 에러(예: 404, 500)를 **자동으로 catch**하지만, `fetch`는 네트워크 오류만을 catch하고, HTTP 상태 코드를 명시적으로 처리해야 합니다.
    - `axios`는 요청 타임아웃을 쉽게 설정할 수 있는 반면, `fetch`는 직접 구현해야 합니다.
    - `axios`는 요청 및 응답을 중간에 수정할 수 있는 **인터셉터** 기능이 있지만, `fetch`는 없습니다.
    
- `.env` 파일에는 어떤 내용들을 관리할까요?
    
    
     `.env` 파일은 **환경 변수**를 관리하는 파일로, 민감한 정보나 설정을 코드와 분리하여 관리할 수 있습니다. 서버나 클라이언트에서 공통으로 사용하는 설정을 담고, 이를 **보안**이나 **유연한 설정**을 위해 사용합니다.
     `.env` 파일은 일반적으로 Git에 포함되지 않도록 `.gitignore`에 추가하여 보안성을 유지합니다.
    
- **`custom hook?`**
    
    
     개발자가 스스로 생성해 반복되는 로직을 **재사용** 가능하도록 만든 Hook을 의미합니다. `useState` 나`useEffect` 등 기본 Hook을 사용하여 로직을 컴포넌트 밖으로 추출할 수 있습니다.
    
     커스텀 훅을 사용하면
    
    - **상태 관리 로직을 재사용**할 수 있고
    - 함수형으로 작성하기 때문에 **가독성**을 높일 수 있습니다.
    
     여러 url을 `fetch`할 때, 여러 입력에 의한 상태 변경 등 반복되는 로직을 동일한 함수에서 작동하게 하고 싶은 경우 주로 사용합니다.
    
    ```jsx
    import { useState, useEffect } from 'react';
    
    function useFetch(url) {
      const [data, setData] = useState(null);
      const [loading, setLoading] = useState(true);
    
      useEffect(() => {
        fetch(url)
          .then(response => response.json())
          .then(data => {
            setData(data);
            setLoading(false);
          });
      }, [url]);
    
      return { data, loading };
    }
    
    // 사용 예시
    const { data, loading } = useFetch('https://api.example.com/data');
    ```
    
     커스텀 훅을 정의할 때,
    
    - 함수 **이름 앞에** `use`를 붙입니다.
    - 보통 프로젝트 내의 hooks 폴더에 커스텀 훅을 위치시킵니다.
    - `return`하는 값이 조건부여서는 안 됩니다.
    - 내부에 `useState`와 같은 React 내장 훅을 사용하여 작성합니다.
