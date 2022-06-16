import { rest } from "msw";

export const handlers = [
  // Handles a POST /authors request
  rest.post("/authors", (req, res, ctx) => {
    return res(
      // Delay for some time to simulate real world scenario
      ctx.delay(2000),
      // Respond with a 200 status code
      ctx.status(200)
    );
  }),
];
