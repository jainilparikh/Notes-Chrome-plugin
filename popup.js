    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
        /*
        Gets the URL from tab in focus.
        */
        let url = tabs[0].url;
        chrome.storage.sync.get([url], function(items){
            /*
            Fetches user data(notes) from persistance storage
            */
            console.log((items[url]));
            notes = items[url]
            if(!notes)
            {
                notes = ""
            }
            document.getElementById('notes').value = notes;
        });
    });

document.getElementById('saveButton').onclick = function(){
    /*
    Gets Notes and saves them in persistance storage.
     */
    var notes = document.getElementById('notes').value;    
    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
        /*
        Gets the URL from tab in focus.
         */
        let url = tabs[0].url;
        var jsonfile = {};
        jsonfile[url] = notes;
        console.log(jsonfile)

        chrome.storage.sync.set(jsonfile, function(){
            // Notes saved
        });
    });
}