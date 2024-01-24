/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bajql8nuzz90156")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "f7mwmagg",
    "name": "cooking_time",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bajql8nuzz90156")

  // remove
  collection.schema.removeField("f7mwmagg")

  return dao.saveCollection(collection)
})
