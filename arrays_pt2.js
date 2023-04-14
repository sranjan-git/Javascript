console.clear()

var mFriends = ['Shaurya', 'Apurva', 'Twinkle','Chiku','Dina', 'Jacob']
mFriends.splice(3,0,'Donna', 'Rachel')

//1st tell wher to start
//2nd tells how many items to be deleted
//3rd and 4th and so on tells what items to be added
console.log(mFriends)

mFriends.splice(0,0,'Harvey')
console.log(mFriends)

//Delete item at specific position
mFriends.splice(2,1)
console.log(mFriends)

mFriends.splice(0,2)
console.log(mFriends)

//Concatenation
var mOfficeFriends = ['Nina','Aaron', 'Shaurya', 'Apurva', 'Twinkle', 'Chiku', 'Sudhanshu']
var mAllFriends = mFriends.concat(mOfficeFriends)

console.log('============')
console.log(mFriends)
console.log(mOfficeFriends)
console.log(mAllFriends)

//Sorting Ascending and Descending 

mAllFriends.sort()
console.log(mAllFriends)

mAllFriends.reverse()
console.log(mAllFriends)




