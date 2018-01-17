$(".color-white").click(function() {
    $(".color").css({ border: "2px solid transparent" });
   $(".color-white").css({ border: "2px solid #bebebe" });
  $(this).css({ border: "2px solid #ff6700" });
  $(".color").attr("msg", "");
  $(this).attr("msg", "XIAOMI MIJIA Electric Scooter цвет white");
  $(".img-scuter-color").css({ 'background-position': "0 0" });
});
$(".color-black").click(function() {
    $(".color").css({ border: "2px solid transparent" });
  $(".color-white").css({ border: "2px solid #bebebe" });
  $(this).css({ border: "2px solid #ff6700" });
  $(".color").attr("msg", "");
  $(this).attr("msg", "XIAOMI MIJIA Electric Scooter цвет black");
  $(".img-scuter-color").css({ 'background-position': "101.23% 0" });
});

$(".color_modal").click(function() {
  if ($(".color").attr("msg") == "") {
    $(".mesage").val("XIAOMI MIJIA Electric Scooter цвет black");
  } else {
    $(".mesage").val($(".color").attr("msg"));
  }
});
$(".home-buy_mord").click(function() {
  $(".mesage").val("Электросамокат XIAOMI MIJIA Electric Scooter");
});
$(".get_call").click(function() {
  $(".mesage").val("Заказали звонок Электросамокат XIAOMI MIJIA Electric Scooter");
});
$(".video-bg").click(function() {
  $(".video-bg").hide();
  $("#video").show();
  document.getElementById("video").play();
});
$("#video").click(function() {
  $(".pause-bg").show();
  document.getElementById("video").pause();
});
$(".pause-bg").click(function() {
  document.getElementById("video").play();
  $(".pause-bg").hide();
});
$(".input-mask").inputmask("+7 (999) 999-99-99");
$(".ul-click-led div").click(function() {
  var src = $(this).attr("put");
  
  $(".ul-click-led div").attr("style", "");
  select = $(this).attr("select");
  $(this).css({ "background-image": 'url("img/svg/light/' + select + '")' });
  if($(window).width() < 1200) {
    if (select == 'icons_stop lights select.svg'){
      $(".peredach").addClass('led-mob');
    }else{
      $(".peredach").removeClass('led-mob');
    }
  }else{
    $(".peredach").css({ "background-image": 'url("img/q/' + src + '.png")' });
  }
});
$(".ul-click-phone li").click(function() {
  $(".ul-click-phone li").removeClass("active");
  $(this).addClass("active");
  var src = $(this).attr("put");
  $(".arm img").attr("src", "img/" + src);
  tabs_id = $(this).attr('tabs-id');
  $('.app-tab').addClass('hide');
  $('.app-tab-'+ tabs_id).removeClass('hide');


});
$(".entry_close").click(function() {
  $(".blagod").hide();
  $(".error_text").text("");
  $.fancybox.close();
  setTimeout(function(){
    $(".modal_send").fadeIn('slow');
  },500)

});

$(".open_modal").click(function(e) {
  $(".modal_contact input[name=cena]").val('24 900 руб');
  $.fancybox.center;
  e.preventDefault();
  setTimeout(function(){
  $('input').blur();
},1)

});


$(".send_boilzzz").click(function() {
  var name = $(".modal_contact input[name=name]").val(),
  phone = $(".modal_contact input[name=phone]").val(),
  manager = $(".modal_contact input[name=manager]").val(),
  cena = $(".modal_contact input[name=cena]").val();
  if (name == ""){
   $(this).parent().find($("input[name=name]")).addClass('red')
 }else{
  $(this).parent().find($("input[name=name]")).removeClass('red')
}
if (phone == ""){
 $(this).parent().find($("input[name=phone]")).addClass('red')
}
else{
  $(this).parent().find($("input[name=phone]")).removeClass('red')
}
if(!phone.match(/^\+7\s.\d{3}.\s\d{3}.\d{2}.\d{2}$/)== true){
  $(this).parent().find($("input[name=phone]")).addClass('red-txt')
}else{
  $(this).parent().find($("input[name=phone]")).removeClass('red-txt')
}
 if (name == "" || phone == "" || !$(".modal_contact input[name=phone]").val().match(/^\+7\s.\d{3}.\s\d{3}.\d{2}.\d{2}$/) == true) {
  $(this).parent().find($(".error_text")).text("Заполните все поля!");
} else {
  if (manager == "Заказали звонок") {
    msg_send(name, phone, manager);
  } else {
    msg_send(name, phone, manager, cena);
  }
  $(".error_text").text("");
  $(".blagod").fadeIn("fast");
  $(".modal_send").fadeOut("fast");
  $(".modal_contact input").removeClass('red');
 $(this).parent().find($("input[name=name]")).val('');
$(this).parent().find($("input[name=phone]")).val('');
  setTimeout(function() {
    $(".blagod").fadeOut("fast");
    $(".error_text").text("");
    $.fancybox.close();
    $(".modal_send").fadeIn('slow');
  }, 2000);
}
});
$("#feed").click(function(e) {
  if (!$(e.target).closest(".dialog-content").length) {
    $(".error_text").text("");
     $(".blagod").fadeOut("fast");
    $.fancybox.close();
    setTimeout(function(){
      $(".modal_send").fadeIn('slow');
    },500)
  }
});

