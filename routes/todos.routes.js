import { Router } from "express";

const router = Router();

// Define routes
router.post("/todos", (req, res) => {
  res.send("Add todo!");
});

router.get("/todos", (req, res) => {
  res.send("Get all todos!");
});

// get a single to do
router.get("/todos/:id", (req, res) => {
  res.send(`Get single todo with id: ${req.params.id}!`);
});

// update a single to do
router.patch("/todos/:id", (req, res) => {
  res.send("Update single todo!");
});

//   Delete a single to do
router.delete("/todos/:id", (req, res) => {
  res.send("Delete single todo!");
});

// Delete all
router.delete("/todos", (req, res) => {
    res.send("Delete all todos!");
  });
// Export router
export default router;
