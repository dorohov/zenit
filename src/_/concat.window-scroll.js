var topPos=$(document).scrollTop(),snb=$(".navbar-site");snb.hasClass("scroll-sidebar")?topPos<100?snb.removeClass("scroll-sidebar"):snb.hasClass("open-scroll-sidebar")&&snb.removeClass("open-scroll-sidebar"):topPos>100&&snb.addClass("scroll-sidebar");