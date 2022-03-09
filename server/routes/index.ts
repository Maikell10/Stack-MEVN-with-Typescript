import { Router } from "express";
import Task from "../models/Task";

const router = Router();

router.get("/task", async (req, res) => {
    const tasks = await Task.find();
    res.send(tasks);
});

router.post("/task", async (req, res) => {
    const { title, description } = req.body;

    const task = new Task({ title, description });
    await task.save();

    res.json(task);
});

router.get("/task/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findById(id);

        if (!task) return res.status(404).json({ message: "Task not found" });

        res.json(task);
    } catch (error) {
        return res.status(500).send(error);
    }
});

router.put("/task/:id", async (req, res) => {
    const { title, description } = req.body;
    const { id } = req.params;

    const updatedtTask = await Task.findByIdAndUpdate(
        id,
        { title, description },
        { new: true }
    );

    res.json(updatedtTask);
});

router.delete("/task/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findByIdAndDelete(id);

        if (!task) return res.status(404).json({ message: "Task not found" });

        res.json(task);
    } catch (error) {
        return res.status(500).send(error);
    }
});

export default router;
