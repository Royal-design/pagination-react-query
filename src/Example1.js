import { getPostsPage } from "./apis/axios";
import { useState, useEffect } from "react";
import Post from "./Post";

const Example1 = () => {
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // getPostsPage(page).then((json) => setPosts(json));
    const getData = async () => {
      try {
        const data = await getPostsPage(page);
        setPosts(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [page]);

  const content = posts.map((post) => <Post key={post.id} post={post} />);

  const nextPage = () => setPage((prev) => prev + 1);

  const prevPage = () => setPage((prev) => prev - 1);

  return (
    <>
      <nav>
        <button onClick={prevPage} disabled={page === 1}>
          Prev Page
        </button>
        <button onClick={nextPage} disabled={!posts.length}>
          Next Page
        </button>
      </nav>
      {content}
    </>
  );
};
export default Example1;
