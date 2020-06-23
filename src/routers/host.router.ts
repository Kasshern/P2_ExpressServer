import express from 'express';
import * as hostService from '../services/host.service';
import * as authenticator from './authentication.router'
import { SocialEvent } from '../models/SocialEvent';


export const hostRouter = express.Router();


//get all events by host ID  //!Works
hostRouter.get('/:id/event', /*authenticator.authenticateJWT,*/ async (request, response, next) => {
    const id: number = parseInt(request.params.id);
    let socialEvents: SocialEvent[];

    try {
        socialEvents = await hostService.getSocialEventsByHostUserId(id);
    } catch (err) {
        response.sendStatus(500);
        return;
    }

    if (!socialEvents) {
        response.sendStatus(404);
    } else {
        response.json(socialEvents);
    }
    next();
});

// save new hosted event  //!Works
hostRouter.post('/host/newevent', /*authenticator.authenticateJWT,*/ async (request, response, next) => {
    const socialEvent = request.body;
    // console.log('IMAGE FILE', reimbursement)
    let newSocialEvent: SocialEvent;

    try {
        newSocialEvent = await hostService.saveNewEvent(socialEvent);
        response.status(201);
        response.json(newSocialEvent);
    } catch (err) {
        console.log(err);
        response.sendStatus(500);
        return;
    }
    next();
});

// // Retrieves an Array of all reimbursement tickets from all employess
// financeManagerRouter.get('', authenticator.authenticateJWT, async (request, response, next) => {
//     let reimbursementRequests: ReimbursementManagerGet[];

//     try {
//         reimbursementRequests = await financeManagerService.getAllReimbursements();
//         response.json(reimbursementRequests);
//     } catch (err) {
//         response.sendStatus(500);
//         return;
//     }
//     next();
// });




// // Retrieves an Array of all reimbursement tickets by status
// financeManagerRouter.get('/status/:status', authenticator.authenticateJWT, async (request, response, next) => {
//     const status: string = request.params.status;
//     let reimbursementRequests: ReimbursementManagerGet[];

//     try {
//         reimbursementRequests = await financeManagerService.getAllReimbursementsByStatus(status);
//     } catch (err) {
//         response.sendStatus(500);
//         return;
//     }

//     if(!reimbursementRequests) {
//         response.sendStatus(404);
//     } else {
//         response.json(reimbursementRequests);
//     }
//     next();
// });

// // Retrieves an Array of all reimbursement tickets sorted by input value
// financeManagerRouter.get('sort/:sortValue', authenticator.authenticateJWT, async (request, response, next) => {
//     const sortValue: string = request.params.sortValue;
//     let reimbursementRequests: ReimbursementManagerGet[];

//     try {
//         reimbursementRequests = await financeManagerService.getAllReimbursementsSorted(sortValue);
//     } catch (err) {
//         response.sendStatus(500);
//         return;
//     }

//     if(!reimbursementRequests) {
//         response.sendStatus(404);
//     } else {
//         response.json(reimbursementRequests);
//     }
//     next();
// });

// // Approves or denies a reimbursement request by Updating ticket status
// financeManagerRouter.patch('', authenticator.authenticateJWT, async (request, response, next) => {
//     const reimbursementStatus = request.body;
//     let updatedReimbursementStatus: ReimbursementStatus;

//     try {
//         updatedReimbursementStatus = await financeManagerService.patchReimbursementStatus(reimbursementStatus);
//     } catch (err) {
//         response.sendStatus(500);
//         return;
//     }

//     if (!updatedReimbursementStatus) {
//         response.sendStatus(404);
//     } else {
//         response.status(200);
//         response.json(updatedReimbursementStatus);
//     }
//     next();
// });

