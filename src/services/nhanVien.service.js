const nhanVienModel = require('../models/nhanVien.model')
const getData = require('../utils/formatRes')
const _ = require('lodash');

class NhanVienService {
    static getAllNhanVien = async () => {
        try {
            const nhanVien = await nhanVienModel.find({})

            return nhanVien
        } catch (error) {
            return {
                success: false,
                message: error.message
            }
        }
    }

    static getNhanVienById = async ({id}) => {
        try {
            const nhanVien = await nhanVienModel.findById(id)

            return nhanVien
        } catch (error) {
            return {
                success: false,
                message: error.message
            }
        }
    }

    static addNhanVien = async ({ ten, avartar, ngaySinh, soDienThoai, phongBan, truongPhong = false }) => {
        try {
            const newNhanVien = new nhanVienModel({
                "ten": ten,
                "avartar": avartar,
                "ngaySinh": ngaySinh,
                "soDienThoai": soDienThoai,
                "phongBan": phongBan,
                "truongPhong": truongPhong
            })

            const savedNhanVien = await newNhanVien.save()

            return savedNhanVien
        } catch (error) {
            return {
                success: false,
                message: error.message
            }
        }
    }

    static updateNhanVien = async ({ id, ten, avartar, ngaySinh, soDienThoai, phongBan, truongPhong }) => {
        try {
            const nhanVien = await nhanVienModel.findById(id)

            nhanVien.ten = ten
            nhanVien.avartar = avartar
            nhanVien.ngaySinh = ngaySinh
            nhanVien.soDienThoai = soDienThoai
            nhanVien.phongBan = phongBan
            nhanVien.truongPhong = truongPhong

            const savedNhanVien = await nhanVien.save()

            return savedNhanVien
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

            if(!nhanVien){
                return {
                    success: false,
                    message: "Nhan vien khong ton tai"
                }
            }

            return {
                success: true,
                message: "Xoa thanh cong"
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