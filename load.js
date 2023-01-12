console.log('hello from background')

const iframe = document.getElementById('frame')

// add a listener to fire when the extension is installed
chrome.runtime.onInstalled.addListener(() => {
    // open a background tap to hide youtube in
    // SO suggests that if it plays a sound, it iwll be able to continue to play audio in backgorund https://stackoverflow.com/questions/35525968/autoplay-sound-in-chrome-background-tab
    chrome.tabs.create({'url': "/index.html", 'active': true});

    // get id of this tab
    var backgroundTabId;
    chrome.windows.getCurrent(w => {
        chrome.tabs.query({active: true, windowId: w.id}, tabs => {
           backgroundTabId = tabs[0].id;
          console.log('tabId ' + backgroundTabId)
        });
      });
});


// set a listener for whenever band name is changed in storage
chrome.storage.onChanged.addListener(function(changes, namespace) {
    if ("band" in changes) {
        //console.log("Old value: " + changes.active.oldValue);
        console.log(changes);
    }
});

// chrome.extension.onMessage.addListener(function(msg, sender, sendResponse) {
//     console.log(msg, sender, sendResponse)
//   });