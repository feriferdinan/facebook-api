'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class StorieSchema extends Schema {
  up () {
    this.create('stories', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.string('media')
      table.string('content')
      table.timestamps()
    })
  }

  down () {
    this.drop('stories')
  }
}

module.exports = StorieSchema
