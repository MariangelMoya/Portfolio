export default interface Project {
    id: number,
    image: string,
    title: string,
    description: string,
    type: 'Website' | 'UI & UX',
    languages: string[],
    live_url: string | null
    created_at: string

}