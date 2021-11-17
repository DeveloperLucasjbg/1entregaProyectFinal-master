export default function errorHandlerMiddleware(err, req, res, next) {
  if (!err) return res.status(409).json({ message: "conflict" });

  return res.status(500).json({
    error: -1,
    description: `ruta ${err.route} metodo ${err.method} no auth`,
  });
}
