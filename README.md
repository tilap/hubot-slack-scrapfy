Hubot Slack Scrapfy [![NPM version][npm-image]][npm-url]
============================

**Hubot Slack Scrapfy** is a Slack bot that create [ScrapFy](http://scrapfy.io/) rooms on demand.

See [release notes page](https://github.com/tilap/hubot-slack-scrapfy/blob/master/Releases.md) for updates.

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
