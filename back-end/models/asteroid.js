module.exports = (sequelize, Sequelize) => {
  const Asteroid = sequelize.define(
    "Asteroid",
    {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      designation: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      closeApproachDate: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
      },
      distance: {
        type: Sequelize.DataTypes.DOUBLE,
        allowNull: false,
      },
      min_distance: {
        type: Sequelize.DataTypes.DOUBLE,
        allowNull: false,
      },
      max_distance: {
        type: Sequelize.DataTypes.DOUBLE,
        allowNull: false,
      },
      velocity: {
        type: Sequelize.DataTypes.DOUBLE,
        allowNull: false,
      },
      riskScore: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false, 
      },
      riskLevel: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false, 
      },
    },
    {
      indexes: [
        {
          unique: true,
          fields: ["designation", "closeApproachDate"],
        },
      ],
    },
  );
  return Asteroid;
};
