import { Router, Request, Response } from "express";
import { getAllBugs, getBugById, createBug, updateBug, deleteBug } from "../services/bug-service.js";
import { CreateBugSchema, UpdateBugSchema } from "../schemas/bug.js";

const router = Router();


// GET /api/bugs - return all bugs
router.get("/", (req: Request, res: Response) => {
    const bugs = getAllBugs();
    res.json(bugs);
});

// GET /api/bugs/:id - return one bug
router.get("/:id", (req: Request<{ id: string }>, res: Response) => {
    const id = parseInt(req.params.id, 10);

    if (isNaN(id)) {
        res.status(400).json({ error: "Invalid id" });
        return;
    }

    const bug = getBugById(id);

    if (!bug) {
        res.status(400).json({ error: `Bug with id ${id} not found` });
        return;
    }

    res.json(bug);
});

// POST /api/bugs - create a new bug
router.post("/", (req: Request, res: Response) => {
    const result = CreateBugSchema.safeParse(req.body);

    if (!result.success) {
        res.status(400).json({ error: result.error.issues });
        return;
    }

    const newBug = createBug(result.data);
    res.status(201).json(newBug);
});

// PUT /api/bugs/:id - update a bug
router.put("/:id", (req: Request<{ id: string }>, res: Response) => {
    const id = parseInt(req.params.id, 10);

    if (isNaN(id)) {
        res.status(400).json({ error: "Invalid id" });
        return;
    }

    const result = UpdateBugSchema.safeParse(req.body);

    if (!result.success) {
        res.status(400).json({ error: result.error.issues });
        return;
    }

    const updated = updateBug(id, result.data);

    if (!updated) {
        res.status(404).json({ error: `Bug with id ${id} not found` });
        return;
    }

    res.json(updated);
});

// DELETE /api/bugs/:id - delete a bug
router.delete("/:id", (req: Request<{ id: string }>, res: Response) => {
    const id = parseInt(req.params.id, 10);

    if (isNaN(id)) {
        res.status(400).json({ error: "Invalid id" });
        return
    }

    const deleted = deleteBug(id);

    if (!deleted) {
        res.status(404).json({ error: `Bug with id ${id} not found` });
        return;
    }

    res.json(deleted);
});

export default router;
