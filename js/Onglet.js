$(".btn").click(function(e){
    $(".btn").removeClass("active");
    e.preventDefault();
    $(".content").hide();
    let index = $(".btn").index(this);
    $(".content").eq(index).show();
    $(".btn").eq(index).addClass("active");
});

$(".btn").eq(0).addClass("active");
$(".content").hide();
$(".content").eq(0).show();
