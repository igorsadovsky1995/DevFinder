export type LocalGitHubUser = {
    login?: string | undefined;
    avatar?: string;
    name?: string | null;
    company?: string | null;
    blog?: string | null;
    location?: string | null;
    bio?: string | null;
    twitter?: string | null;
    repos?: number;
    followers?: number;
    following?: number;
    created?: string;
}

export interface GitHubUser {
    login?: string | undefined;
    avatar_url?: string;
    name?: string | null;
    company?: string | null;
    blog?: string | null;
    location?: string | null;
    bio?: string | null;
    twitter_username?: string | null;
    public_repos?: number;
    followers?: number;
    following?: number;
    created_at?: string;
}

export type GitHubError = {
    message: string,
    documentation_url: string
}