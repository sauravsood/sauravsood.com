/**
 * GET /
 * Academics page.
 */
exports.index = (req, res) => {
  res.render('academics', {
    title: 'Academics'
  });
};
