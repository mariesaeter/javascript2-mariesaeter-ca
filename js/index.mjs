import { deletePost } from "./api/posts/deleteposts.mjs";
import { setCreatePostForm } from "./forms/createPosts.mjs";
import { readPost, readPosts } from "./api/posts/readposts.mjs";
import { displayPosts } from "./html/posts/displayPost.mjs";

// posts

// Create Post
setCreatePostForm();

// read posts
displayPosts();
