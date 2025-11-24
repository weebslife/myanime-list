import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

// export function useFetcher<T>({
//   fetchedFunc = getAnimes,
// }: {
//   fetchedFunc: (() => Promise<T>) | undefined;
// }) {
//   return useQuery<T>({
//     queryKey: ["animes"],
//     queryFn: fetchedFunc,
//   });
// }

export function useFetcher<T>(fetchedFunc: () => Promise<T>) {
  return useQuery<T>({
    queryKey: ["animes"],
    queryFn: fetchedFunc,
  });
}


export function useMutationGlobal(fetchedFunc: () => Promise<any>) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: fetchedFunc,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["animes"] });
    },
  });
}


// const [animes1, animes2] = new Promise.all([getAnimes, getAnimes])

// getAnimes
// getAnimes