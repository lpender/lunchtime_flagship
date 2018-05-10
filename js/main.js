(function () {
	var header = document.getElementById("mainHeader");

	function changeHeader() {
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		header.classList.toggle("header-background", scrollTop >= 50 || document.body.classList.contains("nav-open"));
	}

	var didScroll = false;

	$(window).scroll(function () {
		didScroll = true;
	});

	setInterval(function() {
		if (didScroll) {
			didScroll = false;
			changeHeader();
		}
	}, 100);

	changeHeader();

	document.getElementById("open-nav").addEventListener("click", function (event) {
		event.preventDefault();
		document.body.classList.toggle("nav-open");
    if (document.body.classList.contains('nav-open')) {
      changeHeader();
    } else {
      setTimeout(function() {
        changeHeader();
      }, 200);
    }
	});

	$("a[href*=\\#]").on("click", function (event) {
		// event.preventDefault();

		$("html, body").animate({
			scrollTop: $(this.hash).offset().top-60
		}, 500);

		document.body.classList.remove("nav-open");
	});

  setTimeout(function() {
    $('.hero-iphone').addClass('active');
  });

  let index = 0;
  let $items = $('.only-one > span');
  let length = $items.length

  setInterval( () => {
    index++;
    $items.removeClass('active');
    $($items[index%length]).addClass('active');
  }, 3000);


})();
