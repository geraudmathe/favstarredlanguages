$(function() {

  redirectToUsername($("#nav-form"));

  var ctx = $("#chart").get(0).getContext("2d");
  var username = $("body").data('username');

  $.getJSON('/' + username + '.json', function(json) {
    new Chart(ctx).Radar(json);
  });

});

var redirectToUsername = function(form) {
  $(form).on('submit', function(event) {
    event.preventDefault();
    var username = $(this).find('[name="username"]').val();
    window.location.href = "/" + username;
  });
};
