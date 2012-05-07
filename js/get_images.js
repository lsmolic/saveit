(function () {
    function loadScript(url, callback) {
 
        var script = document.createElement("script")
        script.type = "text/javascript";
 
        if (script.readyState) { //IE
            script.onreadystatechange = function () {
                if (script.readyState == "loaded" || script.readyState == "complete") {
                    script.onreadystatechange = null;
                    callback();
                }
            };
        } else { //Others
            script.onload = function () {
                callback();
            };
        }
 
        script.src = url;
        document.getElementsByTagName("head")[0].appendChild(script);
	}

	function get_images()
	{
		var body_element = $('body');
		var allImages = $('img', body_element);

		var largeImages = allImages.filter(function(){
		  return ($(this).width() > 70) || ($(this).height() > 70)
		});

		//alert(largeImages.length);
		show_options(largeImages,body_element);
	}
	
	function show_options(largeImages,body_element)
	{
		body_element.append('<div id="coverup" style="position:absolute; top:0; left:0; right:0; bottom:0; background-color:red; z-index:86753;"><div id="cancelButton">Cancel</div></div>');
		var coverDiv = $('#coverup');
		var cancelButton = $('#cancelButton').click(cancelShare);
		largeImages.each(function (index, domEle) {
			coverDiv.append(largeImages.clone());
		});
	}
	
	function cancelShare()
	{
		var coverDiv = $('#coverup');
		coverDiv.remove();
	}
	
	if (typeof jQuery == 'undefined')
	{
		loadScript("https://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js", function () {
	        //jQuery loaded
	        console.log('jquery loaded');
			get_images();
	    });
	}
	else
	{
		get_images();
	}
})();




