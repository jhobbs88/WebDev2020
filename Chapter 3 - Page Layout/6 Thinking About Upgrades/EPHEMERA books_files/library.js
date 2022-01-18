$.fn.exists = function(){ return this.length>0; }

// For actuating font awesome spinner icons
$(function() {
    // First make sure spinner is hidden upon display and then start the spinner when the button is clicked
    $('button .fa-spinner').hide().closest('button').click(startSpinner);
})

function startSpinner(e) {
    $button = $(e.target);
    // First pull out the spinner icon
    $icon = $button.find('i.fa-spinner').detach();
    $button.empty();
    $icon.addClass('fa-spin').appendTo($button).show(); // Add class to make spin in case not already on the element
}