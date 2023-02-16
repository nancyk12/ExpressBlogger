let blogsValidation = (blogInfo)=> {
    console.log("array ", array)
    console.log("filteredArray ", filteredArray)

    if(blogInfo.title === undefined || typeof(blogInfo.title) !== "string" || blogInfo.title.length > 40) {
        return {
            isValid: false,
            message: "title is required. should be a string"
        }
    }
    if (blogInfo.category === undefined || !Array.isAarry(blogInfo.category) || blogInfo.category.length === 0) {
        return {
            isValid: false,
            message: "category is required"
        }

        if (blogInfo.text === undefined || typeof(blogInfo.text) !== "string") {

            return {
                isValid: false,
                message: "blog is reqired, should be a string"
            }
        }

        if (blogInfo.author === undefined || typeof(blogInfo.author) !== "string" || blogInfo.author.length > 40 ) {
            return {
                isValid: false,
                message: "Author is required, should be a string"
            }
        }
    }

    let newArrayCategories = ["Lorem", "ipsom", "dolor", "sit", "amet"];
    let isValid = true;

        blogInfo.category.forEach(category => {

            console.log(category)
            if(!newArrayCategories.includes(category)){

                isValid = false
            }
        })

        if (isValid === false){

            return {
                isValid: false,
                message: "category must include categories Lorem, ipsom, dolor, sit, amet"
            }
        }

    if (blogInfo.category.length > 10){

        return {
            isValid: false,
            message: "categories must be of type Lorem, ipsum, dolor, sit, or amet, and under 10 categories."
        }
    }   
    

    let freshBlogInfo = blogInfo.category.filter((blogs)=>{


        if (typeof(blogs) !== 'string') {
            return true
        } else {
            return false
        }
    })

    console.log("blogs", freshBlogInfo)

    if (freshBlogInfo.length > 0) {
        return {
            isValid: false,
            message: "caegory should be an array of strings"
        }
    }
    return {
        isValid: true
    }
}

module.exports = {

    blogsValidation,
}
