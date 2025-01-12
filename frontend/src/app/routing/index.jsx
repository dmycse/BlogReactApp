import { createBrowserRouter } from "react-router-dom";

import { MainLayout } from "../layouts";
import { 
  Homepage, 
  PostsListPage, 
  SinglePostPage, 
  CreatePostPage, 
  LoginPage, 
  // RegisterUserPage, 
  // AboutPage
} from "@/pages";


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
        element: <SinglePostPage />,
      },
      {
        path: "/write",
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