const data = require('../model/data');


exports.getData = async (req, res) => {
    try {
        const { endYear, topics, sector, region, pest, swot, country, city } = req.body;

        const query = {};

        if (endYear) {
            query.end_year = endYear;
        }

        if (topics) {
            query.topic = topics;
        }

        if (sector) {
            query.sector = sector;
        }

        const response = await data.find({});
        res.status(200)
            .json({
                success: true,
                data: response,
                message: "fetched all data"
            })
    }

    catch(err){
        console.error(err);
        res.status(404)
        .json({
            success:false,
            message:err.message
        })
    }
}