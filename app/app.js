$('#myModal').modal('show');
var app = angular.module('myApp', []);
app.controller('mainCtrl', function () {
    this.name = "гість";
    this.changeIndex;
    this.Users = [
        {
            login: "Anna"
            , password: "221294"
	}
        ];
    this.postes = [{
        avtor: "Admin"
        , tema: "Hello"
        , date: new Date()
        , descr: "Hello! My friends"
        }];
    this.deleteElement = function (e) {
        this.postes.splice(e, 1)
    }
    this.changeElement = function (e) {
        this.changeIndex = e;
        $('#changeUsr').val(this.postes[e].tema)
        $('#changeCom').val(this.postes[e].descr)
        $("#change").modal("show")
    }
    this.change = function () {
        this.postes[this.changeIndex].tema = $('#changeUsr').val()
        this.postes[this.changeIndex].descr = $('#changeCom').val()
        $("#change").modal("hide")
    }
    this.addPost = function () {
        var Pos = {
            avtor: this.name
            , tema: $("#usr").val()
            , date: new Date()
            , descr: $("#comment").val()
        }
        this.postes.unshift(Pos);
        console.log(this.postes);
    }
    this.ent = function () {
        for (var i = 0; i < this.Users.length; i++) {
			console.log(this)
            if (this.Users[i].login == $("#login").val() && this.Users[i].password == $("#pwd").val()) {
                this.name = this.Users[i].login;
                $('.modal').modal('hide');
				console.log("b")
            }
            else {
                $("#wrongPass").css({
                    display: "block"
                })
                $("#login").val("");
                $("#pwd").val("");
            }
			
        }
    }
    this.mesWrong = function () {
        $("#wrongPass").css({
            display: "none"
        })
    }
});
