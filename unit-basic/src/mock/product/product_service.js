class ProductService {
  // 의존성 주입의 원칙을 유지하기 위해 productClient를 외부에서 받아온다.
  constructor(productClient) {
    this.productClient = productClient;
  }

  // 외부에서 주어진 것을 사용하여 의존성을 역전시킨다.
  fetchAvailableItems() {
    return this.productClient
      .fetchItems()
      .then((items) => items.filter((item) => item.available));
  }
}

module.exports = ProductService;
