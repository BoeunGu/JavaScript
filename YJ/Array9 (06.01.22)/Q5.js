const commentInput = document.getElementById('user-comment-input') // 사용자 댓글 입력창
const userComments = document.getElementById('user-comments') // 사용자 댓글 리스트 출력

const submitBtn = document.getElementById('user-comment-add') //  사용자 댓글 추가 버튼
const comments = [] // 사용자 댓글목록 배열
const insults = ['shit', 'fuck', 'poop', 'dumb', '새끼', '놈', '똥', '씨발', '좇', '시발', '좆', '죽어', '뒤져', '병신', '년']
let copiedComment =''

// 댓글 정보로부터 댓글에 대한 DOM 객체 생성 및 반환
function buildElement(comment){
   // 구현하기
   const commentInfo = document.createElement('div')
   commentInfo.className ='comment'
   commentInfo.innerHTML=`
   <div> ${comment}</div>`

   return commentInfo
}
// comments 배열을 이용하여 화면에 댓글목록 보여주기
function displayComments(comments){
    userComments.innerHTML = ''
    // 구현하기
    comments.forEach(comment=> {
        userComments.appendChild(buildElement(comment))
    })

}

// 입력창 초기화
function initInput(){
    commentInput.value = ''
}

// 댓글 추가하기
function addComment(){
    const comment = commentInput.value
    copiedComment=comment
    
    // const test = comment.split(' ').map(word => {
    //     wo
    // })

    if(copiedComment !== ''){
        

        // 구현하기

        comments.push(findshit(copiedComment))
        displayComments(comments)
        initInput()
    }else{
        alert('You need to give a comment !')
    }
}

// 댓글을 쪼개는 함수
function ( ){}

function findshit(copiedComment){
    
    // ver 11111111111111
    // const Rowcomment = copiedComment.split(' ')
    // .map(r=>{
    //     return r=insults.includes(r)? `😊` : r
    // })
    // .join(' ')

    // return Rowcomment

    //ver222222222222
    // insults.forEach(i=> {
    //     if(Rowcomment.includes(i)){
    //         let foundIndex =Rowcomment.indexof(i)
    //         let RowcommentArray = Rowcomment.split('')

    //         while(foundIndex != -1){
    //             RowcommentArray.splice(foundIndex,i.length,'😊')
    //             foundIndex=RowcommentArray.indexof(i,foundIndex+i.length)
    //         }
    //     }
    // })
    // return RowcommentArray.join()

    //ver 33333333333333333333333
    // let noSpaceComment = copiedComment.split('')
    // insults.forEach(i=> {
        
    //     //noSpaceComment.split('')
    //     if(copiedComment.includes(i)){
    //         let foundIndex = copiedComment.indexOf(i)

    //         while(foundIndex != -1){
    //             noSpaceComment.splice(foundIndex,i.length,'😊')
    //             const words=noSpaceComment.join('')
    //             noSpaceComment=words.split('')
    //             foundIndex = noSpaceComment.indexOf(i)
    //                         }
    //     }
    // })
    //return noSpaceComment.join('')
    // ver 444444444444444444444444444444
    let result = []
    let noSpaceComment = copiedComment.split(' ') 
    
    if(!(insults.filter(i=>copiedComment.includes(i)))){ return noSpaceComment.join(' ')}
    else{
    for(no of noSpaceComment){
        insults.forEach(i=> {
            if(no.includes(i)){
                let foundindex = no.indexOf(i)
                let finalWord = no.split('')
                while(foundindex !=-1){
                    finalWord.splice(foundindex,i.length,'😊')
                    foundindex = finalWord.indexOf(i,foundindex+1)
                }
                const resultWord = finalWord.join('')
                result.push(resultWord)
                
            }
        })
        return result.join(' ')
    }}

    
    
}

submitBtn.addEventListener('click', addComment)


//야이 씨발 새끼야 그냥 넌 뒤져