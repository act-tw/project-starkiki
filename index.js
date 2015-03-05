$(function() {
	(function() {
		function setZIndex() {
			for (var i = 0, max = $(".start>img").length; i < max; i++) {
				$(".start>img").eq(i).css("z-index", -(i + 1));
			}
		}
		function run() {
			if ($(".start>img:visible").length<=1) {
				$(".start>img").eq(0).fadeIn(function() {
					$(".start>img:hidden").show();
				});
			} else {
				$(".start>img:visible").eq(0).fadeOut();	
			}
		}
		setInterval(run, 3000);
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
				setZIndex();
			};
			img.src = $(".start>img").attr("src");
		}).resize();
	})(); //start
});