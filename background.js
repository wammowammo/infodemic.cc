chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    let text = request.text;
    console.log("Received text: ", text);
    navigator.clipboard.writeText(text).then(() => {
        console.log('Text copied to clipboard');
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
});
