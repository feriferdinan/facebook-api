'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Student extends Model {
    static get table(){
        return 'students'
    }
    static get primaryKey(){
        return 'id'
    }
    address () {
        return this.hasMany('App/Models/Address')
        }
}

module.exports = Student
