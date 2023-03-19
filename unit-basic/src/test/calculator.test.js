const Calculator = require("../calculator");

describe("calculator", () => {
  //  모든 테스트는 각각 독립적으로 실행되어야한다.
  //  그렇기에 테스트 시작 전, 후에 공통으로 세팅을 하고 싶으 beforeEach, afterEach를 사용하면 된다.

  let cal;
  beforeEach(() => {
    cal = new Calculator();
  });

  it("inits with 0", () => {
    expect(cal.value).toBe(0);
  });

  it("sets", () => {
    cal.set(9);

    expect(cal.value).toBe(9);
  });

  it("clear", () => {
    cal.set(9);
    cal.clear();

    expect(cal.value).toBe(0);
  });

  it("adds", () => {
    cal.set(1);
    cal.add(2);

    expect(cal.value).toBe(3);
  });

  it("add should throw an error if value is greater than 100", () => {
    expect(() => {
      cal.add(101);
    }).toThrow("Value can not be greater than 100");
  });

  it("subtracts", () => {
    cal.subtract(1);

    expect(cal.value).toBe(-1);
  });

  it("multiplies", () => {
    cal.set(5);
    cal.multiply(4);

    expect(cal.value).toBe(20);
  });

  describe("divides", () => {
    it("0 / 0 === NaN", () => {
      cal.divide(0);
      expect(cal.value).toBe(NaN);
    });

    it("1 / 0 === Infinity", () => {
      cal.set(1);
      cal.divide(0);

      expect(cal.value).toBe(Infinity);
    });
  });
});