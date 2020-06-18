const SELECTION_ID = "selection_id";
const KEY_CARDS = "cards";

function addCard(text) {
  chrome.storage.sync.get({[KEY_CARDS]: []}, function(store) {
    let cards = store[KEY_CARDS];

    cards.push(text);

    chrome.storage.sync.set({[KEY_CARDS]: cards}, function() {
      // Notify user
      // createNotification("Created card #" + store[KEY_CARD_ID_TICKER] + " for " + text);
    });
  });
}

function createNotification(text) {
  let notifOptions = {
    type: 'basic',
    iconUrl: chrome.runtime.getURL('images/icon2.png'),
    title: 'Debug',
    message: text,
  };

  // chrome.notifications.create(null, notifOptions, () => chrome.runtime.lastError);
}
