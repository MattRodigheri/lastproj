$(document).ready(function() {
  $('.make-btn').on('click', function(event) {
    let textValue = $('.input-field-text').val().split(' ');
    let imgValue = $('.input-field-img').val();
    textValue.splice(Math.ceil(textValue.length/2), 0, '</br></br></br></br></br></br>');
    textValue = textValue.join(' ');
    localStorage.setItem('textValue', textValue);
    localStorage.setItem('imgValue', imgValue);
    localStorage.getItem('textValue');
    localStorage.getItem('imgValue');
    $(".item-display").css('background-image', 'url(' + imgValue + ')');
    $(".item-display").html(`<p>${textValue}</p>`);
  });

  $('.delete-btn').on('click', function(event) {
    localStorage.removeItem('textValue');
    localStorage.removeItem('imgValue');
    $('.input-field-text').val('');
    $('.input-field-img').val('');
    $(".item-display").css('background-image', '');
    $(".item-display").html('');
  });

  // document.querySelector('.save-btn').addEventListener('click', function() {
  //   html2canvas(document.querySelector('.item-display'), {
  //     onrendered: function(canvas) {
  //       return Canvas2Image.saveAsPNG(canvas);
  //     }
  //   });
  // });
  $('.save-btn').on('click', function(event) {
    alert('command+shift+4 to screengrab ;)');
  })
});
