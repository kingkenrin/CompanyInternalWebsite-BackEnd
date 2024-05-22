const express = require('express')
const NhanVienController = require('../../controllers/nhanVien.controller')
const truyCapController = require('../../controllers/truyCap.controller')
const phongHopController = require('../../controllers/phongHop.controller')
const thongBaoNoiBoController = require('../../controllers/thongBaoNoiBo.controller')

const router = express.Router()

//DANGNHAP
router.get('/login', truyCapController.login)

//NHANVIEN
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
router.put('/updatePhongHop', phongHopController.updatePhongHop)

//[DELETE] Xoa phong hop
router.delete('/deletePhongHop', phongHopController.deletePhongHop)

//[POST] Them ngay phong hop
router.post('/addNgayPhongHop', phongHopController.addNgayPhongHop)

//[DELETE] Xoa phong hop
router.delete('/deleteNgayPhongHop', phongHopController.deleteNgayPhongHop)

//THONGBAONOIBO
//[GET] Lay tat ca thong bao
router.get('/getAllThongBao', thongBaoNoiBoController.getAllThongBao)

//[GET] Lay thong bao theo id
router.get('/getThongBao/:id', thongBaoNoiBoController.getThongBaoById)

//[POST] Them thong bao
router.post('/addThongBao', thongBaoNoiBoController.addThongBao)

//[PUT] Sua thong bao
router.put('/updateThongBao', thongBaoNoiBoController.updateThongBao)

//[DELETE] Xoa thong bao
router.delete('/deleteThongBao', thongBaoNoiBoController.deleteThongBao)

//YEUCAU


module.exports = router
