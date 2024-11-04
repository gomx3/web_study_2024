import { useState } from "react";

const useSignup = (l) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const signup = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:3000/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, passwordCheck }),
      });
      if (response.ok) {
        setIsSuccess(true);
      } else {
        const errorData = await response.json();
        setIsError(errorData.message || "회원 가입에 실패했습니다.");
      }
    } catch (error) {
      setIsError("회원 가입 중 오류가 발생했습니다.");
    } finally {
      setIsLoading(false);
    }
  };
  
  return { signup, loading, error, success };
};

export default useSignup;
