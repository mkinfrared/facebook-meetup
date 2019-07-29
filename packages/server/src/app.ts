import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import session from "express-session";
import passport from "passport";

import "@config/passportSetup";
import routes from "@routes/index";

import { FRONTEND_URL, SESSION_SECRET } from "@util/secrets";

const app = express();

app.use(
  session({
    secret: SESSION_SECRET,
    resave: true,
    saveUninitialized: false,
    cookie: {
      sameSite: false,
      maxAge: 60 * 60 * 1000
    }
  })
);
app.use(
  cors({
    origin: FRONTEND_URL,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true
  })
);
app.use(bodyParser.json());
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());
app.use(routes);

export default app;
