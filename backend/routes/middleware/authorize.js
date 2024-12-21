let table_policies = {
    "/room": {
        admin: {
            GET: true,
            POST: true,
        },
        manager: {
            GET: true,
            POST: false,
        },
    },
    "/room/:id": {
        admin: {
            GET: true,
            DELETE: true,
            PATCH: true,
        },
        manager: {
            GET: true,
            DELETE: false,
            PATCH: false,
        },
    },
    "/manager": {
        admin: {
            GET: true,
        },
        manager: {
            GET: true,
        },
    },
    "/manager/:username": {
        admin: {
            PATCH: true,
        },
        manager: {
            PATCH: true,
        },
    },
    "/booking": {
        admin: {
            POST: true,
        },
        manager: {
            POST: false,
        },
        customer: {
            POST: true,
        },
    },
    "/booking/:id": {
        admin: {
            GET: true,
            DELETE: true,
            PATCH: true,
        },
        manager: {
            GET: true,
            DELETE: false,
            PATCH: false,
        },
        customer: {
            GET: true,
            DELETE: true,
            PATCH: true,
        },
    },
    "/customer/:username/booking/:booking_id/detail/:detail_id": {
        admin: {
            PATCH: true,
        },
        customer: {
            PATCH: true,
        },
    },
    "/detail/:id": {
        admin: {
            DELETE: true,
        },
        customer: {
            DELETE: true,
        },
    },
    "/services": {
    admin: { GET: true, POST: true },
    manager: { GET: true, POST: true },
    customer: { GET: true },
    },
    "/services/:id": {
        admin: { GET: true, PATCH: true, DELETE: true },
        manager: { GET: true, PATCH: true, DELETE: true },
        customer: { GET: true },
    },  
};


module.exports.authorized = function(req, res, next) {
    const {method, path} = req.getRoute();
    if (!table_policies[path][req.user.role][method]) {
        res.send({
            success: false, code: 401, message: "Unauthorized access - Insufficient priviledge"
        }); 
        return next(false);
    }
    return next();
}