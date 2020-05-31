# Description

This is an example stack on how Lambda layers can be utilised in a way that the node_modules still can be used by the source code, but when the stack being deployed, the layer is going to have only the node_modules and the lambda function is going to have only the source.

Meaning the source files can be run locally or within any tests without having issues of linking the node_modules from a folder alien relative to the source files OR having a duplicates of node_modules or packages.

Also means that you can view and edit the sources directly in the console ui of the lambda function, which greatly improves debugging cycles, and IAT/UAT cycles.

But bear in mind, that you have to "partition" your packages:
- Packages neeeded by the source code gouse to `src/nodejs/package.json`
- Packages needed locally (e.g. for deploying) goes to the root `package.json`