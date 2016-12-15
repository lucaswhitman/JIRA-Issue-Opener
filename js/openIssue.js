const ENTER = 13;

function setErrorText(errorText) {
  var divError = document.getElementById('error');
  divError.innerText = errorText + '\n';
}

function colorBorderToRed(element) {
  var border = document.getElementById(element);
  border.style.borderColor = '#FF6666';
  border.focus();
  border.select();
}

function returnError(errorText, element) {
  setErrorText(errorText);
  colorBorderToRed(element);
  throw '';
}

function inputKeyListener(e) {
  if (e.keyCode === ENTER) {
    var key = document.getElementById('key').value;
    sendOpenIssueMessage(key);
  }
}

function listenInputKey(inputKey) {
  if (inputKey.addEventListener) {
    inputKey.addEventListener('keydown', inputKeyListener, false);
  } else if (inputKey.attachEvent) {
    inputKey.attachEvent('keydown', inputKeyListener);
  }
}

function listenKeys() {
  listenInputKey(document.getElementById('key'));
}

if (window.addEventListener) {
  window.addEventListener('load', listenKeys, false);
} else if (window.attachEvent) {
  window.attachEvent('onload', listenKeys);
} else {
  document.addEventListener('load', listenKeys, false);
}

// send message to background
function sendOpenIssueMessage(key) {
  chrome.extension.sendRequest({ msg: "openIssue", data:key });
}

// listener from background
chrome.extension.onRequest.addListener(
    function(request, sender, sendResponse){
        if(request.msg == 'error') {
          returnError(request.data);
        }
    }
);