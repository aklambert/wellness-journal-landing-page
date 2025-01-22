# Wellness Journal Landing Page
This is a landing page for an android app being developed, called [Wellness Journal](https://github.com/aklambert/Wellness-Journal). This is a mobile app that has fitness features, journaling features, and a timer feature. It is meant to be an app that has both finess and journaling features in one app to help people track both their physical and mental health.


## Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
