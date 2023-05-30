import JoblyApi from "./api";

describe("company test", function() {
    test("get company works", async function() {
        const company = await JoblyApi.getCompany("boyd-evans");

        console.log("company", company);
    });
})