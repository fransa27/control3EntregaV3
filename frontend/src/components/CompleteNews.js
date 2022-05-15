import React, { Children } from "react";
import styled from "styled-components";
import {Button,Row, Col, Container} from "react-bootstrap"
import {useState} from 'react'
import a from "../layout/layout"


function CompleteNew ({children, estado, cambiarEstado,props})  {
    
    
    return (
        <>
            {estado &&
                <Overlay>
                    <Contenedor>
                        <Encabezado></Encabezado>
                        <div>
                            <section id = "CompleteNew">
                                <Container>
                                    <Row>
                                        <Col>
                                        <h1> abc </h1>
                                        </Col>
                                    </Row>
                                </Container>
                            </section>

                            
                            
                        </div>

                        <Button onClick={() => cambiarEstado(false)}>X</Button>

                        {children}

                    </Contenedor>
                    
                </Overlay>
            }
            
        </>
    );
}

export default CompleteNew;

const Overlay = styled.div`
    width:100vw;
    heigth:100vh;
    position:fixed;
    top:0;
    left:0;
    background: rgba(0,0,0,.5);
    padding: 40px;
    display: flex;
    alingn-items: center;
    justify-content:center;

`;

const Contenedor = styled.div`
    width:500px;
    min-heigth:100px;
    background: #fff;
    position: relative;
    border-radius: 5px;
    box-shadow:rgba(100,100,111,0.2) 0px 7px 29px 0px;
    padding:20px;
`;

const Encabezado = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    padding-bottom:20px;
    border-bottom: 1px solid #E8E8E8;

    h3 {
        font-weigth:500;
        font-size:16px;
        color: #1766DCL;
    }
`;

const BotonCerrar = styled.div`
    position: absolute;
    top: 15px;
    right: 15px;

    width: 30px;
    height: 30px;
    border: none;
    background: none;
    cursor: pointer;
    transition: .3s ease all;
    border-redius: 5px;
    color: #1766DC;
    

    &:hover{
        background: #f2f2f2
    }
`;





/*import React, {Component} from 'react'
import {Row,Col} from 'react-bootstrap'
import {withRouter} from 'react-router-dom';
import {Button} from 'react-bootstrap';

function NewCompletes (props){

    return (
    <ul className="arrow-styled">
                            {
                                props.News.map((News,index) => (
                                    <div key={index} className='row'>
                                        <Row>
                                            <Col><h3>{News.title}</h3></Col>
                                            <Col><h1>{News.date}</h1></Col>
                                            <Col><h2>{News.longDescription}</h2></Col>
                                        </Row>
                                    </div>
                                ))
                            }
                        </ul>
    );

        return (
            <div>
                <Button>aaaa</Button>
                
            </div>
        )
    
}
    
export default NewCompletes*/

/*
<ul className="arrow-styled">
                            {
                                props.news.map((index) => (
                                    <div key={index} className='row'>
                                        <Row>
                                            <Col><h3>{"title"}</h3></Col>
                                            <Col><h1>{"date"}</h1></Col>
                                            <Col><h2>{"longDescription"}</h2></Col>
                                        </Row>
                                    </div>
                                ))
                            }
                        </ul>
*/

/*
<section id="noticiacompleta">
                            <Container>
                                <Row>
                                    <div className="col-12 text-left">
                                        <ul className="arrow-styled">
                                            {
                                                props.Newss.map((noticia, index) => (
                                                    <div key={index} className='row'>
                                                        <h1>{noticia.news.title}</h1>
                                                    </div>
                                                ))
                                            }

                                        </ul>

                                    </div>
                                </Row>
                            </Container>
                        </section> */