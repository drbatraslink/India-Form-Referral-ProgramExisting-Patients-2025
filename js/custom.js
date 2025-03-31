
  // Form focus styling
  //$('input,textarea').val('');
  $('.form-group input, .form-group textarea, .form-group select').focusout(function () {
    const text_val = $(this).val();
    if (text_val === '') {
      $(this).removeClass('has-value');
    } else {
      $(this).addClass('has-value');
    }
  });