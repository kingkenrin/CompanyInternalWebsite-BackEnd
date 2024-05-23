const nhanVienModel = require('../models/nhanVien.model')
const getData = require('../utils/formatRes')
const _ = require('lodash');

class TruyCapService {
    static login = async ({taiKhoan, matKhau}) => {
        try {
            const nhanVien = await nhanVienModel.findOne({taiKhoan: taiKhoan})

            if(!nhanVien){
                return {    
                    success: false,
                    message: "wrong username"
                }
            }

            if(nhanVien.matKhau != matKhau){
                return {    
                    success: false,
                    message: "wrong password"
                }
            }

            return {    
                success: true,
                message: "login successfully",
                id: nhanVien._id
            }

        } catch (error) {
            return {    
                success: false,
                message: error.message
            }
        }
    }
}

module.exports = TruyCapService;