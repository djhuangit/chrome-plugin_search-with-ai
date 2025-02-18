# Search with AI - Chrome Extension

A simple and efficient Chrome extension that allows you to quickly search selected text using ChatGPT or Claude AI.

## Features

- Right-click context menu integration
- Instant search with popular AI assistants:
  - ChatGPT (OpenAI)
  - Claude (Anthropic)
- Works on any webpage
- Clean and intuitive interface

## Installation

1. Download or clone this repository to your local machine
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top right corner
4. Click "Load unpacked" in the top left corner
5. Select the directory containing the extension files
6. The extension icon should now appear in your Chrome toolbar

## How to Use

1. Select any text on a webpage
2. Right-click the selected text
3. Choose either:
   - "Search with ChatGPT" to open the text in ChatGPT
   - "Search with Claude" to open the text in Claude
4. A new tab will open with your selected text ready for AI assistance

## Technical Details

- Built using Manifest V3
- Requires the following permissions:
  - `contextMenus`: For creating right-click menu items
  - `tabs`: For opening new tabs with search results

## Files

- `manifest.json`: Extension configuration
- `background.js`: Core functionality and context menu handling
- `icon16.png`, `icon48.png`, `icon128.png`: Extension icons

## Privacy

This extension:
- Does not collect any user data
- Only accesses the text you explicitly select
- Opens official ChatGPT and Claude websites for searches

## License

This project is open source and available under the MIT License.

## Contributing

Feel free to submit issues and enhancement requests! 