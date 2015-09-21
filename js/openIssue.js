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

var key,
	url;

function setUrl(urlOption) {
    if (urlOption !== undefined) {
        if (urlOption.charAt(urlOption.length - 1) === '/') {
            url = urlOption + 'browse/';
        } else {
            url = urlOption + '/browse/';
        }
    }
}

function removeSpaces(string) {
    while (string.charAt(string.length - 1) === ' ') {
		string = string.slice(0, string.length - 1);
	}
    
	if (string.charAt(0) === ' ') {
		var temp = string.split(' ');
		string = temp[temp.length - 1];
	}

	return string;
}

function removeSkypeFormatting(string) {
	if (string.charAt(0) === '[') {
		var temp = string.split(' ');
		string = temp[temp.length - 1];
	}
	
	return string;
}


function openWindow() {
	window.open(url + key);
}

function openIssue() {
	chrome.storage.sync.get(function (item) {

		var urlOption = item.savedUrl;

		key = document.getElementById('key').value;
		setUrl(urlOption);
		key = removeSpaces(key);
		key = removeSkypeFormatting(key);

		if (key === '') {
			returnError('Please insert key', 'key');
		} else if (url === undefined) {
			returnError('Please define URL in Options', 'key');
        } else {
			openWindow();
		}
	});
}

var enter = 13;

function inputKeyListener(e) {
	if (e.keyCode === enter) {
		openIssue();
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