
console.log('background loaded');

// add a listener to fire when the extension is installed
chrome.runtime.onInstalled.addListener(() => {
    // open a background tap to hide youtube in
    // SO suggests that if it plays a sound, it iwll be able to continue to play audio in backgorund https://stackoverflow.com/questions/35525968/autoplay-sound-in-chrome-background-tab
    //chrome.tabs.create({'url': "/index.html", 'active': true});


    // let activeTab;
    // let backgroundTabId;
    
    // // create a variable for the background audio tab -- which is currently and briefly the active tab
    // // but give it a few seconds to load
    // setTimeout(() => {
    // chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    //     // since only one tab should be active and in the current window at once
    //     // the return variable should only have one entry
    //     backgroundTab = tabs[0];
    //     backgroundTabId = activeTab.id; // or do whatever you need
    //     console.log(tabs[0])
    //     console.log(backgroundTabId)
    //  })
    // }, 5000);

    // // set a listener for whenever a new tab is created
    // chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    //     if (changeInfo.status == 'complete') {
    //         console.log('listener ahoy')
    //         console.log(backgroundTabId)
            
    //         chrome.tabs.sendMessage(
    //             backgroundTabId,
    //             'https://www.youtube.com/watch?v=cMjlhIWxfFI?autoplay=1'
    //             ) 
    //     }
    // });
});