$(".no-modal-send").click(function(e) {
  e.preventDefault();
  var name = $(this).parent().find($("input[name=name]")).val(),
  phone = $(this).parent().find($("input[name=phone]")).val(),
  manager = $(this).parent().find($("input[name=manager]")).val(),
    cena = $(this).parent().find($("input[name=cena]")).val();
  console.log(name,phone,manager,cena);
  if (name == ""){
   $(this).parent().find($("input[name=name]")).addClass('red')
 }else{
  $(this).parent().find($("input[name=name]")).removeClass('red')
}
if (phone == ""){
 $(this).parent().find($("input[name=phone]")).addClass('red')
}
else{
  $(this).parent().find($("input[name=phone]")).removeClass('red')
}
if(!phone.match(/^\+7\s.\d{3}.\s\d{3}.\d{2}.\d{2}$/)== true){
  $(this).parent().find($("input[name=phone]")).addClass('red-txt')
}else{
  $(this).parent().find($("input[name=phone]")).removeClass('red-txt')
}
if (name == "" || phone == "" || !phone.match(/^\+7\s.\d{3}.\s\d{3}.\d{2}.\d{2}$/)== true) {
  $(this).parent().find($(".error_text")).text("Заполните все поля!");
} else {
  msg_send(name, phone, manager, cena);
  $(this).parent().find($(".error_text").text(""));
  $(".blagod").fadeIn("fast");
  $(this).parent().find($("input[name=name]")).val('');
$(this).parent().find($("input[name=phone]")).val('');
  $(".modal_send").hide();
  $(".open_blagod").click();
  setTimeout(function() {
    $(".blagod").fadeOut("fast");
    $.fancybox.close();
    setTimeout(function(){
      $(".modal_send").fadeIn('slow');
    },100)
  }, 2000);
}
});
function applePie() {
    return ( navigator.userAgent.match(/(iPhone|iPod|iPad)/i) );
}
$(".open_modal").fancybox({});
$(".open_blagod").fancybox({});
function msg_send(name, phone, manager, cena) {
  options = { name: name, phone: phone, manager: manager, cena: cena };
  $.ajax({
    type: "POST",
    url: "/send_form.php",
    data: options,
    cache: false,
    success: function(responce) {
      console.log(responce);
    }
  });
}
$(document).ready(function() {
    var product_active = $(".mijia").parent();
    product_active.addClass('product-active');
});
$(".open_time").fancybox({
    autoFocus: false
});
/*
setTimeout(function() {
    $(".open_time").click();
}, 20000);
*/
$(".time-send").click(function(e) {
  e.preventDefault();
  phone = $("#times input[name=phone]").val(),
  manager = $("#times input[name=manager]").val();
  console.log(phone,manager);
if (phone == ""){
 $("#times input[name=phone]").addClass('red')
 console.log('нет телефона');
}
else{
  $("#times input[name=phone]").removeClass('red')
}
if(!phone.match(/^\+7\s.\d{3}.\s\d{3}.\d{2}.\d{2}$/)== true){
$("#times input[name=phone]").addClass('red-txt')
 console.log('нет телефона');
}else{
  $("#times input[name=phone]").removeClass('red-txt')
}
if (phone == "" || !phone.match(/^\+7\s.\d{3}.\s\d{3}.\d{2}.\d{2}$/)== true) {
} else {
  msg_send(name,phone, manager);
  $(".time-thx").fadeIn("fast");
  $("#times input[name=phone]").val('');
  $(".time-form").hide();
  setTimeout(function() {
    $(".time-thx").fadeOut("fast");
    $.fancybox.close();
    setTimeout(function(){
      $(".time-form").fadeIn('slow');
    },100)
  }, 2000);
}
});
$("#times").click(function(e) {
  if (!$(e.target).closest(".dialog-content").length) {
    $(".error_text").text("");
     $(".time-thx").fadeOut("fast");
    $.fancybox.close();
    setTimeout(function(){
      $(".time-form").fadeIn('slow');
    },500)
  }
});