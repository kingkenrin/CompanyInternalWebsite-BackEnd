const thongBaoNoiBoModel = require('../models/thongBaoNoiBo.model')
const getData = require('../utils/formatRes')
const _ = require('lodash');

class ThongBaoNoiBoService {
    static getAllThongBao = async () => {
        try {
            const thongBao = await thongBaoNoiBoModel.find({}).populate('nhanVienId')

            return thongBao.map(tb =>
                getData({ fields: ['_id', 'ten', 'nhanVienId', 'noiDung' , 'createdAt'], object: tb })
            )

        } catch (error) {
            return {
                success: false,
                message: error.message
            }
        }
    }

    static getThongBaoById = async ({ id }) => {
        try {
            const thongBao = await thongBaoNoiBoModel.findById(id).populate('nhanVienId')

            if (!thongBao) {
                return {
                    success: false,
                    message: "wrong notification"
                }
            }

            return getData({ fields: ['_id', 'ten', 'nhanVienId', 'noiDung' , 'createdAt'], object: thongBao })
        } catch (error) {
            return {
                success: false,
                message: error.message
            }
        }
    }

    static addThongBao = async ({ nhanVienId, ten, noiDung }) => {
        try {
            const thongBao = await thongBaoNoiBoModel.find({ ten: ten })

            if (thongBao) {
                return {
                    success: false,
                    message: "notification exists"
                }
            }

            const newThongBao = new thongBaoNoiBoModel({
                ten,
                nhanVienId, 
                noiDung
            })

            const savedThongBao = await newThongBao.save()

            return getData({ fields: ['_id', 'ten', 'nhanVienId', 'noiDung'], object: savedThongBao })
        } catch (error) {
            return {
                success: false,
                message: error.message
            }
        }
    }

    static updateThongBao = async ({ id, ten, noiDung }) => {
        try {
            const thongBao = await thongBaoNoiBoModel.findById(id)

            if (!thongBao) {
                return {
                    success: false,
                    message: "wrong notification"
                }
            }

            if (!ten)
                thongBao.ten = ten

            if (!noiDung)
                thongBao.noiDung = noiDung

            const savedThongBao = await thongBao.save()

            return getData({ fields: ['_id', 'ten', 'nhanVienId', 'noiDung'], object: savedThongBao })
        } catch (error) {
            return {
                success: false,
                message: error.message
            }
        }
    }

    static deleteThongBao = async ({ id }) => {
        try {
            const thongBao = await thongBaoNoiBoModel.findByIdAndDelete(id)

            if (!thongBao) {
                return {
                    success: false,
                    message: "wrong notification"
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

module.exports = ThongBaoNoiBoService;