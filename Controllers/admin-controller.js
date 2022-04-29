const Service = require("../modals/service"); //Service is constructor

const getAllInformation = async (req, res, next) => {
  const service = await Service.find().exec();
  res.send(service);
};
const addService = async (req, res, next) => {
  // const id = req.body.id
  // const city = req.body.city
  // const enable = req.body.enable
  // const disable = req.body.disable
  const { city, enable, disable } = req.body;
  const newService = new Service({
    city: city,
    enable: enable,
    disable: disable,
  });

  await newService.save();

  res.status(201).json({ message: "service added" });
};
exports.getAllInformation = getAllInformation;
exports.addService = addService;
