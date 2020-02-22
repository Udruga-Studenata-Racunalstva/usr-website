<h1 align="center">Contributing 👥</h1>

> Project structure, naming conventions, tech stack used etc.

# Contributing to usr-website

:tada: Thanks for taking the time to contribute! :tada:

The following is a set of guidelines for contributing to usr-website which is hosted on [usr.st](https://www.usr.st) with [Heroku](www.heroku.com). These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.

## Table Of Contents

* [Project structure](#project-structure)

* [Technologies used](#technologies-used)
	* [ReactJS](#react)
	* [SCSS](#scss)
	* [HTML](#html)
	* [npm/yarn](#npm)
	* [git](#git)

*  [Styleguides](#styleguides)
	* [ReactJS](#react-styleguide)
	* [SCSS](#scss-styleguide)
	* [git](#git-styleguide)
	* [Documentation](#documentation-styleguide)

* [Additional Notes](#additional-notes)

* [Issue and Pull Request Labels](#issue-and-pull-request-labels)

## Project structure :book:

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

File structure was made with the following idea: separate components into their own folders where all the styles, tests, and jsx for that component will be stored.

Folders for components are named in PascalCase, while other folders use camelCase convention. This lets us know whether or not a folder belongs to a React component just by looking at its name.

Components are stored in **components/pages** or **components/shared** depending if they are a router page or shared across the site. Others folders may be created in the future.

<hr>

Projects architecture roughly looks like this:

```
my-app
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   ├── index.html
│   └── manifest.json
└── src
    ├── index.js
    ├── serviceWorker.js
    └── components
        ├── App.js
        ├── App.test.js
        ├── app.scss
        ├── pages
        │   ├── Home
        │   │   ├── Home.jsx
        │   │   ├── Home.test.js
        │   │   ├── index.js
        │   │   ├── _index.scss
        │   │   └── ...
        |   └── ...
        ├── shared
        |   └── ...
        └── styles
            └── ...
```

## Technologies used

### ReactJS
* [React official website](https://reactjs.org/)
* [Documentation](https://reactjs.org/docs/getting-started.html)
* Project is written in "vanilla" React, no Redux and no hooks
* [PropTypes are a must](https://reactjs.org/docs/typechecking-with-proptypes.html)

### SCSS
* [Sass official website](https://sass-lang.com/)
* [Documentation](https://sass-lang.com/guide)
* Install with `npm i -g sass` or check [other install options](https://sass-lang.com/install)
* [**dart-sass**](https://sass-lang.com/dart-sass) (or just **sass**) > **node-sass**

### HTML
* There are almost 100 different HTML tags, don't just use the generic `<div>`.  Write [semantic HTML](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)!
* Run [Google Lighthouse](https://developers.google.com/web/tools/lighthouse) audits from time to time in order to check page accessibility

### npm
* [NodeJS official website](https://nodejs.org/en/)
* [NodeJS documentation](https://nodejs.org/en/docs/)
* [npm official website](https://www.npmjs.com/)

### git
* [Git official website](https://git-scm.com/)
* [Cheatsheet](https://github.github.com/training-kit/downloads/github-git-cheat-sheet.pdf)

## Styleguides

### ReactJS
* Components were named after [VSC UI guidelines](https://code.visualstudio.com/docs/getstarted/userinterface):
<a href="https://code.visualstudio.com/assets/docs/getstarted/userinterface/hero.png"><img src="https://code.visualstudio.com/assets/docs/getstarted/userinterface/hero.png" alt="components-names"></a>
* [Component's file name should be in PascalCase](https://blog.bitsrc.io/structuring-a-react-project-a-definitive-guide-ac9a754df5eb#fbe1)
* [All components should be inside components directory](https://blog.bitsrc.io/structuring-a-react-project-a-definitive-guide-ac9a754df5eb#9c70)
* [Components having own folder should have a component file with the same name](https://blog.bitsrc.io/structuring-a-react-project-a-definitive-guide-ac9a754df5eb#1a4e)
* [Components which are used on multiple places on the website are kept in shared sub-directory](https://blog.bitsrc.io/structuring-a-react-project-a-definitive-guide-ac9a754df5eb#e761)
* [Routing logic go in pages directory](https://blog.bitsrc.io/structuring-a-react-project-a-definitive-guide-ac9a754df5eb#df36)
* TODO: Code conventions and style guidelines

### SCSS
* All Sass logic is contained in **app.scss** with ~~@import~~ **@use** rule to load sass modules.
* [Partials start with an underscore, such as **_partial.scss**](https://sass-lang.com/documentation/at-rules/use#partials)
* Each component folder has **_index.scss** which is used for [cleaner module imports](https://sass-lang.com/documentation/at-rules/use#index-files)
* Global or shared styles (eg. CSS resets), variables, mixins, and functions go into the **components/styles** folder. Rest of the CSS logic lives in component's folders
* [Private members start with '-' rather than '_'](https://sass-lang.com/documentation/at-rules/use#partials)

### git

- Use the present tense: ~~"Added feature"~~ "Add feature"
- Use the imperative mood: ~~"Moves index.js to..."~~ "Move index.js to..."
- Limit the first line to 72 characters or less
- Develop on **develop** branch, but in the future [Gitflow Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) will become the standard
- Consider starting the commit message with an applicable emoji:
    - 👷 `:construction_worker:` when restructuring or formatting the code
    - 🎨 `:art:` when working with styles
    - 🐎 `:racehorse:` when improving performance
    - 📝 `:memo:` when writing docs
    - 🐧 `:penguin:` when fixing something on Linux
    - 🍎 `:apple:` when fixing something on macOS
    - 🏁 `:checkered_flag:` when fixing something on Windows
    - 🐛 `:bug:` when fixing a bug
    - 🔥 `:fire:` when removing code or files
    - ✅ `:white_check_mark:` when adding tests
    - 🔒 `:lock:` when dealing with security
    - ⬆️ `:arrow_up:` when upgrading dependencies
    - ⬇️ `:arrow_down:` when downgrading dependencies
    - ⚠️ `:warning:` when pushing directly to master or hotfixing

### Documentation
* [Markdown](https://daringfireball.net/projects/markdown/) files are used for documentation
* Avoid fancy HTML and CSS in .md files, prefer markdown syntax whenever possible
* Use supported emojis from [GitHub emojis cheatsheet](https://gist.github.com/rxaviers/7360908)
