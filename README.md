# Apollo Server

A example example of Apollo server run on kubernetes with helm.

_Developed locally with skaffold_


## Skaffold

For local reloading whilst working within `server/*.js` just run `skaffold dev` from the root directory (assuming k8s and minikube installed)

## node_modules

This kind of repo structure for educational purposes causes some performance issues with helm.
Large node_modules folders will stop helm gzip and configmap deploying so they need to be added to `.helmignore`


## Helm Deployment

`helm install . --name=apollo-server-release -n apollo`

## Helm Undeployment

`helm remove apoll-server-release --purge`
