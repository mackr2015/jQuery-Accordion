jQuery(document).ready(function ($) {
  
  let accordionTabsTx = $("#accordion ul li p");
  let accordionTabs = $("#accordion ul li a");
  accordionTabsTx.hide();
  accordionTabsTx.first().show();
  accordionTabs.first().addClass("active");

  accordionTabs.on("click", function () {
    // e.preventDefault();
    // e.stopPropagation();

    // Clear out all active classes on click event
    if (accordionTabs.hasClass("active")) {
      // Ignore the current element
      if (!$(this).hasClass("active")) {
        accordionTabs.removeClass("active");
        accordionTabsTx.slideUp();
      }
    }

    // Add activ only on targeted click element
    $(this).addClass("active");

    $(this).next("p").slideDown();

    // prevent default behavior on click
    return false;
  });

});
