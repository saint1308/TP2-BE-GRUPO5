export const logger = (req, res, next) => {
    console.log(`🚀 ~ logger ~ req:`, req.method)
    console.log("todo ok desdes el midleware");
    next();
  };