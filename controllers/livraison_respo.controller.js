const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const responsableLivraison = require("../models/livraison_respo");


const emailsend = require('../controllers/email')


// get one responsable

exports.getRespo = async (req, res) => {

    const {
        id,
    } = req.params

    responsableLivraison.findOne({
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

// responsable login

exports.login = async (req, res) => {
    try {
        const {
            email,
            password
        } = req.body
        console.log(req.body)
        if (!email || !password) {
            return res.status(200).send({
                msg: "Please add an email and password"
            })
        }

        const login_responsableL = await responsableLivraison.findOne({
            email: email,
            // password_admin: password_admin
          })

            if (!login_responsableL || !(await bcrypt.compareSync(password, login_responsableL.password))) {
                return res.status(200).send({
                    err: 'email or password is incorrect',
                })
            } else {
                const id = login_responsableL._id;
                const name = login_responsableL.name;
                const lastname = login_responsableL.lastname;
                const email = login_responsableL.email;
                const role = "responsableLivraison";
                const token = jwt.sign({
                    id,
                    name,
                    lastname,
                    email,
                    role
                }, process.env.JWT_SECRET, {
                    expiresIn: process.env.JWT_EXPIRE_IN
                })
                return res.status(200).send({
                    msg: "lOGIN SUCCES",
                    data_login_manager: login_responsableL,
                    token: token
                })
            }
    } catch (error) {
        console.log(error)
    }
}

// get all responsables

exports.getAllResponsables = async (req, res) => {

    const {
        id,
    } = req.params

    responsableLivraison.find(
        
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


// create responsable


exports.createResponsable = (req, res) => {
    const {
        name,
        lastname,
        email,
        password,
        passwordconfirm
    } = req.body

    responsableLivraison.findOne({
        email: email
          })
          .then(result => {
              console.log(result);
            if (result) {
                return res.status(200).send({
                    msg: "email as ready used"
                })
            } else if (password !== passwordconfirm) {
                return res.status(200).send({
                    msg: "Password do not match"
                })
            }
            let hashedpassword =  bcrypt.hashSync(password, 10)
            console.log(hashedpassword)

            const manager = new responsableLivraison({
                name: name,
                lastname: lastname,
                email: email,
                password: hashedpassword
              })
            
              manager.save()
                .then(result => {

                    let subj = "Your Login Info";
                    let msg = ` email : ${email}
                                password : ${password}
                        `;
                    emailsend.mail(email, subj, msg)


                    console.log(result);
                    return res.status(200).json({
                        msg: "Add manager",
                        result
                    })
                  })
                .catch(err => {
                  console.log(err);
                });


          })
          .catch(err => {
            console.log(err);
          });

}


