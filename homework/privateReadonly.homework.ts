class ProductController {
  productService;

  constructor(productService) {
    this.productService = productService;
  }
  buyProduct(req, res) {
    this.productService.qqq();
  }
}

// 위의 상태에서 constructor에 private readonly 등 아무거나 추가하면 2번째와 5번쨰줄이 생략가능해짐
