# Apollo Server

A example example of Apollo server run on kubernetes with helm.

_Developed locally with skaffold_


## node_modules

This kind of repo structure for educational purposes causes some performance issues with helm.
Large node_modules folders will stop helm gzip and configmap deploying so they need to be added to `.helmignore`
