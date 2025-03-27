import { createRoute } from "@hono/zod-openapi";

import { createRouter } from "../lib/create-app";
import jsonContent from "../lib/helpers/json-content";
import { createMessageObjectSchema } from "../lib/helpers/schema";
import * as HttpStatusCode from "../lib/http-status-codes";

const router = createRouter()
  .openapi(createRoute({
    // tags: ["index"],
    method: "get",
    path: "/",
    responses: {
      [HttpStatusCode.OK]: jsonContent (
        createMessageObjectSchema("Entropy API"),
        "Entropy API Index",
      ),
    },

  }), (c) => {
    return c.json({
      message: "Lorum Ipsum Dolar Sit Amit",
    }, HttpStatusCode.OK);
  });

export default router;
