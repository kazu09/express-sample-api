import express, { NextFunction, Request, Response } from 'express';
import { insertData } from '../db/insertData';
import { fetchData } from '../db/fetchData';
import { fetchAllData } from '../db/fetchAllData';
import { updateData } from '../db/updateData';
import { deleteData } from '../db/deleteData';

const router = express.Router();

router.get('/users/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = parseInt(req.params.id);
    const userData = await fetchData(userId);
    if (!userData) {
      throw new Error('User not found');
    }
    if (userData.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(userData[0]);
  } catch (err) {
    // Handle the error appropriately
    console.error(err)
    next(err)
  }
});

router.get('/users', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const usersData = await fetchAllData();
    if (!usersData) {
      throw new Error('User not found');
    }
    if (usersData.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(usersData);
  } catch (err) {
    // Handle the error appropriately
    console.error(err)
    next(err)
  }
});

router.post('/users', async (req: Request, res: Response, next: NextFunction) => {
  const { name, email } = req.body;
  try {
    const result = await insertData(name, email);
    res.status(201).json({ message: 'User information created successfully'});
  } catch (err) {
   // Handle the error appropriately
   console.error(err)
   next(err)
  }
});

router.put('/users/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id);
    const { name, email } = req.body;

    // Update data in the database
    await updateData(id, name, email);

    res.status(200).json({ message: 'User updated successfully' });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.delete('/users/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = parseInt(req.params.id);

    // Delete user from the database
    await deleteData(userId);

    res.status(200).json({ message: 'User deleted successfully' });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

export default router;
