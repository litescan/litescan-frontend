<h1 align="center">
  <br>
  <img width="40%" src="https://raw.githubusercontent.com/litescan/docs/master/images/xlt900x450.jpg">
  <br>
  Litescan Frontend
  <br>
</h1>

<h4 align="center">
  React.js Frontend for <a href="https://litescan.org">Litescan.org</a>
</h4>

<p align="center">
  <a href="#requirements">Requirements</a> •
  <a href="#installation">Running</a> •
  <a href="https://litescan.org">litescan.org</a>
</p>

## Features

* All information from the blockchain viewable
* Web Wallet
* Super Representative Voting
* Node Tester
* Transaction Debugger
* Notifications
* Market Information
* News
* Node Overview

# Requirements

* node.js
* yarn

# Running

```bash
> yarn install
> yarn start
```

## Configuring API URL

By default the Explorer will connect to https://api.litescan.org for its data. 

When developing locally the url can be changed by defining the `API_URL` environment variable

```bash
> API_URL=http://127.0.0.0:9000 yarn start
```

## Building Desktop Apps

Litescan.org can be published as a Desktop app wrapped in Electron.

To build a Windows, Mac and Linux app run the following command:

```bash
> yarn run desktop:build:full
```
