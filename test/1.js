describe("A suite", function () {
  it("contains spec with an expectation", function () {
    var foo = 1;
    foo++;
    foo++
    expect(foo).toBe(3);
  });
  it("sample 2", function () {
    var foo = 0;
    expect(foo).toBe(0);
  });
  it("has angular", function () {
    expect(angular).not.toBe(null);
  });
});