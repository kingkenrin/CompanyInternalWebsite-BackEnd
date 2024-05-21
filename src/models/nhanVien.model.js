const { model, Schema, Types } = require('mongoose');

const DOCUMENT_NAME = 'NhanVien'
const COLLECTION_NAME = 'NhanViens'

var nhanVienSchema = new Schema({
    ten: {
        type: String,
        required: true,
    },
    avartar: {
        type: String,
        default: 'https://nupet.vn/wp-content/uploads/2023/10/anh-avatar-cute-meo-nupet-2.jpg'
    },
    ngaySinh: {
        type: Date,
    },
    soDienThoai: {
        type: String,
    },
    phongBan: {
        type: String,
        required: true,
    },
    truongPhong: {
        type: Boolean,
        default: false
    },
}, {
    timestamps: true,
    collection: COLLECTION_NAME
});

module.exports = model(DOCUMENT_NAME, nhanVienSchema);