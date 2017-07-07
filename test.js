$(document).ready(function () {
    $('.scrollspy').scrollSpy({
        scrollOffset: 10
    });
    $.fn.select2.defaults.set("theme", "materialize");
	
	/** the code below will not work well 
	$("#ProductIdSel").select2({
        theme:"materialize"
    });
	**/
	$("select").material_select()		
})