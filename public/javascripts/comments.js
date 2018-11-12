$(document).ready(function(){
  $("#postComment").click(function(){
      console.log("Add comment button clicked.");
      var myobj = {Name:$("#name").val(),Comment:$("#comment").val()};
      jobj = JSON.stringify(myobj);
      $("#json").text(jobj);
      
      var url = "comment";
      $.ajax({
      url:url,
      type: "POST",
      data: jobj,
      contentType: "application/json; charset=utf-8",
      success: function(data,textStatus) {
          $("#done").html(textStatus);
          $("#comments").html('');
      }
      })
      
  });
  
  $("#deleteComments").click(function(){
      console.log("Delete comments button clicked.");
      var url = "delete";
      $.ajax({
      url:url,
      type: "DELETE",
      success: function(data,textStatus) {
          $("#comments").html('');
          $("#json").html('');
          $("#done").html('Successful deletion');
      }
      });
      
  });

  $("#getComments").click(function() {
    $.getJSON('comment', function(data) {
      console.log("Get comments button clicked.");
      var everything = "<ul>";
      for(var comment in data) {
        com = data[comment];
        everything += "<li> Name: " + com.Name + " -- Comment: " + com.Comment + "</li>";
      }
      everything += "</ul>";
      $("#comments").html(everything);
      $("#json").html('');
      $("#done").html('');
    });
  });
  
  $("#searchComments").click(function() {
    var myobj = $("#search").val();
    $.getJSON('comment', function(data) {
      console.log("Search button clicked.");
      var everything = "<ul>";
      for(var comment in data) {
        com = data[comment];
        var name = data[comment].Name;
        if (name.toLowerCase().includes(myobj.toLowerCase())) {
          everything += "<li> Name: " + com.Name + " -- Comment: " + com.Comment + "</li>";
        }
      }
      everything += "</ul>";
      $("#matches").html(everything);
      $("#json").html('');
      $("#done").html('');
    });
  });
});