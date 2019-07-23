'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FeedSchema extends Schema {
  up () {
    this.create('feeds', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.string('media')
      table.string('content')
      table.timestamps()
    })
  }

  down () {
    this.drop('feeds')
  }
}

module.exports = FeedSchema
