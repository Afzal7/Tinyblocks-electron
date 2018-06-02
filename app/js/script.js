function openNav() {
	document.getElementById("app-navbar").style.width = "300px";
}

function closeNav() {
  document.getElementById("app-navbar").style.width = "0px";
}


$(document).ready(function(){
  $(document).on("click",'#landing-hide-btn',function(){
      $(".landing-page").hide();
  });
});