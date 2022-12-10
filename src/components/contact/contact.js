import React from "react";
import { Button, Col, Form, Input, notification, Row } from "antd";
import TextArea from "antd/es/input/TextArea";
import { SendOutlined } from '@ant-design/icons';

const Contact = () => {
    const [api, contextHolder] = notification.useNotification();
    const [form] = Form.useForm();

    const onFinish = () => {
        form.resetFields();
        api.success({
            message: 'Good news !',
            description: 'Your messages has been sent !',
            placement: 'bottomRight'
        });
    }

    const validationMessages = {
        required: "${label} is required!",
        types: {
            email: "${label} is not valid!"
        }
    }

    return (
        <>
            {contextHolder}
            <Row style={{
                marginTop: "5vh"
            }}>
                <Col span={9}>

                </Col>
                <Col span={6}>
                    <Form form={form} name="contact-form" wrapperCol={{ span: 24 }} onFinish={onFinish} validateMessages={validationMessages} layout="vertical">
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
                        <Row>
                            <Col span={24} style={{
                                textAlign: 'right'
                            }}>
                                <Form.Item>
                                    <Button type="primary" htmlType="submit" size="large">Send <SendOutlined /></Button>
                                </Form.Item>
                            </Col>
                        </Row>

                    </Form>
                </Col>
                <Col span={9}>

                </Col>
            </Row>
        </>
    );
}

export default Contact;