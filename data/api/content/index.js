const BASE_URL = 'http://178.128.215.253'
const API_KEY = '81b167225780a8fc512bcbbf3a'
const POST_FIELD = 'id,title,html,slug'

export async function fetchContentPosts() {
    const res = await fetch(BASE_URL + `/ghost/api/content/posts/?key=${API_KEY}&fields=${POST_FIELD}`);
    return await res.json();
}

export async function fetchPostDetail(slug) {
    const res = await fetch(BASE_URL + `/ghost/api/content/posts/slug/${slug}/?key=${API_KEY}&fields=${POST_FIELD}`);
    return await res.json();
}