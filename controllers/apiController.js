let packages = [
  {
    id: 1,
    packageName: "Goa Vacation",
    location: "Goa",
    days: 5,
    price: 15000
  },
  {
    id: 2,
    packageName: "Manali Tour",
    location: "Manali",
    days: 6,
    price: 20000
  }
];


exports.addPackage = (req, res) => {

  const newPackage = req.body;

  packages.push(newPackage);

  res.status(201).json({
    message: "Package added successfully",
    data: newPackage
  });
};


exports.getAllPackages = (req, res) => {

  res.json(packages);
};


exports.getPackageById = (req, res) => {

  const id = parseInt(req.params.id);

  const foundPackage = packages.find(pkg => pkg.id === id);

  if (!foundPackage) {
    return res.status(404).json({
      message: "Package not found"
    });
  }

  res.json(foundPackage);
};


exports.updatePackage = (req, res) => {

  const id = parseInt(req.params.id);

  const index = packages.findIndex(pkg => pkg.id === id);

  if (index === -1) {
    return res.status(404).json({
      message: "Package not found"
    });
  }

  packages[index] = {
    ...packages[index],
    ...req.body
  };

  res.json({
    message: "Package updated successfully",
    data: packages[index]
  });
};


exports.deletePackage = (req, res) => {

  const id = parseInt(req.params.id);

  const index = packages.findIndex(pkg => pkg.id === id);

  if (index === -1) {
    return res.status(404).json({
      message: "Package not found"
    });
  }

  const deletedPackage = packages.splice(index, 1);

  res.json({
    message: "Package deleted successfully",
    data: deletedPackage
  });
};

exports.searchPackage = (req, res) => {

  const location = req.query.location;

  const result = packages.filter(pkg =>
    pkg.location.toLowerCase() === location.toLowerCase()
  );

  res.json(result);
};