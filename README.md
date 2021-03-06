# Naomi

[![Sublime version](https://img.shields.io/badge/sublime%203->%3D3126-orange.svg?style=flat-square)][sublime]
[![License](http://img.shields.io/:license-apache-blue.svg?style=flat-square)][license]

## Installation

#### Manual installation

Clone the repository in your Sublime Text “Packages” directory:

    git clone https://github.com/borela/naomi.git Naomi

The “Packages” directory is located at:

* **OS X**: `~/Library/Application Support/Sublime Text 3/Packages`
* **Linux**: `~/.config/sublime-text-3/Packages`
* **Windows**: `%APPDATA%\Sublime Text 3\Packages`

#### Installing using Package Control

1. Install [Package Control](https://packagecontrol.io/installation).
2. Run **Package Control: Install Package** command.
3. Find and install the **Naomi** plugin.
4. Restart Sublime Text if there are issues.

## Usage

1. Go to the menu `View / Syntax / Naomi / ...` to select the new syntax.
2. Select a color scheme provided in `Preferences / Color Scheme / Naomi`.

**Notes:** The recommended color scheme is [Candyman][candyman] which covers many
of the scopes and can serve as a starting point if you want to create your own using
[CSScheme][csscheme]. Please look into the [DESIGN][design] document for a list
of the available scopes and their structure.

### Sublime Linter

To enable [Sublime Linter][sublimeLinter] with the syntaxes available, you need to:

1. Go to the menu `Preferences / Package Settings / SublimeLinter / Settings - User `.
2. Add these entries to the `syntax_map`:

```JSON
{
  "syntax_map": {
    "naomi.fjsx15": "javascript",
    "naomi.html5": "html",
    "naomi.mql4": "mql",
    "naomi.php7": "php",
    "naomi.scss3": "scss",
    "naomi.xml1": "xml"
  }
}
```

## Features

#### General

* Auto complete asterisks in documentation blocks.
* Add Mac’s curly quotes shortcuts for Windows and Linux:
  1. Alt+[ produces “.
  2. Alt+Shift+[ produces ”.
  3. Alt+] produces ‘.
  4. Alt+Shift+] produces ’.
* Stable syntaxes:
  * FJSX15 (Combines ES2015+, Flow, React’s JSX).
  * JSON.
  * HTML 5.
  * SCSS3.
  * MQL4.
  * PHP 7.
  * XML 1.0.

## Preview

#### FJSX15 (ES2015 + FlowType + React’s JSX)

![Candyman FJSX15 preview 1](./preview/fjsx15/candyman-1.png)
![Candyman FJSX15 preview 2](./preview/fjsx15/candyman-2.png)

[candyman]: ./schemes/candyman
[csscheme]: https://github.com/FichteFoll/CSScheme
[design]: ./DESIGN.md
[license]: ./LICENSE.md
[sublime]: http://www.sublimetext.com/
[sublimeLinter]: https://github.com/SublimeLinter/SublimeLinter3
