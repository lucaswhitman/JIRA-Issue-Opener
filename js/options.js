function save_options() {
  var url = document.getElementById('urlOption').value;
  var project = document.getElementById('projectOption').value;
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
      savedUrl: url,
      savedProject: project
    }, function () {
      status.textContent = 'Options saved';
      setTimeout(function () {
        status.textContent = '';
      }, 2000);
    });
  }
}

function restore_options() {
  chrome.storage.sync.get({
    savedUrl: 'https://jira.atlassian.com',
      savedProject: 'PROJECT'
  }, function (items) {
    document.getElementById('urlOption').value = items.savedUrl;
    document.getElementById('projectOption').value = items.savedProject;
    document.getElementById('urlOption').select();
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
  save_options);

var enter = 13;

function inputURLListener(e) {
  if (e.keyCode === enter) {
    save_options();
  }
}

function listenInputURL(inputURL) {
  if (inputURL.addEventListener) {
    inputURL.addEventListener('keydown', inputURLListener, false);
  } else if (inputURL.attachEvent) {
    inputURL.attachEvent('keydown', inputURLListener);
  }
}

function listenURL() {
  listenInputURL(document.getElementById('urlOption'));
}

if (window.addEventListener) {
  window.addEventListener('load', listenURL, false);
} else if (window.attachEvent) {
  window.attachEvent('onload', listenURL);
} else {
  document.addEventListener('load', listenURL, false);
}
