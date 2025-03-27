import type { ErrorHandler } from "hono";
import type { ContentfulStatusCode } from "hono/utils/http-status";

import env from "../env";
import { INTERNAL_SERVER_ERROR, OK } from "../lib/http-status-codes";

const onError: ErrorHandler = (err, c) => {
  const currentStatus = "status" in err
    ? err.status
    : c.newResponse(null).status;
  const statusCode = currentStatus !== OK
    ? (currentStatus as ContentfulStatusCode)
    : INTERNAL_SERVER_ERROR;
  const enviroment = c.env?.NODE_ENV || env?.NODE_ENV;
  const errStack = err.stack?.split("\n");

  return c.json(
    {
      message: err.message,

      stack: enviroment === "production"
        ? undefined
        : errStack,
    },
    statusCode,
  );
};

export default onError;
