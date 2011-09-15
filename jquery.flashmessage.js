(function($) {
  $.flashmessage = function(msg, options) {
    var defaults = {
      container: 'body',
      id: 'flashmessage',
      timeToFade: 3000,
      type: 'notification'
    };

    var options = $.extend(defaults, options);

    var $msgBox = $('<div id="'+options.id+'"><div class="flash-wrapper '+options.type+'">'+msg+'</div></div>').css({
      position: 'fixed',
      width: '100%',
    }).hide();
    $container = (typeof options.container == 'string') ? $(options.container) : options.container;

    $container.prepend($msgBox);

    $msgBox.fadeIn().addClass('open-message').delay(options.timeToFade).fadeOut(function(){ $msgBox.remove(); });

    return true;
  };
})(jQuery);