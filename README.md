# test-automation

Project Name: Hubtel Blog Testing
Framework: Playwright
Date: October 2024
Author: Kingsley

1. Introduction
This document provides an overview of the automated testing performed on the Hubtel Blog using Playwright. The purpose of this project was to verify the visibility and functionality of various elements on the Hubtel Blog page on chromium browsers.
Test Case 1:
Test Name: Verify visibility and appropriate navigation of the above listed tabs(News,Press Release,Customer Stories,Product Updates,Guides,Inside Hubtel)
Objective:To verify that all tabs are visible and navigate to their pages.
Test steps:
Open hubtel blog
Identify the tabs
Ensure each tab is visible
Click on each tab (wait for content to load)
Verify url of loaded page contains specific text
Ensure the loaded page has respective page title
Expected Result:All tabs should be visible and navigate to respective pages
Actual Result: Failed.Some of the tabs could not be located due to the 3-second timeout.
Recommendation:Modify timeout for future test run

Test Case 2:
Test Name:Featured blog post Testing
Objective: To verify that the two featured blogs posts are visible and navigation links fuction well.
Test steps:
Check for the text in the featured blog post
Ensure it is visible
Click on the Url 
Verify url of the loaded content contains specific text
Expected Result: Featured blog post should be visible and navigate appropriately
Actual Result: Passed

Test Case 3:
Test Name: Search icon and input .
Objective: To verify that search icon is visible and input and performing searches work
Test Steps:
Identify search icon
Hover mouse cursor over it
Ensure search box is visible
Input search item input search box
Press enter and wait for content to load
Expected Result: Search icon should be visible and performing searches should be successful.
Actual Result:Passed

Test Case 4
Test Name:Footer Validation
Objectives: To ensure that the footer is visible and that all link navigate correctly
Test Steps:
Go to hubtel blog
Identify footer
Ensure links are visible
Verify if links are clickable
Expected Result: Footer should be visible and links should work as expected
Actual Result: Passed

Test Issues and Debugging
Issue: Locator errors 
Several locators matched multiple elements due to the similarity in attributes.
Solution: Use the .first() or .nth(index) method to target a specific element when multiple elements match the same locator.
Issue: Timeouts waiting for elements to be visible
Some tests timed out due to slow page load .
Solution: Consider increasing timeout values for slow-loading pages.


