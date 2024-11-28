const patchTodo = async (todoId, title, content, checked) => {
  const todoData = {
    title: title,
    content: content,
    checked: checked,
  };

  try {
    const response = await fetch(`http://localhost:3000/todo/${todoId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todoData),
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

export { patchTodo };
