# Chrome Extension

[Tutorial](https://developer.chrome.com/extensions/getstarted)

## Installing

- Go to Extensions, e.g., `chrome://extensions/`, and select "Load unpackaged" and open the extension.

## Uninstalling

- Just remove it like any other extension.

## Using

- Navigate to [Chrome Developer](https://developer.chrome.com/), and a toolbar icon appears in the menu bar that displays a pop-up when clicked.
- Click the toolbar icon and select options to choose a color.
- This extension stores a value in a key-value store, but it's `chrome.storage` and not `localStorage`, so the value will not be visible in Chrome's local storage debug tools.