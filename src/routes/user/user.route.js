const express = require('express')
const NhanVienController = require('../../controllers/nhanVien.controller')
const router = express.Router()

//[GET] Lay nhan vien theo id
router.get('/getNhanVien/:id', NhanVienController.getNhanVienById)

//[GET] Lay tat ca nhan vien
router.get('/getAllNhanVien', NhanVienController.getAllNhanVien)

//[POST] Them nhan vien
router.post('/addNhanVien', NhanVienController.addNhanVien)

//[PUT] Sua nhan vien
router.put('/updateNhanVien', NhanVienController.updateNhanVien)

//[GET] Xoa nhan vien
router.delete('/deleteNhanVienById', NhanVienController.deleteNhanVien)

module.exports = router
