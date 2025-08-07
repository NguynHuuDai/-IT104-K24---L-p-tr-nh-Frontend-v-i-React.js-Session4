type Product = {
    id: string;
    name: string;
    price: number;
    category: {
        id: string;
        name: string;
    };
    discount?: number; 
};
const listProduct: Product[] = [
    {
        id: "P001",
        name: "Áo thun nam",
        price: 200000,
        category: {
            id: "C001",
            name: "Thời trang"
        },
        discount: 10
    },
    {
        id: "P002",
        name: "Laptop Dell",
        price: 15000000,
        category: {
            id: "C002",
            name: "Điện tử"
        }
    },
    {
        id: "P003",
        name: "Giày thể thao",
        price: 1200000,
        category: {
            id: "C001",
            name: "Thời trang"
        },
        discount: 20
    }
];


function printProductInfo(product: Product) {
    console.log("Thông tin sản phẩm:");
    console.log("Tên:", product.name);
    console.log("Mã sản phẩm:", product.id);
    console.log("Danh mục:", product.category.name);
    console.log("Giá gốc:", product.price.toLocaleString(), "VND");

    if (product.discount) {
        console.log("Khuyến mãi:", product.discount + "%");
        console.log("Giá sau giảm:", getFinalPrice(product).toLocaleString(), "VND");
    } else {
        console.log("Sản phẩm không có khuyến mãi.");
    }

    console.log("\n \n \n");
}


function getFinalPrice(product: Product): number {
    if (product.discount) {
        return product.price * (1 - product.discount / 100);
    }
    return product.price;
}
console.log("🎉 Danh sách sản phẩm đang có:\n");

listProduct.forEach(function(product) {
    printProductInfo(product);
});


