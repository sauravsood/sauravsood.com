/**
 * GET /
 * Career page.
 */
exports.index = (req, res) => {
  res.render('career', {
    title: 'Career'
  });
};
