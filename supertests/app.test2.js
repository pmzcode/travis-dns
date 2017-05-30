
const request = require("supertest");

var app = require("../index").app;

var data = {
    "id": 1,
    "email": "sadad",
    "password": "adas",
    "admin": "1",
    "firstname": "daf",
    "lastname": "sfd",
    "createdAt": "2012-12-20T15:00:00.000Z",
    "updatedAt": "2012-12-20T15:00:00.000Z",
    "deletedAt": null
}

var domain = {name:"lehasm.ru",price:2000}

describe("Supertest domains",()=> {
    test("Return array with 200", function () {
        return request(app)
            .get("/api/domain")
            .expect(200).then((response)=>{
                expect(Array.isArray(response.body)).toBe(true);
            })
    });


    test("Return single domain with 200", function () {
        return request(app)
            .get("/api/domain/1")
            .expect(200).then((response)=>{
                expect(response.body.name).toBe("fggd");
            })
    });


    test("Post single domain with 200", function () {
        return request(app)
            .post("/api/domain/")
            .send(domain)
            .expect(200);

    });

    test("Delete single domain with 200", function () {
        return request(app)
            .delete("/api/domain/3")
            .expect(200);

    });

});

describe("Supertest users",()=> {


    test("Return array with 200", function () {
        return request(app)
            .get("/api/user")
            .expect(200).then((response)=>{
                expect(Array.isArray(response.body)).toBe(true);
            })
    });


    test("Return single user with 200", function () {
        return request(app)
            .get("/api/user/1")
            .expect(200).then((response)=>{
                expect(response.body).toEqual(data);
            })
    });

});


