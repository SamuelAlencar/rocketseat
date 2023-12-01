
import { randomUUID } from 'node:crypto'
import { Database } from './database.js'
import { buildRoutePath } from './utils/build-route-path.js'

const database = new Database()

// Route parameters, request body, query paramenters

export const routes = [
    {
        method: 'GET',
        path: buildRoutePath('/tasks'),
        handler: (req, res) => {
            const { search } = req.query

            const tasks = database.select('tasks', search ? {
                title: search,
                description: search,
            } : null)

            return res.end(JSON.stringify(tasks))
            
        }
    },
    {
        method: 'POST',
        path: buildRoutePath('/tasks'),
        handler: (req, res) => {

            function createAt() {
                return new Date()
            }

            const { title, description, completed_at, create_at, update_at} = req.body

            const task = {
                id: randomUUID(),
                title,
                description,
                completed_at: null,
                create_at: createAt(),
                update_at: null,
            }
    
            database.insert('tasks', task)
    
            return res.writeHead(201).end()          
        }
    },
    {
        method: 'PUT',
        path: buildRoutePath('/tasks/:id'),
        handler: (req, res) => {

            const { id } = req.params

            const { title, description, completed_at, create_at, update_at } = req.body

            database.update('tasks', id, {
                title,
                description,
                completed_at,
                create_at,
                update_at,
            })

            // console.log(req.params)

            return res.writeHead(204).end()       
        }
    },    
    {
        method: 'DELETE',
        path: buildRoutePath('/tasks/:id'),
        handler: (req, res) => {
            const { id } = req.params

            database.delete('tasks', id)

            return res.writeHead(204).end()       
        }
    },
    
]