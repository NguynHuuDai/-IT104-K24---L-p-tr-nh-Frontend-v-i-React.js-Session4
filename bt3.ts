type Students = {
    name: string,
    age: number,
    email: string,
}
const students: Students[] = [

    {
        name: "Đại",
        age: 19,
        email: `daizzt10@gmail.com`,
    }
];

console.log(`Tên tôi là ${students[0]?.name},tôi ${students[0]?.age} tuổi và email của tôi là ${students[0]?.email}`);