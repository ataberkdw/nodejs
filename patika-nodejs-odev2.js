let posts = [
    {postId:1,post:"post 1"},
    {postId:2,post:"post 2"},
    {postId:3,post:"post 3"},
    {postId:4,post:"post 4"},
    {postId:5,post:"post 5"},
    {postId:6,post:"post 6"},
]

const listPosts = () =>{
    posts.map(post=>{
        console.log(`postId: ${post.postId} post:${post.post}`)
    })
}

const addPost= ()=>{
    const promise = new Promise((resolve,reject)=>{
        posts.push(posts)
        resolve(posts)
    })
    return promise;
}
listPosts()
addPost({postId:6,post:"post 6"}).then(value=>{
    console.log(`postId: ${post.postId} post:${post.post}`)
})