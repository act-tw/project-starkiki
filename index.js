$(function() {
	(function() {
		var timer = 3000;

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
		(function() {
			$("body").css("overflow", "hidden").attr("onmousewheel", "return false;");
			setInterval(run, timer);
		})(); //init
	})(); //start

	(function() {
		var timer = 3000,
			$outbox = $(".index>.outbox"),
			$inbox = $outbox.find(">.inbox"),
			$a = $inbox.find(">a"),
			$img = $a.find(">img"),
			img = new Image(),
			html = "<a href=\"" + $a.first().attr("href") + "\"><img src=\"" + $a.first().find(">img").attr("src") + "\"></a>",
			sid = null;
		$inbox.append(html);
		$inbox = $outbox.find(">.inbox");
		$a = $inbox.find(">a");
		$img = $a.find(">img");
		img.onload = function() {
			function run() {
				var index;

				if (parseInt($inbox.css("left")) <= -(img.width * ($img.length - 1))) {
					$inbox.css("left", 0);
				}
				$inbox.animate({
					"left": "-=" + img.width
				});

				index = Math.abs(parseInt($inbox.css("left")) / (img.width)) + 1;
				if (index >= $img.length - 1) {
					index = 0;
				}
				setNaviActive(index);
			}

			function navi() {
				html = "";
				for (var i = 0, max = $img.length - 1; i < max; i++) {
					html += "<span";
					if (i === 0) {
						html += " class=\"active\"";
					}
					html += "></span>";
				}
				$outbox.prepend("<div class=\"navi\">" + html + "</div>");
				$outbox.find(">.navi").css("margin-left", -($outbox.find(">.navi").width() / 2));
			}

			function setNaviActive(index) {
				var $span = $outbox.find(">.navi>span");
				$span.filter(".active").removeClass();
				$span.eq(index).addClass("active");
			}
			$outbox.mouseenter(function() {
				if (sid !== null) {
					clearInterval(sid);
				}
			}).mouseleave(function() {
				sid = setInterval(run, timer);
			});
			$outbox.on("click", ">.navi>span", function() {
				var index = $(this).index();
				$inbox.animate({
					"left": index * -(img.width)
				});
				setNaviActive(index);
			});
			$outbox.css({
				"width": img.width,
				"height": img.height
			});
			$inbox.css({
				"width": img.width * $img.length,
				"height": img.height
			});
			navi();
			sid = setInterval(run, timer);
		}
		img.src = $img.eq(0).attr("src");
	})(); //index
});