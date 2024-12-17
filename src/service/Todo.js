import { supabase } from "../confing/config.js";

export const getTodos = async (user_id) => {
  const { data, error } = await supabase
    .from("todo")
    .select("*")
    .eq("user_id", user_id);

  if (error) throw error;
  return data;
};

export const getImportantTodos = async (user_id) => {
  const { data, error } = await supabase
    .from("todo")
    .select("*")
    .eq("user_id", user_id)
    .eq("isImportant", true);

  if (error) throw error;
  return data;
};
export const addTodo = async ({
  description,
  user_id,
  isComplated,
  isImportant,
}) => {
  const { data, error } = await supabase
    .from("todo")
    .insert([{ description, user_id, isComplated, isImportant }]);

  if (error) throw error;
  return data;
};

export const deleteTodo = async (taskId) => {
  const { data, error } = await supabase.from("todo").delete().eq("id", taskId);

  if (error) {
    console.error("Error deleting the task:", error.message || error);
    throw error;
  }

  return data;
};

export const markImportant = async ({ taskId, updatedTask }) => {
  const { data, error } = await supabase
    .from("todo")
    .update({ isImportant: updatedTask })
    .eq("id", taskId);

  if (error) throw error;
  return data;
};

export const markcomplate = async ({ taskId, updatedTask }) => {
  const { data, error } = await supabase
    .from("todo")
    .update({ isComplated: updatedTask })
    .eq("id", taskId);

  if (error) throw error;
  return data;
};
