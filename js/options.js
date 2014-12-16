function save_options() {
	var url = document.getElementById('urlOption').value;
    var status = document.getElementById('status');
    var error = document.getElementById('error');
    var border = document.getElementById('urlOption');

	if (url === '') {
        error.textContent = 'Please fill URL';
        border.style.borderColor = '#CC0000';
        border.focus();
    } else {
        error.innerText = '\n';
        border.style.border = '';
        border.focus();
        border.select();
        
        chrome.storage.sync.set({
            savedUrl: url
        }, function () {
            status.textContent = 'URL is saved';
            setTimeout(function () {
                status.textContent = '';
            }, 2000);
        });
    }
}

function restore_options() {
	chrome.storage.sync.get({
		savedUrl: 'http://jira.atlassian.com'
	}, function (items) {
		document.getElementById('urlOption').value = items.savedUrl;
		document.getElementById('urlOption').select();
	});
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
	save_options);



var enter = 13;

function inputURLListener(e) {
	'use strict';

	if (e.keyCode === enter) {
		save_options();
	}
}

function listenInputURL(inputURL) {
	'use strict';

	if (inputURL.addEventListener) {
		inputURL.addEventListener('keydown', inputURLListener, false);
	} else if (inputURL.attachEvent) {
		inputURL.attachEvent('keydown', inputURLListener);
	}
}

function listenURL() {
	'use strict';

	listenInputURL(document.getElementById('urlOption'));
}

if (window.addEventListener) {
	window.addEventListener('load', listenURL, false);
} else if (window.attachEvent) {
	window.attachEvent('onload', listenURL);
} else {
	document.addEventListener('load', listenURL, false);
}