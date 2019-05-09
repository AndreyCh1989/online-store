const fs = require('fs');

let readFile = (path, req, res, method = undefined, encoding = 'utf-8') => {
    fs.readFile(path, encoding, (err, data) => {
        check(res, err, () => {
            if (method)
                method(data);
            else
                res.send(data);
        });
    });
};

let modifyFile = (path, req, res, action) => {
    readFile(path, req, res, (data) => {
        let body = action(JSON.parse(data), req);
        fs.writeFile(path, body, (err) => {
            if (res)
                check(res, err, () => {
                    readFile(path, req, res);
                });
        })
    });
};

let check = (res, err, method) => {
    if (err) {
        if (res)
            res.sendStatus(404, JSON.stringify({result: 0, text: err}));
    } else {
        method();
    }
};

module.exports = {
    readFile,
    modifyFile
};
