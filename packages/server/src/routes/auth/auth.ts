import { Router } from "express";
import passport from "passport";

import { FRONTEND_URL } from "@util/secrets";

const router = Router();

router.use(
  "/auth/facebook",
  passport.authenticate("facebook", { session: true })
);

router.use("/auth/facebook/callback", (req, res, next) => {
  passport.authenticate("facebook", {
    failureRedirect: FRONTEND_URL + "/fail",
    successRedirect: FRONTEND_URL + "/success"
  })(req, res, next);
});

router.get("/auth/user", (req, res) => {
  console.log("getting user");
  console.log("REq USER", req.user);
  if (req.user) {
    res.status(200).send(req.user);
    return;
  }

  res.status(401).send({ message: "User not authenticated" });
});

export default router;
