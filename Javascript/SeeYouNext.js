//Steven Solution
const nextHappyYear = (year) => {
    let number = year + 1;
    let loop = false;
    while (loop === false) {
        let numbersArr = Array.from(number.toString()).map(Number);
        let setNumber = new Set(numbersArr);
        if (setNumber.size < 4) {
            number++;
        } else {
            return number;
        }
    }
}

//Eric Solution
function nextHappyYear(year) {
    //incrmented year
    year++;
    // create unique Set by converting year to string, splitting into String[], and mapping to Number[]
    let uniqueDigits = new Set(year.toString().split('').map(Number));

    //uniqueDigits.size < 4 = false which makes the loop continue
    while (uniqueDigits.size < 4) {
        year++;
        uniqueDigits = new Set(year.toString().split('').map(Number));
    }

    return year;
}

//Smart Guys Solution
function nextHappyYear(a) {
    // a = 1234;
    //++a increments before loop/continuing a++ would of incremented after loop
    while (new Set([...++a + '']).size < 4);
    // [...'1235'] === ['1','2','3','5']
    return a;
}