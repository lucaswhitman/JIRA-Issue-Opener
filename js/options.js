function save_options() {
	var url = document.getElementById('urlOption').value;

	chrome.storage.sync.set({
		savedUrl: url
	}, function () {
		var status = document.getElementById('status');
		status.textContent = 'Options saved';
		setTimeout(function () {
			status.textContent = '';
		}, 2000);
	});
}

function restore_options() {
	chrome.storage.sync.get({
		savedUrl: 'http://jira.atlassian.com'
	}, function (items) {
		document.getElementById('urlOption').value = items.savedUrl;
	});
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
	save_options);