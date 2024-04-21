export interface Post {
  id?: number;
  title: string;
  body: string;
}

//  used for creating new blog posts
export type PostNew = Omit<Post, "id">;
