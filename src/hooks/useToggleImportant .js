// import { useMutation } from "@tanstack/react-query";
// import { markImportant } from "../service/Todo";

// export const useToggleImportant = (setTasks, user) => {
//   const mutation = useMutation(
//     ({ taskId, updatedTask }) =>
//       markImportant({ userId: user.id, updatedTask, taskId }),
//     {
//       onMutate: async ({ taskId, updatedTask }) => {
//         // Optimistically update the UI to show the toggled status
//         setTasks((prevTasks) =>
//           prevTasks.map((task) =>
//             task.id === taskId
//               ? { ...task, isImportant: updatedTask.isImportant }
//               : task
//           )
//         );
//       },
//       onError: (error, variables, context) => {
//         // Rollback the optimistic update if the mutation fails
//         setTasks(context.previousTasks);
//       },
//       onSettled: () => {
//         // Refetch tasks or other necessary operations
//       },
//     }
//   );

//   const toggleImportant = (task, taskId) => {
//     mutation.mutate({
//       taskId,
//       updatedTask: { ...task, isImportant: !task.isImportant },
//     });
//   };

//   return toggleImportant;
// };

// export const useToggleImportant = () => {
//   let X = 3;
//   return X;
// };
