const nhanVienModel = require('../models/nhanVien.model')
const getData = require('../utils/formatRes')
const _ = require('lodash');

class NhanVienService {
    static getAllNhanVien = async () => {
        try {
            const nhanVien = await nhanVienModel.find({})

            return nhanVien.map(nv =>
                getData({ fields: ['_id', 'ten', 'avatar', 'ngaySinh', 'soDienThoai', 'phongBan', 'truongPhong'], object: nv })
            )

        } catch (error) {
            return {
                success: false,
                message: error.message
            }
        }
    }

    static getNhanVienById = async ({ id }) => {
        try {
            const nhanVien = await nhanVienModel.findById(id)

            if (!nhanVien) {
                return {
                    success: false,
                    message: "wrong employee"
                }
            }

            return getData({ fields: ['_id', 'ten', 'avatar', 'ngaySinh', 'soDienThoai', 'phongBan', 'truongPhong'], object: nhanVien })
        } catch (error) {
            return {
                success: false,
                message: error.message
            }
        }
    }

    static addNhanVien = async ({ taiKhoan, matKhau, ten, avatar, ngaySinh, soDienThoai, phongBan, truongPhong }) => {
        try {
            const newNhanVien = new nhanVienModel({
                "taiKhoan": taiKhoan,
                "matKhau": matKhau,
                "ten": ten,
                "avatar": avatar,
                "ngaySinh": ngaySinh,
                "soDienThoai": soDienThoai,
                "phongBan": phongBan,
                "truongPhong": truongPhong
            })

            const savedNhanVien = await newNhanVien.save()

            return getData({ fields: ['_id', 'ten', 'avatar', 'ngaySinh', 'soDienThoai', 'phongBan', 'truongPhong'], object: savedNhanVien })
        } catch (error) {
            return {
                success: false,
                message: error.message
            }
        }
    }

    static updateNhanVien = async ({ id, taiKhoan, matKhau, ten, avatar, ngaySinh, soDienThoai, phongBan, truongPhong }) => {
        try {
            const nhanVien = await nhanVienModel.findById(id)

            nhanVien.matKhau = matKhau
            nhanVien.ten = ten
            // nhanVien.avatar = avatar
            nhanVien.ngaySinh = ngaySinh
            nhanVien.soDienThoai = soDienThoai
            nhanVien.phongBan = phongBan
            nhanVien.truongPhong = truongPhong

            const savedNhanVien = await nhanVien.save()

            return getData({ fields: ['_id', 'ten', 'avatar', 'ngaySinh', 'soDienThoai', 'phongBan', 'truongPhong'], object: savedNhanVien })
        } catch (error) {
            return {
                success: false,
                message: error.message
            }
        }
    }

    static deleteNhanVien = async ({ id }) => {
        try {
            const nhanVien = await nhanVienModel.findByIdAndDelete(id)

            if (!nhanVien) {
                return {
                    success: false,
                    message: "wrong employee"
                }
            }

            return {
                success: true,
                message: "delete successfully"
            }
        } catch (error) {
            return {
                success: false,
                message: error.message
            }
        }
    }
}

module.exports = NhanVienService;