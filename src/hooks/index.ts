import { useQuery } from "@tanstack/react-query";
// import { getAnimes } from "../services/anime/serviceAnime";

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

// export function useFetcher<T>(fetchedFunc: () => Promise<T>) {
//   return useQuery<T>({
//     queryKey: ["animes"],
//     queryFn: fetchedFunc,
//   });
// }

export function useFetcher<T>(fetcher: () => Promise<T>, queryKey: any[]) {
  return useQuery({
    queryKey,
    queryFn: fetcher,
  });
}



// export function useMutationGlobal(fetchedFunc: () => Promise<any>) {
//   const queryClient = useQueryClient();

//   return useMutation({
//     mutationFn: fetchedFunc,
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ["animes"] });
//     },
//   });
// }


// const [animes1, animes2] = new Promise.all([getAnimes, getAnimes])

// getAnimes
// getAnimes