const express = require('express');
const { listInstructors, listInstructor, registerInstructor } = require('./controllers/instructors');

const routes = express();

routes.get('/', listInstructors);
routes.get('/instructor/:id', listInstructor);
routes.post('/instructors', registerInstructor);

module.exports = routes