function notFound(req, res) {
  res.status(404).json({ error: `Not found: ${req.method} ${req.originalUrl}` });
}

function errorHandler(err, req, res, next) {
  const status = err.response?.status || 500;
  const message =
    err.response?.data?.msg ||
    err.response?.data?.message ||
    err.message ||
    "Server error";

  res.status(status).json({
    error: message,
    details: err.response?.data || undefined,
  });
}

module.exports = { notFound, errorHandler };
