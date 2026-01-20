import { Container } from "@adminui-dev/antd-layout"
import { SalesDeviceChart, SalesOsChart, SalesReportHeader } from "./components"
import { Col, Row, theme } from "antd"

const {useToken} = theme

/**
 * Sales report - page
 * @returns 
 */
export default function(){
    const {token} = useToken()
    const pd = token.padding
    return(
        <Container mode="box">
            <SalesReportHeader />
            <Row gutter={[pd,pd]} style={{paddingBlockStart:pd}}>
                <Col 
                    xs={24}
                    sm={24}
                    md={24}
                    lg={12}
                    xl={16}>
                        <SalesOsChart />
                    </Col>
                <Col 
                    xs={24}
                    sm={24}
                    md={24}
                    lg={12}
                    xl={8}>
                        <SalesDeviceChart />
                    </Col>
            </Row>
        </Container>
    )
}