To Do:
    HTML/Pop-Up Page:
[x] On the pop up page, we will have a list of text boxes to populate the details for logging JIRA.
[x] Title (Editable)
[x] Description
[x] Search string
[x] Stack trace
[x] # of times
[x] Labels as check boxes
[x] 'Populate' and 'Create JIRA' buttons.
[ ] Span tag with the JIRA number.
[x] Enabling/disabling the buttons based on workflow (Investigate other possibilities).
[x] Clear chrome local storage for current JIRA after we get success from JIRA API.
[ ] Option to open the newly created JIRA in a new background tab.
---------------------------------------------------------------------------------------------------------------------------
    Options Page:
[ ] Splunk integration (Event Type creation, permissions update and associate to search criteria)
[ ] New field to select Components from dropdown
[ ] Ability to configure multiple teams/profile (JIRA instance, Project Name, Issue Type, Components, Labels)
[x] JIRA Instance
[ ] Logic to select which JIRA instance is the default.
[x] User ID and Password input.
[x] List of labels
[ ] Alphabetically sorted Label List
[ ] Whether Labels are selected by default or not.
[x] Maintain History of JIRAs that are created.
[x] JIRA project to log the issue to.
[x] Issue type selection.
[ ] Show an error notification on JIRA instance "Save" when URL isn't valid.
---------------------------------------------------------------------------------------------------------------------------
    Others:
[x] Have extension enable/disable based on URL
[x] Splogger icon doesn't show up in chrome://extensions/ page
---------------------------------------------------------------------------------------------------------------------------
    Nice to Haves:
[ ] Validate that search string does not have Needs JIRA Logged eventtype
[ ] Add a default Splogger label to monitor adoption rate/usage.
[ ] URL validation
[ ] Retrieving labels from JIRA server based on default JIRA selected.
[ ] User response when the search string is not valid
[x] 'Clear' button for reset.
[ ] Create JIRA Goal in options page.
[ ] JIRA Goal met if we log more JIRA's.
[ ] Domain info
[x] Flex JIRA URL based on whether the user enters a trailing forward slash or not
[ ] 'Enter' button should trigger the 'Save' button
[ ] Use Cookies/JSessionID in Header instead of user-pass (More Info: https://stackoverflow.com/a/15300769, https://stackoverflow.com/questions/12057890/fake-user-agent-for-iframe)
---------------------------------------------------------------------------------------------------------------------------
    JIRA API:
[x] Create JIRA when we click on 'Create JIRA' button.
[x] On save of options page, we get the token and save it.
[ ] Get token if it is expired already when we click create JIRA.
[ ] Create notification when password expires.
[x] Get reply back from JIRA with the JIRA number
---------------------------------------------------------------------------------------------------------------------------
    Parsing HTML:
[x] Should only trigger when user hits 'Populate' button
[x] Save all data in Chrome local storage.
[x] Get the URL, query string and stack trace
