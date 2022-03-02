"use strict";

const output = {
    home: (req, res) => {
        res.render("home/index");
    },
    
    login: (req, res) => {
        res.render("home/login");
    },
};

const users = {
    id: ["woorinIT", "나개발", "김팀장"],
    pwd: ["1234","124","123456"],
};

const process = {
    login: (req, res) => {
        const id = req.body.id,
        pwd = req.body.pwd;

        if(users.id.includes(id)){
            const idx = users.id.indexOf(id);
            if(users.pwd[idx] === pwd) {
                return res.json({
                    success: true,
                });
            }
        }

        return res.json({
            success: false,
            msg: "로그인에 실패하셨습니다.",
        });
    },
};


module.exports = {
    output,
    process,
};

