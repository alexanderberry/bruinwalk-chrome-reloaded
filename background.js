var parser = new DOMParser();

chrome.runtime.onMessage.addlistener(
    //Does parseFromString execute synchronously?
    function(request, sender, sendResponse) {
        fetch('https://bruinwalk.com/search/?q=' + request.prof_name)
            .then(response => response.text())
            .then(html => sendResponse(parser.parseFromString(html, 'text/html')))
            .catch(console.warn('Something went wrong:',err));
    }
)