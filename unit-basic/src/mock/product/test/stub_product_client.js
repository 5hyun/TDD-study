// stub는 실제 클래스지만 네트워크에 의존하지 않는다.
class StubProductClient {
  async fetchItems() {
    return [
      { item: "🥛", available: true },
      { item: "🍌", available: false },
    ];
  }
}

module.exports = StubProductClient;
