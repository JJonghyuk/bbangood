import express from "express"

const userRouter = express.Router();

userRouter.get("/logout", (req, res) => {
  return res.render("logout")
})

export default userRouter;