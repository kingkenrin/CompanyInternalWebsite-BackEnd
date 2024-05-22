const express = require('express')
const NhanVienController = require('../../controllers/nhanVien.controller')
const truyCapController = require('../../controllers/truyCap.controller')
const phongHopController = require('../../controllers/phongHop.controller')

const router = express.Router()

//Dang nhap
router.get('/login', truyCapController.login)

//NhanVien
//[GET] Lay nhan vien theo id
router.get('/getNhanVien/:id', NhanVienController.getNhanVienById)

//[GET] Lay tat ca nhan vien
router.get('/getAllNhanVien', NhanVienController.getAllNhanVien)

//[POST] Them nhan vien
router.post('/addNhanVien', NhanVienController.addNhanVien)

//[PUT] Sua nhan vien
router.put('/updateNhanVien', NhanVienController.updateNhanVien)

//[DELETE] Xoa nhan vien
router.delete('/deleteNhanVienById', NhanVienController.deleteNhanVien)

//PhongHop
//[GET] Lay tat ca phong hop
router.get('/getAllPhongHop', phongHopController.getAllPhongHop)

//[GET] Lay phong hop theo id
router.get('/getPhongHop/:id', phongHopController.getPhongHopById)

//[POST] Them phong hop
router.post('/addPhongHop', phongHopController.addPhongHop)

//[PUT] Sua phong hop
router.post('/updatePhongHop', phongHopController.updatePhongHop)

//[DELETE] Xoa phong hop
router.post('/deletePhongHop', phongHopController.deletePhongHop)

//[POST] Them ngay phong hop
router.post('/addNgayPhongHop', phongHopController.addNgayPhongHop)

//[DELETE] Xoa phong hop
router.post('/deleteNgayPhongHop', phongHopController.deleteNgayPhongHop)

module.exports = router
