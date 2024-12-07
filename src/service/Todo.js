import { supabase } from "../confing/config.js";

export const getTodos = async (userid) => {
  const { data, error } = await supabase
    .from("todos")
    .select("*")
    .eq("user_id", userid);
  if (error) throw error;
  return data;
};

export const addTodo = async ({ description, user_id }) => {
  const { data, error } = await supabase
    .from("todos")
    .insert([{ description, user_id, isComplated: false, isImportant: false }]);

  if (error) throw error;
  return data;
};

export const deleteTodo = async (userId, taskId) => {
  const { data, error } = await supabase
    .from("todos")
    .delete()
    .eq("id", taskId)
    .eq("user_id", userId);

  if (error) {
    console.error("Error deleting the task:", error.message || error);
    throw error;
  }

  return data;
};
