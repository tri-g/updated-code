import {Button, Col, Image, Row} from "react-bootstrap";
import RED_DOT from "../../assets/red_dot.svg";
import BulletList from "../../components/BulletList";
import BulletListValues from "../../components/BulletListValues";

import React from "react";

export default function CustomerValues({show_value_modal, setValueModal, details}) {
  if (Object.keys(show_value_modal).length === 0) {
    return (
      <div className={'row_detail'}>
        <div className={'impact_content row'}>
          <Row className={'align-items-center'}>
            <Col sm={6} xs={12}>
              <Row className={'bullet_list'}>
                {details.values.map((k, v) => (
                  <Col key={v.toString()} xs={12}>
                    <div className={'dots'}>
                      <div className={'circle'}>
                        <Image src={RED_DOT}/>
                      </div>
                      {details.values.length !== v + 1 ? <div className={'line'}/> : null}
                    </div>
                    <div className={'year-with-button'}>
                      <h6>{k.year}</h6>
                <Button onClick={() => setValueModal(k)} variant={'link'}>{k.value}</Button>
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
            <Col sm={6} xs={12}>
              <div className={'yellow_border'}>
                <BulletList list={details.timeline}/>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    )
  } else {
    return (
      <div className={'row_detail'}>
        <div className={'impact_content row'}>
          <Row className={'w-100'}>
            <Col>
              <div className={'d-flex m-0'}>
                <h6 className={'pr-3'}>{show_value_modal.year}</h6>
                <Button className={'custom_button'}
                        variant="link">{show_value_modal.value}</Button>
              </div>
            </Col>
            <Col>
              <Button onClick={() => setValueModal({})} className={'float-right back_button'}
                      variant={'link'}>Back</Button>
            </Col>
          </Row>
          <p className={'mt-3'}><i>{show_value_modal.about}</i></p>
          <Row className={'align-items-center'}>
            <Col sm={6} xs={12}>
              <video src={show_value_modal.video_link} controls/>
              <h6>{show_value_modal.video_description}</h6>
            </Col>
            <Col sm={6} xs={12}>
              <BulletListValues list={details.timeline} list1={show_value_modal.casestudy_link} list_name={show_value_modal.casestudy_name}/>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}
