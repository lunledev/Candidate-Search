// TODO: Create an interface for the Candidate objects returned by the API

export default interface Candidate{
    candidate_name: string | null;
    id:     number| null;
    username: string| null;
    location: string| null;
    avatar_url: string | null;
    email: string| null;
    html_url: string| null;
    company: string| null;

}
