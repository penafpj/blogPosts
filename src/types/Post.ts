export interface Post {
  id: string;
  title: string;
  body: string;
  completed: boolean;
  completionDate?: Date;
}

//  used for creating new blog posts
export type PostNew = Omit<Post, "id">;
