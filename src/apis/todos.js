import axios from "axios";

const todoDataUrl = "http://localhost:3100/todos";

export const getAllTodosData = async () => {
  console.log("get");
  const response = await axios.get(todoDataUrl);
  return response.data;
};
export const addTodoData = async (todo) => {
  console.log("add");
  const response = await axios.post(todoDataUrl, todo);
  return response.data;
};

export const deleteTodoData = async (id) => {
  console.log("delete");
  await axios.delete(`${todoDataUrl}/${id}`);
  return id;
};

export const updateTodoData = async (id, todo) => {
  console.log("update");
  const response = await axios.put(`${todoDataUrl}/${id}`, todo);
  return response.data;
};
