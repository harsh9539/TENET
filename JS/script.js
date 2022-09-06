if ('serviceWorker' in navigator) {
	navigator.serviceWorker
		.register('/service-worker.js')
		.then(function () {
			console.log('Service Worker Registered');
		})
		.catch(function (e) {
			console.log('Error while registering service worker', e);
		});
} else {
	console.log('Sorry your browser does not support PWA - demo');
}

function dropDown(){
    var t = document.querySelector(".dropDown")
    if(t.classList.contains("dropOn")){
        t.classList.remove("dropOn")
    }else{
        t.classList.add("dropOn")
    }
}