import express from 'express';
import * as attendService from '../services/attend.service';
import { SocialEvent } from '../models/SocialEvent';
import * as authenticator from './authentication.router';
import { EventLocation } from '../models/EventLocation';


export const attendRouter = express.Router();

// get all events by attend ID //!WORKS
attendRouter.get('/:id/event', /*authenticator.authenticateJWT,*/ async (request, response, next) => {
    const id: number = parseInt(request.params.id);
    let socialEvents: SocialEvent[];

    try {
        socialEvents = await attendService.getSocialEventsByAttendingUserId(id);
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


// get events by location //!CHANGE FOR STATE AND CITY
attendRouter.get('/event/location/:state/:city', /*authenticator.authenticateJWT,*/ async (request, response, next) => {
    const location: string = request.params.location;
    let events: SocialEvent[];

    try {
        events = await attendService.getEventsByLocation(location);
    } catch (err) {
        response.sendStatus(500);
        return;
    }

    if (!events) {
        response.sendStatus(404);
    } else {
        response.json(events);
    }
    next();
});

// get events by type //!WORKS
attendRouter.get('/event/type/:type', /*authenticator.authenticateJWT,*/ async (request, response, next) => {
    const type: string = request.params.type;
    let events: SocialEvent[];

    try {
        events = await attendService.getEventsByType(type);
    } catch (err) {
        response.sendStatus(500);
        return;
    }

    if (!events) {
        response.sendStatus(404);
    } else {
        response.json(events);
    }
    next();
});

// get events by start_time //!NEED TO IMPLEMENT THIS
attendRouter.get('/event//time/:time', /*authenticator.authenticateJWT,*/ async (request, response, next) => {
    const time: string = request.params.time;
    let events: SocialEvent[];

    try {
        events = await attendService.getEventsByTime(time);
    } catch (err) {
        response.sendStatus(500);
        return;
    }

    if (!events) {
        response.sendStatus(404);
    } else {
        response.json(events);
    }
    next();
});

// get events by title  //!WORKS
attendRouter.get('/event/title/:title', /*authenticator.authenticateJWT,*/ async (request, response, next) => {
    const title: string = request.params.title;
    let events: SocialEvent[];

    try {
        events = await attendService.getEventsByTitle(title);
    } catch (err) {
        response.sendStatus(500);
        return;
    }

    if (!events) {
        response.sendStatus(404);
    } else {
        response.json(events);
    }
    next();
});






// // Route for adding/saving a new reimbursement request
// employeeRouter.post('/reimbursement', /*authenticator.authenticateJWT,*/ async (request, response, next) => {
//     const reimbursement = request.body;
//     // console.log('IMAGE FILE', reimbursement)
//     let newReimbursement: ReimbursementPost;

//     try {
//         newReimbursement = await employeeService.saveReimbursement(reimbursement);
//         response.status(201);
//         response.json(newReimbursement);
//     } catch (err) {
//         console.log(err);
//         response.sendStatus(500);
//         return;
//     }
//     next();
// });



// get all events by attend id 
// get all events by host id 
// get event by event id 
// login routes 
// get posts by event id 
//get comments by event id 
// post user for signup 
// post username and pass for login
/// post event info/ post address also  
// post comment
//post post 
//get by location 
//get by type 
//get by start_time
//get by title (search)
// get posts and comments by user id 


