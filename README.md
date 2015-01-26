# Bitcoin Point of Sale

This is a simple Bitcoin POS built with Node.js.

## Dev quick start

`./node_modules/node-sass/bin/node-sass -w -o ./public/css/ views/style.sass`
`./bin/dev_start.sh`

## Shell Scripts

NodeBootstrap comes with three shell scripts (located in the `bin` folder):

* dev_start.sh will start your server.js node app in single-CPU mode with hot-realoading of code enabled. Convenient for
active development.
* start.sh will start your server.js without hot-reloading, but with as many child processes as you have CPU cores.
Recommended for production.
* stop.sh is a counterpart of start.sh to easily stop running background processes.

By default, dev_start.sh also lets Express.js handle static files so you don't have to have a web server. The production
version: start.sh assumes that you want your web-server (Nginx?) to take on this job.

## Contextualizing Runtime Environment

Following environmental variables can affect the runtime behavior and startup mode:

* NODE_LAUNCH_SCRIPT - defaults to "server.js"
* NODE_ENV - defaults to "production"
* NODE_CLUSTERED - defaults to 1 (on)
* NODE_HOT_RELOAD - defaults to 0 (off)
* NODE_SERVE_STATIC - defaults to 0 (off) - in production you should serve static content with NginX, not: Node.
* NODE_CONFIG_DIR - defaults to "config" folder in the current folder
* NODE_LOG_DIR - defaults to "logs" folder in the current folder

## Hot Reloading vs. Daemon-izing Script

In production environments it is a good idea to daemon-ize your Node process using Forever.js. Forever will restart
the process if it accidentally crashes.

In development, it is much more important to have "hot-reloading" of code available. This feature can be provided
with Supervisor.js package. If you set NODE_HOT_RELOAD to 1, start.sh will run in hot-reloading mode watching your
main script, libs folder and config folder.

Unfortunately, Supervisor and Forever packages do not work nicely with each other, so you can only use one
or the other, at this point. Setting NODE_HOT_RELOAD to 1 disables backgrounding of your script and runs your Node
application in foreground (which, to be fair, in most cases, is what you probably want during development, anyway).

## License

GPLv3+

