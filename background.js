chrome.commands.onCommand.addListener(function (command) {

    chrome.tabs.query({ active: true,
                        currentWindow: true },
                      function (currentTabs) {

        const currentTab = currentTabs[0];
        const nextTabIndex = currentTab.index + 1;
        chrome.tabs.create({ index: nextTabIndex },
                           function (newTab) {

            chrome.tabs.group({ tabIds: newTab.id,
                                groupId: currentTab.groupId });
      });
    });
  });
  