'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ResponseSchema extends Schema {
  up () {
    this.create('responses', (table) => {
      table.increments()
      table.string('name')
      table.timestamps()
    })
  }

  down () {
    this.drop('responses')
  }
}

module.exports = ResponseSchema
