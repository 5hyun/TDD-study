const fetchProduct = require("../async");

describe("Async", () => {
  // done을 하지 않으면 비동기 함수가 수행되기 전에 jest가 테스트를 해버림
  it("async - done", (done) => {
    fetchProduct().then((item) => {
      expect(item).toEqual({ item: "Milk", price: 200 });
      done();
    });
  });

  // done 방식보다는 return 방식이 더 빨리 수행되고 깔끔하다
  it("async - return", () => {
    return fetchProduct().then((item) => {
      expect(item).toEqual({ item: "Milk", price: 200 });
    });
  });

  it("async - await", async () => {
    const product = await fetchProduct();
    expect(product).toEqual({ item: "Milk", price: 200 });
  });

  it("async - resolves", () => {
    return expect(fetchProduct()).resolves.toEqual({
      item: "Milk",
      price: 200,
    });
  });

  it("async - reject", () => {
    return expect(fetchProduct("error")).rejects.toBe("network error");
  });
});
