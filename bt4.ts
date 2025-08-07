function hamKiemtra(value: string | number) {
    if (typeof value === "string") {
        console.log(value.length + " ký tự");
    } else if (typeof value === "number") {
        if (value % 2 === 0) {
            console.log("Đây là số chẵn");
        } else {
            console.log("Đây là số lẻ");
        }
    }
}
hamKiemtra(5);
hamKiemtra("iaihafhauhfukhki4");
hamKiemtra(778823);