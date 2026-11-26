
let browser = "Chrome";

function checkBrowserVersion(callbackfunction) {
    setTimeout(() => {
        callbackfunction(browser);
    }, 2000); 
}

function displayBrowserVersion(version) {
    console.log("Browser version using callback:", version);
}

checkBrowserVersion(displayBrowserVersion);