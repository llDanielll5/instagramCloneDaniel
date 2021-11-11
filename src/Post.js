import {db} from './firebase';
import {useEffect, useState} from 'react';
import App from './App';
import firebase from 'firebase';


function Post(props){

    const [comentarios, setComentarios] = useState([]);

    useEffect(function(){
        db.collection('posts').doc(props.id).collection('comentarios').orderBy('timestamp','desc').onSnapshot(function(snapshot){
            setComentarios(snapshot.docs.map(function(document){
                return {id:document.id,info:document.data()}
            }))
        })
    }, [])



    function comentar(id, e){
        e.preventDefault();
        let comentarioAtual = document.getElementById('comentario-'+id).value;


        db.collection('posts').doc(id).collection('comentarios')
        .add({
            nome: props.user,
            comentario: comentarioAtual,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        alert('comentario feito');
        document.querySelector('#comentario-'+id).value = "";
    
    }



    return(

        <div className="postSingle">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"></link>
            <div className="nomeTitular">
                <div className="iconePerfil"></div>
                <p><b>{props.info.userName}</b></p>
                <i className="fas fa-ellipsis-h"></i>
            </div>
            

                <img src={props.info.image}/>
                <span className="titulo-single"><b>{props.info.userName}</b> {props.info.titulo}</span>
                <div className="icons">
                    <i className="far fa-heart"></i>
                    <i className="far fa-comment"></i>
                    <i className="fas fa-share-alt"></i>
                    <div className="compartilhar"><i className="fab fa-font-awesome-flag"></i></div>
                </div>
                <div className="coments">
                    <h2>Últimos comentários</h2>
                    {
                        comentarios.map(function(val){
                            return(
                                <div className="coment-single">
                                    <p><b>{val.info.nome}</b> : {val.info.comentario}</p>
                                </div>
                            )
                        })
                    }
                </div>
                {
                    (props.user)?
                <form onSubmit={(e)=>comentar(props.id,e)}>
                    <textarea id={"comentario-"+props.id}></textarea>
                    <div className="botoesComentar">
                        <input type="submit" value="Comentar!"/>
                        <i className="far fa-heart"></i>
                        <i className="far fa-comment"></i>
                        <i className="fas fa-share-alt"></i>
                    </div>
                </form>
                :
                <div></div>
                }
        </div>

    )


}

export default Post;