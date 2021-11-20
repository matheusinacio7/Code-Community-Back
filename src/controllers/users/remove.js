const service = require('../../services/users');

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const found = service.findById(id);
    if (!found) {
      return res.status(404).end();
    }
        
    await service.remove(id);

    return res.status(204).end();
  } catch (err) {
    return res.status(500).send({
      message: 'Sorry, we got a problem. Please try again later.',
      error: err,
    });
  }
};