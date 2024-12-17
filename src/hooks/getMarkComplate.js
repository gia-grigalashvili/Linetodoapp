import { useQuery } from "@tanstack/react-query";
import { getMarkComplate } from "../service/Todo";
export const GetMarkComplate = (user_id) => {
  return useQuery({
    queryFn: () => getMarkComplate(user_id),
    queryKey: ["isComplated", user_id],
    enabled: !!user_id,
  });
};
