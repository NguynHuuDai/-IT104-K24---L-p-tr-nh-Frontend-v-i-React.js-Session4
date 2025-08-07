type Person = {
    name: string;
    age: number;
};

type Employee = {
    employeeId: string;
    department: string;
};
type StaffMember = Person & Employee;

function printStaff(staff: StaffMember) {
    console.log(`Nhân viên: ${staff.name} (${staff.age} tuổi), Mã nhân viên: ${staff.employeeId} - Phòng: ${staff.department}`);
}
const staff: StaffMember = {
    name: "Nguyễn Văn Híu",
    age: 1900,
    employeeId: "EMP001",
    department: "Bất động sản"
};
printStaff(staff);