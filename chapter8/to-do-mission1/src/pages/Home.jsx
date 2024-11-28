import ClipLoader from "react-spinners/ClipLoader";

import InputSection from "../components/InputSection";
import useCustomFetch from "../hooks/useCustomFetch";
import TodoItem from "../components/TodoItem";

function Home() {
  const { data, isLoading, isError } = useCustomFetch(`/todo`);
  const todos = data?.data[0] || [];

  if (isError) {
    return <h1>error</h1>;
  }

  return (
    <>
      <InputSection />
      {isLoading ? (
        <>
          <ClipLoader />
          <p style={{
            "fontFamily": "roboto",
            "fontSize": "14px",
          }}>게시글을 불러오는 중입니다...</p>
        </>
      ) : (
        todos.map((todo) => {
          return <TodoItem key={todo.id} todo={todo} />;
        })
      )}
    </>
  );
}

export default Home;