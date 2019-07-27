import supertest, { SuperTest, Test } from "supertest";

import app from "./app";

describe("app", () => {
  let request: SuperTest<Test>;

  beforeEach(() => {
    request = supertest(app.listen());
  });

  it("should response with status 200 on GET /", async () => {
    const response = await request.get("/");

    expect(response.status).toBe(200);
  });

  it('should respond with correct body"}', async () => {
    const body = { message: "SUCCESS" };
    const response = await request.get("/");

    expect(response.body).toMatchObject(body);
  });
});
