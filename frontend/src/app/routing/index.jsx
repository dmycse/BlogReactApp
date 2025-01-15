import { createBrowserRouter } from "react-router-dom";

import { MainLayout } from "../layouts";
import { Homepage } from "@/view/homePage";
import { CreatePostPage } from "@/view/createPostPage";
import { PostsListPage } from "@/view/postsListPage";
import { PostPage } from "@/view/postPage";
import { LoginPage } from "@/view/loginPage";

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