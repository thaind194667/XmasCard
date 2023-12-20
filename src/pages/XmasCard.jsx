// import { Button } from "antd";


export default function XmasCard ({data, closeCard}) {

    console.log('====================================');
    console.log(data);
    console.log('====================================');

    return (
        <div style={{
            width: '100%',
            minHeight: '100%',
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
            }}>
                {/* <Button type="primary" onClick={closeCard}>
                    Trở về
                </Button> */}
            </div>

            <div className="card-container">
                <div className="card-top">
                    <img src="/mail_top.jpg" />
                </div>

                <div className="card-mid">
                    <div className="card-gif">
                        <img src="/video.gif" />
                    </div>

                    <div className="card-content">
                        <div className="receiver">
                            #MS3,
                        </div>

                        <div className="main-pray">
                            Merry Christmas
                        </div>

                        <div className="pray">
                            With all good wishes for a brilliant and happy Christmas season. Hope things are going all right with you.
                        </div>

                        <div className="sender">
                            Sender <br/>
                            From Polymer & Composite- Hust
                        </div>
                    </div>
                </div>

                <div className="card-bottom">
                    <img src="/mail_bottom.jpg" />

                </div>
            </div>


        </div>
    )
    
}