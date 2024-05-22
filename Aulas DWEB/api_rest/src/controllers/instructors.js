
let { instructors } = require("../database");

function listInstructors(req, res) {
  return res.status(200).json(instructors);
}

function listInstructor(req, res) {
  const { id } = req.params;
  const result = instructors.find((instructor) => {
    return instructor.id === Number(id);
  })

  if (!result) {
    return res.status(404).json({ message: 'Instructor not found' });
  }
  return res.status(200).json(result);
}

function registerInstructor(req, res) {
  //console.log(req.body);
  const { name, email, status } = req.body

  if (!name) {
    return res.status(400).json({ message: "The Name field is required." })
  }

  if (!email) {
    return res.status(400).json({ message: "The Email field is required." })
  }

  if (!status) {
    return res.status(400).json({ message: "The Status field is required." })
  }

  const instructor = {
    name: name,
    email: email,
    status: status
  }

  instructors.push(instructor);

  return res.status(201).json(instructor);
}

function updateInstructor(req, res) {
  const { id } = req.params;
  const { name, email, status } = req.body

  const result = instructors.find((instructor) => {
    return instructor.id === Number(id);
  })

  if (!result) {
    return res.status(404).json({ message: 'Instructor not found' });
  }

  if (!name) {
    return res.status(400).json({ message: "The Name field is required." })
  }

  if (!email) {
    return res.status(400).json({ message: "The Email field is required." })
  }

  if (!status) {
    return res.status(400).json({ message: "The Status field is required." })
  }

  result.name = name;
  result.email = email;
  result.status = status;

  return res.status(204).send (result);
}

function deleteInstructor (req, res) {
  const { id } = req.params;

  const result = instructors.find((instructor) => {
    return instructor.id === Number(id);
  })

  if (!result) {
    return res.status(404).json({ message: 'Instructor not found' });
  }

  instructors = instructors.filter((instructor) => {
    return instructor.id !== Number(id);
  })

  return res.status(200).json({message: 'successfully deleted instructor'})
}


module.exports = {
  listInstructors,
  listInstructor,
  registerInstructor,
  updateInstructor,
  deleteInstructor
}