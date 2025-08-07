type Product = {
    id: string;
    name: string;
    price: number;
};

type OrderItem = {
    product: Product;
    quantity: number;
};

type Order = {
    orderId: string;
    customerName: string;
    items: OrderItem[];
    note?: string;
};

function calculateOrderTotal(order: Order) {
    let total = 0;
    for (const item of order.items) {
        total += item.product.price * item.quantity;
    }
    return total;
}

function printOrder(order: Order) {
    console.log("Đơn hàng: #" + order.orderId);
    console.log("Khách hàng: " + order.customerName);
    console.log("Sản phẩm:");

    for (const item of order.items) {
        const itemTotal = item.product.price * item.quantity;
        console.log("- " + item.product.name + " × " + item.quantity + " → " + itemTotal.toLocaleString() + " VND");
    }

    const total = calculateOrderTotal(order);
    console.log("Tổng cộng: " + total.toLocaleString() + " VND");

    if (order.note) {
        console.log("Ghi chú: " + order.note);
    }
}

// Dữ liệu sản phẩm
const aoSoMi: Product = { id: "P01", name: "Áo sơ mi", price: 250000 };
const quanTay: Product = { id: "P02", name: "Quần tây", price: 400000 };

// Đơn hàng mẫu
const order: Order = {
    orderId: "ORD001",
    customerName: "Nguyễn Văn A",
    items: [
        { product: aoSoMi, quantity: 2 },
        { product: quanTay, quantity: 1 }
    ],
    note: "Giao sau 18h"
};

// In đơn hàng
printOrder(order);
