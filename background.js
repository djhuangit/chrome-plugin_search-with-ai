chrome.runtime.onInstalled.addListener(() => {
  // Remove all existing context menus
  chrome.contextMenus.removeAll(() => {
    // Create ChatGPT context menu
    chrome.contextMenus.create({
      id: "searchWithChatGPT",
      title: "Search with ChatGPT",
      contexts: ["selection"],
      documentUrlPatterns: ["<all_urls>"]  // This helps Chrome treat them as separate items
    });

    // Create Claude context menu
    chrome.contextMenus.create({
      id: "searchWithClaude",
      title: "Search with Claude",
      contexts: ["selection"],
      documentUrlPatterns: ["<all_urls>"]  // Same as above
    });
  });
});

// Handle clicks
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "searchWithChatGPT" && info.selectionText) {
    const query = encodeURIComponent(info.selectionText);
    const chatGPTUrl = `https://chat.openai.com/?q=${query}`;
    chrome.tabs.create({ url: chatGPTUrl });
  } else if (info.menuItemId === "searchWithClaude" && info.selectionText) {
    const query = encodeURIComponent(info.selectionText);
    const claudeUrl = `https://claude.ai/new?q=${query}`;
    chrome.tabs.create({ url: claudeUrl });
  }
});
