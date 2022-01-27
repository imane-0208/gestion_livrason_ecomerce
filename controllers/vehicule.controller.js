const vehicule = require("../models/vehicule");


exports.getvehicule = async (req, res) => {

    const {
        id,
    } = req.params

    vehicule.findOne({
        _id: id
          })
    // Manager.find()
              .then(result => {
                return res.status(200).json({
                    msg: "fetch all data",
                    result
                })
              })
              .catch(err => {
                console.log(err);
              });
}


exports.getAllVehicule = async (req, res) => {

    const {
        id,
    } = req.params

    vehicule.find(
        
    )
          .then(result => {
            return res.status(200).json({
                msg: "fetch all data",
                result
            })
          })
          .catch(err => {
            console.log(err);
          });
}
