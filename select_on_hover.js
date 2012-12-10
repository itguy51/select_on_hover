$(document).ready(function(){
  var item, useSelAll;

	$('*').hover(function() {
		if((this.className.indexOf("selectable") != -1)){
			useSelAll = true;
			item = this;
		}else{
			useSelAll = false;
		}
	});
	$(document).click(function() {
		useSelAll = false;
	});
	$(document).keydown(function(objEvent) {        
	    if (objEvent.ctrlKey && useSelAll) {
	        if (objEvent.keyCode == 65) {
	        	SelectText(item.id);
	            return false;

	        }
	    }
	});
	function SelectText(element) {
	    var text = document.getElementById(element);
	    if ($.browser.msie) {
	        var range = document.body.createTextRange();
	        range.moveToElementText(text);
	        range.select();
	    } else if ($.browser.mozilla || $.browser.opera) {
	        var selection = window.getSelection();
	        var range = document.createRange();
	        range.selectNodeContents(text);
	        selection.removeAllRanges();
	        selection.addRange(range);
	    } else if ($.browser.safari) {
	        var selection = window.getSelection();
	        selection.setBaseAndExtent(text, 0, text, 1);
	    }
	}
});