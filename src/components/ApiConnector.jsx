import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
  }, [url]);
  return data;
};
export const TweetsApi = (id) => {
  const url =
    id === null
      ? "https://jsonplaceholder.typicode.com/posts/"
      : "https://jsonplaceholder.typicode.com/posts/" + id;

  const data = useFetch(url);
  return data;
};
export const UserApi = (id) => {
  const url = "https://jsonplaceholder.typicode.com/users?id=" + id;

  const data = useFetch(url);

  return { data };
};
export const ImgApi = (id) => {
  const url = "https://jsonplaceholder.typicode.com/photos?id=" + id;

  const data = useFetch(url);

  return { data };
};

export const CommentsaApi = () => {
  const url = "https://jsonplaceholder.typicode.com/comments";

  const data = useFetch(url);

  return data;
};
