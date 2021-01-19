const Validate = (name, value) => {
    let errors = {};

    switch(name) {
        case "title": 
            errors.title = value.length === 0 ? "Title is required" : "";
            break;

        case "snippet": 
            errors.title = value.length === 0 ? "Snippet is required" : "";
            break;

        case "body":
            errors.body = value.length === 0 ? "Description is required" : "";
            break;

        default:
            break;
    }

    return errors;
}

export default Validate
