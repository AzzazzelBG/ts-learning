export interface ApiResponse<T> {
    success: boolean;
    data: T;
    error?: string;
};

export type RequestState<T> =
    | { status: "loading" }
    | { status: "success"; data: T }
    | { status: "error", message: string };