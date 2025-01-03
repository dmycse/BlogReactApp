import express from "express";
import connectDB from "./lib/connectDB.js";

import userRouter from "./routes/user.route.js";
import postRouter from "./routes/post.route.js";
import commentRouter from "./routes/comment.route.js";
import webhookRouter from "./routes/webhook.route.js";

import { clerkMiddleware } from "@clerk/express";


const app = express();

app.use(clerkMiddleware());
app.use("/webhooks", webhookRouter);
app.use(express.json());

// app.get("/protect", (req, res) => {
//   const { userId } = req.auth;

//   if (userId) {    
//     return res.status(401).json({ message: "Unauthorized" });
//   }

//   return res.status(200).json("content");
// });

app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/comments", commentRouter);

// Error handler (for Express.js v.5+)
app.use((err, req, res, next) => {
  console.log(err);
  res
    .status(err.status || 500)
    .json(
      { 
        message: err.message || "Something went wrong",
        status: err.status || 500
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  connectDB();
  console.log('\x1b[36m%s\x1b[0m', `Server is running. Port: ${PORT}`);
});