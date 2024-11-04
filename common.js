module.exports.commonSize = {
  minSize: 100 * 1024,
  /**
   * 1. 如果是这个配置，那么 webpack 在模块级联的同时，也同时受split chunk的限制 
   * 2. 但是 rsbuild 则完全忽略了 split chunk 的限制，无脑的合并，所以导致 main chunk 会无法限制在一个合理的大小
   * 
   */
  maxSize: 200 * 1024, 


  // 如果是这个配置，那么webpack 和 rsbuild 将会是一致的结果
  // maxSize: 1024 * 1024, 
};
