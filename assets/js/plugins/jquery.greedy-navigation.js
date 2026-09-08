/*
* Greedy Navigation
*
* http://codepen.io/lukejacksonn/pen/PwmwWV
*
*/

var $nav = $('#site-nav');
var $btn = $('#site-nav button');
var $vlinks = $('#site-nav .visible-links');
var $vlinks_persist_tail = $vlinks.children("*.persist.tail");
var $hlinks = $('#site-nav .hidden-links');

var breaks = [];

function closeNav() {
  $hlinks.addClass('hidden');
  $btn.removeClass('close').attr({
    'aria-expanded': 'false',
    'aria-label': 'Open navigation menu'
  });
}

function updateNav() {

  var availableSpace = $btn.hasClass('hidden') ? $nav.width() : $nav.width() - $btn.outerWidth() - 16;

  // The visible list is overflowing the nav
  if ($vlinks.width() > availableSpace) {

    while ($vlinks.width() > availableSpace && $vlinks.children("*:not(.persist)").length > 0) {
      // Record the width of the list
      breaks.push($vlinks.width());

      // Move item to the hidden list
      $vlinks.children("*:not(.persist)").last().prependTo($hlinks);

      // Show the dropdown btn
      $btn.removeClass("hidden");
      availableSpace = $nav.width() - $btn.outerWidth() - 16;
    }

    // The visible list is not overflowing
  } else {

    // There is space for another item in the nav
    while (breaks.length > 0 && availableSpace > breaks[breaks.length - 1]) {
      // Move the item to the visible list
      if ($vlinks_persist_tail.children().length > 0) {
        $hlinks.children().first().insertBefore($vlinks_persist_tail);
      } else {
        $hlinks.children().first().appendTo($vlinks);
      }
      breaks.pop();
    }

    // Hide the dropdown btn if hidden list is empty
    if (breaks.length < 1) {
      $btn.addClass('hidden');
      closeNav();
    }
  }

  // Keep counter updated
  $btn.attr("count", breaks.length);

  // Share the actual header height with sticky positioning and anchor offsets.
  document.documentElement.style.setProperty('--masthead-height', $('.masthead').outerHeight() + 'px');

}

// Window listeners

$(window).on('resize', function () {
  updateNav();
});
if (screen.orientation && screen.orientation.addEventListener) {
  screen.orientation.addEventListener("change", function () {
    updateNav();
  });
}

$btn.on('click', function () {
  var isOpening = $hlinks.hasClass('hidden');
  $hlinks.toggleClass('hidden', !isOpening);
  $(this).toggleClass('close', isOpening).attr({
    'aria-expanded': String(isOpening),
    'aria-label': isOpening ? 'Close navigation menu' : 'Open navigation menu'
  });
});

$nav.on('keydown', function (event) {
  if (event.key === 'Escape' && !$hlinks.hasClass('hidden')) {
    closeNav();
    $btn.trigger('focus');
    event.preventDefault();
  }
});

$(document).on('click focusin', function (event) {
  if (!$nav[0].contains(event.target)) closeNav();
});

$hlinks.on('click', 'a', function () {
  closeNav();
});

updateNav();
if (document.fonts && document.fonts.ready) {
  document.fonts.ready.then(updateNav);
}

if (window.ResizeObserver) {
  new ResizeObserver(function () {
    document.documentElement.style.setProperty('--masthead-height', $('.masthead').outerHeight() + 'px');
  }).observe(document.querySelector('.masthead'));
}
