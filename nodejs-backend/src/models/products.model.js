// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
    const modelName = 'products';
    const mongooseClient = app.get('mongooseClient');
    const { Schema } = mongooseClient;
    const schema = new Schema(
      // ~cb-read-start~
      {
       sku: { type: Number, required: true, unique: true },
       name: { type: String, required: true },
       brand: { type: String },
       price: { type: Number },
       rating: { type: Number },
       inStock: { type: Boolean },

    }
      // ~cb-read-end~
      , 
      {
      timestamps: true
    });
  
    // This is necessary to avoid model compilation errors in watch mode
    // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
    if (mongooseClient.modelNames().includes(modelName)) {
      mongooseClient.deleteModel(modelName);
    }
    return mongooseClient.model(modelName, schema);
    
  };