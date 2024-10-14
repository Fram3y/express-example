const Stage = require("../models/stage.model");

const readAll = (req, res) => {
  Stage.find().populate('festival', 'title')
    .then((data) => {
      console.log(data);
      if (data.length > 0) {
        return res.status(200).json(data);
      } else {
        return res.status(404).json("No data found");
      }
    })
    .catch((err) => {
      console.log(err);
      return res.status();
    });
};

const readOne = (req, res) => {
  let id = req.params.id;

  Stage.findById(id).populate('festival', 'title')
    .then((data) => {
      if (!data) {
        return res.status(404).json({
          message: `Stage with id:${id} not found`,
        });
      }

      return res.status(200).json({
        message: `Stage with id:${id} retrieved`,
        data,
      });
    })
    .catch((err) => {
      console.log(err);
      if (err.name === "CastError") {
        return res.status(404).json({
          message: `Stage with id:${id} not found`,
        });
      }
      return res.status(500).json(err);
    });
};

const createData = (req, res) => {
  console.log(req.body);
  let body = req.body;

  Stage.create(body)
    .then((data) => {
      console.log(`New Stage Created`, data);
      return res.status(201).json({
        message: `Stage Created`,
        data,
      });
    })
    .catch((err) => {
      if (err.name === "ValidationError") {
        return res.status(422).json(err);
      }

      return res.status(500).json(err);
    });
};

const updateData = (req, res) => {
  let id = req.params.id;
  let body = req.body;

  Stage.findByIdAndUpdate(id, body, {
    new: true,
    runValidators: true,
  })
    .then((data) => {

        if(data){
            return res.status(201).json(data);
        }

        return res.status(404).json({
            message: `could not find festival with ${id}`
        })
    })
    .catch((err) => {
      if (err === "CastError") {
        if (err.kind === "ObjectId") {
          return res.status(404).json({
            message: `Stage with ${id} not found`,
          });
        }
      } else {
        return res.status(422).json(err);
      }

      return res.status(500).json({
        message: err.message,
      });
    });
};

const deleteData = (req, res) => {
  let id = req.params.id;

  Stage.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        return res.status(404).json({
          message: `Stage with id:${id} not found`,
        });
      }

      return res.status(200).json({
        message: `Stage with id:${id} deleted`,
      });
    })
    .catch((err) => {
      if (err === "CastError") {
        return res.status(404).json({
          message: `Stage with ${id} not found`,
        });
      }
    });
};

module.exports = {
  readAll,
  readOne,
  createData,
  updateData,
  deleteData,
};
