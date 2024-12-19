let policies = {
    "manager": {
        "admin": {
            "update": ['fullname', 'base_salary']
        },
        "manager": {
            "update": ['fullname']            
        }
    }    
};

module.exports.columnFilter = function(table, role, action) {
    return policies[table][role][action];
}