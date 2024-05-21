const express = require('express')
const NhanVienController = require('../../controllers/nhanVien.controller')
const router = express.Router()

//[GET] Lay tat ca nhan vien
router.get('/getAllNhanVien', NhanVienController.getAllNhanVien)

//[POST] Them nhan vien
router.post('/addNhanVien', NhanVienController.getAllNhanVien)

//[PUT] Sua nhan vien
router.put('/updateNhanVien', NhanVienController.getAllNhanVien)

//[GET] Xoa nhan vien
router.delete('/deleteNhanVienById', NhanVienController.getAllNhanVien)

module.exports = router
