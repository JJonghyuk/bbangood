import express from "express"

const rootRouter = express.Router();

rootRouter.get("/logout", (req, res) => {
  return res.render("logout")
})

export default rootRouter;