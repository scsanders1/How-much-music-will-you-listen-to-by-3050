let username;
let usernum;
let usergenre;
let multi = 36;
let year = 1029;

$(".submit").click(function() {
    username = $(".name").val();
    usergenre = $(".genre").val();
    usernum = Number($(".number").val());
    $(".results").html(username + " you will listen to " + (usernum + 1029) * 36 + " minutes of " + usergenre + " by the year 3050!!!").show();
});