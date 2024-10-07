const readAll = (req, res) => {
    res.status(200).json({
        "message": "All User Retrieved"
    });
    // console.log("hello")
}

const readOne = (req, res) => {
    let id = req.params.id;

    res.status(200).json({
        "message": `User with ${id} has been retrieved`
    });
}

const createData = (req, res) => {
    console.log(req.body);

    if(data.password.length < 6){
        res.status(201).json({
            "message": "User password must be more than 6 characters"
        })
    }

    data.password = undefined;
    
    let data = req.body;
    res.status(201).json({
        "data": data
    })
};

const updateData = (req, res) => {
    let id = req.params.id;
    let data = req.body;

    data.id = id;
    //connect to the DB and check if user exists
    //check if data is valid, if yes update user with :id

    res.status(200).json({
        "message": `You updated user with id: ${id}`,
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