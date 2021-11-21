$(".btn").on("click" , function () {
  var id = $(this).attr("id").split("-")[0]
  var plan   = $("#" + id + "-txt").val()
  console.log(id, plan)
  localStorage.setItem(id, plan)
  
})

