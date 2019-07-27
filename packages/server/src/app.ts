import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import session from "express-session";
import passport from "passport";

import checkSession from "@middleware/checkSession";
import routes from "@routes/index";

import { SESSION_SECRET } from "@util/secrets";

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
  })
);
app.use(passport.initialize());
app.use(checkSession);
app.use(routes);

export default app;
