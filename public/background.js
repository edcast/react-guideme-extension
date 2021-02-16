chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.query({
		active: true,
		currentWindow: true,
	}, function(tabs) {
		var ob = {
			action: "GM:action:browser_action_icon_click"
		};
        chrome.tabs.sendMessage(tabs[0].id, JSON.stringify(ob));
	});
  });
