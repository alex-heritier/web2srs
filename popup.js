$(document).ready(function() {
  chrome.storage.sync.get(KEY_CARDS, function(store) {
    let cards = store[KEY_CARDS];

    let text = "";
    for (i in cards) {
      text += i + " - " + cards[i] + "<br>";
    }

    $('p').html(text);
  });
});
