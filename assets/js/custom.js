$(document).ready(function() {
    $('select').material_select();
	$(".button-collapse").sideNav();
	 $('.tooltipped').tooltip({delay: 50});
	    $('.materialboxed').materialbox();
		$('.slider').slider();	
});
function toastdisplay(){
	var $toastContent = $('<span>Hai Veeramani</span>').add($('<button class="btn-flat toast-action">Undo</button>'));
	Materialize.toast($toastContent, 1000,'',function(){alert('Your toast was dismissed')});
}
$('.modal').modal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .5, // Opacity of modal background
      inDuration: 300, // Transition in duration
      outDuration: 200, // Transition out duration
      startingTop: '4%', // Starting top style attribute
      endingTop: '10%', // Ending top style attribute
      ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
        alert("Ready");
        console.log(modal, trigger);
      },
      complete: function() { alert('Closed'); } // Callback for Modal close
});

$(document).ready(function(){
	$('.copybtnstyle').each(function(){
		$(this).click(function(){
			var contextual=$(this).next().find('pre').prevObject[0].innerText;
			//console.log($(this).next().find('pre').prevObject[0].innerHTML);
			$('.textprev').text(contextual);
			localStorage.setItem("prevcode", contextual);
			$('#button1').click();
		});
	});
});
function CopyToClipboard(containerid) {
	if (document.selection) { 
		var range = document.body.createTextRange();
		range.moveToElementText(document.getElementById(containerid));
		range.select().createTextRange();
		document.execCommand("copy"); 

	} else if (window.getSelection) {
		var range = document.createRange();
		 range.selectNode(document.getElementById(containerid));
		 window.getSelection().addRange(range);
		 document.execCommand("copy");
		
		/* For toast */
		var snackbarContainer2 = document.getElementById('rocrltstrmve');  
		var data = {message: 'Content Copied.' };
		snackbarContainer2.MaterialSnackbar.showSnackbar(data);
	}
}
$(document).ready(function(){
	$('pre').each(function(){
		$(this).hover(function(){
			$('.copybtnstyle').hide();
			$(this).prev().show();
		});
	});
});