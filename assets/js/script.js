var contactBtn = $('#contact');
var modal = $('#contact-modal');


contactBtn.on('click', function () {
    modal.show();
})

$('.delete').on('click', function () {
    modal.hide();
})