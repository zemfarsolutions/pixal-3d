$(document).ready(function () {


  $('nav a').on('click', function (event) {
    $('nav a.active').removeClass('active');
    $(this).addClass('active');
    $('#overlay').removeClass('open');
    $('#toggle').removeClass('active');
    check_if_in_view();
  });
  $('#toggle').click(function () {
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
  });



  var $animation_elements = $('section');
  var $animate_terrain = $('#animate_terrain img');
  var $animate_counter = $('.counter');

  var $window = $(window);

  $window.on('scroll resize', check_if_in_view);

  //$window.on('scroll', () => {console.log('Scroll happened')});
  $window.trigger('scroll');
  $window.trigger('resize');



  function animate(element) {
    //Animating the element if not animated before
    if (!element.hasClass('ms-animated')) {
      var maxval = element.data('max');
      var html = element.html();
      element.addClass("ms-animated");
      $({
        countNum: element.html()
      }).animate({
        countNum: maxval
      }, {
        //duration 5 seconds
        duration: 3000,
        easing: 'linear',
        step: function () {
          element.html(Math.floor(this.countNum).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","));
        },
        complete: function () {
          element.html(this.countNum.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","));
        }
      });
    }
  }










  function check_if_in_view() {
    var window_height = $window.height();
    //console.log("Window height: "+window_height);
    var window_top_position = $window.scrollTop();
    //console.log("Window top: "+window_top_position);
    var window_bottom_position = (window_top_position + window_height);
    //console.log("Window bottom: "+window_bottom_position);

    $.each($animation_elements, function () {
      var $element = $(this);
      var element_height = $element.outerHeight(true);
      //console.log("Element height: "+element_height);
      var element_top_position = $element.offset().top;
      //console.log("Element top: "+element_top_position);
      var element_bottom_position = (element_top_position + element_height);
      //console.log("Element bottom: "+element_bottom_position);

      //check to see if this current container is within viewport
      if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
        $element.addClass('in-view');
      }
    });

    $.each($animate_terrain, function () {
      var $element = $(this);
      var center_screen = (window_bottom_position - window_top_position) / 2;
      var element_height = $element.outerHeight(true);
      //console.log("Element height: "+element_height);
      var element_top_position = $element.offset().top;
      //console.log("Element top: "+element_top_position);
      var element_bottom_position = (element_top_position + element_height);
      //console.log("Element bottom: "+element_bottom_position);

      //check to see if this current container is within viewport
      if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position - center_screen)) {
        $element.addClass('in-view');
      }
    });
    $.each($animate_counter, function () {
      var $element = $(this);

      var element_height = $element.outerHeight(true);
      //console.log("Element height: "+element_height);
      var element_top_position = $element.offset().top;
      //console.log("Element top: "+element_top_position);
      var element_bottom_position = (element_top_position + element_height);
      //console.log("Element bottom: "+element_bottom_position);

      //check to see if this current container is within viewport
      if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
        animate($element);
      }
    });


  }
});
