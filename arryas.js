console.clear()

var mFriends = ['Shaw', 'Ciara', 'Vab','Kun', 'Jacob',
'Diana', 'Shaurya','Apurva']

console.log(mFriends)
console.log(typeof(mFriends))

console.log(mFriends[2])
console.log(mFriends[0])
console.log(mFriends[6])
console.log(mFriends[7])

//Update a value
mFriends[0] = 'Shawn'
console.log(mFriends)

mFriends[8] = 'Twinkle'
console.log(mFriends)

mFriends[9] = 'Chiku'
console.log(mFriends)

mFriends[mFriends.length] = 'Rob'
console.log(mFriends)

mFriends.push('Jack')
console.log(mFriends)

//Delete a value
var mName = mFriends.pop()
console.log(mName)
console.log(mFriends)

var mName = mFriends.pop()
console.log(mName)
console.log(mFriends)

var mName = mFriends.pop()
console.log(mName)
console.log(mFriends)

var mName = mFriends.pop()
console.log(mName)
console.log(mFriends)