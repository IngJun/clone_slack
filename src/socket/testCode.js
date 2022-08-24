var stompClient = null;
var notificationCount = 0;

$(document).ready(function () {
  console.log("Index page is ready");
  connect();

  $("#send").click(function () {
    sendMessage();
  });

  $("#send-private").click(function () {
    sendPrivateMessage();
  });

  $("#notifications").click(function () {
    resetNotificationCount();
  });
});

function connect() {
  var socket = new SockJS("/socket");
  stompClient = Stomp.over(socket);
  stompClient.connect({}, function (frame) {
    console.log("Connected: " + frame);
    updateNotificationDisplay();
    stompClient.subscribe("/sub/message/10", function (message) {
      showMessage(JSON.parse(message.body).content);
    });
  });
}

function showMessage(message) {
  $("#messages").append("<tr><td>" + message + "</td></tr>");
}

function sendMessage() {
  console.log("sending message");
  stompClient.send(
    "/pub/message/10",
    {},
    JSON.stringify({ message: $("#message").val() })
  );
}

function updateNotificationDisplay() {
  if (notificationCount == 0) {
    $("#notifications").hide();
  } else {
    $("#notifications").show();
    $("#notifications").text(notificationCount);
  }
}

function resetNotificationCount() {
  notificationCount = 0;
  updateNotificationDisplay();
}
