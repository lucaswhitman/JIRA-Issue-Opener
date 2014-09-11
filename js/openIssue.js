function setErrorText(errorText) {
	'use strict';

	var divError = document.getElementById('error');
	divError.innerText = errorText + '\n';
}

function colorBorderToRed(element) {
	'use strict';

	var border = document.getElementById(element);
	border.style.borderColor = '#FF6666';
	border.focus();
	border.select();
}

function returnError(errorText, element) {
	'use strict';

	setErrorText(errorText);
	colorBorderToRed(element);
	throw '';
}

var key,
	url,
    isError = 0;

function setUrl(urlOption) {
	'use strict';

	if (urlOption.charAt(urlOption.length - 1) === '/') {
		url = urlOption + 'browse/';
	} else {
		url = urlOption + '/browse/';
	}
}

function removeSpaces(string) {
    'use strict';
    
    if (string.charAt(0) === ' ') {
        string = string.slice(1, string.length);
    }
    
    if (string.charAt(string.length - 1) === ' ') {
        string = string.slice(0, string.length - 1);
    }
    
    return string;
}


function openWindow() {
	'use strict';

	window.open(url + key);
}

function openIssue() {
	'use strict';

	chrome.storage.sync.get(function (item) {

		var urlOption = item.savedUrl;
		
		key = document.getElementById('key').value;
		setUrl(urlOption);
		key = removeSpaces(key);
		
		if (key === '') {
			isError = 1;
			returnError('Please insert key', 'key');
		} else {
			openWindow();
		}
	});
	
    setTimeout(function () {
        if (isError === 0) {
            returnError('Please define URL in Options', 'key');
        }
    }, 500);
}

var enter = 13;

function inputKeyListener(e) {
	'use strict';

	if (e.keyCode === enter) {
		openIssue();
	}
}

function listenInputKey(inputKey) {
	'use strict';

	if (inputKey.addEventListener) {
		inputKey.addEventListener('keydown', inputKeyListener, false);
	} else if (inputKey.attachEvent) {
		inputKey.attachEvent('keydown', inputKeyListener);
	}
}

function listenKeys() {
	'use strict';

	listenInputKey(document.getElementById('key'));
}

if (window.addEventListener) {
	window.addEventListener('load', listenKeys, false);
} else if (window.attachEvent) {
	window.attachEvent('onload', listenKeys);
} else {
	document.addEventListener('load', listenKeys, false);
}