class formatHelper {
    static dateFormatter(date) {
        let day = `${date.getDate()}`.padStart(2, "0");
        return `${day}`
    }
}