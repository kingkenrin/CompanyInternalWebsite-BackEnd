const NhanVienService = require('../services/nhanVien.service')

class MovieController {
    getAllNhanVien = async (req, res, next) => {
        try {
            return res.status(201).json(await NhanVienService.getAllNhanVien())
        } catch (error){
            next(error)
        }
    }
}

module.exports = new MovieController();