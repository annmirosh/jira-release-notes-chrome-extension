# JIRA's Release Notes formatter (extension for Chrome)

This is an extension for Chrome that will format standard output for release notes in JIRA.
By default, JIRA has two possible styles of the formatting for the release notes: HTML and Text.

This extension allows getting third style - that include both html and text.

Release notes will contain URLs on the tasks/bugs (that is a part of the HTML style),
but won't contain unneeded HTML, that JIRA adds, so this extension removes
unneeded HTML from the release notes and create it in the following view format:

Release Notes (main header)

Issue type
url - Task's title
url - Task's title

Issue type
url - Task's title
url - Task's title