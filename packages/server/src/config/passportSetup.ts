import passport from "passport";
import { Profile, Strategy } from "passport-facebook";

import { users } from "@db/users";
import {
  FACEBOOK_APP_ID,
  FACEBOOK_APP_SECRET,
  FACEBOOK_CALLBACK_URL
} from "@util/secrets";

passport.serializeUser((user: Profile, done) => {
  done(null, user.id);
});

passport.deserializeUser((id: string, done) => {
  const user = users.find(elem => elem.id === id);

  done(null, user);
  // User.findById(id).then(user => {
  //   done(null, user);
  // });
});

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
    (accessToken, refreshToken, profile, done) => {
      const currentUser = users.find(user => user.id === profile.id);

      if (currentUser) {
        console.log("user is: ", currentUser);
        done(null, currentUser);
      } else {
        users.push(profile);
      }
    }
  )
);
