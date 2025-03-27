import type { OpenAPIHono } from "@hono/zod-openapi";

export interface Bindings {
  Variables: {
    db: D1Database;
  };
}

export type AppOpenAPI = OpenAPIHono<Bindings>;
