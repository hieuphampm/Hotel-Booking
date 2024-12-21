let Validator = require('validatorjs');
let rules = {
    "/room/:id": {
        "GET": {
            id: "required|integer|min:1",
        },
        "DELETE": {
            id: "required|integer|min:1",
        },
        "PATCH": {
            id: "required|integer|min:1",
            name: "string",
            price: "integer|min:0",
        },
    },
    "/room": {
        "POST": {
            name: "required|string",
            price: "required|integer|min:0",
        },
    },
    "/manager/:username": {
        "PATCH": {
            username: "string",
            fullname: "string",
            base_salary: "integer|min:0",
        },
    },
    "/booking": {
        "POST": {
            username: "required|string",
            booking_date: "required|date",
            checkin_date: "required|date",
            checkout_date: "required|date",
            total_price: "required|integer|min:0",
        },
    },
    "/booking/:id": {
        "GET": {
            id: "required|integer|min:1",
        },
        "PATCH": {
            id: "required|integer|min:1",
            checkin_date: "date",
            checkout_date: "date",
            total_price: "integer|min:0",
        },
        "DELETE": {
            id: "required|integer|min:1",
        },
    },
    "/customer/:username/booking/:booking_id/detail/:detail_id": {
        "PATCH": {
            detail_id: "required|integer|min:1",
            booking_id: "required|integer|min:1",
            price_per_day: "integer|min:0",
            total_price: "integer|min:0",
        },
    },
    "/detail/:id": {
        "DELETE": {
            id: "required|integer|min:1",
        },
    },
    "/services": {
    "GET": {},
    "POST": {
        service_name: "required|string",
        service_price: "required|integer|min:0",
        },
    },
    "/services/:id": {
        "GET": {},
        "PATCH": {
            id: "required|integer|min:1",
            service_name: "string",
            service_price: "integer|min:0",
        },
        "DELETE": {
            id: "required|integer|min:1",
        },
    },

};

const standardizeToGenericPath = (path) => {
    return path.replace(/\/\w+/g, (match, index) => (index > 0 ? "/:username" : match));
};


module.exports.validated = function (req, res, next) {
    let { method, path } = req.getRoute();

    const genericPath = standardizeToGenericPath(path);

    if (!rules[genericPath] || !rules[genericPath][method]) {
        res.send({
            success: false,
            code: 400,
            message: `Validation rules not found for path: ${path} and method: ${method}`,
        });
        return next(false);
    }

    let rule = rules[genericPath][method];
    let validation = new Validator(req.method === "GET" || req.method === "DELETE" ? req.params : req.body, rule);

    if (validation.fails()) {
        res.send({
            success: false,
            code: 400,
            message: "Bad request",
            data: validation.errors,
        });
        return next(false);
    }

    return next();
};
