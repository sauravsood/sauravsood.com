/**
 * GET /
 * Achievements page.
 */
exports.index = (req, res) => {
  res.render('achievements', {
    title: 'Achievements'
  });
};
