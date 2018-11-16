
includeScript('../public/javascripts/banner.js');
includeScript('../public/javascripts/js_z.js');







function includeScript(url) {
	document.write('<script type="text/javascript" src="js/'+ url + '"></script>'); 
	return false;
}