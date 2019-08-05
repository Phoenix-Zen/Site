
var page = "home";
var hash = $(location).attr('hash');
if(hash !== "")
    page = hash.substr(1);

$("body #container").load("/html_files/"+page+".html");


var t1 = new TimelineLite({paused : true});
$("header #home").click(function () {
    load("home");
});
$("header #about").click(function () {
    load("about");
});

function load(file_name) {
    if(t1.isActive()){
        return false;
    }
    t1.to('#container', 1,{
        transform: "rotateY(90deg)",
        ease: Power2.easeOut,
        onComplete: function () {
            $("body #container").load("/html_files/"+file_name+".html");
            $("body #container").css("margin-left", "-100%")
        }
    }).to('#container', 1, {
        marginLeft: "0",
        transform: "rotateY(0deg)",
        ease: Power1.easeOut,
        onComplete: function () {
            var hash = $(location).attr('hash').substr(1);
            if (hash !== file_name)
                load(hash);
        }
    }, "+= .3");
    t1.play();
}