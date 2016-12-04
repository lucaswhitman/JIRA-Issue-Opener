# Short Description
Extension opens JIRA issue in new tab. User needs only to insert issue key.

It is useful for developers, analysts or testers who often need to open JIRA issue using its key.

[Page of JIRA Issue Opener](http://ivanova-irina.blogspot.com/p/jira-issue-opener.html "Page of JIRA Issue Opener")

[Same extension for FireFox](https://github.com/iriiiina/JIRA-Issue-Opener-FF "Same extension for FireFox")

# Download and Install
* **[Install](https://chrome.google.com/webstore/detail/jira-issue-opener/koceedenfpfaogpnpplkeikokjdnlamj "Install")** last version from Google Store

or

* **[Download](https://github.com/iriiiina/JIRA-Issue-Opener "Download")** source code from GitHub and load extension manually

# Questions and Comments
Any questions or comments are welcome! You can write me an e-mail on [iriiiina@gmail.com](mailto:iriiiina@gmail.com "iriiiina@gmail.com") or leave a comment on this page.

# Source Code and Issues
Source code and issue reporting is available at GitHub: [https://github.com/iriiiina/JIRA-Issue-Opener](https://github.com/iriiiina/JIRA-Issue-Opener "https://github.com/iriiiina/JIRA-Issue-Opener")

# Screenshots
![JIRA Issue Opener](https://raw.githubusercontent.com/iriiiina/JIRA-Issue-Opener/master/screenshots/extension.png "JIRA Issue Opener")&nbsp;![JIRA Issue Opener: Options](https://raw.githubusercontent.com/iriiiina/JIRA-Issue-Opener/master/screenshots/options.png "JIRA Issue Opener: Options")

# Description
Basically extension simply adds your issue key to specified URL and opens it in new tab. `URL` is parameter, that user should specify in Options page (only one time after installation) and `KEY` is issue key that user inserts into extension field.

There are two possible options:
* URL of JIRA
* Default Project
If only first one is filled, then final URL will be `URL/browse/KEY` - you can use this if you have multiple JIRA projects.
If both fields are filled and inserted key contains only numbers, then default project will be prepended to the key. The final URL will be `URL/browse/PROJECT-KEY` - this option can be used if you have only one JIRA project and you operate only with the sequence number in the JIRA issue code.

**Features**
* `KEY` is case insensitive
* All spaces in the beginning and in the end will be trimmed
* Skype formatting will be trimmed: `[16.09.2014 13:34:34] Irina Ivanova: KEY-776` will be recognized as `KEY-776`
* If key contains only numbers it will be prepended with project option: the link will be `URL/browse/PROJECT-KEY`

# Chrome Tip
You can configure hot keys for extension in the Google Chrome:
* open the extensions tab - `chrome://extensions`
* link "Configure commands" at the bottom
* choose an extension and type a shortcut

Now You can use it completely without a mouse!

# Posts About JIRA Issue Opener
* *January 5, 2015* [Getting Started With FireFox Extensions](http://ivanova-irina.blogspot.com/2015/02/getting-started-with-firefox-extensions.html "Getting Started With FireFox Extensions")
* *September 17, 2014* [JIRA Issue Opener v1.1](http://ivanova-irina.blogspot.com/2014/09/jira-issue-opener-v11.html "JIRA Issue Opener v1.1")
* *September 12, 2014* [JIRA Issue Opener v1.0](http://ivanova-irina.blogspot.com/2014/09/jira-issue-opener-v10.html "JIRA Issue Opener v1.0")
