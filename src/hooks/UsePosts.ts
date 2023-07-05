import {useMemo} from "react";
import {IPost} from "../types/Post";

export const useSortedPosts = (sort: string, posts: IPost[]): IPost[] => {
   const sortedPosts = useMemo(() => {
      if (sort) {
         // @ts-ignore
         return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
      }
      return posts;

   }, [posts, sort]);

   return sortedPosts;
}

export const usePosts = (sort: string, query: string, posts: IPost[]) => {
   const sortedPosts = useSortedPosts(sort, posts);

   const searchedAndSortedPosts = useMemo(() => {
      return [...sortedPosts].filter(post => post.title.toLowerCase().includes(query.toLowerCase()));
   }, [sortedPosts, query]);

   return searchedAndSortedPosts;
}
