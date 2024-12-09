import { useQuery } from "@tanstack/react-query";
import { getTodos } from "../service/Todo";

export const useGetTodos = () => {
  return useQuery({
    queryFn: getTodos,
    queryKey: ["todo"],
  });

  // const { data, isLoading, isError } = useQuery({
  //   queryFn: getTodos,
  //   queryKey: ["todos"],
  // });
  // console.log(data);
  // return { data, isLoading, isError };
};
