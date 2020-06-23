/* istanbul ignore file */
import { db } from './db';
import { SocialEvent, SocialEventRow } from '../models/SocialEvent';
import { LoginCredentials, LoginCredentialsRow } from '../models/LoginCredentials';


// get all event a user is attending by their ID 
export async function getSocialEventsByAttendingUserId(id: number): Promise<SocialEvent[]> {
    const sql = 'SELECT events.* FROM users INNER JOIN user_events ON users.id = user_id \
    INNER JOIN events ON event_id = events.id WHERE users.id = $1';

    const result = await db.query<SocialEventRow>(sql, [id]);
        return result.rows.map(SocialEvent.from);
}

// get all events within a location //! Change this to search by state and city 
export async function getEventsByLocation(location: string): Promise<SocialEvent[]> {
    const sql = 'SELECT * FROM events INNER JOIN event_locations ON events.id = event_id WHERE state = $1 AND city = $2';

    const result = await db.query<SocialEventRow>(sql, [location]);
        return result.rows.map(SocialEvent.from);
}

// get all events by type 
export async function getEventsByType(type: string): Promise<SocialEvent[]> {
    const sql = 'SELECT events.* FROM events INNER JOIN event_types ON events.id = event_types.id WHERE event_type = $1';

    const result = await db.query<SocialEventRow>(sql, [type]);
        return result.rows.map(SocialEvent.from);
}

// get all events by time  //! DIDNT IMPLEMENT YET
export async function getEventsByTime(time: string): Promise<SocialEvent[]> {
    const sql = 'SELECT * FROM events';

    const result = await db.query<SocialEventRow>(sql, [time]);
        return result.rows.map(SocialEvent.from);
}

// get events by their title name 
export async function getEventsByTitle(title: string): Promise<SocialEvent[]> {
    const sql = 'SELECT * FROM events WHERE title = $1';

    const result = await db.query<SocialEventRow>(sql, [title]);
        return result.rows.map(SocialEvent.from);
}


//! JOIN AN EVENT 

// // Saves a new Reimbursement ticket
// export async function saveReimbursement(reimbursement: ReimbursementPost): Promise<ReimbursementPost> {
//     const sql = `INSERT INTO ers_reimbursement (reimb_amount, reimb_submitted, reimb_resolved, \
//                 reimb_description, reimb_receipt, reimb_author, reimb_resolver, reimb_status_id, \
//                 reimb_type_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *`;

//     const result = await db.query<ReimbursementPostRow>(sql, [
//         reimbursement.reimbAmount,
//         new Date(),
//         undefined,
//         reimbursement.reimbDescription,
//         reimbursement.reimbReceipt,
//         reimbursement.reimbAuthor,
//         null,
//         1,
//         reimbursement.reimbTypeId
//     ]);

//     return result.rows.map(ReimbursementPost.from)[0];
// }

// export async function checkLoginCredentials(loginCredentials: LoginCredentials): Promise<LoginCredentials> {
//     const userExists: boolean = await usernameExists(loginCredentials.username);
//     if (!userExists) {
//         return undefined;
//     }

//     const sql = `SELECT ers_username, ers_password, user_role, ers_users_id, user_role_id FROM ers_users LEFT JOIN \
//                     ers_user_roles ON user_role_id = ers_user_role_id WHERE ers_users.ers_username = $1`;

//     const result = await db.query<LoginCredentialsRow>(sql, [
//         loginCredentials.username
//     ]);
//     return  result.rows.map(LoginCredentials.from)[0];
// }

// export async function usernameExists(username: string): Promise<boolean> {
//     const sql = `SELECT EXISTS(SELECT ers_username FROM ers_users WHERE ers_username = $1)`;
//     const result = await db.query<Exists>(sql, [username]);
//     return result.rows[0].exists;
// }

// interface Exists {
//     exists: boolean;
// }