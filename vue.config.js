module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/new-project/' // new-project 為 repo 名稱
      : '/'
  }