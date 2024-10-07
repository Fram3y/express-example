const readAll = (req, res) => {
    res.status(200).json({
        "message": "All Festival Retrieved"
    });
}

const readOne = (req, res) => {
    let id = req.params.id;

    res.status(200).json({
        "message": `Festival with ${id} has been retrieved`
    });
}

const createData = (req, res) => {
    console.log(req.body);

    if(data.password.length < 6){
        res.status(201).json({
            "message": "Festival password must be more than 6 characters"
        })
    }
    
    let data = req.body;
    res.status(201).json({
        "data": data
    })
};

const updateData = (req, res) => {
    let id = req.params.id;
    let data = req.body;

    data.id = id;
    //connect to the DB and check if fesival exists
    //check if data is valid, if yes update fesival with :id

    res.status(200).json({
        "message": `You updated fesival with id: ${id}`,
        "data": data
    });
};

const deleteData = (req, res) => {
    let id = req.params.id;
};

module.exports = {
    readAll, 
    readOne,
    createData,
    updateData,
    deleteData
};