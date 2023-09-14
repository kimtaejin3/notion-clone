import PostList from "./PostList";

export default function PostPage({ $target }) {
  const $page = document.createElement("div");

  new PostList();
}
