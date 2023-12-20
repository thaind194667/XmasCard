import { Form, Input, Button, Row } from "antd";
import { useEffect, useState } from "react";

export default function HomePage ({openCard, sendData}) {

    const [form] = Form.useForm();
    const [logoImg, setLogoImg] = useState();

    useEffect(() => {
        form.setFieldValue('logo', logoImg)
    }, [logoImg])

    const submit = (values) => {
        console.log(values);
        sendData(values);
    }

    const uploadLogoImage = () => {
        document.querySelector('.logo-image-upload').click();
    }

    const handleUploadLogoImg = (e) => {
        const file = e.target.files[0];
        file.url = (URL.createObjectURL(file));
        setLogoImg(file)
    }

    return (
        <>
            <Form form={form}
                onFinish={submit}
                layout="vertical"
                style={{
                    width: '60vw',
                    padding: '10px 40px',
                    fontWeight: 600,
                }}
            >
                <Row style={{marginBottom: '50px'}}> 
                    <Button type="primary" onClick={openCard}>Mở Card mẫu mặc định</Button>
                </Row>
                <Form.Item label="Người nhận" name="receiver">
                    <Input />
                </Form.Item>
                <Form.Item label="Người gửi" name="sender">
                    <Input.TextArea />
                </Form.Item>
                <Form.Item label="Lời chúc" name="pray">
                    <Input.TextArea />
                </Form.Item>
                <Form.Item label="Logo" name="logo">
                    <div style={{textAlign: 'left'}}>
                        <Button onClick={uploadLogoImage}>Chọn ảnh</Button>

                    </div>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        border: 'solid 0.5px',
                        borderRadius: '4px',
                        justifyContent: 'center',
                        width: '200px', 
                        height: '100px',
                        position: 'relative'
                    }}>
                        <input type='file' accept='image/*' className='logo-image-upload' onChange={handleUploadLogoImg} hidden/>
                        <img style={{width: '100%', height: '100%', position: 'absolute', borderRadius: '4px'}} src={logoImg ? logoImg.url : '/logo_choose.jpg'} />
                    </div>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit"> 
                        Gửi
                    </Button>
                </Form.Item>
            </Form>
        </>
    )

}