// context menu
chrome.contextMenus.create({
    title: 'Open Issue: %s', 
    contexts:['selection'], 
    id: 'openIssue',
    onclick: openIssueClickHandler,
});

function openIssueClickHandler(info,tab) { 
  openIssue(info.selectionText);
};

// listener for modal
chrome.extension.onRequest.addListener(
    function(request, sender, sendResponse){
        if(request.msg == 'openIssue') {
          openIssue(request.data);
        }
    }
);

// core funct
function openWindow(key, url) {
  window.open(url + key);
}

function openIssue(key) {
  chrome.storage.sync.get(function (item) {
    var urlOption = item.savedUrl;
    var projectOption = item.savedProject;
    var url = setUrl(urlOption);
    key = key.trim();
    key = removeSkypeFormatting(key);
    key = addDefaultProject(key, projectOption);

    if (key === '') {
      sendErrorMessage('Please insert key', 'key');
    } else {
      openWindow(key, url);
    }
  });
}

function sendErrorMessage(message) {
  chrome.extension.sendRequest({ msg: 'error', data:message });
}

function setUrl(urlOption) {
  var url;
  if (urlOption !== undefined) {
    if (urlOption.charAt(urlOption.length - 1) === '/') {
      url = urlOption + 'browse/';
    } else {
      url = urlOption + '/browse/';
    }
  }
  if (url === undefined) {
    sendErrorMessage('Please define URL in Options', 'key');
  }
  else{
    return url;
  }
}

function addDefaultProject(string, project) {
  if (string.match(/^[0-9]+$/) != null) {
    string = project + '-' + string;
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