const phongHopModel = require('../models/phongHop.model')
const getData = require('../utils/formatRes')
const _ = require('lodash');

class PhongHopService {
    static getAllPhongHop = async () => {
        try {
            const phongHop = await phongHopModel.find({}).populate('nhanVienId')

            return phongHop.map(ph =>
                getData({ fields: ['_id', 'ten', 'lichDangKy'], object: ph })
            )

        } catch (error) {
            return {
                success: false,
                message: error.message
            }
        }
    }

    static getPhongHopById = async ({ id }) => {
        try {
            const phongHop = await phongHopModel.findById(id).populate('nhanVienId')

            if (!phongHop) {
                return {
                    success: false,
                    message: "wrong meeting room"
                }
            }

            return getData({ fields: ['_id', 'ten', 'lichDangKy'], object: phongHop })
        } catch (error) {
            return {
                success: false,
                message: error.message
            }
        }
    }

    static addPhongHop = async ({ ten }) => {
        try {
            const phongHop = await phongHopModel.find({ ten: ten })

            if (phongHop) {
                return {
                    success: false,
                    message: "meeting room exists"
                }
            }

            const newPhongHop = new phongHopModel({
                "ten": ten,
            })

            const savedPhongHop = await newPhongHop.save()

            return getData({ fields: ['_id', 'ten'], object: savedPhongHop })
        } catch (error) {
            return {
                success: false,
                message: error.message
            }
        }
    }

    static updatePhongHop = async ({ id, ten }) => {
        try {
            const phongHop = await phongHopModel.findById(id)

            if (!phongHop) {
                return {
                    success: false,
                    message: "wrong meeting room"
                }
            }

            if (!ten)
                phongHop.ten = ten

            const savedPhongHop = await phongHop.save()

            return getData({ fields: ['_id', 'ten', 'lichDangKy'], object: savedPhongHop })
        } catch (error) {
            return {
                success: false,
                message: error.message
            }
        }
    }

    static deletePhongHop = async ({ id }) => {
        try {
            const phongHop = await phongHopModel.findByIdAndDelete(id)

            if (!phongHop) {
                return {
                    success: false,
                    message: "wrong meeting room"
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

    static addNgayPhongHop = async ({ id, nhanVienId, ngayDangKy }) => {
        try {
            //10/5/2003
            const time = ngayDangKy.split('/')
            const ngayMuonDangKy = new Date(time[2], time[1], time[0])

            const phongHop = await phongHopModel.findById(id)

            if (!phongHop) {
                return {
                    success: false,
                    message: "wrong meeting room"
                }
            }

            let flag = false
            phongHop.lichDangKy.forEach(lich => {
                if (lich.ngayDangKy.getDate() == ngayMuonDangKy.getDate()
                    && lich.ngayDangKy.getMonth() == ngayMuonDangKy.getMonth()
                    && lich.ngayDangKy.getFullYear() == ngayMuonDangKy.getFullYear()
                ) {
                    flag = true
                }
            })

            if (flag) {
                return {
                    success: false,
                    message: "meeting room was not ready that day"
                }
            }
            else {
                phongHop.lichDangKy.unshift({
                    nhanVienId,
                    ngayDangKy: ngayMuonDangKy
                })
                await phongHop.save()
                return {
                    success: true,
                    message: "add day successfully"
                }
            }
        } catch (error) {
            return {
                success: false,
                message: error.message
            }
        }
    }

    static deleteNgayPhongHop = async ({ id, ngayDangKy }) => {
        try {
            //10/5/2003
            const time = ngayDangKy.split('/')
            const ngayMuonDangKy = new Date(time[2], time[1], time[0])

            const phongHop = await phongHopModel.findById(id)

            if (!phongHop) {
                return {
                    success: false,
                    message: "wrong meeting room"
                }
            }

            let flag = false
            let index = -1
            phongHop.lichDangKy.forEach((lich, ind) => {
                if (lich.ngayDangKy.getDate() == ngayMuonDangKy.getDate()
                    && lich.ngayDangKy.getMonth() == ngayMuonDangKy.getMonth()
                    && lich.ngayDangKy.getFullYear() == ngayMuonDangKy.getFullYear()
                ) {
                    flag = true
                    index = ind
                }
            })

            if (flag) {
                phongHop.lichDangKy.splice(index, 1)
                await phongHop.save()

                return {
                    success: true,
                    message: "delete day successfully"
                }
            }
            else{
                return {
                    success: false,
                    message: "day does not exists"
                }
            }
        } catch (error) {
            return {
                success: false,
                message: error.message
            }
        }
    }
}

module.exports = PhongHopService;