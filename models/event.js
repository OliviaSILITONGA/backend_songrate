const Event = sequelize.define('Event', {
  comments: {
    type: DataTypes.JSON,
    allowNull: true,
    defaultValue: [],
    get() {
      const value = this.getDataValue('comments');
      return value || [];
    },
    set(value) {
        this.setDataValue('comments', value);
    }
  }
}, {
});
