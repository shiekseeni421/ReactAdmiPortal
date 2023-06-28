const express = require("express");
const adminRouter = express.Router();

const adminSchema = require("../modal/adminSchema");

//create Api
adminRouter.post("/createuser", async (req, res) => {
  const {
    appCode,
    projectId,
    modelId,
    version,
    title,
    description,
    createdAt,
    updatedAt,
  } = req.body;
  if (appCode == null) {
    return res.status(400).json({ error: "Please provide appCode" });
  } else if (projectId == null) {
    return res.status(400).json({ error: "Please provide projectId" });
  } else if (modelId == null) {
    return res.status(400).json({ error: "Please provide modelId" });
  } else if (version == null) {
    return res.status(400).json({ error: "Please provide version" });
  } else if (title == null) {
    return res.status(400).json({ error: "Please provide title" });
  } else if (description == null) {
    return res.status(400).json({ error: "Please provide description" });
  }

  const userdeatils = await adminSchema.findOne({ projectId: projectId });
  if (userdeatils === null) {
    const user = new adminSchema({
      appCode,
      projectId,
      modelId,
      version,
      title,
      description,
      createdAt,
      updatedAt,
    });
    user.save((err) => {
      if (err) {
        res.json(err);
      } else {
        res.status(200).json({ message: "Project add Successful " });
      }
    });
  } else {
    return res.status(302).json({
      message: "Project Id Already Exits Please Add New Project Id",
    });
  }
});

//get Api
adminRouter.get("/userData", async (req, res) => {
  const userdeatils = await adminSchema.find({});
  res.status(200).json({ userdeatils });
});

//delete APi
adminRouter.delete("/deleteproject/:id", async (req, res) => {
  var { id } = req.params;
  console.log(id);
  const query = { projectId: id };
  const result = await adminSchema.deleteOne(query);

  if (result.deletedCount === 1) {
    const userdeatils = await adminSchema.find({});
    res.status(200).json({ userdeatils });
  } else {
    res.status(200).json({
      message: "No documents matched the query. Deleted 0 documents.",
    });
  }
});

//view API
adminRouter.get("/userData/:projectId", async (req, res) => {
  var { projectId } = req.params;
  const userdeatils = await adminSchema.find({ projectId: projectId });
  res.status(200).json({ userdeatils });
});

//Update Api
adminRouter.put("/upDate/:Id", async (req, res) => {
  var { Id } = req.params;
  var { appCode, projectId, modelId, version, title, description, updatedAt } =
    req.body;

  const userdeatils = await adminSchema.updateOne(
    { projectId: Id },
    {
      $set: {
        appCode: appCode,
        projectId: projectId,
        modelId: modelId,
        version: version,
        title: title,
        description: description,
        updatedAt: updatedAt,
      },
      $currentDate: { lastModified: true },
    }
  );
  res.status(200).json({ message: "update the data" });
});

module.exports = adminRouter;
