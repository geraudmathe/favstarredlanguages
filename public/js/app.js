App = Ember.Application.create()

App.Router.map(function(){
  this.route("home", {path: "/"})
  this.route("user", {path: "user/:username"})
})

App.UserRoute = Ember.Route.extend({
  model:function(params){
    console.log(params)
  }
});

App.ApplicationController = Ember.ObjectController.extend({
  username: null,
  submit: function(){
    username = this.get("username");
    this.transitionToRoute("user", username);
  }
})