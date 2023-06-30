document.getElementById('copyButton').addEventListener('click', async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: getPageText,
    }, (results) => {
        document.getElementById('textArea').value = results[0].result;
    });
});

function getPageText() {
    // Get all text content from the page
    let text = document.body.innerText;
    return text;
}
