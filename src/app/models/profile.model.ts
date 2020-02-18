export interface Profile{
    id?: number;
    email?: string;
    first_name: string;
    last_name: string;
    password? : string;
    answer_count: number;
    question_count: number;
}