// $( document ).ready(function() {
//     var hash = window.location.hash;
//     alert(hash);
//     $("[id=" + hash + "]").addClass('active');

// });

$(document).ready(function() {
  var hash = window.location.hash;
  var url = $("a[href|='" + hash + "']").attr('href');

  if (hash == '') {
    var nullhash = '#goat_principles';
    $(nullhash).show();
    $("a[href|='" + nullhash + "']").closest('.panel').addClass('show');
    $("a[href|='" + nullhash + "']").closest('.panel').prev('.accordion').addClass('active');
    $("a[href|='" + nullhash + "']").addClass('active');
  } 
  else {
    $(hash).show();
    $("a[href|='" + hash + "']").closest('.panel').addClass('show');
    $("a[href|='" + hash + "']").closest('.panel').prev('.accordion').addClass('active');
    $("a[href|='" + hash + "']").addClass('active');
  }
});

// accordion
    $('.accordion').click(function(){
      if( $(this).hasClass('active') ){
        $(this).removeClass('active');
        $(this).next().removeClass('show');
      }else{
        $('.accordion').removeClass('active');
        $('.panel').removeClass('show');

        $(this).addClass('active');
        $(this).next().addClass('show');
      }
    })


// tabs select
    $('.tabgroup > div').hide();
    // $('.tabgroup > div:first-of-type').show();
    // $('#goat_principles').show();
    $('.tabs a').click(function(e){
      e.preventDefault();
        var $this = $(this),
            tabgroup = '#'+$this.parents('.tabs').data('tabgroup'),
            others = $this.closest('div').siblings().children('a'),
            accordion = $this.closest('#sidenav').children('.accordion').siblings(),
            target = $this.attr('href');
        accordion.removeClass('active');
        others.removeClass('active');
        $this.closest('.panel').prev('.accordion').addClass('active');
        $this.addClass('active');
        $(tabgroup).children('div').hide();
        $(target).show();
        window.location = target;
    })

// html include
        function includeHTML() {
          var z, i, elmnt, file, xhttp;
          /*loop through a collection of all HTML elements:*/
          z = document.getElementsByTagName("*");
          for (i = 0; i < z.length; i++) {
            elmnt = z[i];
            /*search for elements with a certain atrribute:*/
            file = elmnt.getAttribute("w3-include-html");
            if (file) {
              /*make an HTTP request using the attribute value as the file name:*/
              xhttp = new XMLHttpRequest();
              xhttp.onreadystatechange = function() {
                if (this.readyState == 4) {
                  if (this.status == 200) {elmnt.innerHTML = this.responseText;}
                  if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
                  /*remove the attribute, and call this function once more:*/
                  elmnt.removeAttribute("w3-include-html");
                  includeHTML();
                }
              }      
              xhttp.open("GET", file, true);
              xhttp.send();
              /*exit the function:*/
              return;
            }
          }
        };



includeHTML();

