import request from "supertest";
import { app, HTTP_STATUSES } from "../../src";
import { CreateCourseModel } from "../../src/models/CreateCourseModel";
import { UpdateCourseModel } from "../../src/models/UpdateCourseModel";

describe("/course", () => {
    beforeAll(async () => {
        await request(app).delete("/__test__/data");
    });

    it("should return 200 and empty array", async () => {
        await request(app).get("/courses").expect(HTTP_STATUSES.OK_200, []);
    });
    it("should return 404 for not existing course", async () => {
        await request(app).get("/courses/1").expect(HTTP_STATUSES.NOT_FOUND_404);
    });
    it("should NOT create course with incorrect input data", async () => {
        const data: CreateCourseModel = { title: "" };
        await request(app)
            .post("/courses")
            .send(data)
            .expect(HTTP_STATUSES.BAD_REQUEST_400);
        await request(app).get("/courses").expect(HTTP_STATUSES.OK_200, []);
    });
    let createdCourse1: any = null;
    it("should create course with correct input data", async () => {
        const data: CreateCourseModel = { title: "it-incubator course" };
        const createResponse = await request(app)
            .post("/courses")
            .send(data)
            .expect(HTTP_STATUSES.CREATED_201);
        createdCourse1 = createResponse.body;
        expect(createdCourse1).toEqual({
            id: expect.any(Number),
            title: "it-incubator course",
        });
        await request(app)
            .get("/courses")
            .expect(HTTP_STATUSES.OK_200, [createdCourse1]);
    });
    let createdCourse2: any = null;
    it("should create one more course", async () => {
        const data: CreateCourseModel = { title: "it-incubator course 2" };
        const createResponse = await request(app)
            .post("/courses")
            .send(data)
            .expect(HTTP_STATUSES.CREATED_201);
        createdCourse2 = createResponse.body;
        expect(createdCourse2).toEqual({
            id: expect.any(Number),
            title: data.title,
        });
        await request(app)
            .get("/courses")
            .expect(HTTP_STATUSES.OK_200, [createdCourse1, createdCourse2]);
    });
    it("should NOT update course with incorrect input data", async () => {
        const data: CreateCourseModel = { title: "" };
        await request(app)
            .put("/courses/" + createdCourse1.id)
            .send(data)
            .expect(HTTP_STATUSES.BAD_REQUEST_400);
        await request(app)
            .get("/courses/" + createdCourse1.id)
            .expect(HTTP_STATUSES.OK_200, createdCourse1);
    });
    it("should NOT update course that not exist", async () => {
        await request(app)
            .put("/courses/" + -100)
            .send({ title: "good title" })
            .expect(HTTP_STATUSES.NOT_FOUND_404);
    });
    it("should update course with correct input data", async () => {
        const data: UpdateCourseModel = { title: "good new title" };
        await request(app)
            .put("/courses/" + createdCourse1.id)
            .send({ title: "good new title" })
            .expect(HTTP_STATUSES.NO_CONTENT_204);

        await request(app)
            .get("/courses/" + createdCourse1.id)
            .expect(HTTP_STATUSES.OK_200, {
                ...createdCourse1,
                title: data.title,
            });

        await request(app)
            .get("/courses/" + createdCourse2.id)
            .expect(HTTP_STATUSES.OK_200, createdCourse2);
    });
    it("should delete both courses", async () => {
        await request(app)
            .delete("/courses/" + createdCourse1.id)
            .expect(HTTP_STATUSES.NO_CONTENT_204);

        await request(app)
            .get("/courses/" + createdCourse1.id)
            .expect(HTTP_STATUSES.NOT_FOUND_404);

        await request(app)
            .delete("/courses/" + createdCourse2.id)
            .expect(HTTP_STATUSES.NO_CONTENT_204);

        await request(app)
            .get("/courses/" + createdCourse2.id)
            .expect(HTTP_STATUSES.NOT_FOUND_404);

        await request(app)
            .get("/courses")
            .expect(HTTP_STATUSES.OK_200, []);
    });
});