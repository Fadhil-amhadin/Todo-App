export const dateConvert = (date) => {
    const dateCont = date ? date.toString() : "------------------"
    const cont = dateCont.slice(0, 10)
    const contTwo = cont.split("-")
    
    const month = {
        "01": "January",
        "02": "February",
        "03": "March",
        "04": "April",
        "05": "May",
        "06": "June",
        "07": "July",
        "08": "August",
        "09": "September",
        "10": "October",
        "11": "November",
        "12": "December",
    }
    let newDate = `${contTwo[2]} ${month[contTwo[1]]} ${contTwo[0]}`

    return newDate
}

export const timeConvert = (date) => {
    const dateCont = date ? date.toString() : "------------------"
    const time = dateCont.slice(11, 16)
    return time
}