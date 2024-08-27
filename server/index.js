import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import multer from "multer";
import rateLimit from "express-rate-limit";
import hpp from "hpp";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import router from "./routes/api.js";
import {
  PORT,
  MONGODB_CONNECTION,
  WEB_CACHE,
  REQUEST_LIMIT_NUMBER,
  REQUEST_LIMIT_TIME,
  URL_ENCODED,
  MAX_JSON_SIZE,
} from "./app/config/config.js";

const app = express();

// security  middleware
app.use(cors());
app.use(hpp());
app.use(helmet());
app.use(cookieParser());
// Request size limit
app.use(express.json({ limit: MAX_JSON_SIZE }));
app.use(express.urlencoded({ extended: URL_ENCODED }));
// Request rate limit
const limiter = rateLimit({
  windowMs: REQUEST_LIMIT_TIME,
  max: REQUEST_LIMIT_NUMBER,
});
app.use(limiter);
// web cache
app.set("etag", WEB_CACHE);

app.use("/", router);
app.listen(PORT, () => {
  console.log("It is listening on port 5500.");
});
