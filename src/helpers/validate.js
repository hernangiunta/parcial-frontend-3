export const validate = (title, description) => {
    const msg = {
        type: "",
        body: {
            message: ""
        }
    }

    if (! description || description.length < 4) {
        msg.type = 'Error'
        msg.body.message = "Por favor chequea que la información sea correcta.";
    }

    if (!title || title.length < 3 || title.length > 25) {
        msg.type = 'Error'
        msg.body.message = `Por favor chequea que la información sea correcta.`
    }

    return msg
}