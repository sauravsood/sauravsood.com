/**
 * GET /
 * Interests page.
 */
exports.index = (req, res) => {
  res.render('interests', {
    title: 'Interests'
  });
};
