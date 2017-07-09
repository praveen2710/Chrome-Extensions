/**
 * Created by Praveen on 7/8/2017.
 */

chrome.runtime.onMessage.addListener(function (request,sender,sendResponse) {
    if(request.action == "show") {
        chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
            chrome.pageAction.show(tabs[0].id)
        });
    }
});
