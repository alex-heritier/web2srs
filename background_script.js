
init();

function init() {
  chrome.storage.sync.onChanged.addListener(function(changes) {
    let msg = "";
    for (key in changes) {
      msg += key + ": " + changes[key].oldValue + " => " + changes[key].newValue + "\n";
    }
    createNotification(msg);
  });

  let contextMenuItem = {
    "id": SELECTION_ID,
    "title": "Create card",
    "contexts": ["selection"]
  };

  chrome.contextMenus.create(contextMenuItem, () => chrome.runtime.lastError);

  chrome.contextMenus.onClicked.addListener(function(clickData) {
    if (clickData.menuItemId == SELECTION_ID && clickData.selectionText) {
      addCard(clickData.selectionText);
    }
  });
}
