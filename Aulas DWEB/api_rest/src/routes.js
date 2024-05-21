const express = require('express');
const { listInstructors, listInstructor, registerInstructor, updateInstructor, deleteInstructor } = require('./controllers/instructors');

const routes = express();

routes.get('/', listInstructors);
routes.get('/instructor/:id', listInstructor);
routes.post('/instructors', registerInstructor);
routes.put('/instructors/:id', updateInstructor);
routes.delete('/instructors/:id', deleteInstructor);

module.exports = routes