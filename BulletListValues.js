import {Col, Image, Row} from "react-bootstrap";
import RED_DOT from "../assets/red_dot.svg";
import React from "react";

export default function BulletList({list,list1,list_name}) {

  return (
    <Row className={'bullet_list'}>
   
      {list.map((k, v) => (
        <Col key={v.toString()} xs={12}>
          <div className={'dots'}>
            <div className={'circle'}>
              <Image src={RED_DOT}/>
            </div>

            {list.length !== v + 1 ? <div className={'line'}/> : null}
          </div>
          {list1!== null && v==0?  <div className={'container-fluid'}><h5><a href={list1}>Click here to download- {list_name}</a></h5></div> : <div className={'container-fluid'}><h5>{k}</h5></div>
}
         
        </Col>
      ))}
    </Row>
  )
}
