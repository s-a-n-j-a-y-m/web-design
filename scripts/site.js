function Clearform() {
  //  document.getElementById("name").nodeValue=' ';
  document.getElementById("contactform").onreset();
}

function hidePtags() {
  let ptags = document.getElementsByTagName("p");
  for (let item of ptags) {
    // item.style.visibility = 'hidden';
    item.style.display = "none";
  }
}
$("#jqueryBtn").click(function () {
  $("p").hide();
});

$(function(){
  var pages = ['index','about','contact'];
  var pathname = window.location.pathname;

  $('.nav-link').each(function(item){
      if(pathname.includes(pages[item])){
          $(this).addClass('active');
          $(this).attr('aria-current', 'page');
      }
  })
});
