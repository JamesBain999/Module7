import React from "react";
import { useEffect, useReducer } from "react";
import axios from "axios";
import { CircularProgress, Typography, Container, Paper } from "@mui/material";

export default function PostListReducer() {
  const [postsResult, dispatch] = useReducer(reducer, {
    loading: true,
    posts: [],
    error: "",
  });

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts?_limit=7")
      .then((response) => {
        dispatch({ type: "FETCH_SUCCESS", payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_ERROR", payload: error.message });
      });
  }, []);

  return (
    <Container maxWidth="md">
      <Paper
        elevation={3}
        className="PostList componentBox"
        style={{ padding: "16px" }}
      >
        {postsResult.loading ? (
          <CircularProgress />
        ) : (
          <>
            {postsResult.posts.map((post) => (
              <div className="post" key={post.id}>
                <Typography variant="h5" gutterBottom>
                  Post #{post.id}: {post.title}
                </Typography>
                <Typography variant="body1">{post.body}</Typography>
              </div>
            ))}
          </>
        )}
        <div className="error">
          {postsResult.error && (
            <Typography color="error">{postsResult.error}</Typography>
          )}
        </div>
      </Paper>
    </Container>
  );
}

function reducer(postsResult, action) {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return { loading: false, posts: action.payload, error: "" };
    case "FETCH_ERROR":
      return { loading: false, posts: [], error: action.payload };
    default:
      return { ...postsResult, loading: false };
  }
}
