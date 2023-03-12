import NextCors from "nextjs-cors";
import { NextApiHandler } from "next";

export default function withNextCors(handler: NextApiHandler): NextApiHandler {
  return async function nextApiHandlerWrappedWithNextCors(req, res) {
    const methods = ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"];
    await NextCors(req, res, {
      methods,
      origin: "*",
      optionsSuccessStatus: 200,
    });

    return handler(req, res);
  };
}
