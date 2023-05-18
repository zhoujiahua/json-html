(function ($) {
    $.fn.getLocalJson = function (url) {
        var sc = url.split('/');
        var elHead = document.getElementsByTagName('head')[0];
        var src = url + '?callback=' + sc.slice(sc.length - 1)[0].split('.')[0];
        /* Dynamic creation of script elements */ 
        var elem = document.createElement('script');
        elem.setAttribute('type', 'text/javascript');
        elem.setAttribute('src', src);
        elem.setAttribute('id', url);
        elHead.appendChild(elem);
    }
})(jQuery);
