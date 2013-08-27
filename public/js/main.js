// var redirectToUsername = function(form) {
//   $(form).on('submit', function(event) {
//     event.preventDefault();
//     var username = $(this).find('[name="username"]').val();
//     window.location.href = "/" + username;
//   });
// };

// $(function() {

//   redirectToUsername($("#nav-form"));

//   var radar_canvas = $("#radar-chart").get(0).getContext("2d");
//   var username = $("body").data('username');
//   $.getJSON('/' + username + '.json', function(json) {
//     new Chart(radar_canvas).Radar(json);
//   });

// });
