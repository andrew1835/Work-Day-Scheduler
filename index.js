console.log(moment().format('h:mm:ss a'))
console.log(moment().format('h'))

$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm a'))



var first = $("#first")
console.log($(first).text().charAt(0))

if ($(first).text().charAt(0) === moment().format('h')) {
    $("#nine").css("background-color", "red")
    $("#ten").css("background-color", "green")
    $("#eleven").css("background-color", "green")
    $("#twelve").css("background-color", "green")
    $("#one").css("background-color", "green")
    $("#two").css("background-color", "green")
    $("#three").css("background-color", "green")
    $("#four").css("background-color", "green")
    $("#five").css("background-color", "green")

}


var second = $("#second")
console.log($(second).text().charAt(0))

if ($(second).text().charAt(0) === moment().format('h')) {
    $("#nine").css("background-color", "grey")
    $("#ten").css("background-color", "red")
    $("#eleven").css("background-color", "green")
    $("#twelve").css("background-color", "green")
    $("#one").css("background-color", "green")
    $("#two").css("background-color", "green")
    $("#three").css("background-color", "green")
    $("#four").css("background-color", "green")
    $("#five").css("background-color", "green")

}


var third = $("#third")
console.log($(third).text().charAt(0))

if ($(third).text().charAt(0) === moment().format('h')) {
    $("#nine").css("background-color", "grey")
    $("#ten").css("background-color", "grey")
    $("#eleven").css("background-color", "red")
    $("#twelve").css("background-color", "green")
    $("#one").css("background-color", "green")
    $("#two").css("background-color", "green")
    $("#three").css("background-color", "green")
    $("#four").css("background-color", "green")
    $("#five").css("background-color", "green")

}


var fourth = $("#fourth")
console.log($(fourth).text().charAt(0))

if ($(fourth).text().charAt(0) === moment().format('h')) {
    $("#nine").css("background-color", "grey")
    $("#ten").css("background-color", "grey")
    $("#eleven").css("background-color", "grey")
    $("#twelve").css("background-color", "red")
    $("#one").css("background-color", "green")
    $("#two").css("background-color", "green")
    $("#three").css("background-color", "green")
    $("#four").css("background-color", "green")
    $("#five").css("background-color", "green")

}


var fifth = $("#fifth")
console.log($(fifth).text().charAt(0))

if ($(fifth).text().charAt(0) === moment().format('h')) {
    $("#nine").css("background-color", "grey")
    $("#ten").css("background-color", "grey")
    $("#eleven").css("background-color", "grey")
    $("#twelve").css("background-color", "grey")
    $("#one").css("background-color", "red")
    $("#two").css("background-color", "green")
    $("#three").css("background-color", "green")
    $("#four").css("background-color", "green")
    $("#five").css("background-color", "green")

}


var sixth = $("#sixth")
console.log($(sixth).text().charAt(0))

if ($(sixth).text().charAt(0) === moment().format('h')) {
    $("#nine").css("background-color", "grey")
    $("#ten").css("background-color", "grey")
    $("#eleven").css("background-color", "grey")
    $("#twelve").css("background-color", "grey")
    $("#one").css("background-color", "grey")
    $("#two").css("background-color", "red")
    $("#three").css("background-color", "green")
    $("#four").css("background-color", "green")
    $("#five").css("background-color", "green")

}


var seventh = $("#seventh")
console.log($(seventh).text().charAt(0))

if ($(seventh).text().charAt(0) === moment().format('h')) {
    $("#nine").css("background-color", "grey")
    $("#ten").css("background-color", "grey")
    $("#eleven").css("background-color", "grey")
    $("#twelve").css("background-color", "grey")
    $("#one").css("background-color", "grey")
    $("#two").css("background-color", "grey")
    $("#three").css("background-color", "red")
    $("#four").css("background-color", "green")
    $("#five").css("background-color", "green")

}


var eighth = $("#eighth")
console.log($(eighth).text().charAt(0))

if ($(eighth).text().charAt(0) === moment().format('h')) {
    $("#nine").css("background-color", "grey")
    $("#ten").css("background-color", "grey")
    $("#eleven").css("background-color", "grey")
    $("#twelve").css("background-color", "grey")
    $("#one").css("background-color", "grey")
    $("#two").css("background-color", "grey")
    $("#three").css("background-color", "grey")
    $("#four").css("background-color", "red")
    $("#five").css("background-color", "green")

}
var ninth = $("#ninth")
console.log($(ninth).text().charAt(0))

if ($(ninth).text().charAt(0) === moment().format('h')) {
    $("#nine").css("background-color", "grey")
    $("#ten").css("background-color", "grey")
    $("#eleven").css("background-color", "grey")
    $("#twelve").css("background-color", "grey")
    $("#one").css("background-color", "grey")
    $("#two").css("background-color", "grey")
    $("#three").css("background-color", "grey")
    $("#four").css("background-color", "grey")
    $("#five").css("background-color", "red")

}


var nine = $("#nine")
var btn1 = $("#btn1")
$(btn1).on("click", function () {
    // console.log($(nine).val())
    localStorage.setItem("nine", $(nine).val())
})
$(nine).val(localStorage.getItem("nine"))


var ten = $("#ten")
var btn2 = $("#btn2")
$(btn2).on("click", function () {
    // console.log($(nine).val())
    localStorage.setItem("ten", $(ten).val())
})
$(ten).val(localStorage.getItem("ten"))


var eleven = $("#eleven")
var btn3 = $("#btn3")
$(btn3).on("click", function () {
    // console.log($(eleven).val())
    localStorage.setItem("eleven", $(eleven).val())
})
$(eleven).val(localStorage.getItem("eleven"))


var twelve = $("#twelve")
var btn4 = $("#btn4")
$(btn4).on("click", function () {
    // console.log($(twelve).val())
    localStorage.setItem("twelve", $(twelve).val())
})
$(twelve).val(localStorage.getItem("twelve"))


var one = $("#one")
var btn5 = $("#btn5")
$(btn5).on("click", function () {
    // console.log($(one).val())
    localStorage.setItem("one", $(one).val())
})
$(one).val(localStorage.getItem("one"))


var two = $("#two")
var btn6 = $("#btn6")
$(btn6).on("click", function () {
    // console.log($(two).val())
    localStorage.setItem("two", $(two).val())
})
$(two).val(localStorage.getItem("two"))


var three = $("#three")
var btn7 = $("#btn7")
$(btn7).on("click", function () {
    // console.log($(three).val())
    localStorage.setItem("three", $(three).val())
})
$(three).val(localStorage.getItem("three"))


var four = $("#four")
var btn8 = $("#btn8")
$(btn8).on("click", function () {
    // console.log($(four).val())
    localStorage.setItem("four", $(four).val())
})
$(four).val(localStorage.getItem("four"))


var five = $("#five")
var btn9 = $("#btn9")
$(btn9).on("click", function () {
    // console.log($(five).val())
    localStorage.setItem("five", $(five).val())
})
$(five).val(localStorage.getItem("five"))

// $(".middle").css("background-color", "aqua")
// $(".input").css("background-color", "aqua")


