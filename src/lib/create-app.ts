import { OpenAPIHono } from "@hono/zod-openapi";

import type { Bindings } from "./types";

import onError from "../routes/_error";
import notFound from "../routes/_not-found";
import { renderer } from "../routes/_renderer";
import defaultHoook from "./default-hook";

export function createRouter() {
  return new OpenAPIHono<Bindings>({
    strict: false,
    defaultHook: defaultHoook,
  });
}

export default function createApp() {
  const app = createRouter();

  app.use(renderer);

  app.notFound(notFound);
  app.onError(onError);

  return app;
}
