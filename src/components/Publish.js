import React, {useState} from "react";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Color from './Color'
import axios from 'axios';

export default function Publish(props) {
    const [publishing, setPublishing] = useState(false);
    const [content, setContent] = useState('');
    const [title, setTitle] = useState('');
    const [color, setColor] = useState(1);

    const getWritings = props.getWritings;
    const nickname = props.nickname;
    const id = props.id;

    const clickNewPostButton = () => {
        setPublishing(true);
    }

    const clickCancelButton = () => {
        setPublishing(false);
    }

    const clickPublishButton = () => {
        const publishWritingUrl = '/board';

        const data = {
            title: title,
            authorId: id,
            authorNickname: nickname,
            content: content,
            color: color
        }

        axios.post(publishWritingUrl, data)
            .then(resp => {
                alert('publish complete');
                setPublishing(false);
                getWritings();
            })
            .catch(err => {
                alert("[error] " + err);
            })
    }
    
    return (
        <div>
            {publishing ? 
            <>
                <div style={{width:'100%', height:'100%', position:'fixed', top:'0', display:'flex', alignItems:'center'}}>
                    <div style={{width:'80%', maxWidth:'600px', height:'480px', backgroundColor:'#EDECF2', margin:'0 auto', padding:'30px'}}>
                        <Form.Control as="textarea" rows={1}
                            placeholder="title" 
                            onChange={(e) => setTitle(e.target.value)}
                            style={{marginBottom:'10px'}}/>

                        <Form.Control as="textarea" rows={9}
                            placeholder="content"     
                            onChange={(e) => setContent(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && clickPublishButton()}/>
            
                        <Color setColor={setColor}></Color>

                        <div className="mt-4 d-flex justify-content-end">
                            <Button variant="success" className="m-2"
                                onClick={(() => clickPublishButton())}>
                                Publish
                            </Button>
                                    
                            <Button variant="light" className="m-2" 
                                onClick={(() => clickCancelButton())}>
                                Cancel
                            </Button>
                        </div>
                    </div>
                </div>
            </>
            :<>
                <div style={{position:'fixed', bottom:'0', margin:'14px', width:'100%'}}>
                    <Button variant="success" style={{width:'300px', zIndex:'2'}}
                        onClick={(() => clickNewPostButton())}>
                        New Post
                    </Button>
                </div>
            </>}

         

            
        </div>
       
    )

}