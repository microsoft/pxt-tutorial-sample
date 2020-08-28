# Contributing

This project welcomes contributions and suggestions.  Most contributions require you to agree to a
Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us
the rights to use your contribution. For details, visit https://cla.opensource.microsoft.com.

When you submit a pull request, a CLA bot will automatically determine whether you need to provide
a CLA and decorate the PR appropriately (e.g., status check, comment). Simply follow the instructions
provided by the bot. You will only need to do this once across all repos using our CLA.

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).
For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or
contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.

# Sample MakeCode Tutorial

This repository is an example of how to host a MakeCode tutorial on Github. This particular tutorial is for MakeCode Arcade, but this is fully supported for micro:bit and Minecraft as well.

## Creating a Tutorial

To create your tutorial repository:

* Open [https://arcade.makecode.com/](https://arcade.makecode.com/) (or makecode.microbit.org, minecraft.makecode.com)
* Click on **New Project**
* Give the project a descriptive name
* Click on the **Github Icon** on the bottom toolbar next to the project name and sign in if prompted
* Click **Go ahead**

This will make an empty MakeCode repository in your Github account.

## Tutorial Files

By default, the content from the README file is loaded as a tutorial. You can view it using this URL:

> [http://arcade.makecode.com/#tutorial:https://github.com/microsoft/pxt-tutorial-sample](http://arcade.makecode.com/#tutorial:https://github.com/microsoft/pxt-tutorial-sample)

The url should be formatted as follows: `https://[editor URL]/#tutorial:[github-username]/[github-repository-name]`

You can also include additional tutorials in one repository. In this case, the `first-tutorial.md` and `second-tutorial.md`. If you add a new file, make sure it is included in the `files` list in `pxt.json`. If you add this file from the MakeCode Editor, it will be automatically updated. You can view these tutorials at the following URLs:

> [http://arcade.makecode.com/#tutorial:https://github.com/microsoft/pxt-tutorial-sample/first-tutorial](http://arcade.makecode.com/#tutorial:https://github.com/microsoft/pxt-tutorial-sample/first-tutorial)

> [http://arcade.makecode.com/#tutorial:https://github.com/microsoft/pxt-tutorial-sample/second-tutorial](http://arcade.makecode.com/#tutorial:https://github.com/microsoft/pxt-tutorial-sample/second-tutorial)

The url should be formatted as follows: `https://[editor URL]/#tutorial:[github-username]/[github-repository-name]/[path-to-tutorial]`

## Custom Blocks

A repository containing a tutorial may also contain custom blocks for use in the tutorial. The `custom.ts` file here exports two functions as blocks. These blocks can then be used in any tutorial in the same repository. As with new tutorial files, make sure any new TypeScript files are added to the list in `pxt.json`.

## Custom Localization

Localized versions of the tutorial can also be added to the repository, under a `_locales` folder. This folder contains a list of sub-directories with the correctly capitalized language code (eg. zh-CN, de-DE). The localized tutorial should have the same file name as the base tutorial. To view a localized version of the tutorial, add `?lang=[language-code]` to the URL, as follows:

> [http://arcade.makecode.com?lang=zh-CN#tutorial:https://github.com/microsoft/pxt-tutorial-sample/first-tutorial](http://arcade.makecode.com?lang=zh-CN#tutorial:https://github.com/microsoft/pxt-tutorial-sample/first-tutorial)

## Creating a Release

When you update the Github repository, it make take up to 20 minutes for your changes to be reflected in the MakeCode editor, due to caching. To force an update, you will need to create a "release":

* Open [https://arcade.makecode.com/](https://arcade.makecode.com/) (or makecode.microbit.org, minecraft.makecode.com)
* Click on **Import** on the right-hand side above the row of your projects
* Select **Your Github Repo** and sign into Github if prompted
* Select the repository with your tutorial
* In the MakeCode editor, click the **Github Icon** on the bottom toolbar by the project name
* In the **Release Zone** section of the page, click **Create a Release** and select whichever release type feels most appropriate.
