const valid = ({ name, email, subject, message }) => {
    const err = {}

    if (!name) {
        err.name = "Please add your name*** "
    }

    if (!email) {
        err.email = "Please add your email*** "
    }

    if (!subject) {
        err.subject = "Please  add your subject*** "
    }
    if (!message) {
        err.message = "message required*** "
    }

    return {
        errMsg: err,
        errLength: Object.keys(err).length
    }

}


export default valid;