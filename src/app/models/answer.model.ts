export interface Answer{
    id?: number;
    upvotes: number;
    downvotes: number;
    body: string;
    author: string;
    authorId: number;
    created_at: number;
    questionId: number;
    upvoted?: boolean;
    downvoted?: boolean;
}