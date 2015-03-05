$(function() {
	(function() {
		$("body").css("overflow", "hidden").attr("onmousewheel", "return false;");
		$(".start>.btn").click(function() {
			$(".start").hide();
			$("body").css("overflow", "auto").removeAttr("onmousewheel");
		});
		$(window).resize(function() {
			var img = new Image();
			img.onload = function() {
				if (img.width / img.height > $(window).width() / $(window).height()) {
					$(".start>img").removeAttr("height style").attr("width", "100%").css("margin-top", ($(window).height() - $(".start>img").height()) / 2);
				} else {
					$(".start>img").removeAttr("width style").attr("height", "100%").css("margin-left", ($(window).width() - $(".start>img").width()) / 2);
				}
			};
			img.src = $(".start>img").attr("src");
		}).resize();
	})(); //start
});