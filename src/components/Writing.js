import React, {useState} from "react";

import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Color from './Color'


function AlwaysOpenExample(props) {
    const writing = props.writing;

    const [editing, setEditing] = useState(false);
    const [modifyTitle, setModifyTitle] = useState('');
    const [modifyContent, setModifyContent] = useState('');
    const [modifyColor, setModifyColor] = useState(writing.color);

    const color = [
        '#C6DBDA',
        '#FEE1E8',
        '#FED7C3',
        '#F6EAC2',
        '#ECD5E3'
    ]

    const borderColor = color[writing.color];

    const clickModifyButton = () => {
        setEditing(true);
    }

    const clickDeleteButton = (writing) => {
        

    }

    const clickCompleteButton = (writing) => {
        setEditing(false);
        
    
    }

    const clickCancelButton = () => {
        setEditing(false);
    }

    return (
        <div className="m-4" style={{border: '4px solid', borderColor: borderColor, borderRadius: '10px'}}>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        <div style={{display: 'flex', flexDirection:'column'}}>
                            <h4>
                            {editing ?
                                <>
                                    <Form.Control as="textarea" rows={1}
                                    onChange={(e) => setModifyTitle(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && clickCompleteButton(writing)}
                                    placeholder={writing.title}
                                    />
                                </>
                                :
                                writing.title
                            
                            }
                            </h4>

                            <p>{writing.author}</p>
                        </div>
                        
                        
                        
                    </Accordion.Header>

                    <Accordion.Body>
                        {editing ? 
                            <>
                                <Form.Control as="textarea" rows={4}
                                    onChange={(e) => setModifyContent(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && clickCompleteButton(writing)}
                                    placeholder={writing.content}
                                />

                                <Color
                                    setColor={setModifyColor}></Color>

                                <div className="mt-4 d-flex justify-content-end">
                                    <Button variant="light" className="m-2"
                                        onClick={() => clickCompleteButton(writing)}>
                                        Complete
                                    </Button>

                                    <Button variant="secondary" className="m-2" 
                                        onClick={() => clickCancelButton()}>
                                        Cancle
                                    </Button>{' '}
                                </div>
                            </> 
                            : <>
                                {writing.content}

                                <div className="mt-4 d-flex justify-content-end">
                                    <Button variant="light" className="m-2"
                                        onClick={() => clickModifyButton()}>
                                        Modify
                                    </Button>
                                    
                                    <Button variant="danger" className="m-2" 
                                        onClick={() => clickDeleteButton(writing)}
                                    >Delete</Button>{' '}
                                </div>
                            </>}        
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
  }

  export default AlwaysOpenExample;