export interface Notif{
    id?: number;
    userId : number;
    questionId: number;
    answer_author: string;
    created_at : number;
    opened? : boolean;
}