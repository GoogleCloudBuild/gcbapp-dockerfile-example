# Contentful UI Extensions

https://www.contentful.com/developers/docs/concepts/uiextensions/

## Creating a new extension

You will need to install [contentful-cli](https://github.com/contentful/contentful-cli), login and set the contentful space.

1. Create a new folder in this directory and name it after the extension you will create.
2. Inside, create an extension.json file and an index.html file as per the Contentful extensions docs.
3. Install your extension: (note that your srcdoc will need to be less than 200kb)

`contentful extension create --descriptor <path-to-extension.json-from-project-dir> --srcdoc <path-to-index.html-from-project-dir>` There are some other optional parameters ([see docs](https://github.com/contentful/contentful-cli/tree/master/docs/extension/create)).

4. Test it!
5. If all is working correctly, create a script in package.json for updating the extension in the future and name it according to convention (upload-extension-<extension-name>):

`contentful extension update --force --id <extension-id> --name <extension-name> --descriptor <path-to-extension.json-from-project-dir> --srcdoc <path-to-index.html-from-project-dir>` ([docs](https://github.com/contentful/contentful-cli/tree/master/docs/extension/update))

6. Commit, push, pull request, merge.

## Updating an existing extension

1. Edit the index.html or extension.json files as needed.
2. Create it as a new test extension (see above).
3. Test it!
4. If all is working correctly, delete the test extension and run the update script:

`npm run upload-extension-<extension-name>`

5. Commit, push, pull request, merge.
