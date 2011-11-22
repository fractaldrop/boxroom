//= require jquery
//= require jquery_ujs
//= require_self
//= require plupload.full.js

$(window).load(function() {
  fadeout($('notice'));
  fadeout($('alert'));
});

function fadeout(element)
{
	if($(element) != undefined)
	{
  		element.fadeOut("slow");
	}
}

function show_element(element)
{
	if($(element).visible()) { element = 'files_and_folders'; }

	elements = ['files_and_folders', 'permissions', 'clipboard'];
	elements.splice(elements.indexOf(element), 1);

	elements.each(function(e) {
		if($(e) != undefined && $(e).visible()) { e.slideUp("slow"); }
	});

	element.slideDown("slow");
	if($('show_' + element + '_link') != undefined) { $('show_' + element + '_link').className = 'highlight'; }

	elements.each(function(e) {
		if($('show_' + e + '_link') != undefined) { $('show_' + e + '_link').className = 'folder_menu'; }
	});
}

function update_counter(element, counter)
{
	$(counter).innerHTML = element.value.length;
	$(counter).style.color = element.value.length > 256 ? '#F00' : '#000';
}
