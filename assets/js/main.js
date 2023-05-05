// root collapse
let mainRoot = document.getElementById("root")
let adminCollapse = document.getElementById("adminCollapse")

adminCollapse.addEventListener("click", function() {
    mainRoot.classList.toggle("smallroot")
    this.classList.toggle("activeColapse")
})

// notification
let notification = document.getElementById("notification")
let notificationBox = document.getElementById("notification_box")

window.addEventListener("click", function(e){
    if(e.target.id != "notification" && e.target.id != "notification_box"){
        notificationBox.classList.remove("activeN")
    }
})

notification.addEventListener("click", function() {
    notificationBox.classList.toggle("activeN")
})
