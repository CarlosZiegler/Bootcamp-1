module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'senhadocker',
  database: 'gobarber',
  define: {
    timestamps: true,
    underscored: true,
    underscoreAll: true,
  },
};
