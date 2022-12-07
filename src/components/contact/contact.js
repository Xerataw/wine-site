import React from "react";
import { Button, Col, Form, Input, Row } from "antd";
import TextArea from "antd/es/input/TextArea";

const Contact = () => {

    const onFinish = () => {
        alert("finished")
    }

    const validationMessages = {
        required: "${label} is required!",
        types: {
            email: "${label} is not valid!"
        }
    }

    return (
        <Row>
            <Col span={9}>

            </Col>
            <Col span={6}>
                <Form name="contact-form" wrapperCol={{ span: 24 }} onFinish={onFinish} validateMessages={validationMessages} layout="vertical">
                    <Form.Item label="First name" name="fname" rules={[{
                        required: true,
                    }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Last name" name="lname" rules={[{
                        required: true,
                    }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Email" name="email" rules={[{
                        type: 'email',
                        required: true,
                    }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Message" name="message" rules={[{
                        required: true,
                    }]}>
                        <TextArea autoSize={{
                            minRows: 4,
                            maxRows: 4
                        }} />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">Send</Button>
                    </Form.Item>
                </Form>
            </Col>
            <Col span={9}>

            </Col>
        </Row>
    );
}

export default Contact;