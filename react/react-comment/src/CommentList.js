import Comment from "./Comment";

const comments = [
    { name: "류웨이", comment: "좋은것이 없다고 했습니다." },
    { name: "우중", comment: "모델링 실험실을 만들었습니다." },
    { name: "솔론", comment: "정상화 실시" },
];

function CommentList(props) {
    return (
        <div>
            {
                comments.map((v, i) => {
                    return (
                        <Comment key={i} name={v.name} comment={v.comment} />
                    )
                })
            }
        </div>
    )
}
export default CommentList;
