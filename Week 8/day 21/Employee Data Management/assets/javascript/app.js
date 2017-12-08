  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDCkbjKeiiYTu4zm8z8m3_LLgk9mVfXcDw",
    authDomain: "day-21.firebaseapp.com",
    databaseURL: "https://day-21.firebaseio.com",
    projectId: "day-21",
    storageBucket: "day-21.appspot.com",
    messagingSenderId: "716230437596"
  };

  firebase.initializeApp(config);

  var database = firebase.database();

  database.ref("Employee Data Management").on("child_added", function(snapshot) {
      console.log(name);
      name = snapshot.val().EmployeeName;
      Role = snapshot.val().Role;
      StartDate = snapshot.val().StartDate;
      Rate = snapshot.val().Rate;

      $('.table').append('<tr>');
      $('#names').append('<td>'+ '<p>'+ name+ '</p>' + '</td>');
      $('#roles').append('<td>'+ '<p>'+ Role+ '</p>' + '</td>');
      $('#dates').append('<td>'+ '<p>'+ StartDate + '</p>' + '</td>');
      $('#rates').append('<td>'+ '<p>'+ Rate+ '</p>' + '</td>');

      // $('.table tr:last').after('<th>'+ name + '</th>' + '<th>'+ Role + '</th>' + '<th>'+ StartDate + '</th>' + '<th>'+ Rate + '</th>'); 
})

  database.ref().orderByChild("Employee Data Management").limitToLast(1).on("child_added", function(snap) {

      name = snap.val().EmployeeName;
      Role = snap.val().Role;
      StartDate = snap.val().StartDate;
      Rate = snap.val().Rate;
      // Change the HTML to reflect
      $('.table').append('<tr>');
      $('#names').append(name);
      $('#roles').append(Role);
      $('#dates').append(StartDate);
      $('#rates').append(Rate);
  });



  $('.submit').click(function(){
    var name = $(".name").val().trim();
    var role = $(".role").val().trim();
    var date = $(".date").val().trim();
    var rate = $(".rate").val().trim();

    database.ref("Employee Data Management").push({
      EmployeeName: name,
      Role: role,
      StartDate: date,
      Rate: rate
    })
  })

