import { Container } from "@adminui-dev/antd-layout";
import { Col, Row, theme } from "antd";
import { AgentChartPanel, AreaChartPanel, TransformChartPanel } from "./components";
import useVisitChart from "../report/components";
const {useToken} = theme

export default function(){
    const {token} = useToken()
    const {detailsDrawer,showDetails} = useVisitChart()
    const pd = token.padding    
    return(
        <Container mode="box">
            {detailsDrawer}
            <AreaChartPanel />
            <Row gutter={[pd,pd]} style={{paddingBlockStart:pd}}>
                <Col 
                    xs={24}
                    sm={24}
                    md={24}
                    lg={12}
                    xl={16}>
                        <AgentChartPanel onMore={()=>{showDetails()}} />
                </Col>
                <Col 
                    xs={24}
                    sm={24}
                    md={24}
                    lg={12}
                    xl={8}>
                        <TransformChartPanel />
                </Col>
            </Row>            
        </Container>
    )
}