$(function() {
	(function() {
		function setZIndex() {
			for (var i = 0, max = $(".start>img").length; i < max; i++) {
				$(".start>img").eq(i).css("z-index", -(i + 1));
			}
		}

		function run() {
			if ($(".start>img:visible").length <= 1) {
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

	(function() {
		var $inbox = $(".index>.outbox>.inbox"),
			$a = $inbox.find(">a"),
			$img = $a.find(">img"),
			img = new Image(),
			html = "";

		html = "<a href=\"" + $a.first().attr("href") + "\"><img src=\"" + $a.first().find(">img").attr("src") + "\"></a>";
		$inbox.append(html);
		$inbox = $(".index>.outbox>.inbox");
		$a = $inbox.find(">a");
		$img = $a.find(">img");

		img.onload = function() {
			var $outbox = $(".index>.outbox"),
				$inbox = $outbox.find(">.inbox");
			$outbox.css({
				"width": img.width,
				"height": img.height
			});
			$inbox.css({
				"width": img.width * $img.length,
				"height": img.height
			});

			function run() {
				if (parseInt($inbox.css("left")) <= -(img.width * ($img.length - 1))) {
					$inbox.css("left", 0);
				}
				$inbox.animate({
					"left": "-=" + img.width
				});
			}
			setInterval(run, 3000);
		}
		img.src = $img.eq(0).attr("src");
	})(); //index
});