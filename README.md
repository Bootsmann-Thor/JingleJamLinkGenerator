# What is this

This is a small script to make links from the steam keys in the jingle jam rewards email

 Note that it may turn non steam keys into steam links or include non jingle jam rewards as studio names

## Generate (Recommended)

This will turn every key into a steam link and then download the email as an html file. Note that any keys or coupons with the same format as steam may unintentionally be turned into links.

## Extract

This tries to extract all steam games from the jingle jam part of the email and download them as a txt file.

Note that the studio names will include descriptions from other charity rewards in the same email. The offsets in the slice function will need to be adjusted in this case.

Also Note that this does not extract other jingle jam rewards like the displate discount.

# How to use

First: read the caveats of each script and decide e.g. if you need to use the slice function in the extract script.

Second: open the email in the browser

Third: open the dev console of your browser using ctrl + shift + i
(if this doesn't work, refer to [mozilla's documentation on opening dev console in different browsers](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools))

Fourth: paste saveAsFile.js and the script into the console and press enter
