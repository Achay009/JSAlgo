/**
 * @param {string[]} username
 * @param {number[]} timestamp
 * @param {string[]} website
 * @return {string[]}
 */
var mostVisitedPattern = function(username, timestamp, website) {
    let userWebsiteDict = {}
    for( let userIndex = 0; userIndex < username.length; userIndex++){
        if (!userWebsiteDict[username[userIndex]]){
            userWebsiteDict[username[userIndex]] = {
                website : [],
                timestamp : []
            }
        }
        userWebsiteDict[username[userIndex]]['website'].push(website[userIndex])
        userWebsiteDict[username[userIndex]]['timestamp'].push(timestamp[userIndex])
    }
    // console.log(userWebsiteDict)
    const websiteUserDict = {}
    for (const user in userWebsiteDict){
        let key = userWebsiteDict[user]['website'].join('->')
        if (!websiteUserDict[key]){
            websiteUserDict[key] = []
        }
        websiteUserDict[key].push(user)
    }

    // console.log(websiteUserDict)

    let max = 0
    let maxWeb = []
    for (const webLink in websiteUserDict){
        let temp = max
        max = Math.max(websiteUserDict[webLink].length, max)
        if (max == temp){
            if (maxWeb != webLink.split('->')){
                maxWeb = maxWeb > webLink.split('->') ? webLink.split('->') : maxWeb
            }else{
                maxWeb = maxWeb
            }
        }else{
            maxWeb = webLink.split('->')
        }
    }
    console.log(maxWeb.sort((a, b) => {return b - a}))
};


// mostVisitedPattern(["joe","joe","joe","james","james","james","james","mary","mary","mary"], [1,2,3,4,5,6,7,8,9,10], ["home","about","career","home","cart","maps","home","home","about","career"])

// mostVisitedPattern(["ua","ua","ua","ub","ub","ub"], [1,2,3,4,5,6], ["a","b","c","a","b","a"])
mostVisitedPattern(["dowg","dowg","dowg"], [158931262,562600350,148438945], ["y","loedo","y"])