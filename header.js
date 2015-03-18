var isLocal = /^file\:\/\/\//i.test(location.href);
function initShoppingCart() {
    var cartlist = [{"MerNo":"S611040","MerNo1":"611040","MerName":"厚毛料立領小千鳥長版洋裝 / 2色","Color":"01黑","Size":"F","Price":499,"Num":1,"PhotoSmPath":"http://starkiki.s3.amazonaws.com/product/611040/400-001-1.jpg","ColorPhotoPath":"http://starkiki.s3.amazonaws.com/product/611040/01a.jpg"}];
    function getdata(cartlist) {
        var html = "";
        var count = 0;
        try {
            if (cartlist[0].MerName) {
                for (var i = 0; i < cartlist.length; i++) {
                    html += "<table>";
                    html += "<tr>";
                    html += "<td><img src=\"" + cartlist[i].PhotoSmPath + "\"></td>";
                    html += "<td>";
                    html += "<div>" + cartlist[i].MerNo1 + "</div>";
                    html += "<div>NT." + cartlist[i].Price + "</div>";
                    html += "<div>" + cartlist[i].MerName + "&nbsp;/&nbsp;" + cartlist[i].Color + "色</div>";
                    html += "<div>尺寸：" + cartlist[i].Size + "</div>";
                    html += "<div>數量：" + cartlist[i].Num + "</div>";
                    html += "</td>";
                    html += "</tr>";
                    html += "</table>";
                    count += cartlist[i].Num;
                }
            }
        } catch (err) {
        }
        $(".controlbox>.list>.scrollbox").html(html);
        $(".count").text(count);
    }
    if (isLocal) {
        getdata(cartlist);
    } else {
        $.getJSON("../Common/CartList.ashx", function (cartlist) {
            getdata(cartlist);
        });
    }
}
$(function() {
	(function() {
		var data = [{"Idno":8,"Name":"線上商品","MouseoverName":"","PhotoPath":"https://s3-ap-northeast-1.amazonaws.com/starkiki/list/item_list.jpg","MainPhoto":"","ShowType":0,"OrderNum":0,"V1":"","SubClass":[{"Idno":45,"Name":"New Arrivals","MouseoverName":"New Arrivals 新品","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","Level":0,"List":[{"Idno":161,"Name":"A/W 03.04","MouseoverName":"A/W 03.04","TopIdno":45,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","Level":0,"List":[]}]},{"Idno":66,"Name":"BEST24","MouseoverName":"BEST24 熱銷款","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","Level":0,"List":[]},{"Idno":68,"Name":"SALE","MouseoverName":"SALE 優惠","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","Level":0,"List":[]},{"Idno":49,"Name":"ALL ITEM","MouseoverName":"ALL ITEM 全部商品","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","Level":0,"List":[]},{"Idno":50,"Name":"STARKIKI MADE","MouseoverName":"STARKIKI MADE 設計款","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","Level":0,"List":[]},{"Idno":51,"Name":"TOP","MouseoverName":"TOP 上身","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","Level":0,"List":[{"Idno":98,"Name":"上衣","MouseoverName":"","TopIdno":51,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","Level":0,"List":[]},{"Idno":99,"Name":"背心","MouseoverName":"","TopIdno":51,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","Level":0,"List":[]},{"Idno":100,"Name":"襯衫","MouseoverName":"","TopIdno":51,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","Level":0,"List":[]}]},{"Idno":88,"Name":"BOTTOM","MouseoverName":"BOTTOM 下身","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","Level":0,"List":[{"Idno":108,"Name":"裙子","MouseoverName":"","TopIdno":88,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","Level":0,"List":[]},{"Idno":109,"Name":"褲子","MouseoverName":"","TopIdno":88,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","Level":0,"List":[]},{"Idno":110,"Name":"內搭褲","MouseoverName":"","TopIdno":88,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","Level":0,"List":[]}]},{"Idno":89,"Name":"DRESS","MouseoverName":"DRESS 洋裝","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","Level":0,"List":[{"Idno":101,"Name":"洋裝","MouseoverName":"","TopIdno":89,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","Level":0,"List":[]},{"Idno":104,"Name":"套裝","MouseoverName":"","TopIdno":89,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","Level":0,"List":[]}]},{"Idno":90,"Name":"OUTER","MouseoverName":"OUTER 外套","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","Level":0,"List":[{"Idno":114,"Name":"罩衫","MouseoverName":"","TopIdno":90,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","Level":0,"List":[]},{"Idno":106,"Name":"外套","MouseoverName":"","TopIdno":90,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","Level":0,"List":[]},{"Idno":107,"Name":"風衣","MouseoverName":"","TopIdno":90,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","Level":0,"List":[]}]},{"Idno":91,"Name":"ACCESSORIES","MouseoverName":"ACCESSORIES 配件","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","Level":0,"List":[{"Idno":111,"Name":"包包","MouseoverName":"","TopIdno":91,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","Level":0,"List":[]},{"Idno":113,"Name":"飾品","MouseoverName":"","TopIdno":91,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","Level":0,"List":[]},{"Idno":112,"Name":"鞋子","MouseoverName":"","TopIdno":91,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","Level":0,"List":[]},{"Idno":147,"Name":"襪子","MouseoverName":"","TopIdno":91,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","Level":0,"List":[]},{"Idno":148,"Name":"帽子","MouseoverName":"","TopIdno":91,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","Level":0,"List":[]}]}]}];
		function getdata(data) {
		    var html = "";
		    for (var i = 0, max = data.length; i < max; i++) {
		        html += "<a href=\"../Shop/itemList.aspx?m=" + data[i].Idno + "\">" + data[i].Name + "</a>";
		        if (i < max - 1) {
		            html += "<span>|</span>";
		        }
		    }
			html+="<div class=\"down\"></div>";
			$(".menubox>.up").html(html).on("mouseenter","a",function() {
				var index = $(".menubox>.up>a").index(this);
				var html="";
				if (data[index].SubClass.length > 0) {
					html+="<span>&gt;</span>";
					for (var i = 0, max = data[index].SubClass.length; i < max; i++) {
					    html += "<a href=\"../Shop/itemList.aspx?m=" + data[index].Idno + "&p=" + data[index].SubClass[i].Idno + "\">" + data[index].SubClass[i].Name + "</a>";
					}
				}
				$(".menubox>.up>.down").html(html);
			}).mouseleave(function() {
				$(this).find(".down").html("");
			});
		}
        if (isLocal) {
            getdata(data);
        } else {
            $.getJSON("../common/ajax/menucmd.ashx", function(data) {
                getdata(data);
            });
        }		
	})();//menu
	(function() {
		$(".searchbtn").click(function() {
			$(".searchform").submit();
		});
	})();//search
	(function() {
		$(document).scroll(function() {
			if ($(document).scrollTop()>243) {
				if (!$(".menubox").hasClass("fixed")) {
					$(".menubox").addClass("fixed");
				}
			} else {
				if ($(".menubox").hasClass("fixed")) {
					$(".menubox").removeClass("fixed");
				}
			}
		}).scroll();
	})();//scroll
	(function() {
		var data={"IsLogin":true};
		function getdata(data) {
			if (data !== null && data.IsLogin) {
				$(".loginjoin").attr("href","../common/loginout.aspx").text("LOGOUT").width(72);
			}
		}
		if (isLocal) {
			getdata(data);
		} else {
			$.getJSON("../Common/LoginStatus.ashx",function(data){
				getdata(data);
			});
		}
	})();//loginstatus
	(function() {
		$(".eventbtn").click(function() {
			var $this = $(this);
			if ($this.hasClass("close")) {
				$this.removeClass("close").animate({
					"width":116,
					"height":30
				}).next().animate({
					"margin-left":-195
				});
			} else {
				$this.addClass("close").animate({
					"width":236,
					"height":44
				}).next().animate({
					"margin-left":35
				});
			}
		});
	})();//event
    (function () {
        $(document).scroll(function () {
            if ($(document).scrollTop() > ($(document).height() - $(window).height()) / 2) {
                if ($(".top").is(":hidden")) {
                    $(".top").show();
                }
            } else {
                if ($(".top").is(":visible")) {
                    $(".top").hide();
                }
            }
        });
		$(".top").click(function() {
			$("html,body").animate({
				"scrollTop":0
			});
		});
	})();//top
    (function () {
        if ($("html,body").height() < $(window).height()) {
            $("#container").css("min-height", $(window).height() - $("#logoBar").height() - $(".DefFont:last").height());
        }
    })();//auto footer
    (function () {
        (function () {
            var html = "";
            html += "<div class=\"list\">";
            html += "<div class=\"scrollbox\">";
            html += "</div>";
            html += "<div class=\"checkoutbtn\">";
            html += "<a href=\"../Shop/cartList.aspx\">CHECK IT ! NOW !</a>";
            html += "</div>";
            html += "</div>";
            $(".controlbox").append(html);
            $(".controlbox>.down,.controlbox>.list").mouseenter(function () {
                $(".controlbox>.list").show();
            }).mouseleave(function () {
                $(".controlbox>.list").hide();
            });
        })();//build cart list

        (function () {
            $("#clItems").on("click", ".btnDel", function() {
                setTimeout(function() {
                    initShoppingCart();
                }, 500);
            });
        })(); //delete cart update count
		initShoppingCart();
	})();//init

    /*201503 appendix menu by WB  Start*/
    (function () {
        var url=window.location.toString(),
            page=url.slice(-2);

        $("#ctl00_ContentPlaceHolder1_customDv").css({"position":"relaitve","paddingTop":"45px"});

        url.search(/\/Common\/CustomPage\.aspx\?no=\d{2}$/i)!=-1&&
            ($("#content").prepend("<div id='linkAppendix'></div>"),
            ($('#linkAppendix').load("../Common/CustomPage.aspx?no=50 .appendixBox",function(){
                    function openMenu(a){
                        $("#linkAppendix ol>li").hide(),
                        a!=undefined&&$("#linkAppendix ol>li:eq("+a+")").fadeIn(200);
                    };
                    (page<=80||page<=89)&&openMenu(3),
                    (page<=70||page<=79)&&openMenu(2),
                    (page<=60||page<=69)&&openMenu(1),
                    (page<=51||page<=59)&&openMenu(0),
                    page<=49&&openMenu();
            })));
    })();
    /*201503 appendix menu by WB  End*/

});