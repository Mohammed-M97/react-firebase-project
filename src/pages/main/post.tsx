import { addDoc, getDocs, collection, query, where, deleteDoc, doc } from 'firebase/firestore';
import { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../../config/firebase';
import { Post as IPost } from "./main";

interface props {
    post: IPost;
}

interface Like {
    likeId: string;
    userId: string;
}


function Post(props: props) {
    const  { post } = props;
    const [user] = useAuthState(auth);

    const [likes, setLikes] = useState<Like[] | null>(null)
    
    const likesRef = collection(db, "likes");

    const likesQuery = query(likesRef, where("postId", "==", post.id));

    const getLikes =async () => {
        const data = await getDocs(likesQuery);
        setLikes(data.docs.map((doc) => ({ userId: doc.data().userId, likeId: doc.id })));
        
    };

    const addLike = async () => {
        try {
            const newDoc = await addDoc(likesRef, { userId: user?.uid , postId: post.id });
            if (user) {
                setLikes((prev) => {
                    return prev ? 
                    [...prev, {userId: user.uid, likeId: newDoc.id}] :
                    [{userId: user.uid, likeId: newDoc.id}]
                })
            }
        } catch (error) {
            console.log(error);
            
        }
    };

    const removeLike = async () => {
        try {
            const deleteLikeQuery = query(likesRef, where("postId", "==", post.id), where("userId", "==", user?.uid));

            const deleteLikeData = await getDocs(deleteLikeQuery);

            const likeId = deleteLikeData.docs[0].id;

            const deleteLike = doc(db, "likes", likeId);
            
            await deleteDoc(deleteLike);
            if (user) {
                setLikes((prev) => {
                    return prev && prev.filter((like) => {
                        return like.likeId !== likeId;
                    })
                })
            }
        } catch (error) {
            console.log(error);
            
        }
    };

    const hasUserLikes = likes?.find((like) => {
        return like.userId === user?.uid;
    })

    useEffect(() => {
        getLikes();
    }, []);
    return (
    <div className="box">
      <h2>{post.title}</h2>
      <p>{post.description}</p>
      <p>{post.username}</p>
      <a href="#" className="btn" onClick={hasUserLikes ? removeLike : addLike}>
        {hasUserLikes ? <>&#128078;</> : <>&#128077;</>}
      </a>
        {likes && <p>Likes: {likes?.length}</p>}
    </div>
  )
}

export default Post
