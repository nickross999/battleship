const closures = require("./closures");

test("closure variables are references", () => {
    let arr = ["1"]
    let testClosure = closures.returnName(arr);
    arr[0] = "2";
    expect(testClosure()).toBe("2");
})