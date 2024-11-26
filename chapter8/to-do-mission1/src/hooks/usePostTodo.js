const usePostTodo = ({ title, content }) => {
    const todoData = {
        title: title,
        content: content,
        checked: false,
    }

    fetch("http://localhost:3000/todo", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(todoData),
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then((data) => {
        console.log("Success: ", data);
    })
    .catch((error) => {
        console.log("Error: ", error);
    });
}

export { usePostTodo };