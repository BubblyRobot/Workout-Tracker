var db = require("../models");

module.exports = function (app) {

  app.post("/api/workouts", (req, res) => {
    db.Workout.create({}).then(dbExercise => {
      res.json(dbExercise);
    })
      .catch(err => {
        res.json(err);
      });
  });

  app.get("/api/workouts", function (req, res) {
    db.Workout.find({}).then( dbWorkout => {
      res.json(dbWorkout);
    })
      .catch(err => res.json(err));
  });

  app.put("/api/workouts/:id", function (req, res) {
    console.log(req.body);
    console.log(req.params.id);
    db.Workout.findOneAndUpdate({ _id: req.params.id }, { $push: { exercises: req.body } }, { new: true })
      .then((dbWorkout) => {
        res.json(dbWorkout);
      });
  });

  app.get("/api/workouts/range", (req, res) => {
    console.log("range");
    db.Workout.find().limit(7)
      .then(dbworkout => {
        res.json(dbworkout);
      })
      .catch(err => {
        res.json(err);
      });
  })

};