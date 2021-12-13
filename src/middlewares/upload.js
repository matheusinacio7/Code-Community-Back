const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, callback) => { callback(null, path.join(__dirname, '../src/uploads')); },
  filename: (req, file, callback) => {
    const { id } = req.params;
    callback(null, `${id}.jpeg`);
  },
});

// Check file type
const checkFileType = (file, cb) => {
  // Allow ext
  const fileTypes = /jpeg|jpg|png|gif/

  // Check ext
  const extname = fileTypes.test(path.extname(file.originalname).toLowerCase())
  // Check mime
  const mimetype = fileTypes.test(file.mimetype)
  if (mimetype && extname) {
    return cb(null, true)
  } else {
    cb('Erro: Insira apenas imagens')
  };
}


const upload = multer({
  storage,
  limits: {
    fileSize: 5000000
  },
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb)
  }
}).single('image');

module.exports = upload;
