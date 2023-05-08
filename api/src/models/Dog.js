const { DataTypes } = require('sequelize');
// --------------- DB -modules ---------------

const { Temperaments } = require('./Temperaments');
// --------------- otra tabla ----------------

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {

    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4, 
      primaryKey: true,
      allowNull: false,
    },

    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    height: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    weight: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    life_span: {
      type: DataTypes.STRING,
      allowNull: false,
    },

  });
};


// que  tiene cada dog:
/*
id, image, name,
height, weight, life_span
*/




















/*
{
  "weight":{"imperial":"6 - 13","metric":"3 - 6"},
  "height":{"imperial":"9 - 11.5","metric":"23 - 29"},
  "id":1,
  "name":"Affenpinscher",
  "bred_for":"Small rodent hunting, lapdog",
  "breed_group":"Toy",
  "life_span":"10 - 12 years",
  "temperament":"Stubborn, Curious, Playful, Adventurous, Active, Fun-loving",
  "origin":"Germany, France",
  "reference_image_id":"BJa4kxc4X"}
*/