# Static Folder
GatsbyJS recommends not using a static folder:
https://www.gatsbyjs.org/docs/adding-images-fonts-files/#using-the-code-classlanguage-textstaticcode-folder

## Favicons

Only favicons that will be used by a Gatsby plugin should be put in this folder. For example, the gatsby-plugin-manifest uses the android chrome favicons to add to the manifest file.

Other favicons should be placed in /src/images/favicons.
