var array1 = [];
var array2 = [];
var pos = 0;
while (pos < 4) {

    for (let i = 0; i <= pos; i++) {

        var rnum = Math.floor(4 * Math.random());

        document.addEventListener("click", () => {
            $(this).addClass("pressed");
            setTimeout(() => $(".btn").removeClass("pressed"), 120);
        });


        switch (rnum) {

            case 0:
                $("#green").fadeOut(100).fadeIn(100);
                Add("green");
                break;
            case 1:
                $("#red").fadeOut(100).fadeIn(100);
                Add("red");
                break;
            case 2:
                $("#yellow").fadeOut(100).fadeIn(100);
                Add("yellow");
                break;
            case 3:
                $("#blue").fadeOut(100).fadeIn(100);
                Add("blue");
                break;
        }
    }
    pos++;
}

$("#green").click(() => {
    Add2("green");
    var G = new Audio("sounds/green.mp3");
    G.play();
});
$("#red").click(() => {
    Add2("red");
    var R = new Audio("sounds/red.mp3");
    R.play();
});
$("#blue").click(() => {
    Add2("blue");
    var B = new Audio("sounds/blue.mp3");
    B.play();
});
$("#yellow").click(() => {
    Add2("yellow");
    var Y = new Audio("sounds/yellow.mp3");
    Y.play();
});

function Add(item) {
    array1 += item;
}

function Add2(item2) {
    array2 += item2;
}