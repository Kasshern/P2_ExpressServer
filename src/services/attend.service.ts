import * as attendDao from '../daos/attend.dao';
import { LoginCredentials } from '../models/LoginCredentials';
import { SocialEvent } from '../models/SocialEvent';


export function getSocialEventsByAttendingUserId(id: number): Promise<SocialEvent[]> {
    return attendDao.getSocialEventsByAttendingUserId(id);
}

export function getEventsByLocation(location: string): Promise<SocialEvent[]> {
    return attendDao.getEventsByLocation(location);
}

export function getEventsByType(type: string): Promise<SocialEvent[]> {
    return attendDao.getEventsByType(type);
}

export function getEventsByTime(time: string): Promise<SocialEvent[]> {
    return attendDao.getEventsByTime(time);
}

export function getEventsByTitle(title: string): Promise<SocialEvent[]> {
    return attendDao.getEventsByTitle(title);
}



// export function saveReimbursement(reimbursement: any): Promise<ReimbursementPost> {
//     const newReimbursement = new ReimbursementPost(
//         undefined,
//         reimbursement.reimbAmount,
//         new Date(),
//         undefined,
//         reimbursement.reimbDescription,
//         reimbursement.reimbReceipt,
//         reimbursement.reimbAuthor,
//         null,
//         1,
//         reimbursement.reimbTypeId
//     );
//     if (reimbursement.reimbAmount && reimbursement.reimbDescription &&
//         reimbursement.reimbReceipt && reimbursement.reimbAuthor &&
//         reimbursement.reimbTypeId) {
//         return employeeDao.saveReimbursement(newReimbursement);
//     } else {
//         return new Promise((resolve, reject) => reject(422));
//     }
// }

// export function checkLoginCredentials(loginCredentials: any): Promise<LoginCredentials> {
//     const newLoginCredentials = new LoginCredentials(
//         loginCredentials.username,
//         loginCredentials.userPassword,
//         loginCredentials.userRole,
//         loginCredentials.userId,
//         loginCredentials.userRoleId
//     );
//     if (loginCredentials.username && loginCredentials.userPassword) {
//         return employeeDao.checkLoginCredentials(newLoginCredentials);
//     } else {
//         return new Promise((resolve, reject) => reject(422));
//     }
// }
