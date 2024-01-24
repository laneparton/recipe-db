/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bajql8nuzz90156")

  // remove
  collection.schema.removeField("bjycytbv")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "iw2w1ohw",
    "name": "instructions",
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
    "id": "bjycytbv",
    "name": "instructions",
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

  // remove
  collection.schema.removeField("iw2w1ohw")

  return dao.saveCollection(collection)
})
