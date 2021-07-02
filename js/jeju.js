/* Youngju Ahn 100546460 */

/**
 * Banner for desktop
 */
function carousel () {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}
  x[myIndex-1].style.display = "inline-block";
  setTimeout(carousel, 2000); // Change image every 2 seconds
}

/**
 * Function for Attractions pages
 * display() executes folding up and down on click + and -
 */
function display()
{
  var acc = document.getElementsByClassName("accordion");

  var w = window.innerWidth
          || document.documentElement.clientWidth
          || document.body.clientWidth;

  console.log( "browser inner window width: " + w );

  //min-width: 830px for desktop
  // not for desktop, only for mobile and tablet
  if( w < 830 )
  {
    for (var i = 0; i < acc.length; i++) {
      acc[i].onclick = function(){
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;

        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
      } // end onclick
    } // end for
  } // end if
}

/**
 * Sometimes panel disappear in desktop view after mobile and tablet view
 * So, reset panel display as inline-block
 */
function resetPanel()
{
  var w = window.innerWidth
          || document.documentElement.clientWidth
          || document.body.clientWidth;

  //console.log( "[resetPanel] browser inner window width: " + w );
  var panel = document.getElementsByClassName("panel");

  if( w >= 830 )
    for( var i = 0; i < panel.length; i++ )
      panel[i].style.display = "inline-block";
  else
    for( var i = 0; i < panel.length; i++ )
      panel[i].style.display = "none";
}
