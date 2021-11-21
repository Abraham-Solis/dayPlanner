$(".btn").on("click", function () {
  var id = $(this).attr("id").split("-")[0]
  var plan = $("#" + id + "-txt").val()
  console.log(id, plan)
  localStorage.setItem(id, plan)

})

var CurrentDate = moment().format('MMMM Do YYYY, h:mm:ss a')
$("#currentDay").text(CurrentDate)

var CurrentHour = moment().hours()
console.log(CurrentDate, CurrentHour)

for (let i = 8; i < 17; i++) {
  var chose = localStorage.getItem(i)
  $("#" + i + "-txt").val(chose)
  if (i < CurrentHour) {
    $("#" + i + "-txt").addClass("past")

  }

  else if (i === CurrentHour) {
    $("#" + i + "-txt").addClass("present")

  }

  else {
    $("#" + i + "-txt").addClass("future")
  }

}
