/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bajql8nuzz90156")

  // remove
  collection.schema.removeField("phk0wn0k")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fmkl8c5c",
    "name": "ingredients",
    "type": "editor",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "convertUrls": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bajql8nuzz90156")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "phk0wn0k",
    "name": "ingredients",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 2000000
    }
  }))

  // remove
  collection.schema.removeField("fmkl8c5c")

  return dao.saveCollection(collection)
})
