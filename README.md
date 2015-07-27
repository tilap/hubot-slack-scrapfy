Hubot Slack Scrapfy [![NPM version][npm-image]][npm-url] [![Github issues][github-issues-image]][github-issues-url] [![Github license][github-license-image]][github-license-url]
============================

**Hubot Slack Scrapfy** is a Slack bot that create [ScrapFy](http://scrapfy.io/) rooms on demand.

See [release notes page](https://github.com/tilap/hubot-slack-scrapfy/blob/master/CHANGELOG.md) for updates.

## Installation

In hubot project repository, run:

`npm install --save hubot-slack-scrapfy`

Then add **hubot-slack-scrapfy** to your `external-scripts.json`:

```json
["hubot-slack-scrapfy"]
```

_If you already have the "hubot-help" script, the Hubot Slack Scrapfy documentation will be happened to the help response_

## Configure

No configuration needed.

## Examples

**Create a scrapfy room**
```
user>> hubot scrapfy
```

**Create a scrapfy room with language set up**
```
user>> hubot scrapfy javascript
```

**Display the available languages**
```
user>> hubot scrapfy infos
```

[npm-image]: https://img.shields.io/npm/v/hubot-slack-scrapfy.svg?style=flat
[npm-url]: https://npmjs.org/package/hubot-slack-scrapfy
[github-issues-image]: https://img.shields.io/github/issues/tilap/hubot-slack-scrapfy.svg
[github-issues-url]: https://github.com/tilap/hubot-slack-scrapfy/issues
[github-license-image]: https://img.shields.io/badge/license-MIT-blue.svg
[github-license-url]: https://github.com/tilap/hubot-slack-scrapfy/blob/master/LICENSE
