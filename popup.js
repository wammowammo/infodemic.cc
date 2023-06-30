document.getElementById('outputButton').addEventListener('click', async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: getPageText,
    }, (results) => {
        document.getElementById('textArea').value = results[0].result;
    });
});

document.getElementById('copyButton').addEventListener('click', async () => {
    let text = document.getElementById('textArea').value;
    await navigator.clipboard.writeText(text);
    document.getElementById('message').innerText = 'Text copied to clipboard!';
    setTimeout(() => {
        document.getElementById('message').innerText = '';
    }, 2000);
});

function getPageText() {
    // Get all text content from the page
    let text = document.body.innerText;
    return text;
}
