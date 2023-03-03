import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react'
import GlobalStyles from '../GlobalStyles';
import { addComment, deleteComment, fetchAllComments } from '../api/comments';
import { useSelector } from 'react-redux';

const Comments = ({ articleTitle, articleId }) => {

    const [comments, setComments] = React.useState(null);
    const [newComment, setNewComment] = React.useState("");
    const user = useSelector(state => state.userReducer.user);

    React.useEffect(() => {
        fetchAllComments(articleId, setComments);
    }, [comments]);

    // Add New Comment
    const handleAddComment = () => {
        addComment({
            comment: newComment,
            author: user.username,
            authorId: user._id,
            article: articleTitle,
            articleId: articleId
        });
        setNewComment("");
    }

    const renderComments = comments && comments.map((comment, id) => {
        return (
            <View style={styles.comment} key={id}>
                <View style={styles.commentDetails}>
                    <Text style={styles.author}>{comment.author}</Text>
                    <Text style={styles.date}>{new Date(comment.createdAt).toDateString()}</Text>
                </View>
                {/* Delete Button */}
                {user && user.username === comment.author
                    ?
                    <TouchableOpacity onPress={() => deleteComment(comment._id)}>
                        <Text style={styles.delete}>Delete</Text>
                    </TouchableOpacity>
                    :
                    null
                }
                <Text style={styles.commentText}>{comment.comment}</Text>
            </View>
        );
    });

    return (
        <View style={styles.comments}>
            <Text style={styles.commentTitle}>Comments</Text>
            {/* Add Comment */}
            {
                user ?
                    (
                        <View style={styles.newComment}>
                            <TextInput
                                style={styles.input}
                                value={newComment}
                                onChangeText={text => setNewComment(text)}
                                placeholder="Enter Comment..."
                            />
                            <TouchableOpacity style={styles.btn} onPress={handleAddComment} >
                                <Text style={styles.sendBtn}> {'>'} </Text>
                            </TouchableOpacity>
                        </View>
                    )
                    :
                    null
            }

            {/* All Comments */}
            {comments
                ? 
                renderComments
                : 
                <Text style={styles.noComments}>No Comments!</Text>    
            }
        </View>
    );
}

const styles = StyleSheet.create({
    comments: {
        width: '100%',
        minHeight: 100,
        backgroundColor: GlobalStyles.Color.black,
        paddingBottom: 30,
    },
    commentTitle: {
        textAlign: "center",
        color: GlobalStyles.Color.white,
        fontSize: GlobalStyles.FontSize.size_7xl,
        fontFamily: GlobalStyles.FontFamily.hammersmithOne,
        marginTop: 10,
        marginBottom: 10,
    },
    author: {
        color: GlobalStyles.Color.gray_200,
        fontSize: GlobalStyles.FontSize.size_3xl,
        fontFamily: GlobalStyles.FontFamily.hammersmithOne,
    },
    comment: {
        width: '95%',
        marginRight: 10,
        marginLeft: 10,
        marginBottom: 5,
        marginTop: 5,
        padding: 10,
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 5,
        fontFamily: GlobalStyles.FontFamily.hammersmithOne,
    },
    commentDetails: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    date: {
        fontFamily: GlobalStyles.FontFamily.hammersmithOne,
        color: GlobalStyles.Color.gray_200,
    },
    commentText: {
        color: GlobalStyles.Color.white,
        fontFamily: GlobalStyles.FontFamily.hammersmithOne,
        fontSize: GlobalStyles.FontSize.size_5xl,
        marginTop: 5,
        marginBottom: 5,
    },
    newComment: {
        width: '86%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    input: {
        color: GlobalStyles.Color.white,
        fontSize: GlobalStyles.FontSize.size_3xl,
        width: '95%',
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 5,
        marginRight: 10,
        marginLeft: 10,
        marginBottom: 5,
        marginTop: 5,
        padding: 10,
    },
    btn: {
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 5,
        marginTop: 5,
        width: 45,
        height: 45,
        display: 'flex',
        justifyContent: 'center',
        alignItem: 'center',
    },
    sendBtn: {
        color: GlobalStyles.Color.white,
        fontSize: GlobalStyles.FontSize.size_5xl,
        textAlign: 'center',
        fontWeight: '600',
        marginLeft: -5
    },
    delete: {
        color: 'rgba(255,50,100,1)',
    },
    noComments: {
        color: GlobalStyles.Color.white,
        fontSize: GlobalStyles.FontSize.size_4xl,
        textAlign: 'center'
    },
});

export default Comments;