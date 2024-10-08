const Festival = require('../models/festival.model');

const readAll = (req, res) => {

    Festival.find()
        .then(data => {
            console.log(data);
            if(data.length > 0){
                return res.status(200).json(data);
            } else {
                return res.status(404).json("No data found");
            }
        })
        .catch(err => {
            console.log(err);
            return res.status();
        });

    // res.status(200).json({
    //     "message": "All Festival Retrieved"
    // });
}

const readOne = (req, res) => {
    let id = req.params.id;

    Festival.findById(id)
        .then(data => {
            if(!data){
                return res.status(404).json({
                    message: `Festival with id:${id} not found`
                });
            }

            return res.status(200).json({
                message: `Festival with id:${id} retrieved`,
                data
            })
        })
        .catch(
            err => {
                console.log(err);
                if(err.name === 'CastError'){
                    return res.status(404).json(
                        {
                            message: `Festival with id:${id} not found`
                        })
                }
                return res.status(500).json(err);
            });

    // res.status(200).json({
    //     "message": `Festival with ${id} has been retrieved`
    // });
}

const createData = (req, res) => {
    console.log(req.body);
    let body = req.body;

    Festival.create(body)
        .then(data => {
            console.log(`New Festival Created`, data);
            return res.status(201).json({
                message: `Festival Created`,
                data
            });
        })
        .catch(err => {
            // console.log(err);

            if(err.name === 'ValidationError'){
                return res.status(422).json(err);
            }

            return res.status(500).json(err);
        });

    // if(data.password.length < 6){
    //     res.status(201).json({
    //         "message": "Festival password must be more than 6 characters"
    //     })
    // }
    
    // let data = req.body;
    // res.status(201).json({
    //     "data": data
    // })
};

const updateData = (req, res) => {
    let id = req.params.id;
    let body = req.body;

    Festival.findByIdAndUpdate(id, body, {
        new: true,
        runValidators: true
    })
        .then(data => {
            return res.status(201).json(data);
        })
        .catch(err => {
            if(err === 'CastError'){
                return res.status(404).json({
                    message: `Festival with ${id} not found`
                });
            } else if(err === 'ValidationError'){
                return res.status(422).json(err);
            }
        });


    // data.id = id;
    //connect to the DB and check if fesival exists
    //check if data is valid, if yes update fesival with :id

    // res.status(200).json({
    //     "message": `You updated fesival with id: ${id}`,
    //     "data": data
    // });
};

const deleteData = (req, res) => {
    let id = req.params.id;

    Festival.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                return res.status(404).json({
                    message: `Festival with id:${id} not found`
                });
            }

            return res.status(200).json({
                message: `Festival with id:${id} deleted`,
            })
        })
        .catch(err => {
            if(err === 'CastError'){
                return res.status(404).json({
                    message: `Festival with ${id} not found`
                });
            }
        });
};

module.exports = {
    readAll, 
    readOne,
    createData,
    updateData,
    deleteData
};