'use strict';
const { Model } = require('sequelize');
const moment = require('moment');

module.exports = (sequelize, DataTypes) => {
  class Article extends Model {
    publishedAt() {
      const date = moment(this.createdAt).format("MMMM D, YYYY, h:mma");
      return date;
    }
    shortDescription() {
      const shortDesc = this.body.length > 200 ? this.body.substring(0, 200) + "..." : this.body;
      return shortDesc;
    }
  }

  Article.init({
    title: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: '"Title" is required'
        }
      }
    },
    author: DataTypes.STRING,
    body: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Article',
  });

  return Article;
};
