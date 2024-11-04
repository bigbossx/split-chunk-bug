
# split chunk 分割 bug 的最小复现demo


[修改配置看这里](./common.js)

> 另外我特意提交了dist。旨在说明，node_modules 的chunkIds 也非常奇怪，ahooks 占据了所有的这其中的原因大概率还是因为分割导致的。 相比之下，webpack 的chunkIds 则清晰明了。也可以看看