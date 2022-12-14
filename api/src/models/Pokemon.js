const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {

    id: {type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true, allowNull: false },

    name: { type: DataTypes.STRING, allowNull: false, unique: true },

    experience: { type: DataTypes.STRING, allowNull: true},

    attack: { type: DataTypes.STRING, allowNull: true},

    defence: { type: DataTypes.STRING, allowNull: true},

    speed: { type: DataTypes.STRING, allowNull: true },

    height: { type: DataTypes.STRING, allowNull: true },

    weight: { type: DataTypes.STRING, allowNull: true },

    img: { type: DataTypes.TEXT, allowNull: false, defaultValue: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/769px-Pokebola-pokeball-png-0.png' },

    source: { type: DataTypes.STRING, allowNull: false, defaultValue: 'Database' }


  });
};
