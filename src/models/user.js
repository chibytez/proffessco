export default (sequelize, DataTypes) => {
  const Users = sequelize.define(
    'Users',
    {
      userId: {
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        required: true
      },
      firstname: {
        type: DataTypes.STRING,
        required: true
      },
      lastname: {
        type: DataTypes.STRING,
        required: true
      },
      email: {
        type: DataTypes.STRING,
        required: true
      },
      password: {
        type: DataTypes.STRING,
        required: false
      },
      phone: {
        type: DataTypes.STRING,
        required: false
      },
      isAdmin: {
        type: DataTypes.BOOLEAN,
        required: false
      },
      status: {
        type: DataTypes.BOOLEAN,
        required: false
      },
      notifyemail: {
        type: DataTypes.BOOLEAN,
        required: true
      },
      gmail: {
        type: DataTypes.STRING,
        required: false
      },
      facebook: {
        type: DataTypes.STRING,
        required: false
      },
      gender: {
        type: DataTypes.STRING,
        required: false
      },
      birthday: {
        type: DataTypes.DATE,
        required: false
      },
      address: {
        type: DataTypes.STRING,
        required: false
      },
    },
    {}
  );
  Users.associate = (models) => {

  };

  return Users;
};
