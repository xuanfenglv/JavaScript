$(function() {
	tanchu("danmu1");
	setTimeout(() => {
		tanchu("danmu2");
	}, 1000);
})

function tanchu(danmu) {
	console.log(danmu);
	$("#" + danmu).animate({
		left: '0%'
	}, 10000,"linear", function() {
//		$(this).remove();
	})
}