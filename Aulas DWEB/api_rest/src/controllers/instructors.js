const { instructors } = require("../database");

function listInstructors (req, res) {
    return res.status(200).json(instructors);
  }

  function listInstructor (req, res) {
    const {id} = req.params;

    const result = instructors.find((instructor) => {
        return instructor.id === Number(id);
    })

    if(!result) {
        return res.status(404).json({message: 'Instructor not found'});
    }
    return res.status(200).json(result);
  }

  function registerInstructor (req,res) {
    //console.log(req.body);
    const { nome, email, status } = req.body

    if(!nome) {
      return res.status(400).json({message: "The Name field is required." })
    }

    if(!email) {
      return res.status(400).json({message: "The Email field is required." })
    }

    if(!status) {
      return res.status(400).json({message: "The Status field is required." })
    }

    const instructor ={
      nome: nome,
      email: email,
      status: status
    }

    instructors.push(instructor);

    return res.status(201).json(instructor);
  }

  module.exports = {
     listInstructors,
     listInstructor,
     registerInstructor
  }