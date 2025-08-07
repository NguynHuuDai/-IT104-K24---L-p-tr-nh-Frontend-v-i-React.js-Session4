let diemSinhVien: number[] = [8.5, 7.2, 9.0, 6.8, 7.5, 8.0, 6.9, 9.2, 7.8, 8.3];
let num:number = 0;
diemSinhVien.forEach((diemSinhVien) => {
    num += diemSinhVien;
});
console.log(`Tong diem sinh vien la :${num.toFixed(2)}`);