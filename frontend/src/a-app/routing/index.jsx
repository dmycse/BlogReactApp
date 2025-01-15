import { createBrowserRouter } from "react-router-dom";

import { MainLayout } from "../layouts";
import { Homepage } from "@/b-pages/homePage";
import { CreatePostPage } from "@/b-pages/createPostPage";
import { PostsListPage } from "@/b-pages/postsListPage";
import { PostPage } from "@/b-pages/postPage";
import { LoginPage } from "@/b-pages/loginPage";

// import { 
 
//   PostsListPage, 
//   SinglePostPage, 
//   CreatePostPage, 

//   LoginPage, 
//   RegisterUserPage, 
//   AboutPage
// } from "@/pages";


export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/posts",
        element: <PostsListPage />,
      },
      {
        path: "/posts/:slug",
        element: <PostPage />,
      },
      {
        path: "/create-post",
        element: <CreatePostPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      // {
      //   path: "/register",
      //   element: <RegisterUserPage />,
      // },
      // {
      //   path: "/about",
      //   element: <AboutPage />,
      // },
    ],
  },
]);