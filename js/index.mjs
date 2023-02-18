import { deletePost } from "./api/posts/deleteposts.mjs";
import { setCreatePostForm } from "./forms/createPosts.mjs";
import { readPosts } from "./api/posts/readposts.mjs";

// posts

// Create Post
setCreatePostForm();

// read posts
readPosts();
