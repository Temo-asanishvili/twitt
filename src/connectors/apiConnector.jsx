import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
  }, [url]);
  return data;
}
export const ApiImagesData = (id) => {
  const url = "https://jsonplaceholder.typicode.com/photos?id=" + id;

  const data = useFetch(url);

  return { data };
};

export const ApiCommentsData = () => {
  const url = "https://jsonplaceholder.typicode.com/comments";

  const data = useFetch(url);

  return data;
};

export const ApiPostsData = (id) => {
  const url = "https://jsonplaceholder.typicode.com/posts";

  const data = useFetch(url);

  return data;
};

export const ApiUsersData = (id) => {
  const url = "https://jsonplaceholder.typicode.com/users?id=" + id;

  const data = useFetch(url);

  return { data };
};
