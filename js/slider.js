const nmbr_img = 3;
const taille_img = 450;

var can_click = true;

function switch_pic(elemparent, to_add){
    if(can_click == false){
        this.stopImmediatePropagation();
        this.stopPropagation();
        return false;
    }
    can_click = false;
    imgs_div = elemparent.querySelector(".images");
    actual = $(imgs_div).css("left");
    nmbr = parseInt(actual.substr(0, (actual.length-2)));

    new_left = nmbr+(to_add*taille_img);
    if(new_left < -(taille_img*(nmbr_img-1))){
        new_left = 0;
    }else if (new_left > 0){
        new_left = -(taille_img*(nmbr_img-1));
    }

    $(imgs_div).css("left", (new_left)+"px");

    setTimeout(function () {
        can_click = true;
    }, 1000);
}

$(".slider_right").click(function () {
        elemparent = this.parentNode.parentNode.parentNode;
    switch_pic(elemparent, -1);
});
$(".slider_left").click(function () {
    elemparent = this.parentNode.parentNode.parentNode;
    switch_pic(elemparent, 1);
});