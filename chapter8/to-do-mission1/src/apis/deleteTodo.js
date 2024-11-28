const deleteTodo = async (todoId) => {
  try {
    const response = await fetch(`http://localhost:3000/todo/${todoId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export { deleteTodo };
