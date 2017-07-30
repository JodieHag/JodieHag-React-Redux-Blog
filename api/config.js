module.exports = {
  port: process.env.PORT || 3000,
  db: process.env.MONGODB || 'mongodb://localhost:27017/blog' || 'mongodb://JodieHag:Mcgrady13@fierce-bayou-34347/blog'
};
