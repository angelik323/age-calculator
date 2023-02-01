const Months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const SelectedDiv = document.getElementById('Year');
const SelectedDiv1 = document.getElementById('Month');
const SelectedDiv2 = document.getElementById('Day');
const SelectedDiv3 = document.getElementById('Month1');
const SelectedDiv4 = document.getElementById('Day1');
const Op = document.getElementById('M_d');
const Op1 = document.getElementById('N_b');

console.log(Op)
console.log((new Date()).getMonth());

let CurrentYear = (new Date()).getFullYear();
let CurrentMonth = (new Date()).getMonth() + 1;
let CurrentDate = (new Date()).getDate();

if(CurrentDate < 10) {
    CurrentDate = "0" + CurrentDate;
}
if(CurrentMonth < 10) {
    CurrentMonth = "0" + CurrentMonth;
}
document.getElementById('Today_date').value = CurrentYear + "-" + CurrentMonth + "-" + CurrentDate;

function AgeCalculate() {
    let MyBirth = document.getElementById("Date").value;
    //const date = Temporal.now.plainDateISO();
    //console.log("este es el nuevo mes: ", date.month);
    const today = new Date();
    const CurrentYear = today.getFullYear();
    const CurrentMonth = today.getMonth() + 1;
    const CurrentDate = today.getDate();
    if(MyBirth != "") {
        let inputDate = new Date(MyBirth);
        let BirthMonth, BirthDate, BirthYear;
        let BirthDetails = {
            Date: inputDate.getDate(),
            Month: inputDate.getMonth() + 1,
            Year: inputDate.getFullYear()
        }
        if(CurrentYear % 4 === 0 || (CurrentYear % 100 === 0 && CurrentYear % 400 === 0)) {
            Months[1] = 29;
        }
        else {
            Months[1] = 28;
        }
        BirthYear = CurrentYear - BirthDetails.Year;
        if(CurrentMonth >= BirthDetails.Month) {
            BirthMonth = CurrentMonth - BirthDetails.Month;
        }
        else {
            BirthYear--;
            BirthMonth = 12 + CurrentMonth - BirthDetails.Month;
        }
        if(CurrentDate >= BirthDetails.Date) {
            BirthDate = CurrentDate - BirthDetails.Date;
        }
        else {
            BirthMonth--;
            let Days = Months[CurrentMonth - 2];
            BirthDate = Days + CurrentDate - BirthDetails.Date;
            if(BirthMonth < 0) {
                BirthMonth = 11;
                BirthYear--;
            }
        }
        SelectedDiv.innerText = BirthYear;
        SelectedDiv1.innerText = BirthMonth;
        SelectedDiv2.innerText = BirthDate;
        SelectedDiv3.innerText = 11 - BirthMonth;
        SelectedDiv4.innerText = Months[CurrentMonth] - BirthDate;
        Op.style.opacity = '1';
        Op1.style.opacity = '1';
    }
}