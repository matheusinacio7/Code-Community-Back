const service = require('../../services/users');

module.exports = async (req, res, _next) => {
  const { id } = req.params;

  try {
    if (req.file) {
      const updated = await service.upload(id, {
        image: `/${req.file.filename}`,
      });
      return res.status(200).json(updated);
    }
  } catch (e) {
    console.error(e);
  }
}