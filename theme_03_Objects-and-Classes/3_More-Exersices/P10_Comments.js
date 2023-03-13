function comments(input) {
    let articlesWithCommentsMap = [];
    let usersWithCommentsMap = {};

    for (const line of input) {
        commandParser(line);

    }

    function commandParser(line) {
        if (line.startsWith("user ")) {
            let userName = line.slice("user ".length);
            return addUser(userName);

        } else if (line.startsWith("article ")) {
            let articleTitle = line.slice("article ".length);
            return addArticle(articleTitle);

        } else {
            let username = line.slice(0, line.indexOf("posts on ") - 1);
            let article = line.slice((line.indexOf("posts on ") + "posts on ".length), line.indexOf(": "));
            let [commentTitle, commentContent] = line.slice(line.indexOf(": ") + ": ".length).split(", ");
            return addComment(username, article, commentTitle, commentContent);
        }
    }

    Object.entries(articlesWithCommentsMap)
        .sort((entryA, entryB) => entryB[1].length - entryA[1].length)
        .forEach(([article, commentsArr]) => {
            console.log(`Comments on ${article}`);
            commentsArr
                .sort((commentA, commentB) => commentA.user.localeCompare(commentB.user))
                .forEach(comment => console.log(`--- From user ${comment.user}: ${comment.title} - ${comment.content}`));
        })

    function addUser(userName) {
        usersWithCommentsMap[userName] = [];
    }

    function addArticle(articleTitle) {
        articlesWithCommentsMap[articleTitle] = [];
    }

    function addComment(user, article, commentTitle, commentContent) {
        if (usersWithCommentsMap.hasOwnProperty(user) && articlesWithCommentsMap.hasOwnProperty(article)) {
            let comment = { title: commentTitle, content: commentContent, article, user };
            usersWithCommentsMap[user].push(comment);
            articlesWithCommentsMap[article].push(comment);
        }
    }
}

comments(
    ['user aUser123', 'someUser posts on someArticle: NoTitle, stupidComment', 'article Books', 'article Movies', 'article Shopping', 'user someUser', 'user uSeR4', 'user lastUser', 'uSeR4 posts on Books: I like books, I do really like them', 'uSeR4 posts on Movies: I also like movies, I really do', 'someUser posts on Shopping: title, I go shopping every day', 'someUser posts on Movies: Like, I also like movies very much']
);