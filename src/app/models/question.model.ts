export interface Question{
    id?: number;
    upvotes: number;
    downvotes: number;
    body: string;
    author: string;
    authorId: number;
    created_at: number;
    answer_count: number;
    upvoted?: boolean;
    downvoted?: boolean;
}