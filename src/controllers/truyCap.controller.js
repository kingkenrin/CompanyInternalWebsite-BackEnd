const TruyCapService = require('../services/truyCap.service')

class TruyCapController {
    login = async (req, res, next) => {
        try {
            return res.status(201).json(await TruyCapService.login(req.body))
        } catch (error){
            next(error)
        }
    }
}

module.exports = new TruyCapController();