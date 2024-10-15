import express from "express"

const rootRouter = express.Router();

rootRouter.get("/", (req, res) => {
  return res.render("home",{pageTitle: "빵지도", siteTitle: "홈"})
})
rootRouter.get("/login", (req, res) => {
  return res.render("login")
})

export default rootRouter;