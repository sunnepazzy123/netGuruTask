
import SubscriptionModel from '../models/subscriptionModel';
import { Request, Response } from 'express';
import { DatabaseError } from '../error/authError';

export const getSubscribeUser = async (req: Request, res: Response) => {
    const subUser = await SubscriptionModel.findOne({ user_id: req.params.id });
    return res.status(200).json(subUser);
}

export const updateSubscribeUser = async (req: Request, res: Response) => {
    const limit  = +req.body.limit as number;
    const sub = await SubscriptionModel.findOne({ user_id: req.params.id });

    if (!sub) throw new DatabaseError("Subscriber not found", 400);
    if (limit === 0) {
        sub.limit = limit
    }

    sub.limit += limit
    const subUpdate = await sub.save();
    return res.status(200).json(subUpdate);
}