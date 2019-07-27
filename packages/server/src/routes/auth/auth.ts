import checkSession from "@middleware/checkSession";
import {
  FACEBOOK_APP_ID,
  FACEBOOK_APP_SECRET,
  FACEBOOK_CALLBACK_URL
} from "@util/secrets";
import { Router } from "express";
import passport from "passport";
import { Strategy } from "passport-facebook";

const router = Router();

passport.use(
  new Strategy(
    {
      clientID: FACEBOOK_APP_ID,
      clientSecret: FACEBOOK_APP_SECRET,
      callbackURL: FACEBOOK_CALLBACK_URL,
      profileFields: [
        "id",
        "displayName",
        "name",
        "gender",
        "picture.type(large)"
      ]
    },
    (accessToken, refreshToken, profile, cb) => {
      console.log(profile);
      cb(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((obj, cb) => {
  cb(null, obj);
});

router.get("/auth/facebook", checkSession, passport.authenticate("facebook"));
router.get("/auth/facebook/callback", (req, res, next) => {
  passport.authenticate("facebook", (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.send({
        message: info.message,
        userLoggedIn: null
      });
    }
    if (err) {
      return next(err);
    }

    if (req.session) {
      req.session.user = user;
    }

    res.send(user);
  })(req, res, next);
});

export default router;
