module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  port: 32769,
  password: 'senha',
  database: 'gobarber',
  define: {
    timestamps: true,
    underscored: true,
    underscoreAll: true,
  },
};
