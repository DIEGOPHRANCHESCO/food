const { DataTypes } = require("sequelize");

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Recipe",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      
      image: { 
        type: DataTypes.STRING, 
        allowNull: false,
      }, 

      // resumen del plato  
      summary: {
        type: DataTypes.TEXT,
        allowNull: false,       
      },


      // nivel de alimentacion saludable (puntuacion de salud)
      healthScore: {
        type: DataTypes.INTEGER,
        allowNull: 0,
        validate: {
          max:100,
          min: 0
        }
      },
   
      steps: {
        type: DataTypes.TEXT,
        allowNull: true,
      }, 
      
      created: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: true,
      },
    },
    { timestamps: false, createdAt: "creado", updatedAt: false }
  );
};
  